import { useMemo } from 'react';
import { useGameState } from '../state';
import type { SocialNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { FakeTweet } from '@/components/ui/fake-tweet-card';
import { fakeData } from '../constants';
import { motion } from 'motion/react';

interface SocialScreenProps {
  node: SocialNodeType;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const tweetVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 1.5, // Appears after tweets
    },
  },
};

export function SocialScreen({ node }: SocialScreenProps) {
  const gameVariant = useGameState((state) => state.gameVariant);
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

  // Select variant-specific content
  const tweets = [
    {
      text: gameVariant === 'A' ? node.data?.text1A : node.data?.text1B,
      userName: node.data?.userName1,
    },
    {
      text: gameVariant === 'A' ? node.data?.text2A : node.data?.text2B,
      userName: node.data?.userName2,
    },
    {
      text: gameVariant === 'A' ? node.data?.text3A : node.data?.text3B,
      userName: node.data?.userName3,
    },
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
      <motion.div className="flex flex-col gap-4" variants={containerVariants} initial="hidden" animate="visible">
        {tweets.map((tweet, index) => (
          <motion.div key={index} variants={tweetVariants}>
            <FakeTweet
              text={t(tweet.text)}
              displayName={tweet.fake.displayName}
              userName={tweet.fake.userName}
              picture={tweet.fake.picture}
            />
          </motion.div>
        ))}
        <motion.div className="mt-8 flex justify-center" variants={buttonVariants}>
          <GameButton onClick={handleContinue}>{t('continue')}</GameButton>
        </motion.div>
      </motion.div>
    </GameLayout>
  );
}
