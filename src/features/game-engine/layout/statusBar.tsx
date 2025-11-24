import { useGameState } from '../state';
import { GAME_MAX_DAYS, GAME_TARGET_SALES } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function StatusBar() {
  const sentimentPro = useGameState((state) => state.sentimentPro);
  const sentimentNeutral = useGameState((state) => state.sentimentNeutral);
  const sentimentAgainst = useGameState((state) => state.sentimentAgainst);
  const daysSinceGameStart = useGameState((state) => state.daysSinceGameStart);
  const totalSales = useGameState((state) => state.getTotalSales());

  // Prepare data for sentiment Recharts PieChart
  const sentimentPieData = [
    { name: 'Positive', value: sentimentPro, color: 'var(--color-emerald-600)' },
    { name: 'Neutral', value: sentimentNeutral, color: 'var(--color-stone-400)' },
    { name: 'Negative', value: sentimentAgainst, color: 'var(--color-rose-500)' },
  ].filter((item) => item.value > 0);

  // Prepare data for timeline Recharts PieChart - only show elapsed days visually
  // Include remaining with 50% opacity to show full circle progress
  const remainingDays = Math.max(0, GAME_MAX_DAYS - daysSinceGameStart);
  const timelinePieData = [
    { name: 'Elapsed', value: daysSinceGameStart, color: 'var(--color-emerald-600)', opacity: 1 },
    { name: 'Remaining', value: remainingDays, color: 'var(--color-emerald-600)', opacity: 0.2 },
  ];

  // Prepare data for sales Recharts PieChart - show sales progress towards target
  const remainingSales = Math.max(0, GAME_TARGET_SALES - totalSales);
  const salesPieData = [
    { name: 'Sales', value: totalSales, color: 'var(--color-emerald-600)', opacity: 1 },
    { name: 'Remaining', value: remainingSales, color: 'var(--color-emerald-600)', opacity: 0.2 },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-3">
        {/* Sentiment Circle */}
        <div className="flex items-center gap-0.5">
          <div className="grid grid-cols-2 gap-0.5 text-xs">
            <p className="text-right">Pro:</p>
            <p>{sentimentPro}</p>
            <p className="text-right">Neutral:</p>
            <p>{sentimentNeutral}</p>
            <p className="text-right">Against:</p>
            <p>{sentimentAgainst}</p>
          </div>
          <div className="flex h-[60px] w-[60px] items-center gap-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  animationDuration={300}
                  stroke="none"
                >
                  {sentimentPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timeline Circle */}
        <div className="flex items-center gap-0.5">
          <div className="grid grid-cols-2 gap-0.5 text-xs">
            <p className="text-right">Day:</p>
            <p>
              {daysSinceGameStart} / {GAME_MAX_DAYS}
            </p>
          </div>
          <div className="flex h-[60px] w-[60px] items-center gap-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timelinePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  animationDuration={300}
                  stroke="none"
                >
                  {timelinePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} opacity={entry.opacity} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales Circle */}
        <div className="flex items-center gap-0.5">
          <div className="grid grid-cols-2 gap-0.5 text-xs">
            <p className="text-right">Sales:</p>
            <p>
              {totalSales} / {GAME_TARGET_SALES}
            </p>
          </div>
          <div className="flex h-[60px] w-[60px] items-center gap-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  animationDuration={300}
                  stroke="none"
                >
                  {salesPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} opacity={entry.opacity} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
