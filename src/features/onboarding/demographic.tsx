import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { NativeSelectOption } from '@/components/ui/native-select';
import { Sortable, SortableContent, SortableItem } from '@/components/ui/sortable';
import { useDemographicStore } from './demographicStore';
import { useShallow } from 'zustand/shallow';
import { GameBackground, GameLayout } from '../game-engine/layout/gameLayout';
import { GameNativeSelect } from '@/components/ui/game-native-select';
import { GameInput } from '@/components/ui/game-input';
import { GameButton } from '@/components/ui/gameButton';

export function DemographicForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formData = useDemographicStore(
    useShallow((state) => ({
      birthYear: state.birthYear,
      gender: state.gender,
      education: state.education,
      newsSources: state.newsSources,
      electionIssues: state.electionIssues,
      howDidYouFindGame: state.howDidYouFindGame,
      alias: state.alias,
    })),
  );
  const errors = useDemographicStore((state) => state.errors);
  const updateField = useDemographicStore((state) => state.updateField);
  const updateNewsSources = useDemographicStore((state) => state.updateNewsSources);
  const updateElectionIssues = useDemographicStore((state) => state.updateElectionIssues);
  const validate = useDemographicStore((state) => state.validate);

  const handleSubmit = () => {
    if (validate()) {
      const age = new Date().getFullYear() - parseInt(formData.birthYear);
      if (age <= 18) {
        alert(t('demographic.tooYoung'));
        if (Math.random() > 0.5) window.location.href = 'https://www.youtube.com/watch?v=ipNFjfriPR8';
        else window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        return;
      }

      // Form is valid, proceed to game
      navigate({ to: '/game' });
    }
  };

  return (
    <GameBackground>
      <GameLayout>
        <div className="intro-screens-bg border-eastbay-900 mx-auto max-w-3xl space-y-6 rounded-2xl border-3 p-8 shadow-2xl">
          <div className="space-y-4">
            <h1 className="font-script text-5xl">{t('demographic.title')}</h1>
            <p className="font-script text-xl">{t('demographic.instruction')}</p>
          </div>

          <div className="space-y-6 text-base">
            {/* Birth Year */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <label htmlFor="birthYear" className="md:min-w-[200px]">
                {t('demographic.birthYear.label')}
              </label>
              <div className="relative flex-1">
                <GameInput
                  id="birthYear"
                  type="text"
                  placeholder="YYYY"
                  value={formData.birthYear}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                    updateField('birthYear', value);
                  }}
                  className={errors.birthYear ? 'border-destructive' : ''}
                  aria-invalid={errors.birthYear}
                />
                {errors.birthYear && (
                  <span className="text-destructive absolute top-1/2 right-2 -translate-y-1/2 text-lg font-bold">*</span>
                )}
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <label className="min-w-[200px] pt-2">{t('demographic.gender.label')}</label>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="gender-male" className="cursor-pointer">
                    {t('demographic.gender.options.male')}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="gender-female" className="cursor-pointer">
                    {t('demographic.gender.options.female')}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="gender-other"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="gender-other" className="cursor-pointer">
                    {t('demographic.gender.options.other')}
                  </label>
                </div>
                {errors.gender && <span className="text-destructive text-lg font-bold">*</span>}
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <label htmlFor="education" className="min-w-[200px]">
                {t('demographic.education.label')}
              </label>
              <div className="relative flex-1">
                <GameNativeSelect
                  id="education"
                  value={formData.education}
                  onChange={(e) => updateField('education', e.target.value)}
                  className={errors.education ? 'border-destructive' : ''}
                  aria-invalid={errors.education}
                >
                  <NativeSelectOption value="">{t('demographic.education.placeholder')}</NativeSelectOption>
                  <NativeSelectOption value="primary">{t('demographic.education.options.primary')}</NativeSelectOption>
                  <NativeSelectOption value="secondary">{t('demographic.education.options.secondary')}</NativeSelectOption>
                  <NativeSelectOption value="folkHighSchool">{t('demographic.education.options.folkHighSchool')}</NativeSelectOption>
                  <NativeSelectOption value="adultEducation">{t('demographic.education.options.adultEducation')}</NativeSelectOption>
                  <NativeSelectOption value="university">{t('demographic.education.options.university')}</NativeSelectOption>
                  <NativeSelectOption value="other">{t('demographic.education.options.other')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.education && (
                  <span className="text-destructive absolute top-1/2 right-2 -translate-y-1/2 text-lg font-bold">*</span>
                )}
              </div>
            </div>

            {/* News Sources */}
            <div className="space-y-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold">{t('demographic.newsSources.title')}</h3>
                <p className="mb-4 text-sm">{t('demographic.newsSources.description')}</p>
              </div>
              <Sortable value={formData.newsSources} onValueChange={updateNewsSources} orientation="vertical">
                <SortableContent className="space-y-2">
                  {formData.newsSources.map((source) => (
                    <SortableItem key={source} value={source} asHandle asChild>
                      <div className="border-thistle-400 bg-thistle-50 hover:bg-accent rounded-md border p-2 transition-colors">
                        {t(`demographic.newsSources.options.${source}`)}
                      </div>
                    </SortableItem>
                  ))}
                </SortableContent>
              </Sortable>
              {errors.newsSources && <span className="text-destructive text-lg font-bold">*</span>}
            </div>

            {/* Election Issues */}
            <div className="space-y-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold">{t('demographic.electionIssues.title')}</h3>
                <p className="mb-4 text-sm">{t('demographic.electionIssues.description')}</p>
              </div>
              <Sortable value={formData.electionIssues} onValueChange={updateElectionIssues} orientation="vertical">
                <SortableContent className="space-y-2">
                  {formData.electionIssues.map((issue) => (
                    <SortableItem key={issue} value={issue} asHandle asChild>
                      <div className="border-thistle-400 bg-thistle-50 hover:bg-accent rounded-md border p-2 transition-colors">
                        {t(`demographic.electionIssues.options.${issue}`)}
                      </div>
                    </SortableItem>
                  ))}
                </SortableContent>
              </Sortable>
              {errors.electionIssues && <span className="text-destructive text-lg font-bold">*</span>}
            </div>

            {/* How did you find this game */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <label htmlFor="howDidYouFindGame" className="min-w-[200px]">
                {t('demographic.howDidYouFindGame.label')}
              </label>
              <div className="relative flex-1">
                <GameNativeSelect
                  id="howDidYouFindGame"
                  value={formData.howDidYouFindGame}
                  onChange={(e) => updateField('howDidYouFindGame', e.target.value)}
                  className={errors.howDidYouFindGame ? 'border-destructive' : ''}
                  aria-invalid={errors.howDidYouFindGame}
                >
                  <NativeSelectOption value="">{t('demographic.howDidYouFindGame.placeholder')}</NativeSelectOption>
                  <NativeSelectOption value="internetLink">{t('demographic.howDidYouFindGame.options.internetLink')}</NativeSelectOption>
                  <NativeSelectOption value="socialMediaLink">
                    {t('demographic.howDidYouFindGame.options.socialMediaLink')}
                  </NativeSelectOption>
                  <NativeSelectOption value="friend">{t('demographic.howDidYouFindGame.options.friend')}</NativeSelectOption>
                  <NativeSelectOption value="poster">{t('demographic.howDidYouFindGame.options.poster')}</NativeSelectOption>
                  <NativeSelectOption value="gameSession">{t('demographic.howDidYouFindGame.options.gameSession')}</NativeSelectOption>
                  <NativeSelectOption value="other">{t('demographic.howDidYouFindGame.options.other')}</NativeSelectOption>
                </GameNativeSelect>
                {errors.howDidYouFindGame && (
                  <span className="text-destructive absolute top-1/2 right-2 -translate-y-1/2 text-lg font-bold">*</span>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-4 pt-6">
            <GameButton onClick={handleSubmit} size="lg">
              {t('demographic.button.submit')}
            </GameButton>
          </div>
        </div>
      </GameLayout>
    </GameBackground>
  );
}
