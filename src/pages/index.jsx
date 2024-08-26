import { About } from "@/components/About";
import { ContactMe } from "@/components/ContactMe";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileMenu } from "@/components/MobileMenu";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="main w-full h-full">
      <div className="body w-auto h-auto m-auto">
        <Header
          isDarkMode={isDarkMode}
          handleToggleDarkMode={handleToggleDarkMode}
        />
        <Hero isDarkMode={isDarkMode} />
        <About id="about" isDarkMode={isDarkMode} />
        <Skills id="skills" />
        <Experience id="experience" isDarkMode={isDarkMode} />
        <Work id="work" />
        <ContactMe id="contact" />
        <Footer isDarkMode={isDarkMode} />
        <MobileMenu isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
