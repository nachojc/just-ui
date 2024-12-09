export const hasText = (value?: string): boolean => {
  return typeof value === "string" && value?.trim().length > 0;
};
