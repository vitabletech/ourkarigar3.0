import Link from "next/link";

type Section={id:string;title:string;icon:string;body:React.ReactNode};

export default function LegalPage({title,description,effective,sections}:{title:string;description:string;effective:string;sections:Section[]}){
  return <main>
    <header className="legal-hero"><div className="wrap legal-hero-grid"><div><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Legal</span><span>/</span><span>{title}</span></nav><div className="eyebrow">Effective {effective}</div><h1>{title}</h1><p>{description}</p><div className="article-meta"><span><i className="fa-solid fa-user-shield"/> Plain-language policy</span><span><i className="fa-solid fa-location-dot"/> Gwalior, India</span></div></div><div className="legal-hero-mark" aria-hidden="true"><i className="fa-solid fa-shield-halved"/></div></div></header>
    <section className="legal-body"><div className="legal-shell">
      <aside className="legal-nav"><div className="legal-nav-card"><span className="ad-label">On this page</span>{sections.map(section=><a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</div><div className="legal-help"><i className="fa-regular fa-circle-question"/><h3>Have a question?</h3><p>Ask us about a policy before booking a repair.</p><a href="mailto:info@vitabletech.in">info@vitabletech.in</a><a href="tel:+917723062912">+91 77230 62912</a></div></aside>
      <article className="legal-content">{sections.map((section,index)=><section className="legal-section card" id={section.id} key={section.id}><div className="legal-section-icon"><i className={`fa-solid ${section.icon}`}/></div><div><span className="legal-count">{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2><div className="legal-copy">{section.body}</div></div></section>)}<div className="legal-note"><i className="fa-solid fa-circle-info"/><div><strong>Need clarification?</strong><p>Contact OurKarigar before approving work. We’ll explain how the relevant policy applies to your service request.</p></div></div></article>
    </div></section>
    <section className="legal-cta"><div className="wrap cta"><div><div className="eyebrow">Ready to get help?</div><h2>Describe the device and fault on WhatsApp.</h2></div><a className="btn btn-dark" href="https://wa.me/917723062912?text=Hello%20OurKarigar%2C%20I%20have%20a%20question%20about%20a%20repair"><i className="fa-brands fa-whatsapp"/> Start a conversation</a></div></section>
  </main>
}
