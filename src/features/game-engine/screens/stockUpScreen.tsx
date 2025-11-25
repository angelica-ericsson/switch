import { useGameState, getDateFromDaysSinceStart } from '../state';
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
  const events = useGameState((state) => state.events);
  const daysSinceGameStart = useGameState((state) => state.daysSinceGameStart);
  const alias = useDemographicStore((state) => state.alias);
  const stockA = useGameState((state) => state.getStock('A'));
  const stockB = useGameState((state) => state.getStock('A'));

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
      date: eventDate,
      type: 'buy',
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
      <div className="order-form-bg mx-auto max-w-2xl rotate-1 font-mono shadow-2xl">
        <div className="ml-8 border-l-2 border-red-300/50 p-8 text-black/70">
          <h1 className="text-3xl leading-8">
            {alias} {t('stockUp.headline')}
          </h1>
          <p className="mb-8 text-xs leading-8">{formattedDate}</p>

          <div className="mb-8">
            <h2 className="text-xl leading-8">{t('stockUp.inventoryHeadline')}</h2>
            {events.length === 0 ? (
              <p className="leading-8 text-gray-500">{t('stockUp.inventoryEmpty')}</p>
            ) : (
              <div>
                <div className="grid grid-cols-3 leading-8">
                  <p></p>
                  <p>{t('productA')}:</p>
                  <p>{t('productB')}:</p>
                </div>
                {events.map((event, index) => (
                  <div key={index} className="grid grid-cols-3 leading-8">
                    <p>
                      <span className="mr-3">
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
                    </p>
                    <p>{event.productA}</p>
                    <p>{event.productB}</p>
                  </div>
                ))}
                <div className="grid grid-cols-3 border-t border-black leading-8">
                  <p>{t('stockUp.inStock')}</p>
                  <p>{stockA}</p>
                  <p>{stockB}</p>
                </div>
              </div>
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
