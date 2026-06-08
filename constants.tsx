
import React from 'react';
import { 
  BarChart3, 
  MessageSquareText, 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  Search,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { Feature, Step, Testimonial, UseCase } from './types';

// Visual Identity derived from Logo
export const COLORS = {
  primary: '#8B5E3C', // The Brown Bag
  secondary: '#D97706', // The Orange/Amber Highlights
  accent: '#B45309', // Deep Amber
  background: '#FDF8F3', // Light Cream Paper tone
  textDark: '#1F2937', // Text Primary
  textLight: '#4B5563', // Text Secondary
  white: '#FFFFFF',
};

export const LOGO_URL = 'https://r2.erweima.ai/ai_image/99e9096778f3442ca65839089066cc99.png';
export const ICON_URL = 'https://r2.erweima.ai/ai_image/3b0a7082354a4f7889370768c3479a33.png';

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Smart Collection',
    description: 'Effortlessly gather reviews from multiple channels into one centralized bag.',
    icon: <MessageSquareText className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
  {
    id: 'f2',
    title: 'Visual Analytics',
    description: 'Transform raw qualitative data into beautiful, actionable charts and graphs.',
    icon: <BarChart3 className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
  {
    id: 'f3',
    title: 'Instant Insights',
    description: 'AI-driven sentiment analysis picks up trends before they become problems.',
    icon: <Zap className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
  {
    id: 'f4',
    title: 'Precision Targeting',
    description: 'Know exactly which areas of your business need immediate attention.',
    icon: <Target className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
  {
    id: 'f5',
    title: 'Growth Tracking',
    description: 'Watch your progress unfold over time with historical benchmarking.',
    icon: <TrendingUp className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
  {
    id: 'f6',
    title: 'Trust Verified',
    description: 'Establish credibility with authenticated review badges for your brand.',
    icon: <ShieldCheck className="w-6 h-6" style={{ color: COLORS.secondary }} />,
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Collect',
    description: 'Gather feedback through custom forms, native-language audio, and video reviews.',
    icon: <Search className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Analyze',
    description: 'Our engine analyzes reviews to extract suggestions, sentiments, and actionable metrics.',
    icon: <FileSpreadsheet className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Grow',
    description: 'Implement changes based on data and bridge the gap to progress.',
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Product Lead @ TechFlow',
    content: 'Review Bag completely changed how we handle customer feedback. We went from guessing to growing in weeks.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: 't2',
    name: 'Mark Thompson',
    role: 'CEO @ Brightly',
    content: 'The visual reports are incredible. Being able to see the "bag" of data sorted so clearly is a game changer.',
    avatar: 'https://picsum.photos/seed/mark/100/100',
  },
];

export const USE_CASES: UseCase[] = [
  {
    id: 'u1',
    title: 'E-commerce Brands',
    scenario: 'Facing high return rates but low clarity on why.',
    benefit: 'Identify specific product defects through consolidated customer sentiment.',
    image: 'https://picsum.photos/seed/shop/600/400',
  },
  {
    id: 'u2',
    title: 'SaaS Platforms',
    scenario: 'Churn rate is climbing without clear feature feedback.',
    benefit: 'Pinpoint UI friction points by aggregating user reviews and support tickets.',
    image: 'https://picsum.photos/seed/saas/600/400',
  },
];
