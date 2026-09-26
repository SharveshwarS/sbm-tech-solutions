import {ArrowLeft, ArrowUpRight, Check, Mail, Phone, MapPin} from 'lucide-react';
import {company} from './data';

export const caseStudies = [
  {
    slug:'neat-and-co', name:'Neat & Co.', category:'SERVICE BUSINESS WEBSITE', className:'neat',
    summary:'From the first enquiry to the final job. A considered website and owner workspace for a fictional home-service business.',
    problem:'Service businesses need more than a page of contact details. Requests, estimates, approvals, and job progress need a clear place to live.',
    approach:'A customer-facing service website paired with an owner workflow. Visitors describe the job; the owner reviews the enquiry, prepares an estimate, and moves approved work through its stages.',
    features:[['Service discovery','Service listings, individual service pages, service areas, and frequently asked questions.'],['Guided enquiries','A three-step form for home details, a preferred visit, and the work the customer needs.'],['Estimates & approvals','Itemized estimates, versioned approval links, and an enquiry-to-job workflow.'],['Owner workspace','Search, status filters, private notes, follow-up dates, and CSV export.']],
    journey:['Explore services','Describe the job','Review the estimate','Track the work'],
    stack:'React · TypeScript · Vite / Spring Boot · MySQL-compatible database',
    demo:'https://neat-and-co-home-care.sharvesh0211.chatgpt.site',
    boundary:'Self-initiated portfolio concept. The hosted preview uses fictional data and does not create real appointments, payments, emails, or SMS. A separate local implementation includes the backend and database.',
    image:'/images/neat-living-room.jpg',
  },
  {
    slug:'serein-studio', name:'Serein Studio', category:'APPOINTMENT BOOKING SYSTEM', className:'serein',
    summary:'An easy path from choosing a service to managing an appointment, with a reception workspace on the other side.',
    problem:'Appointment-based businesses need customers to find a suitable time while staff keep services, calendars, and availability organized.',
    approach:'A guided booking experience for a fictional studio, with a reception calendar for the team. The project connects the customer journey with the daily work of managing appointments.',
    features:[['Guided booking','Choose a service, professional, and time, then add contact details.'],['Appointment management','Reschedule or cancel through private management links, with a calendar-file download.'],['Reception workspace','Calendar and list views, search, team filters, check-in, and appointment statuses.'],['Availability controls','Working hours, breaks, days off, service assignments, and time blocks.']],
    journey:['Choose a service','Pick a professional & time','Confirm the details','Manage the appointment'],
    stack:'React · TypeScript · Vite / Spring Boot · MySQL-compatible database',
    demo:'https://serein-studio-booking.sharvesh0211.chatgpt.site',
    boundary:'Self-initiated portfolio concept. The hosted preview uses fictional appointments that reset on refresh. Email delivery, payments, SMS, and external calendar synchronization are not connected. The local implementation includes the backend and database.',
    image:null,
  },
  {
    slug:'forma', name:'Forma', category:'CLIENT APPROVAL PORTAL', className:'forma',
    summary:'A shared place to review work, request changes, and approve the right version. Built around a familiar agency-client workflow.',
    problem:'Feedback scattered across messages makes it difficult to know which version was reviewed, what changed, and what still needs approval.',
    approach:'A frontend portal concept that keeps deliverables, comments, revisions, and decisions together. Clients review a specific version; the agency can see what is pending and what is ready to complete.',
    features:[['A clear overview','Sample client and agency workspaces with pending reviews and project progress.'],['Versioned deliverables','Illustrative previews, revision switching, and a history of earlier decisions.'],['Focused feedback','Version-specific comments, requests for changes, and explicit approval confirmation.'],['Review records','Status filters, project activity, downloadable review records, and demo reset.']],
    journey:['Open a deliverable','Leave focused feedback','Review a revision','Approve that version'],
    stack:'React · TypeScript · Vite · React Router / Static demonstration data',
    demo:'https://forma-client-approvals.sharvesh0211.chatgpt.site',
    boundary:'Self-initiated frontend concept using fictional data. Changes last only for the current page session. Authentication, real uploads, document storage, email, and electronic signatures are not connected.',
    image:null,
  },
];

export function CaseStudyPage({project}:{project:typeof caseStudies[number]}){
  return <>
    <section className="wrap section case-hero">
      <a href="/#work" className="text-link"><ArrowLeft size={16}/>Back to projects</a>
      <div className="case-hero-grid"><div><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p className="page-lead">{project.summary}</p><p className="project-stack">{project.stack}</p><a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">Open project demo <ArrowUpRight size={17}/></a><p className="project-footnote">The demo currently requires owner access.</p></div>
        <div className={`case-cover ${project.className}`}>{project.image&&<img src={project.image} alt="Living room used in the fictional Neat & Co. concept" width="900" height="650"/>}<div><span className="case-cover-label">PORTFOLIO CONCEPT</span><span className="case-cover-name">{project.name}</span><span className="case-cover-caption">{project.category}</span></div></div>
      </div>
    </section>
    <section className="case-context wrap"><article><p className="eyebrow">THE PROBLEM</p><h2>A practical starting point.</h2><p>{project.problem}</p></article><article><p className="eyebrow">THE APPROACH</p><h2>A connected workflow.</h2><p>{project.approach}</p></article></section>
    <section className="project-feature-band"><div className="wrap section"><p className="eyebrow">INSIDE THE PROJECT</p><h2>Designed around<br/>the work that matters.</h2><div className="project-features">{project.features.map(([title,description])=><article key={title}><Check size={22}/><h3>{title}</h3><p>{description}</p></article>)}</div><ol className="project-journey">{project.journey.map((step,index)=><li key={step}><span>0{index+1}</span>{step}</li>)}</ol><p className="project-disclosure">{project.boundary}</p></div></section>
    <section className="page-cta"><div className="wrap"><div><p className="eyebrow">YOUR BUSINESS, YOUR WORKFLOW</p><h2>Have a similar idea?</h2></div><a href="/start-project/" className="button light">Discuss your project <ArrowUpRight size={18}/></a></div></section>
  </>;
}

export function ContactPage(){
  return <>
    <section className="wrap section contact-page"><p className="eyebrow">CONTACT SBM</p><h1>Good conversations.<br/><em>Useful beginnings.</em></h1><p className="page-lead">For a general question, a collaboration, or a quick introduction, reach us directly.</p>
      <div className="contact-methods"><a href={`mailto:${company.email}`}><Mail size={23}/><span className="eyebrow">EMAIL US</span><h2>{company.email}</h2><span>Open your email app <ArrowUpRight size={17}/></span></a><a href={company.phoneHref}><Phone size={23}/><span className="eyebrow">CALL US</span><h2>{company.phone}</h2><span>Start a conversation <ArrowUpRight size={17}/></span></a><article><MapPin size={23}/><span className="eyebrow">COMPANY ADDRESS</span><address>{company.address}</address><span>Tamil Nadu, India</span></article></div>
    </section>
    <section className="page-cta"><div className="wrap"><div><p className="eyebrow">READY TO TALK ABOUT A BUILD?</p><h2>Give your idea a little detail.</h2><p className="cta-description">Our project enquiry helps you outline the service, goals, and work you have in mind.</p></div><a className="button light" href="/start-project/">Discuss a project <ArrowUpRight size={18}/></a></div></section>
  </>;
}
