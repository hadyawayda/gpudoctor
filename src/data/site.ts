export type Service = {
  name: string
  description: string
  price: string
  turnaround: string
  category:
    | 'Diagnostics'
    | 'Repairs'
    | 'Cooling'
    | 'Maintenance'
    | 'Refurbishment'
    | 'Certification'
    | 'Enhancements'
  badge?: string
}

export const serviceCatalog: Service[] = [
  {
    name: 'Diagnostic bench evaluation',
    description:
      'Full intake assessment covering power rails, memory, and visual inspection. The $89 fee is credited when you approve the repair.',
    price: '$89 diagnostic fee',
    turnaround: 'Detailed report within 48 hours',
    category: 'Diagnostics',
    badge: 'Required first step',
  },
  {
    name: 'Advanced failure analysis',
    description:
      'Oscilloscope captures, micro-fracture checks, and firmware validation for stubborn intermittent faults.',
    price: '$149',
    turnaround: 'Comprehensive findings in 72 hours',
    category: 'Diagnostics',
  },
  {
    name: 'Standard repair workflow',
    description:
      'Board-level repairs, component swaps, and validation. Standard queue completes within the 6-week service window.',
    price: 'Quoted after diagnostics',
    turnaround: 'Up to 6 weeks',
    category: 'Repairs',
  },
  {
    name: 'Expedited 7-day repair lane',
    description:
      'Priority handling with daily updates. We complete approved work within 7 calendar days or refund the rush fee.',
    price: '$199 rush add-on',
    turnaround: '7-day turnaround guaranteed',
    category: 'Repairs',
    badge: 'Expedited',
  },
  {
    name: 'Precision micro-soldering',
    description:
      'Replace failed MOSFETs, memory, or traces under microscope guidance with conformal coating touch-up.',
    price: 'From $219',
    turnaround: '10-14 days (standard lane)',
    category: 'Repairs',
  },
  {
    name: 'Thermal paste refresh',
    description:
      'Remove old compounds, clean contact surfaces, and apply premium paste tuned for your workload.',
    price: '$59',
    turnaround: '24-hour return',
    category: 'Cooling',
  },
  {
    name: 'Thermal pad replacement',
    description:
      'Replace and profile all memory and VRM pads using measured thickness for even pressure.',
    price: '$89',
    turnaround: '2 days',
    category: 'Cooling',
  },
  {
    name: 'Complete thermal overhaul',
    description:
      'Combine paste and pad services with heatsink resurfacing to restore factory or better thermals.',
    price: '$129',
    turnaround: '3 days',
    category: 'Cooling',
    badge: 'Bundle & save',
  },
  {
    name: 'Preventive maintenance service',
    description:
      'Deep cleaning, firmware updates, and health checks ideal for rigs approaching warranty end.',
    price: '$109',
    turnaround: '3-4 days',
    category: 'Maintenance',
  },
  {
    name: 'Scheduled maintenance plan',
    description:
      'Four on-the-calendar tune-ups per year with priority booking and service reminders.',
    price: '$349 annual plan',
    turnaround: 'Quarterly appointments',
    category: 'Maintenance',
  },
  {
    name: 'Refurbishment package',
    description:
      'Cosmetic restoration, fan replacement, and final validation that qualifies hardware for certified resale.',
    price: '$189',
    turnaround: '10 days',
    category: 'Refurbishment',
  },
  {
    name: 'Refurbish add-on for marketplace sales',
    description:
      'Add to any marketplace sale for packaging, photography, and certification before shipment.',
    price: '$69',
    turnaround: '3 days before dispatch',
    category: 'Refurbishment',
  },
  {
    name: 'GPU Doctor Certified inspection',
    description:
      'Documented inspection that awards the GPU Doctor Certified badge and one-week workmanship warranty.',
    price: '$79',
    turnaround: '48 hours',
    category: 'Certification',
    badge: 'Certification badge',
  },
  {
    name: 'Warranty extension upgrade',
    description:
      'Extend the included 7-day repair warranty to 6 weeks with transferability for resale.',
    price: '$59 add-on',
    turnaround: 'Activates on repair completion',
    category: 'Certification',
  },
  {
    name: 'Performance re-tuning',
    description:
      'Driver calibration, fan curve programming, and stress testing matched to your workloads.',
    price: '$129',
    turnaround: '3 days',
    category: 'Enhancements',
  },
]

export type RepairMilestone = {
  title: string
  description: string
  tip?: string
}

export const repairMilestones: RepairMilestone[] = [
  {
    title: 'Secure intake',
    description: 'Submit symptoms, photos, and proof of ownership. We log every detail so your rights stay documented from day one.',
    tip: 'Diagnostic fees are paid upfront and credited when you approve the repair quote.',
  },
  {
    title: 'Precision diagnostics',
    description: 'Technicians scope power rails, inspect solder joints, and run memory tests to isolate the fault.',
  },
  {
    title: 'Transparent approval',
    description: 'You receive a written quote detailing labour, parts, rush options, and warranty choices before any work begins.',
  },
  {
    title: 'Certified repair',
    description: 'Board-level work, component swaps, and thermal services are performed by senior technicians with documented steps.',
  },
  {
    title: 'Stress validation',
    description: 'Every GPU runs through stress and thermal validation with the results stored in your customer portal.',
  },
  {
    title: 'White-glove return',
    description: 'We repackage with new tamper seals, update your warranty record, and ship using insured, trackable carriers.',
    tip: 'Expedited jobs ship priority overnight; standard jobs follow the 6-week processing timeline.',
  },
]

export type CatalogProduct = {
  slug: string
  name: string
  brand: string
  model: string
  category:
    | 'GPU'
    | 'CPU'
    | 'Motherboard'
    | 'Memory'
    | 'Storage'
    | 'Cooling'
    | 'Case'
    | 'Power Supply'
    | 'Accessory'
  condition: 'New' | 'Used' | 'Refurbished'
  price: number
  availability: 'In Stock' | 'Preorder' | 'Backorder'
  description: string
  specs: Array<{ label: string; value: string }>
  tags: string[]
  images: string[]
}

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'geforce-rtx-4090-founder',
    name: 'GeForce RTX 4090 Founders Edition',
    brand: 'NVIDIA',
    model: 'RTX 4090',
    category: 'GPU',
    condition: 'New',
    price: 1899,
    availability: 'In Stock',
    description:
      'Flagship Ada Lovelace GPU with triple-slot vapor chamber cooling, ideal for 4K gaming and AI acceleration.',
    specs: [
      { label: 'Memory', value: '24GB GDDR6X' },
      { label: 'Boost Clock', value: '2.52 GHz' },
      { label: 'Power', value: '450W TGP' },
    ],
    tags: ['Ada Lovelace', 'Ray Tracing', 'Studio Ready'],
    images: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'radeon-rx-7900-xtx-merc',
    name: 'Radeon RX 7900 XTX MERC 310',
    brand: 'AMD',
    model: 'RX 7900 XTX',
    category: 'GPU',
    condition: 'Refurbished',
    price: 1199,
    availability: 'In Stock',
    description:
      'Factory-refurbished RDNA 3 flagship with custom triple-fan cooler and extended two-year GPU Doctor warranty.',
    specs: [
      { label: 'Memory', value: '24GB GDDR6' },
      { label: 'Boost Clock', value: '2.68 GHz' },
      { label: 'Power', value: '355W TBP' },
    ],
    tags: ['RDNA 3', 'Refurbished', 'Creator'],
    images: [
      'https://images.unsplash.com/photo-1618005198934-3c55bd2f93b7?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'intel-i9-14900k',
    name: 'Intel Core i9-14900K',
    brand: 'Intel',
    model: 'Core i9-14900K',
    category: 'CPU',
    condition: 'New',
    price: 629,
    availability: 'In Stock',
    description:
      '24-core Raptor Lake Refresh processor with Thermal Velocity Boost and PCIe 5.0 for flagship gaming rigs.',
    specs: [
      { label: 'Cores/Threads', value: '24 / 32' },
      { label: 'Boost Clock', value: '6.0 GHz' },
      { label: 'Socket', value: 'LGA 1700' },
    ],
    tags: ['Raptor Lake', 'Unlocked', 'DDR5'],
    images: [
      'https://images.unsplash.com/photo-1587202372775-98927f1e8af7?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'ryzen-9-7950x3d',
    name: 'AMD Ryzen 9 7950X3D',
    brand: 'AMD',
    model: 'Ryzen 9 7950X3D',
    category: 'CPU',
    condition: 'New',
    price: 699,
    availability: 'Backorder',
    description:
      '3D V-Cache powerhouse tuned by GPU Doctor for hybrid gaming and productivity builds.',
    specs: [
      { label: 'Cores/Threads', value: '16 / 32' },
      { label: 'Boost Clock', value: '5.7 GHz' },
      { label: 'Socket', value: 'AM5' },
    ],
    tags: ['AM5', '3D V-Cache', 'Overclocked'],
    images: [
      'https://images.unsplash.com/photo-1587202372775-98927f1e8af7?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'asus-rog-strix-z790',
    name: 'ASUS ROG Strix Z790-E Gaming WiFi',
    brand: 'ASUS',
    model: 'ROG Strix Z790-E',
    category: 'Motherboard',
    condition: 'New',
    price: 499,
    availability: 'In Stock',
    description:
      'PCIe 5.0 ready motherboard with reinforced GPU slots, DDR5 support, and GPU Doctor BIOS presets.',
    specs: [
      { label: 'Form Factor', value: 'ATX' },
      { label: 'Memory Support', value: 'DDR5 7800 OC' },
      { label: 'Networking', value: 'WiFi 6E + 2.5G LAN' },
    ],
    tags: ['Z790', 'DDR5', 'Overclocking'],
    images: [
      'https://images.unsplash.com/photo-1587202372775-98927f1e8af7?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'gskill-trident-z5-32gb',
    name: 'G.SKILL Trident Z5 RGB 32GB DDR5-6400',
    brand: 'G.SKILL',
    model: 'Trident Z5',
    category: 'Memory',
    condition: 'New',
    price: 219,
    availability: 'In Stock',
    description:
      'Low-latency DDR5 tuned for Intel XMP and AMD EXPO with GPU Doctor memory validation.',
    specs: [
      { label: 'Capacity', value: '32GB (2x16GB)' },
      { label: 'Speed', value: 'DDR5-6400 CL32' },
      { label: 'Lighting', value: 'Addressable RGB' },
    ],
    tags: ['DDR5', 'RGB', 'OC Ready'],
    images: [
      'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    brand: 'Samsung',
    model: '990 PRO',
    category: 'Storage',
    condition: 'New',
    price: 259,
    availability: 'In Stock',
    description:
      'PCIe 4.0 NVMe drive with GPU Doctor thermal pad kit to prevent throttling under render workloads.',
    specs: [
      { label: 'Interface', value: 'PCIe 4.0 x4' },
      { label: 'Sequential Read', value: '7,450 MB/s' },
      { label: 'Endurance', value: '1,200 TBW' },
    ],
    tags: ['PCIe 4.0', 'Heatsink', 'Fast Cache'],
    images: [
      'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'corsair-rmx-1000-shift',
    name: 'Corsair RMx SHIFT 1000W 80+ Gold',
    brand: 'Corsair',
    model: 'RMx SHIFT',
    category: 'Power Supply',
    condition: 'New',
    price: 229,
    availability: 'In Stock',
    description:
      'Side-mounted modular PSU with native 12VHPWR cable and GPU Doctor transient spike testing.',
    specs: [
      { label: 'Efficiency', value: '80+ Gold' },
      { label: 'Connectors', value: '12VHPWR + 6 PCIe 8-pin' },
      { label: 'Warranty', value: '10 years' },
    ],
    tags: ['ATX 3.0', 'Silent Fan', '12VHPWR'],
    images: [
      'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'nzxt-h9-elite-draco',
    name: 'NZXT H9 Elite Draco Edition',
    brand: 'NZXT',
    model: 'H9 Elite',
    category: 'Case',
    condition: 'New',
    price: 289,
    availability: 'Preorder',
    description:
      'Dual-chamber showcase case bundled with GPU Doctor vertical mount kit for modern GPUs.',
    specs: [
      { label: 'Form Factor', value: 'Mid Tower' },
      { label: 'Radiator Support', value: 'Up to 360mm' },
      { label: 'Airflow', value: 'Tri-chamber intake' },
    ],
    tags: ['Tempered Glass', 'Dual Chamber', 'Showcase'],
    images: [
      'https://images.unsplash.com/photo-1555617117-08dd0f5041d1?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

export const productCategories: Array<{
  title: string
  subtitle: string
  categories: CatalogProduct['category'][]
  highlight: string
}> = [
  {
    title: 'Graphics hardware',
    subtitle: 'Elite GPUs and workstation cards ready for battle or compute.',
    categories: ['GPU', 'Cooling'],
    highlight: 'Thermal-validated, firmware-tuned, and bundled with lifetime telemetry access.',
  },
  {
    title: 'Platform essentials',
    subtitle: 'CPUs, boards, and memory matched for latency-sensitive workloads.',
    categories: ['CPU', 'Motherboard', 'Memory', 'Power Supply'],
    highlight: 'Hand-binned silicon with BIOS profiles curated by GPU Doctor engineers.',
  },
  {
    title: 'Storage & chassis',
    subtitle: 'Ultra-fast NVMe and airflow-optimized cases for showcase builds.',
    categories: ['Storage', 'Case'],
    highlight: 'Thermal imaging ensures zero throttling even during sustained renders.',
  },
]

export type MarketplaceListing = {
  id: string
  title: string
  brand: string
  model: string
  price: string
  priceValue: number
  condition: 'Used' | 'Refurbished'
  location: string
  refurbishedByDoctor: boolean
  description: string
  stats: string
  includesRefurbOption?: boolean
  chipset: string
  fanCount: number
  coolerType: 'Air' | 'Liquid' | 'Hybrid'
  memory: string
  powerConnector: string
  lengthMm: number
}

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: 'mkp-4090-b',
    title: 'RTX 4090 HydroCopper (Customer Trade-In)',
    brand: 'EVGA',
    model: 'RTX 4090 HydroCopper',
    price: '$1,549',
    priceValue: 1549,
    condition: 'Refurbished',
    location: 'Austin Lab',
    refurbishedByDoctor: true,
    description: 'Loop-flushed, pad-upgraded, and shipped with GPU Doctor documentation for your records.',
    stats: 'Passed 72h loop with <65°C core temps in Time Spy Extreme.',
    chipset: 'NVIDIA Ada Lovelace',
    fanCount: 0,
    coolerType: 'Liquid',
    memory: '24GB GDDR6X',
    powerConnector: 'Dual 8-pin',
    lengthMm: 280,
  },
  {
    id: 'mkp-3080-ti',
    title: 'GeForce RTX 3080 Ti Strix OC',
    brand: 'ASUS',
    model: 'RTX 3080 Ti',
    price: '$699',
    priceValue: 699,
    condition: 'Used',
    location: 'Seattle Hub',
    refurbishedByDoctor: false,
    includesRefurbOption: true,
    description: 'Single owner card with minor cosmetic wear. Eligible for same-day refurbish add-on before shipping.',
    stats: 'User-logged 520 gaming hours. No prior repairs logged in GPU Doctor system.',
    chipset: 'NVIDIA Ampere',
    fanCount: 3,
    coolerType: 'Air',
    memory: '12GB GDDR6X',
    powerConnector: '3x 8-pin',
    lengthMm: 318,
  },
  {
    id: 'mkp-6800-xt',
    title: 'Radeon RX 6800 XT Midnight Edition',
    brand: 'AMD',
    model: 'RX 6800 XT',
    price: '$529',
    priceValue: 529,
    condition: 'Refurbished',
    location: 'Toronto Lab',
    refurbishedByDoctor: true,
    description: 'Reballed memory modules and replaced fans. Ships with new thermal pads and stress-test report.',
    stats: '3DMark Speed Way score +6% vs stock reference.',
    chipset: 'AMD RDNA 2',
    fanCount: 3,
    coolerType: 'Air',
    memory: '16GB GDDR6',
    powerConnector: '2x 8-pin',
    lengthMm: 267,
  },
  {
    id: 'mkp-quadro-rtx-6000',
    title: 'NVIDIA RTX 6000 Ada Workstation',
    brand: 'NVIDIA',
    model: 'RTX 6000 Ada',
    price: '$3,999',
    priceValue: 3999,
    condition: 'Refurbished',
    location: 'Remote Warehouse',
    refurbishedByDoctor: true,
    description: 'Enterprise lease return with full stress validation and documentation for insurance compliance.',
    stats: 'NvML health: 100% | ECC corrected: 0 | VRAM remapped modules: 0.',
    chipset: 'NVIDIA Ada Lovelace',
    fanCount: 1,
    coolerType: 'Air',
    memory: '48GB GDDR6 ECC',
    powerConnector: 'Single 8-pin',
    lengthMm: 267,
  },
]

export type RepairHistoryEntry = {
  id: string
  submitted: string
  device: string
  issue: string
  service: string
  status: 'Diagnosing' | 'Awaiting Approval' | 'In Repair' | 'Ready for Pickup' | 'Shipped'
  cost: string
  warrantyEnds: string
}

export const repairHistory: RepairHistoryEntry[] = [
  {
    id: 'REQ-2409-104',
    submitted: 'Sep 04, 2024',
    device: 'MSI GeForce RTX 3080 Gaming X Trio',
    issue: 'Artifacts after extended gameplay',
    service: 'Precision micro-soldering',
    status: 'Ready for Pickup',
    cost: '$249',
    warrantyEnds: 'Sep 11, 2024 (extended to Oct 16 with upgrade)',
  },
  {
    id: 'REQ-2408-312',
    submitted: 'Aug 22, 2024',
    device: 'Gigabyte RTX 4090 WindForce',
    issue: '12VHPWR connector overheating',
    service: 'Complete thermal overhaul + rush lane',
    status: 'Shipped',
    cost: '$328',
    warrantyEnds: 'Aug 29, 2024',
  },
  {
    id: 'REQ-2407-087',
    submitted: 'Jul 15, 2024',
    device: 'Sapphire Nitro+ RX 7900 XT',
    issue: 'Random black screens under render load',
    service: 'Diagnostic bench evaluation',
    status: 'In Repair',
    cost: '$89 (credited at approval)',
    warrantyEnds: 'Pending approval',
  },
]

export type PcComponentOption = {
  id: string
  name: string
  brand: string
  price: number
  wattage?: number
  image?: string
  notes?: string
}

export type PcBuilderOptions = {
  case: PcComponentOption[]
  gpu: PcComponentOption[]
  cpu: PcComponentOption[]
  motherboard: PcComponentOption[]
  memory: PcComponentOption[]
  storage: PcComponentOption[]
  psu: PcComponentOption[]
  cooling: PcComponentOption[]
}

export const pcBuilderOptions: PcBuilderOptions = {
  case: [
    {
      id: 'case-h9-elite',
      name: 'NZXT H9 Elite Draco',
      brand: 'NZXT',
      price: 289,
      image: 'https://images.unsplash.com/photo-1555617117-08dd0f5041d1?auto=format&fit=crop&w=900&q=80',
      notes: 'Panoramic dual-chamber design ready for vertical GPU mount.',
    },
    {
      id: 'case-lancool-216',
      name: 'LIAN LI Lancool 216 RGB',
      brand: 'LIAN LI',
      price: 139,
      image: 'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=900&q=80',
      notes: 'High airflow mesh front with included ARGB hub.',
    },
  ],
  gpu: [
    {
      id: 'gpu-4090-suprim',
      name: 'MSI RTX 4090 SUPRIM Liquid X',
      brand: 'MSI',
      price: 2199,
      wattage: 480,
      image: 'https://images.unsplash.com/photo-1618005198934-3c55bd2f93b7?auto=format&fit=crop&w=900&q=80',
      notes: 'Hybrid cooling with 240mm radiator tuned for quiet loop.',
    },
    {
      id: 'gpu-4080-super',
      name: 'NVIDIA RTX 4080 SUPER Founders',
      brand: 'NVIDIA',
      price: 1299,
      wattage: 320,
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=900&q=80',
      notes: 'Perfect balance of 4K gaming and AI acceleration.',
    },
    {
      id: 'gpu-7900xtx',
      name: 'PowerColor RX 7900 XTX Liquid Devil',
      brand: 'PowerColor',
      price: 1199,
      wattage: 355,
      image: 'https://images.unsplash.com/photo-1618005198934-3c55bd2f93b7?auto=format&fit=crop&w=900&q=80',
      notes: 'Includes full-cover water block for open loop builds.',
    },
  ],
  cpu: [
    {
      id: 'cpu-14900k',
      name: 'Intel Core i9-14900K',
      brand: 'Intel',
      price: 629,
      wattage: 253,
      image: 'https://images.unsplash.com/photo-1587202372775-98927f1e8af7?auto=format&fit=crop&w=900&q=80',
      notes: '6.0GHz boost with GPU Doctor adaptive tuning.',
    },
    {
      id: 'cpu-7950x3d',
      name: 'AMD Ryzen 9 7950X3D',
      brand: 'AMD',
      price: 699,
      wattage: 170,
      image: 'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=900&q=80',
      notes: '3D V-Cache for esports and creator workloads.',
    },
  ],
  motherboard: [
    {
      id: 'mb-rog-strix-z790',
      name: 'ASUS ROG Strix Z790-E',
      brand: 'ASUS',
      price: 499,
      notes: 'PCIe 5.0 ready with reinforced GPU slot and BIOS profiles.',
    },
    {
      id: 'mb-x670e-hero',
      name: 'ASUS ROG Crosshair X670E Hero',
      brand: 'ASUS',
      price: 599,
      notes: 'Dual PCIe 5.0 M.2 slots with premium VRM cooling.',
    },
  ],
  memory: [
    {
      id: 'ram-trident-z5-32',
      name: 'G.SKILL Trident Z5 RGB 32GB DDR5-6400',
      brand: 'G.SKILL',
      price: 219,
      notes: 'Low-latency DDR5 tuned for Intel XMP and AMD EXPO.',
    },
    {
      id: 'ram-dominator-64',
      name: 'Corsair Dominator Titanium 64GB DDR5-6000',
      brand: 'Corsair',
      price: 329,
      notes: 'Dual-path heat spreaders with temperature telemetry.',
    },
  ],
  storage: [
    {
      id: 'ssd-990-pro-2tb',
      name: 'Samsung 990 PRO 2TB',
      brand: 'Samsung',
      price: 259,
      notes: 'PCIe 4.0 NVMe with GPU Doctor thermal pad kit.',
    },
    {
      id: 'ssd-sabrent-rocket-4',
      name: 'Sabrent Rocket 4 Plus 4TB',
      brand: 'Sabrent',
      price: 449,
      notes: 'High-capacity TLC for workstation scratch disks.',
    },
  ],
  psu: [
    {
      id: 'psu-ax1600i',
      name: 'Corsair AX1600i Titanium',
      brand: 'Corsair',
      price: 499,
      wattage: 1600,
      notes: 'Digital monitoring with transient spike mitigation.',
    },
    {
      id: 'psu-rmx1000-shift',
      name: 'Corsair RMx SHIFT 1000W',
      brand: 'Corsair',
      price: 229,
      wattage: 1000,
      notes: 'Side-mounted modular interface and 12VHPWR support.',
    },
  ],
  cooling: [
    {
      id: 'cooling-lianli-galaii-360',
      name: 'LIAN LI Galahad II LCD 360',
      brand: 'LIAN LI',
      price: 199,
      notes: 'Silent pump tuning matched to GPU Doctor thermal targets.',
    },
    {
      id: 'cooling-ek-quantum',
      name: 'EK Quantum Vector² Custom Loop Kit',
      brand: 'EKWB',
      price: 799,
      notes: 'Full custom loop with GPU block, CPU block, and distro plate.',
    },
  ],
}

export type BuilderPreset = {
  id: string
  name: string
  focus: string
  budget: string
  parts: Array<{ category: keyof PcBuilderOptions; optionId: string }>
  description: string
}

export const builderPresets: BuilderPreset[] = [
  {
    id: 'preset-creator',
    name: 'Creator Studio X',
    focus: '4K editing & AI renders',
    budget: '$4,899',
    description: 'Balanced for DaVinci Resolve, Unreal Engine, and Stable Diffusion workloads.',
    parts: [
      { category: 'case', optionId: 'case-h9-elite' },
      { category: 'gpu', optionId: 'gpu-4080-super' },
      { category: 'cpu', optionId: 'cpu-7950x3d' },
      { category: 'motherboard', optionId: 'mb-x670e-hero' },
      { category: 'memory', optionId: 'ram-dominator-64' },
      { category: 'storage', optionId: 'ssd-sabrent-rocket-4' },
      { category: 'psu', optionId: 'psu-rmx1000-shift' },
      { category: 'cooling', optionId: 'cooling-lianli-galaii-360' },
    ],
  },
  {
    id: 'preset-esports',
    name: 'Esports Velocity',
    focus: 'High FPS competitive play',
    budget: '$3,299',
    description: 'Latency-optimized rig with tuned clocks and memory timings for esports dominance.',
    parts: [
      { category: 'case', optionId: 'case-lancool-216' },
      { category: 'gpu', optionId: 'gpu-7900xtx' },
      { category: 'cpu', optionId: 'cpu-14900k' },
      { category: 'motherboard', optionId: 'mb-rog-strix-z790' },
      { category: 'memory', optionId: 'ram-trident-z5-32' },
      { category: 'storage', optionId: 'ssd-990-pro-2tb' },
      { category: 'psu', optionId: 'psu-rmx1000-shift' },
      { category: 'cooling', optionId: 'cooling-ek-quantum' },
    ],
  },
]

export const landingMetrics = [
  { label: 'GPUs revived', value: '18,400+', emphasis: 'Across gaming, workstation, and broadcast fleets since 2014.' },
  { label: 'Rush completion rate', value: '98%', emphasis: 'Expedited jobs finished inside the 7-day promise.' },
  { label: 'Warranty claims', value: '<1%', emphasis: 'All repairs include a 7-day warranty with 6-week extensions available.' },
]

export const landingHighlights = [
  {
    title: 'Technicians who advocate for you',
    description:
      'Every job is documented with photos, notes, and parts lists so you always have evidence of the work performed.',
  },
  {
    title: 'Clear pricing & timelines',
    description:
      'Diagnostic fees are published, standard repairs target a 6-week window, and expedited upgrades deliver in seven days.',
  },
  {
    title: 'Certified results',
    description:
      'Thermal services, refurbishments, and certification badges protect your resale value and keep warranties intact.',
  },
]

export const forumHighlights = [
  {
    name: 'Policy & rights library',
    description: 'Understand your protections, privacy controls, and dispute process before you book a service.',
  },
  {
    name: 'Repair playbooks',
    description: 'Step-by-step guides that explain how we handle diagnostics, repairs, and refurbishments.',
  },
  {
    name: 'Maintenance scheduler',
    description: 'Set reminders for thermal service, warranty deadlines, and portal notifications.',
  },
]

export const landingCtas = [
  {
    title: 'Schedule a repair',
    href: '/repair-requests',
    description: 'Submit your intake, choose rush options, and track the 6-week or 7-day timeline in writing.',
  },
  {
    title: 'Visit the store & marketplace',
    href: '/store',
    description: 'Shop certified GPUs, accessories, and refurb packages with detailed filters.',
  },
  {
    title: 'Build your PC plan',
    href: '/builds',
    description: 'Curate compatible components and export parts lists to your customer portal.',
  },
]

export function findProductBySlug(slug: string): CatalogProduct | undefined {
  return catalogProducts.find((product) => product.slug === slug)
}

export function getProductsByCategories(categories: CatalogProduct['category'][]): CatalogProduct[] {
  return catalogProducts.filter((product) => categories.includes(product.category))
}
