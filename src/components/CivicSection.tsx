import type { CSSProperties } from "react";
import { MapPin, FilePlus2, Headphones, ArrowRight, FileText, CircleCheck, Clock } from "lucide-react";
import bg from "@/assets/civic-hero.jpg";

export function CivicSection() {
  return (
    <section className="civic" id="civic">
      <div className="civic-bar">
        <div className="civic-logo"><MapPin size={30} /> Civic<span>Fix</span></div>
        <nav>
          <a className="active" href="#civic">Home</a>
          <a href="#civic">Report Issue</a>
          <a href="#civic">All Complaints</a>
          <a href="#civic">Help</a>
        </nav>
      </div>
      <div className="civic-hero" style={{ "--civic-bg": `url("${bg}")` } as CSSProperties}>
        <p className="civic-tags">CLEANER STREETS &nbsp;|&nbsp; SAFER COMMUNITIES &nbsp;|&nbsp; A BETTER TOMORROW</p>
        <h1>Together for a<br /><span>Better, Safer</span> City</h1>
        <p className="civic-sub">Report civic issues like potholes, fallen trees, broken streetlights and more. Help us make our city cleaner, safer and better for everyone.</p>
        <div className="civic-cards">
          <a href="#civic" className="civic-card light">
            <FilePlus2 size={44} />
            <h3>Report Issue</h3>
            <p>Spot a problem? Let us know. <ArrowRight size={20} /></p>
          </a>
          <a href="#civic" className="civic-card dark">
            <Headphones size={44} />
            <h3>Help Desk</h3>
            <p>Get support or track your complaint. <ArrowRight size={20} /></p>
          </a>
        </div>
      </div>
      <div className="civic-stats">
        {[
          [FileText, "124", "Total Reports", "blue"],
          [CircleCheck, "89", "Resolved", "green"],
          [Clock, "35", "In Progress", "amber"],
        ].map(([Icon, n, l, c]) => {
          const I = Icon as typeof FileText;
          return (
            <div className="civic-stat" key={l as string}>
              <div className={`civic-ico ${c}`}><I size={30} /></div>
              <strong>{n as string}</strong>
              <span>{l as string}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
