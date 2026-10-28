"use client";
import { useEffect } from "react";

export default function ScrollEffects(){
  useEffect(()=>{
    const elements=Array.from(document.querySelectorAll<HTMLElement>(".card, .step, .about-grid, .faq details, .cta"));
    elements.forEach((element,index)=>{element.classList.add("scroll-reveal");element.style.setProperty("--reveal-delay",`${(index%3)*80}ms`)});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){(entry.target as HTMLElement).classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.1,rootMargin:"0px 0px -35px"});
    elements.forEach(element=>observer.observe(element));
    return()=>observer.disconnect();
  },[]);
  return null;
}
