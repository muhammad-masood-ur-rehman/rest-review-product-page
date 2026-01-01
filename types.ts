
// Fixed: Added missing React import to resolve React.ReactNode namespace errors
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface UseCase {
  id: string;
  title: string;
  scenario: string;
  benefit: string;
  image: string;
}
