import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    supportedLngs: [/* 'sv', */ 'en'],
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
          welcome: {
            headline: 'Welcome to Wilderton',
            description1: `It's a small town with a main street, a river, and an old factory.
            Here you own a little clothing shop called`,
            description2: ` - named after your favourite colour and most used tool - where you sell traditional workwear. You sell around 100 items per month.
            In July, the lease of your shop space will expire, and to be able to extend it you need to sell at least 50 clothing items per month.`,
            button: 'Start the adventure',
          },
          stockUp: {
            headline: 'Stock up!',
            buyHeadline: 'How much do you want to buy?',
            button: 'Do it',
            inventoryHeadline: 'Inventory',
            inventoryEmpty: 'Empty',
            eventTypeBuy: 'Bought',
            eventTypeSell: 'Sold',
            eventTypeInitial: 'Inital',
            noDate: 'No date',
            inStock: 'In stock',
          },
          intro: {
            text: 'Something something about the game...',
            button: 'OK got it, move on...',
          },
          newsFlash: {
            newspaperName: 'The Daily Times',
            price: 'price: 18 cents',
          },
          survey: {
            question1:
              'Your friends gather at your shop to talk about everything that has happened, and what is going to happen next.\n\nYour best friend asks you what you would have done differently, if you could do it all again?',
            question2: "So what happens now? What other solutions could you come up with, that you haven't already tried?",
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
                healthcare: 'Healthcare',
                crime: 'Crime / law and order',
                education: 'Education and schools',
                immigration: 'Immigration and integration',
                environment: 'The environment and climate change',
                defense: 'Defence and security',
                elderlycare: 'Elderly care',
                economy: 'Economy',
                employment: 'Employment',
                pensions: 'Pensions',
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
          end: {
            playAgain: 'Play again!',
          },
        },
      },
    },
  });

export default i18n;
