import { Flex, Text, Button, Link } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Flex direction="row" gap="5" mt="5">
        <Link>Hello</Link>
        <Button variant="solid">Let's go</Button>
      </Flex>
    </main>
  );
}
