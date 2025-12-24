import { FactData, ImpactData, NgoData } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Impact', href: '#impact' },
  { label: 'Organizations', href: '#organizations' },
  { label: 'Action', href: '#action' },
  { label: 'About', href: '#about' },
];

export const FACTS: FactData[] = [
  { id: 1, text: 'Pakistan has millions of children engaged in labour instead of school', iconName: 'Users' },
  { id: 2, text: 'Most labour occurs in workshops, agriculture, brick kilns, and domestic work', iconName: 'Factory' },
  { id: 3, text: 'Many children work long hours in unsafe environments', iconName: 'AlertTriangle' },
  { id: 4, text: 'Child labour increases poverty cycles and limits national development', iconName: 'TrendingDown' },
];

export const IMPACTS: ImpactData[] = [
  { title: 'Poor Health', description: 'Physical and mental health deterioration due to hazardous working conditions.' },
  { title: 'Lack of Education', description: 'Denial of basic education leads to a lack of skills and future opportunities.' },
  { title: 'Cycle of Poverty', description: 'Working children often remain poor as adults, perpetuating the cycle.' },
  { title: 'Societal Damage', description: 'A society that allows child labour weakens its future workforce and economic growth.' },
];

export const NGOS: NgoData[] = [
  {
    name: 'Zindagi Trust',
    focus: 'Education reform and child welfare',
    work: 'Improving government schools, child protection, and awareness',
    website: 'https://zindagitrust.org',
  },
  {
    name: 'SPARC',
    focus: 'Child rights and policy advocacy',
    work: 'Research, legal reform, awareness campaigns',
    website: 'https://sparcpk.org',
  },
  {
    name: 'Child Rights Movement (CRM)',
    focus: 'Child protection and elimination of child labour',
    work: 'Advocacy, research, community engagement',
    website: 'https://crm.org.pk',
  },
  {
    name: 'Kashf Foundation',
    focus: 'Economic empowerment and education',
    work: 'Supporting families to prevent child labour through financial stability',
    website: 'https://kashf.org',
  },
  {
    name: 'Rozan Pakistan',
    focus: 'Social development and education',
    work: 'Behavioral change, child protection, community programs',
    website: 'https://rozanpakistan.org',
  },
];

export const ACTION_POINTS = [
  'Learn about child labour and its causes',
  'Share awareness content responsibly',
  'Support verified organizations',
  'Report child labour through legal and official channels',
  'Encourage education and ethical practices'
];