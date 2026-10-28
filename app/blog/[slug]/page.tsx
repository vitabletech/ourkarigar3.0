import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, type PostSlug } from "@/lib/posts";
import ShareButtons from "@/components/ShareButtons";
import VitableAd from "@/components/VitableAd";

export function generateStaticParams(){return Object.keys(posts).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const post=posts[slug as PostSlug];if(!post)return {};
  return {title:post.title,description:post.description,alternates:{canonical:`/blog/${slug}/`},openGraph:{type:"article",title:post.title,description:post.description,publishedTime:post.date}};
}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const post=posts[slug as PostSlug];if(!post)notFound();
  const articleSchema={"@context":"https://schema.org","@type":"Article","headline":post.title,"description":post.description,"datePublished":post.date,"dateModified":post.date,"author":{"@type":"Organization","name":"OurKarigar"},"publisher":{"@type":"Organization","name":"OurKarigar"},"mainEntityOfPage":`https://ourkarigar.in/blog/${slug}/`};
  const related=Object.entries(posts).filter(([key])=>key!==slug).slice(0,3);
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
    <header className="blog-hero"><div className="wrap">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog/">Blog</Link><span>/</span><span>{post.title}</span></nav>
      <div className="eyebrow">OurKarigar insights</div><h1>{post.title}</h1><p>{post.description}</p>
      <div className="article-meta"><span><i className="fa-regular fa-calendar"/> {post.date}</span><span><i className="fa-regular fa-clock"/> {Math.max(4,post.content.length+2)} min read</span><span><i className="fa-regular fa-user"/> OurKarigar editorial team</span></div>
    </div></header>
    <section><div className="article-shell">
      <aside className="side-rail side-left"><ShareButtons title={post.title}/><VitableAd variant="services"/></aside>
      <article className="article-main">
        <p>{post.description}</p><div className="article-social"><ShareButtons title={post.title}/></div>
        {post.content.map(([heading,text])=><div key={heading}><h2>{heading}</h2><p>{text}</p></div>)}
        {slug==="vitabletech-digital-services"&&<p><a className="btn btn-dark" href="https://vitabletech.in/services/index" target="_blank" rel="noopener noreferrer">Explore VitableTech services</a> &nbsp; <a className="btn btn-outline" href="https://vitabletech.in/projects.html" target="_blank" rel="noopener noreferrer">View products & projects</a></p>}
        <div className="cta" style={{marginTop:52}}><div><h2>Need a device checked?</h2><p>Send the brand, model and fault details to OurKarigar.</p></div><a className="btn btn-dark" href="https://wa.me/917723062912">WhatsApp us</a></div>
      </article>
      <aside className="side-rail side-right"><VitableAd variant="products"/><ShareButtons title={post.title}/></aside>
    </div></section>
    <section className="related"><div className="wrap"><div className="section-head"><div><div className="eyebrow">Keep reading</div><h2>Related guides & ideas</h2></div><Link className="btn btn-outline" href="/blog/">All articles</Link></div><div className="grid3">{related.map(([key,item])=><article className="card blog-card" key={key}><span className="eyebrow">Guide</span><h3>{item.title}</h3><p>{item.description}</p><Link href={`/blog/${key}/`}>Read article →</Link></article>)}</div></div></section>
  </main>
}
