export interface Job {
  id: string
  title: string
  companyName: string
  companyLogo?: string
  location: string
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  salaryRange: string
  description: string
  requirements: string
  responsibilities: string
  applicationDeadline: string
  experience?: string
  createdAt: string
  updatedAt: string
}

export const staticJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    companyLogo:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: 'TechCorp Inc.',
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern JavaScript frameworks and ensuring excellent user experience.',
    requirements: 'Bachelor\'s degree in Computer Science or related field. 5+ years of experience with React, TypeScript, and modern frontend technologies. Strong understanding of responsive design and cross-browser compatibility.',
    responsibilities: 'Develop and maintain frontend applications, collaborate with design and backend teams, optimize application performance, mentor junior developers, and participate in code reviews.',
    applicationDeadline: '2025-02-15T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-01T10:00:00.000Z'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    companyName: 'StartupXYZ',
    companyLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Join our fast-growing startup as a Full Stack Engineer. You\'ll work on both frontend and backend systems, helping to build scalable web applications that serve millions of users.',
    requirements: '3+ years of experience with Node.js, React, and PostgreSQL. Experience with cloud platforms (AWS/GCP). Strong problem-solving skills and ability to work in a fast-paced environment.',
    responsibilities: 'Design and implement full-stack features, maintain existing codebase, work with product team on requirements, deploy and monitor applications, and contribute to technical architecture decisions.',
    applicationDeadline: '2025-02-20T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-02T14:30:00.000Z'
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    companyName: 'Design Studio Pro',
    companyLogo:"https://img-cdn.publive.online/fit-in/1200x675/afaqs/media/post_attachments/2464727cf8c9a2f1686ab5656f3a1fe612e88887985928ac19cd07d4144ea3ad.png",
    location: 'Onsite',
    jobType: 'Contract',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'We\'re seeking a talented UI/UX Designer to create intuitive and visually appealing user interfaces. You\'ll work closely with our development team to bring designs to life.',
    requirements: 'Portfolio demonstrating strong UI/UX design skills. Proficiency in Figma, Sketch, or Adobe Creative Suite. Understanding of design systems and user-centered design principles.',
    responsibilities: 'Create wireframes and prototypes, conduct user research, design user interfaces, collaborate with developers on implementation, and maintain design system documentation.',
    applicationDeadline: '2025-02-10T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-03T09:15:00.000Z'
  },
  {
    id: '4',
    title: 'Backend Developer',
    companyName: 'CloudTech Solutions',
    companyLogo:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Looking for a Backend Developer to build robust and scalable server-side applications. You\'ll work with microservices architecture and cloud-native technologies.',
    requirements: 'Strong experience with Python or Node.js. Knowledge of database design and optimization. Experience with Docker, Kubernetes, and cloud platforms. Understanding of API design principles.',
    responsibilities: 'Develop and maintain backend services, design database schemas, implement APIs, optimize application performance, and ensure system security and reliability.',
    applicationDeadline: '2025-02-25T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-04T11:45:00.000Z'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    companyName: 'InfraTech Corp',
    companyLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Join our DevOps team to help build and maintain our cloud infrastructure. You\'ll work on automation, monitoring, and deployment pipelines to support our development teams.',
    requirements: 'Experience with AWS/Azure/GCP, Terraform, and CI/CD pipelines. Strong scripting skills in Python or Bash. Knowledge of monitoring tools like Prometheus and Grafana.',
    responsibilities: 'Manage cloud infrastructure, automate deployment processes, monitor system performance, implement security best practices, and support development teams with tooling.',
    applicationDeadline: '2025-03-01T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-05T16:20:00.000Z'
  },
  {
    id: '6',
    title: 'Product Manager',
    companyName: 'Innovation Labs',
    companyLogo:"https://img-cdn.publive.online/fit-in/1200x675/afaqs/media/post_attachments/2464727cf8c9a2f1686ab5656f3a1fe612e88887985928ac19cd07d4144ea3ad.png",
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'We\'re looking for a Product Manager to drive product strategy and execution. You\'ll work cross-functionally to deliver products that delight our customers.',
    requirements: 'MBA or equivalent experience. 4+ years in product management. Strong analytical skills and experience with product analytics tools. Excellent communication and leadership skills.',
    responsibilities: 'Define product roadmap, gather and prioritize requirements, work with engineering and design teams, analyze product metrics, and communicate with stakeholders.',
    applicationDeadline: '2025-02-28T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-06T13:10:00.000Z'
  },
  {
    id: '7',
    title: 'Data Scientist',
    companyName: 'Analytics Pro',
    companyLogo:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    location: 'Onsite',
    jobType: 'Full-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Join our data science team to extract insights from large datasets and build predictive models. You\'ll work on machine learning projects that drive business decisions.',
    requirements: 'PhD or Master\'s in Data Science, Statistics, or related field. Strong programming skills in Python or R. Experience with machine learning frameworks and statistical analysis.',
    responsibilities: 'Analyze complex datasets, build predictive models, create data visualizations, collaborate with business stakeholders, and present findings to leadership team.',
    applicationDeadline: '2025-03-05T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-07T08:30:00.000Z'
  },
  {
    id: '8',
    title: 'Marketing Intern',
    companyName: 'Growth Marketing Co',
    companyLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    location: 'Onsite',
    jobType: 'Internship',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Great opportunity for a marketing student to gain hands-on experience in digital marketing. You\'ll work on social media campaigns, content creation, and market research.',
    requirements: 'Currently enrolled in Marketing, Communications, or related program. Basic understanding of social media platforms and digital marketing concepts. Strong writing and communication skills.',
    responsibilities: 'Assist with social media management, create marketing content, conduct market research, support campaign execution, and analyze marketing metrics.',
    applicationDeadline: '2025-02-12T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-08T15:45:00.000Z'
  },
  {
    id: '9',
    title: 'QA Engineer',
    companyName: 'Quality First Tech',
    companyLogo:"https://img-cdn.publive.online/fit-in/1200x675/afaqs/media/post_attachments/2464727cf8c9a2f1686ab5656f3a1fe612e88887985928ac19cd07d4144ea3ad.png",
    location: 'Onsite',
    jobType: 'Part-time',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'We need a detail-oriented QA Engineer to ensure the quality of our software products. You\'ll design test cases, perform manual and automated testing, and work closely with development teams.',
    requirements: '2+ years of QA experience. Knowledge of testing methodologies and tools. Experience with automated testing frameworks. Strong attention to detail and analytical skills.',
    responsibilities: 'Design and execute test plans, perform manual and automated testing, report and track bugs, collaborate with developers on issue resolution, and maintain test documentation.',
    applicationDeadline: '2025-02-18T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-09T12:00:00.000Z'
  },
  {
    id: '10',
    title: 'Mobile App Developer',
    companyLogo:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: 'MobileFirst Solutions',
    location: 'Onsite',
    jobType: 'Contract',
    salaryRange: '12 LPA',
    experience: '1-3 yr Exp',
    description: 'Looking for a Mobile App Developer to build cross-platform mobile applications. You\'ll work with React Native and native iOS/Android development.',
    requirements: 'Experience with React Native, iOS (Swift), or Android (Kotlin) development. Understanding of mobile app architecture and design patterns. Experience with app store deployment processes.',
    responsibilities: 'Develop mobile applications, optimize app performance, implement new features, collaborate with design team, and ensure apps meet platform guidelines.',
    applicationDeadline: '2025-03-10T00:00:00.000Z',
    createdAt: '2025-09-23T10:00:00.000Z',
    updatedAt: '2025-01-10T10:30:00.000Z'
  }
]

// In-memory storage for new jobs (simulating database)
let jobIdCounter = 11
export const jobStorage = [...staticJobs]

export function getAllJobs(): Job[] {
  return jobStorage
}

export function getJobById(id: string): Job | undefined {
  return jobStorage.find(job => job.id === id)
}

export function createJob(jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>): Job {
  const newJob: Job = {
    ...jobData,
    id: jobIdCounter.toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  jobIdCounter++
  jobStorage.push(newJob)
  return newJob
}

export function updateJob(id: string, jobData: Partial<Omit<Job, 'id' | 'createdAt'>>): Job | null {
  const jobIndex = jobStorage.findIndex(job => job.id === id)
  if (jobIndex === -1) return null
  
  jobStorage[jobIndex] = {
    ...jobStorage[jobIndex],
    ...jobData,
    updatedAt: new Date().toISOString()
  }
  return jobStorage[jobIndex]
}

export function deleteJob(id: string): boolean {
  const jobIndex = jobStorage.findIndex(job => job.id === id)
  if (jobIndex === -1) return false
  
  jobStorage.splice(jobIndex, 1)
  return true
}

export function getJobCount(): number {
  return jobStorage.length
}