export type Service = {
  name: string
  description: string
  price: string
  turnaround: string
  category:
    | 'Diagnostics'
    | 'Repair & Refurbish'
    | 'Cooling & Materials'
    | 'Maintenance Plans'
    | 'Enhancements'
    | 'Certification & Add-ons'
  badge?: string
}

export const serviceCatalog: Service[] = [
  {
    name: 'Comprehensive diagnostics report',
    description:
      'Board-level inspection, oscilloscope rail testing, and thermal imaging. Includes a written report and repair quote. The $79 diagnostic fee is credited toward approved work.',
    price: 'Diagnostic fee $79',
    turnaround: 'Report in 48 hours',
    category: 'Diagnostics',
    badge: 'Fee credited',
  },
  {
    name: 'Mail-in prep & documentation',
    description:
      'Shipping labels, packaging checklist, and intake photos for customers mailing hardware to our lab. Ensures insurance coverage and accurate condition records.',
    price: '$25',
    turnaround: 'Same-day dispatch',
    category: 'Diagnostics',
  },
  {
    name: 'Standard repair program',
    description:
      'Component-level repair path that follows our standard 6-week processing timeline. Includes cleaning, replacement parts, and a 1-week warranty.',
    price: 'From $199',
    turnaround: 'Up to 6 weeks',
    category: 'Repair & Refurbish',
  },
  {
    name: 'Expedited repair queue',
    description:
      'Guaranteed bench time within 24 hours of approval and a one-week turnaround. Ideal for mission critical rigs. Includes priority shipping upgrades.',
    price: 'From $349',
    turnaround: '7 calendar days',
    category: 'Repair & Refurbish',
    badge: 'Priority',
  },
  {
    name: 'Component-level rebuild',
    description:
      'Reballing, trace repair, and power stage replacements performed under microscope with lead-free alloys. Burn-in validation before delivery.',
    price: 'From $289',
    turnaround: '10-14 days',
    category: 'Repair & Refurbish',
  },
  {
    name: 'Refurbishment package',
    description:
      'Deep clean, corrosion removal, fan service, and enclosure restoration for trade-ins or pre-owned cards. Ships with condition photos and documentation.',
    price: '$149',
    turnaround: '3-4 days',
    category: 'Repair & Refurbish',
  },
  {
    name: 'Thermal paste refresh',
    description:
      'High-performance paste application matched to your cooler pressure profile. Ideal for hardware older than 12 months.',
    price: '$49',
    turnaround: '24 hours',
    category: 'Cooling & Materials',
  },
  {
    name: 'Thermal pad & paste overhaul',
    description:
      'Replacement of all thermal interface materials with GPU Doctor-specified pads and paste. Includes VRM shim checks and screw torque calibration.',
    price: '$109',
    turnaround: '2 days',
    category: 'Cooling & Materials',
    badge: 'Cooling boost',
  },
  {
    name: 'Preventative maintenance service',
    description:
      'Annual cleaning, firmware validation, and fan curve tuning to keep refurbished hardware stable without downtime.',
    price: '$129',
    turnaround: '2 days',
    category: 'Maintenance Plans',
  },
  {
    name: 'Scheduled maintenance membership',
    description:
      'Quarterly maintenance appointments with reminders, shipping coordination, and preferential scheduling for repeat customers.',
    price: '$24 / month',
    turnaround: 'Quarterly visits',
    category: 'Maintenance Plans',
  },
  {
    name: 'Performance tuning session',
    description:
      'Safe power limit adjustments, fan profiling, and stability validation targeted at your software stack. Includes before/after metrics.',
    price: '$119',
    turnaround: '3 days',
    category: 'Enhancements',
  },
  {
    name: 'Acoustic & cooling optimisation',
    description:
      'Noise-normalised fan curves, pad spacing, and optional backplate heat spreaders to meet specific acoustic targets.',
    price: '$139',
    turnaround: '3 days',
    category: 'Enhancements',
  },
  {
    name: 'GPU Doctor Certified inspection',
    description:
      'Full validation of third-party hardware for resale. Generates the GPU Doctor Certified badge used across our marketplace and store.',
    price: '$89',
    turnaround: '2 days',
    category: 'Certification & Add-ons',
  },
  {
    name: 'Warranty extension upgrade',
    description:
      'Extend the default 1-week warranty to 6 weeks. Includes follow-up diagnostics and one complimentary maintenance visit.',
    price: '$59',
    turnaround: 'Activated on completion',
    category: 'Certification & Add-ons',
  },
  {
    name: 'Refurbish add-on for purchases',
    description:
      'Bundle refurbishment, documentation, and shipping prep when you buy from the GPU Doctor store or marketplace.',
    price: '$99',
    turnaround: 'Adds 2 days',
    category: 'Certification & Add-ons',
  },
]

export type RepairMilestone = {
  title: string
  description: string
  tip?: string
}

export const repairMilestones: RepairMilestone[] = [
  {
    title: 'Intake & condition record',
    description:
      'Every repair begins with photos, serial verification, and a checklist that confirms accessories, packaging, and declared issues.',
  },
  {
    title: 'Diagnostic lab',
    description:
      'Technicians capture voltage rails, resistance readings, and thermal images. Findings are summarised in the diagnostics report.',
    tip: 'The diagnostic fee is applied to your repair invoice when you approve the work.',
  },
  {
    title: 'Quote & approval',
    description:
      'You receive a clear line-item estimate that outlines parts, labour, standard 6-week or expedited 1-week scheduling, and warranty choices.',
  },
  {
    title: 'Repair execution',
    description:
      'Workstations follow ESD and clean-room procedures while parts are replaced, traces repaired, or thermal materials refreshed.',
  },
  {
    title: 'Burn-in & certification',
    description:
      'Each GPU completes extended stress tests and quality checks. Reports document temperatures, clock speeds, and fan performance.',
    tip: 'Add the warranty extension upgrade to expand coverage to six weeks.',
  },
  {
    title: 'Return shipping & follow-up',
    description:
      'We pack your hardware with tamper seals and insured labels. A follow-up check is scheduled one week after delivery to ensure success.',
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
      'Flagship Ada Lovelace GPU with triple-slot vapor chamber cooling, validated by GPU Doctor for stability and power delivery.',
    specs: [
      { label: 'Memory', value: '24GB GDDR6X' },
      { label: 'Boost Clock', value: '2.52 GHz' },
      { label: 'Power', value: '450W TGP' },
    ],
    tags: ['Ada Lovelace', 'Ray Tracing', '4K Ready'],
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
      'Refurbished RDNA 3 flagship with custom triple-fan cooler and a fresh GPU Doctor certification card in the box.',
    specs: [
      { label: 'Memory', value: '24GB GDDR6' },
      { label: 'Boost Clock', value: '2.68 GHz' },
      { label: 'Power', value: '355W TBP' },
    ],
    tags: ['RDNA 3', 'Refurbished', 'Creator Friendly'],
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
      '24-core Raptor Lake Refresh processor with Thermal Velocity Boost and GPU Doctor tuning guidance for workstations.',
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
      '3D V-Cache flagship tuned for demanding production and gaming mixes. Ships with guidance on best-in-slot pairings.',
    specs: [
      { label: 'Cores/Threads', value: '16 / 32' },
      { label: 'Boost Clock', value: '5.7 GHz' },
      { label: 'Socket', value: 'AM5' },
    ],
    tags: ['AM5', '3D V-Cache', 'Overclock Ready'],
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
      'PCIe 5.0 ready motherboard with reinforced GPU slots, DDR5 support, and BIOS presets tested by GPU Doctor.',
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
      'Low-latency DDR5 tuned for Intel XMP and AMD EXPO, bundled with GPU Doctor memory validation notes.',
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
      'PCIe 4.0 NVMe drive with a thermal pad kit to prevent throttling during sustained renders or compute workloads.',
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
      'Dual-chamber showcase chassis bundled with a vertical GPU mount kit and airflow guidance from GPU Doctor.',
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
    subtitle: 'Flagship and refurbished GPUs ready for gaming, visualization, and compute.',
    categories: ['GPU', 'Cooling'],
    highlight: 'Each board ships with a burn-in report and optional refurbishment add-on.',
  },
  {
    title: 'Platform essentials',
    subtitle: 'CPUs, boards, and memory matched for low-latency, high-throughput workflows.',
    categories: ['CPU', 'Motherboard', 'Memory', 'Power Supply'],
    highlight: 'Technician-approved combinations reduce guesswork and keep rigs stable.',
  },
  {
    title: 'Storage & chassis',
    subtitle: 'High-speed NVMe drives and airflow-forward cases for showcase builds.',
    categories: ['Storage', 'Case'],
    highlight: 'Thermal imaging ensures zero throttling even during extended sessions.',
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
  fans?: number
  cooler?: 'Air' | 'Hybrid' | 'Waterblock' | 'Blower'
  chipset?: string
  category?: 'Gaming' | 'Workstation' | 'Data Center'
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
    description: 'Loop-flushed, pad-upgraded, and returned with a written stability report. Includes 1-week warranty with optional upgrade.',
    stats: 'Passed 72h liquid loop validation with core temps under 65°C.',
    fans: 0,
    cooler: 'Waterblock',
    chipset: 'AD102',
    category: 'Gaming',
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
    description: 'Single owner card with minor cosmetic wear. Eligible for refurbish add-on before shipping and 6-week warranty upgrade.',
    stats: 'Logged 520 gaming hours. No prior repair history in our system.',
    fans: 3,
    cooler: 'Air',
    chipset: 'GA102',
    category: 'Gaming',
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
    description: 'Reballed memory modules, new fans, and fresh thermal materials. Ships with GPU Doctor Certified badge.',
    stats: '3DMark Speed Way score improved 6% compared to stock reference.',
    fans: 3,
    cooler: 'Air',
    chipset: 'Navi 21',
    category: 'Gaming',
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
    description: 'Enterprise lease return with stress validation and optional expedited repair support contract.',
    stats: 'NVML health 100% • ECC corrected 0 • VRAM remapped modules 0.',
    fans: 1,
    cooler: 'Blower',
    chipset: 'AD102',
    category: 'Workstation',
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
    service: 'Component-level rebuild',
    status: 'Ready for Pickup',
    cost: '$289',
    warrantyEnds: 'Jun 09, 2024',
  },
  {
    id: 'REQ-2405-118',
    submitted: 'May 18, 2024',
    device: 'Gigabyte RTX 4090 WindForce',
    issue: '12VHPWR connector overheating',
    service: 'Thermal pad & paste overhaul',
    status: 'Shipped',
    cost: '$109',
    warrantyEnds: 'May 25, 2024',
  },
  {
    id: 'REQ-2404-502',
    submitted: 'Apr 27, 2024',
    device: 'Sapphire Nitro+ RX 7900 XT',
    issue: 'Driver crashes during renders',
    service: 'Expedited repair queue',
    status: 'In Repair',
    cost: '$349',
    warrantyEnds: 'To be scheduled',
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
      notes: 'Hybrid cooling with 240mm radiator tuned for quiet operation.',
    },
    {
      id: 'gpu-4080-super',
      name: 'NVIDIA RTX 4080 SUPER Founders',
      brand: 'NVIDIA',
      price: 1299,
      wattage: 320,
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=900&q=80',
      notes: 'Balanced 4K performer with excellent efficiency.',
    },
    {
      id: 'gpu-7900xtx',
      name: 'PowerColor RX 7900 XTX Liquid Devil',
      brand: 'PowerColor',
      price: 1199,
      wattage: 355,
      image: 'https://images.unsplash.com/photo-1618005198934-3c55bd2f93b7?auto=format&fit=crop&w=900&q=80',
      notes: 'Includes full-cover water block for open-loop builds.',
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
      notes: '6.0GHz boost headroom with careful cooling.',
    },
    {
      id: 'cpu-7950x3d',
      name: 'AMD Ryzen 9 7950X3D',
      brand: 'AMD',
      price: 699,
      wattage: 170,
      image: 'https://images.unsplash.com/photo-1612197527762-4645c6a2135d?auto=format&fit=crop&w=900&q=80',
      notes: 'Ideal for mixed gaming and workstation loads.',
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
      notes: 'PCIe 4.0 NVMe with thermal pad kit.',
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
      notes: 'Quiet AIO with rapid bleed system for easy upkeep.',
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
    focus: '4K editing and color work',
    budget: '$4,899',
    description: 'Balanced for demanding editing suites, simulation, and rendering workloads.',
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
    description: 'Latency-optimised rig with tuned clocks and memory timings for competitive dominance.',
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
  { label: 'GPUs revived', value: '18,400+', emphasis: 'From gaming rigs to broadcast workstations.' },
  { label: 'Expedited queue', value: '7 days', emphasis: 'Guaranteed turnaround for priority service.' },
  { label: 'Warranty coverage', value: 'Up to 6 weeks', emphasis: 'Extend your protection with our upgrade plan.' },
]

export const landingHighlights = [
  {
    title: 'Technician-first processes',
    description: 'Experienced board specialists handle diagnostics, repairs, and refurbishments with meticulous documentation.',
  },
  {
    title: 'Clear service options',
    description: 'Choose between standard six-week repairs or expedited one-week turnarounds with transparent pricing.',
  },
  {
    title: 'Certified results',
    description: 'Thermal imaging, burn-in tests, and warranty tracking keep every repair accountable and shipment ready.',
  },
]

export const landingCtas = [
  {
    title: 'Start a repair intake',
    href: '/repair-requests',
    description: 'Book diagnostics, approve quotes, and track your place in the queue.',
  },
  {
    title: 'Browse the GPU marketplace',
    href: '/marketplace',
    description: 'Shop certified trade-ins or add refurbishment before shipment.',
  },
  {
    title: 'Design your next PC build',
    href: '/builds',
    description: 'Mix new and refurbished parts with our curated configurator.',
  },
]

export function findProductBySlug(slug: string): CatalogProduct | undefined {
  return catalogProducts.find((product) => product.slug === slug)
}

export function getProductsByCategories(categories: CatalogProduct['category'][]): CatalogProduct[] {
  return catalogProducts.filter((product) => categories.includes(product.category))
}
