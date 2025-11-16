import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    supportedLngs: ['sv', 'en'],
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
          consent: {
            welcome: 'WELCOME!',
            instruction: 'Before you start playing, you need to read and agree to the following:',
            statement1: {
              prefix: "I understand that this game is part of a Master's thesis study at Stockholm University about",
              suffix: 'as communication tools.',
              options: {
                games: 'games',
                kites: 'kites',
                lamas: 'lamas',
              },
            },
            statement2: {
              prefix: 'I am aware of and consent to that my game results and any information I enter on this website will be',
              suffix: '. The information will be saved for at least 10 years, and may be used for future research.',
              options: {
                storedDigitally: 'stored digitally',
                runestone: 'chiselled onto a runestone',
                beach: 'written in the sand on a beach',
              },
            },
            statement3: {
              prefix: 'I agree to',
              suffix: 'enter any personal details such as my real name, contact details, nor any other identifiers or sensitive data.',
              options: {
                not: 'not',
                absolutelyNot: 'absolutely not',
                underNoCircumstances: 'under no circumstances',
              },
            },
            statement4: {
              prefix: 'I understand that my participation in the study is completely',
              suffix: '. I can withdraw my consent at any time with no consequences and without having to give a reason. If I wish to withdraw my consent after playing the game I have to contact the responsible researcher (see contact details below).',
              options: {
                voluntary: 'voluntary',
                optional: 'optional',
                upToMe: 'up to me',
              },
            },
            statement5: {
              prefix: 'I understand that if I have questions, concerns, or want to learn more about the study results, I can contact the',
              suffix: '(see contact details below).',
              options: {
                responsibleResearcher: 'responsible researcher',
                personListedBelow: 'person listed below',
              },
            },
            buttons: {
              consent: 'I consent',
              noConsent: 'I do not consent',
            },
            contact: {
              label: 'Responsible researcher:',
              name: 'Angelica Ericsson:',
              email: 'aner5235@student.su.se',
            },
            screenshot: 'Please take a screenshot of this page in case you need to contact the researcher later.',
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
          consent: {
            welcome: 'VÄLKOMMEN!',
            instruction: 'Innan du börjar spela måste du läsa och godkänna följande:',
            statement1: {
              prefix: 'Jag förstår att detta spel är en del av en masteruppsatsstudie vid Stockholms universitet om',
              suffix: 'som kommunikationsverktyg.',
              options: {
                games: 'spel',
                kites: 'drakar',
                lamas: 'lamor',
              },
            },
            statement2: {
              prefix: 'Jag är medveten om och samtycker till att mina spelresultat och all information jag anger på denna webbplats kommer att',
              suffix: '. Informationen kommer att sparas i minst 10 år och kan användas för framtida forskning.',
              options: {
                storedDigitally: 'lagras digitalt',
                runestone: 'ristas på en runsten',
                beach: 'skrivas i sanden på en strand',
              },
            },
            statement3: {
              prefix: 'Jag samtycker till att',
              suffix: 'ange personuppgifter såsom mitt riktiga namn, kontaktuppgifter eller andra identifierare eller känsliga uppgifter.',
              options: {
                not: 'inte',
                absolutelyNot: 'absolut inte',
                underNoCircumstances: 'under inga omständigheter',
              },
            },
            statement4: {
              prefix: 'Jag förstår att mitt deltagande i studien är helt',
              suffix: '. Jag kan när som helst dra tillbaka mitt samtycke utan konsekvenser och utan att behöva ange en anledning. Om jag vill dra tillbaka mitt samtycke efter att ha spelat spelet måste jag kontakta den ansvarige forskaren (se kontaktuppgifter nedan).',
              options: {
                voluntary: 'frivilligt',
                optional: 'valfritt',
                upToMe: 'upp till mig',
              },
            },
            statement5: {
              prefix: 'Jag förstår att om jag har frågor, oro eller vill veta mer om studieresultaten kan jag kontakta',
              suffix: '(se kontaktuppgifter nedan).',
              options: {
                responsibleResearcher: 'ansvarig forskare',
                personListedBelow: 'person som listas nedan',
              },
            },
            buttons: {
              consent: 'Jag samtycker',
              noConsent: 'Jag samtycker inte',
            },
            contact: {
              label: 'Ansvarig forskare:',
              name: 'Angelica Ericsson:',
              email: 'aner5235@student.su.se',
            },
            screenshot: 'Vänligen ta en skärmbild av denna sida om du behöver kontakta forskaren senare.',
          },
        },
      },
    },
  });

export default i18n;
