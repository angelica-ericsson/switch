import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';
import { Slider } from '@/components/ui/slider';

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

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        <h1 className="text-3xl font-bold">Stock Up</h1>
        <p className="text-lg text-muted-foreground">
          Great! You sold{' '}
          <span className="font-mono bg-gray-600 p-2 rounded-full">
            {soldProductA}
          </span>{' '}
          of Product A and{' '}
          <span className="font-mono bg-gray-600 p-2 rounded-full">
            {soldProductB}
          </span>{' '}
          of Product B
        </p>
        <p className="text-lg text-muted-foreground">
          Enter the stock quantities for Product A and Product B
        </p>
        <div className="flex gap-5">
          <div>Product A: {100 - sliderValue}</div>
          <Slider
            defaultValue={[sliderValue]}
            max={100}
            onValueChange={(values) => setSlider(values[0])}
          />
          <div>Product B: {sliderValue}</div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
        >
          Confirm Stock-Up
        </Button>
      </div>
    </ScreenLayout>
  );
}
