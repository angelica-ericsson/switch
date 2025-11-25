import { useGameState, getDateFromDaysSinceStart, type BuyEvent, type SellEvent, type InitialStock } from '../state';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { useDemographicStore } from '@/features/onboarding/demographicStore';
import i18n from '@/i18n';
import type { StockUpNodeType } from '../zod-schema';

interface StockUpScreenProps {
  node: StockUpNodeType;
}

export function StockUpScreen({ node }: StockUpScreenProps) {
  const moveForward = useGameState((state) => state.moveForward);
  const pushEvent = useGameState((state) => state.pushEvent);
  const events = useGameState((state) => state.events).filter(
    (event): event is BuyEvent | SellEvent | InitialStock => event.type === 'buy' || event.type === 'sell' || event.type === 'initial',
  );
  const daysSinceGameStart = useGameState((state) => state.daysSinceGameStart);
  const alias = useDemographicStore((state) => state.alias);
  const stockA = useGameState((state) => state.getStock('A'));
  const stockB = useGameState((state) => state.getStock('B'));

  // Calculate date from daysSinceGameStart (use node's value if present, otherwise use state's value)
  const daysForDisplay = node.data?.daysSinceGameStart ?? daysSinceGameStart;
  const displayDate = getDateFromDaysSinceStart(daysForDisplay);
  const formattedDate = displayDate.toLocaleDateString(i18n.resolvedLanguage, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Calculate date from daysSinceGameStart (use node's value if present, otherwise use state's value)
    const daysForEvent = node.data?.daysSinceGameStart ?? daysSinceGameStart;
    const eventDate = getDateFromDaysSinceStart(daysForEvent).toISOString();

    // Get values from form data
    const productA = Number(formData.get('productA')) || 0;
    const productB = Number(formData.get('productB')) || 0;

    // Push buy event
    pushEvent({
      type: 'buy',
      date: eventDate,
      productA,
      productB,
    });

    e.currentTarget.reset();

    // Move forward with 'default' direction
    moveForward('default');
  };

  const { t } = useTranslation();

  return (
    <GameLayout>
      <div className="order-form-bg max-w-3xl rotate-1 font-mono shadow-2xl">
        <div className="ml-2 border-l-2 border-red-300/50 p-4 pt-8 text-black/70 md:ml-8 md:p-8">
          <h1 className="text-3xl leading-8">
            {alias} {t('stockUp.headline')}
          </h1>
          <p className="mb-8 text-xs leading-8">{formattedDate}</p>

          <div className="mb-8">
            <h2 className="text-xl leading-8">{t('stockUp.inventoryHeadline')}</h2>
            {events.length === 0 ? (
              <p className="leading-8 text-gray-500">{t('stockUp.inventoryEmpty')}</p>
            ) : (
              <table className="w-full leading-8">
                <thead>
                  <tr className="md:text-md text-sm leading-8">
                    <th></th>
                    <th>{t('productA')}:</th>
                    <th>{t('productB')}:</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={index}>
                      <td className="text-nowrap">
                        <span className="mr-2">
                          {new Date(event.date).toLocaleDateString(i18n.resolvedLanguage, {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </span>
                        <span
                          className={`${event.type === 'buy' ? 'text-red-700' : event.type === 'sell' ? 'text-green-700' : 'text-black'}`}
                        >
                          {event.type === 'buy'
                            ? t('stockUp.eventTypeBuy')
                            : event.type === 'sell'
                              ? t('stockUp.eventTypeSell')
                              : t('stockUp.eventTypeInitial')}
                          :
                        </span>
                      </td>
                      <td className="text-center">{event.productA}</td>
                      <td className="text-center">{event.productB}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-black">
                    <td>{t('stockUp.inStock')}</td>
                    <td className="text-center">{stockA}</td>
                    <td className="text-center">{stockB}</td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>

          <p className="text-xl leading-8">{t('stockUp.buyHeadline')}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-8 grid grid-cols-2">
              <label htmlFor="productA" className="text-sm leading-8">
                {t('productA')}:
              </label>
              <input
                type="number"
                id="productA"
                name="productA"
                min="0"
                max="100"
                step="1"
                required
                className="border-b-3 border-dotted border-black/50"
              />

              <label htmlFor="productB" className="text-sm leading-8">
                {t('productB')}:
              </label>
              <input
                type="number"
                id="productB"
                name="productB"
                min="0"
                max="100"
                step="1"
                required
                className="border-b-3 border-dotted border-black/50"
              />
            </div>
            <GameButton type="submit" size="lg" className="w-full">
              {t('stockUp.button')}
            </GameButton>
          </form>
        </div>
      </div>
    </GameLayout>
  );
}
