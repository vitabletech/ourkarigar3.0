import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata:Metadata={title:"Terms and Conditions",description:"Terms for OurKarigar electronics repair enquiries, estimates, repairs, parts and device collection.",alternates:{canonical:"/terms-and-conditions/"}};
const sections=[
  {id:"diagnosis",title:"Diagnosis and estimates",icon:"fa-magnifying-glass",body:<p>Initial guidance may be based on the information you provide. A final diagnosis, price and timeline may require physical inspection. Work begins after the customer approves the communicated scope and estimate.</p>},
  {id:"responsibilities",title:"Customer responsibilities",icon:"fa-clipboard-check",body:<p>Customers should provide accurate device and fault information, disclose previous repairs, remove personal data where practical, back up smart devices, and collect serviced items within the agreed period.</p>},
  {id:"parts",title:"Parts, warranties and limitations",icon:"fa-gears",body:<p>Parts availability, compatibility and repairability vary by model. Any service or part warranty will be stated on the job record or invoice. Warranty does not cover misuse, liquid or impact damage, power fluctuation, unrelated faults or third-party intervention after service.</p>},
  {id:"data",title:"Data and uncollected devices",icon:"fa-hard-drive",body:<p>Repairs involving smart devices may carry a risk of data loss. OurKarigar is not responsible for data not backed up by the customer. Storage or disposal of uncollected devices will be handled only after reasonable attempts to contact the customer and in line with applicable law.</p>},
  {id:"contact",title:"Contact and questions",icon:"fa-envelope",body:<p>Questions may be sent to <a href="mailto:info@vitabletech.in">info@vitabletech.in</a> or raised by phone at <a href="tel:+917723062912">+91 77230 62912</a>.</p>},
];
export default function Terms(){return <LegalPage title="Terms & Conditions" description="These terms explain the practical responsibilities and expectations for repair services provided by OurKarigar in Gwalior." effective="28 October 2026" sections={sections}/>}
