// ============================================================
// data.ts — Central data file for the entire portfolio website.
// All the text, stats, services, projects, etc. shown on the
// site come from here. Edit this ONE file to update everything.
// ============================================================

// --------------- PROFILE (hero, contact & footer) ---------------
// This object holds your basic info. It's used in:
//   • Hero section  → name & role
//   • Contact section → email, phone, location
//   • Footer → copyright with your name
export const profile = {
  name: "Achintha Sewmina",           // Your full name (shown in hero heading & footer)
  role: "Software Engineer",           // Job title (shown below your name in the hero)
  email: "sewminagamage@gmail.com",    // Contact email (shown in contact section & mailto link)
  phone: "+94 740503225",              // Phone number (shown in contact section & tel link)
  location: "Colombo, Sri Lanka",      // Your location (shown in contact section)
};

// --------------- NAVIGATION ---------------
// Each string becomes a nav link in the top navbar.
// The link scrolls to a section whose id matches (lowercase).
// `as const` makes TypeScript treat these as literal types (not just string[]).
export const nav = ["Home", "About", "Services", "Work", "Process", "Testimonials", "Contact"] as const;

// --------------- BRAND LOGOS (hero "Trusted by" row) ---------------
// Names of companies/brands displayed below the hero call-to-action.
// These are text-only — no actual logos, just the brand names.
export const brands = ["Google", "Microsoft", "airbnb", "HubSpot", "dribbble"];

// --------------- STATS (About section) ---------------
// Each stat card shows an icon, a big number (value), and a label.
//   • icon  → name of the SVG icon rendered by the <Icon> component
//   • value → the number/text displayed prominently
//   • label → description text below the value
export const stats = [
  { icon: "layers", value: "5+", label: "Years Experience" },
  { icon: "mail", value: "30+", label: "Projects Completed" },
  { icon: "user", value: "15+", label: "Happy Clients" },
];

// --------------- SERVICES (What I Do section) ---------------
// Each service card has:
//   • title → heading of the card
//   • text  → short description paragraph
//   • tone  → color theme (matches CSS class `tone-{amber|violet|indigo|teal}`)
// The icon for each card is mapped by index in page.tsx → serviceIcon array.
export const services = [
  { title: "Product Design", text: "Designing intuitive and engaging user interfaces for web and mobile products.", tone: "amber" },
  { title: "UI/UX Design", text: "Creating seamless user experiences through research, wireframing and prototyping.", tone: "violet" },
  { title: "Design Systems", text: "Building scalable design systems and component libraries for consistent experiences.", tone: "indigo" },
  { title: "User Research", text: "Understanding users deeply through research and data to inform better design.", tone: "teal" },
] as const;

// --------------- TOOLS & SKILLS (Technologies section) ---------------
// Each tool shows a short "mark" (symbol) and name in a card.
//   • name  → full tool name displayed below the mark
//   • mark  → short symbol/letter shown prominently (acts like a mini-logo)
//   • color → hex color applied to the mark text via inline style
export const tools = [
  { name: "Figma", mark: "F", color: "#F24E1E" },
  { name: "Sketch", mark: "◆", color: "#F7B500" },
  { name: "Adobe XD", mark: "Xd", color: "#FF61F6" },
  { name: "Photoshop", mark: "Ps", color: "#31A8FF" },
  { name: "Illustrator", mark: "Ai", color: "#FF9A00" },
  { name: "Webflow", mark: "W", color: "#4353FF" },
  { name: "Framer", mark: "◤", color: "#1c1b29" },
  { name: "Notion", mark: "N", color: "#1c1b29" },
] as const;

// --------------- PROJECTS (Featured Work section) ---------------
// Each project card shows a mock browser window with a color theme.
//   • title → project name (displayed as the card heading)
//   • kind  → category/type label (shown as small text below title)
//   • hue   → color theme for the mock screenshot (CSS class `hue-{violet|blue|slate}`)
export const projects = [
  { title: "Finova – Finance App", kind: "Mobile App Design", hue: "violet" },
  { title: "Analytics Dashboard", kind: "Web Application", hue: "blue" },
  { title: "SaaS Landing Page", kind: "Web Design", hue: "slate" },
] as const;

// --------------- DESIGN PROCESS (Process section) ---------------
// Ordered steps shown as numbered cards (01, 02, 03...).
//   • title → step name
//   • text  → brief description of what happens in this step
export const steps = [
  { title: "Discover", text: "Understanding user needs and project goals." },
  { title: "Define", text: "Research, analyze and define the problem." },
  { title: "Ideate", text: "Brainstorm and create wireframes & concepts." },
  { title: "Design", text: "Crafting clean, intuitive and engaging user interfaces." },
  { title: "Test & Iterate", text: "Testing with users and refining for the best experience." },
];

// --------------- TESTIMONIALS (What Clients Say section) ---------------
// Each testimonial is a <figure> with a <blockquote> and author info.
//   • quote → the client's feedback text
//   • name  → client's full name (initials are auto-generated for the avatar)
//   • role  → client's job title & company
export const testimonials = [
  {
    quote: "Achintha is an exceptional engineer. He understands user needs deeply and delivers outstanding results on every project.",
    name: "Rohit Sharma",
    role: "Product Manager, Google",
  },
  {
    quote: "Working with Achintha was a smooth and inspiring experience. His attention to detail is truly impressive.",
    name: "Neha Verma",
    role: "Design Lead, Microsoft",
  },
  {
    quote: "Achintha's work not only looks amazing but also solves real user problems. Highly recommended!",
    name: "Karan Malhotra",
    role: "Founder, Startupx",
  },
];
