import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ConsentFormData {
  studyAbout: string;
  informationStorage: string;
  personalDetails: string;
  participation: string;
  contactResearcher: string;
}

// Use translation keys as values for validation
const VALID_ANSWERS = {
  studyAbout: ['games'],
  informationStorage: ['storedDigitally'],
  personalDetails: ['not', 'absolutelyNot', 'underNoCircumstances'],
  participation: ['voluntary', 'optional', 'upToMe'],
  contactResearcher: ['responsibleResearcher', 'personListedBelow'],
} as const;

interface ConsentStore extends ConsentFormData {
  errors: Partial<Record<keyof ConsentFormData, boolean>>;
  updateField: (field: keyof ConsentFormData, value: string) => void;
  validate: () => boolean;
  clearErrors: () => void;
  isValid: () => boolean;
  isComplete: () => boolean;
  reset: () => void;
}

const defaultState: ConsentFormData = {
  studyAbout: '',
  informationStorage: '',
  personalDetails: '',
  participation: '',
  contactResearcher: '',
};

export const useConsentStore = create<ConsentStore>()(
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

      validate: () => {
        const state = get();
        const newErrors: Partial<Record<keyof ConsentFormData, boolean>> = {};
        let isValid = true;

        Object.keys(VALID_ANSWERS).forEach((key) => {
          const field = key as keyof ConsentFormData;
          if (!VALID_ANSWERS[field].includes(state[field] as never)) {
            newErrors[field] = true;
            isValid = false;
          }
        });

        set({ errors: newErrors });
        return isValid;
      },

      clearErrors: () => {
        set({ errors: {} });
      },

      isValid: () => {
        const state = get();
        return Object.keys(VALID_ANSWERS).every((key) => {
          const field = key as keyof ConsentFormData;
          return VALID_ANSWERS[field].includes(state[field] as never);
        });
      },

      isComplete: () => {
        const state = get();
        return Object.keys(VALID_ANSWERS).every((key) => {
          const field = key as keyof ConsentFormData;
          return state[field] !== '';
        });
      },

      reset: () => {
        set({
          ...defaultState,
          errors: {},
        });
      },
    }),
    {
      name: 'consent-form',
      // Only persist the form data, not errors or methods
      partialize: (state) => ({
        studyAbout: state.studyAbout,
        informationStorage: state.informationStorage,
        personalDetails: state.personalDetails,
        participation: state.participation,
        contactResearcher: state.contactResearcher,
      }),
    },
  ),
);
