import {useEffect, useRef, useState, type FormEvent} from 'react';
import {ArrowUpRight, ArrowDown, ArrowRight, Plus, Menu, X, Code2, Database, PanelTop, Gamepad2, Box, Wrench, Mail, Copy, Check} from 'lucide-react';
import {company, services, projectOptions, samples, faqs} from './data';
import {AboutPage, InvoicePage, FeedbackStrip} from './Pages';
import {ContactPage, CaseStudyPage, caseStudies} from './ProjectPages';

const serviceIcons = [Code2, Database, PanelTop, Gamepad2, Box, Wrench];
const steps = [
  {title:'Understand', detail:'We discuss the people, purpose, and practical requirements behind your project.'},
  {title:'Define', detail:'Agree the scope, technical approach, milestones, and estimate before starting.'},
  {title:'Develop', detail:'Build in clear stages, with reviews to keep the work aligned with your needs.'},
  {title:'Deliver', detail:'Review the finished work, hand over the agreed source and setup notes, and discuss next steps.'},
];

function Brand(){return <><img src="/images/sbm-logo.png" alt="SBM" width="1104" height="602"/><span>TRANSFORMATIVE<br/>TECH SOLUTIONS<small>PRIVATE LIMITED</small></span></>}

export default function App(){
  const isAbout=window.location.pathname.replace(/\/$/,'')==='/about';
  const isInvoice=window.location.pathname.replace(/\/$/,'')==='/projects/invoice-generator';
  const path=window.location.pathname.replace(/\/$/,'');
  const isContact=path==='/contact';
  const isEnquiry=path==='/start-project';
  const caseStudy=caseStudies.find(project=>path===`/projects/${project.slug}`);
  useEffect(()=>{
    const jumpToSection=()=>{
      const id=window.location.hash.slice(1);
      if(!id)return;
      requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'instant'}));
    };
    jumpToSection();
    window.addEventListener('hashchange',jumpToSection);
    return ()=>window.removeEventListener('hashchange',jumpToSection);
  },[]);
  const [menuOpen,setMenuOpen] = useState(false);
  const [service,setService] = useState(()=>{const value=new URLSearchParams(window.location.search).get('service')||'';return projectOptions.includes(value)?value:'';});
  const [draft,setDraft] = useState<{subject:string;body:string}|null>(null);
  const [copyState,setCopyState] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [brief,setBrief] = useState('');
  const [formError,setFormError] = useState('');
  const menuRef = useRef<HTMLButtonElement>(null);
  const draftRef = useRef<HTMLDivElement>(null);

  function prepareDraft(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!name.trim() || brief.trim().length<15){setFormError('Please add your name and a project description of at least 15 characters.');return;}
    setFormError('');
    setDraft({subject:`Project enquiry — ${service}`,body:`Hello SBM Tech Solutions,\n\nMy name is ${name.trim()}.\nEmail: ${email.trim()}\nService: ${service}\n\nProject brief:\n${brief.trim()}\n\nI would like to discuss the scope and next steps.\n\nRegards,\n${name.trim()}`});
    setCopyState('');
    requestAnimationFrame(()=>draftRef.current?.focus());
  }
  async function copyDraft(){
    if(!draft)return;
    try{await navigator.clipboard.writeText(`To: ${company.email}\nSubject: ${draft.subject}\n\n${draft.body}`);setCopyState('Draft copied. You can paste it into your preferred email app.');}
    catch{setCopyState('Copy is unavailable in this browser. You can select and copy the draft text below.');}
  }
  const mailLink=draft?`mailto:${company.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`:'';

  const enquiryContent=<>      <section className="contact-band enquiry-page" id="project-enquiry" aria-labelledby="contact-heading"><div className="wrap section contact-grid">
        <div className="contact-copy"><p className="eyebrow">DISCUSS A PROJECT</p><h1 id="contact-heading">Let’s give your idea<br/><em>a starting point.</em></h1><p>Outline the work you have in mind. Choose a service and describe your goals, then review your email draft before sending.</p><div className="enquiry-expectations"><h2>Useful details to include</h2><ul><li>Who will use the website or application</li><li>The problem you want to solve</li><li>Any existing website, reference, or timeline</li></ul><p>Just have a general question?</p><a className="text-link" href="/contact/">See our contact details <ArrowUpRight size={16}/></a></div></div>
        <div className="enquiry-panel"><h3>Tell us about your project</h3><p className="form-intro">A few details make the first conversation easier.</p>
          {!draft?<form onSubmit={prepareDraft}>
            <div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} value={name} onChange={event=>setName(event.target.value)} placeholder="Name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={event=>setEmail(event.target.value)} placeholder="you@company.com"/></label></div>
            <label>What can we help with?<select name="service" required value={service} onChange={event=>setService(event.target.value)}><option value="" disabled>Select a service</option>{projectOptions.map(option=><option key={option}>{option}</option>)}</select></label>
            <label>A little about your project<textarea name="brief" rows={4} required minLength={15} maxLength={2000} value={brief} onChange={event=>setBrief(event.target.value)} placeholder="Your idea, who it’s for, and what you’d like to achieve…"/></label>
            {formError&&<p className="form-error" role="alert">{formError}</p>}
            <button className="button form-submit" type="submit">Prepare email enquiry <ArrowRight size={17}/></button><p className="form-note">You’ll review a draft before opening your email app. Nothing is sent or stored by this website.</p>
          </form>:<div className="draft-panel" ref={draftRef} tabIndex={-1}><p className="draft-heading"><Check size={19}/>Your enquiry is ready to review.</p><p className="draft-meta">To: {company.email}</p><p className="draft-meta">Subject: {draft.subject}</p><pre>{draft.body}</pre><div className="draft-actions"><a className="button" href={mailLink}><Mail size={16}/>Open email app</a><button className="text-button" onClick={copyDraft}><Copy size={16}/>Copy draft</button></div><p className="copy-status" role="status">{copyState}</p><button className="edit-draft" onClick={()=>{setDraft(null);setCopyState('');}}>Edit details</button><p className="form-note">Not sent yet. Send it from your email app, or copy the draft into webmail.</p></div>}
        </div>
      </div></section>
</>;

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header id="page-top" className="wrap header" onKeyDown={event=>{if(event.key==='Escape'&&menuOpen){setMenuOpen(false);menuRef.current?.focus();}}}>
      <a className="brand" href="/" aria-label="SBM Tech Solutions home" onClick={()=>setMenuOpen(false)}><Brand/></a>
      <nav id="main-nav" className={menuOpen?'nav open':'nav'} aria-label="Main navigation">
        <a href="/#services" onClick={()=>setMenuOpen(false)}>Expertise</a>
        <a href="/#work" onClick={()=>setMenuOpen(false)}>Selected work</a>
        <a href="/about/" aria-current={isAbout?'page':undefined} onClick={()=>setMenuOpen(false)}>About us</a>
        <a href="/contact/" aria-current={isContact?'page':undefined} onClick={()=>setMenuOpen(false)}>Contact</a>
      </nav>
      <a className="button header-cta" href="/start-project/">Discuss a project <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" ref={menuRef} aria-label={menuOpen?'Close navigation':'Open navigation'} aria-controls="main-nav" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main id="main" tabIndex={-1}>
      {isAbout?<AboutPage/>:isInvoice?<InvoicePage/>:isContact?<ContactPage/>:isEnquiry?enquiryContent:caseStudy?<CaseStudyPage project={caseStudy}/>:<>
      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="wrap hero-grid">
          <div className="hero-copy"><p className="eyebrow">INDEPENDENT THINKING. CONSIDERED DEVELOPMENT.</p><h1 id="hero-heading">Digital experiences.<br/><em>Built with intent.</em></h1><p>Websites, software and interactive experiences that turn your next idea into something people can use.</p><div className="hero-actions"><a className="button light" href="/start-project/">Discuss your project <ArrowUpRight size={17}/></a><a className="text-link" href="/#services">Explore our expertise <ArrowDown size={16}/></a></div></div>
          <figure className="hero-art"><img src="/images/hero-art.png" alt="Abstract sculpture of flowing champagne-gold metal and smoked glass" width="1536" height="1024" fetchPriority="high"/></figure>
        </div>
        <div className="wrap hero-bottom"><span>WEB DEVELOPMENT · SOFTWARE · INTERACTIVE</span><p>Founder-led. Based in Tamil Nadu, India.</p></div>
      </section>

      <section className="intro-band wrap"><p className="eyebrow">THE IDEA IS YOURS.<br/>THE CRAFT IS OURS.</p><p>A clear website. A dependable application.<br className="desktop-break"/> An experience worth interacting with.<br/><span>We bring focused development to each.</span></p></section>

      <section className="wrap section services" id="services" aria-labelledby="services-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / OUR EXPERTISE</p><h2 id="services-heading">From first impression<br/>to the systems behind it.</h2></div><p>Choose a focused service or combine the pieces your project needs.</p></div>
        <div className="services-grid">{services.map((item,index)=>{const Icon=serviceIcons[index];return <article className="service-card" key={item.id}><div className="service-top"><span>{item.number}</span><Icon size={25} strokeWidth={1.4}/></div><h3>{item.name}</h3><p>{item.description}</p><span className="service-tech">{item.label}</span><details><summary>What we can build <Plus size={16}/></summary><div className="service-expanded"><ul>{item.deliverables.map(detail=><li key={detail}>{detail}</li>)}</ul><p>{item.fit}</p><a className="text-link" href={`/start-project/?service=${encodeURIComponent(item.name)}`}>Discuss this service <ArrowUpRight size={16}/></a></div></details></article>})}</div>
        <div className="maintenance"><div><h3>Already have something built?</h3><p>We also take on website improvements, responsive fixes, API integration, and scoped maintenance.</p></div><a className="text-link" href="/start-project/?service=Bug%20fixing%20%26%20maintenance">Let’s review it <ArrowUpRight size={18}/></a></div>
      </section>

      <section className="work-band" id="work" aria-labelledby="work-heading"><div className="wrap section">
        <div className="section-heading"><div><p className="eyebrow">02 / DEVELOPMENT IN PRACTICE</p><h2 id="work-heading">Ideas, made tangible.</h2></div><p>Developer-built applications and self-initiated concepts, exploring practical business workflows.</p></div>
        <div className="samples-grid">{samples.map(item=><article className={`sample sample-${item.id}`} key={item.id}><a className={`sample-visual ${item.id}`} href={item.projectPath} aria-label={`View ${item.name} project`}>{item.image&&<img src={item.image} alt="" loading="lazy" width="900" height="650"/>}<span>{item.id==='neat'?<>neat<span>&co.</span></>:item.id==='serein'?<>serein<small>STUDIO</small></>:item.id==='forma'?<>forma<small>CLIENT APPROVALS</small></>:<><span className="invoice-cover-icon"><Database size={36} strokeWidth={1.3}/></span><span className="invoice-cover-name">Invoice Generator<small>DESKTOP APP</small></span></>}</span><span className="sample-arrow"><ArrowUpRight size={20}/></span></a><p className="sample-category">{item.category}</p><h3>{item.name}</h3><p>{item.description}</p></article>)}</div>
        <div className="work-bottom"><p>The three website concepts use fictional data; their demos require owner access. The invoice app overview contains no customer records.</p><a className="text-link" href={company.portfolio} target="_blank" rel="noopener noreferrer">Explore the founder’s portfolio <ArrowUpRight size={17}/></a></div>
      </div></section>

      <FeedbackStrip/>

      <section className="wrap section process" id="process" aria-labelledby="process-heading">
        <div className="section-heading"><div><p className="eyebrow">03 / HOW WE WORK</p><h2 id="process-heading">Clarity at every stage.</h2></div><p>Direct conversations, a defined scope, and room for thoughtful iteration.</p></div>
        <ol className="process-grid">{steps.map((step,index)=><li key={step.title}><span className="step-number">0{index+1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
      </section>

      <section className="wrap section faq" aria-labelledby="faq-heading"><div><p className="eyebrow">BEFORE WE BEGIN</p><h2 id="faq-heading">A few good questions.</h2></div><div className="faq-list">{faqs.map(item=><details key={item.question}><summary>{item.question}<Plus size={18}/></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="page-cta home-contact" id="contact"><div className="wrap"><div><p className="eyebrow">THE NEXT CONVERSATION</p><h2>A good idea deserves<br/>a thoughtful start.</h2><p className="cta-description">Tell us what you want to build, improve, or explore.</p></div><div className="cta-actions"><a className="button light" href="/start-project/">Discuss a project <ArrowUpRight size={18}/></a><a className="text-link" href="/contact/">For general enquiries <ArrowUpRight size={16}/></a></div></div></section>
      </>}
    </main>

    <footer><div className="wrap footer-main"><div><a className="brand footer-brand" href="/" aria-label="SBM Tech Solutions home"><Brand/></a><p className="legal-name">{company.name}</p><p className="cin">CIN: {company.cin}</p></div><div className="footer-address"><p className="eyebrow">COMPANY ADDRESS</p><address>{company.address}</address></div><div className="footer-links"><p className="eyebrow">EXPLORE</p><a href="/#services">Expertise</a><a href="/about/">About the company</a><a href={company.portfolio} target="_blank" rel="noopener noreferrer">Founder’s portfolio <ArrowUpRight size={14}/></a><a href="/contact/">Get in touch</a></div></div><div className="wrap footer-bottom"><p>© {new Date().getFullYear()} SBM Transformative Tech Solutions Private Limited.</p><a href="#page-top">Back to top ↑</a></div></footer>
  </>;
}
