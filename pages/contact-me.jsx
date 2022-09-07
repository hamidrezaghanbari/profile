import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormItem from "../components/contact-me/form-item";
import {
  BtnHolder,
  Err,
  Form,
  FormButton,
  Msg,
} from "../components/widgets/contact-me/contact-me.widgets";
import {
  BodySecWrapper,
  Breaker,
  Title,
} from "../components/widgets/forall/body-sec.widgets";

const ContactMe = () => {
  const { t } = useTranslation("common");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);

    // Todo use useSWR for request
    const response = await fetch(
      "https://mailthis.to/hamidrezaghanbari13@gmail.com",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.status)

    if (response.status != 200) {
      setErrorMessage('error happened on server of mail.to!');
    } else {
      setSuccess('Thank you!Your Email successfully sent.');
    }

    setIsLoading(false);
    setTimeout(() => {
      location.href = 'https://mailthis.to/confirm'
    }, 1500);
  };

  const registerName = register("name", {
    required: "name is required",
    minLength: {
      value: 3,
      message: "name must be at least 3 character",
    },
    maxLength: 80,
  });

  const registerReplyTo = register("_replyTo", {
    required: "email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
    maxLength: 80,
  });

  const registerMessage = register("message", {
    required: {
      value: true,
      message: "message is required",
    },
    minLength: 2,
    maxLength: 80,
  });

  return (
    <BodySecWrapper>
      <Title>
        <h1>{t("contact_me")}</h1>
        <Breaker />
      </Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          register={registerName}
          label={t("form_1")}
          type="input"
          icon="/images/name.svg"
        />
        {errors.name &&
          (t("lang") === "en" ? (
            <Err>🧨{errors.name.message}</Err>
          ) : (
            <Err>🧨حداقل طول نام 3 کاراکتر است</Err>
          ))}

        <FormItem
          register={registerReplyTo}
          label={t("form_2")}
          type="input"
          icon="/images/email-phone.svg"
        />
        {errors._replyTo &&
          (t("lang") === "en" ? (
            <Err>🧨{errors._replyTo.message}</Err>
          ) : (
            <Err>🧨 حدالقل طول ایمیل یا شماره تماس 4 کاراکتر است</Err>
          ))}

        <FormItem
          register={registerMessage}
          label={t("form_3")}
          type="textarea"
          icon="/images/message.svg"
        />
        {errors.message &&
          (t("lang") === "en" ? (
            <Err>🧨{errors.message.message}</Err>
          ) : (
            <Err>🧨 فیلد متن پیام نباید خالی باشد</Err>
          ))}

        {success !== "" ? (
          <Msg success>{success}</Msg>
        ) : (
          <BtnHolder>
            <FormButton {...(isLoading && "disabled")} isLoading={isLoading}>
              {isLoading ? <div className="lds-dual-ring"></div> : t("submit")}
            </FormButton>
          </BtnHolder>
        )}
        {errorMessage !== "" && <Msg>{errorMessage}</Msg>}
      </Form>
    </BodySecWrapper>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ContactMe;
