import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import collage from "@/assets/contact-collage.jpg";

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
          <p className="itec-contact-sub">CONTACT

          </p>
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
          <img src={collage} alt="City maps and port cranes collage" loading="lazy" width={1008} height={800} />
          <div className="itec-contact-info">
            <h4>Address</h4>
            <p>19 Ansell House, Mile End <br />Road, Whitechapel,<br />London E1 4UU</p>
            <h4>Phone</h4>
            <p><a href="tel:+447741109790">+44 7741109790</a><br /><a href="mailto:info@itec.llc">info@itec.llc</a></p>
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

      <div className="itec-site-footer">
        <a className="itec-footer-logo" href="#home" aria-label="ITEC LTD Home">
          <img src="/logo.jpeg" alt="ITEC LTD" />
        </a>
        <nav>
          <a href="#home">HOME</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#gallery">GALLERY</a><a className="active" href="#contact">CONTACT</a>
        </nav>
        <p>© {new Date().getFullYear()} ITEC LTD. All rights reserved.</p>
      </div>
    </section>
  );
}
