export function fdOrNull(input: FormDataEntryValue | null) {
  if (typeof input !== 'string') return null;
  if (input.trim() === '') return null;
  return input.trim();
}
