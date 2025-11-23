import { useMemo } from 'react';
import { useGameState } from '../state';
import type { SocialNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { FakeTweet } from '@/components/ui/fake-tweet-card';
import avatar1 from '@/assets/avatars/1.jpg';
import avatar2 from '@/assets/avatars/2.jpg';
import avatar3 from '@/assets/avatars/3.jpg';
import avatar4 from '@/assets/avatars/4.jpg';
import avatar5 from '@/assets/avatars/5.jpg';
import avatar6 from '@/assets/avatars/6.jpg';
import avatar7 from '@/assets/avatars/7.jpg';

const fakeData = [
  {
    firstName: 'Deven',
    lastName: 'Norwood',
    userName: 'Deven.Kessler',
    picture: avatar1,
  },
  {
    firstName: 'Vicente',
    lastName: 'Gunnar',
    userName: 'Vicente_Jenkins',
    picture: avatar2,
  },
  {
    firstName: 'Wilhelmine',
    lastName: 'Lillie',
    userName: 'Wilhelmine.Satterfield',
    picture: avatar3,
  },
  {
    firstName: 'Joseph',
    lastName: 'Cassandra',
    userName: 'Joe_6000',
    picture: avatar4,
  },
  {
    firstName: 'Domenic',
    lastName: 'Laury',
    userName: 'Domenic71',
    picture: avatar5,
  },
  {
    firstName: 'Rowland',
    lastName: 'Larue',
    userName: 'Rowland_Olson',
    picture: avatar6,
  },
  {
    firstName: 'Leta',
    lastName: 'Merl',
    userName: 'Leta54',
    picture: avatar7,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface SocialScreenProps {
  node: SocialNodeType;
}

export function SocialScreen({ node }: SocialScreenProps) {
  const moveForward = useGameState((state) => state.moveForward);
  const { t } = useTranslation();

  const handleContinue = () => {
    moveForward('default');
  };
  const tweetTexts = [node.data?.text1, node.data?.text2, node.data?.text3].filter(
    (text): text is string => text !== null && text !== undefined,
  );

  // Shuffle the fake profiles once and use them in sequence
  const shuffledProfiles = useMemo(() => shuffleArray(fakeData), []);

  const tweets = tweetTexts.map((text, index) => ({
    text,
    fake: shuffledProfiles[index % shuffledProfiles.length],
  }));

  return (
    <GameLayout>
      <div className="flex flex-col gap-4">
        {tweets.map((tweet, index) => (
          <FakeTweet
            key={index}
            text={t(tweet.text)}
            firstName={tweet.fake.firstName}
            lastName={tweet.fake.lastName}
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
