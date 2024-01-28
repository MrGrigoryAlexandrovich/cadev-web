import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactSec = () => {
  const getFormSettings = () =>
    yup
      .object()
      .shape({
        name: yup.string().required("Field is required"),
        message: yup.string().required("Field is required"),
        email: yup
          .string()
          .required("Field is required")
          .email("Invalid email"),
        subject: yup.string().required("Field is required"),
      })
      .required();

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(getFormSettings()),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      subject: "",
    },
  });

  const sendMessage = () => {
    const templateParams = {
      sender: getValues().name,
      email: getValues().email,
      subject: getValues().subject,
      message: getValues().message,
    };
    emailjs
      .send(
        "service_ywxobl8",
        "template_z3o2wxj",
        templateParams,
        "user_sMECxSGss2PbhW66dhkp5"
      )
      .then(
        () => {
          reset();
          toast.success("Your email has been sent successfully.");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section className="section contact-m fade-wrapper">
      <Toaster position="top-right" />
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone </h4>
                <p>+387/60-339-4022</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:ahmedcvrle@gmail.com">
                    ahmedcvrle@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/place/Maglaj/@44.5442206,18.0749041,14z/data=!3m1!4b1!4m6!3m5!1s0x475e919eb6e2bd8f:0x980dd91ebf7a48e2!8m2!3d44.5454847!4d18.1033619!16zL20vMGQ5OV92?entry=ttu"
                    target="_blank"
                  >
                    74250 Maglaj Domislica bb
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Fri 07 am - 03pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22748.643567459574!2d18.0955037!3d44.54422245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e919eb6e2bd8f%3A0x980dd91ebf7a48e2!2sMaglaj!5e0!3m2!1sbs!2sba!4v1706387324958!5m2!1sbs!2sba"
                      width="100"
                      height="800"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      onSubmit={handleSubmit(sendMessage)}
                      className="section__content-cta"
                      id="contact-form"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <Controller
                            name={"name"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <input
                                onChange={onChange}
                                value={value}
                                type="text"
                                name="contact-name"
                                className={errors.name && "error-field"}
                                placeholder="Name"
                              />
                            )}
                          />
                        </div>
                        <div className="group-input">
                          <Controller
                            name={"email"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <input
                                type="text"
                                onChange={onChange}
                                value={value}
                                name="contact-email"
                                className={errors.email && "error-field"}
                                placeholder="Email"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="group-input">
                        <Controller
                          name={"subject"}
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <input
                              type="text"
                              onChange={onChange}
                              value={value}
                              name="subject-email"
                              className={errors.subject && "error-field"}
                              placeholder="Subject"
                            />
                          )}
                        />
                      </div>
                      <div className="group-input">
                        <Controller
                          name={"message"}
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <textarea
                              name="contact-message"
                              className={errors.message && "error-field"}
                              placeholder="Message"
                              value={value}
                              onChange={onChange}
                            ></textarea>
                          )}
                        />
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
