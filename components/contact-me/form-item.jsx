import { FormItemWrapper, FormLabel } from "../widgets/contact-me/contact-me.widgets"
import Image from 'next/image'
const FormItem = ({ label, type, icon, register }) => {
    return (
        <FormItemWrapper>
            <FormLabel>
                <Image src={icon} alt={label} width={25} height={25} />
                <p>{label}</p>
            </FormLabel>

            {
                type === 'input' ? (
                    <input {...register} 
                        type="input" placeholder={label} />
                )
                    : (
                        <textarea {...register}
                            type="textarea" placeholder={label}></textarea>
                    )
            }
        </FormItemWrapper>
    )
}

export default FormItem
