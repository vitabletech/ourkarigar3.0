"use client";
import { Mascot } from "page-mascot";
import { useState } from "react";

export default function BuilderMascot(){const[open,setOpen]=useState(true);return <div className="mascot-helper">{open&&<div className="mascot-speech"><button onClick={()=>setOpen(false)} aria-label="Close helper message">×</button><strong>Namaste! I can help.</strong><span>Tell me your device, brand and problem. Send a photo on WhatsApp for faster guidance.</span><a href="https://wa.me/917723062912?text=Hello%20OurKarigar%2C%20please%20help%20with%20my%20device">Ask OurKarigar →</a></div>}<div onClick={()=>setOpen(true)}><Mascot directions="/mascots/builder-directions.webp" reactions="/mascots/builder-reactions.webp" size={128} label="OurKarigar helper"/></div></div>}
