import { useTranslations } from "@/i18n/utils";
import { languageList } from "@/i18n/lang";

const DEFAULT_LOCALE = "es";

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
