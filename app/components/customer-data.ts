export interface Customer {
  id: number;
  name: string;
  membership: "Gold Member" | "Silver Member" | "Diamond Member";
  phone: string;
  email: string;
  city: string;
  progress: number;
  balance: number;
  status: "Active" | "Inactive";
  image: string;
  kycVerified: boolean;
  totalPurchases: number;
  joinedDate: string;
}

export interface PurchaseRecord {
  id: string;
  customerId: number;
  customerName: string;
  item: string;
  category: "Gold" | "Diamond" | "Silver" | "Platinum";
  weightGrams: number;
  purity: string;
  amount: number;
  date: string;
  paymentMethod: "UPI" | "Card" | "Net Banking" | "Cash";
  invoiceNo: string;
  status: "Completed" | "Pending" | "Refunded";
}

export interface LoyaltyRecord {
  customerId: number;
  customerName: string;
  tier: "Silver" | "Gold" | "Diamond";
  pointsBalance: number;
  totalEarned: number;
  totalRedeemed: number;
  lastActivity: string;
}

export interface GoldSchemeRecord {
  id: string;
  customerId: number;
  customerName: string;
  schemeName: string; // e.g. "11+1 Swarna Savings Scheme"
  monthlyInstallment: number;
  paidInstallments: number;
  totalInstallments: number; // e.g. 11
  accumulatedWeight: number; // in grams
  startDate: string;
  maturityDate: string;
  status: "Active" | "Matured" | "Completed" | "Defaulted";
}

export interface LedgerEntry {
  id: string;
  customerId: number;
  customerName: string;
  date: string;
  description: string;
  referenceNo: string;
  debit: number;
  credit: number;
  runningBalance: number;
  type: "Purchase" | "Payment Received" | "Gold Exchange" | "Scheme Contribution" | "Refund";
}

export interface KYCDocument {
  id: string;
  customerId: number;
  customerName: string;
  documentType: "Aadhaar Card" | "PAN Card" | "Passport" | "GSTIN Certificate";
  documentNumber: string;
  uploadDate: string;
  status: "Verified" | "Pending" | "Rejected";
  fileSize: string;
}

export interface CustomerFeedback {
  id: string;
  customerId: number;
  customerName: string;
  rating: number; // 1 to 5
  category: "Product Quality" | "Store Experience" | "Customer Service" | "Scheme Delivery";
  comment: string;
  date: string;
  status: "Open" | "In Progress" | "Resolved";
}

export const customers: Customer[] = [
  {
    id: 1,
    name: "Amit Verma",
    membership: "Gold Member",
    phone: "+91 9876543210",
    email: "amit.verma@email.com",
    city: "Mumbai",
    progress: 75,
    balance: 45000,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=11",
    kycVerified: true,
    totalPurchases: 320000,
    joinedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Neha Sharma",
    membership: "Silver Member",
    phone: "+91 9123456789",
    email: "neha@email.com",
    city: "Delhi",
    progress: 40,
    balance: 18500,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=12",
    kycVerified: true,
    totalPurchases: 145000,
    joinedDate: "2024-03-22",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    membership: "Gold Member",
    phone: "+91 9988776655",
    email: "rahul@email.com",
    city: "Surat",
    progress: 90,
    balance: 80000,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=13",
    kycVerified: true,
    totalPurchases: 540000,
    joinedDate: "2023-11-10",
  },
  {
    id: 4,
    name: "Priya Patel",
    membership: "Silver Member",
    phone: "+91 9765432109",
    email: "priya@email.com",
    city: "Ahmedabad",
    progress: 60,
    balance: 30000,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=14",
    kycVerified: false,
    totalPurchases: 95000,
    joinedDate: "2024-02-05",
  },
  {
    id: 5,
    name: "Karan Singh",
    membership: "Diamond Member",
    phone: "+91 9001122334",
    email: "karan@email.com",
    city: "Jaipur",
    progress: 80,
    balance: 60000,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=15",
    kycVerified: true,
    totalPurchases: 890000,
    joinedDate: "2023-08-19",
  },
];

export const purchaseRecords: PurchaseRecord[] = [
  {
    id: "PUR-101",
    customerId: 1,
    customerName: "Amit Verma",
    item: "22K Gold Antique Necklace (45g)",
    category: "Gold",
    weightGrams: 45,
    purity: "22K (916)",
    amount: 308250,
    date: "2026-06-12",
    paymentMethod: "UPI",
    invoiceNo: "INV-2026-001",
    status: "Completed",
  },
  {
    id: "PUR-102",
    customerId: 3,
    customerName: "Rahul Mehta",
    item: "Solitaire Diamond Engagement Ring",
    category: "Diamond",
    weightGrams: 8.5,
    purity: "18K VVS1",
    amount: 245000,
    date: "2026-07-02",
    paymentMethod: "Card",
    invoiceNo: "INV-2026-042",
    status: "Completed",
  },
  {
    id: "PUR-103",
    customerId: 5,
    customerName: "Karan Singh",
    item: "24K Gold Minted Coin (50g)",
    category: "Gold",
    weightGrams: 50,
    purity: "24K (999)",
    amount: 362500,
    date: "2026-07-15",
    paymentMethod: "Net Banking",
    invoiceNo: "INV-2026-089",
    status: "Completed",
  },
  {
    id: "PUR-104",
    customerId: 2,
    customerName: "Neha Sharma",
    item: "Designer Silver Bangle Set (120g)",
    category: "Silver",
    weightGrams: 120,
    purity: "925 Sterling",
    amount: 14400,
    date: "2026-07-18",
    paymentMethod: "UPI",
    invoiceNo: "INV-2026-105",
    status: "Completed",
  },
  {
    id: "PUR-105",
    customerId: 4,
    customerName: "Priya Patel",
    item: "Temple Jewellery Jhumka Earrings",
    category: "Gold",
    weightGrams: 18.2,
    purity: "22K (916)",
    amount: 124670,
    date: "2026-05-30",
    paymentMethod: "Cash",
    invoiceNo: "INV-2026-028",
    status: "Completed",
  },
];

export const loyaltyRecords: LoyaltyRecord[] = [
  {
    customerId: 1,
    customerName: "Amit Verma",
    tier: "Gold",
    pointsBalance: 3200,
    totalEarned: 4800,
    totalRedeemed: 1600,
    lastActivity: "2026-06-12",
  },
  {
    customerId: 2,
    customerName: "Neha Sharma",
    tier: "Silver",
    pointsBalance: 850,
    totalEarned: 1450,
    totalRedeemed: 600,
    lastActivity: "2026-07-18",
  },
  {
    customerId: 3,
    customerName: "Rahul Mehta",
    tier: "Gold",
    pointsBalance: 5400,
    totalEarned: 6200,
    totalRedeemed: 800,
    lastActivity: "2026-07-02",
  },
  {
    customerId: 4,
    customerName: "Priya Patel",
    tier: "Silver",
    pointsBalance: 420,
    totalEarned: 950,
    totalRedeemed: 530,
    lastActivity: "2026-05-30",
  },
  {
    customerId: 5,
    customerName: "Karan Singh",
    tier: "Diamond",
    pointsBalance: 12800,
    totalEarned: 15000,
    totalRedeemed: 2200,
    lastActivity: "2026-07-15",
  },
];

export const goldSchemes: GoldSchemeRecord[] = [
  {
    id: "SCH-001",
    customerId: 1,
    customerName: "Amit Verma",
    schemeName: "Luxray Swarna Bachat 11+1",
    monthlyInstallment: 10000,
    paidInstallments: 8,
    totalInstallments: 11,
    accumulatedWeight: 12.4,
    startDate: "2025-11-01",
    maturityDate: "2026-10-01",
    status: "Active",
  },
  {
    id: "SCH-002",
    customerId: 3,
    customerName: "Rahul Mehta",
    schemeName: "Dhanraksha Diamond Plan",
    monthlyInstallment: 25000,
    paidInstallments: 10,
    totalInstallments: 11,
    accumulatedWeight: 38.2,
    startDate: "2025-09-01",
    maturityDate: "2026-08-01",
    status: "Active",
  },
  {
    id: "SCH-003",
    customerId: 2,
    customerName: "Neha Sharma",
    schemeName: "Silver Micro Savings 6M",
    monthlyInstallment: 3000,
    paidInstallments: 6,
    totalInstallments: 6,
    accumulatedWeight: 250,
    startDate: "2026-01-01",
    maturityDate: "2026-07-01",
    status: "Matured",
  },
  {
    id: "SCH-004",
    customerId: 5,
    customerName: "Karan Singh",
    schemeName: "Royal Sovereign Gold Plan",
    monthlyInstallment: 50000,
    paidInstallments: 11,
    totalInstallments: 11,
    accumulatedWeight: 84.5,
    startDate: "2025-07-01",
    maturityDate: "2026-06-01",
    status: "Completed",
  },
];

export const ledgerEntries: LedgerEntry[] = [
  {
    id: "LED-1001",
    customerId: 1,
    customerName: "Amit Verma",
    date: "2026-06-12",
    description: "Purchase: 22K Antique Necklace (INV-2026-001)",
    referenceNo: "INV-2026-001",
    debit: 308250,
    credit: 0,
    runningBalance: 308250,
    type: "Purchase",
  },
  {
    id: "LED-1002",
    customerId: 1,
    customerName: "Amit Verma",
    date: "2026-06-12",
    description: "UPI Payment Received against INV-2026-001",
    referenceNo: "PAY-UPI-9921",
    debit: 0,
    credit: 263250,
    runningBalance: 45000,
    type: "Payment Received",
  },
  {
    id: "LED-1003",
    customerId: 3,
    customerName: "Rahul Mehta",
    date: "2026-07-02",
    description: "Old Gold Exchange Credit (18.5g 22K)",
    referenceNo: "EXCH-8812",
    debit: 0,
    credit: 120000,
    runningBalance: -120000,
    type: "Gold Exchange",
  },
  {
    id: "LED-1004",
    customerId: 3,
    customerName: "Rahul Mehta",
    date: "2026-07-02",
    description: "Purchase: Solitaire Diamond Ring (INV-2026-042)",
    referenceNo: "INV-2026-042",
    debit: 245000,
    credit: 0,
    runningBalance: 125000,
    type: "Purchase",
  },
  {
    id: "LED-1005",
    customerId: 3,
    customerName: "Rahul Mehta",
    date: "2026-07-03",
    description: "Card Payment Received against INV-2026-042",
    referenceNo: "PAY-CARD-4410",
    debit: 0,
    credit: 45000,
    runningBalance: 80000,
    type: "Payment Received",
  },
];

export const kycDocuments: KYCDocument[] = [
  {
    id: "DOC-01",
    customerId: 1,
    customerName: "Amit Verma",
    documentType: "Aadhaar Card",
    documentNumber: "XXXX-XXXX-4812",
    uploadDate: "2024-01-16",
    status: "Verified",
    fileSize: "1.4 MB",
  },
  {
    id: "DOC-02",
    customerId: 1,
    customerName: "Amit Verma",
    documentType: "PAN Card",
    documentNumber: "ABCDE1234F",
    uploadDate: "2024-01-16",
    status: "Verified",
    fileSize: "0.8 MB",
  },
  {
    id: "DOC-03",
    customerId: 2,
    customerName: "Neha Sharma",
    documentType: "Aadhaar Card",
    documentNumber: "XXXX-XXXX-9901",
    uploadDate: "2024-03-23",
    status: "Verified",
    fileSize: "1.2 MB",
  },
  {
    id: "DOC-04",
    customerId: 3,
    customerName: "Rahul Mehta",
    documentType: "GSTIN Certificate",
    documentNumber: "24AAACR1234F1Z5",
    uploadDate: "2023-11-12",
    status: "Verified",
    fileSize: "2.1 MB",
  },
  {
    id: "DOC-05",
    customerId: 4,
    customerName: "Priya Patel",
    documentType: "PAN Card",
    documentNumber: "BKWPP9876K",
    uploadDate: "2024-02-06",
    status: "Pending",
    fileSize: "0.9 MB",
  },
];

export const customerFeedback: CustomerFeedback[] = [
  {
    id: "FB-501",
    customerId: 1,
    customerName: "Amit Verma",
    rating: 5,
    category: "Product Quality",
    comment: "Exquisite craftsmanship on the 22K antique gold necklace! Hallmark certification was prompt.",
    date: "2026-06-14",
    status: "Resolved",
  },
  {
    id: "FB-502",
    customerId: 2,
    customerName: "Neha Sharma",
    rating: 4,
    category: "Store Experience",
    comment: "Friendly staff at the Delhi showroom, but waiting time during weekend peak hours was high.",
    date: "2026-07-19",
    status: "In Progress",
  },
  {
    id: "FB-503",
    customerId: 4,
    customerName: "Priya Patel",
    rating: 3,
    category: "Scheme Delivery",
    comment: "Query regarding bonus installment calculation on Gold Savings Plan.",
    date: "2026-06-01",
    status: "Open",
  },
  {
    id: "FB-504",
    customerId: 5,
    customerName: "Karan Singh",
    rating: 5,
    category: "Customer Service",
    comment: "Outstanding VIP treatment and transparent gold bullion rates. Highly recommend Luxray!",
    date: "2026-07-16",
    status: "Resolved",
  },
];