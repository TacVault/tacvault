'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

const productsData = [
  { id: "crye-jpc-2", brand: "Crye Precision", name: "JPC 2.0", category: "plate-carriers", urlSlug: "/products/crye-precision/jpc-2-0" },
  { id: "ferro-slickster", brand: "Ferro Concepts", name: "Slickster", category: "plate-carriers", urlSlug: "/products/ferro-concepts/slickster" },
  { id: "dm-mepc", brand: "Defense Mechanisms", name: "MEPC", category: "plate-carriers", urlSlug: "/products/defense-mechanisms/mepc" },
  { id: "trex-ac1-5", brand: "T.REX Arms", name: "AC1.5", category: "plate-carriers", urlSlug: "/products/trex-arms/ac1-5" },
  { id: "spiritus-lv120", brand: "Spiritus Systems", name: "LV-120 OVERT", category: "plate-carriers", urlSlug: "/products/spiritus-systems/lv-120" },
  { id: "condor-sentry", brand: "Condor", name: "Sentry", category: "plate-carriers", urlSlug: "/products/condor/sentry" },
  { id: "shellback-banshee-elite-2", brand: "Shellback Tactical", name: "Banshee Elite 2.0", category: "plate-carriers", urlSlug: "/products/shellback-tactical/banshee-elite-2-0" },
  { id: "haley-d3crm", brand: "Haley Strategic", name: "D3CRM Micro", category: "placards", urlSlug: "/products/haley-strategic/d3crm" },
  { id: "spiritus-microfight-mk5", brand: "Spiritus Systems", name: "Micro Fight Mk5", category: "placards", urlSlug: "/products/spiritus-systems/micro-fight-mk5" },
  { id: "ferro-ktar", brand: "Ferro Concepts", name: "KTAR Front Flap", category: "placards", urlSlug: "/products/ferro-concepts/ktar" },
  { id: "esstac-daeodon", brand: "Esstac", name: "Daeodon Front Panel", category: "placards", urlSlug: "/products/esstac/daeodon" },
  { id: "crye-airlite-flap", brand: "Crye Precision", name: "AirLite Detachable Flap", category: "placards", urlSlug: "/products/crye-precision/airlite-flap" },
  { id: "crye-skeletal-cummerbund", brand: "Crye Precision", name: "Skeletal Cummerbund", category: "cummerbunds", urlSlug: "/products/crye-precision/skeletal-cummerbund" },
  { id: "crye-avs-cummerbund", brand: "Crye Precision", name: "AVS Cummerbund", category: "cummerbunds", urlSlug: "/products/crye-precision/avs-cummerbund" },
  { id: "ferro-carry-elastic", brand: "Ferro Concepts", name: "Carry Elastic Cummerbund", category: "cummerbunds", urlSlug: "/products/ferro-concepts/carry-elastic" },
  { id: "ferro-molle-cummerbund", brand: "Ferro Concepts", name: "MOLLE Cummerbund", category: "cummerbunds", urlSlug: "/products/ferro-concepts/molle-cummerbund" },
  { id: "spiritus-tubes-cummerbund", brand: "Spiritus Systems", name: "Reactive Cummerbund (TUBES)", category: "cummerbunds", urlSlug: "/products/spiritus-systems/tubes-cummerbund" },
  { id: "shaw-arc-cummerbund", brand: "Shaw Concepts", name: "ARC Cummerbund", category: "cummerbunds", urlSlug: "/products/shaw-concepts/arc-cummerbund" },
  { id: "axl-equinox", brand: "AXL Advanced", name: "Equinox Cummerbund", category: "cummerbunds", urlSlug: "/products/axl-advanced/equinox" },
  { id: "crye-zip-on-panel", brand: "Crye Precision", name: "ZIP-ON Panel 2.0", category: "back-panels", urlSlug: "/products/crye-precision/zip-on-panel" },
  { id: "spiritus-lv119-backpanel", brand: "Spiritus Systems", name: "LV-119 Back Panel", category: "back-panels", urlSlug: "/products/spiritus-systems/lv119-backpanel" },
  { id: "spiritus-lv120-backpanel", brand: "Spiritus Systems", name: "LV-120 Back Panel", category: "back-panels", urlSlug: "/products/spiritus-systems/lv120-backpanel" },
  { id: "hesco-4401", brand: "Hesco", name: "4401 Level IV", category: "plates", urlSlug: "/products/hesco/4401" },
  { id: "hesco-l210", brand: "Hesco", name: "L210 Special Threat", category: "plates", urlSlug: "/products/hesco/l210" },
  { id: "rma-1155", brand: "RMA Defense", name: "1155 Level IV", category: "plates", urlSlug: "/products/rma-defense/1155" },
  { id: "highcom-4s17m", brand: "HighCom", name: "4S17M Level IV Multi-Curve", category: "plates", urlSlug: "/products/highcom/4s17m" },
];

const evidenceData = [
  { id: "ev-crye-jpc-skeletal", sourceType: "manufacturer", sourceName: "Crye Precision", sourceUrl: "https://cryeprecision.com", shortQuote: "Features the Skeletal Cummerbund system", dateCaptured: "2026-02-01" },
  { id: "ev-crye-avs-compat", sourceType: "manufacturer", sourceName: "Crye Precision", sourceUrl: "https://cryeprecision.com", shortQuote: "Compatible with AVS zip-on panels", dateCaptured: "2026-02-01" },
  { id: "ev-haley-d3crm-swiftclip", sourceType: "manufacturer", sourceName: "Haley Strategic", sourceUrl: "https://haleystrategic.com", shortQuote: "Attaches via the included Swift Clips", dateCaptured: "2026-02-01" },
  { id: "ev-reddit-jpc-d3crm-1", sourceType: "community", sourceName: "Reddit r/tacticalgear", sourceUrl: "https://reddit.com/r/tacticalgear", shortQuote: "Running D3CRM on my JPC 2.0, works perfectly", dateCaptured: "2026-01-15" },
  { id: "ev-reddit-jpc-d3crm-2", sourceType: "community", sourceName: "Reddit r/QualityTacticalGear", sourceUrl: "https://reddit.com/r/QualityTacticalGear", shortQuote: "D3CRM + JPC 2.0 is the classic combo", dateCaptured: "2026-01-20" },
  { id: "ev-youtube-jpc-d3crm", sourceType: "community", sourceName: "Garand Thumb (YouTube)", sourceUrl: "https://youtube.com", shortQuote: "Demonstrated D3CRM attachment on JPC 2.0", dateCaptured: "2026-01-10" },
  { id: "ev-ferro-slickster-adapt", sourceType: "manufacturer", sourceName: "Ferro Concepts", sourceUrl: "https://ferroconcepts.com", shortQuote: "ADAPT front panel system compatible", dateCaptured: "2026-02-01" },
  { id: "ev-ferro-slickster-cummerbund", sourceType: "manufacturer", sourceName: "Ferro Concepts", sourceUrl: "https://ferroconcepts.com", shortQuote: "Works with all Ferro Concepts cummerbunds", dateCaptured: "2026-02-01" },
  { id: "ev-spiritus-microfight-swiftclip", sourceType: "manufacturer", sourceName: "Spiritus Systems", sourceUrl: "https://spiritussystems.com", shortQuote: "Includes swift clip attachment hardware", dateCaptured: "2026-02-01" },
  { id: "ev-reddit-slickster-d3crm-1", sourceType: "community", sourceName: "Reddit r/tacticalgear", sourceUrl: "https://reddit.com/r/tacticalgear", shortQuote: "D3CRM works great on Slickster", dateCaptured: "2026-01-18" },
  { id: "ev-reddit-slickster-d3crm-2", sourceType: "community", sourceName: "Reddit r/QualityTacticalGear", sourceUrl: "https://reddit.com/r/QualityTacticalGear", shortQuote: "Using swift clips on Slickster, solid attachment", dateCaptured: "2026-01-22" },
  { id: "ev-arfcom-slickster-d3crm", sourceType: "community", sourceName: "AR15.com", sourceUrl: "https://ar15.com/forums", shortQuote: "Confirmed working: Slickster + D3CRM", dateCaptured: "2026-01-12" },
  { id: "ev-dm-mepc-plates", sourceType: "manufacturer", sourceName: "Defense Mechanisms", sourceUrl: "https://defensemechanisms.com", shortQuote: "Fits SAPI S/M/L/XL and 10x12 Swimmer Cut plates", dateCaptured: "2026-02-01" },
  { id: "ev-spiritus-lv120-zipper", sourceType: "manufacturer", sourceName: "Spiritus Systems", sourceUrl: "https://spiritussystems.com", shortQuote: "Uses new #10 Universal Zipper - NOT compatible with LV-119 panels", dateCaptured: "2026-02-01" },
  { id: "ev-spiritus-lv120-tubes", sourceType: "manufacturer", sourceName: "Spiritus Systems", sourceUrl: "https://spiritussystems.com", shortQuote: "Features integrated First Spear TUBES quick-release", dateCaptured: "2026-02-01" },
  { id: "ev-hesco-4401-dims", sourceType: "manufacturer", sourceName: "Hesco", sourceUrl: "https://hesco.com", shortQuote: "10x12 Shooters Cut, 1.0 inch thick", dateCaptured: "2026-02-01" },
  { id: "ev-reddit-jpc-hesco-1", sourceType: "community", sourceName: "Reddit r/tacticalgear", sourceUrl: "https://reddit.com/r/tacticalgear", shortQuote: "4401s fit in my Medium JPC perfectly", dateCaptured: "2026-01-25" },
  { id: "ev-reddit-jpc-hesco-2", sourceType: "community", sourceName: "Reddit r/QualityTacticalGear", sourceUrl: "https://reddit.com/r/QualityTacticalGear", shortQuote: "JPC 2.0 + Hesco 4401 is the starter combo", dateCaptured: "2026-01-28" },
  { id: "ev-youtube-jpc-hesco", sourceType: "community", sourceName: "Armor Standards (YouTube)", sourceUrl: "https://youtube.com", shortQuote: "Demonstrated Hesco 4401 installation in JPC 2.0", dateCaptured: "2026-01-08" },
  { id: "ev-axl-equinox-jpc", sourceType: "manufacturer", sourceName: "AXL Advanced", sourceUrl: "https://axladv.com", shortQuote: "Direct replacement for JPC/AVS skeletal cummerbund", dateCaptured: "2026-02-01" },
  { id: "ev-crye-zipon-avs", sourceType: "manufacturer", sourceName: "Crye Precision", sourceUrl: "https://cryeprecision.com", shortQuote: "Compatible with JPC 2.0, AVS, and other Crye carriers", dateCaptured: "2026-02-01" },
  { id: "ev-spiritus-lv119-incompatible", sourceType: "manufacturer", sourceName: "Spiritus Systems", sourceUrl: "https://spiritussystems.com", shortQuote: "LV-119 back panels are NOT compatible with LV-120", dateCaptured: "2026-02-01" },
];

const compatData = [
  { id: "compat-jpc2-d3crm", fromProductId: "crye-jpc-2", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Attaches via swift clips to front loop panel", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip", "ev-reddit-jpc-d3crm-1", "ev-reddit-jpc-d3crm-2", "ev-youtube-jpc-d3crm"] },
  { id: "compat-jpc2-microfight", fromProductId: "crye-jpc-2", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Attaches via swift clips", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-microfight-swiftclip", "ev-reddit-jpc-d3crm-1", "ev-reddit-jpc-d3crm-2"] },
  { id: "compat-jpc2-crye-flap", fromProductId: "crye-jpc-2", toProductId: "crye-airlite-flap", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Designed for JPC and other Crye carriers", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-crye-jpc-skeletal"] },
  { id: "compat-jpc2-ferro-ktar", fromProductId: "crye-jpc-2", toProductId: "ferro-ktar", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clip interface compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip", "ev-reddit-jpc-d3crm-1", "ev-reddit-jpc-d3crm-2"] },
  { id: "compat-jpc2-esstac", fromProductId: "crye-jpc-2", toProductId: "esstac-daeodon", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Attaches via swift clips", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip", "ev-reddit-jpc-d3crm-1", "ev-reddit-jpc-d3crm-2"] },
  { id: "compat-jpc2-skeletal-cummerbund", fromProductId: "crye-jpc-2", toProductId: "crye-skeletal-cummerbund", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Stock cummerbund, included with carrier", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-crye-jpc-skeletal"] },
  { id: "compat-jpc2-avs-cummerbund", fromProductId: "crye-jpc-2", toProductId: "crye-avs-cummerbund", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Direct swap for skeletal cummerbund", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-crye-jpc-skeletal", "ev-crye-avs-compat"] },
  { id: "compat-jpc2-axl-equinox", fromProductId: "crye-jpc-2", toProductId: "axl-equinox", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Designed as direct replacement with TUBES upgrade", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-axl-equinox-jpc"] },
  { id: "compat-jpc2-zipon", fromProductId: "crye-jpc-2", toProductId: "crye-zip-on-panel", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Uses AVS zipper system", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-crye-avs-compat", "ev-crye-zipon-avs"] },
  { id: "compat-jpc2-hesco4401", fromProductId: "crye-jpc-2", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits in Medium JPC", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-hesco-4401-dims", "ev-reddit-jpc-hesco-1", "ev-reddit-jpc-hesco-2", "ev-youtube-jpc-hesco"] },
  { id: "compat-jpc2-hesco-l210", fromProductId: "crye-jpc-2", toProductId: "hesco-l210", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits in Medium JPC, lightweight option", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-reddit-jpc-hesco-1", "ev-reddit-jpc-hesco-2", "ev-youtube-jpc-hesco"] },
  { id: "compat-jpc2-rma1155", fromProductId: "crye-jpc-2", toProductId: "rma-1155", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits in Medium JPC, heavier Level IV option", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-reddit-jpc-hesco-1", "ev-reddit-jpc-hesco-2"] },
  { id: "compat-slickster-d3crm", fromProductId: "ferro-slickster", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Attaches via swift clips or Velcro one wrap", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-reddit-slickster-d3crm-1", "ev-reddit-slickster-d3crm-2", "ev-arfcom-slickster-d3crm"] },
  { id: "compat-slickster-microfight", fromProductId: "ferro-slickster", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Attaches via swift clips", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-reddit-slickster-d3crm-1", "ev-reddit-slickster-d3crm-2", "ev-arfcom-slickster-d3crm"] },
  { id: "compat-slickster-ktar", fromProductId: "ferro-slickster", toProductId: "ferro-ktar", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "ADAPT compatible, designed for Ferro carriers", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-ferro-slickster-adapt"] },
  { id: "compat-slickster-carry-elastic", fromProductId: "ferro-slickster", toProductId: "ferro-carry-elastic", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Designed for Slickster", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-ferro-slickster-cummerbund"] },
  { id: "compat-slickster-molle-cummerbund", fromProductId: "ferro-slickster", toProductId: "ferro-molle-cummerbund", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Designed for Slickster", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-ferro-slickster-cummerbund"] },
  { id: "compat-slickster-shaw-arc", fromProductId: "ferro-slickster", toProductId: "shaw-arc-cummerbund", relationshipType: "WORKS_WITH", status: "LIKELY", notes: "Same velcro interface as Ferro cummerbunds", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-ferro-slickster-cummerbund"] },
  { id: "compat-slickster-hesco4401", fromProductId: "ferro-slickster", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits in M/L Slickster", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-hesco-4401-dims", "ev-reddit-slickster-d3crm-1", "ev-reddit-slickster-d3crm-2"] },
  { id: "compat-slickster-l210", fromProductId: "ferro-slickster", toProductId: "hesco-l210", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 lightweight option, ideal for slick setup", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-reddit-slickster-d3crm-1", "ev-reddit-slickster-d3crm-2"] },
  { id: "compat-mepc-d3crm", fromProductId: "dm-mepc", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clips compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-dm-mepc-plates", "ev-haley-d3crm-swiftclip"] },
  { id: "compat-mepc-microfight", fromProductId: "dm-mepc", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clips compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-dm-mepc-plates", "ev-spiritus-microfight-swiftclip"] },
  { id: "compat-mepc-hesco4401", fromProductId: "dm-mepc", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits MEPC", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-dm-mepc-plates", "ev-hesco-4401-dims"] },
  { id: "compat-mepc-rma1155", fromProductId: "dm-mepc", toProductId: "rma-1155", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Popular budget combo", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-dm-mepc-plates"] },
  { id: "compat-lv120-microfight", fromProductId: "spiritus-lv120", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Designed for Spiritus carriers", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-microfight-swiftclip", "ev-spiritus-lv120-tubes"] },
  { id: "compat-lv120-d3crm", fromProductId: "spiritus-lv120", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clips compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip", "ev-spiritus-lv120-tubes"] },
  { id: "compat-lv120-tubes-cummerbund", fromProductId: "spiritus-lv120", toProductId: "spiritus-tubes-cummerbund", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Included with LV-120", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-lv120-tubes"] },
  { id: "compat-lv120-lv120-backpanel", fromProductId: "spiritus-lv120", toProductId: "spiritus-lv120-backpanel", relationshipType: "WORKS_WITH", status: "OFFICIAL", notes: "Uses new #10 Universal Zipper", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-lv120-zipper"] },
  { id: "compat-lv120-lv119-backpanel", fromProductId: "spiritus-lv120", toProductId: "spiritus-lv119-backpanel", relationshipType: "CONFLICTS", status: "OFFICIAL", notes: "NOT COMPATIBLE - Different zipper size (#10 vs LV-119 zipper)", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-lv119-incompatible", "ev-spiritus-lv120-zipper"] },
  { id: "compat-lv120-hesco4401", fromProductId: "spiritus-lv120", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "SAPI-sized plates fit LV-120", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-lv120-tubes", "ev-hesco-4401-dims"] },
  { id: "compat-ac15-d3crm", fromProductId: "trex-ac1-5", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clips compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip"] },
  { id: "compat-ac15-microfight", fromProductId: "trex-ac1-5", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "Swift clips compatible", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-microfight-swiftclip"] },
  { id: "compat-ac15-hesco4401", fromProductId: "trex-ac1-5", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits AC1.5", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-hesco-4401-dims"] },
  { id: "compat-condor-hesco4401", fromProductId: "condor-sentry", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits Condor Sentry", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-hesco-4401-dims"] },
  { id: "compat-condor-rma1155", fromProductId: "condor-sentry", toProductId: "rma-1155", relationshipType: "WORKS_WITH", status: "LIKELY", notes: "Popular budget combo (10x12 dimensions match)", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: [] },
  { id: "compat-banshee-d3crm", fromProductId: "shellback-banshee-elite-2", toProductId: "haley-d3crm", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "QASM compatible front", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-haley-d3crm-swiftclip"] },
  { id: "compat-banshee-microfight", fromProductId: "shellback-banshee-elite-2", toProductId: "spiritus-microfight-mk5", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "QASM compatible front", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-spiritus-microfight-swiftclip"] },
  { id: "compat-banshee-hesco4401", fromProductId: "shellback-banshee-elite-2", toProductId: "hesco-4401", relationshipType: "WORKS_WITH", status: "VERIFIED", notes: "10x12 fits Banshee Elite 2.0", requirements: null, lastVerifiedDate: "2026-02-01", evidenceIds: ["ev-hesco-4401-dims"] },
];

const categories = [
  { id: 'plate-carriers', name: 'Plate Carriers' },
  { id: 'placards', name: 'Placards & Chest Rigs' },
  { id: 'cummerbunds', name: 'Cummerbunds' },
  { id: 'back-panels', name: 'Back Panels (Zip-On)' },
  { id: 'plates', name: 'Plates' },
];

const statusInfo: Record<string, { label: string; color: string; bg: string; border: string; description: string }> = {
  OFFICIAL: { label: 'Official', color: 'text-[#4a9c6d]', bg: 'bg-[rgba(74,156,109,0.1)]', border: 'border-[rgba(74,156,109,0.3)]', description: 'Confirmed by manufacturer documentation or official support' },
  VERIFIED: { label: 'Verified', color: 'text-[#5b9fd4]', bg: 'bg-[rgba(91,159,212,0.1)]', border: 'border-[rgba(91,159,212,0.3)]', description: 'Confirmed by 3+ independent real-world reports' },
  LIKELY: { label: 'Likely', color: 'text-[#d4a55b]', bg: 'bg-[rgba(212,165,91,0.1)]', border: 'border-[rgba(212,165,91,0.3)]', description: 'Dimensional/interface match, no confirmed failures' },
  UNVERIFIED: { label: 'Unverified', color: 'text-[#8b939c]', bg: 'bg-[rgba(139,147,156,0.1)]', border: 'border-[rgba(139,147,156,0.3)]', description: 'Reported once or unclear - shown for transparency' },
};

const relationshipLabels: Record<string, { label: string; icon: string }> = {
  WORKS_WITH: { label: 'Compatible', icon: '✓' },
  REQUIRES_ADAPTER: { label: 'Requires Adapter', icon: '⚡' },
  CONFLICTS: { label: 'Not Compatible', icon: '✗' },
};

export default function CompatibilityPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [targetCategory, setTargetCategory] = useState('');
  const [expandedEvidence, setExpandedEvidence] = useState<string | null>(null);
  const [showStatusIndex, setShowStatusIndex] = useState(false);

  const productsInCategory = useMemo(() => {
    if (!selectedCategory) return [];
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const compatibleProducts = useMemo(() => {
    if (!selectedProduct || !targetCategory) return [];
    const edges = compatData.filter(edge => edge.fromProductId === selectedProduct);
    const results: Array<{ product: typeof productsData[0]; edge: typeof compatData[0]; evidenceList: typeof evidenceData }> = [];
    edges.forEach(edge => {
      const product = productsData.find(p => p.id === edge.toProductId);
      if (product && product.category === targetCategory) {
        const evidenceList = edge.evidenceIds.map(evId => evidenceData.find(e => e.id === evId)).filter((e): e is typeof evidenceData[0] => e !== undefined);
        results.push({ product, edge, evidenceList });
      }
    });
    const statusOrder: Record<string, number> = { OFFICIAL: 0, VERIFIED: 1, LIKELY: 2, UNVERIFIED: 3 };
    const relationOrder: Record<string, number> = { WORKS_WITH: 0, REQUIRES_ADAPTER: 1, CONFLICTS: 2 };
    return results.sort((a, b) => {
      const statusDiff = (statusOrder[a.edge.status] ?? 4) - (statusOrder[b.edge.status] ?? 4);
      if (statusDiff !== 0) return statusDiff;
      return (relationOrder[a.edge.relationshipType] ?? 3) - (relationOrder[b.edge.relationshipType] ?? 3);
    });
  }, [selectedProduct, targetCategory]);

  const selectedProductData = productsData.find(p => p.id === selectedProduct);

  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-rajdhani font-bold text-4xl mb-2">Compatibility Finder</h1>
          <p className="text-[#8b939c]">Find gear that works with what you own. Every compatibility claim is backed by evidence.</p>
        </div>

        <button onClick={() => setShowStatusIndex(!showStatusIndex)} className="mb-6 text-sm text-[#a8b2bc] hover:text-[#e8eaed] flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
          {showStatusIndex ? 'Hide' : 'Show'} Status Definitions
        </button>

        {showStatusIndex && (
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6 mb-8">
            <h3 className="font-rajdhani font-bold text-lg mb-4 text-[#c8cfd7]">Compatibility Status Index</h3>
            <div className="space-y-3">
              {Object.entries(statusInfo).map(([key, info]) => (
                <div key={key} className="flex items-start gap-3">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded ${info.bg} ${info.color} ${info.border} border`}>{info.label}</span>
                  <span className="text-sm text-[#8b939c]">{info.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">What do you own?</h3>
              <div className="mb-4">
                <label className="block text-sm text-[#8b939c] mb-2">Category</label>
                <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setSelectedProduct(''); }} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none">
                  <option value="">Select category...</option>
                  {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#8b939c] mb-2">Product</label>
                <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} disabled={!selectedCategory} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none disabled:opacity-50">
                  <option value="">Select product...</option>
                  {productsInCategory.map(product => <option key={product.id} value={product.id}>{product.brand} {product.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">What are you looking for?</h3>
              <div>
                <label className="block text-sm text-[#8b939c] mb-2">Category</label>
                <select value={targetCategory} onChange={(e) => setTargetCategory(e.target.value)} disabled={!selectedProduct} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none disabled:opacity-50">
                  <option value="">Select category...</option>
                  {categories.filter(c => c.id !== selectedCategory).map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {selectedProduct && targetCategory && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-rajdhani font-bold text-xl text-[#c8cfd7]">{categories.find(c => c.id === targetCategory)?.name} compatible with {selectedProductData?.brand} {selectedProductData?.name}</h2>
              <span className="text-sm text-[#8b939c]">{compatibleProducts.length} result{compatibleProducts.length !== 1 ? 's' : ''}</span>
            </div>
            {compatibleProducts.length === 0 ? (
              <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-8 text-center">
                <p className="text-[#8b939c]">No compatibility data found for this combination.</p>
                <p className="text-sm text-[#555a61] mt-2">We only show verified compatibility — if it is not here, we have not confirmed it yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {compatibleProducts.map(({ product, edge, evidenceList }) => {
                  const status = statusInfo[edge.status];
                  const relationship = relationshipLabels[edge.relationshipType];
                  const isExpanded = expandedEvidence === edge.id;
                  const isConflict = edge.relationshipType === 'CONFLICTS';
                  return (
                    <div key={edge.id} className={`bg-[#121416] border rounded-lg overflow-hidden ${isConflict ? 'border-[rgba(156,74,74,0.3)]' : 'border-[#1e2124]'}`}>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${status.bg} ${status.color} ${status.border} border`}>{status.label}</span>
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${isConflict ? 'bg-[rgba(156,74,74,0.1)] text-[#9c4a4a] border border-[rgba(156,74,74,0.3)]' : edge.relationshipType === 'REQUIRES_ADAPTER' ? 'bg-[rgba(212,165,91,0.1)] text-[#d4a55b] border border-[rgba(212,165,91,0.3)]' : 'bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]'}`}>{relationship.icon} {relationship.label}</span>
                            </div>
                            <Link href={product.urlSlug} className="font-rajdhani font-bold text-lg text-[#e8eaed] hover:text-[#a8b2bc] transition-colors">{product.brand} {product.name}</Link>
                            {edge.notes && <p className="text-sm text-[#8b939c] mt-1">{edge.notes}</p>}
                            {edge.requirements && <p className="text-sm text-[#d4a55b] mt-1">⚡ Requires: {edge.requirements}</p>}
                            <p className="text-xs text-[#555a61] mt-2">Last verified: {edge.lastVerifiedDate}</p>
                          </div>
                          <Link href={product.urlSlug} className="px-3 py-1.5 bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded text-sm text-[#a8b2bc] hover:border-[#5c6370] transition-colors whitespace-nowrap">View Product →</Link>
                        </div>
                        {evidenceList.length > 0 && (
                          <button onClick={() => setExpandedEvidence(isExpanded ? null : edge.id)} className="mt-3 text-sm text-[#a8b2bc] hover:text-[#e8eaed] flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}><polyline points="9 18 15 12 9 6" /></svg>
                            {evidenceList.length} source{evidenceList.length !== 1 ? 's' : ''} — {isExpanded ? 'Hide' : 'Show'} evidence
                          </button>
                        )}
                      </div>
                      {isExpanded && evidenceList.length > 0 && (
                        <div className="border-t border-[#1e2124] bg-[#0e1011] p-4">
                          <h4 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-3">Evidence Sources</h4>
                          <div className="space-y-3">
                            {evidenceList.map(ev => (
                              <div key={ev.id} className="flex items-start gap-3">
                                <span className={`px-2 py-0.5 text-xs font-medium rounded ${ev.sourceType === 'manufacturer' ? 'bg-[rgba(74,156,109,0.1)] text-[#4a9c6d]' : ev.sourceType === 'community' ? 'bg-[rgba(91,159,212,0.1)] text-[#5b9fd4]' : 'bg-[rgba(139,147,156,0.1)] text-[#8b939c]'}`}>{ev.sourceType}</span>
                                <div className="flex-1">
                                  <p className="text-sm text-[#e8eaed]">{ev.shortQuote}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <a href={ev.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#a8b2bc] hover:text-[#e8eaed]">{ev.sourceName} →</a>
                                    <span className="text-xs text-[#555a61]">Captured {ev.dateCaptured}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {!selectedProduct && (
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(139,157,170,0.08)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c6370" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl text-[#c8cfd7] mb-2">Start by selecting what you own</h3>
            <p className="text-sm text-[#8b939c] max-w-md mx-auto">Choose a category and product above to find compatible gear. We will show you what works, what does not, and the evidence behind each claim.</p>
          </div>
        )}

        <div className="mt-12 pt-6 border-t border-[#1e2124] text-xs text-[#555a61]">
          <p><strong>How this works:</strong> Every compatibility claim requires evidence. Official means manufacturer-confirmed. Verified requires 3+ independent sources. We show what we can prove — if something is not listed, we have not verified it yet.</p>
        </div>
      </div>
    </main>
  );
}