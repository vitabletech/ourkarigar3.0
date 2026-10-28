import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import VitableAd from "@/components/VitableAd";

export const metadata:Metadata={title:"Electronics Repair & Digital Business Guides",description:"Practical LED TV, appliance and electronics care guides, plus business technology insights from OurKarigar and VitableTech.",alternates:{canonical:"/blog/"}};

export default function Blog(){return <main>
  <header className="blog-hero"><div className="wrap"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Blog</span></nav><div className="eyebrow">OurKarigar journal</div><h1>Repair advice & digital ideas.</h1><p>Practical electronics care from OurKarigar, plus websites, software, AI and product insights from the VitableTech team.</p></div></header>
  <section><div className="wrap"><div className="section-head"><div><div className="eyebrow">Latest articles</div><h2>Guides made to be useful.</h2></div><p>Safe troubleshooting, appliance care, local SEO and practical technology ideas for customers and small businesses.</p></div><div className="grid3">{Object.entries(posts).map(([slug,p])=><article className="card blog-card" key={slug}><span className="eyebrow">{slug.includes("vitabletech")||slug.includes("website-")?"Business & technology":"Repair guide"}</span><h3>{p.title}</h3><p>{p.description}</p><div className="article-meta"><span><i className="fa-regular fa-calendar"/> {p.date}</span><span><i className="fa-regular fa-clock"/> {Math.max(4,p.content.length+2)} min</span></div><Link href={`/blog/${slug}/`}>Read article →</Link></article>)}</div></div></section>
  <section className="related"><div className="wrap"><div className="section-head"><div><div className="eyebrow">Technology partner</div><h2>Explore what VitableTech builds.</h2></div></div><div className="grid3"><VitableAd variant="services"/><VitableAd variant="products"/><article className="card"><div className="icon"><i className="fa-solid fa-pen-ruler"/></div><h3>Built by the VitableTech team</h3><p>This OurKarigar experience combines static Next.js performance, local SEO foundations and conversion-focused design.</p><a href="https://vitabletech.in/" target="_blank" rel="noopener noreferrer">Visit VitableTech →</a></article></div></div></section>
</main>}
