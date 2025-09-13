import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  stars?: number;
  topics?: string[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r border-b py-10 relative group/feature border-[#353434]/10",
        (index === 0 || index === 3 || index === 6) && "lg:border-l border-[#353434]/10",
        index < 3 && "lg:border-b border-[#353434]/10"
      )}
    >
      {/* Gradient overlay on hover */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      )}

      {/* GitHub Icon */}
      <div className="mb-4 relative z-10 px-10 text-[#353434]">
        <svg
          className="w-8 h-8 group-hover/feature:scale-110 transition-transform duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>

      {/* Project Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#353434]/30 group-hover/feature:bg-[#353434] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#353434]">
          {project.name}
        </span>
      </div>

      {/* Project Description */}
      <p className="text-sm text-[#353434] opacity-75 max-w-xs relative z-10 px-10 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Topics */}
      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 relative z-10 px-10">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="bg-[#353434]/10 text-[#353434] px-2 py-1 rounded text-xs font-medium group-hover/feature:bg-[#353434]/20 transition-colors duration-200"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Action Button */}
      <div className="relative z-10 px-10 mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#353434] hover:text-black font-semibold text-sm transition-all duration-300 group-hover/feature:gap-3"
        >
          <span>View Project</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/feature:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  const projects: Project[] = [
    {
      id: "1",
      name: "Composio FastAPI Gmail Agent",
      description: "A simple Gmail agent built with Composio and FastAPI. Demonstrates email automation and management capabilities through a clean API interface.",
      url: "https://github.com/ComposioHQ/composio-fastapi",
      topics: ["fastapi", "gmail", "agent", "automation"]
    },
    {
      id: "2", 
      name: "Slack Summariser Agent",
      description: "An intelligent Slack summariser agent that helps teams stay updated by automatically generating summaries of important conversations and channels.",
      url: "https://github.com/ComposioHQ/slack-summariser",
      topics: ["slack", "summariser", "ai", "automation"]
    },
    {
      id: "3",
      name: "Composio SQL Agent with Supabase",
      description: "A powerful SQL agent integrated with Supabase that enables natural language database queries and automated data operations.",
      url: "https://github.com/ComposioHQ/composio-sql-agent",
      topics: ["sql", "supabase", "database", "nlp"]
    },
    {
      id: "4",
      name: "Agent Flow",
      description: "An open-source implementation of Gumloop - a visual workflow builder for creating complex agent flows and automation pipelines with ease.",
      url: "https://github.com/ComposioHQ/open-gumloop",
      topics: ["workflow", "automation", "visual", "pipeline"]
    },
    {
      id: "5",
      name: "Open GenSpark",
      description: "An open-source alternative to GenSpark, providing powerful AI-driven content generation and automation capabilities.",
      url: "https://github.com/ComposioHQ/open-genspark",
      topics: ["ai", "generation", "opensource", "automation"]
    },
    {
      id: "6",
      name: "Executive Voice Agent",
      description: "A sophisticated voice-powered agent designed for executive-level tasks, enabling voice-controlled automation and intelligent assistance.",
      url: "https://github.com/ComposioHQ/executive-voice-agent",
      topics: ["voice", "executive", "assistant", "automation"]
    },
    {
      id: "7",
      name: "T3Chat Composio",
      description: "A modern chat application built with the T3 stack (Next.js, TypeScript, tRPC) integrated with Composio for enhanced automation features.",
      url: "https://github.com/ComposioHQ/t3chat-composio",
      topics: ["t3stack", "chat", "nextjs", "typescript"]
    }
  ];

  return (
    <div className="min-h-screen font-sans" style={{ color: '#353434' }}>
      {/* Header with SVG Background */}
      <header 
        className="pt-20 pb-16 text-center"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Built with Composio
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto px-6 opacity-80">
          Discover amazing projects and applications built with Composio&apos;s powerful automation platform
        </p>
      </header>

      {/* Projects Grid with Solid Background */}
      <main 
        className="px-6 pb-20"
        style={{ backgroundColor: '#f6f4f1' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty state or call to action */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-3">Built something with Composio?</h3>
              <p className="text-[#353434] opacity-80 text-sm mb-4">
                Share your project with the community and get featured here!
              </p>
              <a
                href="https://github.com/ComposioHQ/composio-showcase/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#353434] text-white px-4 py-2 rounded-lg hover:bg-black transition-colors text-sm font-medium"
              >
                Submit Your Project
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="text-center py-8 border-t border-[#353434]/10"
        style={{ backgroundColor: '#f6f4f1' }}
      >
        <p className="text-[#353434] opacity-60 text-sm">
          Built with ❤️ using{" "}
          <a
            href="https://composio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors font-medium"
          >
            Composio
          </a>
        </p>
      </footer>
    </div>
  );
}