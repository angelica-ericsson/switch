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
            description2: ` (named after your favourite colour and most used tool) where you sell traditional workwear. You sell around 100 items per month.
            In July, the lease of your shop space will expire, and to be able to extend it you need to sell at least 50 clothing items per month.`,
            button: 'Start the adventure',
          },
          stockUp: {
            headline: 'Stock up!',
            buyHeadline: 'How much do you want to buy?',
            maxMessage: '(100 total)',
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
            overTarget:
              'And, last but not least: in the process, you sold {{totalSales}} items, enough to extend the lease of your shop space!',
            underTarget:
              'Unfortunately, you only sold {{totalSales}} items which was not enough to extend the lease of your shop space 🙁.',
            playAgain: 'Play again!',
          },
          'AB-scene-Most_popular_brands':
            'Your most popular brand is WildertonWear, the local brand produced in the old factory in town. To be honest, it’s not the best quality brand - anymore. But because of its long tradition and local connection, it is still popular among tourists and locals for nostalgic reasons. Your second most popular brand is BlueSkin, a higher quality brand made in a neighbouring town.',
          'AB-scene-Continue': 'Continue',
          'AB-scene-Things_about_to_change': 'However, things are about to change...',
          'AB-scene-Uh_oh': 'Uh oh...',
          'A-newsFlash-HL-Tax_evasion': 'WILDERTONWEAR EVADING TAXES',
          'B-newsFlash-HL-Super_emitter': 'WILDERTONWEAR FACTORY SUPER EMITTER',
          'A-newsFlash-body-Tax_evasion':
            '<b>In a new investigative report, the Daily Times reveals that WildertonWear has neglected paying municipality taxes for the past five years. “We were in a tough situation, and had to cut down on spending,” says a former employee who wishes to remain anonymous.</b> For over a hundred years, the old brick factory walls and chimneys of WildertonWear have been rising over Wilderton. Many residents have seen generations of family members go to work at the factory - or worked there themselves - and all of us have an emotional relationship with the company that has been regarded as the financial backbone of the town for decades. So when the company management admitted to having financial difficulties a few years back, many residents stepped up to help by purchasing their products. And even though many have complained about the declining quality of the clothing items, the name WildertonWear has nonetheless been a source of pride for the community. However, the Daily Times can now reveal that the love has not been mutual. Over the past five years, WildertonWear has paid exactly zero municipality taxes. In an interview with the Daily Times, the company CEO, Bert Swindle, explains that the company always intended to pay the taxes “as soon as the financial situation stabilised”.',
          'B-newsFlash-body-Super_emitter':
            '<b>WildertonWear has been emitting very high levels of carbon dioxide and methane gas into the atmosphere for the past decades. The pollution filtering systems have not been upgraded since the 1990s, and as a result, the company has been releasing more greenhouse gases into the atmosphere than all car traffic in the country during the same period.</b> For over a hundred years, the old brick factory walls and chimneys of WildertonWear have been rising over Wilderton. Many residents have seen generations of family members go to work at the factory - or worked there themselves - and all of us have an emotional relationship with the company that has been regarded as the financial backbone of the town for decades. So when the company management admitted to having financial difficulties a few years back, many residents stepped up to help by purchasing their products. And even though many have complained about the declining quality of the clothing items, the name WildertonWear has nonetheless been a source of pride for the community.  But when the Daily Times’ investigative journalism team decided to take a closer look, it found a darker side. The factory has been emitting very high levels of carbon dioxide and methane gas, relative to other factories of the same size and type. “We knew our emission filtering systems were not up to the current standard,” says a former employee who wishes to remain anonymous. “But we were told it couldn’t be fixed since we had to cut down on spending.”',
          'A-social-Tax_evasion-WTF':
            'Wtf WildertonWear?! We keep buying your cheap quality products year after year to support you, and you give nothing back?',
          'B-social-Super_emitter-WTF':
            'Wtf WildertonWear?! We keep buying your cheap quality products year after year to support you, and in return you continue heating our planet?',
          "AB-social-Let's_boycott": 'That’s it, I’m boycotting WildertonWear. Who’s with me? #BoycottWW',
          'AB-scene-Stockup_1':
            'It is time to stock up on items for the coming month, and you’ll need to choose how to divide your order between the brands. Given the likelihood of a boycott, should you buy your usual amount of WildertonWear items, or swap some for your second most popular brand, BlueSkin?',
          "AB-scene-Let's_stock_up!": 'Let’s stock up!',
          'AB-1_1-scene-ACT-Reaction_boycott':
            'You were right in anticipating a boycott. The Wilderton residents are very upset with WildertonWear, and the demand quickly drops. And so does your revenue.',
          'AB-1_1-scene-DELAY-Reaction_boycott':
            'Hmm. It looks like you underestimated the Wilderton residents’ dissatisfaction with WildertonWear. The demand dropped quickly. Your revenue also dropped, but not so much that it affects the business.',
          'AB-1_1-scene-WAIT-Reaction_boycott':
            'The residents are very upset with WildertonWear, and the demand quickly drops. Luckily, you didn’t make any drastic changes. Your revenue has only dropped a little.',
          'AB-1_2-scene-ACT-Questions_from_customers':
            'Some of your customers are happy that you’re reducing your WildertonWear supply. Others are wondering if you’re really willing to risk that such a traditional old company - and one of the town’s largest employers for generations - has to close? What do you tell them?',
          'A-1_2-option-ACT-No_right_to_exploit': 'A long history doesn’t give them the right to exploit the community.',
          'B-1_2-option-ACT-No_right_to_pollute': 'A long history doesn’t give them the right to pollute our atmosphere.',
          "AB-1_2-option-ACT-Can't_afford_to_support": 'I can’t afford to support WildertonWear if my customers won’t buy their products.',
          'AB-1_2-option-ACT-Temporary_boycott': 'I think a boycott could teach Wildertonwear a lesson, but it should be temporary.',
          'AB-1_2-scene-WAIT-Questions_from_customers':
            'Your customers are wondering where you stand; are you going to support WildertonWear because of its long traditions, or are you joining the boycott even if there’s a risk that the company could be forced to close? What do you tell them?',
          'AB-1_2-option-WAIT-BlueSkin_safer_bet': 'It looks like BlueSkin is the safer choice right now, so I’ll go with that.',
          "AB-1_2-option-WAIT-Can't_afford_financial_risk":
            'I can’t afford to take any financial risks, so I’ll wait and see what my competitors do.',
          'AB-1_2-option-WAIT-Business_is_business':
            'Business is business, not politics. Despite the boycott, Wildertonwear is still the most popular brand.',
          'A-1_2-scene-DELAY-Questions_from_customers':
            'Some of your customers are happy that you’re still supporting WildertonWear, since it’s one of the town’s largest employers. Others are wondering how you can support a business that is clearly exploiting the community. What do you tell them?',
          'B-1_2-scene-DELAY-Questions_from_customers':
            'Some of your customers are happy that you’re still supporting WildertonWear, since it’s one of the town’s largest employers. Others are wondering how you can support a business that is clearly a big contributor to climate change. What do you tell them?',
          'AB-1_2-option-DELAY-Better_through_dialogue':
            'WildertonWear clearly has problems, but it’s better to influence them through dialogue.',
          'AB-1_2-option-DELAY-Business_is_business':
            'Business is business, not politics. Despite the boycott, WildertonWear is still the most popular brand.',
          'AB-1_2-option-DELAY-Have_to_support': 'I have to support them; if they have to close, it will affect the entire community.',
          'A-1_3-social-Unfortunate_misunderstanding':
            'There has been an unfortunate misunderstanding regarding our tax payments. We will, of course, pay our taxes, but due to financial complications, we need a little more time. In the meantime, check out our new Lumberjack collection!',
          'B-1_3-social-Unfortunate_misunderstanding':
            'There has been an unfortunate misunderstanding regarding our greenhouse gas emissions. We will, of course, upgrade our filtering systems, but due to financial complications we need a little more time. In the meantime, check out our new Lumberjack collection!',
          'A-1_4-scene-DELAY-Council_vote_extension':
            'There are more ways you can support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the tax repayment period for WildertonWear for 4 months. How do you vote?',
          'B-1_4-scene-DELAY-Council_vote_extension':
            'There are more ways you can support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for 4 months, to ease the financial pressure on the company. How do you vote?',
          'AB-1_4-option-DELAY-Vote_against': 'Against. Although I do want to support them, I think they need to learn their lesson.',
          'AB-1_4-option-DELAY-Abstain_vote': 'I’ll abstain. If I openly choose sides, I might lose customers.',
          'AB-1_4-option-DELAY-Vote_for': 'For, of course! We need to keep the factory running, for the workers as well as the community.',
          'AB-1_4-option-ACT-Abstain_vote': 'I’ll abstain. If I openly choose sides I might lose customers.',
          'A-1_4-scene-WAIT-Council_vote_extension':
            'There are more ways you can influence or support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the tax repayment period for WildertonWear for 4 months. How do you vote?',
          'B-1_4-scene-WAIT-Council_vote_extension':
            'There are more ways you can influence or support WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for 4 months, to ease the financial pressure on the company. How do you vote?',
          'A-1_4-option-WAIT-Vote_against': 'Against. We’ve been supporting them long enough.',
          'B-1_4-option-WAIT-Vote_against': 'Against. They should have fixed the system long ago.',
          'AB-1_4-option-WAIT-Vote_for': 'For. We need to keep the factory running, for the workers as well as the community.',
          'A-1_4-scene-ACT-Council_vote_extension':
            'There are more ways you can try to influence WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the tax repayment period for WildertonWear for 4 months. How do you vote?',
          'B-1_4-scene-ACT-Council_vote_extension':
            'There are more ways you can try to influence WildertonWear. As a local politician and council member, you are invited to the regular municipal council meetings. This week, you will vote on a proposal to extend the deadline for WildertonWear’s filtering system upgrade for 4 months to ease the financial pressure on the company. How do you vote?',
          'A-1_4-option-ACT-Vote_against': 'Against, of course! We’ve been supporting them long enough.',
          'B-1_4-option-ACT-Vote_against': 'Against, of course! They should have fixed the system long ago.',
          'AB-1_4-option-ACT-Vote_for': 'For. We need to keep the factory running, for the sake of the workers and the community.',
          'A-1_5-scene-ACT-Extension_rejected':
            'That worked out nicely! Your arguments convinced the council, and a majority voted against the extension. WildertonWear needs to pay its taxes immediately.',
          'B-1_5-scene-ACT-Extension_rejected':
            'That worked out nicely! Your arguments convinced the council, and a majority voted against the extension. WildertonWear needs to fix its systems immediately.',
          'A-1_5-scene-ACT-Extension_approved':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority. The extension was approved, and WildertonWear gets 4 extra months to pay their taxes.',
          'B-1_5-scene-ACT-Extension_approved':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority. The extension was approved, and WildertonWear gets 4 extra months to fix its systems.',
          'A-1_5-scene-DELAY-Extension_approved':
            'Great job! Your arguments convinced the council, and the majority voted for an extension. WildertonWear gets 4 extra months to pay their taxes.',
          'B-1_5-scene-DELAY-Extension_approved':
            'Great job! Your arguments convinced the council, and the majority voted for an extension. WildertonWear gets 4 extra months to fix its systems.',
          'A-1_5-scene-DELAY-Extension_rejected':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority. The extension was rejected, and WildertonWear needs to pay their taxes immediately.',
          'B-1_5-scene-DELAY-Extension_rejected':
            'Oh no, so close! Your arguments convinced some of the council members, but not enough to get a majority. The extension was rejected, and WildertonWear needs to fix its systems immediately.',
          'A-1_5-scene-WAIT-Extension_approved':
            'With a narrow majority, the council voted for an extension. WildertonWear gets 4 extra months to pay its taxes.',
          'B-1_5-scene-WAIT-Extension_approved':
            'With a narrow majority, the council voted for an extension. WildertonWear gets 4 extra months to fix its systems.',
          'A-1_5-scene-WAIT-Extension_rejected':
            'With a narrow majority, the council voted against an extension. WildertonWear needs to pay its taxes immediately.',
          'B-1_5-scene-WAIT-Extension_rejected':
            'With a narrow majority, the council voted against an extension. WildertonWear needs to fix its systems immediately.',
          'AB-1_6-scene-Stockup_2':
            'It’s been another 2 weeks, and most of your customers seem to have forgiven WildertonWear. It’s time to stock up again, and over the past weeks, you have noticed a slow increase in demand for WildertonWear’s products. Does this mean that the boycott is soon going to be over?',
          'AB-2_1-scene-DELAY-Reaction_2nd_newsflash': 'Ouch, supporting the company comes at a cost this time...',
          'AB-2_1-scene-WAIT-Reaction_2nd_newsflash': 'Hm, this time it would have been better to keep the WildertonWear stock down...',
          'AB-2_1-scene-ACT-Reaction-2nd_newsflash':
            'You made the right choice in keeping the WildertonWear stock down. Many people were looking for an alternative brand, and so you completely sold out all your BlueSkin items!',
          'A-2_2-newsFlash-HL-Ignoring_health_regulations': 'WILDERTONWEAR IGNORES HEALTH REGULATIONS',
          'B-2_2-newsFlash-HL-Ignoring_environmental_regulations': 'WILDERTONWEAR IGNORES ENVIRONMENTAL REGULATIONS',
          'A-2_2-newsFlash-body-Ignoring_health_regulations':
            '<b>Local textile manufacturer WildertonWear has routinely disregarded health regulations, says work environment health inspector. Years of neglected safety equipment upgrades have left factory workers exposed to dangerous levels of dust and chemicals.</b> None of our readers is likely to have missed the tax evasion scandal around local textile manufacturer WildertonWear lately. But the company has more dark secrets; in an exclusive interview, the Daily Times has gained information about multiple breaches of health and safety regulations. According to a work environment health inspector, who wishes to remain anonymous, WildertonWear has routinely ignored safety regulations about permissible levels of dust and chemicals. Safety equipment, such as air filters and industrial fans, has not been upgraded for years and currently provides insufficient protection. According to the source, WildertonWear has knowingly put its workers at risk of being affected by respiratory diseases, and as a result, there has been an increase in cancer diagnoses and respiratory diseases among employees at its factory.',
          'B-2_2-newsFlash-body-Ignoring_environmental_regulations':
            '<b>Local textile manufacturer WildertonWear has routinely disregarded environmental regulations, says environmental inspector. Years of neglected wastewater filtering system upgrades have resulted in dangerous chemicals being released in the Wilderton River.</b> None of our readers is likely to have missed the emissions scandal around local textile manufacturer WildertonWear lately. But the company has more dark secrets; in an exclusive interview, the Daily Times has gained information about multiple breaches of environmental regulations. According to an environmental inspector, who wishes to remain anonymous, WildertonWear has routinely ignored environmental regulations about permissible levels of chemicals in wastewater. Wastewater filtering equipment has not been upgraded for years and currently provides insufficient protection. According to the source, WildertonWear has knowingly put the local environment and its residents at risk of being exposed to dangerous chemicals, and as a result, there has been an increase in cancer diagnoses and respiratory diseases in Wilderton.',
          'A-2_3-social-Going_on_strike':
            'From 12:00 today, 34 of our members will go on a strike. Following yesterday’s disclosure regarding WildertonWear’s work environment health regulation breaches, we demand improved safety protection for the workers!',
          'B-2_3-social-Going_on_strike':
            'From 12:00 today, 34 of our members will go on a strike. Following yesterday’s disclosure regarding WildertonWear’s environmental regulation breaches, we demand proper pollution and wastewater management systems so that we and our community can feel safe!',
          'AB-2_4-scene-ACT-Local_meeting_point':
            'To some residents, this is it. They really can’t support WildertonWear anymore. Supporters of the boycott come by to talk. Gradually, your shop becomes a local meeting point for those who want change, and together you discuss what to do next. What do you think should be your next step?',
          'A-2_4-option-ACT-Organise_demonstration': 'Organise a demonstration to demand better working conditions at the factory.',
          'B-2_4-option-ACT-Organise_demonstration': 'Organise a demonstration to demand better filtering systems at the factory.',
          'AB-2_4-option-ACT/WAIT-Put_up_posters': 'Put up posters and hand out leaflets to make more people join the boycott.',
          'AB-2_4-option-ACT-Have_a_dialogue': 'Have a dialogue with the company; consumer pressure alone probably won’t work.',
          'AB-2_4-scene-WAIT-Local_meeting_point':
            'This is not good. You’ll have to consider whether or not you can still support WildertonWear. Gradually, your shop becomes a local meeting point for those who want to discuss the issue, and together you discuss what to do next.  What do you suggest?',
          'AB-2_4-option-WAIT/DELAY-Have a dialogue': 'Have a dialogue with the company to convince them to change.',
          'AB-2_4-option-WAIT/DELAY-Astroturf':
            'Gather friends and fellow retailers to demonstrate in favour of keeping the historical factory.',
          'AB-2_4--scene-DELAY-Local_meeting_point':
            'This is not good. Now it will be a lot harder to convince the community to save WildertonWear and the workers’ jobs. Gradually, your shop becomes the meeting point for those who want to support the factory, and together you discuss what to do next. What do you think should be your next step?',
          'AB-2_4-option-DELAY-Interview_is_fishy':
            'The interview seems fishy; we should write an opinion piece in the paper to question it.',
          'AB-2_5-scene-ACT-Demonstration_successful': 'The demonstration was very successful; hundreds of townspeople joined in!',
          'AB-2_5-scene-ACT-Posters_have_effect': 'The posters seem to have an effect; more people join the boycott every week!',
          'AB-2_5-scene-WAIT-Declined_invitation':
            'You contact WildertonWear, but the company representatives politely decline your meeting invitation since they are too busy.',
          'AB-2_5-scene-DELAY-Small_but_loud':
            'The demonstration was small but loud, and thanks to a friend at the local paper, you got a lot of press coverage. Your message is spreading!',
          'AB-2_5-scene-DELAY-Confront_rumours':
            'That was a good choice!  Your efforts to confront these harmful rumours seem to be working! In fact, WildertonWear itself seems to have been inspired by it.',
          'A-2_6-social-Independent_audit':
            'At WildertonWear, we prioritise the health and safety of our workers and the surrounding community above all else. Therefore, we have hired an independent company, Investiga, to perform an audit on the working conditions.',
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
            'Look at that! The discount campaign is going very well, you’ve even seen a number of new customers in the shop! It is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-DELAY-Rad-Stockup_3':
            'Phew, that was a lot of work! But it seems to pay off. Not all retailers were ready to support WildertonWear, but you convinced enough of them to increase the sales. It is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-WAIT-Stockup_3':
            'Wow, the support was even stronger than you thought! A majority of your customers generously donated to the collection box. You now have a substantial fund to support the cause. It is time to stock up for the coming month. Should you continue to buy mostly WildertonWear, or maybe get some extra BlueSkin, just to be safe?',
          'AB-2_9-scene-ACT-Rad-Stockup_3':
            'Phew, that was a lot of work! But it seems to pay off. Not all retailers were ready to join the boycott, but you convinced enough of them to add pressure on WildertonWear. It is time to stock up for the coming month. Should you continue to focus on BlueSkin, or maybe get some extra WildertonWear, just to be safe?',
          'AB-2_9-scene-ACT-Mod-Stockup_3':
            'Look at that! The discount campaign is going very well, you’ve even seen a number of new customers in the shop! But this is clearly better for the cause than for your business; your revenues are lagging quite a bit. It is time to stock up for the coming month. Should you continue to focus on BlueSkin, or maybe get some extra WildertonWear, just to be safe?',
          'AB-3_1-scene-DELAY-Reaction_waiting_for_audit':
            'You made a good choice. Thanks to your efforts, the boycott is slowing down while the customers are waiting for the results of the audit.',
          'AB-3_1-scene-WAIT-Reaction_waiting_for_audit':
            'Phew, that was a tough decision. You took the safe bet, which was a good idea this time. The boycott has slowed down since the customers are waiting for the result of the audit.',
          'AB-3_1-scene-ACT-Reaction_waiting_for_audit':
            'This time, your will to change was a bit too radical. You underestimated how many customers who would forget about the boycott while waiting for the finished investigation.',
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
            'A lot of people are worried, and you realise that rather than making rash decisions, you need to come up with long-term solutions.  How can you find a way to get WildertonWear to make the necessary changes, without risking the workers’ jobs?',
          'AB-3_3-option-WAIT/DELAY-WW_day':
            'Organise a WildertonWear day with concerts and family activities to raise money for the factory.',
          'AB-3_3-option-DELAY-Invite_interest_groups': 'Invite local interest groups to submit suggestions on how to protect the jobs.',
          'A-3_3-option-DELAY-Local_producer': 'Convince a local producer of filters and safety gear to donate equipment to the factory.',
          'B-3_3-option-DELAY-Local_producer': 'Convince a local producer of pollution filters to donate equipment to the factory.',
          'AB-3_3-scene-DELAY-Rad-Long_term':
            'A lot of people are worried. You realise that rather than making rash decisions, you need to come up with long-term solutions. How can you find a way to get WildertonWear to make the necessary changes, without risking the workers’ jobs?',
          'AB-3_3-scene-ACT-How_to_thrive':
            'People are worried, and you realise that the community needs to talk about how the town could thrive even if the factory closes. What can you do to make the town more resilient?',
          'AB-3_3-option-ACT-Community_day':
            'Organise a community day for residents to brainstorm what the town could look like in the future.',
          'AB-3_3-option-ACT/WAIT-Invite_interest_groups':
            'Invite local interest groups to submit suggestions on how to create alternative sources of income.',
          'AB-3_3-option-ACT/WAIT-Fund_to_support': 'Start a fund to support the workers if the factory closes.',
          'AB-3_3-scene-WAIT-Long_term':
            'People are worried, and you realise that you are finally forced to choose sides. Should you try to find a way to force WildertonWear to make the necessary changes without risking the workers’ jobs, or is it time to start talking about how the town could thrive even if the factory closes? What is your next step?',
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
            'This week, the town is bubbling with discussions. Tomorrow, the report from the factory audit will be released, and everyone is speculating on what it is going to say. Unfortunately, you need to get your stock-up order in today. How do you divide between the brands this time?',
          'AB-4_1-newsFlash-HL-WW_ignored_warnings': 'AUDIT SHOWS: WILDERTONWEAR IGNORED WARNINGS',
          'A-4_1-newsFlash-body-ACT-WW_ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the breaches without taking action. As a result, three of the largest national department stores announced that they have stopped selling WildertonWear.</b> “This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.” The discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. According to sources, the boycott is on again, and the strikers are more determined than ever to keep striking until the company improves its safety equipment.',
          'B-4_1-newsFlash-body-ACT-WW-ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the breaches without taking action. As a result, three of the largest national department stores announced that they have stopped selling WildertonWear.</b> “This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.” The discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. According to sources, the boycott is on again, and the strikers are more determined than ever to keep striking until the company upgrades its filtering systems.',
          'AB-4_1-newsFlash-DELAY-body-WW_ignored_warnings':
            '<b>A highly anticipated report, released yesterday by the auditing company Investiga, reveals that WildertonWear had been warned multiple times about the regulatory breaches without taking action.</b> “This is a nightmare,” says an anonymous representative of WildertonWear. “We have not done anything wrong.” The discussions have been running high in the community over the past days, and are likely to continue as a result of the audit findings. But despite a widespread frustration with the company’s conduct, WildertonWear still has a lot of support in the community due to its long history. Many residents have family members who used to work at the factory, or once worked there themselves, and who still have good faith in the company.',
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
            'It’s time for another council meeting, and this time you’re bringing 3 suggestions you have gathered from local interested groups. Which one do you want to give an extra push?',
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
            'It has taken quite some time, but you finally manage to find a local sponsor who is willing to step in and offer WildertonWear a loan to get back on their feet. The sponsor prefers to stay anonymous and mentions that you can negotiate the repayment conditions later. You are so relieved to finally have found a solution that you happily agree to the conditions.',
          'AB-4_4-scene-ACT-ModMod-Clothing_repair_shop':
            'That went well! Your group decided to start collecting money to fund a little shop to repair and mend clothes. Not only would it create more jobs, but it would also extend the lifetime of WildertonWear clothing.',
          'AB-4_4-scene-ACT-Mod-Evening_classes':
            'Yay, the proposal was approved! Now you need to find a suitable place to be, recruit teachers, set up the administration and enrol students.',
          'AB-4_4-scene-DELAY-ModMod-Attract_companies':
            'Yes, you did it! A group is put together to draft a proposal with favourable conditions, cheap land deals and potentially tax reductions, and to book meetings with companies that are considering moving to Wilderton.',
          'A-4_4-scene-DELAY-Rad-Relax_safety_regulations':
            'Looks like your efforts are finally paying off! After weeks of lunches, joint meetings, top-secret discussions, and a visit to one of the authority’s planning meetings, everything seems to fall into place. You are getting signals that it might be possible to arrange a one-time exception from the safety regulations for WildertonWear, just to save its crucial business.',
          'B-4_4-scene-DELAY-Rad-Relax_environmental_regulations':
            'Looks like your efforts are finally paying off! After weeks of lunches, joint meetings, top-secret discussions, and a visit to one of the authority’s planning meetings, everything seems to fall into place. You are getting signals that it might be possible to arrange a one-time exception from the environmental regulations for WildertonWear, just to save its crucial business.',
          'AB-4_4-scene-ACT-Rad-Universal_basic_income':
            'No luck this time. The council promised to consider it, but they didn’t think it was a good solution now since it would probably take too long to implement.',
          'AB-4_5-scene-ACT-Stockup_5':
            'Meanwhile, there are rumours about a potential investor who could help the factory with a sizable loan. With that in mind, how will you stock up for next month?',
          'AB-4_5-scene-DELAY-Stockup_5':
            'But you also have a business to run, and once again, it is time to stock up. How will you divide the items between brands this time?',
          'AB-5_1-newsFlash-HL-Factory_closing': 'WILDERTONWEAR FACTORY CLOSING',
          'A-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I have already signed up for evening classes to train to become a nurse.”',
          'B-5_1-newsFlash-body-ACT-Mod-Factory_closing':
            '<b>After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I have already signed up for evening classes to train to become a nurse.”',
          'A-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job, but hopefully the campaign to bring in new companies will lead to more jobs.”',
          'B-5_1-newsFlash-body-DELAY-ModMod-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job, but hopefully the campaign to bring in new companies will lead to more jobs.”',
          'A-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. The relaxed safety regulations came too late, and with the tough financial situation, decreased production due to the strikes, and high tax payments, it was simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move.”',
          'B-5_1-newsFlash-body-DELAY-Rad-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. The relaxed environmental regulations came too late, and with the tough financial situation, decreased production due to the strikes, and high costs for system upgrades, it was simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move.”',
          'A-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>After months of strikes and boycotts, the management of WildertonWear announced yesterday that the company will be closing. After the company was forced to back out of a sponsor deal, which turned out to be a money laundering scheme, the tough financial situation, decreased production due to the strikes, and high tax payments simply became too much.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the safety breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move.”',
          'B-5_1-newsFlash-body-DELAY-Mod-Factory_closing':
            '<b>After months of strikes and boycotts, the WildertonWear management announced yesterday that the company will be closing. After the company was forced to back out of a sponsor deal, which turned out to be a money laundering scheme, the tough financial situation, decreased production due to the strikes, and high costs for system upgrades simply became too much.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s frustrating,” says Simon Grady, a former employee who passes by to collect his things. “I get that people are angry because of the environmental breaches, but I’m sure the company could have fixed it with some more time. This place has such a long tradition - I am the fourth generation of family members working here - and closing it down will change the entire community. And I’m worried about getting a new job; maybe I’ll have to move.”',
          'A-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The potential investor withdrew last minute, and with the tough financial situation, decreased production due to the strikes, and high tax payments, it was simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”',
          'B-5_1-newsFlash-body-ACT-Rad-Factory_closing':
            '<b>After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The potential investor withdrew last minute, and with the tough financial situation, decreased production due to the strikes, and high costs for system upgrades, it was simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”',
          'A-newsFlash-body-ACT-ModMod-Factory_closing':
            '<b>After months of turbulence, the management of WildertonWear announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high tax payments were simply too much for the company.</b> It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put workers at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”',
          'B-5_1-newsFlash-body-ACT-ModMod-Factory_closing':
            'After months of turbulence, the WildertonWear management announced yesterday that the company will be closing. The tough financial situation, decreased production due to the strikes, and high costs for system upgrades were simply too much for the company. It is a quiet day at the factory. When the closing was announced around lunchtime yesterday, the staff was sent home. After 148 years in operation, the sounds of the factory are no longer echoing through Wilderton. “It’s bittersweet,” says Niels West, a former employee who passes by to collect his things. “On the one hand, I’m glad that the factory won’t be able to put the community and climate at risk, but on the other hand, I’m sad to see a company with such a long tradition fail. My dad used to work here, and two of my grandparents. I’m not so sad about the job, though. I’m starting next week at the newly opened clothing repair and mending shop in town.”',
          'AB-5_2-scene-option-What_has_happened': 'What has happened?',
          'AB-5_2-scene-2_yrs_later': 'Two years later...',
          'AB-5_3-newsFlash-HL-ACT-Mod-Centre_2_yrs': 'WEARHOUSE CENTRE CELEBRATES 2 YEARS',
          'AB-5_3-newsFlash-body-ACT-Mod-Centre_2_yrs':
            '<b>When the machines at WildertonWear stopped, a few enthusiasts stepped in. Today, the old factory building celebrates 2 years as a thriving community centre, and invites all residents to join in the celebrations.</b> Thanks to a group of enthusiasts, the history of the WildertonWear factory took a completely new turn. The old brick factory buildings are still there, but instead of thundering machines, you now hear music, conversations, and the clicking of computer keyboards. The large halls have been turned into a co-working space, with a popular café, a clothing repair and mending shop, and a gym. Most of the former factory workers have found new occupations, working for the tailor, in the BlueSkin workshop in the next town, or pursuing new dreams as café owners or students. And the community members love their new centre - in the past months, the number of visitors has been growing steadily.',
          'AB-5_3-newsFlash-HL-ACT-ModMod-Community_centre_2_yrs': 'COMMUNITY CENTRE TURNS 2 YEARS',
          'AB-5_3-newsFlash-body-ACT-ModMod-Community_centre_2_yrs':
            '<b>The history of the old Wilderton factory could have ended when WildertonWear folded. Instead, it now celebrates 2 years as a community centre, with a co-working space, café and gym.</b> Thanks to a group of enthusiasts, the historical Wilderton factory now celebrates its 150th anniversary with a complete revival. The old factory buildings are still there, but instead of thundering machines, you now hear soft conversations and the clicking of computer keyboards. The large halls have been turned into a co-working space, a popular café, and a gym. Most of the former factory workers have found new occupations. Some have opened their own tailor shops in town, others have been hired by BlueSkin, and some have taken temporary jobs while looking for new opportunities.',
          'AB-5_3-newsFlash-HL-DELAY-Mod-Coworking_space': 'WILDERTON FACTORY TURNS CO-WORKING SPACE',
          'AB-5_3-newsFlash-body-DELAY-Mod-Coworking_space':
            '<b>When the machines at WildertonWear stopped, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory is experiencing a revival.</b> The old factory buildings are still there, but instead of thundering machines, you now hear the sound of drills and saws. After some time of deliberations, the municipality has decided to turn the building into office space, with a café and small museum dedicated to the factory’s history. Most of the former factory workers have found work with BlueSkin or opened their own little tailoring shops, while some are still working odd jobs while looking for new opportunities. And maybe they will one day end up in an office in the old factory building? Beth Callistor, responsible for the project, is hopeful. “We have already had a lot of requests from companies that are considering moving their offices here.”',
          'AB-5_3-newsFlash-HL-DELAY-ModMod-Coworking_space_opened': 'WILDERTON CO-WORKING SPACE OPENED',
          'AB-5_3-newsFlash-body-DELAY-ModMod-Coworking_space_opened':
            '<b>Thanks to a group of enthusiasts, the buildings of the historical WildertonWear factory are no longer empty. Today, the old factory building celebrates 1 year as a modern co-working space for local entrepreneurs.</b> When the machines at WildertonWear stopped, many declared it the end of a proud history of manufacturing. But just in time for it’s 150th anniversary, the factory is once again thriving. The factory buildings are still there, but instead of the thundering machines, you know hear soft conversations and the clicking from keyboards. Thanks to a group of enthusiasts and a generous donation by the municipality, the large halls have been turned into fresh new offices and a café.',
          'AB-5_3-newsFlash-HL-ACT-Rad-Centre_wins_award': 'WEARHOUSE CENTRE WINS AWARD',
          'AB-5_3-newsFlash-body-ACT-Rad_Centre_wins_award':
            '<b>Only two years after its opening, the new WearHouse community centre won the prestigious “Best community centre” award. The jury was deeply impressed by how the old factory had been turned into a living, thriving community without losing sight of its old history.</b> It’s been two years since the WildertonWear factory was forced to close down. The old brick factory buildings are still there, but instead of thundering machines, you now hear music, conversations, and laughter. The big halls have been turned into a community centre with maker space workshops, meeting rooms for local organisations, a small second hand shopping mall, and a popular café. Most of the former factory workers have found new jobs in the clothing repair and mending shop, in the workshops, or at Blueskin in the next town. And the community members love their new centre, in the past months, the number of visitors has been growing steadily.',
          'AB-5_3-newsFlash-HL-DELAY-Rad-Factory_revived': 'WILDERTON FACTORY TO BE REVIVED',
          'A-5_3-newsFlash-body-DELAY-Rad-Factory_revived':
            '<b>When strikes and tax problems forced the WildertonWear factory to close, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory might be revived in a new shape.</b> The old factory buildings are still here, but instead of thundering machines, you now hear the sound of birds echoing through the large halls. After two years of deliberations, the municipality has finally found a large manufacturing company that is considering settling in town. Beth Callistor, responsible for the project, is hopeful. “We have had some very positive initial talks with the manufacturer, and we think that this could bring a lot of new jobs.” When the factory closed, many of its former workers were forced to look elsewhere for jobs. Some have been hired by BlueSkin or opened their own business, while others have left town or are still searching for a new occupation. Many shop owners and restaurants also saw their revenues decrease as many residents moved out, and are also hoping that a new company could mean new business opportunities.',
          'B-5_3-newsFlash-body-DELAY-Rad_Factory_revived':
            '<b>When strikes forced the WildertonWear factory to close, many residents declared it the end of a proud history of manufacturing. But just in time for its 150th anniversary, the factory might be revived in a new shape.</b> The old factory buildings are still here, but instead of thundering machines, you now hear the sound of birds echoing through the large halls. After two years of deliberations, the municipality has finally found a large manufacturing company that is considering settling in town. Beth Callistor, responsible for the project, is hopeful. “We have had some very positive initial talks with the manufacturer, and we think that this could bring a lot of new jobs.” When the factory closed, many of its former workers were forced to look elsewhere for jobs. Some have been hired by BlueSkin or opened their own business, while others have left town or are still searching for a new occupation. Many shop owners and restaurants also saw their revenues decrease as many residents moved out, and are also hoping that a new company could mean new business opportunities.',
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
    },
  });

export default i18n;
