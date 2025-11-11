import { useGameState } from '../state';

export function ScreenLayout(props: React.PropsWithChildren) {
  const stockA = useGameState((state) => state.stockA);
  const stockB = useGameState((state) => state.stockB);
  const demandA = useGameState((state) => state.demandA);
  const demandB = useGameState((state) => state.demandB);
  const priceA = useGameState((state) => state.priceA);
  const priceB = useGameState((state) => state.priceB);
  const sentimentPro = useGameState((state) => state.sentimentPro);
  const sentimentNeutral = useGameState((state) => state.sentimentNeutral);
  const sentimentAgainst = useGameState((state) => state.sentimentAgainst);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Status Bar */}
      <div className="w-full border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {/* Stock Section */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Stock:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">A</span>
                  <span className="font-mono font-medium">{stockA}</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">B</span>
                  <span className="font-mono font-medium">{stockB}</span>
                </div>
              </div>
            </div>

            {/* Demand Section */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Demand:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">A</span>
                  <span className="font-mono font-medium">{demandA}</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">B</span>
                  <span className="font-mono font-medium">{demandB}</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            {(priceA > 0 || priceB > 0) && (
              <div className="flex items-center gap-4">
                <span className="font-semibold text-muted-foreground">
                  Price:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">A</span>
                    <span className="font-mono font-medium">{priceA}</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">B</span>
                    <span className="font-mono font-medium">{priceB}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sentiment Section */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">
                Sentiment:
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-600 dark:text-green-400">
                    Pro
                  </span>
                  <span className="font-mono font-medium">{sentimentPro}</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground">Neutral</span>
                  <span className="font-mono font-medium">
                    {sentimentNeutral}
                  </span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <span className="text-red-600 dark:text-red-400">
                    Against
                  </span>
                  <span className="font-mono font-medium">
                    {sentimentAgainst}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
}
