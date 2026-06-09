export const SITE = {
  name: 'Keystone Tax Advisory',
  phone: '(616) 482-7310',
  phoneHref: 'tel:+16164827310',
  email: 'marcus@keystonetax.com',
  address: '245 Monroe Center St NW, Suite 200',
  city: 'Grand Rapids',
  state: 'MI',
  zip: '49503',
  mapsUrl: 'https://maps.google.com/?q=245+Monroe+Center+St+NW+Grand+Rapids+MI+49503',
  url: 'https://keystonetax.com',
} as const

export const CTA = {
  label: 'Book Your Free 15-Min Call — Flat Rate',
  shortLabel: 'Book Free Call',
  micro: 'You decide after the call. No obligation. No hourly surprises.',
  calculator: 'See Your Full Picture — Book Free Call',
  healthCheck: 'Book Free Call — Get Your Plan',
} as const

export const EA_EXPLANATION =
  'Enrolled Agent (EA) = federally licensed tax specialist, tested by the IRS, authorized to represent you in audits.'

export const CLIENT_PROOF =
  'Trusted by 40+ Grand Rapids families and freelancers — including Sarah M., owner of a local design studio.'

export const URGENCY = {
  deadline: 'Federal filing deadline: April 15 — consultation slots fill fastest in March.',
  audit: 'IRS audit response windows are strict — waiting weeks can forfeit appeal rights.',
} as const

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const TRUST_BADGES = [
  { icon: 'Shield', label: 'IRS Enrolled Agent', sublabel: 'Licensed & Certified' },
  { icon: 'Award', label: '15+ Years Experience', sublabel: 'Grand Rapids Expert' },
  { icon: 'Star', label: '500+ Happy Clients', sublabel: '5-Star Reviews' },
]

export const SERVICES = [
  {
    audience: 'For Families',
    title: 'Personal Tax Preparation',
    description:
      'W-2s, dependents, investments, and education credits — every deduction families in Grand Rapids commonly miss.',
    icon: 'FileText',
  },
  {
    audience: 'For Freelancers',
    title: 'Freelancer & 1099 Returns',
    description:
      'Schedule C, home office, mileage, and quarterly estimates — built for self-employed income.',
    icon: 'Laptop',
  },
  {
    audience: 'For Small Businesses',
    title: 'Small Business Accounting',
    description:
      'Bookkeeping, payroll, and entity returns for LLCs, S-Corps, and partnerships.',
    icon: 'Building2',
  },
  {
    audience: 'All Clients',
    title: 'IRS Resolution',
    description:
      'Back taxes, audits, liens, and notices — we negotiate directly with the IRS on your behalf.',
    icon: 'Scale',
  },
]

export const PRICING_TIERS = [
  {
    name: 'Personal',
    audience: 'Families',
    price: '$197',
    description: 'Individual & family returns',
    features: [
      'Federal & State Filing',
      'W-2 & 1099 Income',
      'Standard Deductions',
      'E-File Included',
      'Audit Support',
    ],
    popular: false,
    filingType: 'personal' as const,
  },
  {
    name: 'Freelancer',
    audience: 'Freelancers',
    price: '$347',
    description: 'Self-employed & side hustles',
    features: [
      'Everything in Personal',
      'Schedule C Business Income',
      'Home Office Deduction',
      'Quarterly Estimates',
      'Expense Categorization',
    ],
    popular: true,
    filingType: 'freelancer' as const,
  },
  {
    name: 'Business',
    audience: 'Small Businesses',
    price: '$597',
    description: 'LLCs, S-Corps & partnerships',
    features: [
      'Everything in Freelancer',
      'Business Entity Returns',
      'Payroll Tax Compliance',
      'Multi-State Filing',
      'Year-Round Support',
    ],
    popular: false,
    filingType: 'business' as const,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    location: 'East Grand Rapids',
    audience: 'Small Businesses',
    quote:
      "Marcus saved me over $8,000 in taxes I didn't even know I was overpaying. His attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Freelance Developer',
    location: 'Downtown Grand Rapids',
    audience: 'Freelancers',
    quote:
      'Finally, someone who understands the complexity of freelance income. Keystone handles everything so I can focus on my work.',
    rating: 5,
  },
  {
    name: 'Jennifer & Tom Kowalski',
    role: 'Family Clients',
    location: 'Ada Township',
    audience: 'Families',
    quote:
      "We've used Keystone for 5 years now. The flat-rate pricing means no surprises, and Marcus always finds deductions we miss.",
    rating: 5,
  },
]

export const CASE_STUDIES = [
  {
    audience: 'Families',
    problem: 'Family of four overpaid after switching jobs mid-year and missed education credits.',
    solution: 'EA review of prior return + amended filing with dependent and credit optimization.',
    outcome: '$2,850 refund recovered; notice risk eliminated.',
    client: 'The Kowalski Family, Ada Township',
  },
  {
    audience: 'Freelancers',
    problem: 'Schedule C errors triggered an IRS notice for a freelance developer.',
    solution: 'EA review + amended return with home-office and mileage documentation.',
    outcome: '$3,200 refund recovered; notice closed.',
    client: 'James T., Freelance Developer, Grand Rapids',
  },
  {
    audience: 'Small Businesses',
    problem: 'LLC owner faced payroll penalties and back-tax letters after rapid hiring.',
    solution: 'Payment plan negotiation + quarterly compliance setup with flat-rate bookkeeping.',
    outcome: 'Penalties reduced 60%; clean filings going forward.',
    client: 'Sarah M., Design Studio Owner, East Grand Rapids',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What does the free consultation include?',
    answer:
      "During your 15-minute consultation, we'll review your current tax situation, identify potential savings opportunities, and recommend the best service package for your needs. There's absolutely no obligation to proceed.",
  },
  {
    question: 'How is flat-rate pricing different from hourly billing?',
    answer:
      "With flat-rate pricing, you know exactly what you'll pay upfront—no surprises, no hidden fees. Unlike hourly billing, you won't be penalized for asking questions or needing clarification.",
  },
  {
    question: 'What qualifies Marcus as an Enrolled Agent?',
    answer:
      'An Enrolled Agent (EA) is a federally-licensed tax practitioner who has passed a comprehensive IRS exam. EAs can represent taxpayers before the IRS and have unlimited practice rights—the highest credential the IRS awards.',
    id: 'ea-credential',
  },
  {
    question: 'Can you help with back taxes or IRS issues?',
    answer:
      'Absolutely. We specialize in IRS resolution including back taxes, payment plans, offers in compromise, and audit representation. Many clients come to us after receiving IRS notices.',
  },
  {
    question: 'Do you work with clients outside Grand Rapids?',
    answer:
      "Yes! While we're based in Grand Rapids, we serve clients throughout Michigan and can handle federal returns for clients anywhere in the United States via secure video consultations.",
  },
  {
    question: 'What documents do I need for my tax appointment?',
    answer:
      "We'll send you a personalized checklist after booking, but generally you'll need W-2s, 1099s, last year's return, and documentation for any deductions. We make the process as simple as possible.",
  },
]

export const BOOKING_TIME_SLOTS = [
  { day: 'Monday', time: '10:00 AM', date: 'Mar 10' },
  { day: 'Tuesday', time: '2:00 PM', date: 'Mar 11' },
  { day: 'Wednesday', time: '11:00 AM', date: 'Mar 12' },
  { day: 'Thursday', time: '3:00 PM', date: 'Mar 13' },
  { day: 'Friday', time: '9:00 AM', date: 'Mar 14' },
]

export type FilingTypeId = 'personal' | 'freelancer' | 'business' | 'irs'

export const FILING_TYPES: { id: FilingTypeId; label: string; description: string }[] = [
  { id: 'personal', label: 'Personal / Family', description: 'Individual tax returns' },
  { id: 'freelancer', label: 'Freelancer / Self-Employed', description: 'Schedule C income' },
  { id: 'business', label: 'Small Business', description: 'LLC, S-Corp, Partnership' },
  { id: 'irs', label: 'IRS Resolution', description: 'Back taxes, audits, notices' },
]

export const TRUST_LOGOS = [
  { name: 'BBB Accredited', href: 'https://www.bbb.org' },
  { name: 'IRS EA Program', href: 'https://www.irs.gov/tax-professionals/enrolled-agents' },
  { name: 'Google Reviews', href: 'https://www.google.com/maps' },
  { name: 'NATP Member', href: 'https://www.natptax.com' },
]
