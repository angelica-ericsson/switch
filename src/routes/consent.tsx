import { ConsentForm } from '@/features/onboarding/consent';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/consent')({
  component: ConsentForm,
});
