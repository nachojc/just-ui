type RadioGroupValues = {
  label: string;
  value: unknown;
};

export type RadioGroupProps = {
  name: string;
  values: RadioGroupValues[];
  asBlock?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  size?: "small" | "large";
};
