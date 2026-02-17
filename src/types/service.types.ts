import type { ReactNode } from 'react';

export interface Feature {
  label: string;
  icon: ReactNode;
}

export interface Service {
  title: string;
  description: string;
  features: Feature[];
  Icon: ReactNode;
}
