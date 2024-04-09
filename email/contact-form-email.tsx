import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Text,
  Hr,
  Container,
  Preview,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type contactFormEmailProps = {
  message: string;
  sender: string;
};

export default function ContactFormEmail({
  message,
  sender,
}: contactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You recieved the following message
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is : {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
