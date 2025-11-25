import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { NativeSelectOption } from '@/components/ui/native-select';
import { useConsentStore } from './consentStore';
import { useShallow } from 'zustand/shallow';
import { GameBackground, GameLayout } from '../game-engine/layout/gameLayout';
import { GameButton } from '@/components/ui/gameButton';
import { GameNativeSelect } from '@/components/ui/game-native-select';
import { ChevronRight, X } from 'lucide-react';

export function ConsentForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const formData = useConsentStore(
    useShallow((state) => ({
      studyAbout: state.studyAbout,
      informationStorage: state.informationStorage,
      personalDetails: state.personalDetails,
      participation: state.participation,
      contactResearcher: state.contactResearcher,
    })),
  );
  const errors = useConsentStore((state) => state.errors);
  const updateField = useConsentStore((state) => state.updateField);
  const validate = useConsentStore((state) => state.validate);

  const handleConsent = () => {
    if (validate()) {
      // Form is valid, proceed with consent and navigate to demographic form
      navigate({ to: '/demographic' });
    }
  };

  const handleNoConsent = () => {
    if (confirm(t('consent.noConsentMessage1'))) {
      alert(t('consent.noConsentMessage2'));
      if (Math.random() > 0.5) window.location.href = 'https://www.youtube.com/watch?v=ipNFjfriPR8';
      else window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  };

  return (
    <GameBackground>
      <GameLayout>
        <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
          <div className="space-y-4">
            <h1 className="font-script text-5xl">{t('consent.welcome')}</h1>
            <p className="font-script text-xl">{t('consent.instruction')}</p>
          </div>

          <div className="space-y-6 text-base">
            {/* Statement 1 */}
            <p>
              {t('consent.statement1.prefix')}{' '}
              <span className="relative inline-flex items-center gap-1">
                <GameNativeSelect
                  value={formData.studyAbout}
                  onChange={(e) => updateField('studyAbout', e.target.value)}
                  className={errors.studyAbout ? 'border-destructive' : ''}
                  aria-invalid={errors.studyAbout}
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  <NativeSelectOption value="games">{t('consent.statement1.options.games')}</NativeSelectOption>
                  <NativeSelectOption value="kites">{t('consent.statement1.options.kites')}</NativeSelectOption>
                  <NativeSelectOption value="lamas">{t('consent.statement1.options.lamas')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.studyAbout && <span className="text-destructive text-lg font-bold">*</span>}
              </span>{' '}
              {t('consent.statement1.suffix')}
            </p>

            {/* Statement 2 */}
            <p>
              {t('consent.statement2.prefix')}{' '}
              <span className="relative inline-flex items-center gap-1">
                <GameNativeSelect
                  value={formData.informationStorage}
                  onChange={(e) => updateField('informationStorage', e.target.value)}
                  className={errors.informationStorage ? 'border-destructive' : ''}
                  aria-invalid={errors.informationStorage}
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  <NativeSelectOption value="storedDigitally">{t('consent.statement2.options.storedDigitally')}</NativeSelectOption>
                  <NativeSelectOption value="runestone">{t('consent.statement2.options.runestone')}</NativeSelectOption>
                  <NativeSelectOption value="beach">{t('consent.statement2.options.beach')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.informationStorage && <span className="text-destructive text-lg font-bold">*</span>}
              </span>
              {t('consent.statement2.suffix')}
            </p>

            {/* Statement 3 */}
            <p>
              {t('consent.statement3.prefix')}{' '}
              <span className="relative inline-flex items-center gap-1">
                <GameNativeSelect
                  value={formData.personalDetails}
                  onChange={(e) => updateField('personalDetails', e.target.value)}
                  className={errors.personalDetails ? 'border-destructive' : ''}
                  aria-invalid={errors.personalDetails}
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  <NativeSelectOption value="not">{t('consent.statement3.options.not')}</NativeSelectOption>
                  <NativeSelectOption value="absolutelyNot">{t('consent.statement3.options.absolutelyNot')}</NativeSelectOption>
                  <NativeSelectOption value="underNoCircumstances">
                    {t('consent.statement3.options.underNoCircumstances')}
                  </NativeSelectOption>
                </GameNativeSelect>
                {errors.personalDetails && <span className="text-destructive text-lg font-bold">*</span>}
              </span>{' '}
              {t('consent.statement3.suffix')}
            </p>

            {/* Statement 4 */}
            <p>
              {t('consent.statement4.prefix')}{' '}
              <span className="relative inline-flex items-center gap-1">
                <GameNativeSelect
                  value={formData.participation}
                  onChange={(e) => updateField('participation', e.target.value)}
                  className={errors.participation ? 'border-destructive' : ''}
                  aria-invalid={errors.participation}
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  <NativeSelectOption value="voluntary">{t('consent.statement4.options.voluntary')}</NativeSelectOption>
                  <NativeSelectOption value="optional">{t('consent.statement4.options.optional')}</NativeSelectOption>
                  <NativeSelectOption value="upToMe">{t('consent.statement4.options.upToMe')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.participation && <span className="text-destructive text-lg font-bold">*</span>}
              </span>
              {t('consent.statement4.suffix')}
            </p>

            {/* Statement 5 */}
            <p>
              {t('consent.statement5.prefix')}{' '}
              <span className="relative inline-flex items-center gap-1">
                <GameNativeSelect
                  value={formData.contactResearcher}
                  onChange={(e) => updateField('contactResearcher', e.target.value)}
                  className={errors.contactResearcher ? 'border-destructive' : ''}
                  aria-invalid={errors.contactResearcher}
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  <NativeSelectOption value="responsibleResearcher">
                    {t('consent.statement5.options.responsibleResearcher')}
                  </NativeSelectOption>
                  <NativeSelectOption value="personListedBelow">{t('consent.statement5.options.personListedBelow')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.contactResearcher && <span className="text-destructive text-lg font-bold">*</span>}
              </span>{' '}
              {t('consent.statement5.suffix')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <GameButton onClick={handleNoConsent} size="lg">
              <X className="size-6" />
              {t('consent.buttons.noConsent')}
            </GameButton>
            <GameButton onClick={handleConsent} size="lg">
              {t('consent.buttons.consent')} <ChevronRight className="size-6" />
            </GameButton>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 pt-6 text-center">
            <p>
              <strong>{t('consent.contact.label')}</strong>
            </p>
            <p>
              {t('consent.contact.name')} <a href={`mailto:${t('consent.contact.email')}`}>{t('consent.contact.email')}</a>
            </p>
          </div>

          {/* Screenshot Instruction */}
          <p className="pt-4 text-center text-sm">{t('consent.screenshot')}</p>
        </div>
      </GameLayout>
    </GameBackground>
  );
}
