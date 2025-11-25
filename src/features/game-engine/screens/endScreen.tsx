import type { EndNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { useEffect, useRef } from 'react';
import { useGameState } from '../state';
import { useDemographicStore } from '@/features/onboarding/demographicStore';
import { useConsentStore } from '@/features/onboarding/consentStore';
import { submitData } from '@/lib/supabase';

interface EndScreenProps {
  node: EndNodeType;
}

export function EndScreen({ node }: EndScreenProps) {
  const { t } = useTranslation();
  const hasSubmittedRef = useRef(false);

  // Submit data when end screen is reached (only once per node)
  useEffect(() => {
    if (hasSubmittedRef.current) {
      return;
    }

    hasSubmittedRef.current = true;

    const gameState = useGameState.getState();
    const demographicData = useDemographicStore.getState();
    const consentData = useConsentStore.getState();

    submitData(
      {
        birthYear: demographicData.birthYear,
        gender: demographicData.gender,
        education: demographicData.education,
        newsSources: demographicData.newsSources,
        electionIssues: demographicData.electionIssues,
        howDidYouFindGame: demographicData.howDidYouFindGame,
        alias: demographicData.alias,
        sessionId: demographicData.sessionId,
      },
      {
        studyAbout: consentData.studyAbout,
        informationStorage: consentData.informationStorage,
        personalDetails: consentData.personalDetails,
        participation: consentData.participation,
        contactResearcher: consentData.contactResearcher,
      },
      {
        sentimentPro: gameState.sentimentPro,
        sentimentNeutral: gameState.sentimentNeutral,
        sentimentAgainst: gameState.sentimentAgainst,
        events: gameState.events,
        totalSales: gameState.getTotalSales(),
        gameVariant: gameState.gameVariant,
        surveyResponse1: gameState.surveyResponse1,
        surveyResponse2: gameState.surveyResponse2,
      },
    )
      .then(() => console.log('data sent to supabase'))
      .catch((error) => {
        console.error('Failed to submit game data to Supabase:', error);
      });
  }, [node.id]);

  return (
    <GameLayout>
      <div className="mx-auto max-w-2xl space-y-6 p-8 text-center">
        {node.data?.headline && <h1 className="text-4xl font-bold">{t(node.data.headline)}</h1>}
        {node.data?.text && <p className="text-muted-foreground text-lg whitespace-pre-wrap">{t(node.data.text)}</p>}
      </div>
    </GameLayout>
  );
}
