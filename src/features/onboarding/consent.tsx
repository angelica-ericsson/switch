import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Button } from '@/components/ui/button';
import { ScreenLayout } from '../game-engine/screens/screenLayout';
import { useConsentStore } from './consentStore';
import { useShallow } from 'zustand/shallow';

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
    // TODO: Handle no consent action
    alert('Consent not given');
  };

  return (
    <ScreenLayout>
      <div className="max-w-3xl mx-auto p-8 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('consent.welcome')}</h1>
          <p className="text-lg italic">{t('consent.instruction')}</p>
        </div>

        <div className="space-y-6 text-base">
          {/* Statement 1 */}
          <p>
            {t('consent.statement1.prefix')}{' '}
            <span className="inline-flex items-center gap-1 relative">
              <NativeSelect
                value={formData.studyAbout}
                onChange={(e) => updateField('studyAbout', e.target.value)}
                className={errors.studyAbout ? 'border-destructive' : ''}
                aria-invalid={errors.studyAbout}
              >
                <NativeSelectOption value="">-</NativeSelectOption>
                <NativeSelectOption value="games">{t('consent.statement1.options.games')}</NativeSelectOption>
                <NativeSelectOption value="kites">{t('consent.statement1.options.kites')}</NativeSelectOption>
                <NativeSelectOption value="lamas">{t('consent.statement1.options.lamas')}</NativeSelectOption>
              </NativeSelect>
              {errors.studyAbout && <span className="text-destructive text-lg font-bold">*</span>}
            </span>{' '}
            {t('consent.statement1.suffix')}
          </p>

          {/* Statement 2 */}
          <p>
            {t('consent.statement2.prefix')}{' '}
            <span className="inline-flex items-center gap-1 relative">
              <NativeSelect
                value={formData.informationStorage}
                onChange={(e) => updateField('informationStorage', e.target.value)}
                className={errors.informationStorage ? 'border-destructive' : ''}
                aria-invalid={errors.informationStorage}
              >
                <NativeSelectOption value="">-</NativeSelectOption>
                <NativeSelectOption value="storedDigitally">{t('consent.statement2.options.storedDigitally')}</NativeSelectOption>
                <NativeSelectOption value="runestone">{t('consent.statement2.options.runestone')}</NativeSelectOption>
                <NativeSelectOption value="beach">{t('consent.statement2.options.beach')}</NativeSelectOption>
              </NativeSelect>
              {errors.informationStorage && <span className="text-destructive text-lg font-bold">*</span>}
            </span>
            {t('consent.statement2.suffix')}
          </p>

          {/* Statement 3 */}
          <p>
            {t('consent.statement3.prefix')}{' '}
            <span className="inline-flex items-center gap-1 relative">
              <NativeSelect
                value={formData.personalDetails}
                onChange={(e) => updateField('personalDetails', e.target.value)}
                className={errors.personalDetails ? 'border-destructive' : ''}
                aria-invalid={errors.personalDetails}
              >
                <NativeSelectOption value="">-</NativeSelectOption>
                <NativeSelectOption value="not">{t('consent.statement3.options.not')}</NativeSelectOption>
                <NativeSelectOption value="absolutelyNot">{t('consent.statement3.options.absolutelyNot')}</NativeSelectOption>
                <NativeSelectOption value="underNoCircumstances">{t('consent.statement3.options.underNoCircumstances')}</NativeSelectOption>
              </NativeSelect>
              {errors.personalDetails && <span className="text-destructive text-lg font-bold">*</span>}
            </span>{' '}
            {t('consent.statement3.suffix')}
          </p>

          {/* Statement 4 */}
          <p>
            {t('consent.statement4.prefix')}{' '}
            <span className="inline-flex items-center gap-1 relative">
              <NativeSelect
                value={formData.participation}
                onChange={(e) => updateField('participation', e.target.value)}
                className={errors.participation ? 'border-destructive' : ''}
                aria-invalid={errors.participation}
              >
                <NativeSelectOption value="">-</NativeSelectOption>
                <NativeSelectOption value="voluntary">{t('consent.statement4.options.voluntary')}</NativeSelectOption>
                <NativeSelectOption value="optional">{t('consent.statement4.options.optional')}</NativeSelectOption>
                <NativeSelectOption value="upToMe">{t('consent.statement4.options.upToMe')}</NativeSelectOption>
              </NativeSelect>
              {errors.participation && <span className="text-destructive text-lg font-bold">*</span>}
            </span>
            {t('consent.statement4.suffix')}
          </p>

          {/* Statement 5 */}
          <p>
            {t('consent.statement5.prefix')}{' '}
            <span className="inline-flex items-center gap-1 relative">
              <NativeSelect
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
              </NativeSelect>
              {errors.contactResearcher && <span className="text-destructive text-lg font-bold">*</span>}
            </span>{' '}
            {t('consent.statement5.suffix')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-6">
          <Button onClick={handleNoConsent} variant="secondary">
            {t('consent.buttons.noConsent')}
          </Button>
          <Button onClick={handleConsent}>{t('consent.buttons.consent')}</Button>
        </div>

        {/* Contact Information */}
        <div className="pt-6 space-y-2 text-center">
          <p>
            <strong>{t('consent.contact.label')}</strong>
          </p>
          <p>
            {t('consent.contact.name')} <a href={`mailto:${t('consent.contact.email')}`}>{t('consent.contact.email')}</a>
          </p>
        </div>

        {/* Screenshot Instruction */}
        <p className="text-center text-sm text-muted-foreground pt-4">{t('consent.screenshot')}</p>
      </div>
    </ScreenLayout>
  );
}
