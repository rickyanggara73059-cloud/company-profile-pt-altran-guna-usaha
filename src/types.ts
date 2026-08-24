export interface FleetItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  imageUrl: string;
  dimensions?: string;
  gallery: string[];
  features: string[];
}

export interface ClientPartner {
  id: string;
  name: string;
  industry: string;
  location?: string;
  logoText?: string;
}

export interface BranchLocation {
  id: string;
  city: string;
  role: string;
  address: string;
  phone: string;
  coverageArea: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  highlights: string[];
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  number: string;
  status: string;
  issuer: string;
  note?: string;
}

export interface CompanyProfileData {
  companyName: string;
  tagline: string;
  foundedYear: string;
  incYear: string;
  phone: string;
  whatsappNumber: string;
  whatsappNumber2: string;
  email: string;
  website?: string;
  headOfficeAddress: string;

  aboutHistory: string;
  aboutFocus: string;
  vision: string;
  mission: string[];

  services: ServiceItem[];
  fleets: FleetItem[];
  clients: ClientPartner[];
  advantages: AdvantageItem[];
  legalDocuments: LegalDocument[];
  branches: BranchLocation[];

  heroImageUrl: string;
  logoUrl?: string;
}

