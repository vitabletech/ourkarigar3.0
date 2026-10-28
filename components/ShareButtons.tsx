"use client";
import { useState } from "react";

export default function ShareButtons({title}:{title:string}){
  const [copied,setCopied]=useState(false);
  const share=(network:string)=>{const url=encodeURIComponent(window.location.href);const text=encodeURIComponent(title);const links:{[key:string]:string}={facebook:`https://www.facebook.com/sharer/sharer.php?u=${url}`,whatsapp:`https://wa.me/?text=${text}%20${url}`,x:`https://twitter.com/intent/tweet?text=${text}&url=${url}`};window.open(links[network],"_blank","noopener,noreferrer,width=720,height=560")};
  const copy=async()=>{await navigator.clipboard.writeText(window.location.href);setCopied(true);setTimeout(()=>setCopied(false),1800)};
  return <div className="share"><span>Share this guide</span><div className="share-row"><button onClick={()=>share("facebook")} aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f"/></button><button onClick={()=>share("whatsapp")} aria-label="Share on WhatsApp"><i className="fa-brands fa-whatsapp"/></button><button onClick={()=>share("x")} aria-label="Share on X"><i className="fa-brands fa-x-twitter"/></button><button onClick={copy} aria-label="Copy article link"><i className={`fa-solid ${copied?"fa-check":"fa-link"}`}/></button></div>{copied&&<small>Link copied</small>}</div>
}
