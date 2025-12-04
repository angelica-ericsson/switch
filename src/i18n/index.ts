import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
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
          welcome: {
            headline: 'Welcome to Wilderton',
            description1: `It's a small town with a main street, a river, and an old factory.\nHere you own a little clothing shop called`,
            description2: ` (named after your favourite colour and most used tool) where you sell traditional workwear; overalls, jackets and boots. You sell around 100 items per month.\n\nIn four months, the lease of your shop space will expire. To be able to extend it you need to sell about 50 clothing items per month.`,
            button: 'Start the adventure',
            startScreenSubtitle: 'Can you balance your budget on a social tipping point?',
          },
          stockUp: {
            headline: 'Stock up!',
            buyHeadline: 'How much do you want to buy?',
            maxMessage: '(max 100 total)',
            maxError: 'You can only buy 100 items in total',
            button: 'Place order',
            inventoryHeadline: 'Inventory',
            inventoryEmpty: 'Empty',
            eventTypeBuy: 'Bought',
            eventTypeSell: 'Sold',
            eventTypeInitial: 'Inital',
            noDate: 'No date',
            inStock: 'In stock',
          },
          newsFlash: {
            newspaperName: 'The Daily Times',
            price: 'price: 18 cents',
            photo: 'Photo',
          },
          statusBar: {
            daysLeft: 'Days left on your lease',
            publicOpinion: 'Public opinion WildertonWear',
            positive: 'Positive:',
            neutral: 'Neutral:',
            negative: 'Negative:',
            salesNeeded: 'Sales needed to extend your lease',
            yourSales: 'Your sales: {{totalSales}}',
          },
          socialUsers: {
            wildertonwear_official: { name: 'WildertonWear Official', user: 'wildertonwear_official' },
            wildertonwear_factory_union: { name: 'WildertonWear Factory Union', user: 'wildertonwear_factory_union' },
            joe_6000: { name: 'Joseph Cassandra', user: 'joe_6000' },
            wilhelmine_lillie: { name: 'Wilhelmine Lillie', user: 'wilhelmine_lillie' },
            randy: { name: 'Randal Witting', user: 'randy' },
            Domenic71: { name: 'Domenic Laury', user: 'Domenic71' },
            LLindström: { name: 'Liam Lindström', user: 'LLindström' },
            leta_54: { name: 'Leta Merl', user: 'leta_54' },
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
                secondary: 'Secondary school (high school / gymnasium)',
                folkHighSchool: 'Folk high school',
                adultEducation: 'Adult education (Komvux)',
                university: 'University or college',
                other: 'Other',
              },
            },
            newsSources: {
              title: 'Which are your most used news sources?',
              description: 'Please drag and drop to rank them, with your favourite at the top.',
              options: {
                blogs: 'Blogs',
                magazines: 'Magazines',
                newspapers: 'Newspapers',
                publicService: 'Public service / national radio or TV',
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
            button: {
              submit: 'Continue',
            },
          },
          end: {
            overTarget:
              'And, last but not least: in the process, you sold {{totalSales}} items, enough to extend the lease of your shop space!',
            underTarget:
              'Unfortunately, you only sold {{totalSales}} items which was not enough to extend the lease of your shop space 🙁.',
            playAgain: 'Play again!',
          },
          'AB-scene-Most_popular_brands':
            'Your most popular brand is WildertonWear, the local brand produced in the old factory in town.\n\nTo be honest, it’s not the best quality brand - anymore. But because of its long tradition and local connection, it is still popular among tourists and locals for nostalgic reasons.\n\nYour second most popular brand is BlueSkin, a higher quality brand made in a neighbouring town.',
          'AB-scene-Continue': 'Continue',
          'AB-scene-Things_about_to_change': 'However, things are about to change...',
          'AB-scene-Uh_oh': 'Uh oh...',
          'A-newsFlash-HL-Tax_evasion': 'WILDERTONWEAR EVADING TAXES',
          'B-newsFlash-HL-Super_emitter': 'WILDERTONWEAR FACTORY SUPER EMITTER',
          'A-newsFlash-body-Tax_evasion':
            '<b>In a new investigative report, the Daily Times reveals that WildertonWear has neglected paying taxes for the past five years.\n“We were in a tough situation, and had to cut down on spending,” says a former employee who wishes to remain anonymous.</b>\nFor over a hundred years, the old brick factory walls and chimneys of WildertonWear have been rising over Wilderton. Many residents have seen generations of family members go to work at the factory - or worked there themselves - and they all have an emotional relationship with the company that has been regarded as the financial backbone of the town for decades.\nSo when the company management admitted to having financial difficulties a few years back, many residents stepped up to help by purchasing their products. And even though many have complained about the declining quality of the clothing items, the name WildertonWear has nonetheless been a source of pride for the community.\nHowever, the Daily Times can now reveal that the love has not been mutual. Over the past five years, WildertonWear has paid exactly zero taxes. In an interview with the Daily Times, the company CEO, Bert Swindle, explains that the company always intended to pay the taxes “as soon as the financial situation stabilised.”\n...',
          'B-newsFlash-body-Super_emitter':
            '<b>WildertonWear has been emitting very high levels of carbon dioxide and methane gas into the atmosphere for the past decades. The pollution filtering systems have not been upgraded for decades, and as a result, the company has been releasing more greenhouse gases into the atmosphere than all car traffic in the country during the same period.</b>\nFor over a hundred years, the old brick factory walls and chimneys of WildertonWear have been rising over Wilderton. Many residents have seen generations of family members go to work at the factory - or worked there themselves - and they all have an emotional relationship with the company that has been regarded as the financial backbone of the town for decades.\nSo when the company management admitted to having financial difficulties a few years back, many residents stepped up to help by purchasing their products. And even though many have complained about the declining quality of the clothing items, the name WildertonWear has nonetheless been a source of pride for the community.\nBut when the Daily Times’ investigative journalism team decided to take a closer look, it found a darker side. The factory has been emitting very high levels of carbon dioxide and methane gas, relative to other factories of the same size and type. “We knew our emission filtering systems were not up to the current standard,” says a former employee who wishes to remain anonymous. “But we were told it couldn’t be fixed since we had to cut down on spending.”\n...',
          'A-social-Tax_evasion-WTF':
            'Wtf WildertonWear?! We keep buying your cheap quality products year after year to support you, and you give nothing back?',
          'B-social-Super_emitter-WTF':
            'Wtf WildertonWear?! We keep buying your cheap quality products year after year to support you, and in return you continue heating our planet?',
          "AB-social-Let's_boycott": 'That’s it, I’m boycotting WildertonWear. Who’s with me? #BoycottWW',
          'AB-scene-Stockup_1':
            'It is time to stock up on items for the coming month, and you’ll need to choose how to divide your order between the brands.\n\nGiven the likelihood of a boycott, should you buy your usual amount of WildertonWear items, or swap some for your second most popular brand, BlueSkin?',
          "AB-scene-Let's_stock_up!": 'Let’s stock up!',
          'AB-1_1-scene-ACT-Reaction_boycott':
            'You were right in anticipating a boycott. The Wilderton residents are very upset with WildertonWear, and the demand quickly drops.\n\nAnd so does your revenue.',
          'AB-1_1-scene-DELAY-Reaction_boycott':
            'Hmm. It looks like you underestimated the Wilderton residents’ dissatisfaction with WildertonWear. The demand dropped quickly.\n\nYour revenue also dropped, but not so much that it affects the business.',
          'AB-1_1-scene-WAIT-Reaction_boycott':
            'The residents are very upset with WildertonWear, and the demand quickly drops.\n\nLuckily, you didn’t make any drastic changes. Your revenue has only dropped a little.',
          'AB-1_2-scene-ACT-Questions_from_customers':
            'Some of your customers are happy that you’re reducing your WildertonWear supply. Others are wondering if you’re really willing to risk that such a traditional old company - and one of the town’s largest employers for generations - has to close?\n\nWhat do you tell them?',
          'A-1_2-option-ACT-No_right_to_exploit': 'A long history doesn’t give them the right to exploit the community.',
          'B-1_2-option-ACT-No_right_to_pollute': 'A long history doesn’t give them the right to pollute our atmosphere.',
          "AB-1_2-option-ACT-Can't_afford_to_support": 'I can’t afford to support WildertonWear if my customers won’t buy their products.',
          'AB-1_2-option-ACT-Temporary_boycott': 'I think a boycott could teach Wildertonwear a lesson, but it should be temporary.',
          'AB-1_2-scene-WAIT-Questions_from_customers':
            'Your customers are wondering where you stand; are you going to support WildertonWear because of its long traditions, or are you joining the boycott even if there’s a risk that the company could be forced to close?\n\nWhat do you tell them?',
          'AB-1_2-option-WAIT-BlueSkin_safer_bet': 'It looks like BlueSkin is the safer choice right now, so I’ll go with that.',
          "AB-1_2-option-WAIT-Can't_afford_financial_risk":
            'I can’t afford to take any financial risks, so I’ll wait and see what my competitors do.',
          'AB-1_2-option-WAIT-Business_is_business':
            'Business is business, not politics. Despite the boycott, Wildertonwear is still the most popular brand.',
          'A-1_2-scene-DELAY-Questions_from_customers':
            'Some of your customers are happy that you’re still supporting WildertonWear, since it’s one of the town’s largest employers. Others are wondering how you can support a business that is clearly exploiting the community.\n\nWhat do you tell them?',
          'B-1_2-scene-DELAY-Questions_from_customers':
            'Some of your customers are happy that you’re still supporting WildertonWear, since it’s one of the town’s largest employers. Others are wondering how you can support a business that is clearly a big contributor to climate change.\n\nWhat do you tell them?',
          'AB-1_2-option-DELAY-Better_through_dialogue':
            'WildertonWear clearly has problems, but it’s better to influence them through dialogue.',
          'AB-1_2-option-DELAY-Business_is_business':
            'Business is business, not politics. Despite the boycott, WildertonWear is still the most popular brand.',
          'AB-1_2-option-DELAY-Have_to_support': 'I have to support them; if they have to close, it will affect the entire community.',
          'A-1_3-social-Unfortunate_misunderstanding':
            'There has been an unfortunate misunderstanding regarding our tax payments. We will, of course, pay our taxes, but due to financial complications we need a little more time. In the meantime, check out our new Lumberjack collection!',
          'B-1_3-social-Unfortunate_misunderstanding':
            'There has been an unfortunate misunderstanding regarding our greenhouse gas emissions. We will, of course, upgrade our filtering systems, but due to financial complications we need a little more time. In the meantime, check out our new Lumberjack collection!',
          'A-1_4-scene-DELAY-Council_vote_extension':
            'There are more ways you can support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the tax repayment period for WildertonWear for four months. How do you vote?',
          'B-1_4-scene-DELAY-Council_vote_extension':
            'There are more ways you can support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for four months, to ease the financial pressure on the company. How do you vote?',
          'AB-1_4-option-DELAY-Vote_against': 'Against. Although I do want to support them, I think they need to learn their lesson.',
          'AB-1_4-option-DELAY-Abstain_vote': 'I’ll abstain. If I openly choose sides, I might lose customers.',
          'AB-1_4-option-DELAY-Vote_for': 'For, of course! We need to keep the factory running, for the workers as well as the community.',
          'AB-1_4-option-ACT-Abstain_vote': 'I’ll abstain. If I openly choose sides I might lose customers.',
          'A-1_4-scene-WAIT-Council_vote_extension':
            'There are more ways you can influence or support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the tax repayment period for WildertonWear for four months. How do you vote?',
          'B-1_4-scene-WAIT-Council_vote_extension':
            'There are more ways you can influence or support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for four months, to ease the financial pressure on the company. How do you vote?',
          'A-1_4-option-WAIT-Vote_against': 'Against. We’ve been supporting them long enough.',
          'B-1_4-option-WAIT-Vote_against': 'Against. They should have fixed the system long ago.',
          'AB-1_4-option-WAIT-Vote_for': 'For. We need to keep the factory running, for the workers as well as the community.',
          'A-1_4-scene-ACT-Council_vote_extension':
            'There are more ways you can try to influence WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the tax repayment period for WildertonWear for four months. How do you vote?',
          'B-1_4-scene-ACT-Council_vote_extension':
            'There are more ways you can try to influence WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings.\n\nThis week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for four months to ease the financial pressure on the company. How do you vote?',
          'A-1_4-option-ACT-Vote_against': 'Against, of course! We’ve been supporting them long enough.',
          'B-1_4-option-ACT-Vote_against': 'Against, of course! They should have fixed the system long ago.',
          'AB-1_4-option-ACT-Vote_for': 'For. We need to keep the factory running, for the sake of the workers and the community.',
          'A-1_5-scene-ACT-Extension_rejected':
            'That worked out nicely! Your arguments convinced the council, and a majority voted against the extension.\n\nWildertonWear needs to pay its taxes immediately.',
          'B-1_5-scene-ACT-Extension_rejected':
            'That worked out nicely! Your arguments convinced the council, and a majority voted against the extension.\n\n WildertonWear needs to fix its systems immediately.',
          'A-1_5-scene-ACT-Extension_approved':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority.\n\nThe extension was approved, and WildertonWear gets four extra months to pay their taxes.',
          'B-1_5-scene-ACT-Extension_approved':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority.\n\nThe extension was approved, and WildertonWear gets four extra months to fix its systems.',
          'A-1_5-scene-DELAY-Extension_approved':
            'Great job! Your arguments convinced the council, and the majority voted for an extension.\n\nWildertonWear gets four extra months to pay their taxes.',
          'B-1_5-scene-DELAY-Extension_approved':
            'Great job! Your arguments convinced the council, and the majority voted for an extension.\n\nWildertonWear gets four extra months to fix its systems.',
          'A-1_5-scene-DELAY-Extension_rejected':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority.\n\nThe extension was rejected, and WildertonWear needs to pay their taxes immediately.',
          'B-1_5-scene-DELAY-Extension_rejected':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority.\n\nThe extension was rejected, and WildertonWear needs to fix its systems immediately.',
          'A-1_5-scene-WAIT-Extension_approved':
            'With a narrow majority, the council voted for an extension.\n\nWildertonWear gets four extra months to pay its taxes.',
          'B-1_5-scene-WAIT-Extension_approved':
            'With a narrow majority, the council voted for an extension.\n\nWildertonWear gets four extra months to fix its systems.',
          'A-1_5-scene-WAIT-Extension_rejected':
            'With a narrow majority, the council voted against an extension.\n\nWildertonWear needs to pay its taxes immediately.',
          'B-1_5-scene-WAIT-Extension_rejected':
            'With a narrow majority, the council voted against an extension.\n\nWildertonWear needs to fix its systems immediately.',
          'AB-1_6-scene-Stockup_2':
            'It’s been another two weeks, and most of your customers seem to have forgiven WildertonWear.\n\nIt’s time to stock up again, and over the past weeks, you have noticed a slow increase in demand for WildertonWear’s products. Does this mean that the boycott is soon going to be over?',
          'AB-2_1-scene-DELAY-Reaction_2nd_newsflash': 'Ouch, supporting the company comes at a cost this time...',
          'AB-2_1-scene-WAIT-Reaction_2nd_newsflash': 'Hm, this time it would have been better to keep the WildertonWear stock down...',
          'AB-2_1-scene-ACT-Reaction-2nd_newsflash':
            'You made the right choice in keeping the WildertonWear stock down.\n\nMany people were looking for an alternative brand, and so you completely sold out all your BlueSkin items!',
          'A-2_2-newsFlash-HL-Ignoring_health_regulations': 'WILDERTONWEAR IGNORES HEALTH REGULATIONS',
          'B-2_2-newsFlash-HL-Ignoring_environmental_regulations': 'WILDERTONWEAR IGNORES ENVIRONMENTAL REGULATIONS',
          'A-2_2-newsFlash-body-Ignoring_health_regulations':
            '<b>Local textile manufacturer WildertonWear has routinely disregarded health regulations, says work environment health inspector. Years of neglected safety equipment upgrades have left factory workers exposed to dangerous levels of dust and chemicals.</b>\nNone of our readers is likely to have missed the tax evasion scandal around local textile manufacturer Wilderton-Wear lately. But the company has more dark secrets; in an exclusive interview, the Daily Times has gained information about multiple breaches of health and safety regulations.\n According to a work environment health inspector, who wishes to remain anonymous, WildertonWear has routinely ignored safety regulations about permissible levels of dust and chemicals. Safety equipment, such as air filters and industrial fans, has not been upgraded for years and currently provides insufficient protection. According to the source, WildertonWear has knowingly put its workers at risk of being affected by respiratory diseases, and as a result, there has been an increase in cancer diagnoses and respiratory diseases among employees at its factory.\n...',
          'B-2_2-newsFlash-body-Ignoring_environmental_regulations':
            '<b>Local textile manufacturer WildertonWear has routinely disregarded environmental regulations, says environmental inspector. Years of neglected wastewater filtering system upgrades have resulted in dangerous chemicals being released in the Wilderton River.</b>\nNone of our readers is likely to have missed the emissions scandal around local textile manufacturer WildertonWear lately. But the company has more dark secrets; in an exclusive interview, the Daily Times has gained information about multiple breaches of environmental regulations. According to an environmental inspector, who wishes to remain anonymous, WildertonWear has routinely ignored environmental regulations about permissible levels of chemicals in wastewater. Wastewater filtering equipment has not been upgraded for years and currently provides insufficient protection. According to the source, WildertonWear has knowingly put the local environment and its residents at risk of being exposed to dangerous chemicals, and as a result, there has been an increase in cancer diagnoses and respiratory diseases in Wilderton.\n...',
          'A-2_3-social-Going_on_strike':
            'From 12:00 today, 34 of our members will go on a strike. Following yesterday’s disclosure regarding WildertonWear’s work environment health regulation breaches, we demand improved safety protection for the workers!',
          'B-2_3-social-Going_on_strike':
            'From 12:00 today, 34 of our members will go on a strike. Following yesterday’s disclosure regarding WildertonWear’s environmental regulation breaches, we demand proper pollution and wastewater management systems so that we and our community can feel safe!',
          'AB-2_4-scene-ACT-Local_meeting_point':
            'To some residents, this is it. They really can’t support Wilderton-Wear anymore.\n\nSupporters of the boycott come by to talk. Gradually, your shop becomes a local meeting point for those who want change, and together you discuss what to do next. What do you think should be your next step?',
          'A-2_4-option-ACT-Organise_demonstration': 'Organise a demonstration to demand better working conditions at the factory.',
          'B-2_4-option-ACT-Organise_demonstration': 'Organise a demonstration to demand better filtering systems at the factory.',
          'AB-2_4-option-ACT/WAIT-Put_up_posters': 'Put up posters and hand out leaflets to make more people join the boycott.',
          'AB-2_4-option-ACT-Have_a_dialogue': 'Have a dialogue with the company; consumer pressure alone probably won’t work.',
          'AB-2_4-scene-WAIT-Local_meeting_point':
            'This is not good. You’ll have to consider whether or not you can still support WildertonWear.\n\nGradually, your shop becomes a local meeting point for those who want to discuss the issue, and together you discuss what to do next.\n\nWhat do you suggest?',
          'AB-2_4-option-WAIT/DELAY-Have a dialogue': 'Have a dialogue with the company to convince them to change.',
          'AB-2_4-option-WAIT/DELAY-Astroturf':
            'Gather friends and fellow retailers to demonstrate in favour of keeping the historical factory.',
          'AB-2_4--scene-DELAY-Local_meeting_point':
            'This is not good. Now it will be a lot harder to convince the community to save WildertonWear and the workers’ jobs.\n\nGradually, your shop becomes the meeting point for those who want to support the factory, and together you discuss what to do next.\n\nWhat do you think should be your next step?',
          'AB-2_4-option-DELAY-Interview_is_fishy':
            'The interview seems fishy; we should write an opinion piece in the paper to question it.',
          'AB-2_5-scene-ACT-Demonstration_successful': 'The demonstration was very successful; hundreds of townspeople joined in!\n\nIn fact, WildertonWear seem to be getting nervous...',
          'AB-2_5-scene-ACT-Posters_have_effect': 'The posters seem to have an effect; more people join the boycott every week!\n\nWildertonWear seem compelled to act...',
          'AB-2_5-scene-WAIT-Declined_invitation':
            'You contact WildertonWear, but the company representatives politely decline your meeting invitation since they are too busy working on their own solution.',
          'AB-2_5-scene-DELAY-Small_but_loud':
            'The demonstration was small but loud, and thanks to a friend at the local paper, you got a lot of press coverage. Your message is spreading!\n\nIn fact, WildertonWear seem to have been inspired by it...',
          'AB-2_5-scene-DELAY-Confront_rumours':
            'That was a good choice!  Your efforts to confront these harmful rumours seem to be working!\n\nIn fact, WildertonWear itself seems to have been inspired by it.',
          'A-2_6-social-Independent_audit':
            'At WildertonWear, we prioritise the health and safety of our workers above all else. Therefore, we have hired an independent company, Investiga, to perform an audit on the working conditions.',
          'B-2_6-social-Independent_audit':
            'At WildertonWear, we prioritise the health and safety of the community and our shared environment above all else. Therefore, we have hired an independent company, Investiga, to perform an audit on our pollution and wastewater management.',
          'AB-2_7-social-Feeling_weird':
            'Feeling weird about the boycott; what if the report says WildertonWear hasn’t done anything? Any thoughts?',
          'AB-2_7-social-WAIT/DELAY-Is_it_just_me': 'Is it just me, or is the boycott finally slowing down? #SupportWW',
          'AB-2_7-social-DELAY-People_making_sense':
            'Finally, people are making sense again - let’s wait and see what the audit says before we make rash decisions.',
          'AB-2_7-social-ACT/WAIT-Paying_for_audit':
            'Don’t fall for it people - Wilderton is PAYING for this audit, what do you think they’ll find?',
          'AB-2_7-social-ACT-What-happened-to_boycott':
            'Hey everyone, what happened to the boycott? Am I the only one still not buying WildertonWear? #BoycottWW',
          'AB-2_8-option-Collection_box': 'Put a collection box on the shop counter and encourage customers to give to support the cause.',
          'AB-2_8-scene-DELAY-Business_owner':
            'Encouraged by the latest developments, you discuss with friends what you, as a business owner, can do to give the campaign another boost?',
          'AB-2_8-option-DELAY-Discount-WildertonWear': 'Launch a discount campaign on WildertonWear to increase sales.',
          'AB-2_8-option-DELAY-Call_resellers-to-support':
            'Call other resellers of WildertonWear’s products and convince them to support the company.',
          'AB-2_8-scene-ACT-Business_owner': 'Together with friends, you discuss what you, as a business owner, can do to help the cause?',
          'AB-2_8-option-ACT-Call_resellers_join_boycott':
            'Call other resellers of WildertonWear’s products and convince them to join the boycott.',
          'AB-2_8-option-ACT/WAIT-Discount_BlueSkin':
            'Launch a discount campaign on BlueSkin to encourage more customers to switch brands.',
          'AB-2_8-scene-WAIT-Business_owner':
            'Meanwhile, you and your friends are discussing what you, as a business owner, can do to help the cause?',
          'AB-2_9-scene-DELAY-Mod-Stockup_3':
            'Look at that! The discount campaign is going very well, you’ve even seen a number of new customers in the shop!\n\nIt is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-DELAY-Rad-Stockup_3':
            'Phew, that was a lot of work! But it seems to pay off. Not all retailers were ready to support WildertonWear, but you convinced enough of them to increase the sales.\n\nIt is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-WAIT-Stockup_3':
            'Wow, the support was even stronger than you thought! A majority of your customers generously donated to the collection box. You now have a substantial fund to support the cause.\n\nIt is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-ACT-Rad-Stockup_3':
            'Phew, that was a lot of work! But it seems to pay off. Not all retailers were ready to join the boycott, but you convinced enough of them to add pressure on WildertonWear.\n\nIt is time to stock up for the coming month. Should you continue to focus on BlueSkin, or maybe get some extra WildertonWear, just to be safe?',
          'AB-2_9-scene-ACT-Mod-Stockup_3':
            'Look at that! The discount campaign is going very well, you’ve even seen a number of new customers in the shop! But this is clearly better for the cause than for your business; your revenues are lagging quite a bit.\n\nIt is time to stock up for the coming month. Should you continue to focus on BlueSkin, or maybe get some extra WildertonWear, just to be safe?',
          'AB-3_1-scene-DELAY-Reaction_waiting_for_audit':
            'You made a good choice.\n\nThanks to your efforts, the boycott is slowing down while the customers are waiting for the results of the audit.',
          'AB-3_1-scene-WAIT-Reaction_waiting_for_audit':
            'Phew, that was a tough decision. You took the safe bet, which was a good idea this time.\n\nThe boycott has slowed down since the customers are waiting for the result of the audit.',
          'AB-3_1-scene-ACT-Reaction_waiting_for_audit':
            'This time, your will to change was a bit too radical.\n\nYou underestimated how many customers who would forget about the boycott while waiting for the finished investigation.',
          'AB-3_2-social-WAIT-BlueSkin_bag':
            'Just had a discussion with a neighbour because of my BlueSkin bag. Hate how the whole town is so divided over the whole WildertonWear issue. :(',
          'AB-3_2-social-WAIT-Stick_to_boycott!':
            'Come on guys, stick to the boycott! We need to show Wildertonwear that they can’t get away with exploiting workers!',
          'AB-3_2-social-WAIT-What_if_close':
            'About the boycott: what if the factory has to close? Won’t that mean a lot of unemployment, and maybe a lot of people moving out to find jobs?',
          'AB-3_2-social-ACT-What_if_too_far':
            'Hey guys, I think it’s great that we’re showing WildertonWear what we think, but what if it goes too far? What if the factory has to close?',
          'AB-3_2-social-ACT-Think_this_through':
            'Maybe we should think this through? If the factory goes bust a lot of residents might have to move to find new jobs, and it could affect the entire community. Shops and restaurants might have to close. Do we want that?',
          'AB-3_2-social-ACT-What_alternatives':
            'I get the idea of boycotting for change, but what alternatives do we have if the factory goes bust?',
          'AB-3_2-social-DELAY-Brute_consumer_force':
            'I’m not sure brute consumer force is a constructive way to change things, but how else do we make WildertonWear understand that this is serious?',
          "A-3_2-social-DELAY-Can't_let_them_get_away":
            'I know how important WildertonWear is to our town’s history, but we can’t let them get away with exploiting the workers!',
          "B-3_2-social-DELAY-Can't_let_them_get_away":
            'I know how important WildertonWear is to our town’s history, but we can’t let them get away with destroying the planet!',
          'AB-3_2-social-DELAY-Loyal_customers':
            'Sure, the town needs jobs, but doesn’t WildertonWear also need to respect its workers and loyal customers?',
          'AB-3_3-scene-DELAY-Mod-Long_term':
            'A lot of people are worried, and you realise that rather than making rash decisions, you need to come up with long-term solutions.\n\nHow can you find a way to get WildertonWear to make the necessary changes, without risking the workers’ jobs?',
          'AB-3_3-option-WAIT/DELAY-WW_day':
            'Organise a WildertonWear day with concerts and family activities to raise money for the factory.',
          'AB-3_3-option-DELAY-Invite_interest_groups': 'Invite local interest groups to submit suggestions on how to protect the jobs.',
          'A-3_3-option-DELAY-Local_producer': 'Convince a local producer of filters and safety gear to donate equipment to the factory.',
          'B-3_3-option-DELAY-Local_producer': 'Convince a local producer of pollution filters to donate equipment to the factory.',
          'AB-3_3-scene-DELAY-Rad-Long_term':
            'A lot of people are worried. You realise that rather than making rash decisions, you need to come up with long-term solutions.\n\nHow can you find a way to get WildertonWear to make the necessary changes, without risking the workers’ jobs?',
          'AB-3_3-scene-ACT-How_to_thrive':
            'People are worried, and you realise that the community needs to talk about how the town could thrive even if the factory closes.\n\nWhat can you do to make the town more resilient?',
          'AB-3_3-option-ACT-Community_day':
            'Organise a community day for residents to brainstorm what the town could look like in the future.',
          'AB-3_3-option-ACT/WAIT-Invite_interest_groups':
            'Invite local interest groups to submit suggestions on how to create alternative sources of income.',
          'AB-3_3-option-ACT/WAIT-Fund_to_support': 'Start a fund to support the workers if the factory closes.',
          'AB-3_3-scene-WAIT-Long_term':
            'People are worried, and you realise that you are finally forced to choose sides. Should you try to find a way to force WildertonWear to make the necessary changes without risking the workers’ jobs, or is it time to start talking about how the town could thrive even if the factory closes?\n\nWhat is your next step?',
          'AB-3_4-scene-ACT-Rad-Community_day':
            'The community day was a big success! A large group of families with children, elderly citizens, enthusiastic teenagers, and local couples showed up to dream up different visions for the way forward.',
          'AB-3_4-scene-ACT-Mod-Suggestions':
            'Wow, that was a success! In just two weeks, you got 124 different suggestions from local interest groups! Now you’ll sort out the best ones to bring to the next council meeting.',
          'A-3_4-scene-DELAY-Rad-Safety_gear_producer':
            'You contact a few safety gear producers and find one that is willing to donate safety gear. However, the necessary equipment is currently out of stock due to a large order. The producer promises to get back to you as soon as the equipment is ready to be sent.',
          'B-3_4-scene-DELAY-Rad-Filtering_system_producer':
            'You contact a few wastewater filtering system producers and find one that is willing to donate filters. However, the necessary equipment is currently out of stock due to a large order. The producer promises to get back to you as soon as the equipment is ready to be sent.',
          'AB-3_4_scene-DELAY-Mod-Suggestions':
            'Wow, that was a success! In just two weeks, you got 119 different suggestions from local interest groups! Now you’ll sort out the best ones to bring to the next council meeting.',
          'AB-3_4-scene-DELAY-ModMod-WW_day':
            'The WildertonWear day is a success, and gathers a lot of townspeople; families with children, elderly citizens, enthusiastic teenagers, and local couples. As a result, you raise a lot of money for the factory!',
          'AB-3_4-scene-ACT-ModMod-Collection':
            'The collection takes off immediately, as many residents want to help the workers even if they don’t like their employer.',
          'AB-3_5-scene-Stockup_4':
            'This week, the town is bubbling with discussions. Tomorrow, the report from the factory audit will be released, and everyone is speculating on what it is going to say.\n\nUnfortunately, you need to get your stock-up order in today. How do you divide between the brands this time?',
          'AB-4_1-newsFlash-HL-WW_ignored_warnings': 'AUDIT SHOWS: WILDERTONWEAR IGNORED WARNINGS',
          'A-4_1-newsFlash-body-ACT-WW_ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the breaches without taking action. As a result, three of the largest national department stores announced that they have stopped selling WildertonWear.</b>\n“This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.”\nThe discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. According to sources, the boycott is on again, and the strikers are more determined than ever to keep striking until the company improves its safety equipment.\n...',
          'B-4_1-newsFlash-body-ACT-WW-ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the breaches without taking action. As a result, three of the largest national department stores announced that they have stopped selling WildertonWear.</b>\n“This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.”\nThe discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. According to sources, the boycott is on again, and the strikers are more determined than ever to keep striking until the company upgrades its filtering systems.\n...',
          'AB-4_1-newsFlash-DELAY-body-WW_ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the regulatory breaches without taking action.</b>\n“This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.”\nThe discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. But despite a widespread frustration with the company’s conduct, WildertonWear still has a lot of support in the community due to its long history. Many residents have family members who used to work at the factory, or once worked there themselves, and who still have good faith in the company.\n...',
          'AB-4_2-social-ACT-Still_on_a_strike':
            'Two months in, and we’re still on a strike. So proud of our members, especially in light of the latest news about the company ignoring warnings.',
          'AB-4_2-social-ACT-Another_push': 'Just as we suspected... Come on guys, it’s time for another push! #BoycottWW',
          'AB-4_2-social-ACT-Out_of_this_mess':
            'How do we get out of this mess?! Someone please come up with some long-term plans! #WildertonGate',
          'AB-4_2-social-DELAY-2_months_banner': 'If anyone is missing the “2 months of striking” banner, it is currently IN THE TRASH!',
          'AB-4_2-social-DELAY-148_yrs_of_history':
            'Wtf people, how long is this going to drag on?! If this continues, it’ll be the end of WildertonWear. Is that really what you want? 148 years of history, just gone?',
          'AB-4_2-social-DELAY-Another_push': 'Come on guys, it’s time for another push! #SupportWW',
          'AB-4_3-scene-Council_vote_suggestions':
            'It’s time for another council meeting, and this time you’re bringing three suggestions you have gathered from local interest groups.\n\nWhich one do you want to give an extra push?',
          'AB-4_3-option-ACT-ModMod/DELAY-Attract_new_companies':
            'Attract new companies to create jobs and lessen the dependence on the factory.',
          'AB-4_3-option-DELAY-Local_investor': 'Persuade a local investor to step in and offer WildertonWear a loan.',
          'B-4_3-option-DELAY-Rad-Relax_environmental_regulations':
            'Lobby national authorities to relax environmental regulations to help WildertonWear recover.',
          'A-4_3-option-DELAY-Rad/Mod-Relax_safety_regulations':
            'Lobby national authorities to relax safety regulations to help WildertonWear recover.',
          'AB-4_3-option-ACT-Rad/Mod-Universal_basic_income':
            'Introduce a universal basic income, so workers can afford to leave WildertonWear if they want to.',
          'AB-4_3-option-ACT-Evening_classes': 'Sponsor evening classes for factory workers to train for other professions.',
          'AB-4_3-option-ACT/DELAY-Rad-Clothing_repair_shop':
            'Fund a clothing repair shop, where the workers could find jobs if the factory were to close.',
          'AB-4_4-scene-DELAY-Mod-Local_sponsor':
            'It has taken quite some time, but you finally manage to find a local sponsor who is willing to step in and offer WildertonWear a loan to get back on their feet. The sponsor prefers to stay anonymous and mentions that you can negotiate the repayment conditions later.\n\nYou are so relieved to finally have found a solution that you happily agree to the conditions.',
          'AB-4_4-scene-ACT-ModMod-Clothing_repair_shop':
            'That went well! Your group decided to start collecting money to fund a little shop to repair and mend clothes. Not only would it create more jobs, but it would also extend the lifetime of WildertonWear clothing.',
          'AB-4_4-scene-ACT-Mod-Evening_classes':
            'Yay, the proposal was approved! Now you need to find a suitable place to be, recruit teachers, set up the administration and enrol students.',
          'AB-4_4-scene-DELAY-ModMod-Attract_companies':
            'Yes, you did it! A group is put together to draft a proposal with cheap land deals and potential tax reductions, and to book meetings with companies that are considering moving to Wilderton.',
          'A-4_4-scene-DELAY-Rad-Relax_safety_regulations':
            'Looks like your efforts are finally paying off! After weeks of lunches, joint meetings, top-secret discussions, and a visit to one of the authority’s planning meetings, everything seems to fall into place.\n\nYou are getting signals that it might be possible to arrange a one-time exception from the safety regulations for WildertonWear, just to save its crucial business.',
          'B-4_4-scene-DELAY-Rad-Relax_environmental_regulations':
            'Looks like your efforts are finally paying off! After weeks of lunches, joint meetings, top-secret discussions, and a visit to one of the authority’s planning meetings, everything seems to fall into place.\n\nYou are getting signals that it might be possible to arrange a one-time exception from the environmental regulations for WildertonWear, just to save its crucial business.',
          'AB-4_4-scene-ACT-Rad-Universal_basic_income':
            'No luck this time.\n\nThe council promised to consider it, but they didn’t think it was a good solution for now since it would probably take too long to implement.',
          'AB-4_5-scene-ACT-Stockup_5':
            'Meanwhile, there are rumours about a potential investor who could help the factory with a sizable loan.\n\nWith that in mind, how will you stock up for next month?',
          'AB-4_5-scene-DELAY-Stockup_5':
            'But you also have a business to run, and once again, it is time to stock up.\n\nHow will you divide the items between brands this time?',
          'AB-5_1-newsFlash-HL-Factory_closing': 'WILDERTONWEAR FACTORY CLOSING',
          'A-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I have already signed up for evening classes to train to become a nurse.”\n...',
          'B-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I have already signed up for evening classes to train to become a nurse.”\n...',
          'A-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job, but hopefully the campaign to bring in new companies will lead to more jobs.”\n...',
          'B-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job, but hopefully the campaign to bring in new companies will lead to more jobs”\n...',
          'A-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. The relaxed safety regulations came too late, and with the tough financial situation, decreased production due to the strikes, and high tax payments, it was simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move”\n...',
          'B-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. The relaxed environmental regulations came too late, and with the tough financial situation, decreased production due to the strikes, and high costs for system upgrades, it was simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move”\n...',
          'A-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. After the company was forced to back out of a sponsor deal, which turned out to be a money laundering scheme, the tough financial situation, decreased production due to the strikes, and high tax payments simply became too much.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move”\n...',
          'B-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. After the company was forced to back out of a sponsor deal, which turned out to be a money laundering scheme, the tough financial situation, decreased production due to the strikes, and high costs for system upgrades simply became too much.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move”\n...',
          'A-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The potential investor withdrew last minute, and with the tough financial situation, decreased production due to the strikes, and high tax payments, it was simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town”\n...',
          'B-5_1-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The potential investor withdrew last minute, and with the tough financial situation, decreased production due to the strikes, and high costs for system upgrades, it was simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things.\n“On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”\n...',
          'A-newsFlash-body-ACT-ModMod-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”\n...',
          'B-5_1-newsFlash-body-ACT-ModMod-Factory_closing':
            '<b>After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company.</b>\nIt is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton.\n“It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk. But on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”\n...',
          'AB-5_2-scene-option-What_has_happened': 'What has happened?',
          'AB-5_2-scene-2_yrs_later': 'Two years later...',
          'AB-5_3-newsFlash-HL-ACT-Mod-Centre_2_yrs': 'WEARHOUSE CENTRE CELEBRATES 2 YEARS',
          'AB-5_3-newsFlash-body-ACT-Mod-Centre_2_yrs':
            '<b>When the machines at WildertonWear stopped, a few enthusiasts stepped in. Today, the old factory building celebrates 2 years as a thriving community centre, and invites all residents to join in the celebrations.</b>\n Thanks to a group of enthusiasts, the history of the WildertonWear factory took a completely new turn. The old brick factory buildings are still there, but instead of thundering machines, you now hear music, conversations, and the clicking of computer keyboards. The large halls have been turned into a co-working space, with a popular café, a clothing repair and mending shop, and a gym.\nMost of the former factory workers have found new occupations, working for the tailor, in the BlueSkin workshop in the next town, or pursuing new dreams as café owners or students. And the community members love their new centre - in the past months, the number of visitors has been growing steadily.\n...',
          'AB-5_3-newsFlash-HL-ACT-ModMod-Community_centre_2_yrs': 'COMMUNITY CENTRE TURNS 2 YEARS',
          'AB-5_3-newsFlash-body-ACT-ModMod-Community_centre_2_yrs':
            '<b>The history of the old Wilderton factory could have ended when WildertonWear folded. Instead, it now celebrates 2 years as a community centre, with a co-working space, café and gym.</b>\nThanks to a group of enthusiasts, the historical Wilderton factory now celebrates its 150th anniversary with a complete revival. The old factory buildings are still there, but instead of thundering machines, you now hear soft conversations and the clicking of computer keyboards. The large halls have been turned into a co-working space, a popular café, and a gym.\nMost of the former factory workers have found new occupations. Some have opened their own tailor shops in town, others have been hired by BlueSkin, and some have taken temporary jobs while looking for new opportunities.\n...',
          'AB-5_3-newsFlash-HL-DELAY-Mod-Coworking_space': 'WILDERTON FACTORY TURNS CO-WORKING SPACE',
          'AB-5_3-newsFlash-body-DELAY-Mod-Coworking_space':
            '<b>When the machines at WildertonWear stopped, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory is experiencing a revival.</b>\nThe old factory buildings are still there, but instead of thundering machines, you now hear the sound of drills and saws. After some time of deliberations, the municipality has decided to turn the building into office space, with a café and small museum dedicated to the factory’s history.Most of the former factory workers have found work with BlueSkin or opened their own little tailoring shops, while some are still working odd jobs while looking for new opportunities. And maybe they will one day end up in an office in the old factory building? Beth Callistor, responsible for the project, is hopeful.\n“We have already had a lot of requests from companies that are considering moving their offices here.”\n...',
          'AB-5_3-newsFlash-HL-DELAY-ModMod-Coworking_space_opened': 'WILDERTON CO-WORKING SPACE OPENED',
          'AB-5_3-newsFlash-body-DELAY-ModMod-Coworking_space_opened':
            '<b>Thanks to a group of enthusiasts, the buildings of the historical WildertonWear factory are no longer empty. Today, the old factory building celebrates 1 year as a modern co-working space for local entrepreneurs.</b>\nWhen the machines at WildertonWear stopped, many declared it the end of a proud history of manufacturing. But just in time for it’s 150th anniversary, the factory is once again thriving. The factory buildings are still there, but instead of the thundering machines, you now hear soft conversations and the clicking from keyboards. Thanks to a group of enthusiasts and a generous donation by the municipality, the large halls have been turned into fresh new offices and a café.\n...',
          'AB-5_3-newsFlash-HL-ACT-Rad-Centre_wins_award': 'WEARHOUSE CENTRE WINS AWARD',
          'AB-5_3-newsFlash-body-ACT-Rad_Centre_wins_award':
            '<b>Only two years after its opening, the new WearHouse community centre won the prestigious “Best community centre” award. The jury was deeply impressed by how the old factory had been turned into a living, thriving community without losing sight of its old history.</b>\nIt’s been two years since the WildertonWear factory was forced to close down. The old brick factory buildings are still there, but instead of thundering machines, you now hear music, conversations, and laughter. The big halls have been turned into a community centre with maker space workshops, meeting rooms for local organisations, a small second hand shopping mall, and a popular café. \nMost of the former factory workers have found new jobs in the clothing repair and mending shop, in the workshops, or at Blueskin in the next town. And the community members love their new centre, in the past months, the number of visitors has been growing steadily.\n...',
          'AB-5_3-newsFlash-HL-DELAY-Rad-Factory_revived': 'WILDERTON FACTORY TO BE REVIVED',
          'A-5_3-newsFlash-body-DELAY-Rad-Factory_revived':
            '<b>When strikes and tax problems forced the WildertonWear factory to close, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory might be revived in a new shape.</b>\nThe old factory buildings are still here, but instead of thundering machines, you now hear the sound of birds echoing through the large halls. After two years of deliberations, the municipality has finally found a large manufacturing company that is considering settling in town. Beth Callistor, responsible for the project, is hopeful.\n“We have had some very positive initial talks with the manufacturer, and we think that this could bring a lot of new jobs.” When the factory closed, many of its former workers were forced to look elsewhere for jobs. Some have been hired by BlueSkin or opened their own business, while others have left town or are still searching for a new occupation. Many shop owners and restaurants also saw their revenues decrease as many residents moved out, and are also hoping that a new company could mean new business opportunities.\n...',
          'B-5_3-newsFlash-body-DELAY-Rad_Factory_revived':
            '<b>When strikes forced the WildertonWear factory to close, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory might be revived in a new shape.</b>\n The old factory buildings are still here, but instead of thundering machines, you now hear the sound of birds echoing through the large halls. After two years of deliberations, the municipality has finally found a large manufacturing company that is considering settling in town. Beth Callistor, responsible for the project, is hopeful.\n“We have had some very positive initial talks with the manufacturer, and we think that this could bring a lot of new jobs.” When the factory closed, many of its former workers were forced to look elsewhere for jobs. Some have been hired by BlueSkin or opened their own business, while others have left town or are still searching for a new occupation. Many shop owners and restaurants also saw their revenues decrease as many residents moved out, and are also hoping that a new company could mean new business opportunities.\n...',
          'end-headline': 'THE END',
          'end-ACT-Rad':
            'Excellent work! Thank you for playing!\n\nThanks to your visions and wild ideas, you and your friends turned a potential disaster into a new start for the entire community!',
          'end-ACT-Mod':
            'Excellent work! Thank you for playing!\n\nThanks to your foresight and good planning, you and your friends turned a potential disaster into a development that has boosted the entire community!',
          'end-ACT-ModMod/DELAY-ModMod':
            'Excellent work! Thank you for playing!\n\nThanks to your hard work, you and your friends turned a potential disaster into a positive development!',
          'end-DELAY-Rad':
            'Excellent work! Thank you for playing!\n\nThanks to your hard work, you and your friends managed to keep the community and its traditions alive. You kept the WildertonWear factory running as long as possible, and have good hopes for the future.',
          'end-DELAY-Mod':
            'Excellent work! Thank you for playing!\n\nThanks to your hard work to preserve the community’s history, you and your friends turned a potential disaster into a new opportunity.',
        },
      },
      sv: {
        translation: {
          productA: 'Stenmarks',
          productB: 'Blåställ',
          continue: 'Fortsätt',
          welcome: {
            headline: 'Det här är Stenmarken.',
            description1: `Det är en liten stad med en huvudgata, en å och en gammal fabrik.
            Här äger du en liten klädbutik som heter`,
            description2: `(uppkallad efter din favoritfärg och mest använda verktyg) där du säljer arbetskläder som overaller, jackor och kängor. Du säljer ungefär 100 produkter per månad.\n\nOm fyra månader löper hyreskontraktet på butikslokalen ut. För att ha råd att förlänga det behöver du sälja ungefär 50 plagg varje månad.`,
            button: 'Starta äventyret',
            startScreenSubtitle: 'Kan du balansera din budget på en social vändpunkt?',
          },
          stockUp: {
            headline: 'Lagerbeställning',
            buyHeadline: 'Hur många varor vill du köpa?',
            maxMessage: '(max 100 totalt)',
            maxError: 'Du kan bara köpa 100 varor totalt',
            button: 'Skicka beställning',
            inventoryHeadline: 'Lagerstatus',
            inventoryEmpty: 'Tomt',
            eventTypeBuy: 'Köpt',
            eventTypeSell: 'Sålt',
            eventTypeInitial: 'Urspr. lager',
            noDate: 'Inget datum',
            inStock: 'I lager',
          },
          newsFlash: {
            newspaperName: 'Kvällskuriren',
            price: 'pris: 18 kronor',
            photo: 'Foto',
          },
          statusBar: {
            daysLeft: 'Dagar kvar på hyreskontraktet',
            publicOpinion: 'Allmänhetens åsikt om Stenmarks',
            positive: 'Positiv:',
            neutral: 'Neutral:',
            negative: 'Negativ:',
            salesNeeded: 'Försäljning som krävs för att förlänga kontraktet',
            yourSales: 'Din försäljning: {{totalSales}}',
          },
          socialUsers: {
            wildertonwear_official: { name: 'Stenmarks Official', user: 'Stenmarks_official' },
            wildertonwear_factory_union: { name: 'Stenmarksfabrikens fackförening', user: 'Stenmarks_factory_union' },
            joe_6000: { name: 'Josef Cassel', user: 'joe_6000' },
            wilhelmine_lillie: { name: 'Wilhelmina Lilja', user: 'wilhelmina_lilja' },
            randy: { name: 'Robin Witting', user: 'robbie' },
            Domenic71: { name: 'Dennis Lundin', user: 'Dennis71' },
            LLindström: { name: 'Liam Lindström', user: 'LLindström' },
            leta_54: { name: 'Meta Molin', user: 'meta_54' },
          },
          survey: {
            question1:
              'Dina vänner samlas i din butik för att prata om vad som hänt, och vad som kommer att hända.\n\nDin bästa vän frågar vad du hade gjort annorlunda om du fått en chans till?',
            question2: "Vilka andra lösningar har du funderat på som du aldrig fick en chans att testa?",
          },
          consent: {
            welcome: 'VÄLKOMMEN!',
            instruction: 'Innan du spelar behöver du har läst och samtyckt till följande:',
            noConsentMessage1: "Synd att du inte samtycker. Är du helt säker på att du vill lämna spelet?",
            noConsentMessage2: 'Trist att se dig lämna. Hoppas du hittar till ett roligare ställe...',
            statement1: {
              prefix: "Jag förstår att det här spelet är en del av ett masteruppsatsprojekt vid Stockholms universitet som handlar om",
              suffix: 'som kommunikationskanaler.',
              options: {
                games: 'spel',
                kites: 'pappersdrakar',
                lamas: 'lamor',
              },
            },
            statement2: {
              prefix: 'Jag är medveten om och godkänner att mina spelresultat och informationen jag anger kommer att',
              suffix: '. Informationen sparas i minst 10 år, och kan komma att användas för framtida studier.',
              options: {
                storedDigitally: 'sparas digitalt',
                runestone: 'huggas in i en runsten',
                beach: 'skrivas i sanden på en strand',
              },
            },
            statement3: {
              prefix: 'Jag lovar att',
              suffix: 'uppge några personliga uppgifter som mitt riktiga namn, mina kontaktuppgifter, eller någon annan identifierande eller känslig information.',
              options: {
                not: 'inte',
                absolutelyNot: 'absolut inte',
                underNoCircumstances: 'under inga omständigheter',
              },
            },
            statement4: {
              prefix: 'Jag förstår att mitt deltagande i studien är helt',
              suffix:
                '. Jag kan dra tillbaka mitt medgivande när som helst utan några konsekvenser och utan att behöva ange en anledning. Om jag vill dra tillbaka mitt medgivande efter att ha spelat spelet måste jag kontakta ansvarig forskare (se kontaktuppgifter nedan).',
              options: {
                voluntary: 'frivilligt',
                optional: 'valfritt',
                upToMe: 'upp till mig',
              },
            },
            statement5: {
              prefix: 'Jag förstår att om jag har frågor, synpunkter eller vill veta mer om studieresultaten kan jag kontakta',
              suffix: '(se kontaktuppgifter nedan).',
              options: {
                responsibleResearcher: 'ansvarig forskare',
                personListedBelow: 'personen nedan',
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
            screenshot: 'Ta en skärmbild av den här sidan utifall att du behöver kontakta forskaren senare.',
          },
          demographic: {
            title: 'VEM ÄR DU?',
            instruction: 'Innan vi börjar behöver vi veta lite mer om dig:',
            tooYoung: 'Tyvärr behöver du vara minst 18 år för att spela det här spelet. Du får roa dig nån annanstans...',
            birthYear: {
              label: 'Vilket år är du född?',
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
              label: 'Vilken är din högsta studienivå?',
              placeholder: 'Välj ett alternativ',
              options: {
                primary: 'Grundskola',
                secondary: 'Gymnasium',
                folkHighSchool: 'Folkhögskola',
                adultEducation: 'Vuxenutbildning (Komvux)',
                university: 'Universitet eller högskola',
                other: 'Annan',
              },
            },
            newsSources: {
              title: 'Vilka nyhetskällor använder du mest?',
              description: 'Dra och släpp för att ranka dem, med dina favoriter längst upp.',
              options: {
                blogs: 'Bloggar',
                magazines: 'Tidskrifter och magasin',
                newspapers: 'Dagstidningar',
                publicService: 'Public service / Nationell radio eller TV',
                socialMedia: 'Sociala medier',
                websites: 'Hemsidor',
                youtube: 'Youtube',
                other: 'Annan',
              },
            },
            electionIssues: {
              title: 'Vilka av dessa frågor tycker du är viktigast inför nästa val?',
              description: 'Dra och släpp för att ranka dem, med de viktigaste frågorna längst upp.',
              options: {
                healthcare: 'Sjukvården',
                crime: 'Brottslighet/lag och ordning',
                education: 'Skola och utbildning',
                immigration: 'Integration/invandring',
                environment: 'Miljö/klimat',
                defense: 'Försvar och säkerhet',
                elderlycare: 'Äldreomsorgen',
                economy: 'Sveriges ekonomi',
                employment: 'Arbetslöshet/sysselsättning',
                pensions: 'Pensioner',
              },
            },
            howDidYouFindGame: {
              label: 'Hur hittade du det här spelet?',
              placeholder: 'Välj ett alternativ',
              options: {
                internetLink: 'Klickade på en länk på internet',
                socialMediaLink: 'Klickade på en länk på sociala medier',
                friend: 'Fick tips av en vän',
                poster: 'Såg en affisch',
                gameSession: 'Anmälde mig till ett speltillfälle',
                other: 'Annat',
              },
            },
            button: {
              submit: 'Klar!',
            },
          },
          end: {
            overTarget:
              'Och sist men inte minst: under de senaste månaderna sålde du {{totalSales}} produkter, tillräckligt för att ha råd att förlänga hyreskontraktet för butikslokalen!',
            underTarget:
              'Tyvärr sålde du bara {{totalSales}} produkter, och hade inte råd att förlänga hyreskontraktet för butikslokalen 🙁.',
            playAgain: 'Spela igen!',
          },
          'AB-scene-Most_popular_brands':
            'Ditt mest sålda varumärke är Stenmarks, ett lokalt märke som tillverkas i den gamla fabriken i staden.\n\nOm man ska vara ärlig är det inget kvalitetsmärke längre. Men eftersom det har en lång tradition och en lokal koppling är det fortfarande populärt bland turister och ortsbor av nostalgiska skäl.\n\nDitt näst mest sålda varumärke är Blåställ, ett högkvalitetsmärke som tillverkas i grannstaden.',
          'AB-scene-Continue': 'Fortsätt',
          'AB-scene-Things_about_to_change': 'Men det kommer snart att förändras...',
          'AB-scene-Uh_oh': 'Oj då...',
          'A-newsFlash-HL-Tax_evasion': 'MISSTÄNKT SKATTEFUSK HOS STENMARKS',
          'B-newsFlash-HL-Super_emitter': 'STORA UTSLÄPP FRÅN STENMARKS',
          'A-newsFlash-body-Tax_evasion':
            '<b>I ett undersökande reportage kan Kvällskuriren avslöja att Stenmarks låtit bli att betala skatt under de senaste fem åren.\n- Vi var i en svår ekonomisk situation och var tvungna att dra ner på utgifterna, säger en tidigare anställd som vill förbli anonym.</b>\nI över hundra år har Stenmarks gamla fabriksmurar och skorstenar rest sig över Stenmarken. Många ortsbor har sett generationer av familjemedlemmar gå till sitt arbete på fabriken - eller arbetat där själva - och har ett känslomässig förhållande till företaget som betraktats som ortens ekonomiska ryggrad i decennier.\nSå när företagsledningen för några år sedan var öppna med verksamhetens ekonomiska svårigheter var det många ortsbor som valde att stödköpa deras produkter. Även om många klagat över den försämrade kvaliteten på plaggen, har namnet Stenmarks oavsett förblivit en källa till stolthet hos ortsbefolkningen.\nNu kan Kvällskuriren avslöja att företaget inte varit lika generöst tillbaka. Under de senaste åren har Stenmarks betalat noll kronor i skatt. I en intervju med Kvällskuriren säger Stenmarks VD, Bert Svindel, att företaget hela tiden haft för avsikt att betala skatterna "så snart den ekonomiska situationen förbättrades"\n...',
          'B-newsFlash-body-Super_emitter':
            '<b>I ett undersökande reportage kan Kvällskuriren avslöja att Stenmarks har släppt ut väldigt höga halter av koldioxid och metangas i atmosfären under de senaste decennierna. Utsläppsfiltren har inte bytts ut på många år, och som ett resultat har företaget släppt ut fler växthusgaser i atmosfären än all biltrafik i landet under samma period.</b>\nI över hundra år har Stenmarks gamla fabriksmurar och skorstenar rest sig över Stenmarken. Många ortsbor har sett generationer av familjemedlemmar gå till sitt arbete på fabriken - eller arbetat där själva - och har ett känslomässigt förhållande till företaget som betraktats som ortens ekonomiska ryggrad i decennier. Så när företagsledningen för några år sedan var öppna med verksamhetens ekonomiska svårigheter var det många ortsbor som valde att stödköp deras produkter. Även om många klagat över försämrad kvalitet på plaggen har namnet Stenmarks oavsett förblivit en källa till stolthet hos ortsbefolkningen.\nMen när Kvällskurirens undersökande reportageteam tog en närmare titt hittade de en mörkare sida. Fabriken har släppt ut väldigt höga halter av koldioxid och metangas i jämförelse med andra fabriker av samma storlek och typ.\n- Vi visste att våra system för utsläppsfiltrering inte levde upp till aktuell standard, säger en tidigare anställd som vill förbli anonym, men vi fick höra att det inte gick att göra något eftersom vi behövde skära ner på våra kostnader.\n..',
          'A-social-Tax_evasion-WTF':
            'Vad i h-vete Stenmarks?! Vi fortsätter köpa era skitkvalitets-plagg år efter år för att stötta, och vad fan får vi tillbaka?',
          'B-social-Super_emitter-WTF':
            'Vad i h-vete Stenmarks?! Vi fortsätter köpa era skitkvalitetsplagg år efter år för att stötta, och i gengäld fortsätter ni att värma upp planeten?',
          "AB-social-Let's_boycott": 'Nu räcker det, från och med nu bojkottar jag Stenmarks! Vem är på? #BojkottaStenis',
          'AB-scene-Stockup_1':
            'Det är dags att fylla på lagret inför nästa månad, och du måste välja hur du ska fördela din beställning mellan varumärkena.\n\n Med tanke på sannolikheten för en bojkott, köper du samma antal produkter från Stenmarks som vanligt, eller byter du ut några mot ditt näst mest populära märke Blåställ?',
          "AB-scene-Let's_stock_up!": 'Fyll på lagret!',
          'AB-1_1-scene-ACT-Reaction_boycott':
            'Du gjorde rätt i att förutse en bojkott. Ortsborna är förbannade på Stenmarks, och efterfrågan sjunker snabbt.\n\nOch det gör också dina försäljningsinkomster.',
          'AB-1_1-scene-DELAY-Reaction_boycott':
            'Hm. Det ser ut som att du underskattade ortsbornas missnöje med Stenmarks. Efterfrågan sjunker snabbt.\n\nDina försäljningsinkomster sjunker också, men inte så mycket att affärerna blir lidande.',
          'AB-1_1-scene-WAIT-Reaction_boycott':
            'Ortsborna är förbannade på Stenmarks, och efterfrågan sjunker snabbt.\n\nTur att du inte gjorde några alltför stora omprioriteringar, du förlorar bara en liten del av dina inkomster.',
          'AB-1_2-scene-ACT-Questions_from_customers':
            'Några av dina kunder gillar att du minskat din beställning till Stenmarks. Andra undrar om du verkligen vill riskera att ett så gammalt företag - och en av ortens största arbetsgivare - går i konkurs?\n\nVad svarar du?',
          'A-1_2-option-ACT-No_right_to_exploit': 'Bara för att de har en lång historia har de inte rätt att utnyttja ortsbefolkningen.',
          'B-1_2-option-ACT-No_right_to_pollute': 'Bara för att de har en lång historia har de inte rätt att förorena atmosfären.',
          "AB-1_2-option-ACT-Can't_afford_to_support": 'Jag har inte råd att stötta Stenmarks om mina kunder inte köper deras produkter.',
          'AB-1_2-option-ACT-Temporary_boycott': 'Jag tror att en bojkott kan lära Stenmarks en läxa, bara den inte pågår för länge.',
          'AB-1_2-scene-WAIT-Questions_from_customers':
            'Dina kunder undrar var du står: kommer du att stödja Stenmarks och deras långa historia, eller bojkottar du trots att det finns en risk att företaget kan gå i konkurs?\n\nVad svarar du?',
          'AB-1_2-option-WAIT-BlueSkin_safer_bet': 'Det ser ut som att Blåställ är ett säkrare val just nu, så jag satsar på deras produkter.',
          "AB-1_2-option-WAIT-Can't_afford_financial_risk":
            'Jag har inte råd att ta några ekonomiska risker, så jag väntar och ser vad mina konkurrenter gör.',
          'AB-1_2-option-WAIT-Business_is_business':
            'Affärer är affärer, inte politik. Trots bojkotten är Stenmarks fortfarande mitt mest sålda varumärke.',
          'A-1_2-scene-DELAY-Questions_from_customers':
            'Vissa av dina kunder är glada att du fortsätter stödja Stenmarks, eftersom de är en av ortens största arbetsgivare. Andra undrar hur du kan stötta en verksamhet som uppenbarligen utnyttjar ortsbefolkningen?\n\nVad svarar du?',
          'B-1_2-scene-DELAY-Questions_from_customers':
            'Vissa av dina kunder är glada att du fortsätter att stödja Stenmarks, eftersom de är en av ortens största arbetsgivare. Andra undrar hur du kan stötta en verksamhet som uppenbarligen bidrar till klimatförändringen.\n\nVad svarar du?',
          'AB-1_2-option-DELAY-Better_through_dialogue':
            'Stenmarks har uppenbarligen problem, men det är bättre att försöka påverka dem genom dialog.',
          'AB-1_2-option-DELAY-Business_is_business':
            'Affärer är affärer, inte politik. Trots bojkotten är Stenmarks fortfarande mitt mest sålda varumärke.',
          'AB-1_2-option-DELAY-Have_to_support': 'Jag måste stödja dem - om de går i konkurs kommer det att påverka hela orten.',
          'A-1_3-social-Unfortunate_misunderstanding':
            'Det har blivit ett olyckligt missförstånd angående våra skatte-betalningar. Vi kommer självklart att betala skatt, men på grund av ekonomiska svårigheter behöver vi lite mer tid.\nUnder tiden: kolla in vår nya skogshuggarkollektion!',
          'B-1_3-social-Unfortunate_misunderstanding':
            'Det har blivit ett olyckligt missförstånd angående våra växthusgas-utsläpp. Vi kommer självklart att uppgradera våra filtreringssystem, men på grund av ekonomiska svårigheter behöver vi lite mer tid.\nUnder tiden: kolla in vår nya skogshuggarkollektion!',
          'A-1_4-scene-DELAY-Council_vote_extension':
            'Det finns fler sätt du kan påverka eller stödja Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att förlänga Stenmarks skatteinbetalningsperiod med fyra månader. Hur röstar du?',
          'B-1_4-scene-DELAY-Council_vote_extension':
            'Det finns fler sätt du kan påverka eller stödja Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att skjuta fram deadline för uppgraderingen av Stenmarks filtersystem med fyra månader för att minska det ekonomiska trycket på företaget. Hur röstar du?',
          'AB-1_4-option-DELAY-Vote_against': 'Mot. Vi har stöttat dem länge nog.',
          'AB-1_4-option-DELAY-Abstain_vote': 'Jag avstår. Om jag väljer sida kan jag förlora kunder.',
          'AB-1_4-option-DELAY-Vote_for': 'För, förstås! Vi måste hålla fabriken igång, för arbetarnas och ortens skull.',
          'AB-1_4-option-ACT-Abstain_vote': 'Jag avstår. Om jag väljer sida kan jag förlora kunder.',
          'A-1_4-scene-WAIT-Council_vote_extension':
            'Det finns fler sätt du kan påverka eller stödja Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att förlänga Stenmarks skatteinbetalningsperiod med fyra månader. Hur röstar du?',
          'B-1_4-scene-WAIT-Council_vote_extension':
            'Det finns fler sätt du kan påverka eller stödja Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att skjuta fram deadline för uppgraderingen av Stenmarks filtersystem med fyra månader för att minska det ekonomiska trycket på företaget. Hur röstar du?',
          'A-1_4-option-WAIT-Vote_against': 'Mot. Vi har stöttat dem länge nog.',
          'B-1_4-option-WAIT-Vote_against': 'Mot. De borde ha fixat systemet för länge sen.',
          'AB-1_4-option-WAIT-Vote_for': 'För. Vi måste hålla fabriken igång, för arbetarnas och ortens skull.',
          'A-1_4-scene-ACT-Council_vote_extension':
            'Det finns fler sätt du kan påverka Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att förlänga Stenmarks skatteinbetalningsperiod med fyra månader. Hur röstar du?',
          'B-1_4-scene-ACT-Council_vote_extension':
            'Det finns fler sätt du kan påverka Stenmarks. Som lokalpolitiker och ledamot i kommunfullmäktige bjuds du in till regelbundna kommunfullmäktigemöten.\n\nDen här veckan röstar ni på ett förslag om att skjuta fram deadline för uppgraderingen av Stenmarks filtersystem med fyra månader för att minska det ekonomiska trycket på företaget. Hur röstar du?',
          'A-1_4-option-ACT-Vote_against': 'Mot, förstås! Vi har stöttat dem länge nog.',
          'B-1_4-option-ACT-Vote_against': 'Mot, förstås! De borde ha fixat systemet för länge sen.',
          'AB-1_4-option-ACT-Vote_for': 'För. Vi behöver hålla fabriken igång, för arbetarnas och ortens skull.',
          'A-1_5-scene-ACT-Extension_rejected':
            'Det funkade! Dina argument övertygade de andra ledamöterna, och en majoritet röstade mot förslaget.\n\nStenmarks måste betala sin skatt utan dröjsmål.',
          'B-1_5-scene-ACT-Extension_rejected':
            'Det funkade! Dina argument övertygade de andra ledamöterna, och en majoritet röstade mot förslaget.\n\nStenmarks måste uppgradera systemet utan dröjsmål.',
          'A-1_5-scene-ACT-Extension_approved':
            'Åh nej, så nära! Dina argument övertygade flera av de andra ledamöterna, men inte tillräckligt många för att få en majoritet.\n\nFörlängningen klubbades igenom, och Stenmarks får fyra månader extra på sig att betala skatten.',
          'B-1_5-scene-ACT-Extension_approved':
            'Åh nej, så nära! Dina argument övertygade flera av de andra ledamöterna, men inte tillräckligt många för att få en majoritet.\n\nFörlägningen klubbades igenom, och Stenmarks får fyra månader extra på sig att uppgradera systemet.',
          'A-1_5-scene-DELAY-Extension_approved':
            'Bra jobbat! Dina argument övertygade de andra ledamöterna, och majoriteten röstade för en förlängning.\n\nStenmarks får fyra månader extra på sig att betala skatten.',
          'B-1_5-scene-DELAY-Extension_approved':
            'Bra jobbat! Dina argument övertygade de andra ledamöterna, och majoriteten röstade för en förlängning.\n\nStenmarks får fyra månader extra på sig att uppgradera systemet.',
          'A-1_5-scene-DELAY-Extension_rejected':
            'Åh nej, så nära! Dina argument övertygade några av de andra ledamöterna, men inte tillräckligt många för att få en majoritet.\n\nFörlängningen avslogs, och Stenmarks måste betala skatten utan dröjsmål.',
          'B-1_5-scene-DELAY-Extension_rejected':
            'Åh nej, så nära! Dina argument övertygade några av de andra ledamöterna, men inte tillräckligt många för att få en majoritet.\n\nFörlägningen avslogs, och Stenmarks måste uppgradera systemet utan dröjsmål.',
          'A-1_5-scene-WAIT-Extension_approved':
            'Med en knapp majoritet röstade kommunfullmäktige för en förlängning.\n\nStenmarks får fyra månader extra på sig att betala skatten.',
          'B-1_5-scene-WAIT-Extension_approved':
            'Med en knapp majoritet röstade kommunfullmäktige för en förlängning.\n\nStenmarks får fyra månader extra på sig att uppgradera systemet.',
          'A-1_5-scene-WAIT-Extension_rejected':
            'Med en knapp majoritet röstade kommunfullmäktige mot en förlängning.\n\nStenmarks måste betala skatten utan dröjsmål.',
          'B-1_5-scene-WAIT-Extension_rejected':
            'Med en knapp majoritet röstade kommunfullmäktige mot en förlängning.\n\nStenmarks måste uppgradera systemet utan dröjsmål.',
          'AB-1_6-scene-Stockup_2':
            'Det har gått två veckor, och de flesta av dina kunder verkar ha förlåtit Stenmarks.\n\nDet är dags att fylla på lagret igen, och under de senaste veckorna har du märkt av en långsam ökning i efterfrågan på Stenmarks produkter. Betyder det att bojkotten snart är över?',
          'AB-2_1-scene-DELAY-Reaction_2nd_newsflash': 'Ajdå, det kostar att stötta Stenmarks den här gången...',
          'AB-2_1-scene-WAIT-Reaction_2nd_newsflash': 'Hm, den här gången hade det varit bättre att inte köpa in så många Stenmarksprodukter...',
          'AB-2_1-scene-ACT-Reaction-2nd_newsflash':
            'Du gjorde rätt i att inte beställa så många Stenmarksprodukter.\n\nMånga kunder var på jakt efter ett alternativ, och du sålde helt slut på Blåställ!',
          'A-2_2-newsFlash-HL-Ignoring_health_regulations': 'STENMARKS BRYTER MOT ARBETSMILJÖREGLER',
          'B-2_2-newsFlash-HL-Ignoring_environmental_regulations': 'STENMARKS BRYTER MOT MILJÖREGLER',
          'A-2_2-newsFlash-body-Ignoring_health_regulations':
            '<b>Den lokala klädtillverkaren Stenmarks har under lång tid brutit mot arbetsmiljö-regelverket, enligt en arbetsmiljöinspektör. År av försummat underhåll av säkerhetsutrustning har gjort att fabriksarbetarna har exponerats för farliga nivåer av industridamm och kemikaler.</b>\nIngen av våra läsare lär ha missat skattesmitningsskandalen kring den lokala klädtillverkaren Stenmarks under de senaste veckorna. Men företaget har fler mörka hemligheter. I en exklusiv intervju har Kvällsposten fått information om ett flertal brott mot hälso- och säkerhetsregler. Enligt en arbetsmiljöinspektör som vill förbli anonym har Stenmarks rutinmässigt ignorerat säkerhetsregler om tillåtna halter av industridamm och kemikalier. Säkerhetsutrustning som luftfilter och industrifläktar har inte underhållits eller bytts ut på flera år och erbjuder nu ett otillräckligt skydd. Enligt källan har Stenmarks medvetet utsatt sina arbetare för risker, och till följd av detta har antalet cancerdiagnoser och luftvägs-sjukdomar bland arbetare på fabriken ökat kraftigt.\n...',
          'B-2_2-newsFlash-body-Ignoring_environmental_regulations':
            '<b>Den lokala klädtillverkaren Stenmarks har under lång tid brutit mot miljöregelverket, enligt en miljöinspektör. År av försummat underhåll av systemet för avloppsfiltrering har gjort att farliga kemikalier släppts ut i Stenmarksån.</b>\nIngen av våra läsare lär ha missat utsläppsskandalen kring den lokala textiltillverkaren Stenmarks under de senaste veckorna. Men företaget har fler mörka hemligheter. I en exklusiv intervju har Kvällsposten fått information om ett flertal brott mot miljöregelverken. Enligt en miljö-inspektör som vill förbli anonym har Stenmarks rutinmässigt ignorerat miljöregler om högsta tillåtna kemikaliehalter i avloppsvattnet. Avloppsfiltreringssystemet har inte underhållits eller bytts ut på flera år och erbjuder nu ett otillräckligt skydd. Enligt källan har Stenmarks medvetet utsatt närmiljön och ortsbefolkningen för risker, och till följd av detta har antalet cancerdiagnoser och luftvägssjukdomar ökat kraftigt bland de boende i Stenmarken.\n...',
          'A-2_3-social-Going_on_strike':
            'Klockan 12 idag inleder 34 av våra medlemmar en strejk. Efter gårdagens avslöjande att Stenmarks bryter mot arbetsmiljö-regelverket kräver vi förbättrat skydd för våra arbetare!',
          'B-2_3-social-Going_on_strike':
            'Klockan 12 idag inleder 34 av våra medlemmar en strejk. Efter gårdagens avslöjande att Stenmarks bryter mot miljöregelverken kräver vi förbättrade utsläpps- och avsloppsfiltreringssystem så att vi och alla boende i Stenmarken kan känna sig säkra!',
          'AB-2_4-scene-ACT-Local_meeting_point':
            'För vissa ortsbor är det här droppen. Nu kan de inte stödja Stenmarks längre.\n\nDe som stödjer bojkotten kommer förbi för att prata. Gradvis blir din lilla butik en mötespunkt för de som kräver förändring, och tillsammans diskuterar ni nästa steg. Vad tycker du att ni borde göra?',
          'A-2_4-option-ACT-Organise_demonstration': 'Organisera en demonstration för att kräva bättre arbetsförhållanden på fabriken.',
          'B-2_4-option-ACT-Organise_demonstration': 'Organisera en demonstration för att kräva bättre filtreringssystem på fabriken.',
          'AB-2_4-option-ACT/WAIT-Put_up_posters': 'Sätta upp affischer och dela ut flygblad för att få fler att gå med i bojkotten.',
          'AB-2_4-option-ACT-Have_a_dialogue': 'Ha en dialog med företaget - konsumentkraft kommer förmodligen inte räcka hela vägen.',
          'AB-2_4-scene-WAIT-Local_meeting_point':
            'Det här var inte bra. Nu måste du fundera på om du kan fortsätta stödja Stenmarks eller inte.\n\nOrtsbor kommer förbi för att prata. Gradvis blir din lilla butik en mötesplats för de som vill diskutera frågan, och tillsammans diskuterar ni vad som bör göras. Vad föreslår du?',
          'AB-2_4-option-WAIT/DELAY-Have a dialogue': 'Ha en dialog med företaget för att övertala dem att åtgärda bristerna.',
          'AB-2_4-option-WAIT/DELAY-Astroturf':
            'Samla vänner och andra återförsäljare för att demonstrera till stöd för den gamla fabriken.',
          'AB-2_4--scene-DELAY-Local_meeting_point':
            'Det här var inte bra. Nu blir det mycket svårare att övertyga ortsborna om att stötta Stenmarks.\n\nOrtsbor kommer förbi för att prata. Gradvis blir din lilla butik en mötesplats för de som stödjer fabriken, och tillsammans diskuterar ni nästa steg. Vad föreslår du?',
          'AB-2_4-option-DELAY-Interview_is_fishy':
            'Intervjun är skum, vi borde skriva en insändare i tidningen för att ifrågasätta påståendena.',
          'AB-2_5-scene-ACT-Demonstration_successful': 'Demonstrationen blev en framgång, hundratals ortsbor dök upp!\n\n Stenmarks verkar till och med ha blivit nervösa...',
          'AB-2_5-scene-ACT-Posters_have_effect': 'Affischerna verkar ha effekt, antalet som bojkottar växer varje vecka! \n\nStenmarks ser sig tvungna att svara...',
          'AB-2_5-scene-WAIT-Declined_invitation':
            'Du kontaktar Stenmarks, men företaget tackar artigt nej till ett möte eftersom de är för upptagna med att ordna en egen lösning.',
          'AB-2_5-scene-DELAY-Small_but_loud':
            'Demonstrationen är liten med högljudd, och tack vare en vän på lokaltidningen får ni mycket pressuppmärksamhet.\n\nStenmarks verkar också ha inspirerats...',
          'AB-2_5-scene-DELAY-Confront_rumours':
            'Ett mycket bra val!\n\nDina ansträngningar med att konfrontera de där skadliga rykterna verkar fungera. Det verkar till och med som att Stenmarks själva inspirerats av er strategi...',
          'A-2_6-social-Independent_audit':
            'På Stenmarks prioriterar vi våra medarbetares hälsa och säkerhet över allt annat. Vi har därför anlitat ett oberoende företag, Investiga, för att granska arbetsförhållandena.',
          'B-2_6-social-Independent_audit':
            'På Stenmarks prioriterar vi lokalbefolkningens och närmiljöns hälsa och säkerhet över allt annat. Vi har därför anlitat ett oberoende företag, Investiga, för att granska utsläpps- och avloppshanteringen.',
          'AB-2_7-social-Feeling_weird':
            'Känns lite olustigt med bojkotten, tänk om granskningen visar att Stenmarks inte gjort något fel? Vad säger ni?',
          'AB-2_7-social-WAIT/DELAY-Is_it_just_me': 'Är det bara jag, eller håller bojkotten äntligen på att dö ut? #StödStenis',
          'AB-2_7-social-DELAY-People_making_sense':
            'Äntligen verkar folk fått tillbaka vettet - vänta och se vad granskningen säger innan ni tar några ogenomtänkta beslut.',
          'AB-2_7-social-ACT/WAIT-Paying_for_audit':
            'Låt er inte luras - Stenmarks BETALAR för granskningen, vad tror ni att dom kommer att hitta?',
          'AB-2_7-social-ACT-What-happened-to_boycott':
            'Hallå, vad hände med bojkotten? Är jag den enda som fortfarande låter bli att köpa Stenmarks? #BojkottaStenis',
          'AB-2_8-option-Collection_box': 'Ställa fram en insamlingsbössa och be kunderna att stötta kampen ekonomiskt.',
          'AB-2_8-scene-DELAY-Business_owner':
            'Inspirerad av de senaste händelserna diskuterar du med vänner vad du som butiksägare kan göra för att stötta?',
          'AB-2_8-option-DELAY-Discount-WildertonWear': 'Sänka priset på Stenmarks för att öka försäljningen.',
          'AB-2_8-option-DELAY-Call_resellers-to-support':
            'Ringa andra återförsäljare av Stenmarks produkter och övertala dem att stötta företaget.',
          'AB-2_8-scene-ACT-Business_owner': 'Tillsammans med vänner diskuterar du vad du som butiksägare kan göra för att stötta?',
          'AB-2_8-option-ACT-Call_resellers_join_boycott':
            'Ringa andra återförsäljare av Stenmarks produkter och övertala dem att bojkotta.',
          'AB-2_8-option-ACT/WAIT-Discount_BlueSkin':
            'Dra igång en lågpriskampanj på Blåställ för att övertyga fler kunder att byta märke.',
          'AB-2_8-scene-WAIT-Business_owner':
            'Under tiden diskuterar du och dina vänner vad du som butiksägare kan göra för att stötta?',
          'AB-2_9-scene-DELAY-Mod-Stockup_3':
            'Sådärja! Prissänkningen är en hit, och lockar till sig nya kunder!\n\nDet är dags att fylla på lagret inför nästa månad. Fortsätter du att fokusera på Stenmarks, eller köper du några extra Blåställsprodukter bara för att vara på den säkra sidan?',
          'AB-2_9-scene-DELAY-Rad-Stockup_3':
            'Puh, det var mycket jobb! Men det verkar löna sig. Alla återförsäljare är inte beredda att stötta Stenmarks, men du övertygade tillräckligt många för att öka företagets försäljning.\n\nDet är dags att fylla på lagren inför nästa månad. Fortsätter du att fokusera på Stenmarks, eller köper du några extra Blåställsprodukter bara för att vara på den säkra sidan?',
          'AB-2_9-scene-WAIT-Stockup_3':
            'Wow, stödet var ännu starkare än du trott! En majoritet av kunderna bidrar generöst till insamlingen. Nu har du en ordentlig budget för att kunna fortsätta kampen.\n\nDet är dags att fylla på lagret inför nästa månad. Fortsätter du att köpa en majoritet Stenmarksprodukter, eller skaffar du några extra Blåställ bara för säkerhets skull?',
          'AB-2_9-scene-ACT-Rad-Stockup_3':
            'Puh, det var mycket jobb! Men det verkar löna sig. Alla återförsäljare var inte beredda att gå med i bojkotten, men du övertygade tillräckligt många för att öka pressen på Stenmarks.\n\nDet är dags att fylla på lagret inför nästa månad. Fortsätter du att fokusera på Blåställ, eller köper du några extra Stenmarksprodukter bara för att vara på den säkra sidan?',
          'AB-2_9-scene-ACT-Mod-Stockup_3':
            'Sådärja! Lågpriskampanjen går strålande, och lockar till sig nya kunder!\n\nDet är dags att fylla på lagren inför nästa månad. Fortsätter du att fokusera på Blåställ, eller köper du några extra Stenmarksprodukter bara för att vara på den säkra sidan?',
          'AB-3_1-scene-DELAY-Reaction_waiting_for_audit':
            'Du tog ett bra beslut.\n\nTack vare dina ansträngningar har bojkotten saktat ner medan kunderna väntar på resultatet av granskningen.',
          'AB-3_1-scene-WAIT-Reaction_waiting_for_audit':
            'Puh, det var ett tufft beslut. Du valde att ta det säkra före det osäkra vilket var en bra strategi den här gången.\n\nBojkotten har saktat ner medan kunderna väntar på resultatet av granskningen.',
          'AB-3_1-scene-ACT-Reaction_waiting_for_audit':
            'Den här gången var din vilja att förändra lite för radikal.\n\nDu underskattade hur många kunder som valde att pausa bojkotten medan de väntade på resultatet av granskningen.',
          'AB-3_2-social-WAIT-BlueSkin_bag':
            'Hamnade precis i en diskussion med grannen om min väska från Blåställ. Hatar att stan är så splittrad över Stenmarksfrågan. :(',
          'AB-3_2-social-WAIT-Stick_to_boycott!':
            'Kom igen nu, fortsätt bojkotta! Vi måste visa Stenmarks att de inte kan komma undan med vad som helst!',
          'AB-3_2-social-WAIT-What_if_close':
            'Funderar på bojkotten: tänk om fabriken tvingas stänga? Betyder inte det i så fall många fler arbetslösa, och kanske att många måste flytta för att få jobb?',
          'AB-3_2-social-ACT-What_if_too_far':
            'Jag tycker att det är bra att vi visar Stenmarks vad vi tycker, men vad händer om det går för långt? Tänk om fabriken måste stänga?',
          'AB-3_2-social-ACT-Think_this_through':
            'Vi kanske borde tänka igenom det här? Om fabriken går i konkurs kommer många ortsbor behöva flytta för att hitta nya jobb, och det kan påverka hela samhället. Butiker och restauranger kan bli tvungna att stänga. Vill vi det?',
          'AB-3_2-social-ACT-What_alternatives':
            'Jag fattar grejen med att bojkotta för att förändra, men vad har vi för alternativ om fabriken går omkull?',
          'AB-3_2-social-DELAY-Brute_consumer_force':
            'Jag är inte övertygad om att rå konsumentkraft är ett konstruktivt sätt att skapa förändring, men hur kan vi annars få Stenmarks att fatta hur allvarligt det här är?',
          "A-3_2-social-DELAY-Can't_let_them_get_away":
            'Jag vet hur viktig Stenmarks är för stans historia, men vi kan inte låta dem komma undan med att utsätta sina arbetare för allvarliga risker!',
          "B-3_2-social-DELAY-Can't_let_them_get_away":
            'Jag vet hur viktig Stenmarks är för stans historia, men vi kan inte låta dem komma undan med att förstöra planeten!',
          'AB-3_2-social-DELAY-Loyal_customers':
            'Håller med om att staden behöver jobben, men behöver inte Stenmarks behandla sina arbetare och lojala kunder med respekt också?',
          'AB-3_3-scene-DELAY-Mod-Long_term':
          'Många är oroliga, och du inser att ni hellre än att ta snabba beslut behöver fundera på långsiktiga lösningar.\n\nHur kan ni få Stenmarks att genomföra de nödvändiga förändringarna utan att riskera arbetarnas jobb?',
          'AB-3_3-option-WAIT/DELAY-WW_day':
            'Organisera en dag med konserter och familjeaktiviteter för att samla in pengar till fabriken.',
          'AB-3_3-option-DELAY-Invite_interest_groups': 'Bjuda in lokala intressegrupper att ge förslag på hur jobben kan räddas.',
          'A-3_3-option-DELAY-Local_producer': 'Övertyga en lokal tillverkare av luftfilter att donera säkerhetsutrustning till fabriken.',
          'B-3_3-option-DELAY-Local_producer': 'Övertyga en lokal tillverkare av utsläppsfilter att skänka utrustning till fabriken.',
          'AB-3_3-scene-DELAY-Rad-Long_term':
            'Många är oroliga, och du inser att ni hellre än att ta snabba beslut behöver fundera på långsiktiga lösningar.\n\nHur kan ni få Stenmarks att genomföra de nödvändiga förändringarna utan att riskera arbetarnas jobb?',
          'AB-3_3-scene-ACT-How_to_thrive':
            'Folk är oroliga, och du inser att ni behöver prata om hur Stenmarken kan blomstra även om fabriken stänger. Vad kan ni göra för att stan lättare ska kunna hantera förändring?',
          'AB-3_3-option-ACT-Community_day':
            'Organisera en temadag och låt ortsborna spåna på hur Stenmarken kan se ut i framtiden.',
          'AB-3_3-option-ACT/WAIT-Invite_interest_groups':
            'Bjuda in lokala intressegrupper att ge förslag på hur ni kan skapa alternativa inkomstkällor.',
          'AB-3_3-option-ACT/WAIT-Fund_to_support': 'Starta en insamling för arbetarna utifall att fabriken stänger.',
          'AB-3_3-scene-WAIT-Long_term':
            'Folk är oroliga, och du inser att du måste välja sida. Borde du försöka hitta ett sätt att tvinga Stenmarks att göra de nödvändiga förändringarna utan att riskera arbetarnas jobb, eller är det dags att börja prata om hur stan kan klara sig även om fabriken tvingas stänga?\n\nVad blir ditt nästa steg?',
          'AB-3_4-scene-ACT-Rad-Community_day':
            'Framtidsspaningsdagen blev en stor framgång! En stor grupp barnfamiljer, pensionärer, entusiastiska tonåringar och engagerade par dök upp för att drömma ihop olika visioner för framtiden.',
          'AB-3_4-scene-ACT-Mod-Suggestions':
            'Wow, vilken succé! På bara två veckor fick ni in 124 olika förslag från lokala intressegrupper!\n\nNu kommer ni att välja ut de bästa förslagen och ta upp dem på nästa kommunfullmäktigemöte.',
          'A-3_4-scene-DELAY-Rad-Safety_gear_producer':
            'Du kontaktar några olika tillverkare av säkerhetsutrustning och hittar en som är beredd att skänka produkter till fabriken.\n\nTyvärr är den nödvändiga utrustningen tillfälligt slut på grund av stor beställning, men tillverkaren lovar att återkomma så snart utrustningen är redo att hämtas.',
          'B-3_4-scene-DELAY-Rad-Filtering_system_producer':
            'Du kontaktar några olika tillverkare av utsläppsfilter och hittar en som är villig att skänka utrustning till fabriken.\n\nTyvärr är de nödvändiga filtren tillfälligt slut på grund av en stor beställning, men tillverkaren lovar att återkomma så snart de är redo att hämtas.',
          'AB-3_4_scene-DELAY-Mod-Suggestions':
            'Wow, vilken succé! På bara två veckor tog ni emot 119 förslag från lokala intressegrupper!\n\nNu kommer ni att välja ut de bästa och ta upp dem på nästa kommunfullmäktigemöte.',
          'AB-3_4-scene-DELAY-ModMod-WW_day':
            'Stenmarksdagen blir en succé, och samlar en stor grupp ortsbor: barnfamiljer, pensionärer, entusiastiska tonåringar och engagerade par. Tillsammans samlar ni in ett stort belopp till fabriken!',
          'AB-3_4-scene-ACT-ModMod-Collection':
            'Insamlingen tar fart direkt, eftersom många ortsbor vill hjälpa arbetarna även om de inte alltid gillar deras arbetsgivare.',
          'AB-3_5-scene-Stockup_4':
            'Den här veckan bubblar stan av diskussioner. Imorgon släpps resultatrapporten från granskningen, och alla spekulerar om vad den kan innehålla.\n\nOturligt nog måste du skicka in lagerbeställningen för nästa månad senast idag. Hur delar du upp beställningen mellan märkena den här gången?',
          'AB-4_1-newsFlash-HL-WW_ignored_warnings': 'GRANSKNING VISAR:\nSTENMARKS IGNORERADE VARNINGAR',
          'A-4_1-newsFlash-body-ACT-WW_ignored_warnings':
            '<b>I en uppmärksammad rapport av granskningsföretaget Investiga som släpptes igår avslöjas att Stenmarks varnats ett flertal gånger om säkerhetsbristerna utan att agera. Till följd av rapporten meddelade tre av landets största detaljhandelskedjor att de slutar sälja Stenmarks produkter.</b>\n-Det här är en mardröm, säger en anställd på Stenmarks som vill förbli anonym. Vi har inte gjort något fel.\nDiskussionerna har gått höga i orten under de senaste dagarna, och kommer troligen att fortsätta göra så som ett resultat av granskningsrapporten. Enligt källor har bojkotten tagit fart igen, och de strejkande arbetarna är mer beslutsamma än någonsin att fortsätta strejka tills företaget uppgraderar sin säkerhetsutrustning.\n...',
          'B-4_1-newsFlash-body-ACT-WW-ignored_warnings':
            '<b>I en uppmärksammad rapport av granskningsföretaget Investiga som släpptes igår avslöjas att Stenmarks varnats ett flertal gånger om miljöbristerna utan att agera. Till följd av rapporten meddelade tre av landets största detaljhandelskedjor att de slutar sälja Stenmarks produkter.</b>\n-Det här är en mardröm, säger en anställd på Stenmarks som vill förbli anonym. Vi har inte gjort något fel.\nDiskussionerna har gått höga i orten under de senaste dagarna, och kommer troligen att fortsätta göra så som ett resultat av granskningsrapporten. Enligt källor har bojkotten tagit fart igen, och de strejkande arbetarna är mer beslutsamma än någonsin att fortsätta strejka tills företaget uppgraderar sina filtersystem.\n...',
          'AB-4_1-newsFlash-DELAY-body-WW_ignored_warnings':
            '<b>I en uppmärksammad rapport som släpptes igår av gransknings-företaget Investiga avslöjas att Stenmarks varnats ett flertal gånger utan att agera.</b>\n-Det här är en mardröm, säger en anställd på Stenmarks som vill förbli anonym. Vi har inte gjort något fel.\nDiskussionerna har gått höga i orten under de senaste dagarna, och kommer troligen att fortsätta som ett resultat av granskningsrapporten. Men trots en utbredd frustration över Stenmarks agerande har Stenmarks fortfarande mycket stöd i samhället på grund av sin långa historia.\n...',
          'AB-4_2-social-ACT-Still_on_a_strike':
            'Det har gått två månader, och kampen fortsätter. Så stolta över våra strejkande medlemmar, framför allt efter de senaste nyheterna om att Stenmarks ignorerat varningar.',
          'AB-4_2-social-ACT-Another_push': 'Precis som vi trodde... Kom igen nu, det är dags att pusha företaget lite till! #BojkottaStenis',
          'AB-4_2-social-ACT-Out_of_this_mess':'Hur kommer vi ur den här soppan? Snälla, kan nån komma på en mer långsiktig plan!',
          'AB-4_2-social-DELAY-2_months_banner': 'Om någon saknar "2 månaders strejk"-banderollen så befinner sig den I SOPORNA!',
          'AB-4_2-social-DELAY-148_yrs_of_history':
            'Fan också, hur länge ska det här hålla på? Om det fortsätter blir det slutet på Stenmarks. Är det det vi vill? 148 års historia upp i rök?',
          'AB-4_2-social-DELAY-Another_push': 'Kom igen nu, det är dags för nästa stöt! #StödStenis',
          'AB-4_3-scene-Council_vote_suggestions':
            'Det är dags kommunfullmäktigemöte igen, och den här gången har du med dig tre förslag från lokala intressegrupper.\n\nVilket förslag vill du ge lite extra stöd?',
          'AB-4_3-option-ACT-ModMod/DELAY-Attract_new_companies':
            'Attrahera nya företag för att skapa nya jobb och minska ortens beroende av fabriken.',
          'AB-4_3-option-DELAY-Local_investor': 'Övertala en lokal investerare att erbjuda Stenmarks ett lån.',
          'B-4_3-option-DELAY-Rad-Relax_environmental_regulations':
            'Lobba för att myndigheterna ska sänka miljökraven så att Stenmarks kan återhämta sig.',
          'A-4_3-option-DELAY-Rad/Mod-Relax_safety_regulations':
            'Lobba för att myndigheterna ska sänka säkerhetskraven så att Stenmarks kan återhämta sig.',
          'AB-4_3-option-ACT-Rad/Mod-Universal_basic_income':
            'Inför medborgarlön, så att arbetarna har råd att sluta på Stenmarks om de vill.',
          'AB-4_3-option-ACT-Evening_classes': 'Sponsra kvällskurser för fabriksarbetare som vill lära sig ett nytt yrke.',
          'AB-4_3-option-ACT/DELAY-Rad-Clothing_repair_shop':
            'Öppna en sömnadsateljé som lagar och ändrar kläder, där arbetarna kan få jobb om fabriken stänger.',
          'AB-4_4-scene-DELAY-Mod-Local_sponsor':
            'Det tog ett tag, men du har till slut lyckats hitta en lokal sponsor som är villig att erbjuda Stenmarks ett lån för att komma på fötter igen.\n\nSponsorn föredrar att förbli anonym och säger att ni kan förhandla om återbetalningsvillkoren senare. Du är så lättad över att äntligen ha hittat en lösning att du glatt går med på kraven.',
          'AB-4_4-scene-ACT-ModMod-Clothing_repair_shop':
            'Sådärja! Förslaget om att starta en sömnadsateljé för att laga och sy om kläder gick igenom, och kommer inte bara att skapa nya jobb utan också förlänga livstiden på Stenmarks produkter.',
          'AB-4_4-scene-ACT-Mod-Evening_classes':
            'Hurra, förslaget om kvällskurser gick igenom!\n\nNu behöver du hitta en passande lokal, rekrytera lärare, anställa administratörer och värva kursdeltagare.',
          'AB-4_4-scene-DELAY-ModMod-Attract_companies':
            'Sådärja! Fullmäktige beslutade om att starta en grupp som kan skissa på ett förslag med fördelaktiga villkor och billiga hyreskontrakt, och boka möten med företag som funderar på att flytta till Stenmarken.',
          'A-4_4-scene-DELAY-Rad-Relax_safety_regulations':
            'Det ser ut som att alla ansträngningar kommer att löna sig! Efter veckor av hemliga luncher, gemensamma möten, topphemliga diskussioner och medverkan på myndighetens planeringsmöte verkar allt till slut falla på plats.\n\nDu får signaler om att det kan gå att ordna så att Stenmarks undantas från säkerhetsreglerna, som en engångslösning för att rädda den kritiska verksamheten.',
          'B-4_4-scene-DELAY-Rad-Relax_environmental_regulations':
            'Det ser ut som att alla ansträngningar kommer att löna sig! Efter veckor av hemliga luncher, gemensamma möten, topphemliga diskussioner och medverkan på myndighetens planeringsmöte verkar allt till slut falla på plats.\n\nDu får signaler om att det kan gå att ordna så att Stenmarks undantas från miljöreglerna, som en engångslösning för att rädda den kritiska verksamheten.',
          'AB-4_4-scene-ACT-Rad-Universal_basic_income':
            'Det gick inte hela vägen den här gången.\n\nFullmäktigeledamöterna lovade att fundera vidare på införandet av en medborgarlön, men tyckte inte att det var en bra idé just nu eftersom det skulle ta för lång tid att införa.',
          'AB-4_5-scene-ACT-Stockup_5':
            'Samtidigt cirkulerar rykten om att en potentiell investerare kan komma att hjälpa fabriken med ett stort lån.\n\nMed det i åtanke, hur väljer du att fylla på lagren inför nästa månad?',
          'AB-4_5-scene-DELAY-Stockup_5':
            'Samtidigt har du en butik att sköta, och det är återigen dags att fylla på lagren inför nästa månad.\n\nHur delar du upp beställningen mellan märkena den här gången?',
          'AB-5_1-newsFlash-HL-Factory_closing': 'STENMARKSFABRIKEN STÄNGER',
          'A-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion till följd av strejken och höga skatteskulder blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre fabrikens ljud genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att företaget inte kan utsätta arbetarna för fler risker, men å andra sidan är det trist att se ett företag med en så lång tradition gå under. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte ledsen över att ha förlorat jobbet, jag har redan anmält mig till en kvällskurs för att skola om mig till sjuksköterska.\n...',
          'B-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion på grund av strejkerna och höga kostnader för systemunderhåll blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängingen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre fabrikens ljud genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att företaget inte kan utsätta Stenmarken och miljön för fler risker, men å andra sidan är det trist att se ett företag med så lång tradition gå under. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte ledsen över att ha förlorat jobbet, jag har redan anmält mig till en kvällskurs för att skola om mig till sjuksköterska.\n...',
          'A-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion till följd av strejkerna och höga skattekostnader blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre fabrikens ljud genom Stenmarken.\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över säkerhetsbristerna, men jag är säker på att företaget kunde ha löst om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är den fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och så är jag orolig över hur jag ska hitta ett nytt jobb, men förhoppningsvis kommer kampanjen för att locka hit nya företag att leda till fler jobb.\n...',
          'B-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion till följd av strejkerna och höga kostnader för systemunderhåll blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre fabrikens ljud genom Stenmarken.\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över miljöbristerna, men jag är säker på att företaget kunde ha löst det om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är den fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och så är jag orolig över hur jag ska hitta ett nytt jobb, men förhoppningsvis kommer kampanjen för att locka hit nya företag att leda till fler jobb.\n...',
          'A-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks ledning igår att företaget lägger ner. De sänkta säkerhetskraven kom för sent, och en tuff ekonomisk situation, minskad produktion till följd av strejkerna och höga skattekostnader blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över säkerhetsbristerna, men jag är övertygad om att företaget kunde ha löst det om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och jag är orolig över att inte hitta ett nytt jobb, jag kanske blir tvungen att flytta.\n...',
          'B-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks ledning igår att företaget lägger ner. De sänkta miljökraven kom för sent, och en tuff ekonomisk situation, minskad produktion till följd av strejkerna och höga kostnader för systemunderhåll blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över miljöbristerna, men jag är övertygad om att företaget kunde ha löst det om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och jag är orolig över att inte hitta ett nytt jobb, jag kanske blir tvungen att flytta.\n...',
          'A-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks ledning igår att företaget lägger ner. Efter att företaget tvingades backa från ett sponsorerbjudande som visade sig vara ett penningtvättsupplägg blev den tuffa ekonomiska situationen, minskad produktion till följd av strejkerna och höga skattekostnader till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över säkerhetsbristerna, men jag är säker på att Stenmarks kunde ha löst det om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och jag är orolig över att inte hitta ett nytt jobb, jag kanske blir tvungen att flytta.\n...',
          'B-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>Efter månader av strejker och bojkotter meddelade Stenmarks igår att företaget lägger ner. Efter att företaget tvingades backa från ett sponsorerbjudande som visade sig vara ett penningtvättsupplägg blev den tuffa ekonomiska situationen, minskad produktion till följd av strejkerna och höga kostnader för systemunderhåll till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är frustrerande, säger Simon Gradén, en före detta anställd som kommer förbi för att hämta sina saker. Jag fattar att folk är arga över miljöbristerna, men jag är säker på att Stenmarks kunde ha löst det om de bara fått lite mer tid. Den här fabriken har en så lång historia - jag är fjärde generationen i min familj som jobbat här - och nedstängningen kommer att förändra hela samhället. Och så är jag orolig över att hitta ett nytt jobb, jag kanske blir tvungen att flytta.\n...',
          'A-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. Den potentielle investeraren drog sig ur i sista minuten, och en tuff ekonomisk situation, minskad produktion till följd av strejken och höga skatteskulder blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att Stenmarks inte kan utsätta arbetarna för fler risker, men å andra sidan är det trist att se ett företag med så lång historia gå omkull. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte så ledsen över att förlora jobbet. Nästa vecka börjar jag jobba med att laga och ändra kläder på den nyöppnade sömnadsateljén i stan.\n...',
          'B-5_1-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. Den potentielle investeraren drog sig ur i sista minuten, och en tuff ekonomisk situation, minskad produktion till följd av strejken och höga kostnader för systemunderhåll blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att företaget inte kan utsätta Stenmarken och miljön för fler risker, men å andra sidan är det trist att se ett företag med så lång historia gå omkull. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte så ledsen över att förlora jobbet. Nästa vecka börjar jag jobba med att laga och ändra kläder på den nyöppnade sömnadsateljén i stan.\n...',
          'A-newsFlash-body-ACT-ModMod-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion under strejken och höga skatteskulder blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksomsrådet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att företaget inte kan utsätta arbetarna för fler risker, men å andra sidan är det trist att se ett företag med så lång historia gå omkull. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte så ledsen över att förlora jobbet. Nästa vecka börjar jag jobba med att laga och ändra kläder på den nyöppnade sömnadsateljén i stan.\n...',
          'B-5_1-newsFlash-body-ACT-ModMod-Factory_closing':
            '<b>Efter flera turbulenta månader meddelade Stenmarks ledning igår att företaget lägger ner. En tuff ekonomisk situation, minskad produktion under strejken och höga kostnader för systemunderhåll blev till slut för mycket för företaget.</b>\nDet är tyst på fabriksområdet. När stängningen meddelades vid lunchtid igår skickades hela personalen hem. För första gången på 148 år ekar inte längre ljuden från fabriken genom Stenmarken.\n- Det är bitterljuvt, säger Nils Wester, en före detta anställd som kommer förbi för att hämta sina saker. Å ena sidan är jag glad att företaget inte kan utsätta Stenmarken och miljön för fler risker, men å andra sidan är det trist att se ett företag med så lång historia gå omkull. Min pappa jobbade också här, och ett par av mina mor- och farföräldrar. Men jag är inte så ledsen över att förlora jobbet. Nästa vecka börjar jag jobba med att laga och ändra kläder på den nyöppnade sömnadsateljén i stan.\n...',
          'AB-5_2-scene-option-What_has_happened': 'Vad har hänt?',
          'AB-5_2-scene-2_yrs_later': 'Två år senare...',
          'AB-5_3-newsFlash-HL-ACT-Mod-Centre_2_yrs': 'STENMARKSCENTRET FYLLER TVÅ ÅR',
          'AB-5_3-newsFlash-body-ACT-Mod-Centre_2_yrs':
            '<b>När maskinerna på Stenmarks stannade, klev några entusiaster in. Idag firar de gamla fabriksbyggnaderna två år som mötesplats för hela samhället, och alla ortsbor bjuds in för att delta i firandet.</b>\nTack vare en grupp entusiaster tog Stenmarkens fabriks historia en helt ny vändning. De gamla fabriksbyggnaderna finns kvar, men istället för dånande maskiner hörs musik, konversationer och klickandet från datortangenter.\nDe stora hallarna har förvandlats till kontorskollektiv, med ett populärt kafé, en sömnadsateljé och ett gym. De flesta av de tidigare fabriksarbetarna har hittat nya jobb hos skräddaren och i Blåställs verkstäder i grannstaden, eller har valt att följa sina drömmar som kaféägare eller studenter. Och ortsborna älskar sitt nya mötescenter - under de senaste månaderna har antalet besökare stadigt ökat.\n...',
          'AB-5_3-newsFlash-HL-ACT-ModMod-Community_centre_2_yrs': 'MÖTESPLATS FYLLER TVÅ ÅR',
          'AB-5_3-newsFlash-body-ACT-ModMod-Community_centre_2_yrs':
            '<b>Stenmarkens gamla fabriks historia kunde ha tagit slut när företaget Stenmarks slog igen. Men istället firar det nu två år som mötesplats med kontorskollektiv, kafé och gym.</b>\nTack vare en grupp entusiaster firar den historiska Stenmarkenfabriken sitt 150-årsjubileum med en nypremiär. De gamla fabriksbyggnaderna är fortfarande kvar, men istället för dånande maskiner hörs nu dämpade konversationer och klickandet av datortangenter. De stora hallarna har förvandlats till ett kontorskollektiv, ett populärt kafé och ett gym. De flesta av de tidigare fabriksarbetarna har hittat nya jobb. Några har öppnat nya skräddeributiker i orten, andra har anställts av Blåställ, och några har tagit tillfälliga jobb medan de letar efter nya möjligheter.\n...',
          'AB-5_3-newsFlash-HL-DELAY-Mod-Coworking_space': 'STENMARKENS FABRIK BLIR KONTORKOLLEKTIV',
          'AB-5_3-newsFlash-body-DELAY-Mod-Coworking_space':
            '<b>När maskinerna på Stenmarks fabrik stannade, antog många ortsbor att det skulle bli slutet på en lång historia. Men lagom till 150-årsjubileet upplever fabriken en nypremiär.</b>\nDe gamla fabriksbyggnaderna är kvar, men istället för dånande maskiner hörs nu ljudet av borrmaskiner och cirkelsågar. Efter en tid av förhandlingar beslutade kommunen till slut att förvandla fabriksbyggnaderna till kontorslokaler, med ett kafé och ett litet museum över fabrikens historia. De flesta tidigare anställda vid fabriken har fått nya jobb hos Blåställ eller öppnat egna skrädderier, medan vissa fortfarande har gig-arbeten medan de letar efter nya möjligheter. Och kanske kommer de en dag att jobba på ett av de nya kontoren som öppnar i de gamla fabriksbyggnaderna? Elisabet Källgren, ansvarig för projektet, är hoppfull:\n-Vi har redan fått många förfrågningar från företag som funderar på att flytta sitt kontor hit.\n...',
          'AB-5_3-newsFlash-HL-DELAY-ModMod-Coworking_space_opened': 'STENMARKENS KONTORSKOLLEKTIV FYLLER ETT',
          'AB-5_3-newsFlash-body-DELAY-ModMod-Coworking_space_opened':
            '<b>Tack vare en grupp entusiaster är Stenmarkens historiska fabrik inte längre tom. Idag firar de gamla fabriksbyggnaderna ett år som modernt kontorskollektiv för lokala entreprenörer.</b>\nNär maskinerna i den gamla Sternmarksfabriken stannade, antog många att det var slutet på en lång historia. Men lagom till sitt 150-årsjubileum lever fabriken upp igen. Fabriksbyggnaderna finns kvar, men istället för dånande maskiner hörs nu dämpade konversationer och klickandet från datortangenter. Tack vare en grupp entusiaster och en generös donation från kommunen har de stora hallarna förvandlats till nya fräscha kontor och ett kafé.\n...',
          'AB-5_3-newsFlash-HL-ACT-Rad-Centre_wins_award': 'STENMARKSCENTRET VINNER PRIS',
          'AB-5_3-newsFlash-body-ACT-Rad_Centre_wins_award':
            '<b>Bara två år efter öppnandet vinner det nya Stenmarkscentret det eftertraktade priset för “Bästa mötesplats”. Juryn var väldigt imponerad av hur den gamla fabriken har förvandlats till en levande, blomstrande gemenskap utan att förlora sina historiska rötter.</b>\nDet har gått två år sedan Stenmarksfabriken tvingandes lägga ner. De gamla fabriksbyggnaderna i tegel är kvar, men i stället för dånande maskiner hörs nu musik, konversationer och skratt. De stora hallarna har förvandlats till en mötesplats för hela samhället med öppna verkstäder, mötesrum för lokala organisationer, en liten second handbutik och ett populärt kafé. De flesta av de tidigare arbetarna på fabriken har fått nya jobb i sömnadsateljén, i verkstäderna, eller hos Blåställ i grannstaden. Och ortsborna älskar sitt nya mötescenter, under de senaste månaderna har antalet besök stadigt ökat.\n...',
          'AB-5_3-newsFlash-HL-DELAY-Rad-Factory_revived': 'STENMARKSFABRIKEN ÖPPNAR I NY FORM',
          'A-5_3-newsFlash-body-DELAY-Rad-Factory_revived':
            '<b>När strejker och bojkotter tvingade Stenmarksfabriken att stänga antog många ortsbor att det var slutet på en lång historia av tillverkning. Men lagom till 150-årsjubileet kan fabriken komma att återuppstå i en ny form.</b>\nDe gamla fabriksbyggnaderna finns kvar, men istället för dånande maskiner ekar nu ljuden av fåglar genom de stora hallarna. Efter två års förhandlingar har kommunen till slut hittat ett tillverkningsföretag som överväger att öppna fabrik i Stenmarken.\nElisabet Källgren är ansvarig för projektet, och hon är hoppfull.\n- Vi har haft några mycket positiva inledande förhandlingar med tillverkaren, och vi tror att det kommer att leda till många nya jobb.\nNär fabriken stängde tvingandes många av dess tidigare arbetare att leta nya jobb. Några har anställts av Blåställ eller öppnat eget, medan andra flyttat eller fortfarande söker jobb. Många butiksägare och restauranger upplevde minskade vinster när många tvingades flytta, och de hoppas nu också att ett nytt företag kommer att innebära nya affärsmöjligheter.\n...',
          'B-5_3-newsFlash-body-DELAY-Rad_Factory_revived':
            '<b>När strejker och bojkotter tvingade Stenmarksfabriken att stänga antog många ortsbor att det var slutet på en lång historia av tillverkning. Men lagom till 150-årsjubileet kan fabriken komma att återuppstå i en ny form.</b>\nDe gamla fabriksbyggnaderna finns kvar, men istället för dånande maskiner ekar nu ljuden av fåglar genom de stora hallarna. Efter två års förhandlingar har kommunen till slut hittat ett tillverkningsföretag som överväger att öppna fabrik i Stenmarken.\nElisabet Källgren är ansvarig för projektet, och hon är hoppfull.\n- Vi har haft några mycket positiva inledande förhandlingar med tillverkaren, och vi tror att det kommer att leda till många nya jobb.\nNär fabriken stängde tvingades många av dess tidigare arbetare att leta nya jobb. Några har anställts av Blåställ eller öppnat eget, medan andra flyttat eller fortfarande söker jobb. Många butiksägare och restauranger upplevde minskade vinster när många tvingandes flytta, och de hoppas nu också att ett nytt företag kommer att innebära nya affärsmöjligheter.\n...',
          'end-headline': 'SNIPP, SNAPP, SLUT. . .',
          'end-ACT-Rad':
            'Tack för att du spelade, fantastiskt jobbat!\n\nTack vare dina visioner och vilda idéer, har du och dina vänner förvandlat en potentiell katastrof till en nystart för hela samhället!',
          'end-ACT-Mod':
            'Tack för att du spelade, fantastiskt jobbat!\n\nTack vare din framsynthet och goda planering, lyckades du och dina vänner vända en potentiell katastrof till en utveckling som kommit hela samhället till del!',
          'end-ACT-ModMod/DELAY-ModMod':
            'Tack för att du spelade, fantastiskt jobbat!\n\nTack vare ert hårda arbete, förvandlade du och dina vänner en potentiell katastrof till en positiv utveckling!',
          'end-DELAY-Rad':
            'Tack för att du spelade, fantastiskt jobbat!\n\nTack vare ert hårda arbete lyckades du och dina vänner hålla orten och dess historia levande. Du höll igång Stenmarksfabriken så länge det gick, och har gott hopp om framtiden.',
          'end-DELAY-Mod':
            'Tack för att du spelade, fantastiskt jobbat!\n\nTack vare ert hårda arbete för att bevara ortens historia, förvandlade du och dina vänner en potentiell katastrof till en ny möjlighet!',
        },
      },
    },
  });

export default i18n;
