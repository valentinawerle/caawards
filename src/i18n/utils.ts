import { labels } from "./lang";

const defaultLang = 'es';

export function useTranslations(lang: keyof typeof labels) {
    return function translate(key: keyof typeof labels[typeof defaultLang]) {
        return labels[lang][key] || labels[defaultLang][key];
    }
}