import { useMemo } from 'react';
import { useGameState } from '../state';
import type { SocialNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { FakeTweet } from '@/components/ui/fake-tweet-card';
import { fakeData } from '../constants';

interface SocialScreenProps {
  node: SocialNodeType;
}

export function SocialScreen({ node }: SocialScreenProps) {
  const moveForward = useGameState((state) => state.moveForward);
  const { t } = useTranslation();

  const handleContinue = () => {
    moveForward('default');
  };

  // Create a map of userName to fake data for quick lookup
  const fakeDataMap = useMemo(() => {
    const map = new Map<string, (typeof fakeData)[0]>();
    fakeData.forEach((account) => {
      map.set(account.userName, account);
    });
    return map;
  }, []);

  const tweets = [
    { text: node.data?.text1, userName: node.data?.userName1 },
    { text: node.data?.text2, userName: node.data?.userName2 },
    { text: node.data?.text3, userName: node.data?.userName3 },
  ]
    .filter((config): config is { text: string; userName: string } => {
      return !!config.text && !!config.userName && fakeDataMap.has(config.userName);
    })
    .map((config) => ({
      text: config.text,
      fake: fakeDataMap.get(config.userName)!,
    }));

  return (
    <GameLayout>
      <div className="flex flex-col gap-4">
        {tweets.map((tweet, index) => (
          <FakeTweet
            key={index}
            text={t(tweet.text)}
            displayName={tweet.fake.displayName}
            userName={tweet.fake.userName}
            picture={tweet.fake.picture}
          />
        ))}
        <div className="mt-8 flex justify-center">
          <GameButton onClick={handleContinue}>{t('continue')}</GameButton>
        </div>
      </div>
    </GameLayout>
  );
}
