import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { WorkflowExplorer } from "@/components/sections/workflow-explorer";

export default function Home() {
  return <div className="field-site site-home">
    <section className="field-hero">
      <div className="field-masthead"><span>A UCSB project in computing education</span><span>Built with classrooms. Open to what’s next.</span></div>
      <div className="field-heading"><h1>Built for the moment<br/>it <em>clicks.</em></h1><div className="field-intro"><p>Good questions. Useful practice. A clearer view of what students understand.</p><p>We’re Caliber—a team of students and educators building better tools for learning computer science.</p><Link href="#explore" className="field-link">Take a look inside <ArrowRight size={20}/></Link></div></div>
      <figure className="field-art"><Image src="/art/learning-landscape.webp" alt="An illustrated sketchbook unfolds into paper staircases and arches beside the California coast, linked by a blue thread." width={1536} height={1024} priority sizes="(max-width: 800px) 100vw, 1200px"/><figcaption><span>01 / MANY WAYS TO UNDERSTAND</span><span>A little structure. A lot of possibility.</span></figcaption><span className="field-stamp" aria-hidden="true">Made<br/>at UCSB<br/><span>↗</span></span></figure>
    </section>
    <section className="field-premise"><div className="field-margin">THE QUESTION<br/><span>01 —</span></div><div><h2>What happens between<br/>“I tried” and <em>“I get it”?</em></h2><p>That’s where we work. A course has lectures, assignments, questions, and feedback. Caliber connects those pieces so instructors can see where students need help—and students can find a useful next step.</p></div></section>
    <section className="field-principles"><article><span>01</span><h3>Start with the course.</h3><p>The syllabus, the concepts, the material you actually taught. Give every question a reason to be there.</p></article><article><span>02</span><h3>Make practice count.</h3><p>Connect questions and explanations to learning goals. Keep instructors involved in what students see.</p></article><article><span>03</span><h3>Look past the score.</h3><p>Use the evidence in student work to understand the sticking points and decide where to go next.</p></article></section>
    <div id="explore"><WorkflowExplorer /></div>
    <section className="field-research"><div className="field-research-art"><Image src="/art/better-questions.webp" alt="A hand with a red pencil draws on layered paper forms that become a coastal landscape." width={1254} height={1254} sizes="(max-width: 750px) 100vw, 500px"/></div><div className="field-research-copy"><span className="field-label">FROM OUR NOTEBOOK</span><h2>Better tools begin<br/>with better <em>questions.</em></h2><p>Our work grows out of UCSB classrooms: how to design useful placement exams, connect practice to course content, and support learning at scale.</p><p>We build, study, and revise. The research is part of the product.</p><Link href="/research" className="field-link">Read the research <ArrowUpRight size={20}/></Link><div className="field-citation">ITiCSE 2026<br/><strong>Caliber: AI-Assisted Infrastructure for Mastery-Based Computer Science Education at Scale</strong></div></div></section>
    <section className="field-close"><span className="field-label">STUDENTS. EDUCATORS. BUILDERS.</span><h2>A classroom-sized problem.<br/>A team that cares.</h2><div><Link href="/team" className="field-link">Meet the people <ArrowRight size={20}/></Link><a href="mailto:nkapasi@ucsb.edu?subject=Caliber%20collaboration" className="field-link">Build with us <ArrowUpRight size={20}/></a></div></section>
  </div>;
}
