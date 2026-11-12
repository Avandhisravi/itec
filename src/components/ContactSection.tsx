import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

export function ContactSection() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    try {
      await send({ data: f });
      form.reset();
      setStatus("done");
    } catch (x) {
      setErr(x instanceof Error && x.message.includes("Too many") ? x.message : "Please check your details and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <section className="itec-contact" id="contact">
        <div className="itec-contact-grid">
          <div className="itec-contact-left">
            <h1>
              LET’S MOVE
              <br />
              BUSINESS
              <br />
              <em>FORWARD.</em>
            </h1>
            <p className="itec-contact-sub">CONTACT</p>
            <form className="itec-contact-form" onSubmit={onSubmit}>
              <div className="itec-row">
                <label><span>NAME</span><input name="first_name" required maxLength={100} placeholder=" " aria-label="First name" /></label>
                <label><span>&nbsp;</span><input name="last_name" maxLength={100} aria-label="Last name" /></label>
              </div>
              <label><span>EMAIL</span><input name="email" type="email" required maxLength={255} /></label>
              <label><span>COMPANY</span><input name="company" maxLength={200} /></label>
              <label><span>PHONE</span><input name="phone" type="tel" maxLength={40} /></label>
              <label><span>MESSAGE</span><textarea name="message" required maxLength={5000} rows={3} /></label>
              <input name="website" tabIndex={-1} autoComplete="off" className="itec-hp" aria-hidden="true" />
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "SENDING…" : "SEND ENQUIRY"} <ArrowRight size={16} />
              </button>
              {status === "done" && <p className="itec-form-msg">Thank you — your enquiry has been sent.</p>}
              {status === "error" && <p className="itec-form-msg itec-form-err">{err}</p>}
            </form>
          </div>

          <aside className="itec-contact-card">
            <img
              src="/last.jpeg"
              alt="World map, freight truck and cargo ship at sunset"
              loading="lazy"
              width={1408}
              height={1024}
            />
            <div className="itec-contact-info">
              <h4>Address</h4>
              <p>19 Ansell House, Mile End <br />Road, Whitechapel,<br />London E1 4UU</p>
              <h4>Phone</h4>
              <p><a href="tel:+447741109790">+44 7741109790</a></p>
              <h4>Email</h4>
              <p><a href="mailto:info@itec.llc">info@itec.llc</a></p>
              <h4>Website</h4>
              <p>www.itec.llc</p>
              <div className="itec-social">
                <a href="https://instagram.com/itec.ltd?srtk=anphazZyY2t5eXNv&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/company/knp-global-traders/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                <a href="#" aria-label="X">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.2L5.8 22H3l7-8L2 2h6.1l4.3 5.7L18.2 2Zm-1 18h1.7L7 3.8H5.2L17.2 20Z" /></svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="itec-big-footer">
        <div className="itec-big-footer-inner">
          <div className="itec-big-footer-grid">
            <div className="itec-footer-col itec-footer-brand-col">
              <a href="#home" className="itec-footer-brand-link" aria-label="ITEC LTD Home">
                <img src="/itecc.jpeg" alt="ITEC LTD Logo" className="itec-footer-logo-img" />
                <span className="itec-footer-brand-title"></span>
              </a>

              <div className="itec-footer-socials">

              </div>
            </div>

            <div className="itec-footer-col itec-footer-quick-col">
              <h4 className="itec-footer-heading">QUICK LINKS</h4>
              <ul className="itec-footer-links">
                <li><a href="#home"><ChevronRight size={14} /> Home</a></li>
                <li><a href="#about"><ChevronRight size={14} /> About Us</a></li>
                <li><a href="#services"><ChevronRight size={14} /> Services</a></li>
                <li><a href="#gallery"><ChevronRight size={14} /> Gallery</a></li>
                <li><a href="#contact"><ChevronRight size={14} /> Contact Us</a></li>
                <li><a href="/company.pdf" target="_blank" rel="noopener noreferrer"><ChevronRight size={14} /> Company Profile</a></li>
              </ul>
            </div>

            <div className="itec-footer-col itec-footer-services-col">
              <h4 className="itec-footer-heading">OUR SERVICES</h4>
              <ul className="itec-footer-links">
                <li><a href="#services"><ChevronRight size={14} /> International Import &amp; Export</a></li>
                <li><a href="#services"><ChevronRight size={14} /> Global Product Sourcing</a></li>
                <li><a href="#services"><ChevronRight size={14} /> Freight Forwarding &amp; Logistics</a></li>
                <li><a href="#services"><ChevronRight size={14} /> End-to-End Trade Solutions</a></li>
                <li><a href="#services"><ChevronRight size={14} /> Sourcing &amp; Supply Coordination</a></li>
              </ul>
            </div>


          </div>

          <div className="itec-big-footer-bottom">
            <p>© {new Date().getFullYear()} ITEC LTD. All rights reserved.</p>
            <p className="itec-footer-tagline">Trade Beyond Boundaries.</p>
            <a href="#home" className="itec-footer-back-to-top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
