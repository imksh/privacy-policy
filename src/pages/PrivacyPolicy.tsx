import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiLock,
  FiHardDrive,
  FiUserX,
  FiEyeOff,
  FiTrash2,
  FiCamera,
  FiImage,
  FiFileText,
  FiCheckCircle,
  FiMail,
  FiPrinter,
  FiCopy,
  FiSearch,
  FiHelpCircle,
  FiArrowRight,
  FiAlertCircle,
  FiExternalLink,
  FiLayers,
  FiInfo,
} from "react-icons/fi";
import { Moon, Sun, Download, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import policyConfig from "../config/policyConfig";
import { useUiStore } from "../store/useUiStore";
import SEO from "../components/common/SEO";

const PrivacyPolicy = () => {
  const { theme, toggleTheme } = useUiStore();
  const [activeTab, setActiveTab] = useState<"policy" | "datasafety" | "dpdpa">("policy");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("sec-intro");

  const copyPageUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Privacy Policy URL copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  const sections = useMemo(
    () => [
      { id: "sec-intro", title: "1. Introduction & Scope", icon: FiShield },
      { id: "sec-offline", title: "2. 100% Offline-First Architecture", icon: FiHardDrive },
      { id: "sec-personal", title: "3. Personal Information Handled", icon: FiFileText },
      { id: "sec-business", title: "4. Business & Tax Information (GSTIN)", icon: FiLayers },
      { id: "sec-financial", title: "5. Financial & Transaction Data", icon: FiLock },
      { id: "sec-device", title: "6. Device Diagnostics & Technical Logs", icon: FiEyeOff },
      { id: "sec-permissions", title: "7. Android Device Permissions", icon: FiCamera },
      { id: "sec-storage", title: "8. Data Storage & Local Protection", icon: FiHardDrive },
      { id: "sec-server", title: "9. Zero Server Transmission", icon: FiEyeOff },
      { id: "sec-thirdparty", title: "10. Third-Party Services & SDKs", icon: FiShield },
      { id: "sec-sharing", title: "11. Zero Data Sharing & Sale", icon: FiUserX },
      { id: "sec-retention", title: "12. Data Retention & Deletion", icon: FiTrash2 },
      { id: "sec-rights", title: "13. User Rights under Indian DPDPA 2023", icon: FiCheckCircle },
      { id: "sec-children", title: "14. Children's Privacy", icon: FiShield },
      { id: "sec-security", title: "15. Technical Security Measures", icon: FiLock },
      { id: "sec-changes", title: "16. Policy Amendments & Updates", icon: FiInfo },
      { id: "sec-contact", title: "17. Contact & Grievance Redressal", icon: FiMail },
    ],
    []
  );

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const query = searchQuery.toLowerCase();
    return sections.filter((s) => s.title.toLowerCase().includes(query));
  }, [sections, searchQuery]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content antialiased selection:bg-primary/20 selection:text-primary">
      <SEO
        title={`Privacy Policy | ${policyConfig.appName}`}
        description={`Official Privacy Policy for ${policyConfig.appName} Android app. Compliant with Indian DPDPA 2023 and Google Play User Data policies.`}
        keywords="GSTHisab, GST Invoice Maker, Privacy Policy, Google Play Store, DPDPA 2023, India Data Protection, Offline GST App"
      />

      {/* Top Notification / Trust Bar */}
      <div className="bg-gradient-to-r from-primary to-indigo-600 text-white text-xs font-medium py-2 px-4 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur">
              Verified Compliance
            </span>
            <span>
              Google Play Store User Data Policy & Indian DPDPA 2023 Compliant
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span>Last Updated: <strong>{policyConfig.lastUpdatedDate}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Offline & Local Storage</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-30 bg-base-100/90 backdrop-blur-md border-b border-base-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
              <FiShield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-tight text-base-content">
                  {policyConfig.appShortName}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-success/15 text-success border border-success/30">
                  OFFLINE-FIRST
                </span>
              </div>
              <p className="text-xs text-base-content/60 hidden sm:block">
                Legal & Data Safety Portal
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn btn-sm btn-ghost gap-1.5 rounded-lg text-xs"
              title="Print or Save PDF"
            >
              <FiPrinter className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            <button
              onClick={copyPageUrl}
              className="btn btn-sm btn-ghost gap-1.5 rounded-lg text-xs"
              title="Copy Policy Link for Google Play Console"
            >
              <FiCopy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Link</span>
            </button>

            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-circle btn-ghost"
              title="Toggle Light/Dark Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-base-100 to-base-100 border-b border-base-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Privacy Policy for Google Play Store</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-base-content leading-tight">
              Privacy Policy for <span className="text-primary">{policyConfig.appName}</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-base-content/75 leading-relaxed">
              We respect your privacy and business confidentiality. <strong>{policyConfig.appShortName}</strong> is built on a strict <strong>100% offline-first architecture</strong>. All your customer details, product inventories, GST numbers, and invoices are stored strictly inside your Android device and are <strong>never transmitted to any remote servers, cloud databases, or third-party trackers</strong>.
            </p>

            {/* Quick Metadata Pill Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-base-200/60 border border-base-300">
                <span className="text-base-content/50 block font-medium">Application</span>
                <strong className="text-base-content font-bold mt-0.5 block truncate">
                  {policyConfig.appShortName}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-base-200/60 border border-base-300">
                <span className="text-base-content/50 block font-medium">Effective Date</span>
                <strong className="text-base-content font-bold mt-0.5 block">
                  {policyConfig.effectiveDate}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-base-200/60 border border-base-300">
                <span className="text-base-content/50 block font-medium">Governing Law</span>
                <strong className="text-base-content font-bold mt-0.5 block truncate" title={policyConfig.governingLaw}>
                  DPDPA 2023 (India)
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-base-200/60 border border-base-300">
                <span className="text-base-content/50 block font-medium">Developer</span>
                <strong className="text-base-content font-bold mt-0.5 block truncate" title={policyConfig.developerName}>
                  {policyConfig.developerName}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Policy vs Google Play Data Safety Cheat Sheet vs DPDPA) */}
      <div className="border-b border-base-200 bg-base-100 sticky top-16 z-20 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-2.5 hide-scrollbar">
            <button
              onClick={() => setActiveTab("policy")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === "policy"
                  ? "bg-primary text-primary-content shadow-sm"
                  : "bg-base-200/60 text-base-content/70 hover:bg-base-200"
              }`}
            >
              <FiFileText className="w-4 h-4" />
              <span>Full Privacy Policy (17 Sections)</span>
            </button>

            <button
              onClick={() => setActiveTab("datasafety")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === "datasafety"
                  ? "bg-primary text-primary-content shadow-sm"
                  : "bg-base-200/60 text-base-content/70 hover:bg-base-200"
              }`}
            >
              <FiShield className="w-4 h-4" />
              <span>Google Play Data Safety Section</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/20">Console Guide</span>
            </button>

            <button
              onClick={() => setActiveTab("dpdpa")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === "dpdpa"
                  ? "bg-primary text-primary-content shadow-sm"
                  : "bg-base-200/60 text-base-content/70 hover:bg-base-200"
              }`}
            >
              <FiCheckCircle className="w-4 h-4" />
              <span>DPDPA 2023 & Grievance Redressal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ========================================================================= */}
        {/* TAB 1: FULL PRIVACY POLICY                                                */}
        {/* ========================================================================= */}
        {activeTab === "policy" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop Left Sticky Navigation */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-36 space-y-4">
              <div className="p-4 rounded-2xl bg-base-200/50 border border-base-300">
                <div className="relative mb-3">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search clauses..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-base-100 border border-base-300 focus:outline-none focus:border-primary text-base-content"
                  />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-base-content/50 px-2 mb-2">
                  Table of Contents
                </div>

                <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                  {filteredSections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        activeSection === sec.id
                          ? "bg-primary/10 text-primary font-bold border-l-2 border-primary"
                          : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                      }`}
                    >
                      <sec.icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Developer Configuration Reminder Box */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs space-y-2">
                <div className="font-bold text-primary flex items-center gap-1.5">
                  <FiInfo className="w-4 h-4" />
                  <span>Configurable Constants</span>
                </div>
                <p className="text-base-content/70 leading-relaxed">
                  You can customize developer name, support email, and grievance officer details anytime by editing:
                </p>
                <code className="block p-2 rounded bg-base-200 font-mono text-[11px] text-base-content break-all">
                  src/config/policyConfig.ts
                </code>
              </div>
            </aside>

            {/* Right Main Policy Text */}
            <article className="lg:col-span-8 space-y-10 prose prose-slate max-w-none text-base-content">
              {/* Highlights Summary Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-base-200 to-base-200 border border-primary/20 space-y-4">
                <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-wider">
                  <FiCheckCircle className="w-5 h-5 text-primary" />
                  <span>Executive Privacy Summary</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <FiHardDrive className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span><strong>100% On-Device:</strong> SQLite database stored strictly on your phone.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FiUserX className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span><strong>No Accounts:</strong> No signup, login, phone OTP, or passwords required.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FiEyeOff className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span><strong>0 Server Sync:</strong> No remote servers, no cloud APIs, no external backup.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FiShield className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span><strong>0 Trackers:</strong> Zero advertising SDKs, zero third-party analytics.</span>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <section id="sec-intro" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Introduction and Scope
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    This Privacy Policy governs the use of the Android mobile application <strong>{policyConfig.appName}</strong> (hereinafter referred to as <strong>"{policyConfig.appShortName}"</strong>, <strong>"the Application"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>), distributed through the Google Play Store and developed by <strong>{policyConfig.developerName}</strong>.
                  </p>
                  <p>
                    {policyConfig.appShortName} is designed as an offline-first invoicing and billing utility tailored specifically for Indian shopkeepers, small retail businesses, traders, MSMEs, freelancers, and individuals who require generating fast, professional Goods and Services Tax (GST) compliant invoices, tax bills, and PDF documents.
                  </p>
                  <p>
                    This Policy explains what information is processed when you use the Application, how it is handled, where it is stored, and your legal rights in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong> of India, the <strong>Information Technology Act, 2000</strong> (along with applicable rules), and the <strong>Google Play Developer Program Policies on User Data</strong>.
                  </p>
                  <p>
                    By installing, accessing, or using {policyConfig.appShortName}, you acknowledge and agree to the data handling practices described in this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="sec-offline" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Fundamental Architectural Principle: 100% Offline-First
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    Unlike conventional cloud-based accounting software that uploads your commercial records to remote third-party web servers, <strong>{policyConfig.appShortName} operates on a strictly offline-first architecture</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-success/10 border border-success/30 text-xs text-base-content space-y-2">
                    <strong className="text-success font-bold flex items-center gap-1.5">
                      <FiCheckCircle className="w-4 h-4" />
                      Zero Remote Server Transmission
                    </strong>
                    <p className="m-0 leading-relaxed">
                      We do not operate, own, or lease any remote web servers, cloud databases (such as AWS, Firebase, or Supabase), or external APIs that collect your business records. All database tables, calculation engines, and invoice generation scripts run locally on your Android device via an embedded SQLite database engine.
                    </p>
                  </div>
                  <p>
                    Your business data, customer records, and financial details stay 100% in your physical possession at all times.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="sec-personal" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Personal Information Handled
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    {policyConfig.appShortName} does <strong>not</strong> require user registration, account sign-up, email verification, or phone number OTP authentication to use the Application. You can launch and use the app immediately without providing any personal identity verification.
                  </p>
                  <p>
                    To personalize your generated GST invoices and tax bills, you may choose to voluntarily enter the following information into the app’s <strong>Settings / Business Profile</strong> screen:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Business Owner / Authorized Signatory Name:</strong> Printed on invoice declarations and signatures.</li>
                    <li><strong>Contact Phone Number & Email Address:</strong> Printed on invoice headers for your customers' communication.</li>
                    <li><strong>Digital Signature / Logo Image:</strong> Stored locally if you photograph or select an image file to embed on bills.</li>
                  </ul>
                  <p className="text-xs text-base-content/70 italic">
                    All personal data entered is stored exclusively within the sandboxed SQLite database on your device and is never transmitted to us or any third party.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="sec-business" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Business, Commercial & Tax Information (GSTIN)
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    To generate statutory Indian GST Tax Invoices in compliance with the Central Goods and Services Tax Act, 2017, the Application allows you to input and maintain:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-base-100 border border-base-300">
                      <strong>Your Business Profile:</strong>
                      <p className="mt-1 text-base-content/70 m-0">
                        Legal Business Name, Trade Name, GSTIN (Goods and Services Tax Identification Number), State (Place of Supply), Full Registered Address, and PAN (Permanent Account Number).
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-base-100 border border-base-300">
                      <strong>Bank & Settlement Details:</strong>
                      <p className="mt-1 text-base-content/70 m-0">
                        Bank Name, Account Holder Name, Bank Account Number, and IFSC Code (printed on invoice footers for your buyers' direct bank transfers).
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-base-100 border border-base-300">
                      <strong>Customer Directory:</strong>
                      <p className="mt-1 text-base-content/70 m-0">
                        Customer Name, Phone Number, Buyer GSTIN, Billing Address, Shipping Address, and State Code.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-base-100 border border-base-300">
                      <strong>Product & Inventory Catalog:</strong>
                      <p className="mt-1 text-base-content/70 m-0">
                        Item / Product Name, HSN / SAC Codes, Unit Selling Price, Applicable GST Tax Slab (0%, 5%, 12%, 18%, 28%), Measurement Units (e.g., PCS, KGS, BOX), and Descriptions.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-base-content/70">
                    <strong>Crucial Note:</strong> We do NOT transmit your GSTIN, turnover, or sales figures to the GST Network (GSTN), the Goods and Services Tax Council, the Directorate General of Systems and Data Management (DG Systems), or any state/central tax authorities. The app functions solely as a standalone bill calculator and PDF printer.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="sec-financial" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Financial and Transaction-Related Information
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    The Application calculates and records:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>Invoice numbers and sequencing (e.g. <code>INV-001</code>).</li>
                    <li>Date of issue and supply date.</li>
                    <li>Taxable amounts, CGST (Central Tax), SGST (State Tax), and IGST (Integrated Tax) breakdowns.</li>
                    <li>Grand total values and auto-generated Indian Rupees Amount in Words (Lakhs & Crores format).</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-info/10 border border-info/30 text-xs text-base-content space-y-1">
                    <strong className="text-info font-bold flex items-center gap-1.5">
                      <FiLock className="w-4 h-4" />
                      Payment Disclaimer
                    </strong>
                    <p className="m-0 leading-relaxed">
                      {policyConfig.appShortName} is <strong>not</strong> a Payment Aggregator, Wallet, or Payment Gateway. We do <strong>not</strong> collect, process, or store credit card numbers, debit card numbers, CVVs, net banking credentials, or UPI PINs. Any payment instructions printed on generated invoices (such as bank account numbers or UPI IDs) are entered by you manually for the benefit of your buyers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="sec-device" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Device Information, Diagnostics and Analytics
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    To protect your privacy and ensure lightweight performance:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>We do <strong>not</strong> harvest your Android Advertising ID (AAID), IMEI number, MAC address, SIM serial number, or phone contacts.</li>
                    <li>We do <strong>not</strong> embed background diagnostic trackers, telemetry beacons, or behavioral tracking SDKs.</li>
                    <li>Standard crash logs (if any are reported through the Google Play Store operating system service) are aggregated and anonymized entirely by Google Play in accordance with standard Android OS telemetry.</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section id="sec-permissions" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Android Device Permissions and Why They Are Required
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-4 leading-relaxed">
                  <p>
                    In accordance with Google Play's <strong>User Data and Permission Policies</strong>, {policyConfig.appShortName} requests only the minimum runtime permissions necessary to deliver essential app features. Each permission is requested dynamically at the time of use:
                  </p>

                  <div className="space-y-3">
                    {policyConfig.permissions.map((perm) => (
                      <div key={perm.id} className="p-4 rounded-xl bg-base-100 border border-base-300 space-y-1.5 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <strong className="text-sm text-base-content font-bold flex items-center gap-1.5">
                            {perm.id === "camera" && <FiCamera className="text-primary w-4 h-4" />}
                            {perm.id === "gallery" && <FiImage className="text-primary w-4 h-4" />}
                            {perm.id === "storage_pdf" && <FiFileText className="text-primary w-4 h-4" />}
                            {perm.name}
                          </strong>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            perm.isMandatory ? "bg-warning/15 text-warning" : "bg-base-200 text-base-content/60"
                          }`}>
                            {perm.isMandatory ? "Core Feature" : "Optional"}
                          </span>
                        </div>
                        <div className="font-mono text-[11px] text-primary">{perm.androidPermission}</div>
                        <p className="text-base-content/80 m-0"><strong>Purpose:</strong> {perm.purpose}</p>
                        <p className="text-base-content/60 m-0"><strong>Data Handling:</strong> {perm.dataHandling}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-base-content/70">
                    You can grant or revoke these permissions at any time through your Android device settings via <strong>Settings &gt; Apps &gt; {policyConfig.appShortName} &gt; Permissions</strong>. Revoking camera or gallery access will merely prevent adding a photo logo to invoices, without disabling the core billing calculator.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="sec-storage" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    8
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    How Information is Stored and Protected
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    All data is persisted in a local <strong>SQLite database</strong> using Android's native internal storage filesystem:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Application Sandbox:</strong> The database file is placed inside the Android application's private data sandbox (e.g. <code>/data/data/{policyConfig.playStorePackageName}/databases/</code>).</li>
                    <li><strong>OS-Level Process Isolation:</strong> Under Android's Linux user-group security model (UID isolation), no other application installed on your Android device can read, inspect, or modify {policyConfig.appShortName}'s database without root authorization.</li>
                    <li><strong>Device Encryption:</strong> On modern Android devices (Android 10+), your internal device storage is encrypted at rest using File-Based Encryption (FBE) backed by your lock screen credentials.</li>
                  </ul>
                </div>
              </section>

              {/* Section 9 */}
              <section id="sec-server" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    9
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Local Storage vs. Remote Server Transmission
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <div className="overflow-x-auto">
                    <table className="table w-full text-xs border border-base-300">
                      <thead>
                        <tr className="bg-base-200 text-base-content font-bold">
                          <th className="py-2.5 px-3">Data Category</th>
                          <th className="py-2.5 px-3">Stored Locally on Device?</th>
                          <th className="py-2.5 px-3">Transmitted to Remote Server?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Business Profile & GSTIN</td>
                          <td className="py-2 px-3 text-success font-bold">YES (SQLite)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Customer Records & Addresses</td>
                          <td className="py-2 px-3 text-success font-bold">YES (SQLite)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Product Catalog & Prices</td>
                          <td className="py-2 px-3 text-success font-bold">YES (SQLite)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Generated Invoices & Line Items</td>
                          <td className="py-2 px-3 text-success font-bold">YES (SQLite)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Bank Account & IFSC</td>
                          <td className="py-2 px-3 text-success font-bold">YES (SQLite)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                        <tr className="border-t border-base-300">
                          <td className="py-2 px-3 font-semibold">Camera Photos (Logo / Signature)</td>
                          <td className="py-2 px-3 text-success font-bold">YES (Local Filesystem)</td>
                          <td className="py-2 px-3 text-error font-bold">NO (0 Bytes)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-base-content/70">
                    The only time invoice data leaves your device is when <strong>you deliberately and manually trigger the Android system share sheet</strong> to send an exported PDF invoice to a client or accountant via WhatsApp, Email, Telegram, or a Bluetooth printer.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="sec-thirdparty" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    10
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Third-Party Services, APIs, Analytics and Cloud Providers
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    In strict compliance with our privacy-first philosophy:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li><strong>No Advertising SDKs:</strong> We do NOT integrate Google AdMob, Unity Ads, AppLovin, or any commercial ad exchange. The app is completely ad-free.</li>
                    <li><strong>No Analytics SDKs:</strong> We do NOT bundle Firebase Analytics, Google Analytics, Mixpanel, AppsFlyer, or Amplitude.</li>
                    <li><strong>No Cloud Sync Providers:</strong> We do NOT sync your databases to AWS, Google Cloud, Azure, Supabase, or Firebase Realtime Database.</li>
                    <li><strong>No In-App Payment SDKs:</strong> We do NOT bundle external payment SDKs.</li>
                  </ul>
                  <p className="text-xs text-base-content/70">
                    Your usage of {policyConfig.appShortName} is completely untracked and unmonitored.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="sec-sharing" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    11
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Whether Information is Shared with Third Parties
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>We do not sell, rent, monetize, trade, or share your personal or commercial data with any third party.</strong>
                  </p>
                  <p>
                    Because all data remains physically stored on your Android device without passing through our servers, we do not have access to your database, your invoices, your revenue numbers, or your customer identities. Consequently, it is technically impossible for us to share or sell your data to data brokers, marketing agencies, or financial institutions.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="sec-retention" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    12
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Data Retention and Deletion Procedures
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    You maintain total autonomy over the retention and deletion of your data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-xl bg-base-100 border border-base-300 space-y-1">
                      <strong className="text-base-content text-sm flex items-center gap-1.5">
                        <FiTrash2 className="w-4 h-4 text-warning" />
                        In-App Granular Deletion
                      </strong>
                      <p className="text-base-content/70 m-0">
                        You can delete individual invoices, customer records, and product catalog items directly within the app at any time. When deleted, records are immediately purged from the local SQLite tables.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-base-100 border border-base-300 space-y-1">
                      <strong className="text-base-content text-sm flex items-center gap-1.5">
                        <FiTrash2 className="w-4 h-4 text-error" />
                        Complete Data Wipe
                      </strong>
                      <p className="text-base-content/70 m-0">
                        Uninstalling {policyConfig.appShortName} from your Android device or clearing app storage via <strong>Android Settings &gt; Apps &gt; {policyConfig.appShortName} &gt; Storage &gt; Clear Data</strong> immediately and permanently deletes 100% of the SQLite database and all saved files.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-base-content/70">
                    Because we do not store your data on external servers, there is no delayed server deletion schedule or lingering backup copies.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="sec-rights" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    13
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    User Rights under India's Digital Personal Data Protection Act, 2023 (DPDPA)
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    As a Data Principal residing in India, you enjoy comprehensive rights under the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                      <strong>Right to Access Information (Section 11):</strong> You have direct, immediate access to all data stored within the app via the History, Products, Customers, and Settings screens.
                    </div>
                    <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                      <strong>Right to Correction and Erasure (Section 12):</strong> You can edit or permanently delete any business record, customer contact, or invoice at any time with 0 restriction.
                    </div>
                    <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                      <strong>Right of Grievance Redressal (Section 13):</strong> You can raise questions or complaints directly to our designated Grievance Officer (detailed in Section 17).
                    </div>
                    <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                      <strong>Right to Nominate (Section 14):</strong> You have the right to nominate any individual to exercise your data rights in the event of death or incapacity.
                    </div>
                    <div className="p-3 rounded-lg bg-base-100 border border-base-300">
                      <strong>Consent Withdrawal:</strong> You may withdraw consent at any time by revoking device permissions or uninstalling the Application.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 14 */}
              <section id="sec-children" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    14
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Children’s Privacy
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    {policyConfig.appShortName} is designed strictly for commercial invoicing, business management, and GST tax billing. It is not intended for or marketed to individuals under the age of 18 (minors as defined under the Indian Majority Act, 1875 and Section 2(f) of the DPDPA 2023).
                  </p>
                  <p>
                    We do not knowingly collect, process, or store personal data belonging to children. If a parent or guardian discovers that a minor has used the application, they may completely erase all data by clearing the app storage or uninstalling the app from the device.
                  </p>
                </div>
              </section>

              {/* Section 15 */}
              <section id="sec-security" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    15
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Data Security and Recommended User Practices
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    Because your data resides locally on your Android device, the physical and logical security of your device directly protects your business records. We recommend the following best practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>Enable a strong screen lock (PIN, Password, or Biometric Fingerprint) on your Android device.</li>
                    <li>Do not root your Android device or install untrusted APKs from unofficial sources, as rooting bypasses Android's application sandboxing.</li>
                    <li>Always keep your Android OS updated to ensure the latest security patches are active.</li>
                    <li>Export and backup your critical PDF invoices periodically to your personal cloud or external storage drive.</li>
                  </ul>
                </div>
              </section>

              {/* Section 16 */}
              <section id="sec-changes" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    16
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Changes to this Privacy Policy
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-3 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our legal obligations, regulatory mandates under the DPDPA 2023, or Google Play Developer Program policies.
                  </p>
                  <p>
                    Whenever changes are made, we will update the <strong>"Last Updated"</strong> date at the top of this document. Continued use of {policyConfig.appShortName} after the publication of an updated Privacy Policy constitutes acceptance of the modified terms.
                  </p>
                </div>
              </section>

              {/* Section 17 */}
              <section id="sec-contact" className="scroll-mt-36 p-6 rounded-2xl bg-base-200/40 border border-base-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    17
                  </div>
                  <h2 className="text-xl font-black text-base-content m-0">
                    Contact Information and Statutory Grievance Redressal
                  </h2>
                </div>
                <div className="text-sm text-base-content/80 space-y-4 leading-relaxed">
                  <p>
                    Pursuant to <strong>Section 6(9) of the Digital Personal Data Protection Act, 2023</strong> and <strong>Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, the details of our designated Data Protection and Grievance Officer are set forth below:
                  </p>

                  <div className="p-5 rounded-2xl bg-base-100 border border-base-300 space-y-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-base-content/50 block font-medium">Grievance Officer:</span>
                        <strong className="text-base-content font-bold">{policyConfig.grievanceOfficer.name}</strong>
                      </div>
                      <div>
                        <span className="text-base-content/50 block font-medium">Designation:</span>
                        <span className="text-base-content font-medium">{policyConfig.grievanceOfficer.designation}</span>
                      </div>
                      <div>
                        <span className="text-base-content/50 block font-medium">Grievance Email:</span>
                        <a href={`mailto:${policyConfig.grievanceOfficer.email}`} className="text-primary font-bold hover:underline">
                          {policyConfig.grievanceOfficer.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-base-content/50 block font-medium">General Support Email:</span>
                        <a href={`mailto:${policyConfig.supportEmail}`} className="text-primary font-bold hover:underline">
                          {policyConfig.supportEmail}
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-base-200">
                      <span className="text-base-content/50 block font-medium">Registered Postal Address:</span>
                      <p className="text-base-content/80 m-0">{policyConfig.grievanceOfficer.address}</p>
                    </div>

                    <div className="pt-2 border-t border-base-200 text-xs text-base-content/70">
                      <strong>Resolution Timeline:</strong> {policyConfig.grievanceOfficer.responseTime}
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: GOOGLE PLAY STORE DATA SAFETY SECTION CHEAT SHEET                  */}
        {/* ========================================================================= */}
        {activeTab === "datasafety" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-content">
                Google Play Console Ready
              </div>
              <h2 className="text-2xl font-black text-base-content m-0">
                Data Safety Questionnaire Responses for GSTHisab
              </h2>
              <p className="text-sm text-base-content/80 leading-relaxed m-0">
                Use the verified responses below when completing the <strong>App content &gt; Data safety</strong> form in the Google Play Console for {policyConfig.appName}. Since {policyConfig.appShortName} is 100% offline, your submission is straightforward and compliant.
              </p>
            </div>

            {/* Question by question answers */}
            <div className="space-y-4">
              {/* Question 1 */}
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold uppercase text-primary tracking-wider">
                  Question 1: Data Collection & Sharing
                </div>
                <h3 className="text-base font-bold text-base-content m-0">
                  "Does your app collect or share any of the required user data types?"
                </h3>
                <div className="p-3 rounded-xl bg-success/15 border border-success/30 text-xs text-base-content font-bold">
                  Answer: NO
                </div>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  <strong>Play Store Policy Basis:</strong> Data stored exclusively on the user’s device (such as SQLite local database) without being transmitted off the device does NOT count as "collection" under Google Play's User Data policy definitions.
                </p>
              </div>

              {/* Question 2 */}
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold uppercase text-primary tracking-wider">
                  Question 2: Data Encryption in Transit
                </div>
                <h3 className="text-base font-bold text-base-content m-0">
                  "Is all of the user data collected by your app encrypted in transit?"
                </h3>
                <div className="p-3 rounded-xl bg-base-100 border border-base-300 text-xs text-base-content font-bold">
                  Answer: Not Applicable / No Data Transmitted
                </div>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  Because no data is transferred from the app to external web servers or cloud endpoints, network transmission is zero.
                </p>
              </div>

              {/* Question 3 */}
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold uppercase text-primary tracking-wider">
                  Question 3: Account Creation & Deletion
                </div>
                <h3 className="text-base font-bold text-base-content m-0">
                  "Does your app allow users to create an account?"
                </h3>
                <div className="p-3 rounded-xl bg-success/15 border border-success/30 text-xs text-base-content font-bold">
                  Answer: NO
                </div>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  {policyConfig.appShortName} does not require account creation, logins, or authentication. Therefore, Google Play's <strong>Account Deletion URL</strong> requirement does not apply to this app.
                </p>
              </div>

              {/* Question 4 */}
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold uppercase text-primary tracking-wider">
                  Question 4: Deletion Mechanism
                </div>
                <h3 className="text-base font-bold text-base-content m-0">
                  "Do you provide a way for users to request that their data is deleted?"
                </h3>
                <div className="p-3 rounded-xl bg-success/15 border border-success/30 text-xs text-base-content font-bold">
                  Answer: YES (Direct user control on device)
                </div>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  Users can delete individual records in the app, or uninstall the app / clear app storage to immediately delete all records from the device.
                </p>
              </div>

              {/* Question 5 */}
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold uppercase text-primary tracking-wider">
                  Question 5: Advertising & SDKs
                </div>
                <h3 className="text-base font-bold text-base-content m-0">
                  "Does your app contain ads or use third-party analytics SDKs?"
                </h3>
                <div className="p-3 rounded-xl bg-success/15 border border-success/30 text-xs text-base-content font-bold">
                  Answer: NO (No ads, no analytics trackers)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: DPDPA 2023 & GRIEVANCE REDRESSAL                                   */}
        {/* ========================================================================= */}
        {activeTab === "dpdpa" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-6 rounded-2xl bg-success/10 border border-success/20 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-success text-success-content">
                Digital Personal Data Protection Act, 2023 (DPDPA)
              </div>
              <h2 className="text-2xl font-black text-base-content m-0">
                Statutory Compliance Notice for Indian Users
              </h2>
              <p className="text-sm text-base-content/80 leading-relaxed m-0">
                In compliance with India's landmark data protection framework—the <strong>Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)</strong>—this section details the rights of Data Principals and the statutory obligations of {policyConfig.developerName}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold text-primary uppercase">Section 4 & 5</div>
                <h3 className="text-base font-bold text-base-content m-0">Lawful Purpose & Notice</h3>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  Personal data (such as name, phone number, and address) is processed only for the specified purpose of generating Indian GST invoices and bills requested directly by the user.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold text-primary uppercase">Section 8</div>
                <h3 className="text-base font-bold text-base-content m-0">Data Fiduciary Obligations</h3>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  Because data does not transit to a remote server, we uphold the highest standard of data protection by eliminating remote cyber attack vectors and unauthorized secondary processing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold text-primary uppercase">Section 9</div>
                <h3 className="text-base font-bold text-base-content m-0">Processing of Children's Data</h3>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  No tracking, behavioral monitoring, or targeted marketing is conducted on minors. The Application is not intended for use by individuals under 18 years of age.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 space-y-2">
                <div className="text-xs font-bold text-primary uppercase">Section 13</div>
                <h3 className="text-base font-bold text-base-content m-0">Grievance Redressal Mechanism</h3>
                <p className="text-xs text-base-content/70 leading-relaxed m-0">
                  Indian users may register concerns with our designated Grievance Officer, who is mandated to acknowledge grievances within 24 hours and resolve them within statutory timelines.
                </p>
              </div>
            </div>

            {/* Grievance Officer Contact Box */}
            <div className="p-6 rounded-2xl bg-base-200 border border-base-300 space-y-4">
              <h3 className="text-lg font-bold text-base-content m-0 flex items-center gap-2">
                <FiMail className="w-5 h-5 text-primary" />
                <span>Contact Grievance Officer</span>
              </h3>
              <div className="text-xs sm:text-sm text-base-content/80 space-y-2">
                <p className="m-0">
                  <strong>Officer Name:</strong> {policyConfig.grievanceOfficer.name} ({policyConfig.grievanceOfficer.designation})
                </p>
                <p className="m-0">
                  <strong>Official Email:</strong>{" "}
                  <a href={`mailto:${policyConfig.grievanceOfficer.email}`} className="text-primary font-bold hover:underline">
                    {policyConfig.grievanceOfficer.email}
                  </a>
                </p>
                <p className="m-0">
                  <strong>Office Address:</strong> {policyConfig.grievanceOfficer.address}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-base-200 bg-base-200/40 py-12 text-xs text-base-content/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                GH
              </div>
              <span className="font-bold text-base-content text-sm">
                {policyConfig.appName}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span>Developer: <strong>{policyConfig.developerName}</strong></span>
              <span>•</span>
              <a href={`mailto:${policyConfig.supportEmail}`} className="text-primary hover:underline">
                {policyConfig.supportEmail}
              </a>
            </div>
          </div>

          <div className="border-t border-base-300 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-base-content/50">
            <p className="m-0">
              © {new Date().getFullYear()} {policyConfig.developerName}. All rights reserved.
            </p>
            <p className="m-0">
              Designed for compliance with Google Play Store Policies & Indian DPDPA 2023.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
