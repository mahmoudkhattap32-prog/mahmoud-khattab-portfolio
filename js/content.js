/* ============================================================
   CONTENT FILE: edit this file to change the site.
   - Text, numbers, links, images and videos all live here.
   - Images go in /assets/... and are referenced by path below.
   - Hero, About and Contact text lives in index.html.
   ============================================================ */
window.SITE = {

  contact: {
    phone: "+20 101 921 5082",
    phoneLink: "+201019215082",
    links: "https://linkatik.bio/mahmoud-khattb1",
  },

  /* ---------- Services ---------- */
  services: [
    { title: "Media buying",
      text: "Campaign strategy, audience targeting, ad creation and performance tracking on Meta and Google.",
      points: ["Campaign strategy & planning", "Audience targeting & segmentation", "Ad creation", "Performance tracking & optimization"] },
    { title: "Social media management",
      text: "Planning, publishing and community work that grows a brand's presence on every platform.",
      points: ["Strategic content planning", "Consistent publishing", "Audience engagement", "Monitoring and optimizing content"] },
    { title: "Copywriting",
      text: "Clear, brand-aligned messages written for the audience that will read them.",
      points: ["Websites and official pages", "Awareness campaigns", "Ad copy and captions", "Arabic and English"] },
    { title: "Content creation",
      text: "Content that gets attention and carries the brand message across platforms.",
      points: ["Short-form video ideas and scripts", "Visual direction in Canva", "AI-assisted content", "Content calendars"] },
  ],

  /* ---------- Skills & tools ---------- */
  skills: [
    { name: "Media buying", proof: "#one-bond" },
    { name: "Meta Ads", proof: "#meta-ads" },
    { name: "CRO", proof: "#one-bond" },
    { name: "Targeting", proof: "#one-bond" },
    { name: "Data analysis", proof: "#reporting" },
    { name: "Content strategy", proof: "#one-bond" },
    { name: "Content calendars", proof: "#one-bond" },
    { name: "Caption writing", proof: "#caviaro" },
    { name: "Design & creative", proof: "#brand" },
  ],
  tools: ["Meta Ads Manager", "Google Ads", "Meta Ad Library", "Foreplay", "BigSpy", "Mailchimp", "Canva", "ChatGPT", "AI tools", "Microsoft Excel & Office"],

  /* ---------- Case studies ---------- */
  oneBond: {
    intro: "One Bond is an Egyptian men's grooming brand. Its Men's Face Wash is built for oily, sweaty, breakout-prone skin in a hot, humid climate. I planned a 30-day campaign from brief to ads, email and reporting.",
    kpis: [
      { v: "+30%", l: "sales growth with a 4:1 return on ad spend" },
      { v: "3%+", l: "website conversion rate" },
      { v: "8,000", l: "new followers on Instagram and TikTok" },
      { v: "500K", l: "video views" },
      { v: "20K", l: "visits to the online store" },
    ],
    audience: {
      lines: [
        ["Age", "17 to 35, male"],
        ["Where", "Cairo, Giza, Alexandria, Mansoura, Tanta"],
        ["Income", "Medium to upper-medium"],
        ["Who", "Students, young professionals, gym-goers, outdoor workers"],
        ["Skin", "Oily, combination, acne-prone"],
        ["Interests", "Fitness, football, grooming, gaming, fashion, tech"],
        ["Behavior", "Heavy TikTok and Instagram users; buy from pharmacies"],
      ],
      persona: { name: "Omar Hassan, 22", role: "University student, medium income, oily skin",
        goals: ["Reduce oiliness and shine", "Look fresh throughout the day", "Avoid breakouts"],
        frustrations: ["Products that feel harsh or burn", "Women's products that don't suit men's skin", "Expensive international brands"],
        buys: ["A simple, fast solution", "Affordable price", "Men-only packaging and scent"] },
    },
    positioning: {
      message: "Deep Clean for Men Only. Stay Fresh All Day.",
      competitors: ["Nivea Men", "Garnier Men", "L'Oréal Men Expert", "Roofa"],
      advantage: ["Affordable", "Simple", "Made for Egyptian men"],
      weaknesses: ["Higher prices", "Not tailored to local needs", "Complicated routines"],
    },
    weeks: [
      { n: "Week 1", t: "The story", d: "Launch and inspiration" },
      { n: "Week 2", t: "Problem to solution", d: "Oily skin, sweat, breakouts, then the fix" },
      { n: "Week 3", t: "The experience", d: "Testimonials and social proof" },
      { n: "Week 4", t: "The offers", d: "Conversion and retargeting" },
    ],
    adStyles: ["UGC videos", "Before and after shots", "Testimonials", "TikTok challenge"],
    calendar: [
      { src: "assets/sheets/onebond-cal-1.webp", w: 1600, h: 690, alt: "One Bond content calendar, March 5 to 9", cap: "Content calendar, Mar 5 to 9" },
      { src: "assets/sheets/onebond-cal-2.webp", w: 1600, h: 671, alt: "One Bond content calendar, March 10 to 13", cap: "Content calendar, Mar 10 to 13" },
      { src: "assets/sheets/onebond-cal-3.webp", w: 1600, h: 661, alt: "One Bond content calendar, March 15 to 18", cap: "Content calendar, Mar 15 to 18" },
    ],
    reel: { src: "assets/video/reel-onebond.mp4", poster: "assets/video/reel-onebond.jpg", cap: "Reel for the calendar row “Oily skin problem” (Mar 8)" },
    ads: [
      { src: "assets/ads/gads-display-text.webp", w: 513, h: 777, alt: "Google Ads display text ad preview for One Bond", cap: "Display text ad" },
      { src: "assets/ads/gads-display-delivery.webp", w: 525, h: 787, alt: "Google Ads display ad preview about fast delivery", cap: "Display, fast delivery" },
      { src: "assets/ads/gads-display-carousel.webp", w: 494, h: 768, alt: "Google Ads carousel display ad preview", cap: "Display carousel" },
      { src: "assets/ads/gads-display-products.webp", w: 515, h: 745, alt: "Google Ads display ad preview, Made for Men Only products", cap: "Display, product range" },
      { src: "assets/ads/gads-discover-feed.webp", w: 486, h: 789, alt: "Google Discover feed ad preview", cap: "Discover feed" },
      { src: "assets/ads/gads-discover-products.webp", w: 448, h: 853, alt: "Google Discover product ad preview", cap: "Discover products" },
    ],
    emails: [
      { src: "assets/ads/email-welcome.webp", w: 912, h: 562, alt: "Welcome email draft in Arabic", cap: "Welcome" },
      { src: "assets/ads/email-promo.webp", w: 779, h: 557, alt: "Promotional email draft in Arabic", cap: "Promotional" },
      { src: "assets/ads/email-followup.webp", w: 769, h: 490, alt: "Follow-up email draft in Arabic", cap: "Follow-up" },
      { src: "assets/ads/email-reengage.webp", w: 841, h: 615, alt: "Re-engagement email draft in Arabic", cap: "Re-engagement" },
    ],
    brand: [
      { src: "assets/brand/onebond-logo.webp", w: 700, h: 405, alt: "One Bond logo redesign in yellow on black", cap: "New logo" },
      { src: "assets/brand/onebond-billboard.webp", w: 789, h: 529, alt: "One Bond logo on a billboard mockup", cap: "Billboard mockup" },
      { src: "assets/brand/onebond-sign.webp", w: 787, h: 511, alt: "One Bond logo on a storefront sign mockup", cap: "Sign mockup" },
      { src: "assets/brand/onebond-tee.webp", w: 1000, h: 657, alt: "One Bond logo on a t-shirt mockup", cap: "Merch mockup" },
      { src: "assets/brand/wix-hero.webp", w: 1400, h: 622, alt: "One Bond website home page built on Wix", cap: "Website home page" },
      { src: "assets/brand/wix-product.webp", w: 1400, h: 648, alt: "One Bond website product page", cap: "Product page" },
    ],
    keywords: [
      { src: "assets/ads/gads-setup-keywords.webp", w: 1170, h: 593, alt: "Google Ads campaign setup: keyword themes", cap: "Keyword themes (English and Arabic)" },
    ],
    creatives: [
      { src: "assets/brand/onebond-ad-blue.webp", w: 900, h: 1350, alt: "One Bond ad: One wash. Deep clean.", cap: "Ad: One wash. Deep clean." },
      { src: "assets/brand/onebond-ad-grid.webp", w: 900, h: 900, alt: "Four One Bond ad creatives for Facebook", cap: "Four ad creatives for Facebook" },
    ],
    emailNote: "Four-email flow (Arabic): welcome, promotional, follow-up and re-engagement.",
  },

  caviaro: {
    intro: "A Vitamin C serum campaign. I wrote the ad copy and caption, designed the creative and planned the content calendar and KPIs.",
    headline: "Caviaro Serum: the secret to timeless glow",
    caption: ["Pure Vitamin C power for a radiant, youthful skin.", "Reveal your natural glow with Caviaro.", "Reduces dark spots", "Boosts hydration", "Gives you that natural radiance", "Shop Now"],
    hashtags: "#CaviaroSerum #Skincare #VitaminC #GlowSkin",
    ad: { src: "assets/brand/caviaro-ad.webp", w: 900, h: 1350, alt: "Caviaro Serum ad creative", cap: "Ad creative" },
    calendar: { src: "assets/sheets/caviaro-cal.webp", w: 1600, h: 742, alt: "Caviaro content calendar", cap: "Content calendar" },
  },

  valyrian: {
    intro: "Valyrian is a premium fashion brand with an Old Money look. I wrote the audience segmentation and built a 40-day media buying plan across TikTok, Instagram and Facebook.",
    total: { spend: 36000, budget: 40000 },
    phases: [
      { name: "Awareness", where: "TikTok + Instagram", days: 9, budget: 6000, kpi: "Video completion 15 to 25%" },
      { name: "Engagement", where: "Instagram + Facebook", days: 4, budget: 4000, kpi: "Engagement rate 4 to 7%" },
      { name: "Traffic", where: "Instagram + Facebook", days: 9, budget: 6000, kpi: "CTR 2 to 4%" },
      { name: "Retargeting", where: "Facebook + Instagram", days: 4, budget: 4000, kpi: "CTR 4 to 7%" },
      { name: "Conversion", where: "Facebook + Instagram", days: 10, budget: 13000, kpi: "ROAS 3 to 6" },
      { name: "Sales retargeting", where: "Facebook + Instagram", days: 4, budget: 3000, kpi: "ROAS 3 to 5" },
    ],
    segments: [
      { name: "Young professionals", age: "23 to 30", income: "15K to 40K", product: "Shirts", motive: "Improve appearance" },
      { name: "Entrepreneurs", age: "25 to 35", income: "30K to 80K", product: "Blazers", motive: "Status" },
      { name: "Elite professionals", age: "30 to 40", income: "40K+", product: "Premium pieces", motive: "Prestige" },
      { name: "Aesthetic creators", age: "22 to 30", income: "15K to 35K", product: "Minimal items", motive: "Aesthetic identity" },
    ],
    where: "Alexandria, Cairo and the North Coast, where purchasing power is highest.",
    images: [
      { src: "assets/brand/valyrian-logo.webp", w: 600, h: 600, alt: "Valyrian logo with a horse emblem", cap: "Logo" },
      { src: "assets/brand/valyrian-packaging.webp", w: 1400, h: 792, alt: "Valyrian packaging design", cap: "Packaging" },
    ],
  },

  metaAds: {
    intro: "Ad setup and previews inside Meta Ads Manager: placements, ad settings, and the carousel and video previews I checked before launch.",
    images: [
      { src: "assets/meta/meta-placements-editor.webp", w: 1600, h: 765, alt: "Meta Ads Manager placements editor", cap: "Placement editing" },
      { src: "assets/meta/meta-ad-settings.webp", w: 1600, h: 596, alt: "Meta Ads Manager ad settings", cap: "Ad settings" },
      { src: "assets/meta/meta-preview-carousel.webp", w: 1600, h: 779, alt: "Meta Ads Manager carousel ad preview", cap: "Carousel preview" },
      { src: "assets/meta/meta-preview-video.webp", w: 1600, h: 732, alt: "Meta Ads Manager video ad preview", cap: "Video preview" },
    ],
  },

  reporting: {
    intro: "Excel is where I check what a campaign actually did: spend, clicks, conversions, cost per result and profit.",
    images: [
      { src: "assets/excel/excel-dashboard.webp", w: 1600, h: 659, alt: "Excel campaign dashboard", cap: "Dashboard" },
      { src: "assets/excel/excel-campaign-data.webp", w: 1600, h: 372, alt: "Excel campaign data table", cap: "Campaign data" },
      { src: "assets/excel/excel-campaign-compare.webp", w: 1400, h: 193, alt: "Excel comparison of campaigns A to F", cap: "Campaign comparison" },
    ],
  },

  designs: [
    { src: "assets/brand/future-steel.webp", w: 845, h: 461, alt: "Future Steel Co. logo concept, Arabic and English", cap: "Future Steel Co.", tag: "Logo concept" },
    { src: "assets/brand/infinix-concept.webp", w: 900, h: 1350, alt: "Infinix concept ad", cap: "Infinix", tag: "Concept ad" },
  ],

  /* ---------- Short-form videos (Arabic) ---------- */
  videos: [
    { src: "assets/video/short-outbound-inbound.mp4", poster: "assets/video/short-outbound-inbound.jpg", title: "Outbound vs inbound marketing", tag: "Explainer" },
    { src: "assets/video/short-the-rule.mp4", poster: "assets/video/short-the-rule.jpg", title: "The rule", tag: "Explainer" },
    { src: "assets/video/short-reach.mp4", poster: "assets/video/short-reach.jpg", title: "Reach", tag: "Explainer" },
  ],

  /* ---------- Certificates ---------- */
  certificates: [
    { title: "Claude 101", by: "Anthropic", src: "assets/certs/claude-101.webp", w: 1200, h: 927 },
    { title: "Digital Marketing, 120+ hours", by: "NTI and Digital Egypt Youth, Feb to Apr 2026", src: "assets/certs/nti.webp", w: 1400, h: 990 },
    { title: "Digital Marketing Training Program, 45 hours", by: "Skills4Trends | EYouth, Oct to Nov 2025", src: "assets/certs/skills4trends.webp", w: 1400, h: 990 },
    { title: "Digital Advertising Certified", by: "HubSpot Academy, valid to Nov 2028", src: "assets/certs/hubspot.webp", w: 1140, h: 880 },
    { title: "Social Media Marketing", by: "M3aarf, Sept 2025", src: "assets/certs/m3aarf.webp", w: 1000, h: 1414 },
    { title: "Start Your Career in Digital Marketing", by: "Mahara-Tech (ITI platform), Jan 2026", src: "assets/certs/mahara-tech.webp", w: 1200, h: 927 },
    { title: "Fundamentals of Digital Marketing", by: "Google, 2020", src: "assets/certs/google-fundamentals.webp", w: 1200, h: 849 },
    { title: "Digital Marketing Master Class", by: "Udemy, 2020", src: "assets/certs/udemy.webp", w: 1200, h: 893 },
  ],
};
