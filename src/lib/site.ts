export interface Credential {
  id: string;
  short: string;
  title: string;
  code: string;
  authority: string;
  description: string;
  verificationUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  desc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  icon: string;
}

export interface PortConnectivity {
  name: string;
  code: string;
  distance: string;
  transitTime: string;
  type: string;
  berths: string;
  advantage: string;
}

export const COMPANY = {
  name: "Export India Hub",
  legalName: "Export India Hub",
  tagline: "Merchant Exporter & Global Sourcing Partner",
  subTagline: "Connecting India to Global Markets with Uncompromising Trade Integrity",
  proprietor: "Sakariya Divyang Mansukhbhai",
  email: "ExportIndiaHub@zohomail.in",
  phone: "+91 8200086858",
  phoneRaw: "918200086858",
  whatsappUrl: "https://wa.me/918200086858?text=Hello%20Export%20India%20Hub%20team,%20I%20would%20like%20to%20inquire%20about%20sourcing%20and%20export%20services.",
  address: {
    line1: "Block No. 15, Pitru Aashish, Om Residency",
    line2: "Near Kranti Manav Seva Trust, 80ft Road, Kuvadva Road",
    city: "Rajkot",
    state: "Gujarat",
    pincode: "360003",
    country: "India",
    full: "Block No. 15, Pitru Aashish, Om Residency, near Kranti Manav Seva Trust, 80ft Road, Kuvadva Road, Rajkot, Gujarat - 360003, India",
    mapsUrl: "https://maps.google.com/?q=Kuvadva+Road+Rajkot+Gujarat+360003"
  },
  established: "2024",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST (Export Desk operates 24/7 for overseas buyers)"
};

export const CREDENTIALS: Credential[] = [
  {
    id: "iec",
    short: "DGFT IEC",
    title: "Importer-Exporter Code (IEC)",
    code: "EFQPS5167K",
    authority: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Govt. of India",
    description: "Statutory 10-digit PAN-based alphanumeric identifier mandatory for all commercial customs clearance and foreign trade operations across Indian sea and air ports.",
    verificationUrl: "https://www.dgft.gov.in"
  },
  {
    id: "gstin",
    short: "GST Registered",
    title: "Goods & Services Tax Identification Number (GSTIN)",
    code: "24EFQPS5167K1ZM",
    authority: "Goods & Services Tax Network (GSTN), State of Gujarat, India",
    description: "State code 24 (Gujarat). Registered for Zero-Rated Export supplies (LUT / Letter of Undertaking and IGST Refund mechanism) ensuring seamless tax compliance.",
    verificationUrl: "https://www.gst.gov.in"
  },
  {
    id: "msme",
    short: "MSME Certified",
    title: "Udyam MSME Registration Certificate",
    code: "UDYAM-GJ-20-0312074",
    authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    description: "Recognized Indian enterprise category under Gujarat State Industrial Development Board for trade facilitation, priority export financing, and commercial support.",
    verificationUrl: "https://udyamregistration.gov.in"
  }
];

export const PORTS: PortConnectivity[] = [
  {
    name: "Mundra Port (Adani)",
    code: "INMUN1",
    distance: "230 km from Rajkot",
    transitTime: "4.5 – 5 Hours direct highway",
    type: "All-weather Deepwater Container Terminal",
    berths: "24 Berths / Dedicated container terminals",
    advantage: "India's largest commercial port with weekly direct container vessel calls to Europe, Middle East, USA & Far East."
  },
  {
    name: "Deendayal Port (Kandla)",
    code: "INIXY1",
    distance: "210 km from Rajkot",
    transitTime: "4 Hours direct multi-lane highway",
    type: "Major Port Authority of India",
    berths: "16 Dry Cargo Berths + Container handling",
    advantage: "Low port turnaround time, ideal for agri-bulk, minerals, hardware containers, and heavy machinery."
  },
  {
    name: "Pipavav Port (APM Terminals)",
    code: "INPAV1",
    distance: "215 km from Rajkot",
    transitTime: "4.5 Hours",
    type: "Modern Multi-commodity Container Port",
    berths: "Dedicated rail & container berths",
    advantage: "Exceptional connectivity to SE Asia, Middle East Gulf, and African trade lanes with minimal port congestion."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sourcing",
    title: "Global Sourcing & Procurement",
    shortTitle: "Global Sourcing",
    desc: "Customised vendor matching and contract-manufacturing sourcing across key Indian industrial hubs.",
    fullDesc: "We act as your dedicated on-the-ground procurement arm in India. Rather than pushing limited catalogue items, we match your exact CAD drawings, raw material chemistry, target price, and batch volume to verified manufacturing facilities across Rajkot, Jamnagar, Morbi, and Ahmedabad.",
    features: [
      "Rigorous factory audits & manufacturing capability vetting",
      "Factory-direct pricing negotiation with zero hidden markups",
      "Bilingual liaison between international buyers & Indian engineers",
      "Pre-production sample verification & laboratory metallurgical testing",
      "Contract manufacturing oversight under confidential NDA protection"
    ],
    deliverables: [
      "Vendor Feasibility Audit Report",
      "Technical Sample Approval Documentation",
      "Transparent Cost Breakdown (Factory Ex-Work + Port Handling)"
    ],
    icon: "PackageSearch"
  },
  {
    id: "quality",
    title: "Quality Assurance & Inspection",
    shortTitle: "Quality Assurance",
    desc: "On-site pre-shipment inspections, lab testing and strict compliance verification before dispatch.",
    fullDesc: "Zero-defect export delivery is our core promise. We implement an unyielding 3-Stage Quality Control Protocol: raw material batch verification, in-process production line checks, and 100% pre-shipment container stuffing inspection with full photographic and videographic proof.",
    features: [
      "Stage 1: Raw material metallurgical/chemical composition testing",
      "Stage 2: Random in-line dimensional tolerance checks (AQL 1.5/2.5 standard)",
      "Stage 3: Pre-shipment final inspection, packaging, barcode & labeling check",
      "Independent testing certification via accredited third-party labs (SGS/TUV/Intertek available on request)",
      "Continuous live photo/video dispatch sent directly to the buyer's team"
    ],
    deliverables: [
      "Comprehensive Pre-Shipment Inspection (PSI) Certificate",
      "High-resolution Container Stuffing & Seal Verification Photo Dossier",
      "Certificate of Analysis (CoA) & Mill Test Reports"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "docs",
    title: "Customs Clearance & Documentation",
    shortTitle: "Customs & Documentation",
    desc: "Expert handling of Bill of Lading, Certificate of Origin and all international trade documentation.",
    fullDesc: "International trade hinges on meticulous paperwork. One incorrect HS code or missing legalization stamp can stall shipments at destination customs. Our in-house export desk prepares, audits, and validates every single document required by the buyer's customs and negotiating bank.",
    features: [
      "Drafting and execution of commercial invoices with precise HS coding",
      "Packing lists with net, gross, tare weights and volumetric cubic meter (CBM) specs",
      "Certificate of Origin (Non-preferential & Preferential Chambers of Commerce)",
      "Phytosanitary & Fumigation certificates for wooden pallets / agri goods",
      "Full compliance with Letter of Credit (L/C) UCP 600 banking standards"
    ],
    deliverables: [
      "Clean On-Board Ocean Bill of Lading (OBL) / Express Telex Release",
      "Legalized Certificate of Origin",
      "Bank-negotiable Documentation Set sent via DHL Express"
    ],
    icon: "FileText"
  },
  {
    id: "freight",
    title: "End-to-End Freight & Logistics",
    shortTitle: "Freight & Logistics",
    desc: "Ocean and air freight coordination, container packing and supply-chain management under FOB, CIF and EXW.",
    fullDesc: "From factory dispatch in Gujarat to arrival at your destination seaport anywhere in the world. We coordinate road transit via heavy trailers to Mundra or Kandla, port yard clearance, secure container stuffing, fumigation, customs clearance, and global ocean freight booking.",
    features: [
      "Flexible Incoterms 2020: FOB (Mundra/Kandla), CIF, CFR, EXW, and CIP",
      "Full Container Load (20ft GP, 40ft HC, Open Top) & LCL consolidation",
      "Heavy-duty palletization, shrink-wrapping, desiccants and seaworthy strapping",
      "Ocean freight carrier partnerships with Maersk, MSC, CMA CGM, Hapag-Lloyd, ONE",
      "Comprehensive Marine Cargo Transit All-Risk Insurance coverage"
    ],
    deliverables: [
      "Container Stuffing Plan & Weight Scale Slip",
      "Shipping Bill for Export & Mate Receipt",
      "Real-time GPS Container & Vessel Tracking Link"
    ],
    icon: "Ship"
  }
];

export const COMMODITIES = [
  {
    category: "Precision Engineering & Foundry",
    cluster: "Rajkot & Shapar-Veraval Industrial Area",
    items: [
      "Cast Iron & Ductile Iron Castings",
      "Drop Forged Flanges & Precision Machine Parts",
      "Diesel Engine Spares & Submersible Water Pump Sets",
      "CNC/VMC Turned Components",
      "Bearings, Bushings & Industrial Gears"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Brass & Hardware Architectural Products",
    cluster: "Jamnagar & Rajkot Cluster",
    items: [
      "Brass Pipe Fittings, Hex Nipples & Bushings",
      "Architectural Door Handles, Hinges & Tower Bolts",
      "Precision Brass Fasteners, Screws & Inserts",
      "Gas Fittings, Valves & Sanitary Brassware",
      "Electrical Wiring Accessories & Neutral Links"
    ],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Agricultural Commodities & Spices",
    cluster: "Saurashtra Agri-Belt (Unjha / Gondal / Rajkot APMC)",
    items: [
      "Indian Cumin Seeds (Jeera) - Machine Cleaned 99% / 99.5%",
      "Natural & Hulled White Sesame Seeds",
      "Bold & Java Groundnut / Peanut Kernels (HPS)",
      "Coriander Seeds, Fennel Seeds & Fenugreek",
      "Raw Cotton Bales (Shankar-6) & Cotton Yarn"
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Ceramic Surfaces & Sanitaryware",
    cluster: "Morbi Industrial Cluster",
    items: [
      "Glazed Vitrified Tiles (GVT / PGVT) 60x120cm, 80x160cm",
      "Heavy-duty Porcelain Floor Slabs",
      "Ceramic Wall Tiles & Subways",
      "Water Closets, Counter Wash Basins & Sanitaryware",
      "High-pressure Industrial Porcelain Tiles"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Commercial Cookware & Stainless Steel",
    cluster: "Rajkot Kitchenware Hub",
    items: [
      "Stainless Steel Commercial Kitchen Utensils",
      "Heavy-gauge Aluminium Pressure Cookers",
      "Non-stick PTFE / Ceramic Cookware Sets",
      "Rotary Flour Mills & Domestic Food Processing Machines",
      "Commercial Tableware & Hotelware"
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  }
];

export const TRADE_STEPS = [
  {
    step: "01",
    title: "Requirement Analysis & Specification Mapping",
    subtitle: "Precision RFQ Alignment",
    desc: "We capture your commodity, grade, volume, packaging, destination port and Incoterm preference, then map it to a precise technical specification.",
    duration: "24 – 48 Hours",
    checks: [
      "Detailed parameter capture (dimensions, chemistry, purity %, mesh size)",
      "Destination country import tariff & regulatory review",
      "Incoterms selection (FOB Mundra vs CIF Destination)"
    ]
  },
  {
    step: "02",
    title: "Vendor Sourcing & Quality Audit",
    subtitle: "Manufacturer Verification",
    desc: "We shortlist qualified Indian manufacturers, audit their capability and present a consolidated FOB / CIF quotation with lead times.",
    duration: "2 – 4 Days",
    checks: [
      "Physical factory audit & machine capacity inspection",
      "Verification of raw material sourcing channels",
      "Sample extraction & lab test validation"
    ]
  },
  {
    step: "03",
    title: "Contract Finalisation & Pre-Shipment Inspection",
    subtitle: "Commitment & Quality Control",
    desc: "Commercial terms and payment security (L/C or T/T) are agreed; production is monitored and the batch is inspected before dispatch.",
    duration: "During Production",
    checks: [
      "Formal Proforma Invoice (PI) & Sales Contract execution",
      "Establishment of Irrevocable L/C or agreed T/T milestones",
      "Stage-3 Pre-Shipment Inspection (PSI) with photo/video proof"
    ]
  },
  {
    step: "04",
    title: "Customs Clearing, Documentation & Delivery",
    subtitle: "Port Clearance & Ocean Transit",
    desc: "Container stuffing, export customs clearance at Mundra / Kandla, complete document set to you or your bank, and tracking to arrival.",
    duration: "Vessel Sailing Schedule",
    checks: [
      "Seaworthy container stuffing & customs seal check",
      "Customs EDI Shipping Bill approval at Mundra/Kandla Port",
      "Prompt courier of Bill of Lading & Certificate of Origin"
    ]
  }
];

export const INCOTERMS = [
  {
    code: "FOB",
    name: "Free On Board (Mundra / Kandla)",
    description: "Seller handles all factory dispatch, inland transport, export customs, and port loading costs. Buyer books ocean freight and insurance.",
    recommendedFor: "Buyers with their own freight forwarder contracts."
  },
  {
    code: "CIF",
    name: "Cost, Insurance & Freight (Destination Port)",
    description: "Seller handles everything including ocean vessel freight and marine insurance right up to arrival at your destination port.",
    recommendedFor: "Most popular for hassle-free all-inclusive landed pricing."
  },
  {
    code: "CFR",
    name: "Cost and Freight (Destination Port)",
    description: "Seller covers manufacturing, port clearance, and ocean freight to buyer's destination port. Buyer arranges marine cargo insurance.",
    recommendedFor: "Importers with corporate marine open insurance policies."
  },
  {
    code: "EXW",
    name: "Ex Works (Factory Floor, Rajkot / Gujarat)",
    description: "Buyer collects goods directly at the factory gate and manages all transit, customs, and port operations.",
    recommendedFor: "International procurement agencies with local freight agents."
  }
];

export const STATS = [
  { value: "100%", label: "Export Compliant", sub: "DGFT & Customs aligned" },
  { value: "3-Stage", label: "Certified Quality Checks", sub: "Pre-production to pre-shipment" },
  { value: "FOB · CIF · EXW", label: "Global Shipping Network", sub: "Via Mundra & Kandla ports" },
  { value: "24h", label: "RFQ Turnaround", sub: "Feasibility & landed quote" }
];

export const WHY = [
  {
    icon: "Handshake",
    title: "Transparency & Integrity in Contract Terms",
    desc: "Clear quotations, documented specifications and milestone updates — no hidden margins, no surprises at the port."
  },
  {
    icon: "ClipboardCheck",
    title: "Rigorous Quality Control Process",
    desc: "Every consignment is inspected against your agreed specification, with photo and video proof before the container is sealed."
  },
  {
    icon: "Factory",
    title: "Competitive Sourcing from Rajkot & Western India",
    desc: "Direct access to the engineering, casting, forging, hardware and agri-processing belts of Saurashtra and Gujarat."
  },
  {
    icon: "Scale",
    title: "Global Trade Standards & Secure Payments",
    desc: "Documentation aligned with international practice and secure payment structures — Irrevocable L/C at Sight and T/T Wire."
  }
];

export const TICKER_ITEMS = [
  "DGFT IEC: EFQPS5167K",
  "GSTIN: 24EFQPS5167K1ZM",
  "UDYAM: UDYAM-GJ-20-0312074",
  "PORTS: MUNDRA (230km) · KANDLA (210km) · PIPAVAV",
  "PAYMENT: IRREVOCABLE L/C AT SIGHT · T/T WIRE",
  "INCOTERMS 2020: FOB · CIF · CFR · EXW",
  "HUBS: RAJKOT · JAMNAGAR · MORBI · AHMEDABAD",
  "PROMPT 24H RFQ DESK"
];
