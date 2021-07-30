import { useTranslation } from "next-i18next";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

export const getMonth = (month) => {
    const { t } = useTranslation('common')

    if (t('lang') === 'en') {
        if (!month) return 'now'


        return months[month - 1]
    } else {
        if (!month) return 'اکنون'


        return persianMonths[month - 1]
    }


}