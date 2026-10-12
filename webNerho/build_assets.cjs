const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function renderSvgToPng(svgStr, outName, width, height) {
  const outPath = path.join(publicDir, outName);
  const buffer = Buffer.from(svgStr);
  let pipeline = sharp(buffer);
  if (width && height) {
    pipeline = pipeline.resize(width, height);
  }
  await pipeline.png({ compressionLevel: 8, quality: 90 }).toFile(outPath);
  console.log(`Rendered ${outName} (${fs.statSync(outPath).size} bytes)`);
}

async function run() {
  // 1. heroImage.png (Two angled iPhones with realistic mockups)
  const heroSvg = `<svg width="860" height="740" viewBox="0 0 860 740" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueBanner" x1="0" y1="0" x2="250" y2="120" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D4ED8" />
        <stop offset="1" stop-color="#3B82F6" />
      </linearGradient>
      <linearGradient id="phoneBorder" x1="0" y1="0" x2="300" y2="600" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CBD5E1" />
        <stop offset="0.5" stop-color="#FFFFFF" />
        <stop offset="1" stop-color="#94A3B8" />
      </linearGradient>
      <linearGradient id="orangeBtn" x1="0" y1="0" x2="80" y2="24" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EA580C" />
        <stop offset="1" stop-color="#F97316" />
      </linearGradient>
      <clipPath id="screenRightClip">
        <rect x="10" y="10" width="270" height="570" rx="36" />
      </clipPath>
      <clipPath id="screenLeftClip">
        <rect x="10" y="10" width="260" height="550" rx="36" />
      </clipPath>
    </defs>

    <!-- Drop Shadows -->
    <ellipse cx="260" cy="650" rx="160" ry="24" fill="#0F172A" opacity="0.14" />
    <ellipse cx="620" cy="650" rx="150" ry="22" fill="#0F172A" opacity="0.16" />

    <!-- LEFT TILTED PHONE -->
    <g transform="translate(180, 70) rotate(-18 135 285)">
      <rect x="0" y="0" width="280" height="570" rx="42" fill="#E2E8F0" stroke="url(#phoneBorder)" stroke-width="4" />
      <rect x="6" y="6" width="268" height="558" rx="38" fill="#0F172A" />
      
      <g clip-path="url(#screenLeftClip)">
        <rect x="10" y="10" width="260" height="550" fill="#F8FAFC" />
        
        <text x="32" y="32" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">19:41</text>
        <circle cx="230" cy="28" r="3" fill="#0F172A" />
        <rect x="236" y="24" width="16" height="8" rx="2" fill="none" stroke="#0F172A" stroke-width="1.5" />
        <rect x="238" y="26" width="10" height="4" fill="#0F172A" />
        
        <!-- Dynamic Island -->
        <rect x="100" y="18" width="70" height="18" rx="9" fill="#0F172A" />

        <!-- Nav / Search -->
        <circle cx="34" cy="62" r="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <path d="M37 59L31 62L37 65" stroke="#0F172A" stroke-width="2" stroke-linecap="round" />
        
        <rect x="54" y="50" width="190" height="26" rx="13" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <circle cx="70" cy="63" r="4" fill="none" stroke="#94A3B8" stroke-width="1.5" />
        <path d="M73 66L77 70" stroke="#94A3B8" stroke-width="1.5" />
        <text x="82" y="67" fill="#64748B" font-family="sans-serif" font-size="9">Electronic Appliances</text>
        
        <!-- Filter chips -->
        <g transform="translate(20, 86)">
          <rect x="0" y="0" width="46" height="18" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="6" y="12" fill="#334155" font-family="sans-serif" font-size="8">Sort by ▾</text>
          
          <rect x="52" y="0" width="46" height="18" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="58" y="12" fill="#334155" font-family="sans-serif" font-size="8">Filters ▾</text>
          
          <rect x="104" y="0" width="58" height="18" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="110" y="12" fill="#334155" font-family="sans-serif" font-size="8">Categories ▾</text>

          <rect x="168" y="0" width="50" height="18" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
          <text x="174" y="12" fill="#334155" font-family="sans-serif" font-size="8">Location</text>
        </g>

        <!-- Product Grid Row 1 -->
        <g transform="translate(20, 114)">
          <rect x="0" y="0" width="108" height="120" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
          <rect x="14" y="10" width="80" height="52" rx="6" fill="#EFF6FF" />
          <rect x="22" y="16" width="64" height="40" rx="3" fill="#1E3A8A" stroke="#3B82F6" stroke-width="1" />
          <line x1="43" y1="16" x2="43" y2="56" stroke="#93C5FD" stroke-width="0.7" />
          <line x1="64" y1="16" x2="64" y2="56" stroke="#93C5FD" stroke-width="0.7" />
          <line x1="22" y1="29" x2="86" y2="29" stroke="#93C5FD" stroke-width="0.7" />
          <line x1="22" y1="42" x2="86" y2="42" stroke="#93C5FD" stroke-width="0.7" />
          
          <text x="8" y="74" fill="#0F172A" font-family="sans-serif" font-weight="600" font-size="8.5">Solar Panel 400W</text>
          <text x="8" y="87" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦420,000</text>
          <text x="8" y="99" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.9 <tspan fill="#94A3B8">(76)</tspan></text>
        </g>

        <g transform="translate(136, 114)">
          <rect x="0" y="0" width="108" height="120" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
          <rect x="14" y="10" width="80" height="52" rx="6" fill="#F8FAFC" />
          <rect x="30" y="15" width="48" height="42" rx="5" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1" />
          <circle cx="54" cy="38" r="14" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5" />
          <circle cx="54" cy="38" r="8" fill="#3B82F6" opacity="0.4" />
          
          <text x="8" y="74" fill="#0F172A" font-family="sans-serif" font-weight="600" font-size="8.5">LG 8kg Front Load</text>
          <text x="8" y="87" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦900,000</text>
          <text x="8" y="99" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.7 <tspan fill="#94A3B8">(98)</tspan></text>
        </g>

        <!-- Product Grid Row 2 -->
        <g transform="translate(20, 244)">
          <rect x="0" y="0" width="108" height="120" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
          <rect x="14" y="10" width="80" height="52" rx="6" fill="#F8FAFC" />
          <rect x="22" y="24" width="64" height="24" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
          <line x1="26" y1="40" x2="82" y2="40" stroke="#94A3B8" stroke-width="1" />
          
          <text x="8" y="74" fill="#0F172A" font-family="sans-serif" font-weight="600" font-size="8">Hisense 2HP Split AC</text>
          <text x="8" y="87" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦760,000</text>
          <text x="8" y="99" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.8 <tspan fill="#94A3B8">(112)</tspan></text>
        </g>

        <g transform="translate(136, 244)">
          <rect x="0" y="0" width="108" height="120" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
          <rect x="14" y="10" width="80" height="52" rx="6" fill="#EFF6FF" />
          <rect x="28" y="16" width="52" height="40" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
          <rect x="36" y="22" width="16" height="8" rx="1" fill="#3B82F6" />
          <text x="56" y="28" fill="#22C55E" font-family="sans-serif" font-size="6">100%</text>

          <text x="8" y="74" fill="#0F172A" font-family="sans-serif" font-weight="600" font-size="8">5kva Li-ion Battery</text>
          <text x="8" y="87" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦900,000</text>
          <text x="8" y="99" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.6 <tspan fill="#94A3B8">(54)</tspan></text>
        </g>
      </g>
    </g>

    <!-- RIGHT UPRIGHT PHONE -->
    <g transform="translate(480, 40)">
      <rect x="0" y="0" width="290" height="590" rx="44" fill="#F1F5F9" stroke="url(#phoneBorder)" stroke-width="4.5" />
      <rect x="6" y="6" width="278" height="578" rx="40" fill="#0F172A" />

      <g clip-path="url(#screenRightClip)">
        <rect x="10" y="10" width="270" height="570" fill="#F8FAFC" />

        <text x="34" y="32" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">19:41</text>
        <circle cx="236" cy="28" r="3" fill="#0F172A" />
        <rect x="242" y="24" width="16" height="8" rx="2" fill="none" stroke="#0F172A" stroke-width="1.5" />
        <rect x="244" y="26" width="10" height="4" fill="#0F172A" />

        <!-- Dynamic Island -->
        <rect x="105" y="18" width="80" height="20" rx="10" fill="#0F172A" />

        <!-- User / Store Header -->
        <g transform="translate(24, 48)">
          <circle cx="16" cy="16" r="14" fill="#CBD5E1" />
          <path d="M9 26C9 22 12 20 16 20C20 20 23 22 23 26" fill="#475569" />
          <circle cx="16" cy="14" r="5" fill="#475569" />

          <text x="38" y="12" fill="#94A3B8" font-family="sans-serif" font-size="8">Currently displaying</text>
          <text x="38" y="24" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="10">📍 Warri store ▾</text>

          <circle cx="216" cy="16" r="14" fill="#F1F5F9" />
          <path d="M216 10C213 10 211 12 211 15V19L209 21H223L221 19V15C221 12 219 10 216 10Z" fill="#334155" />
          <circle cx="224" cy="9" r="3.5" fill="#EF4444" />
        </g>

        <!-- Search Bar -->
        <g transform="translate(24, 86)">
          <rect x="0" y="0" width="222" height="32" rx="16" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1" />
          <circle cx="16" cy="16" r="5" fill="none" stroke="#64748B" stroke-width="1.5" />
          <path d="M20 20L24 24" stroke="#64748B" stroke-width="1.5" />
          <text x="30" y="19" fill="#94A3B8" font-family="sans-serif" font-size="9.5">Search or Ask Nerho</text>
          <path d="M200 12H210M200 16H210M200 20H210" stroke="#334155" stroke-width="1.5" stroke-linecap="round" />
        </g>

        <!-- Promo Banner: Na Nepa? No Problem! -->
        <g transform="translate(24, 126)">
          <rect x="0" y="0" width="222" height="96" rx="16" fill="url(#blueBanner)" />
          
          <text x="12" y="20" fill="#93C5FD" font-family="sans-serif" font-weight="600" font-size="7.5">Na Nepa? No Problem</text>
          <text x="12" y="36" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12">Get Uninterrupted</text>
          <text x="12" y="50" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12">Power Supply</text>
          <text x="12" y="62" fill="#DBEAFE" font-family="sans-serif" font-size="7">Quality Inverters • Budget Friendly</text>
          
          <rect x="12" y="70" width="62" height="18" rx="9" fill="url(#orangeBtn)" />
          <text x="20" y="82" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="7.5">Shop solar now →</text>

          <g transform="translate(138, 14)">
            <rect x="0" y="6" width="68" height="44" rx="3" transform="skewY(-10)" fill="#1E3A8A" stroke="#93C5FD" stroke-width="1" />
            <line x1="22" y1="2" x2="22" y2="46" stroke="#93C5FD" stroke-width="0.8" />
            <line x1="44" y1="-2" x2="44" y2="42" stroke="#93C5FD" stroke-width="0.8" />
            
            <rect x="36" y="32" width="34" height="42" rx="3" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
            <circle cx="53" cy="42" r="5" fill="#3B82F6" />
            <rect x="42" y="56" width="22" height="10" rx="2" fill="#0F172A" />
          </g>

          <circle cx="100" cy="104" r="2.5" fill="#EA580C" />
          <circle cx="108" cy="104" r="2" fill="#CBD5E1" />
          <circle cx="114" cy="104" r="2" fill="#CBD5E1" />
          <circle cx="120" cy="104" r="2" fill="#CBD5E1" />
        </g>

        <!-- Categories Section -->
        <g transform="translate(24, 238)">
          <text x="0" y="10" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">Our Categories</text>
          <text x="180" y="10" fill="#EA580C" font-family="sans-serif" font-weight="bold" font-size="8.5">View All &gt;</text>

          <!-- 1: Lighting -->
          <g transform="translate(8, 20)">
            <circle cx="20" cy="20" r="18" fill="#EFF6FF" stroke="#DBEAFE" />
            <path d="M20 12V24M14 18H26" stroke="#2563EB" stroke-width="2" stroke-linecap="round" />
            <text x="6" y="48" fill="#334155" font-family="sans-serif" font-size="8">Lighting</text>
          </g>

          <!-- 2: Electronics -->
          <g transform="translate(62, 20)">
            <circle cx="20" cy="20" r="18" fill="#F1F5F9" stroke="#E2E8F0" />
            <rect x="12" y="13" width="16" height="12" rx="2" fill="none" stroke="#475569" stroke-width="1.5" />
            <line x1="20" y1="25" x2="20" y2="28" stroke="#475569" stroke-width="1.5" />
            <text x="0" y="48" fill="#334155" font-family="sans-serif" font-size="8">Electronics</text>
          </g>

          <!-- 3: CCTV -->
          <g transform="translate(116, 20)">
            <circle cx="20" cy="20" r="18" fill="#ECFDF5" stroke="#D1FAE5" />
            <path d="M12 22L20 16L28 16L24 24H14L12 22Z" fill="#059669" />
            <text x="8" y="48" fill="#334155" font-family="sans-serif" font-size="8">CCTV</text>
          </g>

          <!-- 4: Solar -->
          <g transform="translate(170, 20)">
            <circle cx="20" cy="20" r="18" fill="#FFF7ED" stroke="#FFEDD5" />
            <circle cx="20" cy="20" r="8" fill="#EA580C" />
            <text x="8" y="48" fill="#334155" font-family="sans-serif" font-size="8">Solar</text>
          </g>
        </g>

        <!-- Customer Favourites Section -->
        <g transform="translate(24, 318)">
          <text x="0" y="10" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">Customer Favourites</text>
          <text x="180" y="10" fill="#EA580C" font-family="sans-serif" font-weight="bold" font-size="8.5">View All &gt;</text>

          <!-- Card 1 TV -->
          <g transform="translate(0, 18)">
            <rect x="0" y="0" width="106" height="130" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
            <path d="M96 14C96 11 93 9 91 9C89 9 88 10 87 11C86 10 85 9 83 9C81 9 78 11 78 14C78 18 87 23 87 23C87 23 96 18 96 14Z" fill="#EF4444" />
            <rect x="14" y="24" width="78" height="44" rx="3" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <text x="32" y="48" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="8">Hisense</text>
            <text x="8" y="86" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="8">55" Hisense Led TV</text>
            <text x="8" y="100" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦650,000</text>
            <text x="8" y="114" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.8 <tspan fill="#94A3B8">(213)</tspan></text>
          </g>

          <!-- Card 2 Battery -->
          <g transform="translate(116, 18)">
            <rect x="0" y="0" width="106" height="130" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
            <circle cx="90" cy="14" r="6" fill="none" stroke="#94A3B8" />
            <rect x="30" y="22" width="46" height="48" rx="4" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
            <rect x="42" y="30" width="22" height="10" rx="2" fill="#EA580C" />
            <text x="8" y="86" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="8">5kva Li-ion Inverter</text>
            <text x="8" y="100" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">₦900,000</text>
            <text x="8" y="114" fill="#F59E0B" font-family="sans-serif" font-size="8">★ 4.6 <tspan fill="#94A3B8">(54)</tspan></text>
          </g>
        </g>

        <!-- Bottom Tab Bar -->
        <g transform="translate(10, 520)">
          <rect x="0" y="0" width="270" height="44" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
          
          <g transform="translate(24, 8)">
            <path d="M12 6L4 12V22H9V16H15V22H20V12L12 6Z" fill="#2563EB" />
            <text x="2" y="32" fill="#2563EB" font-family="sans-serif" font-weight="bold" font-size="7">Home</text>
          </g>

          <g transform="translate(76, 8)">
            <rect x="6" y="8" width="14" height="12" rx="2" fill="none" stroke="#64748B" stroke-width="1.5" />
            <text x="6" y="32" fill="#64748B" font-family="sans-serif" font-size="7">Deals</text>
          </g>

          <g transform="translate(128, 8)">
            <line x1="8" y1="20" x2="8" y2="10" stroke="#64748B" stroke-width="2" />
            <line x1="13" y1="20" x2="13" y2="6" stroke="#64748B" stroke-width="2" />
            <line x1="18" y1="20" x2="18" y2="14" stroke="#64748B" stroke-width="2" />
            <text x="4" y="32" fill="#64748B" font-family="sans-serif" font-size="7">Insights</text>
          </g>

          <g transform="translate(180, 8)">
            <path d="M4 6H7L9 16H19L21 9H8" fill="none" stroke="#64748B" stroke-width="1.5" />
            <circle cx="10" cy="20" r="1.5" fill="#64748B" />
            <circle cx="18" cy="20" r="1.5" fill="#64748B" />
            <text x="7" y="32" fill="#64748B" font-family="sans-serif" font-size="7">Cart</text>
          </g>

          <g transform="translate(230, 8)">
            <circle cx="12" cy="10" r="4" fill="none" stroke="#64748B" stroke-width="1.5" />
            <path d="M6 20C6 16 9 14 12 14C15 14 18 16 18 20" fill="none" stroke="#64748B" stroke-width="1.5" />
            <text x="3" y="32" fill="#64748B" font-family="sans-serif" font-size="7">Profile</text>
          </g>
        </g>
      </g>
    </g>
  </svg>`;
  await renderSvgToPng(heroSvg, 'heroImage.png', 860, 740);

  // 2. whyNerho1.png
  const why1Svg = `<svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="360" rx="24" fill="#F8FAFC" />
    <g transform="translate(60, 20)">
      <rect x="0" y="0" width="360" height="340" rx="36" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" />
      <rect x="135" y="14" width="90" height="18" rx="9" fill="#0F172A" />
      <text x="32" y="28" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="12">19:41</text>
      
      <circle cx="40" cy="56" r="14" fill="#F1F5F9" />
      <path d="M43 51L37 56L43 61" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" />
      
      <text x="135" y="60" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="14">Product Detail</text>
      
      <circle cx="320" cy="56" r="14" fill="#F1F5F9" />
      <path d="M316 56V52C316 50.8954 316.895 50 318 50H322C323.105 50 324 50.8954 324 52V56M320 48V58M317 51L320 48L323 51" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round" />

      <!-- QC Verified Banner Overlay -->
      <g transform="translate(0, 84)">
        <rect x="0" y="0" width="360" height="48" fill="#F1F5F9" opacity="0.95" />
        <g transform="translate(24, 10)">
          <path d="M14 4L6 8V16C6 22 14 26 14 26C14 26 22 22 22 16V8L14 4Z" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round" />
          <path d="M10 15L13 18L18 12" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        
        <g transform="translate(230, 8)">
          <rect x="0" y="0" width="106" height="32" rx="6" fill="#10B981" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#FFFFFF" stroke-width="1.8" />
          <text x="28" y="21" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="11">QC Verified</text>
        </g>
      </g>

      <g transform="translate(70, 150)">
        <rect x="0" y="0" width="220" height="125" rx="6" fill="#0F172A" stroke="#334155" stroke-width="2" />
        <rect x="10" y="10" width="200" height="105" rx="3" fill="#1E293B" />
        <text x="65" y="65" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="16">Hisense</text>
        <text x="135" y="65" fill="#F59E0B" font-family="sans-serif" font-size="10">🏆 FIFA</text>
        <polygon points="40,126 30,140 36,140 45,126" fill="#64748B" />
        <polygon points="180,126 175,140 181,140 190,126" fill="#64748B" />
      </g>
    </g>
  </svg>`;
  await renderSvgToPng(why1Svg, 'whyNerho1.png', 480, 360);

  // 3. whyNerho2.png
  const why2Svg = `<svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="360" rx="24" fill="#F8FAFC" />
    <g transform="translate(60, 20)">
      <rect x="0" y="0" width="360" height="340" rx="36" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" />
      <rect x="135" y="14" width="90" height="18" rx="9" fill="#0F172A" />
      <text x="32" y="28" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="12">19:41</text>
      
      <circle cx="40" cy="56" r="14" fill="#F1F5F9" />
      <path d="M43 51L37 56L43 61" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" />
      
      <text x="135" y="60" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="14">Return order</text>
      
      <circle cx="320" cy="56" r="14" fill="#F1F5F9" />
      <path d="M316 52C316 50.8954 316.895 50 318 50H322C323.105 50 324 50.8954 324 52V54C324 57 321 60 318 60H316" stroke="#1E293B" stroke-width="1.8" />

      <g transform="translate(24, 88)">
        <rect x="0" y="0" width="312" height="72" rx="10" fill="#F1F5F9" />
        <text x="16" y="24" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">Please note:</text>
        <text x="82" y="24" fill="#475569" font-family="sans-serif" font-size="11">Your refund for order #12345 will be</text>
        <text x="16" y="42" fill="#475569" font-family="sans-serif" font-size="11">credited to your card once the order is</text>
        <text x="16" y="60" fill="#475569" font-family="sans-serif" font-size="11">successfully returned to us.</text>
      </g>

      <g transform="translate(24, 176)">
        <text x="0" y="14" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="12">Complaint box</text>
        <rect x="0" y="24" width="312" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
        <text x="16" y="52" fill="#94A3B8" font-family="sans-serif" font-size="11.5">Share your complaint with us.</text>
      </g>
    </g>
  </svg>`;
  await renderSvgToPng(why2Svg, 'whyNerho2.png', 480, 360);

  // 4. whyNerho3.png
  const why3Svg = `<svg width="600" height="500" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="500" rx="24" fill="#F8FAFC" />
    <g transform="translate(140, 10)">
      <path d="M-40 400C-40 400 20 480 160 480C260 480 320 380 320 300C320 250 280 220 280 200C270 170 250 150 240 180C230 210 230 260 210 260C190 260 180 200 170 220" fill="#8D5B4C" opacity="0.3" />

      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="280" height="450" rx="36" fill="#FFFFFF" stroke="#334155" stroke-width="5" />
        <rect x="100" y="12" width="80" height="16" rx="8" fill="#0F172A" />
        <text x="24" y="26" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">19:41</text>

        <circle cx="34" cy="52" r="12" fill="#F1F5F9" />
        <path d="M36 48L32 52L36 56" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
        <text x="110" y="56" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="13">Guarantor</text>

        <g transform="translate(20, 74)">
          <rect x="0" y="0" width="240" height="32" rx="16" fill="#F1F5F9" />
          <rect x="4" y="4" width="114" height="24" rx="12" fill="#FFFFFF" />
          <text x="42" y="20" fill="#64748B" font-family="sans-serif" font-weight="500" font-size="10">Primary</text>
          
          <rect x="122" y="4" width="114" height="24" rx="12" fill="#0F172A" />
          <text x="156" y="20" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="10">Secondary</text>
        </g>

        <g transform="translate(20, 116)">
          <rect x="0" y="0" width="240" height="74" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="10" y="16" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="8.5">Important notice:</text>
          <text x="86" y="16" fill="#475569" font-family="sans-serif" font-size="8.5">To complete any delivery, the</text>
          <text x="10" y="28" fill="#475569" font-family="sans-serif" font-size="8.5">non-refundable due diligence process must be</text>
          <text x="10" y="40" fill="#475569" font-family="sans-serif" font-size="8.5">completed. Please ensure that both you and your</text>
          <text x="10" y="52" fill="#475569" font-family="sans-serif" font-size="8.5">witness meet all eligibility and qualification</text>
          <text x="10" y="64" fill="#475569" font-family="sans-serif" font-size="8.5">requirements.</text>
        </g>

        <g transform="translate(20, 200)">
          <rect x="0" y="0" width="240" height="124" rx="10" fill="#FFFFFF" stroke="#F1F5F9" />
          <text x="10" y="16" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="10">Search witness</text>
          <text x="10" y="28" fill="#64748B" font-family="sans-serif" font-size="7.5">This would be the witness that would be used to</text>
          <text x="10" y="38" fill="#64748B" font-family="sans-serif" font-size="7.5">complete pending transactions.</text>

          <circle cx="120" cy="62" r="14" fill="none" stroke="#EA580C" stroke-width="2.5" />
          <path d="M130 72L138 80" stroke="#EA580C" stroke-width="3" stroke-linecap="round" />
          <circle cx="116" cy="60" r="1.5" fill="#EA580C" />
          <circle cx="120" cy="60" r="1.5" fill="#EA580C" />
          <circle cx="124" cy="60" r="1.5" fill="#EA580C" />

          <rect x="20" y="90" width="200" height="26" rx="6" fill="#EA580C" />
          <text x="86" y="106" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="9.5">Search witness</text>
        </g>

        <g transform="translate(20, 334)">
          <text x="0" y="10" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">Recent witness</text>
          <text x="200" y="10" fill="#EA580C" font-family="sans-serif" font-weight="bold" font-size="8">View All &gt;</text>
          <rect x="0" y="16" width="240" height="60" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="10" y="32" fill="#475569" font-family="sans-serif" font-size="8">Name: <tspan fill="#0F172A" font-weight="600">Busola Olukoya</tspan></text>
          <text x="10" y="46" fill="#475569" font-family="sans-serif" font-size="8">Email: <tspan fill="#0F172A">busolaOlukoya@gmail.com</tspan></text>
          <text x="10" y="60" fill="#475569" font-family="sans-serif" font-size="8">Phone: <tspan fill="#0F172A">08123456789</tspan></text>
          <circle cx="214" cy="46" r="14" fill="#CBD5E1" />
          <circle cx="214" cy="43" r="5" fill="#1E293B" />
          <path d="M208 55C208 51 211 49 214 49C217 49 220 51 220 55" fill="#1E293B" />
        </g>
      </g>
      
      <path d="M300 240C330 250 360 270 360 320C360 380 320 440 280 440" stroke="#784737" stroke-width="28" stroke-linecap="round" />
    </g>
  </svg>`;
  await renderSvgToPng(why3Svg, 'whyNerho3.png', 600, 500);

  // Helper for service cards
  function makeServiceSvg(badgeText, iconSvg, bgGradients, sceneSvg) {
    return `<svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
          <stop stop-color="${bgGradients[0]}" />
          <stop offset="1" stop-color="${bgGradients[1]}" />
        </linearGradient>
      </defs>
      <rect width="480" height="480" rx="32" fill="url(#bg)" />
      ${sceneSvg}
      <!-- Floating Badge -->
      <g transform="translate(36, 400)">
        <rect x="0" y="0" width="408" height="56" rx="16" fill="#FFFFFF" />
        ${iconSvg}
        <text x="64" y="34" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="14">${badgeText}</text>
        <circle cx="378" cy="28" r="10" fill="#10B981" />
        <path d="M374 28L377 31L383 25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>`;
  }

  // 5. serviceImg1.png
  const s1 = makeServiceSvg(
    "Reliable Power Solutions",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#FFEDD5" /><circle cx="31" cy="28" r="8" fill="#EA580C" /><path d="M31 24L29 28H33L31 32" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />',
    ["#475569", "#1E293B"],
    `<!-- Inverter Cabinet & Electrician -->
    <rect x="180" y="60" width="220" height="300" rx="8" fill="#334155" stroke="#475569" stroke-width="3" />
    <rect x="200" y="90" width="80" height="60" rx="4" fill="#0F172A" />
    <rect x="210" y="100" width="30" height="10" fill="#22C55E" />
    <line x1="260" y1="170" x2="260" y2="340" stroke="#F59E0B" stroke-width="4" />
    <line x1="280" y1="170" x2="280" y2="340" stroke="#3B82F6" stroke-width="4" />
    <line x1="300" y1="170" x2="300" y2="340" stroke="#EF4444" stroke-width="4" />
    
    <g transform="translate(60, 80)">
      <path d="M20 280C20 200 60 170 140 170C220 170 240 200 240 280" fill="#991B1B" />
      <rect x="110" y="140" width="40" height="40" rx="10" fill="#78350F" />
      <ellipse cx="130" cy="110" rx="36" ry="42" fill="#78350F" />
      <path d="M84 94C84 50 110 30 130 30C150 30 176 50 176 94H84Z" fill="#EAB308" />
      <rect x="76" y="92" width="108" height="12" rx="4" fill="#CA8A04" />
      <rect x="104" y="94" width="22" height="14" rx="4" fill="#93C5FD" opacity="0.8" stroke="#1E293B" stroke-width="2" />
      <rect x="134" y="94" width="22" height="14" rx="4" fill="#93C5FD" opacity="0.8" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="190" cy="180" rx="16" ry="20" fill="#FBBF24" />
    </g>`
  );
  await renderSvgToPng(s1, 'serviceImg1.png', 480, 480);

  // 6. serviceImg2.png
  const s2 = makeServiceSvg(
    "Smart Security Solutions",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#CFFAFE" /><path d="M22 30L28 22L36 22L33 30H24L22 30Z" fill="#06B6D4" /><circle cx="34" cy="24" r="2" fill="#FFFFFF" />',
    ["#64748B", "#334155"],
    `<!-- High Tech CCTV Cameras -->
    <line x1="0" y1="120" x2="480" y2="120" stroke="#94A3B8" stroke-width="1.5" />
    <line x1="0" y1="240" x2="480" y2="240" stroke="#94A3B8" stroke-width="1.5" />
    <g transform="translate(180, 40)">
      <rect x="20" y="30" width="16" height="50" fill="#64748B" />
      <path d="M10 80L80 50L130 50L130 90L70 100L10 80Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" />
      <ellipse cx="125" cy="70" rx="8" ry="16" fill="#0F172A" />
      <circle cx="125" cy="70" r="5" fill="#0284C7" />
      <text x="60" y="75" fill="#64748B" font-family="sans-serif" font-size="8" font-weight="bold">AXIS</text>
    </g>
    <g transform="translate(90, 160)">
      <rect x="110" y="100" width="18" height="70" fill="#64748B" />
      <path d="M40 160L160 110L230 110L230 170L150 190L40 160Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" />
      <ellipse cx="225" cy="140" rx="10" ry="22" fill="#0F172A" />
      <circle cx="225" cy="140" r="7" fill="#06B6D4" />
      <text x="130" y="145" fill="#64748B" font-family="sans-serif" font-size="11" font-weight="bold">AXIS</text>
    </g>`
  );
  await renderSvgToPng(s2, 'serviceImg2.png', 480, 480);

  // 7. serviceImg4.png
  const s4 = makeServiceSvg(
    "Quality Home Appliances",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#DBEAFE" /><rect x="23" y="18" width="16" height="20" rx="3" fill="#3B82F6" /><circle cx="31" cy="28" r="4" fill="#FFFFFF" />',
    ["#E2E8F0", "#94A3B8"],
    `<!-- Clean Kitchen Interior -->
    <rect x="40" y="20" width="180" height="130" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    <rect x="230" y="20" width="180" height="130" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    <rect x="0" y="190" width="480" height="30" fill="#78350F" />
    <g transform="translate(60, 220)">
      <rect x="0" y="0" width="160" height="170" fill="#334155" stroke="#1E293B" stroke-width="2" />
      <rect x="20" y="44" width="120" height="100" rx="6" fill="#0F172A" />
      <line x1="30" y1="56" x2="130" y2="56" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
    </g>
    <g transform="translate(240, 220)">
      <rect x="0" y="0" width="170" height="170" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <circle cx="85" cy="85" r="48" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3" />
      <circle cx="85" cy="85" r="30" fill="#0284C7" opacity="0.4" />
      <rect x="20" y="15" width="40" height="12" rx="2" fill="#0F172A" />
    </g>`
  );
  await renderSvgToPng(s4, 'serviceImg4.png', 480, 480);

  // 8. serviceImg5.png
  const s5 = makeServiceSvg(
    "Professional Plumbing Services",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#DBEAFE" /><path d="M22 26H36M22 22V28M30 25V34" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" />',
    ["#64748B", "#1E293B"],
    `<!-- Plumber under sink with wrench -->
    <g transform="translate(140, 40)">
      <rect x="60" y="0" width="36" height="100" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="2" />
      <path d="M78 100C78 140 140 140 140 180V240" fill="none" stroke="#CBD5E1" stroke-width="28" stroke-linecap="round" />
      <rect x="60" y="90" width="36" height="20" rx="3" fill="#64748B" />
    </g>
    <g transform="translate(60, 100)">
      <ellipse cx="140" cy="220" rx="48" ry="40" fill="#78350F" />
      <path d="M40 320C40 240 80 200 160 200C240 200 280 240 280 320" fill="#475569" />
      <g transform="translate(130, 80) rotate(-35)">
        <rect x="0" y="0" width="16" height="140" rx="4" fill="#94A3B8" stroke="#475569" stroke-width="2" />
        <path d="M-10 -15H26V15H14V0H2V15H-10V-15Z" fill="#CBD5E1" stroke="#475569" stroke-width="2" />
      </g>
    </g>`
  );
  await renderSvgToPng(s5, 'serviceImg5.png', 480, 480);

  // 9. serviceImg6.png
  const s6 = makeServiceSvg(
    "Community Solar Solutions",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#F3E8FF" /><rect x="20" y="18" width="22" height="20" rx="2" fill="#9333EA" /><line x1="31" y1="18" x2="31" y2="38" stroke="#FFFFFF" stroke-width="1.5" />',
    ["#1E3A8A", "#0F172A"],
    `<!-- Rooftop Solar Grid -->
    <g transform="translate(20, 20)">
      <polygon points="40,20 400,20 440,300 0,300" fill="#1E3A8A" stroke="#3B82F6" stroke-width="3" />
      <line x1="130" y1="20" x2="110" y2="300" stroke="#93C5FD" stroke-width="2" />
      <line x1="220" y1="20" x2="220" y2="300" stroke="#93C5FD" stroke-width="2" />
      <line x1="310" y1="20" x2="330" y2="300" stroke="#93C5FD" stroke-width="2" />
      <line x1="28" y1="110" x2="412" y2="110" stroke="#93C5FD" stroke-width="2" />
      <line x1="14" y1="200" x2="426" y2="200" stroke="#93C5FD" stroke-width="2" />
      <g transform="translate(180, 70)">
        <rect x="20" y="30" width="30" height="50" rx="6" fill="#DC2626" />
        <rect x="30" y="80" width="10" height="30" fill="#1E293B" />
        <polygon points="32,110 38,110 35,130" fill="#CBD5E1" />
        <ellipse cx="35" cy="30" rx="18" ry="14" fill="#EAB308" />
      </g>
    </g>`
  );
  await renderSvgToPng(s6, 'serviceImg6.png', 480, 480);

  // 10. serviceImg7.png
  const s7 = makeServiceSvg(
    "Simplified Property Access",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#EEF2FF" /><rect x="22" y="18" width="18" height="20" rx="2" fill="#4F46E5" /><rect x="26" y="22" width="4" height="4" fill="#FFFFFF" /><rect x="32" y="22" width="4" height="4" fill="#FFFFFF" />',
    ["#0284C7", "#0F172A"],
    `<!-- Contemporary Apartments -->
    <rect x="0" y="0" width="480" height="140" fill="#38BDF8" />
    <g transform="translate(60, 40)">
      <rect x="0" y="20" width="360" height="320" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
      <rect x="30" y="50" width="60" height="50" fill="#0284C7" />
      <rect x="120" y="50" width="60" height="50" fill="#0284C7" />
      <rect x="210" y="50" width="60" height="50" fill="#0284C7" />
      <rect x="300" y="50" width="30" height="50" fill="#0284C7" />
      <rect x="30" y="130" width="60" height="50" fill="#0284C7" />
      <rect x="120" y="130" width="60" height="50" fill="#0284C7" />
      <rect x="210" y="130" width="60" height="50" fill="#0284C7" />
      <rect x="300" y="130" width="30" height="50" fill="#0284C7" />
    </g>`
  );
  await renderSvgToPng(s7, 'serviceImg7.png', 480, 480);

  // 11. serviceImg8.png
  const s8 = makeServiceSvg(
    "Trusted Professional Services",
    '<rect x="12" y="10" width="38" height="36" rx="8" fill="#FFF7ED" /><rect x="20" y="19" width="22" height="18" rx="3" fill="#EA580C" /><path d="M26 19V16H36V19" stroke="#EA580C" stroke-width="1.5" />',
    ["#E2E8F0", "#475569"],
    `<!-- Technician on Ladder -->
    <g transform="translate(100, 20)">
      <line x1="80" y1="0" x2="40" y2="360" stroke="#94A3B8" stroke-width="6" />
      <line x1="130" y1="0" x2="90" y2="360" stroke="#94A3B8" stroke-width="6" />
      <line x1="75" y1="60" x2="125" y2="60" stroke="#94A3B8" stroke-width="4" />
      <line x1="70" y1="120" x2="120" y2="120" stroke="#94A3B8" stroke-width="4" />
      <line x1="65" y1="180" x2="115" y2="180" stroke="#94A3B8" stroke-width="4" />
      <line x1="60" y1="240" x2="110" y2="240" stroke="#94A3B8" stroke-width="4" />
      <ellipse cx="110" cy="80" rx="22" ry="26" fill="#78350F" />
      <path d="M88 74C88 50 100 40 110 40C120 40 132 50 132 74H88Z" fill="#F8FAFC" />
      <path d="M80 120C80 90 90 85 110 85C130 85 140 90 140 120V240H80Z" fill="#EA580C" />
      <line x1="85" y1="95" x2="135" y2="150" stroke="#EAB308" stroke-width="4" />
      <line x1="135" y1="95" x2="85" y2="150" stroke="#EAB308" stroke-width="4" />
    </g>`
  );
  await renderSvgToPng(s8, 'serviceImg8.png', 480, 480);

  // 12. payWithParthner.png
  function makePaySvg(title, desc) {
    return `<svg width="400" height="440" viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="440" rx="28" fill="#0B192C" />
      <g transform="translate(45, 15)">
        <rect x="0" y="0" width="310" height="410" rx="36" fill="#FFFFFF" stroke="#334155" stroke-width="4" />
        <rect x="110" y="12" width="90" height="16" rx="8" fill="#0F172A" />
        <text x="24" y="26" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">19:41</text>
        <rect x="264" y="18" width="16" height="8" rx="2" fill="none" stroke="#0F172A" stroke-width="1.5" />
        
        <circle cx="34" cy="54" r="12" fill="#F1F5F9" />
        <path d="M36 50L32 54L36 58" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
        <text x="100" y="58" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="14">${title}</text>

        <g transform="translate(18, 80)">
          <rect x="0" y="0" width="274" height="66" rx="8" fill="#F8FAFC" />
          <text x="10" y="18" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="9.5">Description:</text>
          <text x="74" y="18" fill="#64748B" font-family="sans-serif" font-size="9">${desc.slice(0, 36)}</text>
          <text x="10" y="32" fill="#64748B" font-family="sans-serif" font-size="9">${desc.slice(36, 78)}</text>
          <text x="10" y="46" fill="#64748B" font-family="sans-serif" font-size="9">${desc.slice(78)}</text>
        </g>

        <g transform="translate(18, 164)">
          <text x="0" y="10" fill="#334155" font-family="sans-serif" font-size="10.5">Choose initial deposit plan</text>
          <rect x="0" y="20" width="60" height="28" rx="6" fill="#EA580C" />
          <text x="18" y="38" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="10.5">50%</text>
          <rect x="68" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="86" y="38" fill="#334155" font-family="sans-serif" font-size="10.5">75%</text>
          <rect x="136" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="154" y="38" fill="#334155" font-family="sans-serif" font-size="10.5">80%</text>
          <rect x="204" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="222" y="38" fill="#334155" font-family="sans-serif" font-size="10.5">90%</text>
        </g>

        <g transform="translate(18, 240)">
          <text x="0" y="10" fill="#334155" font-family="sans-serif" font-size="10.5">Select repayment duration</text>
          <rect x="0" y="20" width="60" height="28" rx="6" fill="#EA580C" />
          <text x="10" y="38" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="9.5">1-Month</text>
          <rect x="68" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="76" y="38" fill="#334155" font-family="sans-serif" font-size="9.5">2-Months</text>
          <rect x="136" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="144" y="38" fill="#334155" font-family="sans-serif" font-size="9.5">3-Months</text>
          <rect x="204" y="20" width="60" height="28" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="212" y="38" fill="#334155" font-family="sans-serif" font-size="9.5">4-Months</text>
        </g>
      </g>
    </svg>`;
  }

  const pPartner = makePaySvg("Pay with Partner", "Interest-based financing with reducing balance and delivery after non refundable due diligence process.");
  await renderSvgToPng(pPartner, 'payWithParthner.png', 400, 440);

  // 13. payWithZero.png & payWithZero.pn
  const pZero = makePaySvg("Pay with Zero", "Zero percent interest installment financing with scheduled automated deductions.");
  await renderSvgToPng(pZero, 'payWithZero.png', 400, 440);
  fs.copyFileSync(path.join(publicDir, 'payWithZero.png'), path.join(publicDir, 'payWithZero.pn'));
  console.log('Copied payWithZero.pn');

  // 14. payNow.png & paynow.png
  const payNowSvg = `<svg width="400" height="440" viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="warmWall" x1="0" y1="0" x2="400" y2="440" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E2E8F0" />
        <stop offset="1" stop-color="#CBD5E1" />
      </linearGradient>
    </defs>
    <rect width="400" height="440" rx="28" fill="url(#warmWall)" />
    
    <rect x="0" y="380" width="400" height="60" fill="#FFFFFF" />
    <rect x="140" y="350" width="36" height="34" rx="4" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
    <path d="M176 358C182 358 186 364 186 368C186 372 182 376 176 376" stroke="#CBD5E1" stroke-width="2" />

    <g transform="translate(100, 40)">
      <path d="M10 340C10 240 40 210 110 210C180 210 210 240 210 340" fill="#0F172A" />
      <circle cx="110" cy="270" r="28" fill="#F59E0B" opacity="0.4" />
      <path d="M96 260L124 280M96 280L124 260" stroke="#F59E0B" stroke-width="2" />

      <path d="M30 250L-20 340L20 340" fill="#78350F" />
      <path d="M190 250L130 310" stroke="#78350F" stroke-width="24" stroke-linecap="round" />
      <rect x="70" y="270" width="28" height="50" rx="5" transform="rotate(-25 70 270)" fill="#E2E8F0" stroke="#1E293B" stroke-width="2" />

      <rect x="94" y="160" width="32" height="60" rx="8" fill="#78350F" />
      <ellipse cx="110" cy="120" rx="42" ry="48" fill="#78350F" />
      
      <path d="M88 136C96 156 124 156 132 136Z" fill="#FFFFFF" />
      <line x1="88" y1="136" x2="132" y2="136" stroke="#1E293B" stroke-width="1.5" />

      <path d="M94 110C98 106 104 106 108 110" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      <path d="M116 110C120 106 126 106 130 110" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      
      <ellipse cx="110" cy="76" rx="54" ry="40" fill="#0F172A" />
      <rect x="52" y="70" width="12" height="70" rx="6" fill="#0F172A" transform="rotate(-15 52 70)" />
      <rect x="68" y="60" width="12" height="85" rx="6" fill="#0F172A" transform="rotate(-10 68 60)" />
      <rect x="144" y="60" width="12" height="80" rx="6" fill="#0F172A" transform="rotate(10 144 60)" />
      <rect x="158" y="70" width="12" height="70" rx="6" fill="#0F172A" transform="rotate(15 158 70)" />
      <circle cx="90" cy="50" r="10" fill="#0F172A" />
      <circle cx="110" cy="45" r="12" fill="#0F172A" />
      <circle cx="130" cy="50" r="10" fill="#0F172A" />
    </g>
  </svg>`;
  await renderSvgToPng(payNowSvg, 'payNow.png', 400, 440);
  fs.copyFileSync(path.join(publicDir, 'payNow.png'), path.join(publicDir, 'paynow.png'));
  console.log('Copied paynow.png');

  console.log('All image assets successfully generated in public/!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
