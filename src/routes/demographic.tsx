import { DemographicForm } from '@/features/onboarding/demographic';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/demographic')({
  component: DemographicForm,
});
