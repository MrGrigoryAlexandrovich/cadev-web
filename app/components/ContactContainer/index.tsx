import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { Text } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import supportImage from "../../assets/support.png";

const ContactContainer = ({ desktop }: { readonly desktop: boolean }) => {
  const router = useRouter();

  return (
    <Stack
      mt={desktop ? 0 : 3}
      height="100%"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Image src={supportImage} height={70} alt="suport-picture" priority />
      <Button variant="soft" onClick={() => router.push("/contact")}>
        Contact
      </Button>
      <Stack alignItems="center" spacing={1}>
        <Text size="2">If u have questions send a mail to</Text>
        <Text size="2">ahmedcvrle@gmail.com</Text>
      </Stack>
    </Stack>
  );
};

export default ContactContainer;
