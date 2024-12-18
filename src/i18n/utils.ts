import { labels, languageList } from "./lang";

type Lang = keyof typeof languageList;
type LabelKey = keyof typeof labels.es & keyof typeof labels.en;

const DEFAULT_LOCALE = "es";

const getStoredLanguage = (): Lang => {
  if (typeof localStorage !== "undefined") {
    return (localStorage.getItem("preferred-lang") as Lang) || DEFAULT_LOCALE;
  }
  return DEFAULT_LOCALE;
};

const defaultLang = getStoredLanguage();

export function useTranslations(lang: Lang) {
  return function translate(key: LabelKey): string {
    return labels[lang][key] || labels[defaultLang][key];
  };
}

export const currentLang = (currentLocale: string) =>
  currentLocale || DEFAULT_LOCALE;

export const getCurrentLangPath = (currentLocale: string) =>
  currentLocale !== DEFAULT_LOCALE ? "/en/" : "/";

export const isDefaultLocale = (currentLocale: string) =>
  currentLocale === DEFAULT_LOCALE;

export const getTranslateLabels = (currentLocale: string) => {
  return useTranslations(
    currentLang(currentLocale) as keyof typeof languageList
  );
};