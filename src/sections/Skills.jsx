import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const SKILLS = [
  // Web Dev - Frontend
  { name: "React", category: "WebDev", subcategory: "Frontend" },
  { name: "JavaScript", category: "WebDev", subcategory: "Frontend" },
  { name: "TypeScript", category: "WebDev", subcategory: "Frontend" },
  { name: "HTML", category: "WebDev", subcategory: "Frontend" },
  { name: "CSS", category: "WebDev", subcategory: "Frontend" },
  // Web Dev - Backend
  { name: "Node.js", category: "WebDev", subcategory: "Backend" },
  { name: "Express", category: "WebDev", subcategory: "Backend" },
  // Web Dev - Database
  { name: "PostgreSQL", category: "WebDev", subcategory: "Database" },
  { name: "MongoDB", category: "WebDev", subcategory: "Database" },
  // Systems Dev - Languages
  { name: "Java", category: "SystemsDev", subcategory: "Languages" },
  { name: "Python", category: "SystemsDev", subcategory: "Languages" },
  { name: "C++", category: "SystemsDev", subcategory: "Languages" },
  { name: "C", category: "SystemsDev", subcategory: "Languages" },
  // Systems Dev - Scripting
  { name: "Bash", category: "SystemsDev", subcategory: "Scripting" },
  // Systems Dev - Systems
  { name: "Linux", category: "SystemsDev", subcategory: "Systems" },
  { name: "MacOS", category: "SystemsDev", subcategory: "Systems" },
  { name: "Windows", category: "SystemsDev", subcategory: "Systems" },
  { name: "ChromeOS", category: "SystemsDev", subcategory: "Systems" },
  // Dev Tools - Development
  { name: "Git", category: "DevTools", subcategory: "Development" },
  { name: "Docker", category: "DevTools", subcategory: "Development" },
  { name: "Vercel", category: "DevTools", subcategory: "Development" },
  { name: "Netlify", category: "DevTools", subcategory: "Development" },
  // Dev Tools - Design
  { name: "Figma", category: "DevTools", subcategory: "Design" },
  { name: "Adobe Photoshop", category: "DevTools", subcategory: "Design" },
  { name: "Adobe Illustrator", category: "DevTools", subcategory: "Design" },
  // Dev Tools - IDEs
  { name: "Android Studio", category: "DevTools", subcategory: "IDEs" },
  { name: "Visual Studio", category: "DevTools", subcategory: "IDEs" },
  { name: "IntelliJ IDEA", category: "DevTools", subcategory: "IDEs" },
];

const CATEGORIES = [
  { key: "All", label: "ALL" },
  { key: "WebDev", label: "WEB" },
  { key: "SystemsDev", label: "SYSTEMS" },
  { key: "DevTools", label: "TOOLS" },
];

// For normal tabs: group by subcategory
const groupBySubcategory = (skills) =>
  skills.reduce((acc, skill) => {
    if (!acc[skill.subcategory]) acc[skill.subcategory] = [];
    acc[skill.subcategory].push(skill);
    return acc;
  }, {});

// For All tab: group by category, preserving CATEGORIES order
const ALL_CATEGORY_LABELS = {
  WebDev: "Web Development",
  SystemsDev: "Systems Development",
  DevTools: "Tools",
};

const groupByCategory = (skills) =>
  skills.reduce((acc, skill) => {
    const label = ALL_CATEGORY_LABELS[skill.category];
    if (!acc[label]) acc[label] = [];
    acc[label].push(skill);
    return acc;
  }, {});

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const isAll = activeCategory === "All";

  const grouped = isAll
    ? groupByCategory(SKILLS)
    : groupBySubcategory(SKILLS.filter((s) => s.category === activeCategory));

  // Preserve insertion order for All tab (WebDev → SystemsDev → DevTools)
  const groupEntries = isAll
    ? Object.values(ALL_CATEGORY_LABELS).map((label) => [
        label,
        grouped[label] ?? [],
      ])
    : Object.entries(grouped);

  return (
    <section id="skills" className="py-20 md:py-48 px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
        </Reveal>

        <Reveal variant="slide-up" delay={100}>
          <div className="font-mono text-xs flex flex-wrap mb-8 gap-1">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex-1 px-4 py-2 rounded-lg transition tracking-widest ${
                  activeCategory === key
                    ? "bg-primary text-white"
                    : "text-white/60 hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {groupEntries.map(([label, items], i) => (
            <Reveal key={label} variant="slide-up" delay={i * 80}>
              <div>
                <h3 className="text-xs font-mono font-semibold mb-3 text-highlight uppercase tracking-widest">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-sm rounded-full glass bg-secondary text-muted-foreground tag-hover"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
