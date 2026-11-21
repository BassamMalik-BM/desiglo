import inkbladeHero from "../assets/work/inkblade/hero.webp";
import aicadmiaHero from "../assets/work/aicadmia/hero.webp";

/** Add your latest projects here; set featured: true to show them on the home page. */
export type Project = {
  slug: string;
  title: string;
  category: string;
  services: string;
  description: string;
  url: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "inkblade",
    title: "InkBlade",
    category: "Entertainment",
    services: "Design & Development",
    description: "A manga and illustrated-story website with a bold red-and-black identity, series discovery, and a reading experience across devices.",
    url: "https://inkblade.xyz",
    image: inkbladeHero,
    featured: true,
  },
  {
    slug: "aicadmia",
    title: "Aicadmia",
    category: "Education & AI",
    services: "Design & Development",
    description: "An AI learning website that brings courses, prompt resources, and practical guides together in a clear purple-and-cyan interface.",
    url: "https://aicadmia.com",
    image: aicadmiaHero,
    featured: true,
  },
];
export const featuredProjects = projects.filter((p) => p.featured);
export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
