import { useGameState } from '../state';
import { GAME_MAX_DAYS, GAME_TARGET_SALES } from '../constants';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function StatusBar() {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 z-100 hidden items-center pt-24 md:flex">
        <div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="postcard-bg flex flex-col items-center justify-center gap-6 rounded-tl-2xl rounded-bl-2xl p-3 shadow-2xl"
          >
            <SentimentCircle />
            <SalesProgress />
            <TimelineProgress />
          </motion.div>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 left-0 z-100 flex justify-center md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="postcard-bg flex w-full max-w-[400px] flex-row items-start justify-between gap-3 rounded-tl-2xl rounded-tr-2xl p-2"
        >
          <SentimentCircle />
          <div className="flex flex-col gap-3">
            <TimelineProgress />
            <SalesProgress />
          </div>
        </motion.div>
      </div>
    </>
  );
}

function TimelineProgress() {
  const { t } = useTranslation();
  const daysSinceGameStart = useGameState((state) => state.daysSinceGameStart);
  const remainingDays = Math.max(0, GAME_MAX_DAYS - daysSinceGameStart);
  const remainingDaysPercentage = (remainingDays / GAME_MAX_DAYS) * 100;

  return (
    <div className={cn('flex w-40 flex-col gap-1 transition-opacity md:gap-2')}>
      <p className="text-left text-sm leading-4 font-medium tracking-tight">{t('statusBar.daysLeft')}</p>
      <div className="relative w-full grow">
        <Progress value={remainingDaysPercentage} />
      </div>
    </div>
  );
}

function SentimentCircle() {
  const { t } = useTranslation();
  const sentimentPro = useGameState((state) => state.sentimentPro);
  let sentimentNeutral = useGameState((state) => state.sentimentNeutral);
  const sentimentAgainst = useGameState((state) => state.sentimentAgainst);

  if (sentimentAgainst === 0 && sentimentPro === 0) sentimentNeutral = 100;

  const sentimentPieData = [
    { name: 'Positive', value: sentimentPro, color: 'var(--color-emerald-600)' },
    { name: 'Neutral', value: sentimentNeutral, color: 'var(--color-stone-400)', opacity: 0.2 },
    { name: 'Negative', value: sentimentAgainst, color: 'var(--color-rose-500)' },
  ].filter((item) => item.value > 0);

  return (
    <div className="flex w-40 flex-col items-center gap-0.5 transition-opacity">
      <p className="text-sm leading-4 font-medium tracking-tight">{t('statusBar.publicOpinion')}</p>
      <div className="flex flex-row items-center gap-2">
        <SentimentDonut segments={sentimentPieData} />
        <div>
          <div className="flex min-w-24 flex-col gap-0.5 text-xs">
            <div className="flex justify-between">
              <p>
                <span className="mr-1 inline-block size-2 rounded-full bg-emerald-600"></span>
                {t('statusBar.positive')}
              </p>
              <p className="tabular-nums">{sentimentPro} %</p>
            </div>
          </div>
          <div className="flex min-w-20 flex-col gap-0.5 text-xs">
            <div className="flex justify-between">
              <p>
                <span className="mr-1 inline-block size-2 rounded-full bg-stone-300"></span>
                {t('statusBar.neutral')}
              </p>
              <p className="tabular-nums">{sentimentNeutral} %</p>
            </div>
          </div>
          <div className="flex min-w-20 flex-col gap-0.5 text-xs">
            <div className="flex justify-between">
              <p>
                <span className="mr-1 inline-block size-2 rounded-full bg-rose-500"></span>
                {t('statusBar.negative')}
              </p>
              <p className="tabular-nums">{sentimentAgainst} %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SentimentDonut({ segments }: { segments: { value: number; color: string; opacity?: number }[] }) {
  const size = 60;
  const cx = size / 2;
  const cy = size / 2;
  const outerRadius = 28;
  const innerRadius = outerRadius * 0.7;
  const r = (outerRadius + innerRadius) / 2;
  const strokeWidth = outerRadius - innerRadius;
  const circumference = 2 * Math.PI * r;

  let cumulative = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        {segments.map((seg, i) => {
          const gap = 2;
          const dashLength = Math.max(0, (seg.value / 100) * circumference - gap);
          const offset = circumference - (cumulative / 100) * circumference;
          cumulative += seg.value;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeOpacity={seg.opacity ?? 1}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dasharray 0.3s ease, stroke-dashoffset 0.3s ease' }}
            />
          );
        })}
      </g>
    </svg>
  );
}

function SalesProgress() {
  const { t } = useTranslation();
  const totalSales = useGameState((state) => state.getTotalSales());
  const max = GAME_TARGET_SALES * 2;
  const value = Math.min((totalSales / max) * 100, 100);

  return (
    <div className={cn('flex w-40 flex-col gap-1 transition-opacity md:gap-2')}>
      <p className="text-left text-sm leading-4 font-medium tracking-tight">{t('statusBar.salesNeeded')}</p>
      <div className="relative w-full grow">
        <Progress
          value={value}
          className={cn('h-2 w-full', totalSales > GAME_TARGET_SALES ? '[&>div]:bg-emerald-600' : '[&>div]:bg-rose-500')}
        />
        <div className="absolute -top-1 left-[50%] z-10 h-4 w-0 border-r-2 border-rose-800" />
      </div>
      <p className="text-left text-xs leading-4 tracking-tight">{t('statusBar.yourSales', { totalSales })}</p>
    </div>
  );
}
