import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"
import { useForm } from "react-hook-form"
import FormItem from "../components/contact-me/form-item"
import { BtnHolder, Err, Form, FormButton, Msg } from "../components/widgets/contact-me/contact-me.widgets"
import { BodySecWrapper, Breaker, Title } from "../components/widgets/forall/body-sec.widgets"

const ContactMe = () => {
    const { t } = useTranslation()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (data) => {
        setIsLoading(true)

        // Todo use useSWR for request 
        const response = await fetch('/api/contact-me', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json()

        if (!response.ok) {
            setErrorMessage(responseData.message)
        } else {
            setSuccess(responseData.message)
        }

        setIsLoading(false)

    }

    // console.log(errors);

    const registerFullName = register("FullName", {
        required: {
            value: true,
            message: 'نام شما باید ثبت شود'
        }, minLength: 2, maxLength: 80
    })

    const registerEmailOrPhone = register("EmailOrPhone", { required: true, minLength: 2, maxLength: 80 })
    const registerMessage = register("Message", { required: true, minLength: 2, maxLength: 80 })




    return (
        <BodySecWrapper>
            <Title>
                <h1>{t('contact_me')}</h1>
                <Breaker />
            </Title>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormItem
                    register={registerFullName}
                    label={t('form_1')} type="input" icon="/images/name.svg" />
                {errors.FullName && <Err>🧨{errors.FullName.message}</Err>}

                <FormItem
                    register={registerEmailOrPhone}
                    label={t('form_2')} type="input" icon="/images/email-phone.svg" />
                {errors.EmailOrPhone && <Err>🧨This field is required</Err>}

                <FormItem
                    register={registerMessage}
                    label={t('form_3')} type="textarea" icon="/images/message.svg" />
                {errors.Message && <Err>🧨This field is required</Err>}



                {
                    success !== '' ? <Msg success>{success}</Msg> : (
                        <BtnHolder>
                            <FormButton {...isLoading && 'disabled'} isLoading={isLoading}>
                                {
                                    isLoading ? <div className="lds-dual-ring"></div> : t('submit')
                                }
                            </FormButton>
                        </BtnHolder>
                    )
                }
                {
                    errorMessage !== '' && <Msg>{errorMessage}</Msg>
                }
            </Form>

        </BodySecWrapper>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common'])
    },
})

export default ContactMe
