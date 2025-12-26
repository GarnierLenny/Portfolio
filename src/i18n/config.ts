"use client";

import i18next from "i18next";
import enTranslation from "./en/translation.json";
import frTranslation from "./fr/translation.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation, // Vérifie bien que la clé ici est 'translation'
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  ns: ["translation"], // Assure-toi que le namespace par défaut est défini
  defaultNS: "translation",
});
