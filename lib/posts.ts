export const posts={
  "led-tv-repair-signs":{title:"7 Signs Your LED TV Needs Professional Repair",description:"Flickering, dark screens, missing sound and slow startup can indicate a repairable LED TV fault.",date:"2026-10-28",content:[
    ["The screen flickers or goes dark","Intermittent flicker can relate to a backlight, power board, cable or panel issue. If brightness changes do not help, switch off the TV and arrange diagnosis."],
    ["You hear sound but see no picture","A working audio track with a black display often points toward the backlight or display circuit. Avoid repeatedly power-cycling the set."],
    ["The TV takes several tries to start","Slow starts, clicking or standby loops may be connected to power supply components or a main-board fault."],
    ["Lines or patches appear on screen","Vertical lines, colour patches or half-screen output can have several causes. A technician needs the exact model and a clear photo to assess repairability."],
    ["HDMI or USB ports stop working","Test another cable and device first. If multiple ports fail, the input board or software may need attention."],
    ["The TV restarts by itself","Disconnect external devices and test a different outlet. Continuing restarts can indicate overheating, software trouble or an unstable power circuit."],
    ["There is a burning smell or unusual heat","Disconnect power immediately. Do not open the unit; high-voltage sections can remain dangerous even after unplugging."],
  ]},
  "induction-cooktop-not-heating":{title:"Induction Cooktop Not Heating? Safe Checks to Try First",description:"A practical guide to common induction cooktop faults and safe troubleshooting before booking repair.",date:"2026-10-28",content:[
    ["Check the cookware","Induction cooktops need magnetic, flat-bottomed cookware. If a magnet does not stick firmly to the base, the vessel may not be compatible."],
    ["Check power and ventilation","Confirm the socket works, the plug is seated correctly and ventilation openings are not blocked. Let an overheated unit cool before retrying."],
    ["Read the error code","Note the displayed code and model number. The manual may identify a cookware, voltage, temperature or internal sensor warning."],
    ["Do not open the appliance","Internal capacitors and power electronics can be hazardous. If the unit trips power, smells hot, beeps continuously or stays cold with compatible cookware, arrange professional diagnosis."],
  ]},
  "vitabletech-digital-services":{title:"How VitableTech Helps Local Businesses Build Better Digital Products",description:"Explore custom software, web, mobile, UI/UX, AI, cloud and support services from VitableTech.",date:"2026-10-28",content:[
    ["Websites and web applications","VitableTech builds responsive websites, customer portals, SaaS products and business tools using modern web technologies."],
    ["Custom software and automation","Teams can commission ERP, CRM, operational workflows and tailored software built around actual business processes."],
    ["Mobile apps and product design","Services include iOS, Android and cross-platform development, supported by user research, wireframes, prototypes and interface design."],
    ["AI, cloud and ongoing support","VitableTech offers LLM integration, process automation, DevOps, cloud migration, maintenance and performance support."],
    ["Developer products","The team also builds public developer tools and products such as Ludo Player for VS Code, SnippetMaster and other open-source utilities. Explore the current portfolio on VitableTech’s website."],
  ]},
  "vitabletech-products-for-developers":{title:"5 VitableTech Products and Open-Source Tools Worth Exploring",description:"A closer look at VitableTech products for developers, careers, business profiles and everyday productivity.",date:"2026-10-28",content:[
    ["Ludo Player for VS Code","Ludo Player places a lightweight multiplayer board game inside the VS Code sidebar, giving developers a quick break without changing applications."],
    ["SnippetMaster","SnippetMaster is designed as a fast vault for saving, organising and retrieving reusable code snippets with syntax-aware presentation."],
    ["Career Buddy","Career Buddy focuses on career planning and ATS-oriented resume support for professionals preparing their next move."],
    ["Google Business Profile tools","VitableTech’s GBP tools are aimed at local-business workflows such as listings, reviews and local search visibility."],
    ["Open-source engineering projects","VitableTech also publishes developer utilities and architectural experiments, including terminal visualisation and workflow tools. Visit the current projects page for availability and release details."],
  ]},
  "website-for-local-business":{title:"Why Every Local Service Business Needs a Fast, Search-Friendly Website",description:"How a focused website, local SEO and clear conversion paths help service businesses turn searches into enquiries.",date:"2026-10-28",content:[
    ["Own the customer journey","A dedicated website lets a business explain its services, service area, contact process and policies without depending entirely on a social platform."],
    ["Answer local search intent","Location-specific service pages, useful guides, structured business data and consistent contact details help search engines understand what the business offers and where."],
    ["Make the next step obvious","Calls, WhatsApp, directions and enquiry buttons should be easy to find—especially on mobile, where many local searches happen."],
    ["Build trust before the first call","Real owner information, clear policies, helpful articles and accurate service descriptions give prospective customers reasons to make contact."],
    ["Choose a practical technology partner","VitableTech offers web development, custom software, UI/UX, mobile development, AI integration, cloud services and ongoing maintenance for businesses that want to improve their digital operations."],
  ]}
} as const;
export type PostSlug=keyof typeof posts;
