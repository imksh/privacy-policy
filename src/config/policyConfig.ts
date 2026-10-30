/**
 * GSTHisab – Privacy Policy Configuration Constants
 * 
 * Update these constants with your company/developer details.
 * Any changes made here will automatically reflect across the entire Privacy Policy page,
 * Google Play Data Safety summary, and the standalone HTML output.
 */

export interface GrievanceOfficer {
  name: string;
  designation: string;
  email: string;
  address: string;
  responseTime: string;
}

export interface PermissionItem {
  id: string;
  androidPermission: string;
  name: string;
  purpose: string;
  isMandatory: boolean;
  dataHandling: string;
}

export interface PolicyConfig {
  appName: string;
  appShortName: string;
  developerName: string;
  developerLegalEntity: string;
  supportEmail: string;
  websiteUrl: string;
  playStorePackageName: string;
  category: string;
  platform: string;
  targetAudience: string;
  effectiveDate: string;
  lastUpdatedDate: string;
  version: string;
  jurisdiction: string;
  governingLaw: string;
  grievanceOfficer: GrievanceOfficer;
  isOfflineOnly: boolean;
  storesDataOnServer: boolean;
  requiresAuth: boolean;
  collectsAnalytics: boolean;
  servesAds: boolean;
  hasInAppPurchases: boolean;
  permissions: PermissionItem[];
}

export const policyConfig: PolicyConfig = {
  // App Identifiers
  appName: "GSTHisab – GST Invoice Maker",
  appShortName: "GSTHisab",
  playStorePackageName: "io.github.imksh.gsthisab",
  version: "1.0.0",
  category: "Business",
  platform: "Android (Google Play Store)",
  targetAudience: "Indian shopkeepers, small businesses, traders, freelancers, and individuals",

  // Developer & Contact Information (Update these with your details)
  developerName: "Karan Sharma", // e.g. "GSTHisab Technologies" or your personal name
  developerLegalEntity: "imksh", // e.g. "GSTHisab Tech LLP" or individual developer
  supportEmail: "idioticminds0@gmail.com", // Your official support email
  websiteUrl: "https://gsthisab.imksh.vercel.app", // Your official website or public URL

  // Policy Dates
  effectiveDate: "October 30, 2026",
  lastUpdatedDate: "October 30, 2026",

  // Legal Jurisdiction (India)
  jurisdiction: "New Delhi, India",
  governingLaw: "Digital Personal Data Protection Act, 2023 (DPDPA) and Information Technology Act, 2000 (India)",

  // Grievance Redressal Officer (Mandatory under DPDPA 2023 & Indian IT Rules)
  grievanceOfficer: {
    name: "Karan Sharma", // e.g. "Karan Sharma" or "[Grievance Redressal Officer]"
    designation: "Data Protection & Grievance Officer",
    email: "idioticminds0@gmail.com", // Dedicated or support email for grievances
    address: "Alamnagar, Madhepura, Bihar",
    responseTime: "Acknowledged within 24 hours, resolved within 7 working days (as per Indian IT & DPDPA statutory rules)",
  },

  // Technical Architecture Truth Flags (Reflects actual app implementation)
  isOfflineOnly: true,
  storesDataOnServer: false,
  requiresAuth: false,
  collectsAnalytics: false,
  servesAds: false,
  hasInAppPurchases: false,

  // Android Permissions Requested by GSTHisab
  permissions: [
    {
      id: "camera",
      androidPermission: "android.permission.CAMERA",
      name: "Camera Access",
      purpose: "Allows the user to take a photograph of their business logo or physical signature to print/embed directly on generated GST invoices.",
      isMandatory: false,
      dataHandling: "Photos taken are stored exclusively inside the app's sandboxed local SQLite storage on the user's device. Photos are never uploaded or transmitted to any server.",
    },
    {
      id: "gallery",
      androidPermission: "android.permission.READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE",
      name: "Photo Gallery & Media Access",
      purpose: "Allows the user to select an existing business logo image or signature from device photos to place on invoice headers.",
      isMandatory: false,
      dataHandling: "Selected images are copied directly into the local application directory. They are never sent off the device.",
    },
    {
      id: "storage_pdf",
      androidPermission: "Scoped Storage / Storage Access Framework",
      name: "PDF Invoice Saving & Sharing",
      purpose: "Allows generating, saving, viewing, and exporting standard Indian GST tax invoices in PDF format to the user's device Downloads folder or sharing via third-party apps (WhatsApp, Email, Bluetooth Print).",
      isMandatory: true,
      dataHandling: "Invoices are compiled locally into PDF using the on-device system printing engine (expo-print). Transmitted strictly when the user manually triggers the native Android share sheet.",
    },
  ],
};

export default policyConfig;
