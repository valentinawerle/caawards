import { labels, languageList } from "./lang";

type Lang = keyof typeof languageList;
type LabelKey = keyof typeof labels.es & keyof typeof labels.en;

const getStoredLanguage = (): Lang => {
    if (typeof localStorage !== 'undefined') {
        return (localStorage.getItem('preferred-lang') as Lang) || 'es';
    }
    return 'es';
};

const defaultLang = getStoredLanguage();

export function useTranslations(lang: Lang) {
    return function translate(key: LabelKey): string {
        return labels[lang][key] || labels[defaultLang][key];
    }
}