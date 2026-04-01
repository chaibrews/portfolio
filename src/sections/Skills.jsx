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
  { name: "Visual Studio Code", category: "DevTools", subcategory: "IDEs" },
  { name: "IntelliJ IDEA", category: "DevTools", subcategory: "IDEs" },
];

const CATEGORIES = [
  { key: "WebDev", label: "Web Development" },
  { key: "SystemsDev", label: "Systems Development" },
  { key: "DevTools", label: "Tools" },
];

const groupBySubcategory = (skills) =>
  skills.reduce((groups, skill) => {
    if (!groups[skill.subcategory]) groups[skill.subcategory] = [];
    groups[skill.subcategory].push(skill);
    return groups;
  }, {});

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("WebDev");

  const grouped = groupBySubcategory(
    SKILLS.filter((skill) => skill.category === activeCategory),
  );

  return (
    <section id="skills" className="py-48 px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
        </Reveal>

        <Reveal variant="slide-up" delay={100}>
          {/* Category Nav */}
          <div className="font-mono text-sm flex mb-8 gap-2">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex-1 px-4 py-2 rounded-lg transition ${
                  activeCategory === key
                    ? "bg-primary text-black"
                    : "text-white/60 hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Content — each subcategory group staggers in */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([subcategory, items], i) => (
            <Reveal key={subcategory} variant="slide-up" delay={i * 80}>
              <div>
                <h3 className="text-xs font-mono font-semibold mb-3 text-highlight uppercase tracking-widest">
                  {subcategory}
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
