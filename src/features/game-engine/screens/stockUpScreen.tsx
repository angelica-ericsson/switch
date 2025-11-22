import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGameState } from '../state';
import { Slider } from '@/components/ui/slider';
import { Trans, useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';

export function StockUpScreen() {
  const oldStockA = useGameState((state) => state.stockA);
  const oldStockB = useGameState((state) => state.stockB);
  const demandA = useGameState((state) => state.demandA);
  const demandB = useGameState((state) => state.demandB);
  const priceA = useGameState((state) => state.priceA);
  const priceB = useGameState((state) => state.priceB);
  const soldProductA = Math.max(0, oldStockA - demandA);
  const soldProductB = Math.max(0, oldStockB - demandB);

  const oldPoints = useGameState((state) => state.points);

  const moveForward = useGameState((state) => state.moveForward);
  const setGameState = useGameState((state) => state.setGameState);

  const [sliderValue, setSlider] = useState<number>(50);

  const handleSubmit = () => {
    // Move forward with 'default' direction
    moveForward('default');

    // Update game state with stock values
    setGameState({
      stockA: 100 - sliderValue,
      stockB: sliderValue,
      points: oldPoints + soldProductA * priceA + soldProductB * priceB,
    });
  };

  const { t } = useTranslation();

  return (
    <GameLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        <h1 className="text-3xl font-bold"> {t('stockUp.headline')}</h1>
        {(soldProductA > 0 || soldProductB > 0) && (
          <p className="text-lg text-muted-foreground">
            <Trans
              i18nKey="stockUp.youSold"
              defaults="Great! You sold <num>{{soldA}}</num> of Product A and <num>{{soldB}}</num> of Product B"
              values={{ soldA: soldProductA, soldB: soldProductB }}
              components={{
                num: <span className="font-mono bg-gray-600 p-2 rounded-full" />,
              }}
            />
          </p>
        )}
        <p className="text-lg text-muted-foreground">{t('stockUp.description')}</p>
        <div className="flex gap-5">
          <div>
            {t('productA')} {100 - sliderValue}
          </div>
          <Slider defaultValue={[sliderValue]} max={100} onValueChange={(values) => setSlider(values[0])} />
          <div>
            {t('productB')} {sliderValue}
          </div>
        </div>
        <Button type="submit" size="lg" className="w-full" onClick={handleSubmit}>
          {t('stockUp.button')}
        </Button>
      </div>
    </GameLayout>
  );
}
