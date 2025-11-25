import { useGameState } from '../state';
// import type { SurveyNodeType } from '../zod-schema';
import { useTranslation } from 'react-i18next';
import { GameLayout } from '../layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

// interface SurveyScreenProps {
//   node: SurveyNodeType;
// }

export function SurveyScreen() {
  const moveForward = useGameState((state) => state.moveForward);
  const setSurveyResponses = useGameState((state) => state.setSurveyResponses);
  const [response1, setResponse1] = useState('');
  const [response2, setResponse2] = useState('');

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Persist the survey responses
    setSurveyResponses(response1, response2);

    // Move forward with 'default' direction
    moveForward('default');
  };

  return (
    <GameLayout>
      <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="response1" className="text-lg">
              {t('survey.question1')}
            </Label>
            <Textarea
              id="response1"
              name="response1"
              value={response1}
              onChange={(e) => setResponse1(e.target.value)}
              className="ring-thistle-800 bg-thistle-50 inset-shadow-gray-250 min-h-20 ring-2 inset-shadow-sm"
              placeholder=""
              required
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="response2" className="text-lg">
              {t('survey.question2')}
            </Label>
            <Textarea
              id="response2"
              name="response2"
              value={response2}
              onChange={(e) => setResponse2(e.target.value)}
              className="ring-thistle-800 bg-thistle-50 inset-shadow-gray-250 min-h-20 ring-2 inset-shadow-sm"
              required
            />
          </div>

          <GameButton type="submit" size="lg" className="w-full">
            {t('continue')}
          </GameButton>
        </form>
      </div>
    </GameLayout>
  );
}
