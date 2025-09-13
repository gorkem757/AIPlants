import { Ionicons } from '@expo/vector-icons';

// TODO: Extract to interfaces file
export type IPaywallFeature = {
  icon: React.ComponentProps<typeof Ionicons>['name']; // TODO: use svg or imageUrl
  title: string;
  description: string;
};

export const FEATURES: IPaywallFeature[] = [
  {
    title: 'Unlimited',
    description: 'Plant identify',
    icon: 'leaf-outline',
  },
  {
    title: 'Faster',
    description: 'Process',
    icon: 'flash-outline',
  },
  {
    title: 'Accurate',
    description: 'Expert-level detection',
    icon: 'checkmark-circle-outline',
  },
];

// TODO: Extract to interfaces file
export type IPaywallPackage = {
  id: number;
  title: string;
  description: string;
  campaignText?: string;
};

export const PAYWALL_PACKAGES: IPaywallPackage[] = [
  {
    id: 12389,
    title: '1 Month',
    description: '$2.99/month, auto renewable',
  },
  {
    id: 12412,
    title: '1 Year',
    description: 'First 3 days free, then $529,99/year',
    campaignText: 'Save 50%',
  },
];
