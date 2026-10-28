import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata:Metadata={title:"Return and Refund Policy",description:"How cancellations, diagnosis fees, approved repairs, replacement parts and refund reviews are handled by OurKarigar.",alternates:{canonical:"/return-refund-policy/"}};
const sections=[
  {id:"scope",title:"Policy scope",icon:"fa-file-circle-check",body:<p>This website does not currently sell products online. This policy applies to repair-service payments, diagnosis or visit fees, and parts supplied during an approved repair.</p>},
  {id:"before-work",title:"Before work begins",icon:"fa-circle-stop",body:<p>If no repair work or specially ordered part has begun, a customer may cancel without a service refund issue, except for any diagnosis or visit fee communicated in advance.</p>},
  {id:"approved",title:"Approved repairs and parts",icon:"fa-screwdriver-wrench",body:<p>Labour already performed and diagnosis fees are generally non-refundable. Special-order or installed electronic parts cannot normally be returned unless they are defective and covered by the stated supplier or service warranty.</p>},
  {id:"repeat-fault",title:"If a repaired fault returns",icon:"fa-rotate",body:<p>Contact us promptly with the invoice or job details. We will inspect the device. If the same approved repair has failed within an expressly stated warranty period, the eligible repair will be handled according to that warranty. New, unrelated, accidental, voltage or liquid damage is not covered.</p>},
  {id:"review",title:"Refund review process",icon:"fa-indian-rupee-sign",body:<p>Any approved refund is returned through a mutually agreed method after inspection. Processing time can depend on the payment provider. Request a review at <a href="mailto:info@vitabletech.in">info@vitabletech.in</a> or call <a href="tel:+917723062912">+91 77230 62912</a>.</p>},
];
export default function Refund(){return <LegalPage title="Return & Refund Policy" description="A clear guide to cancellations, completed labour, replacement parts, repeat faults and refund reviews." effective="28 October 2026" sections={sections}/>}
