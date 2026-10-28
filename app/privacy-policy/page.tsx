import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata:Metadata={title:"Privacy Policy",description:"How OurKarigar handles information shared through repair enquiries, calls, email and WhatsApp.",alternates:{canonical:"/privacy-policy/"}};
const sections=[
  {id:"information",title:"Information we receive",icon:"fa-inbox",body:<p>When you call, email or contact us through WhatsApp, you may provide your name, phone number, address or location, device details, photos, videos and repair requirements.</p>},
  {id:"use",title:"How we use information",icon:"fa-list-check",body:<p>We use this information to respond to enquiries, diagnose or arrange service, provide estimates, complete approved repairs, maintain service records and meet legal obligations.</p>},
  {id:"sharing",title:"Sharing and retention",icon:"fa-lock",body:<p>We do not sell personal information. Information may be handled by communication providers such as WhatsApp or email under their own terms, and shared where legally required. We retain service information only as reasonably needed for support, records and compliance.</p>},
  {id:"choices",title:"Your choices",icon:"fa-user-check",body:<p>You may ask us to correct or delete information we control, subject to legal and accounting requirements. Contact <a href="mailto:info@vitabletech.in">info@vitabletech.in</a>.</p>},
  {id:"links",title:"External links",icon:"fa-arrow-up-right-from-square",body:<p>This site links to Facebook, Instagram, WhatsApp and VitableTech. Their privacy practices are governed by their own policies.</p>},
];
export default function Privacy(){return <LegalPage title="Privacy Policy" description="OurKarigar, owned by Umesh Jadon, respects your privacy when you contact us for electronics repair services." effective="28 October 2026" sections={sections}/>}
