import VideoPlayer from "@/components/VideoPlayer";
import Navbar from "@/components/Navbar";
import portfolioData from "./portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <VideoPlayer 
            src={portfolioData[0].videoUrl} 
            poster={portfolioData[0].posterUrl}
            className="w-full h-full opacity-60"
          />
        </div>
        <div className="z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.2em] text-white">
            Machinehead
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 tracking-widest uppercase font-light">
            Cinematic Video Production
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
          {portfolioData.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="w-full overflow-hidden mb-6 aspect-video bg-neutral-900">
                <VideoPlayer 
                  src={project.videoUrl} 
                  poster={project.posterUrl} 
                />
              </div>
              <h2 className="text-2xl font-semibold uppercase tracking-wider text-white">
                {project.title}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <p className="text-white/60 tracking-widest text-sm uppercase">
                  {project.category}
                </p>
              </div>
              <p className="mt-4 text-white/80 font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-white/50 text-sm tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Machinehead Studios. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
