"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, BrainCircuit, Sparkles, Pause, Play, ArrowRight } from "lucide-react";

const stages = [
  { label: "Course context", icon: BookOpen, title: "Start with what you teach.", detail: "Syllabi, slides, and learning goals give practice a shared foundation.", items: ["Lecture materials", "Connected concepts", "Learning outcomes"] },
  { label: "Purposeful practice", icon: Sparkles, title: "Turn concepts into practice.", detail: "Build questions and explanations around the course, with instructor review.", items: ["Course-aligned questions", "Guided explanations", "Instructor review"] },
  { label: "Learning insight", icon: BrainCircuit, title: "Find the next helpful step.", detail: "Connect evidence from student work to the concepts that need more attention.", items: ["Evidence of understanding", "Concept-level feedback", "Next steps for teaching"] },
];

export function LearningLoop() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!playing || interacting || reducedMotion) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % stages.length), 6000);
    return () => window.clearInterval(timer);
  }, [playing, interacting, reducedMotion]);
  const stage = stages[active];
  return <div className="learning-demo" data-paused={!playing || interacting || Boolean(reducedMotion)} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <div className="demo-toolbar"><span className="demo-brand">caliber<span>.</span></span><span className="demo-caption">Explore the learning loop</span><button className="demo-play" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause animation" : "Play animation"}>{playing ? <Pause size={15}/> : <Play size={15}/>}</button></div>
    <div className="demo-network" aria-hidden="true"><svg viewBox="0 0 440 185"><path className="network-track" d="M75 100 Q145 0 220 80 T365 100 M75 100 Q220 220 365 100"/><path className="network-signal" d="M75 100 Q145 0 220 80 T365 100 M75 100 Q220 220 365 100"/></svg>{stages.map(({icon:Icon},i)=><div key={i} className={`network-point point-${i} ${active===i ? "selected" : ""}`}><Icon size={28} strokeWidth={1.6}/></div>)}</div>
    <div className="demo-stage-buttons" role="group" aria-label="Learning loop stages">{stages.map((item,i)=><button key={item.label} aria-pressed={active===i} onClick={()=>{setActive(i);setPlaying(false);}} className={active===i ? "selected" : ""}><span>0{i+1}</span>{item.label}</button>)}</div>
    <div className="demo-panel"><AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:reducedMotion?1:0,y:reducedMotion?0:12}} animate={{opacity:1,y:0}} exit={{opacity:reducedMotion?1:0,y:reducedMotion?0:-8}} transition={{duration:.22}}><h3>{stage.title}</h3><p>{stage.detail}</p><div className="demo-tags">{stage.items.map(item=><span key={item}>{item}</span>)}</div></motion.div></AnimatePresence></div>
    <div className="demo-bottom"><span>ILLUSTRATIVE WORKFLOW</span><span>Click a stage to explore <ArrowRight size={13}/></span></div>
  </div>;
}
