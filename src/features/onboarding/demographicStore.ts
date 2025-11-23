import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DemographicFormData {
  birthYear: string;
  gender: string;
  education: string;
  newsSources: string[];
  electionIssues: string[];
  howDidYouFindGame: string;
  alias: string;
  sessionId: string;
}

interface DemographicStore extends DemographicFormData {
  errors: Partial<Record<keyof DemographicFormData, boolean>>;
  updateField: (field: keyof DemographicFormData, value: string) => void;
  updateNewsSources: (sources: string[]) => void;
  updateElectionIssues: (issues: string[]) => void;
  validate: () => boolean;
  clearErrors: () => void;
  reset: () => void;
}

// Default news sources in initial order
const DEFAULT_NEWS_SOURCES = ['blogs', 'magazines', 'newspapers', 'publicService', 'socialMedia', 'websites', 'youtube', 'other'];

// Default election issues in initial order
const DEFAULT_ELECTION_ISSUES = [
  'criminality',
  'defense',
  'economy',
  'education',
  'employment',
  'environment',
  'equality',
  'healthcare',
  'immigration',
  'preparedness',
];

const defaultState: DemographicFormData = {
  birthYear: '',
  gender: '',
  education: '',
  newsSources: [...DEFAULT_NEWS_SOURCES],
  electionIssues: [...DEFAULT_ELECTION_ISSUES],
  howDidYouFindGame: '',
  alias: '',
  sessionId: nanoid(),
};

export const useDemographicStore = create<DemographicStore>()(
  persist(
    (set, get) => ({
      ...defaultState,
      errors: {},

      updateField: (field, value) => {
        set((state) => ({
          ...state,
          [field]: value,
          // Clear error for this field when user makes a selection
          errors: {
            ...state.errors,
            [field]: false,
          },
        }));
      },

      updateNewsSources: (sources) => {
        set((state) => ({
          ...state,
          newsSources: sources,
          // Clear error for newsSources when user makes a change
          errors: {
            ...state.errors,
            newsSources: false,
          },
        }));
      },

      updateElectionIssues: (issues) => {
        set((state) => ({
          ...state,
          electionIssues: issues,
          // Clear error for electionIssues when user makes a change
          errors: {
            ...state.errors,
            electionIssues: false,
          },
        }));
      },

      validate: () => {
        const state = get();
        const newErrors: Partial<Record<keyof DemographicFormData, boolean>> = {};

        // Validate birth year (should be 4 digits and reasonable range)
        if (!state.birthYear || state.birthYear.length !== 4) {
          newErrors.birthYear = true;
        } else {
          const year = parseInt(state.birthYear, 10);
          const currentYear = new Date().getFullYear();
          if (isNaN(year) || year < 1900 || year > currentYear) {
            newErrors.birthYear = true;
          }
        }

        // Validate gender (should not be empty)
        if (!state.gender) {
          newErrors.gender = true;
        }

        // Validate education (should not be empty)
        if (!state.education) {
          newErrors.education = true;
        }

        // Validate howDidYouFindGame (should not be empty)
        if (!state.howDidYouFindGame) {
          newErrors.howDidYouFindGame = true;
        }

        set({ errors: newErrors });
        return Object.keys(newErrors).length === 0;
      },

      clearErrors: () => {
        set({ errors: {} });
      },

      reset: () => {
        set({
          ...defaultState,
          errors: {},
        });
      },
    }),
    {
      name: 'demographic-form',
      // Only persist the form data, not errors or methods
      partialize: (state) => ({
        birthYear: state.birthYear,
        gender: state.gender,
        education: state.education,
        newsSources: state.newsSources,
        electionIssues: state.electionIssues,
        howDidYouFindGame: state.howDidYouFindGame,
        alias: state.alias,
        sessionId: state.sessionId,
      }),
    },
  ),
);
