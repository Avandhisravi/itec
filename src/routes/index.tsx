import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import ship from "@/assets/ship.jpg";
import { ContactSection } from "@/components/ContactSection";
import gShip from "@/assets/g-ship.jpg";
import gPort from "@/assets/g-port.jpg";
import gContainers from "@/assets/g-containers.jpg";
import gWarehouse from "@/assets/g-warehouse.jpg";
import gTruck from "@/assets/g-truck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITEC LTD | Trade Beyond Boundaries" },
      {
        name: "description",
        content:
          "ITEC LTD — international sourcing, import and export, freight forwarding and end-to-end trade coordination.",
      },
      { property: "og:title", content: "ITEC LTD | Trade Beyond Boundaries" },
      {
        property: "og:description",
        content: "International trade and global connections: sourcing, import/export and logistics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="ITEC LTD Home">
          <img src="/logo.jpeg" alt="ITEC LTD Logo" className="brand-logo" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a className="active" href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
          <span className="search-icon" aria-label="Search"></span>
        </nav>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{ "--hero-image": "url('/hero.jpeg')" } as CSSProperties}
        >
          <div className="hero-content">
            <div className="gold-line"></div>
            <h1>
              Trade<br/> Beyond<br/> Boundaries.
            </h1>
            <p className="hero-subtitle">INTERNATIONAL TRADING &amp; EXPORT COMPANY</p>
            <a className="hero-link" href="#about">
              EXPLORE ITEC <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </section>

        <section className="story" id="home-story">
          <div className="story-image-wrap">
            <img
              className="story-image"
              src="/second.jpeg"
              alt="Cargo containers at a shipping and logistics terminal"
            />
          </div>
          <div className="story-copy">
            <div className="eyebrow">OUR STORY</div>c  
            <h2>
              
              International Trade.
              <br />
              Global Connections.
            </h2>
            <p>
              Your trusted partner for international sourcing, import and export, freight forwarding and end-to-end trade coordination.

We connect suppliers, manufacturers and buyers across international markets, helping businesses move goods efficiently and reliably from source to destination. From identifying the right sourcing opportunities to coordinating shipments and managing cross-border trade requirements, we work to make every stage of the process seamless. With a strong focus on reliability, clear communication and lasting business relationships, we help simplify global trade and create connections that move businesses forward.

            </p>
           
          </div>
        </section>

        <section className="stats-section">
          {[
            [
              "WHO WE ARE",
              "An international trading and export company.",
              "ITEC LTD links suppliers, manufacturers and buyers across borders, handling the sourcing, paperwork and movement that sit between them.",
            ],
            [
              "WHAT WE DO",
              "Sourcing, trade and freight under one roof.",
              "Product sourcing, import and export, freight forwarding and end-to-end trade coordination — booked, checked and tracked by one team.",
            ],
            [
              "HOW WE WORK",
              "One contact. Clear paperwork. No guesswork.",
              "A dedicated point of contact from first enquiry to final delivery, with documentation, compliance and shipment updates handled for you.",
            ],
          ].map(([t, n, l]) => (
            <div className="stat-box" key={t}>
              <h3>{t}</h3>
              <h2>{n}</h2>
              <p>{l}</p>
            </div>
          ))}
        </section>

        <div className="about-page" id="about">
          <section className="intro">
            <div className="eyebrow">ABOUT US</div>
            <h1 className="about-heading">
              <span>MORE THAN TRADE.</span>
              <span>WE BUILD CONNECTIONS.</span>
            </h1>
            <p className="subtitle">International Trading &amp; Export Company</p>
          </section>

          <div className="hero-image">
            <img
              src="/aboutt.jpeg"
              alt="Shipping containers at a cargo port"
            />
          </div>

          <section className="story">
            <div>
              <div className="eyebrow">OUR STORY</div>
              <h2>
                BUILT ON TRUST.
                <br />
                DRIVEN BY GLOBAL VISION.
              </h2>
              <p>
                ITEC LTD connects businesses and markets through international import, <br/>
                export and trading, helping move merchandise reliably across borders. <br/>
                We work to create seamless trade connections by bringing together suppliers, <br/>
                buyers and business partners from different parts of the world. With a focus <br/>
                on reliability, efficiency and long-term relationship.Through our commitment<br/>
                to trust, quality and professional service, we strive to build lasting <br/>
                partnerships and create opportunities for businesses to grow beyond boundaries.
              </p>
            </div>
            <div className="story-image">
              <img
                src={ship} loading="lazy" width={1200} height={800}
                alt="Container ship travelling through a commercial port"
              />
            </div>
          </section>

          <section className="pillars">
            <div className="pillar">
              <h3>MISSION</h3>
              <p>Connecting businesses, products and markets through global trade. Building trust across borders.
</p>
            </div>
             <div className="pillar">
              <h3>VALUES</h3>
              <ul className="values">
                <p>Integrity through honest trade. Reliability through consistent service. Global connections that bring markets closer. Long-term partnerships built on trust.
</p>
              </ul>
            </div>
            <div className="pillar">
              <h3>VISION</h3>
              <p>Building lasting global connections through trusted trade. Strengthening partnerships across borders.
</p>
            </div>
           
          </section>

          <footer>
            <span>TRADE BEYOND BOUNDARIES.</span>
          </footer>
        </div>

        <section className="itec-services" id="services">
          <div className="itec-services-hero">
            <div className="itec-services-hero-content">
              <div className="itec-services-label">SERVICES</div>
              <h1>
                WHAT WE <span>MOVE.</span>
              </h1>
              <p>
                Connecting products, suppliers and
                <br />
                markets across borders.
              </p>
            </div>
          </div>

          <div className="itec-services-grid">
            <ServiceText n="01" title={["INTERNATIONAL", "IMPORT & EXPORT"]} text="Moving goods across borders between global markets." points={["Customs paperwork & compliance", "Sea, air and land freight booking", "Door-to-door shipment tracking"]} />
            <div className="itec-service-image itec-port-image"></div>
            <ServiceText n="02" title={["GLOBAL PRODUCT", "SOURCING"]} text="Finding and sourcing quality products from trusted suppliers worldwide." points={["Supplier vetting & price comparison", "Quality checks before dispatch", "Sample and bulk order handling"]} />
            <div className="itec-service-image itec-ship-image"></div>
            <ServiceText n="03" title={["FREIGHT FORWARDING &", "LOGISTICS COORDINATION"]} text="Coordinating the movement of goods through international shipping networks." points={["Route and carrier selection", "Documentation & bill of lading", "Port-to-port coordination"]} />
            <ServiceText n="04" title={["END-TO-END", "TRADE SOLUTIONS"]} text="Supporting every step of the trade, from sourcing to final delivery." points={["One dedicated point of contact", "Insurance & risk management", "Final-mile delivery support"]} />
            <div className="itec-service-image itec-service04-image" role="img" aria-label="End-to-end trade solutions" />
            <ServiceText n="05" title={["SOURCING &", "SUPPLY"]} text="Connecting businesses with suitable products and reliable trade partners." points={["Trusted trade partner network", "Flexible order volumes", "Ongoing supply support"]} />
          </div>

          <div className="itec-services-footer">
            <span></span>
            <p>TRADE BEYOND BOUNDARIES.</p>
            <span></span>
          </div>
        </section>
        <section className="itec-gallery" id="gallery">
          <div className="itec-gallery-head">
            <div className="itec-gallery-label">GALLERY</div>
            <h1>THE WORLD<br />IN MOTION.</h1>
            <p>A visual look at the movement behind international trade.</p>
          </div>
          <div className="itec-gallery-grid">
            <div className="g-ship"><img src={gShip} loading="lazy" alt="Container ship crossing the ocean at sunset" /></div>
            <div className="g-tag g-tag-1">Global<br />Shipping</div>
            <div className="g-port">
              <img src={gPort} loading="lazy" alt="Port cranes loading container ships" />
              <div className="g-tag">Port Operations</div>
            </div>
            <div className="g-containers"><img src={gContainers} loading="lazy" alt="Stacked shipping containers" /></div>
            <div className="g-tag g-tag-2">International<br />Trade</div>
            <div className="g-warehouse"><img src={gWarehouse} loading="lazy" alt="Forklift moving boxes in a warehouse" /></div>
            <div className="g-tag g-tag-3">Cargo<br />Movement</div>
            <div className="g-tag g-tag-4">Global<br />Connections</div>
            <div className="g-network"><img src="/factory.jpg" loading="lazy" alt="Factory production floor" /></div>
            <div className="g-truck"><img src={gTruck} loading="lazy" alt="Truck and airplane moving cargo at sunset" /></div>
          </div>
          <div className="itec-gallery-footer"><span>TRADE BEYOND BOUNDARIES.</span></div>
        </section>
        <ContactSection />
      </main>

      <a
        className="whatsapp"
        href="https://wa.me/447741109790"
        target="_blank"
        rel="noopener"
        aria-label="Chat with ITEC LTD on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 3.5A12 12 0 0 0 5.7 21.6L4 28l6.6-1.7A12 12 0 1 0 16 3.5Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.1 10.2c-.4-.8-.8-.8-1.2-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.5 1.5-1.5 3.7s1.5 4.3 1.7 4.6c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.9-.6-.5-.2-2.6-1.3-3-1.4-.4-.1-.7-.2-1 .3-.3.5-1.1 1.4-1.4 1.7-.3.3-.5.4-1 .1-.5-.2-1.9-.7-3.6-2.2-1.3-1.1-2.2-2.5-2.5-2.9-.3-.5 0-.7.2-.9.2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.2Z"
            fill="white"
            transform="translate(2 -1) scale(.83)"
          />
        </svg>
      </a>
    </>
  );
}

function ServiceText({ n, title, text, points }: { n: string; title: [string, string]; text: string; points: string[] }) {
  return (
    <div className="itec-service-text">
      <div className="itec-service-number">
        {n} <span></span>
      </div>
      <h2>
        {title[0]}
        <br />
        {title[1]}
      </h2>
      <p>{text}</p>
      <ul className="itec-service-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
