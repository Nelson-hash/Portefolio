import { projects } from '../config/content';

const Projects = () => {
  const getImageUrl = (filename: string) => {
    return new URL(`../assets/images/projects/${filename}`, import.meta.url).href;
  };

  return (
    <div className="py-16 px-3 sm:px-4 min-h-screen pt-20 sm:pt-24">
      <h2 className="text-3xl sm:text-4xl font-light tracking-wider text-center mb-8 sm:mb-12">
        Projects
      </h2>
      
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <a 
              href={project.link}
              className="w-full md:w-1/3 aspect-video overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img 
                src={getImageUrl(project.filename)}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </a>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl sm:text-2xl font-light mb-3">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
