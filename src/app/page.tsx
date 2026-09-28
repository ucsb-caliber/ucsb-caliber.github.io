import { LearningLoop } from "@/components/sections/learning-loop";
import { WorkflowExplorer } from "@/components/sections/workflow-explorer";
import Link from "next/link";
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, Layers3 } from "lucide-react";

const pillars = [
  { number: "01", icon: Layers3, title: "Map the course", text: "Connect materials, concepts, and learning goals so each activity has a place in the bigger picture." },
  { number: "02", icon: BrainCircuit, title: "Practice with purpose", text: "Give students questions and explanations grounded in what their course actually teaches." },
  { number: "03", icon: ChartNoAxesCombined, title: "See what comes next", text: "Use evidence from practice to spot gaps and inform the next teaching decision." },
];

export default function Home() {
  return (
    <div className="site-home">
      <section className="home-hero">
        <div className="hero-aurora" aria-hidden="true"><span/><span/><span/></div><div className="hero-grid-lines" aria-hidden="true"/>
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="home-shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Built at UC Santa Barbara</div>
            <h1>The future of learning is <em>personal.</em></h1>
            <p>Meet Caliber: an AI-powered learning platform built with UCSB classrooms. We connect what instructors teach, how students practice, and what each learner needs next.</p>
            <div className="hero-actions"><Link className="home-button primary" href="/product">Explore the platform <ArrowRight size={18} /></Link><Link className="home-button secondary" href="/our-story">Our story <ArrowRight size={17} /></Link></div>
            <div className="hero-note"><span className="note-line" /> Built in the classroom. Driven by research. Ready to grow.</div>
          </div>
          <LearningLoop />
        </div>
      </section>
      <section className="intro-section" id="approach"><div className="home-shell intro-grid"><div className="section-kicker">THE IDEA</div><div><h2>A smarter learning loop for every classroom.</h2><p>Caliber brings course knowledge, adaptive practice, and actionable insight into one experience. Students get a path forward. Instructors get a clearer view of where to help.</p></div></div></section>
      <section className="approach-section"><div className="home-shell"><div className="section-top"><div><div className="section-kicker">HOW IT COMES TOGETHER</div><h2>One connected learning experience.</h2></div><p>Designed to support the flow from instructor planning to student practice and back to actionable insight.</p></div><div className="pillar-grid">{pillars.map(({number,icon:Icon,title,text})=><article className="pillar" key={number}><div className="pillar-top"><span>{number} / 03</span><Icon size={28} strokeWidth={1.6}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <WorkflowExplorer />
      <section className="research-band"><div className="home-shell research-grid"><div><div className="section-kicker light">RESEARCH IN PRACTICE</div><h2>Built with the classroom, shaped by the questions it raises.</h2></div><div><p>Caliber is a student and faculty research effort at UCSB. We investigate how course structure, AI-assisted learning tools, and evidence of student understanding can work together in real teaching contexts.</p><Link href="/research" className="text-link">Explore our research <ArrowRight size={18}/></Link></div></div></section>
      <section className="closing-section"><div className="home-shell closing-grid"><div><div className="section-kicker">PEOPLE BEHIND THE WORK</div><h2>Built by educators and engineers who care.</h2><p>Meet the students, mentors, and faculty building Caliber at UC Santa Barbara.</p><Link className="home-button primary" href="/team">Meet the team <ArrowRight size={18}/></Link></div><div className="closing-symbol" aria-hidden="true">c<span>.</span></div></div></section>
    </div>
  );
}
