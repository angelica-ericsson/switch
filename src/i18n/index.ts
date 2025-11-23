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
          productA: 'WildertonWear',
          productB: 'BlueSkin',
          continue: 'Continue',
          headerBar: { points: 'Points:', sentiment: 'Sentiment:' },
          welcome: {
            headline: 'Welcome to Wilderton',
            description1: `It's a small town with a main street, a river, and an old factory.
            Here you own a little clothing shop called`,
            description2: ` - named after your favourite colour and most used tool - where you sell traditional workwear.
            In July, the lease of your shop space will expire, and to be able to buy it you need to sell at least 25 clothing items per month.`,
            button: 'Start the adventure',
          },
          stockUp: {
            headline: 'Stock up!',
            buyHeadline: 'Enter the stock quantities for Product A and Product B',
            button: 'Do it',
            inventoryHeadline: 'Inventory',
            inventoryEmpty: 'Empty',
            eventTypeBuy: 'Bought',
            eventTypeSell: 'Sold',
            eventTypeInitial: 'Inital',
            noDate: 'No date',
          },
          intro: {
            text: 'Something something about the game...',
            button: 'OK got it, move on...',
          },
          newsFlash: {
            newspaperName: 'The Daily Times',
            price: 'price: 18 cents',
          },
          consent: {
            welcome: 'WELCOME!',
            instruction: 'Before you start playing, you need to read and agree to the following:',
            noConsentMessage1: "Sorry that you couldn't consent. Are you really sure that you want to leave the game?",
            noConsentMessage2: 'Sad to see you go. Off you go to a happier place...',
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
              suffix:
                '. I can withdraw my consent at any time with no consequences and without having to give a reason. If I wish to withdraw my consent after playing the game I have to contact the responsible researcher (see contact details below).',
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
          demographic: {
            title: 'WHO ARE YOU?',
            instruction: 'Before we start, please tell us a little about yourself:',
            tooYoung: 'Sorry, you need to be 18 to play this game. Now go out and play...',
            birthYear: {
              label: 'What year were you born?',
            },
            gender: {
              label: 'Gender',
              options: {
                male: 'Male',
                female: 'Female',
                other: 'Other',
              },
            },
            education: {
              label: 'What is your highest level of education?',
              placeholder: 'Choose one',
              options: {
                primary: 'Primary school (grundskola)',
                secondary: 'Secondary school (gymnasium)',
                folkHighSchool: 'Folk high school',
                adultEducation: 'Adult education (Komvux)',
                university: 'University or high school',
                other: 'Other',
              },
            },
            newsSources: {
              title: 'Which are your favourite news sources?',
              description: 'Please drag and drop to rank them, with your favourite at the top.',
              options: {
                blogs: 'Blogs',
                magazines: 'Magazines',
                newspapers: 'Newspapers',
                publicService: 'Public service',
                socialMedia: 'Social media',
                websites: 'Websites',
                youtube: 'Youtube',
                other: 'Other',
              },
            },
            electionIssues: {
              title: 'Which of these issues are most important to you in the next election?',
              description: 'Please drag and drop to rank them, with the most important at the top.',
              options: {
                criminality: 'Criminality',
                defense: 'Defense',
                economy: 'Economy',
                education: 'Education',
                employment: 'Employment',
                environment: 'Environment',
                equality: 'Equality',
                healthcare: 'Healthcare',
                immigration: 'Immigration',
                preparedness: 'Preparedness',
              },
            },
            howDidYouFindGame: {
              label: 'How did you find this game?',
              placeholder: 'Choose one',
              options: {
                internetLink: 'Clicked a link on internet',
                socialMediaLink: 'Clicked a link on social media',
                friend: 'Heard about it from a friend',
                poster: 'Saw a poster',
                gameSession: 'Signed up for a game session',
                other: 'Other',
              },
            },
            alias: {
              title: 'And, most importantly, which alias have you chosen?',
              description: "Your alias is needed to keep your answers anonymous, please don't use your real name.",
              placeholder: 'Enter your alias',
            },
            button: {
              submit: 'Continue',
            },
          },
        },
      },
      sv: {
        translation: {
          productA: 'WildertonWear',
          productB: 'BlueSkin',
          continue: 'Fortsätt',
          headerBar: { points: 'Poäng:', sentiment: 'Sentiment:' },
          welcome: {
            headline: 'Swedish: Headline of the start screen',
            description: 'SWEText on the start screen',
            button: 'SWEStart the adventure',
          },
          stockUp: {
            headline: 'Order form',
            buyHeadline: 'Enter the stock quantities for Product A and Product B',
            button: 'Gör detta',
            inventoryHeadline: 'Inventariet',
            inventoryEmpty: 'Tom',
            eventTypeBuy: 'Köpt',
            eventTypeSell: 'Såld',
            eventTypeInitial: 'Initial',
            noDate: 'Inget datum',
          },
          newsFlash: {
            newspaperName: 'Dagens Tidning',
            price: 'price: 18 kr',
          },
          consent: {
            welcome: 'VÄLKOMMEN!',
            instruction: 'Innan du börjar spela måste du läsa och godkänna följande:',
            noConsentMessage1: "Sorry that you couldn't consent. Are you really sure that you want to leave the game?",
            noConsentMessage2: 'Sad to see you go. Off you go to a happier place...',
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
              prefix:
                'Jag är medveten om och samtycker till att mina spelresultat och all information jag anger på denna webbplats kommer att',
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
              suffix:
                '. Jag kan när som helst dra tillbaka mitt samtycke utan konsekvenser och utan att behöva ange en anledning. Om jag vill dra tillbaka mitt samtycke efter att ha spelat spelet måste jag kontakta den ansvarige forskaren (se kontaktuppgifter nedan).',
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
          demographic: {
            title: 'VEM ÄR DU?',
            instruction: 'Innan vi börjar, berätta gärna lite om dig själv:',
            tooYoung: 'Sorry, you need to be 18 to play this game. Now go out and play...',
            birthYear: {
              label: 'Vilket år föddes du?',
            },
            gender: {
              label: 'Kön',
              options: {
                male: 'Man',
                female: 'Kvinna',
                other: 'Annat',
              },
            },
            education: {
              label: 'Vad är din högsta utbildningsnivå?',
              placeholder: 'Välj ett',
              options: {
                primary: 'Grundskola',
                secondary: 'Gymnasium',
                folkHighSchool: 'Folkhögskola',
                adultEducation: 'Vuxenutbildning (Komvux)',
                university: 'Universitet eller högskola',
                other: 'Annat',
              },
            },
            newsSources: {
              title: 'Vilka är dina favoritnyhetskällor?',
              description: 'Vänligen dra och släpp för att rangordna dem, med din favorit längst upp.',
              options: {
                blogs: 'Bloggar',
                magazines: 'Tidskrifter',
                newspapers: 'Tidningar',
                publicService: 'Public service',
                socialMedia: 'Sociala medier',
                websites: 'Webbplatser',
                youtube: 'Youtube',
                other: 'Annat',
              },
            },
            electionIssues: {
              title: 'Vilka av dessa frågor är viktigast för dig i nästa val?',
              description: 'Vänligen dra och släpp för att rangordna dem, med de viktigaste längst upp.',
              options: {
                criminality: 'Brottslighet',
                defense: 'Försvar',
                economy: 'Ekonomi',
                education: 'Utbildning',
                employment: 'Sysselsättning',
                environment: 'Miljö',
                equality: 'Jämställdhet',
                healthcare: 'Hälsovård',
                immigration: 'Invandring',
                preparedness: 'Beredskap',
              },
            },
            howDidYouFindGame: {
              label: 'Hur hittade du detta spel?',
              placeholder: 'Välj ett',
              options: {
                internetLink: 'Klickade på en länk på internet',
                socialMediaLink: 'Klickade på en länk på sociala medier',
                friend: 'Hörde om det från en vän',
                poster: 'Såg en affisch',
                gameSession: 'Anmälde mig till en spelsession',
                other: 'Annat',
              },
            },
            alias: {
              title: 'Och, viktigast av allt, vilket alias har du valt?',
              description: 'Ditt alias behövs för att hålla dina svar anonyma, använd inte ditt riktiga namn.',
              placeholder: 'Ange ditt alias',
            },
            button: {
              submit: 'Fortsätt',
            },
          },
        },
      },
    },
  });

export default i18n;
