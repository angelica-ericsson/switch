import { NumberTicker } from '@/components/ui/number-ticker';
import { useGameState } from '../state';

export function ScreenLayout(props: React.PropsWithChildren) {
  // const stockA = useGameState((state) => state.stockA);
  // const stockB = useGameState((state) => state.stockB);

  // const demandA = useGameState((state) => state.demandA);
  // const demandB = useGameState((state) => state.demandB);

  // const priceA = useGameState((state) => state.priceA);
  // const priceB = useGameState((state) => state.priceB);

  const points = useGameState((state) => state.points);
  const state = useGameState((state) => state);

  const sentimentPro = useGameState((state) => state.sentimentPro);
  const sentimentNeutral = useGameState((state) => state.sentimentNeutral);
  const sentimentAgainst = useGameState((state) => state.sentimentAgainst);
  const totalSentiment = sentimentNeutral + sentimentPro + sentimentAgainst;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Status Bar */}
      <div className="w-full border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {/* Stock Section */}
            {/* <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Stock:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">A</span>
                  <span className="font-mono font-medium">
                    <NumberTicker value={stockA} />
                  </span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">B</span>
                  <span className="font-mono font-medium">
                    <NumberTicker value={stockB} />
                  </span>
                </div>
              </div>
            </div> */}

            {/* Demand Section */}
            {/* <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Demand:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">A</span>
                  <span className="font-mono font-medium">
                    <NumberTicker value={demandA} />
                  </span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">B</span>
                  <span className="font-mono font-medium">
                    <NumberTicker value={demandB} />
                  </span>
                </div>
              </div>
            </div> */}

            {/* Price Section */}
            {/* {(priceA > 0 || priceB > 0) && (
              <div className="flex items-center gap-4">
                <span className="font-semibold text-muted-foreground">
                  Price:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">A</span>
                    <span className="font-mono font-medium">
                      <NumberTicker value={priceA} />
                    </span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">B</span>
                    <span className="font-mono font-medium">
                      <NumberTicker value={priceB} />
                    </span>
                  </div>
                </div>
              </div>
            )} */}

            {/* Points Section */}
            <div className="flex items-center gap-4">
              <div className="font-semibold text-muted-foreground">
                Points: <NumberTicker value={points} />
              </div>
            </div>

            {/* Sentiment Section */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Sentiment:
              </span>
              <div className="flex h-4 rounded w-40 overflow-hidden">
                <div
                  className="bg-green-600 transition-all"
                  style={{ width: `${(sentimentPro / totalSentiment) * 100}%` }}
                ></div>
                <div
                  className="bg-gray-600 transition-all"
                  style={{
                    width: `${(sentimentNeutral / totalSentiment) * 100}%`,
                  }}
                ></div>
                <div
                  className="bg-red-600 transition-all"
                  style={{
                    width: `${(sentimentAgainst / totalSentiment) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">{props.children}</div>
      </div>

      {/* Main Content */}
      <div className="flex gap-4">
        {Object.entries(state).map((entry) => {
          if (typeof entry[1] === 'function' || typeof entry[1] === 'object')
            return;
          return (
            <div>
              {entry[0]}: {JSON.stringify(entry[1])}
            </div>
          );
        })}
      </div>
    </div>
  );
}
