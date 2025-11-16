import { Editor } from '@/features/editor/editor';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/editor')({
  component: Editor,
});
