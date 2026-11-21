import { ArrowUpRight, Code2, LayoutTemplate, Megaphone, PenTool, Search, ShoppingBag, Smartphone, Wrench } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { ease } from "../lib/motion";

const services = [
  {
    id: "website-design", icon: LayoutTemplate, title: "Website Design & Development",
    description: "We plan, design, and build websites around your brand and the people who use them. Whether you need a business website, a focused landing page, or a redesign, we bring the content, layout, and functionality together in one complete experience.",
    includes: ["Page structure and responsive design", "Development, content management, and useful integrations", "Accessibility, performance checks, and launch support"],
    fit: "For businesses launching a website or replacing one that no longer meets their needs.",
  },
  {
    id: "ecommerce", icon: ShoppingBag, title: "E-commerce Development",
    description: "We create online stores that help customers discover products, understand what they are buying, and complete their purchase. The store is shaped around your catalog and the way you manage orders, rather than a one-size-fits-all layout.",
    includes: ["Storefront, product pages, and catalog navigation", "Cart and checkout setup on your chosen platform", "Product management and relevant store integrations"],
    fit: "For brands starting to sell online or improving an existing store.",
  },
  {
    id: "mobile-app-development", icon: Smartphone, title: "Mobile App Development",
    description: "We turn your app idea into clear user flows, a practical feature plan, and an interface suited to smaller screens. Development is scoped to the platforms and functions your product needs, with testing and release preparation included in the plan.",
    includes: ["Feature planning, interface design, and prototypes", "App development and API integration", "Testing on agreed devices and release preparation"],
    fit: "For customer apps, team tools, and new mobile products.",
  },
  {
    id: "logo-brand-identity", icon: PenTool, title: "Logo & Brand Identity",
    description: "We help your business look recognisable and consistent. Starting with your audience and visual direction, we develop a logo and supporting identity that work together across your website, social channels, and other brand materials.",
    includes: ["Logo concepts and agreed rounds of refinement", "A coordinated color palette and typography", "Logo variations, export files, and usage guidance"],
    fit: "For new businesses establishing an identity or existing brands ready for a refresh.",
  },
  {
    id: "seo", icon: Search, title: "Search Engine Optimization",
    description: "We review how your website is structured, what your audience searches for, and where the site can improve. The work focuses on useful content and sound technical foundations, with priorities based on your website rather than promises of instant rankings.",
    includes: ["Website review and keyword research", "Page titles, content structure, and internal linking", "Technical improvements and search performance reporting"],
    fit: "For businesses that want to improve how their website is discovered in search.",
  },
  {
    id: "digital-marketing", icon: Megaphone, title: "Digital Marketing",
    description: "We help you plan and run digital campaigns around a clear audience and goal. From the message and creative direction to the landing page and reporting, the work connects your marketing activity with what you want customers to do next.",
    includes: ["Audience, channel, and campaign planning", "Content and creative direction", "Campaign setup and reporting for agreed channels"],
    fit: "For product launches, service promotion, and a more consistent online presence.",
  },
  {
    id: "custom-software", icon: Code2, title: "Custom Software Solutions",
    description: "When standard tools do not fit your workflow, we design software around how your business operates. We map the process first, then build the interfaces, data flows, and integrations needed to make the tool useful for your team or customers.",
    includes: ["Workflow discovery and solution planning", "Portals, dashboards, and custom applications", "System integrations, testing, and handover"],
    fit: "For businesses that need a tailored tool or want to connect existing systems.",
  },
  {
    id: "maintenance", icon: Wrench, title: "Website Maintenance & Support",
    description: "We help keep your website useful after launch. That can mean updating content, fixing a problem, improving a page, or reviewing dependencies and performance. Support is agreed around the site and the level of help you need.",
    includes: ["Content updates and bug fixes", "Dependency and performance reviews", "Layout improvements and ongoing technical support"],
    fit: "For businesses that need help maintaining and improving their existing website.",
  },
];

export default function Services() {
  return <>
    <section className="relative overflow-hidden border-b border-[var(--line)] pb-16 pt-40 sm:pt-48">
      <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[120px]" />
      <Container>
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">Design. Development.<br /><span className="text-gradient">Digital growth.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">From a new website to a custom app, we help you bring your business online and move it forward.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button to="/book-a-call">Book a call <ArrowUpRight size={17} /></Button><Button to="/pricing" variant="secondary">View pricing</Button></div>
      </Container>
    </section>
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(({ id, icon: Icon, title, description, includes, fit }, i) => <motion.article key={id} id={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, ease, delay: (i % 2) * 0.06 }} className="scroll-mt-28 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] text-[var(--accent)]"><Icon size={22} aria-hidden="true" /></span>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--ink)]">{title}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{description}</p>
            <h3 className="mt-6 text-sm font-semibold text-[var(--ink)]">What we can help with</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{includes.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />{item}</li>)}</ul>
            <p className="mt-6 border-t border-[var(--line)] pt-4 text-sm leading-6 text-[var(--muted)]">{fit}</p>
          </motion.article>)}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-12 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Tell us what you have in mind.</h2><p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">Weâ€™ll help you decide what you need and agree the scope before work begins.</p></div>
          <Button to="/book-a-call">Book a call <ArrowUpRight size={17} /></Button>
        </div>
      </Container>
    </section>
  </>;
}
