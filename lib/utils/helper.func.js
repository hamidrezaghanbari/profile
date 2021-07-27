import { useSelector } from "react-redux";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

export const getMonth = (month) => {
    const lang = useSelector(state => state.theme.lang)

    if(lang === 'en') {
        if(!month) return 'now'


        return months[month - 1]
    } else {
        if(!month) return 'اکنون'


        return persianMonths[month - 1]
    }

    
}