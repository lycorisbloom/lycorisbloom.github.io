import Footer from "./_components/footer";
import Header from "./_components/header";
import ProjectCard from "./_components/projectCard";

const projects = ["Melbourne PastPort", "Sol", "Touken"]

export default function Home() {
  return (
    <div className="overscroll-none">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
        <Header />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div id="hero" className="body-section flex gap-4 items-center justify-center align-middle flex-col h-screen select-none">
            <h1 className="font-kumar text-2xl">Error 418: I am a teapot</h1>
            <p className="font-montserrat">Something is brewing...</p>
          </div>
          <div id="projects" className="min-h-screen">
            <h1 className="font-kumar font-xl">Projects</h1>
            {/* fix this cooked code */}
            <div className="flex">
              {projects.map((value: string) => 
              <ProjectCard key={value} title={value}/>
            )}
            </div>
          </div>
          <div id="resume" className="min-h-screen">
            <h1 className="font-kumar font-xl">Resume</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
