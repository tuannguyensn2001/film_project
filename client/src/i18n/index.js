import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from '~/langs/vi';

i18next.use(initReactI18next).init({
    fallbackLng: 'vi',
    resources: {
        vi: {
            translation: vi,
        },
    },
});
