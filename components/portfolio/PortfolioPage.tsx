"use client";

import dynamic from "next/dynamic";
import { Spotlight } from "./Spotlight";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { CredentialsSection } from "./CredentialsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { badges, certificates, resumes } from "./data";

const ThreeBackground = dynamic(
  () => import("./ThreeBackground").then((mod) => mod.ThreeBackground),
  { ssr: false },
);

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#020203] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Spotlight className="absolute -left-40 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3),rgba(6,182,212,0.08)_45%,transparent_72%)] blur-3xl" />
        <Spotlight className="absolute right-[-8rem] top-28 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.28),rgba(59,130,246,0.08)_44%,transparent_74%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#040409_0%,#010102_100%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 hidden h-[440px] opacity-65 md:block">
        <ThreeBackground />
      </div>

      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection
        id="certificates"
        tag="Certificates"
        title="Professional Certificates"
        ctaLabel="Open certificate"
        items={certificates}
      />
      <CredentialsSection
        id="badges"
        tag="Skill Badges"
        title="Google Cloud Skill Badges"
        ctaLabel="Open badge"
        items={badges}
        columns="three"
      />
      <CredentialsSection
        id="resume"
        tag="Resume"
        title="Full Stack Resume"
        ctaLabel="Open resume"
        items={resumes}
        columns="one"
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
