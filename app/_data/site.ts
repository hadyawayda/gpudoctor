export type Service = {
  name: string
  description: string
  price: string
  turnaround: string
  category: 'Diagnostics' | 'Repairs' | 'Enhancements' | 'Cooling' | 'Data' | 'Enterprise'
  badge?: string
}

export const serviceCatalog: Service[] = [
  {
    name: 'Graphene thermal rebuild',
    description: 'Replace degraded pads, lap heatsinks, and reseat the GPU die for double-digit thermal drops.',
    price: '$159',
    turnaround: '2-3 days',
    category: 'Cooling',
    badge: 'Popular',
  },
  {
    name: 'Deep-dive diagnostics',
    description: 'Scope VRM rails, run memory BIST, and generate a shareable failure report within 24 hours.',
    price: '$89',
    turnaround: '24 hours',
    category: 'Diagnostics',
  },
  {
    name: 'Micro-soldering repair',
    description: 'Component-level fixes for blown MOSFETs, shorted caps, or cracked traces under microscope guidance.',
    price: 'From $189',
    turnaround: '4-5 days',
    category: 'Repairs',
  },
  {
    name: 'VBIOS calibration & unlock',
    description: 'Safely update firmware, tune power tables, and validate boost clocks with a 12-hour stress profile.',
    price: '$129',
    turnaround: '2 days',
    category: 'Enhancements',
  },
  {
    name: 'Data center rapid swap',
    description: 'Rack-friendly swap kits and overnight board-level repair SLA for render farms and inference clusters.',
    price: 'Custom quote',
    turnaround: 'Same-day dispatch',
    category: 'Enterprise',
    badge: 'SLA',
  },
  {
    name: 'Artifact remediation',
    description: 'Reball memory modules, retime signal traces, and soak-test to eliminate crashing or artifacting.',
    price: '$249',
    turnaround: '6 days',
    category: 'Repairs',
  },
  {
    name: 'AI workstation optimisation',
    description: 'Thermal, firmware, and driver tuning specifically profiled for AI/ML and CUDA workloads.',
    price: '$199',
    turnaround: '3 days',
    category: 'Enhancements',
  },
  {
    name: 'Immersion loop integration',
    description: 'Prep GPUs for immersion cooling, apply conformal coating, and validate leak-free operation.',
    price: '$329',
    turnaround: '7 days',
    category: 'Cooling',
  },
  {
    name: 'Data recovery & cloning',
    description: 'Recover mining farm BIOS mods, clone configs, and archive tuning profiles securely.',
    price: '$99',
    turnaround: '48 hours',
    category: 'Data',
  },
  {
    name: 'Extended burn-in certification',
    description: '72-hour thermal chambers with live telemetry exports for mission critical deployments.',
    price: '$149',
    turnaround: '3 days',
    category: 'Enterprise',
  },
]

export type RepairMilestone = {
  title: string
  description: string
  tip?: string
}

export const repairMilestones: RepairMilestone[] = [
  {
    title: 'Smart intake',
    description: 'Upload your GPU symptoms, crash logs, and photos. Our intake AI pre-screens likely failure domains.',
    tip: 'Supports RTX, Radeon, and workstation boards with automatic warranty lookup.',
  },
  {
    title: 'Precision diagnostics',
    description: 'Technicians run oscilloscope captures, memory BIST, and thermal imaging to isolate faults.',
  },
  {
    title: 'Transparent approval',
    description: 'You receive a video walkthrough, line-item quote, and optional upgrade suggestions before work begins.',
  },
  {
    title: 'Certified repair',
    description: 'Micro-soldering, component swaps, and firmware tuning executed in an ISO-7 clean workstation.',
  },
  {
    title: 'Stress validation',
    description: 'We publish telemetry dashboards from 3DMark, FurMark, and CUDA workloads to verify stability.',
  },
  {
    title: 'White-glove return',
    description: 'Insured shipping with tamper seals, lifetime service history, and proactive maintenance reminders.',
    tip: 'Enterprise customers can schedule on-site install and rack integration assistance.',
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
  condition: 'Used' | 'Refurbished'
  location: string
  refurbishedByDoctor: boolean
  description: string
  stats: string
  includesRefurbOption?: boolean
}

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: 'mkp-4090-b',
    title: 'RTX 4090 HydroCopper (Customer Trade-In)',
    brand: 'EVGA',
    model: 'RTX 4090 HydroCopper',
    price: '$1,549',
    condition: 'Refurbished',
    location: 'Austin Lab',
    refurbishedByDoctor: true,
    description: 'Loop-flushed, pad-upgraded, and shipped with GPU Doctor 12-month platinum warranty.',
    stats: 'Passed 72h loop with <65°C core temps in Time Spy Extreme.',
  },
  {
    id: 'mkp-3080-ti',
    title: 'GeForce RTX 3080 Ti Strix OC',
    brand: 'ASUS',
    model: 'RTX 3080 Ti',
    price: '$699',
    condition: 'Used',
    location: 'Seattle Hub',
    refurbishedByDoctor: false,
    includesRefurbOption: true,
    description: 'Single owner card with minor cosmetic wear. Eligible for same-day refurbish add-on before shipping.',
    stats: 'User-logged 520 gaming hours. No prior repairs logged in GPU Doctor system.',
  },
  {
    id: 'mkp-6800-xt',
    title: 'Radeon RX 6800 XT Midnight Edition',
    brand: 'AMD',
    model: 'RX 6800 XT',
    price: '$529',
    condition: 'Refurbished',
    location: 'Toronto Lab',
    refurbishedByDoctor: true,
    description: 'Reballed memory modules and replaced fans. Ships with new thermal pads and stress-test report.',
    stats: '3DMark Speed Way score +6% vs stock reference.',
  },
  {
    id: 'mkp-quadro-rtx-6000',
    title: 'NVIDIA RTX 6000 Ada Workstation',
    brand: 'NVIDIA',
    model: 'RTX 6000 Ada',
    price: '$3,999',
    condition: 'Refurbished',
    location: 'Remote Warehouse',
    refurbishedByDoctor: true,
    description: 'Enterprise lease return with full stress validation, includes optional rack integration service.',
    stats: 'NvML health: 100% | ECC corrected: 0 | VRAM remapped modules: 0.',
  },
]

export type TechnicianListing = {
  id: string
  component: string
  quantity: number
  price: string
  supplier: string
  contact: string
  note: string
}

export const technicianListings: TechnicianListing[] = [
  {
    id: 'ic-hynix-16gb',
    component: 'Hynix H56C8H24AIR 16Gb GDDR6',
    quantity: 42,
    price: '$18 / unit',
    supplier: 'Voltwave Electronics',
    contact: 'voltwave.parts@example.com',
    note: 'BGA packaged, ready for reballing. Includes lead-free solder spheres on request.',
  },
  {
    id: 'ic-ncp302155',
    component: 'OnSemi NCP302155 VRM Controller',
    quantity: 68,
    price: '$9 / unit',
    supplier: 'MicroForge Labs',
    contact: 'forge.ic@example.com',
    note: 'Pulled from donor boards, tested on GPU Doctor diagnostic rig.',
  },
  {
    id: 'ic-fan-kit',
    component: 'Triple Axial Fan Kit – RTX 30 Series',
    quantity: 25,
    price: '$45 / kit',
    supplier: 'Nordic Cooling Co.',
    contact: 'nordic.parts@example.com',
    note: 'Includes shroud screws and thermal pads pre-cut to OEM spec.',
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
    id: 'REQ-2406-231',
    submitted: 'Jun 02, 2024',
    device: 'MSI GeForce RTX 3080 Gaming X Trio',
    issue: 'Artifacts after 20 minutes of gameplay',
    service: 'Artifact remediation',
    status: 'Ready for Pickup',
    cost: '$249',
    warrantyEnds: 'Jun 02, 2025',
  },
  {
    id: 'REQ-2405-118',
    submitted: 'May 18, 2024',
    device: 'Gigabyte RTX 4090 WindForce',
    issue: '12VHPWR connector overheating',
    service: 'Graphene thermal rebuild',
    status: 'Shipped',
    cost: '$159',
    warrantyEnds: 'May 18, 2025',
  },
  {
    id: 'REQ-2404-502',
    submitted: 'Apr 27, 2024',
    device: 'Sapphire Nitro+ RX 7900 XT',
    issue: 'Driver crashes during Blender renders',
    service: 'AI workstation optimisation',
    status: 'In Repair',
    cost: '$199',
    warrantyEnds: 'Apr 27, 2025',
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
  { label: 'GPUs revived', value: '18,400+', emphasis: 'Across gaming, AI, and broadcast rigs.' },
  { label: 'Average turnaround', value: '3.2 days', emphasis: 'From diagnosis approval to burn-in complete.' },
  { label: 'Warranty coverage', value: '24 months', emphasis: 'On every GPU Doctor refurb or repair.' },
]

export const landingHighlights = [
  {
    title: 'GPU-native expertise',
    description:
      'Dedicated engineers for Ada, RDNA, and Hopper architectures with board-level schematics on tap.',
  },
  {
    title: 'AI-assisted troubleshooting',
    description:
      'Our Atlas assistant parses crash dumps, suggests fixes, and keeps you updated in conversational threads.',
  },
  {
    title: 'Sustainable performance',
    description:
      'Refurbish or trade-in options keep silicon in circulation and reduce e-waste for the community.',
  },
]

export const forumHighlights = [
  {
    name: 'Signal Integrity Lab',
    description: 'Discuss probing, firmware mods, and PCB repairs with certified technicians.',
  },
  {
    name: 'Marketplace Watch',
    description: 'Track new trade-ins, price trends, and community group buys in real time.',
  },
  {
    name: 'Atlas AI Copilot',
    description: 'Chatbot subdomain that answers troubleshooting questions and creates RMA-ready logs automatically.',
  },
]

export const landingCtas = [
  {
    title: 'Start a repair request',
    href: '/repair-requests',
    description: 'Book diagnostics, approve quotes, and monitor telemetry from your dashboard.',
  },
  {
    title: 'Browse the GPU marketplace',
    href: '/marketplace',
    description: 'Buy and sell certified GPUs with optional refurbish add-ons.',
  },
  {
    title: 'Design your next PC build',
    href: '/builds',
    description: 'Choose each component and see how it fits inside curated showcase cases.',
  },
]

export function findProductBySlug(slug: string): CatalogProduct | undefined {
  return catalogProducts.find((product) => product.slug === slug)
}

export function getProductsByCategories(categories: CatalogProduct['category'][]): CatalogProduct[] {
  return catalogProducts.filter((product) => categories.includes(product.category))
}
