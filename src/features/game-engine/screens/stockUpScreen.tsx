import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, FieldLabel } from '@/components/ui/field';
import { ScreenLayout } from './screenLayout';
import { useGameState } from '../state';

export function StockUpScreen() {
  const moveForward = useGameState((state) => state.moveForward);
  const setGameState = useGameState((state) => state.setGameState);
  const [stockA, setStockA] = useState<string>('');
  const [stockB, setStockB] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const stockAValue = parseInt(stockA, 10);
    const stockBValue = parseInt(stockB, 10);

    if (isNaN(stockAValue) || isNaN(stockBValue)) {
      setError('Please enter valid integer values for both products');
      return;
    }

    if (stockAValue < 0 || stockBValue < 0) {
      setError('Stock values cannot be negative');
      return;
    }

    // Update game state with stock values
    setGameState({
      stockA: stockAValue,
      stockB: stockBValue,
    });

    // Move forward with 'default' direction
    moveForward('default');
  };

  return (
    <ScreenLayout>
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        <h1 className="text-3xl font-bold">Stock Up</h1>
        <p className="text-lg text-muted-foreground">
          Enter the stock quantities for Product A and Product B
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Field>
            <FieldLabel>Product A Stock</FieldLabel>
            <Input
              type="number"
              value={stockA}
              onChange={(e) => setStockA(e.target.value)}
              placeholder="Enter stock amount"
              min="0"
              required
            />
          </Field>
          <Field>
            <FieldLabel>Product B Stock</FieldLabel>
            <Input
              type="number"
              value={stockB}
              onChange={(e) => setStockB(e.target.value)}
              placeholder="Enter stock amount"
              min="0"
              required
            />
          </Field>
          {error && (
            <p className="text-sm text-destructive font-medium">{error}</p>
          )}
          <Button type="submit" size="lg" className="w-full">
            Confirm Stock-Up
          </Button>
        </form>
      </div>
    </ScreenLayout>
  );
}
