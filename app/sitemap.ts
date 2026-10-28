import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const base="https://ourkarigar.in";const core=["","/services","/blog","/privacy-policy","/terms-and-conditions","/return-refund-policy"].map((path,i)=>({url:`${base}${path}/`,lastModified:new Date("2026-10-28"),changeFrequency:(i===0?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:.7}));const blog=Object.keys(posts).map(slug=>({url:`${base}/blog/${slug}/`,lastModified:new Date("2026-10-28"),changeFrequency:"monthly" as const,priority:.7}));const servicePages=Object.keys(services).map(slug=>({url:`${base}/services/${slug}/`,lastModified:new Date("2026-10-28"),changeFrequency:"monthly" as const,priority:.8}));return [...core,...servicePages,...blog]}
