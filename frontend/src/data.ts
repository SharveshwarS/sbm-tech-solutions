export const company = {
  name: 'SBM Transformative Tech Solutions Private Limited',
  email: 'sbmtechsolutions.pvtltd@gmail.com',
  phone: '+91 73973 31592',
  phoneHref: 'tel:+917397331592',
  cin: 'U62011TN2025PTC184769',
  address: 'No.13A, 2nd Street, Bhagyalakshmi Nagar, Keelakattalai, Tambaram, Kanchipuram - 600117, Tamil Nadu',
  portfolio: 'https://portfolio.sbmtechsolutions-pvtltd.workers.dev/',
};

export const services = [
  {id:'web', number:'01', name:'Web development', label:'React & Vite', description:'Responsive websites and web interfaces built around the way your customers work.', deliverables:['Business websites and responsive interfaces','Dashboards, portals, and interactive workflows','Frontend integration with your APIs'], fit:'For businesses building a new website or a practical web application.'},
  {id:'backend', number:'02', name:'Backend & APIs', label:'Java · Spring Boot · MySQL', description:'The application logic and data layer that connect your interface to your business.', deliverables:['REST API development with Spring Boot','MySQL data models and application workflows','Integration between frontend and backend'], fit:'For projects that need more than a static website. Hosting and integrations are scoped together.'},
  {id:'landing', number:'03', name:'Landing pages', label:'Campaigns & product launches', description:'Focused pages that explain your offer clearly and guide visitors to the next step.', deliverables:['Product, service, and campaign landing pages','Responsive layouts with clear calls to action','Updates to content, navigation, and existing pages'], fit:'For launching an idea, introducing a service, or refreshing a first impression.'},
  {id:'unity', number:'04', name:'Unity development', label:'Unity · C#', description:'Playable ideas, interactive scenes, and game mechanics brought to life in Unity.', deliverables:['2D and 3D game prototypes','Gameplay mechanics, UI, and scene interactions','Testing and iteration of an existing prototype'], fit:'For a game concept or an interactive experience with a defined scope and target platform.'},
  {id:'xr', number:'05', name:'AR / VR experiences', label:'XR Toolkit · AR Foundation', description:'Immersive prototypes that help people explore, interact, and understand.', deliverables:['Interactive AR and VR prototypes','3D object interactions and immersive interfaces','Demonstration and learning experiences'], fit:'For proof-of-concept work. Device requirements and available 3D assets are agreed before development.'},
  {id:'maintenance', number:'06', name:'Bug fixing & maintenance', label:'React · Spring Boot · Web', description:'Find the cause, fix the issue, and keep your existing website or application moving.', deliverables:['React interface bugs and responsive layout fixes','Spring Boot API and integration troubleshooting','Small feature updates with focused regression checks'], fit:'For an existing codebase that needs attention. We review the issue and agree the scope before starting.'},
];

export const projectOptions = [...services.map(service => service.name), 'Invoice Generator App', 'I’d like some guidance'];

export const samples = [
  {id:'neat', projectPath:'/projects/neat-and-co/', name:'Neat & Co.', category:'SERVICE BUSINESS', description:'Enquiries, estimates, and an owner workflow for a fictional home-service business.', url:'https://neat-and-co-home-care.sharvesh0211.chatgpt.site', image:'/images/neat-living-room.jpg'},
  {id:'serein', projectPath:'/projects/serein-studio/', name:'Serein Studio', category:'APPOINTMENT BOOKING', description:'A service-to-appointment journey with a reception workspace.', url:'https://serein-studio-booking.sharvesh0211.chatgpt.site', image:null},
  {id:'forma', projectPath:'/projects/forma/', name:'Forma', category:'CLIENT APPROVALS', description:'Version-specific feedback, change requests, and approval interactions.', url:'https://forma-client-approvals.sharvesh0211.chatgpt.site', image:null},
  {id:'invoice', projectPath:'/projects/invoice-generator/', name:'Invoice Generator App', category:'OFFLINE DESKTOP APPLICATION', description:'A Windows invoice workspace with PDF export, editable taxes, tenant records, and local backup.', url:'/projects/invoice-generator/', image:null},
];

export const faqs = [
  {question:'Can you build both the frontend and backend?', answer:'Yes. Frontend development uses React and Vite, with Java and Spring Boot for backend APIs and MySQL where a database is needed. The right scope depends on your workflows and integrations.'},
  {question:'Can we start with a smaller project?', answer:'Yes. A landing page, a focused web feature, or a prototype is a practical starting point. We can agree a first milestone and discuss additional work after reviewing it.'},
  {question:'How are pricing and timelines decided?', answer:'After a discussion of your requirements, content, integrations, and target platforms. You receive a proposed scope, milestones, and estimate before development begins. There is no one-size-fits-all delivery promise.'},
  {question:'Do you work on existing websites or applications?', answer:'Yes, subject to reviewing the current code and setup. Work can include responsive fixes, interface improvements, API integration, and agreed maintenance tasks.'},
  {question:'What do the project examples represent?', answer:'Neat & Co., Serein Studio, and Forma are self-initiated portfolio concepts with fictional businesses and sample data. Invoice Generator App is a developed offline Windows application. Its overview uses illustrative data; no client records or commercial outcomes are published.'},
];

// Keep demonstration reviews visibly labeled until replaced with approved customer feedback.
export const reviews = [
  {id:'01', title:'Akshay', project:'Invoice Generator App', text:'Akshay found the app easy to use and was very happy with the result. He said it reduced the time and effort of making invoices and made the process feel automated.', sample:false},
  {id:'02', title:'Website development', project:'Sample review', text:'The website feels clear, easy to navigate, and comfortable to use on a phone. The enquiry process is simple.', sample:true},
  {id:'03', title:'Software & APIs', project:'Sample review', text:'The workflow is easier to follow, and the interface brings the information we need into one place.', sample:true},
  {id:'04', title:'Bug fixing & maintenance', project:'Sample review', text:'The issue was explained clearly, the agreed fix was delivered, and we could check the change together.', sample:true},
];
