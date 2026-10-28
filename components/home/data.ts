export const CATEGORY_LABELS: Record<string, string> = {
  new: "New",
  animated: "Animated",
  atmosphere: "Atmosphere",
  svg: "SVG",
  black: "Dark",
  square: "Geometric",
  sky: "Sky",
  butterfly: "Butterfly",
  white: "Light",
  objects: "Objects",
};

// Ordem de exibição dos filtros do índice
export const CATEGORY_ORDER = ["new", "animated", "atmosphere", "objects", "black", "white", "square", "sky", "butterfly", "svg"];

// Seleção manual do "Trending now" (slug = nome do arquivo .md em projects/*). Edite à vontade.
export const TRENDING_SLUGS = [
  "chrome-ribbon",
  "black-wave",
  "galaxy-pink",
  "glowing-planet",
  "purple-orbit",
  "energy-lines",
  "glassmorphism",
  "earth",
];

export interface Category {
  type: string; // valor de `type` no front matter dos projetos
  slug: string; // /backgrounds/[slug]/
  label: string; // filtro curto
  title: string; // H1 / H2
  blurb: string; // descricao (meta description + intro)
}

export const CATEGORIES: Category[] = [
  { type: "new", slug: "new", label: "New", title: "New animated backgrounds", blurb: "The latest animated backgrounds added to Backseasy: waves, orbits, ribbons and glass effects, free to copy and use in your projects." },
  { type: "animated", slug: "animated", label: "Animated", title: "Animated CSS backgrounds", blurb: "Free animated CSS backgrounds with moving stars, streaks, frames and blurred orbs. Copy the code and drop it into any website." },
  { type: "atmosphere", slug: "atmosphere", label: "Atmosphere", title: "Atmospheric background effects", blurb: "Atmospheric backgrounds with soft gradients, glows and ripples in emerald, gold, pink and more, built for hero sections." },
  { type: "objects", slug: "objects", label: "Objects", title: "Object backgrounds for web design", blurb: "Backgrounds built around shapes and objects: constellations, ellipses, glassmorphism and parabolic lines for modern web design." },
  { type: "black", slug: "dark-mode", label: "Dark", title: "Dark mode backgrounds", blurb: "Dark mode backgrounds for websites and apps: black grids, circuits, dots and subtle textures that keep text readable." },
  { type: "white", slug: "light-minimal", label: "Light", title: "Light mode & minimalist backgrounds", blurb: "Clean light mode and minimalist backgrounds with soft waves, squares and linear patterns for modern, airy layouts." },
  { type: "square", slug: "geometric", label: "Geometric", title: "Geometric pattern backgrounds", blurb: "Geometric pattern backgrounds made of squares and grids in blue, fuchsia, purple, teal and violet, ready to copy." },
  { type: "sky", slug: "sky-nature", label: "Sky", title: "Sky & nature backgrounds", blurb: "Sky and nature backgrounds featuring the moon, sun, earth and purple planets for dreamy, cosmic hero sections." },
  { type: "butterfly", slug: "butterfly", label: "Butterfly", title: "Artistic butterfly backgrounds", blurb: "Artistic butterfly backgrounds in purple, pink, ice green and striped styles for creative, expressive websites." },
  { type: "svg", slug: "svg", label: "SVG", title: "Vector SVG backgrounds", blurb: "Lightweight vector SVG backgrounds with glass, neon, glossy and spiral shapes that stay sharp at any size." },
];

export interface Generator {
  id: string;
  label: string;
  desc: string;
  href?: string; // pagina dedicada (quando existe)
}

export const GENERATORS: Generator[] = [
  { id: "glass", label: "Frosted Glass", desc: "Mirror-effect glass panels with live blur and tint.", href: "/glass-effect/" },
  { id: "blackhole", label: "Black Hole", desc: "An animated black hole you can recolor and speed up.", href: "/black-hole/" },
  { id: "nebula", label: "Nebula Spin", desc: "A spinning nebula with custom colors and rotation.", href: "/nebula-effect/" },
  { id: "mesh", label: "Mesh Gradient", desc: "Multi-point mesh gradients with CSS output.", href: "/mesh-gradient/" },
  { id: "particles", label: "Particle System", desc: "Stars, bubbles and fire as interactive particles.", href: "/particle-system/" },
];

export const TECHNOLOGIES = ["CSS", "Tailwind", "Next.js", "React", "Vue"];

// Numeros que nao saem do codigo: atualize manualmente (Google Analytics / Search Console).
export const SITE_STATS = {
  visits: 1000, // exibido como "1,000+"
  visitsLabel: "visits every month",
  regions: ["UE", "Singapore", "China", "Europe", "& more"],
};
