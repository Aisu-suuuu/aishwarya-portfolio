export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "End-to-end user experience design including user research, wireframing, prototyping, and high-fidelity interface design. I create intuitive, user-centered designs that solve real problems and delight users at every touchpoint. From discovery workshops to interactive prototypes, I ensure every design decision is grounded in research and aligned with business goals.",
    icon: "Palette",
  },
  {
    title: "Web Design",
    description:
      "Crafting visually stunning, responsive websites that balance aesthetics with functionality. I design modern web experiences that capture brand identity, guide user attention, and convert visitors into customers. Every layout is thoughtfully structured with clear visual hierarchy, strategic use of whitespace, and attention to micro-interactions that make the experience memorable.",
    icon: "Monitor",
  },
  {
    title: "Mobile App Design",
    description:
      "Designing mobile-first experiences that feel native and intuitive on every device. I create clean, gesture-friendly interfaces optimized for iOS and Android platforms, focusing on seamless navigation, performance-conscious design, and accessible interactions. From onboarding flows to complex feature sets, I ensure mobile experiences are both powerful and delightful.",
    icon: "Smartphone",
  },
  {
    title: "Frontend Development",
    description:
      "Bringing designs to life with clean, performant code using modern technologies like Next.js, React, Tailwind CSS, and Framer Motion. I bridge the gap between design and development, ensuring pixel-perfect implementation with smooth animations, responsive layouts, and optimized performance. My code is maintainable, accessible, and built to scale.",
    icon: "Code",
  },
  {
    title: "AI-Assisted Design",
    description:
      "Leveraging artificial intelligence tools and workflows to accelerate the design process and push creative boundaries. I integrate AI into design workflows for rapid prototyping, content generation, design exploration, and user research analysis. This approach combines human creativity with AI efficiency to deliver innovative solutions faster without compromising quality.",
    icon: "Sparkles",
  },
];
