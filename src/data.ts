export const EMAIL = 'slizlaszlo@gmail.com'
export const LINKEDIN_LABEL = 'linkedin.com/in/laszlo-sliz'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/laszlo-sliz'

export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export const skills = [
  {
    title: 'Languages',
    recently: 'TypeScript, JavaScript, HTML, CSS',
    previously: 'C#, SQL',
  },
  {
    title: 'Frameworks',
    recently: 'React, Next.js, Tailwind, Zustand, NestJS, NX Monorepo',
    previously:
      'LightningJS, Angular, AngularJS, SolidJS, NativeScript, Node.js, GraphQL, Docker, Gatsby, Redux Toolkit',
  },
  {
    title: 'Tools',
    recently: 'VS Code, Git, Jira, Bitbucket',
    previously: 'Visual Studio, GitHub, GitLab, Azure DevOps, TFS, SVN, Jenkins',
  },
]

export const experience: { period: string; title: string; org: string; text?: string }[] = [
  {
    period: '2024 – Present',
    title: 'Senior Software Engineer · Team Lead',
    org: 'ICF Tech Hungary',
    text: 'Led the team that built a new Admin application with TypeScript, React and NestJS. Now working on a customer-facing fan platform (Next.js, TypeScript, micro-frontends behind API gateways and Node.js web services).',
  },
  {
    period: '2023 – 2024',
    title: 'Senior Software Engineer',
    org: 'X2X Media',
    text: 'Developed the PIX web application with TypeScript and React, and maintained and upgraded the production PIX software.',
  },
  {
    period: '2020 – 2022',
    title: 'Senior Software Engineer',
    org: 'WarnerMedia / Warner Bros. Discovery',
    text: 'HBO Max set-top-box and TV application development with TypeScript and the LightningJS framework.',
  },
  {
    period: '2020',
    title: 'Software Engineer',
    org: 'HBO Europe',
    text: 'Built JS SDKs in TypeScript for the HBO GO big-screen applications (EU), a web SDK for the HBO GO website, and Chromecast support.',
  },
  {
    period: '2015 – 2019',
    title: 'Web Developer',
    org: 'Digital Media Experience',
    text: 'HBO GO: React components for the website, a Node.js GraphQL microservice with Azure DevOps pipelines in Docker, an Angular 2+ gateway (EU) and an AngularJS web app (LATAM).',
  },
  {
    period: '2011 – 2015',
    title: 'QA Engineer, then Software Engineer',
    org: 'API International',
    text: 'Started with testing desktop and web applications, test planning and release support, then moved on to C# tools, WCF services, T-SQL and WPF desktop applications.',
  },
  {
    period: '2012 – 2020',
    title: 'Freelance Software Engineer (part-time)',
    org: 'Pulilab, CodingSans, Serveture, Riltech',
    text: 'Cross-platform mobile apps with NativeScript and Angular, an AngularJS back office, and a Silverlight multimedia delivery tool.',
  },
  {
    period: '2007 – 2013',
    title: 'Software Engineer degree',
    org: 'College of Eszterházy Károly, Eger',
  },
]
