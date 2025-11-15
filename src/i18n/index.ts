import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          productA: 'Blitz Coffee',
          productB: 'Zoom Coffee',
          headerBar: { points: 'Points:', sentiment: 'Sentiment:' },
          welcome: {
            headline: 'Headline of the start screen',
            description: 'Text on the start screen',
            button: 'Start the adventure',
          },
          stockUp: {
            headline: 'Stock up!',
            description: 'Enter the stock quantities for Product A and Product B',
            youSold: 'Great! You sold <num>{{soldA}}</num> of Product A and <num>{{soldB}}</num> of Product B',
            button: 'Do it',
          },
          intro: {
            text: 'Something something about the game...',
            button: 'OK got it, move on...',
          },
        },
      },
      sv: {
        translation: {
          productA: 'Blitz Kaffe',
          productB: 'Zoom Kaffe',
          headerBar: { points: 'Poäng:', sentiment: 'Sentiment:' },
          welcome: {
            headline: 'Swedish: Headline of the start screen',
            description: 'SWEText on the start screen',
            button: 'SWEStart the adventure',
          },
          stockUp: {
            headline: 'Sjock upp',
            description: 'Enter the stock quantities for Product A and Product B',
            youSold: 'Du sålde <num>{{soldA}}</num> of Product A and <num>{{soldB}}</num> of Product B',
            button: 'Gör detta',
          },
        },
      },
    },
  });

export default i18n;
