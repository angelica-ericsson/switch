import type { EndNodeType } from '../zod-schema';
import { Trans, useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { useEffect, useRef } from 'react';
import { useGameState } from '../state';
import { useDemographicStore } from '@/features/onboarding/demographicStore';
import { useConsentStore } from '@/features/onboarding/consentStore';
import { submitData } from '@/lib/supabase';
import { GameButton } from '@/components/ui/gameButton';
import Confetti from 'react-confetti';
import { useNavigate } from '@tanstack/react-router';
import game from '../../../game-files/game.json';
import { generateGameNodeGraph } from '../state';
import { GAME_TARGET_SALES } from '../constants';
import { trackEvent } from '@/lib/umami';
import { Repeat, Send } from 'lucide-react';

interface EndScreenProps {
  node: EndNodeType;
}

export function EndScreen({ node }: EndScreenProps) {
  const { t } = useTranslation();
  const hasSubmittedRef = useRef(false);
  const navigate = useNavigate();
  const totalSales = useGameState((state) => state.getTotalSales)();
  const gameVariant = useGameState((state) => state.gameVariant);
  const setGameState = useGameState((state) => state.setGameState);
  const demographicData = useDemographicStore.getState();

  const shareData = {
    title: t('end.shareTitle'),
    text: t('end.shareText'),
    url: 'https://www.switch-the-game.com/?utm_source=share-button&utm_campaign=' + demographicData.sessionId,
  };
  // Check if Web Share API is supported
  const isWebShareSupported = typeof navigator !== 'undefined' && 'share' in navigator;

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
        consented: consentData.validate(),
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
        totalSales: totalSales,
        gameVariant: gameState.gameVariant,
        surveyResponse1: gameState.surveyResponse1,
        surveyResponse2: gameState.surveyResponse2,
      },
    )
      .then(() => console.log('data sent to supabase'))
      .catch((error) => {
        console.error('Failed to submit game data to Supabase:', error);
      });

    trackEvent('game-end');
  }, [node.id, totalSales]);

  const handleShare = async () => {
    if (!isWebShareSupported) {
      return;
    }

    try {
      await navigator.share(shareData);
      trackEvent('game-shared', { method: 'web-share-api' });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <GameLayout>
      <Confetti recycle={false} numberOfPieces={1000} />
      <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
        {node.data?.headline && <h1 className="font-script text-4xl font-bold">{t(node.data.headline)}</h1>}
        <p className="text-xl text-pretty whitespace-pre-line">
          <Trans
            i18nKey={node.data?.text ?? ''}
            values={{ totalSales }}
            components={{
              b: <span className="font-bold" />,
            }}
          />
        </p>
        <p className="text-xl text-pretty whitespace-pre-line">
          <Trans
            i18nKey={totalSales >= GAME_TARGET_SALES ? 'end.overTarget' : 'end.underTarget'}
            values={{ totalSales }}
            components={{
              b: <span className="font-bold" />,
            }}
          />
        </p>
        <div className="mt-8 flex justify-between">
          <GameButton
            onClick={() => {
              // Reset game state but preserve gameVariant and sessionId
              // sessionId is already preserved in demographicStore (persisted)
              const { startNode } = generateGameNodeGraph(game);
              setGameState({
                sentimentPro: 0,
                sentimentNeutral: 0,
                sentimentAgainst: 0,
                events: [],
                isInitialized: true,
                daysSinceGameStart: 0,
                currentNode: startNode,
                surveyResponse1: null,
                surveyResponse2: null,
                gameVariant, // Preserve gameVariant
              });
              // Navigate to game to restart
              navigate({ to: '/game' });
            }}
          >
            <Repeat className="size-4" />
            {t('end.playAgain')}
          </GameButton>

          {isWebShareSupported && (
            <GameButton onClick={handleShare}>
              <Send className="size-4" />
              {t('end.shareButton')}
            </GameButton>
          )}
        </div>
        <div className="text-center text-sm">
          <p className="font-bold">{t('end.credits.headline')}</p>{' '}
          <p>
            {t('end.credits.text')} {t('consent.contact.name')} (
            <a href={`mailto:${t('consent.contact.email')}`}>{t('consent.contact.email')}</a>)
          </p>{' '}
          <p>{t('end.credits.programming')}</p>
        </div>
      </div>
    </GameLayout>
  );
}
