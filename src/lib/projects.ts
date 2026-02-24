export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  liveUrl?: string;
  screenshots?: { desktop: string; tablet: string; mobile: string };
  screens?: { src: string; label: string }[];
  inProgress?: boolean;
  role: string;
  timeline: string;
  client: string;
  category: string;
  challenge: string;
  research: string;
  process: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    title: "Stanzasoft Website Redesign",
    slug: "stanzasoft",
    description:
      "Complete website redesign for a software development company, focusing on modern aesthetics, improved user flow, and brand consistency.",
    tags: ["UI/UX Design", "Web Design", "Responsive"],
    thumbnail: "/images/projects/stanzasoft.png",
    liveUrl: "https://stanzamainwebsite.vercel.app/",
    screenshots: {
      desktop: "/images/projects/stanzasoft-desktop.png",
      tablet: "/images/projects/stanzasoft-tablet.png",
      mobile: "/images/projects/stanzasoft-mobile.png",
    },
    role: "Lead UI/UX Designer",
    timeline: "4 weeks",
    client: "Stanza Soft",
    category: "Website Redesign",
    challenge:
      "Stanzasoft's existing website felt outdated and didn't effectively communicate their technical expertise and range of services. The navigation was confusing, the visual hierarchy was unclear, and the site wasn't optimized for mobile devices. The challenge was to create a modern, professional web presence that would attract potential clients and clearly showcase their capabilities.",
    research:
      "Conducted a thorough competitive analysis of leading software development companies' websites. Performed user interviews with potential clients to understand what information they look for when evaluating development partners. Analyzed the existing site's analytics to identify high-bounce pages and user drop-off points. Key insight: visitors wanted to quickly understand Stanzasoft's expertise areas and see proof of their work through case studies.",
    process:
      "Started with information architecture restructuring, creating a clearer sitemap and user flows. Developed wireframes for all key pages, iterating based on stakeholder feedback. Created a fresh visual design system with a modern color palette, typography scale, and component library. Built interactive prototypes for usability testing before moving to development. Focused on responsive design from the start, ensuring a seamless experience across all devices.",
    outcome:
      "Delivered a fully responsive, modern website that effectively communicates Stanzasoft's brand identity and services. The redesign resulted in improved visual hierarchy, intuitive navigation, and a cohesive design system that can scale with the company's growth.",
  },
  {
    title: "Grownex Website",
    slug: "grownex",
    description:
      "Designed and developed a clean, conversion-focused website for a growth-oriented business platform with dynamic content sections.",
    tags: ["UI/UX Design", "Web Design", "Frontend Development"],
    thumbnail: "/images/projects/grownex.png",
    liveUrl: "https://grownex-website.vercel.app/",
    screenshots: {
      desktop: "/images/projects/grownex-desktop.png",
      tablet: "/images/projects/grownex-tablet.png",
      mobile: "/images/projects/grownex-mobile.png",
    },
    role: "UI/UX Designer & Frontend Developer",
    timeline: "3 weeks",
    client: "Grownex",
    category: "Web Design & Development",
    challenge:
      "Grownex needed a website that would establish credibility in a competitive market while effectively converting visitors into users. The existing landing page lacked visual appeal and failed to communicate the platform's unique value propositions. The site needed to handle dynamic content while maintaining performance and visual consistency.",
    research:
      "Researched competitor platforms and growth-focused SaaS websites to identify industry best practices. Studied conversion rate optimization patterns and high-performing landing page structures. Gathered requirements from stakeholders about target audience demographics and key messaging priorities. Analyzed user behavior patterns to determine optimal content placement and CTA positioning.",
    process:
      "Began with content strategy to define the messaging hierarchy and key conversion points. Created mood boards exploring different visual directions before settling on a clean, modern aesthetic. Designed component-by-component in Figma with attention to micro-interactions and hover states. Developed the frontend using Next.js and Tailwind CSS, implementing smooth scroll animations and responsive layouts. Iterated on the design based on A/B testing insights.",
    outcome:
      "Launched a polished, high-performance website that effectively communicates Grownex's value proposition. The clean design with strategic use of whitespace and clear CTAs creates a professional impression while guiding users toward conversion points.",
  },
  {
    title: "PrepMonkey Application",
    slug: "prepmonkey",
    description:
      "An AI-powered interview preparation platform with mobile and web interfaces, helping users practice and improve their interview skills.",
    tags: ["UI/UX Design", "Mobile App", "Web App", "AI"],
    inProgress: true,
    role: "UI/UX Designer",
    timeline: "Ongoing",
    client: "PrepMonkey",
    category: "Mobile & Web Application",
    challenge:
      "Interview preparation is a stressful process that lacks personalized, real-time feedback. Existing tools offer generic questions without adapting to user performance or providing meaningful insights. The challenge was to design an intuitive, AI-powered platform that makes interview practice feel natural and provides actionable feedback to help users improve.",
    research:
      "Conducted user interviews with job seekers at various career stages to understand their interview preparation habits and pain points. Surveyed existing interview prep tools to identify gaps in the market. Created user personas representing different use cases — from recent graduates to career changers. Key finding: users want practice that feels realistic and feedback that's specific, not generic encouragement.",
    process:
      "Designed the information architecture to support both quick practice sessions and deep-dive preparation modes. Created user flows for onboarding, practice sessions, and progress tracking. Developed wireframes for both mobile and web platforms, ensuring feature parity while optimizing for each platform's strengths. Built a design system that supports the AI-driven interface with clear visual feedback mechanisms and progress indicators.",
    outcome:
      "Currently in active development. The design delivers a clean, focused interface that minimizes distractions during practice sessions while providing rich, AI-generated feedback. The dual-platform approach ensures users can practice anywhere — on mobile during commutes or on desktop for focused sessions.",
  },
  {
    title: "Austere Beauty",
    slug: "austere-beauty",
    description:
      "A premium e-commerce experience for a beauty brand, featuring elegant product presentation, seamless checkout, and mobile-first design.",
    tags: ["UI/UX Design", "E-commerce", "Mobile", "Web"],
    thumbnail: "/images/projects/austere-beauty.png",
    screens: [
      { src: "/images/projects/austere-beauty-home.png", label: "Home" },
      { src: "/images/projects/austere-beauty-men.png", label: "Men" },
      { src: "/images/projects/austere-beauty-kids.png", label: "Kids" },
      { src: "/images/projects/austere-beauty-women.png", label: "Women" },
      { src: "/images/projects/austere-beauty-trending.png", label: "Trending" },
      { src: "/images/projects/austere-beauty-product.png", label: "Product Detail" },
    ],
    role: "UI/UX Designer",
    timeline: "5 weeks",
    client: "Austere Beauty",
    category: "E-commerce — Web & Mobile",
    challenge:
      "Austere Beauty needed a digital presence that matched the premium quality of their products. The brand required an e-commerce platform that would feel luxurious yet accessible, with a seamless shopping experience across web and mobile. The challenge was balancing aesthetic sophistication with e-commerce usability — making the shopping experience feel effortless while maintaining the brand's high-end positioning.",
    research:
      "Analyzed top luxury beauty e-commerce experiences including Glossier, Aesop, and Drunk Elephant to identify patterns that convey premium quality. Conducted user research on beauty product shopping behavior, focusing on how consumers discover, evaluate, and purchase beauty products online. Studied mobile shopping patterns specific to the beauty industry. Key insight: high-quality imagery and simplified product information drive conversion in premium beauty.",
    process:
      "Developed a visual language that reflects the brand's minimalist luxury aesthetic — clean layouts, generous whitespace, and a restrained color palette that lets product photography shine. Designed a streamlined product discovery flow with intuitive filtering and recommendation features. Created a checkout experience optimized for mobile with minimal steps and clear progress indication. Built a comprehensive design system including product cards, navigation patterns, and interactive elements.",
    outcome:
      "Delivered a cohesive e-commerce experience across web and mobile that elevates the Austere Beauty brand. The design features elegant product presentation with full-bleed imagery, a simplified navigation structure, and a checkout flow that reduces friction while maintaining the premium feel throughout the user journey.",
  },
];
