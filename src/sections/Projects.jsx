import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: 1,
    title: "Marginalia",
    description:
      "A digital annotation platform for physical book readers, designed to preserve the reading experience in a digital format.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
    status: "In Progress",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "buildR.",
    description:
      "An intuitive single-page resume builder that lets users design, preview, and export polished A4 resumes as PDFs, simplifying the job application process.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript"],
    status: "Completed",
    demoUrl: "https://cv-buildr.vercel.app/",
    githubUrl: "https://github.com/chaibrews/buildr",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my projects, skills, and professional journey, built with modern web technologies for speed and clarity.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "TailwindCSS"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
  },
];

function GithubIcon({ size = 20, color = "currentColor", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{siGithub.title}</title>
      <path d={siGithub.path} />
    </svg>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-10 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            A selection of projects that I've built for fun and to learn new
            technologies.
          </p>
        </Reveal>

        {/* Project Cards — staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, key) => (
            <Reveal key={project.id} variant="slide-up" delay={key * 120}>
              <div className="group glass card-hover rounded-lg overflow-hidden shadow-xs h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 relative">
                  {/* Status badge */}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl text-center">{project.title}</h3>
                    {project.status === "In Progress" && (
                      <span className="text-[8px] font-mono px-2 py-0.5 rounded-full border border-highlight/40 text-highlight">
                        in progress
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[8px] font-mono border rounded-md bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Github Button */}
        <Reveal variant="fade" delay={200}>
          <div className="text-center mt-6">
            <a
              className="primary-button"
              href="https://github.com/chaibrews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check My Github →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
