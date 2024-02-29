import * as React from 'react';
import {Tailwind} from "@react-email/tailwind";
import {Body, Button, Container, Head, Html, Text, Link, Section} from "@react-email/components";

interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate = ({confirmLink}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className={'bg-white my-auto mx-auto font-sans px-2'}>
        <Container className={'border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'}>
          <Text className={'text-black text-xs leading-[24px] text-center'}>Almost there! To finish verifying your email, hit the big button below.</Text>
          <Section className={'text-center mt-[32px] mb-[32px]'}>
            <Button href={confirmLink} className={'bg-[#000000] rounded text-white text-sm font-semibold no-underline text-center px-5 py-3'}>Verify Email</Button>
          </Section>
          <Text className={'text-black text-xs leading-[24px] text-center'}>or paste this link in Boilerplate:</Text>
          <Section className={'text-center'}>
            <Link href={confirmLink} className={'text-blue-600 text-xs no-underline'}>{confirmLink}</Link>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
