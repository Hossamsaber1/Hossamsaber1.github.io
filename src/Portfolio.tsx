import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const profile = {
  name: 'Hossam Saber Youssef',
  title: 'DevOps | Cloud | Platform Engineer',
  email: 'hossamsaberyouseef@gmail.com',
  phone: '+201016025450',
  location: '6th of October City, Egypt',
  github: 'https://github.com/Hossamsaber1',
  linkedin: 'https://www.linkedin.com/in/hossam-saber11/',
  cv: '/assets/Hossam-Saber-CV.pdf',
  image: '/1000352153.png'
}

const skills = ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Ansible', 'GitHub', 'OpenShift', 'Prism Pipeline']

const featuredProject = {
  title: 'Cloud Native DevOps Platform',
  desc: 'Production-style DevOps platform integrating Docker, Kubernetes, Jenkins, Terraform, AWS, monitoring, and infrastructure automation.',
  tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  github: 'https://github.com/Hossamsaber1/CloudDevOpsProject'
}

const projects = [
  {
    title: 'Kubernetes Cluster Deployment',
    desc: 'Kubeadm cluster setup with services, ConfigMaps, taints, and Calico networking.',
    tags: ['Kubernetes', 'Linux', 'Calico'],
    github: 'https://github.com/Hossamsaber1/kubernetes-cluster-kubeadm'
  },
  {
    title: 'Jenkins CI/CD Pipeline',
    desc: 'Automated CI/CD pipeline using Jenkins, Docker, and GitHub integration.',
    tags: ['Jenkins', 'CI/CD', 'Docker'],
    github: 'https://github.com/Hossamsaber1/DevOps-CICD'
  },
  {
    title: 'Dockerized Multi-Service App',
    desc: 'Docker Compose app with networking, persistent volumes, and service isolation.',
    tags: ['Docker', 'Compose', 'MySQL'],
    github: 'https://github.com/Hossamsaber1/ivolve-devops-practice'
  },
  {
    title: 'Prism Pipeline Automation',
    desc: 'Prism Pipeline customization and automation for VFX production workflows.',
    tags: ['Prism', 'Python', 'Nuke'],
    github: 'https://github.com/Hossamsaber1/Dev-prism-pipeline'
  }
]

const experiences = [
  {
    company: 'Pinnacle Visions',
    role: 'Visualization & Render Systems Engineer',
    period: 'Aug 2025 - Present',
    highlights: [
      'Deployed centralized ComfyUI Server infrastructure for AI workflows.',
      'Optimized Deadline render farm performance and automation.',
      'Automated Prism Pipeline and Kitsu workflows.'
    ]
  },
  {
    company: 'Gemini Studio',
    role: 'IT Network & Systems Engineer',
    period: 'Mar 2025 - Jul 2025',
    highlights: [
      'Managed Sophos firewalls and secure infrastructure.',
      'Administered VMware ESXi, QNAP, and TrueNAS systems.',
      'Optimized render farm operations and storage infrastructure.'
    ]
  },
  {
    company: 'Gemini Studio',
    role: 'IT Technical Support Engineer',
    period: 'Jun 2024 - Feb 2025',
    highlights: [
      'Supported VFX and 3D production software environments.',
      'Configured virtualization and remote desktop systems.',
      'Resolved infrastructure and networking issues.'
    ]
  }
]

const trainingPrograms = [
  {
    title: 'Cloud DevOps Trainee - National Telecommunication Institute (NTI)',
    period: 'Jan 2026 - Apr 2026',
    topics: ['RHCSA Admin I & II', 'Docker & Kubernetes', 'Terraform & Ansible', 'AWS Cloud & Security', 'Git & GitHub', 'CI/CD with GitLab']
  },
  {
    title: 'Cyber Security Track - Information Technology Institute (ITI)',
    period: 'Aug 2024 - Sep 2024',
    topics: ['Network Fundamentals', 'Cyber Security Essentials', 'Ethical Hacking', 'FortiGate NSE4', 'Palo Alto Firewalls']
  }
]

const courses = [
  'AWS Solutions Architect',
  'Docker & Kubernetes',
  'Terraform Infrastructure as Code',
  'Ansible Automation',
  'Git & GitHub',
  'OpenShift Administration',
  'Linux Administration RHCSA',
  'MCSA',
  'CCNA',
  'Cyber Security & Ethical Hacking'
]

const stackGroups = [
  { title: 'Cloud & Containers', items: ['AWS', 'Docker', 'Kubernetes', 'OpenShift'] },
  { title: 'CI/CD & Automation', items: ['Jenkins', 'GitHub', 'Terraform', 'Ansible'] },
  { title: 'Systems & Pipeline', items: ['Linux', 'VMware', 'Proxmox', 'Prism Pipeline'] }
]

const pipelineSteps = ['Code', 'Build', 'Test', 'Image', 'Deploy', 'Monitor']
const logLines = ['Jenkins Build Success', 'Docker Image Pushed', 'Terraform Apply Complete', 'Monitoring Checks Passed']
const certificationsDriveUrl = 'https://drive.google.com/drive/folders/1fK9tp6-NMe_MmWN-JKN8dzfeGlAoj4zN?usp=drive_link'

const assistantReplies: Record<string, string> = {
  experience: 'DevOps, cloud infrastructure, VFX pipeline automation, Deadline render farm optimization, and AI infrastructure.',
  skills: 'Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible, AWS, GitHub, VMware, Proxmox, and Prism Pipeline.',
  projects: 'Cloud DevOps platform, Kubernetes cluster, Jenkins CI/CD, Docker Compose apps, and Prism Pipeline automation.',
  contact: 'Use GitHub, LinkedIn, email, or phone from the contact section.'
}

console.assert(projects.length >= 4, 'Portfolio should include at least 4 secondary projects.')
console.assert(experiences.length === 3, 'Portfolio should include 3 work experiences.')
console.assert(trainingPrograms.length === 2, 'Portfolio should include 2 training programs.')
console.assert(skills.length >= 8, 'Portfolio should include core technical skills.')
console.assert(Boolean(profile.github && profile.linkedin && profile.email), 'Profile contact links should exist.')
console.assert(pipelineSteps.length === 6, 'Pipeline should include 6 steps.')
console.assert(featuredProject.tags.length >= 4, 'Featured project should include key technologies.')

type IconProps = {
  type: string
  size?: number
}

function Icon({ type, size = 20 }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': 'true'
  }

  if (type === 'github') {
    return (
      <svg {...commonProps} fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.25-.01-1.08-.01-1.96-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.85c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.18.61.69.5A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...commonProps} fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v14H.36V8ZM8.17 8h4.1v1.92h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V22h-4.27v-6.88c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63V22H8.17V8Z" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.78 19.78 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    )
  }

  if (type === 'copy') {
    return (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    )
  }

  return (
    <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}

type SectionHeaderProps = {
  title: string
  subtitle?: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{title}</h2>
      {subtitle ? <p className="text-sm text-gray-400 leading-6 max-w-2xl">{subtitle}</p> : null}
    </div>
  )
}

type CardProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

function Card({ children, className = '', id }: CardProps) {
  return (
    <div id={id} className={`bg-[#0b1120] border border-cyan-900/20 rounded-2xl ${className}`}>
      {children}
    </div>
  )
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <Card className="p-5 text-center">
      <h3 className="text-3xl font-bold text-cyan-400 mb-1">{value}</h3>
      <p className="text-xs md:text-sm text-gray-400">{label}</p>
    </Card>
  )
}

export default function Portfolio() {
  const [theme, setTheme] = useState('cyber')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [assistantQuestion, setAssistantQuestion] = useState('experience')
  const [githubStats, setGithubStats] = useState({ public_repos: '50+', followers: '-', following: '-' })

  useEffect(() => {
    let isMounted = true

    fetch('https://api.github.com/users/Hossamsaber1')
      .then((response) => response.json())
      .then((data) => {
        if (!isMounted || !data) return
        setGithubStats({
          public_repos: data.public_repos ?? '50+',
          followers: data.followers ?? '-',
          following: data.following ?? '-'
        })
      })
      .catch(() => {
        if (isMounted) {
          setGithubStats({ public_repos: '50+', followers: '-', following: '-' })
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const themeClass = useMemo(() => {
    if (theme === 'matrix') return 'bg-[#020a05]'
    if (theme === 'glass') return 'bg-[#07111f]'
    return 'bg-[#050816]'
  }, [theme])

  const copyEmail = async () => {
    if (navigator?.clipboard) {
      await navigator.clipboard.writeText(profile.email)
    }
  }

  return (
    <div className={`min-h-screen ${themeClass} text-white overflow-hidden font-sans relative transition-colors duration-500`}>
      <div className="fixed inset-0 -z-10 opacity-25 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-cyan-500/20 blur-[110px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/20 blur-[110px] rounded-full"></div>
      </div>

      <nav className="border-b border-cyan-900/30 backdrop-blur-md sticky top-0 z-50 bg-[#050816]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black text-cyan-400">HS</div>
            <div>
              <h1 className="text-base md:text-lg font-bold">{profile.name}</h1>
              <p className="text-xs text-gray-400">DevOps Engineer</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="capitalize hover:text-cyan-400 transition">{item}</a>
            ))}
            <select value={theme} onChange={(event) => setTheme(event.target.value)} className="bg-[#0b1120] border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-300 outline-none" aria-label="Theme switcher">
              <option value="cyber">Cyber</option>
              <option value="matrix">Matrix</option>
              <option value="glass">Glass</option>
            </select>
          </div>
        </div>
      </nav>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} id="home" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <p className="text-cyan-400 text-sm mb-3">Hi, I am</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">{profile.name}</h1>
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-5">{profile.title}</h2>
          <p className="text-gray-400 text-sm md:text-base leading-7 mb-7 max-w-xl">Building scalable DevOps infrastructure, CI/CD pipelines, Kubernetes platforms, and cloud automation systems.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold">View Projects</a>
            <a href={profile.cv} className="px-5 py-3 rounded-xl border border-cyan-500/40 hover:border-cyan-400 transition text-white">Download CV</a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500/30"></div>
            <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.45)] bg-[#0b1120] flex items-center justify-center">
              <img src={profile.image} alt={`${profile.name} profile`} className="w-full h-full object-cover" />
            </div>
            <div className="mt-5 text-center">
              <span className="inline-flex items-center gap-2 bg-[#0f172a] border border-cyan-500/30 px-4 py-2 rounded-full text-green-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Available For Work
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
          <Card className="p-6">
            <SectionHeader title="About Me" />
            <p className="text-sm md:text-base text-gray-400 leading-7 mb-4">DevOps Engineer focused on scalable infrastructure, Kubernetes platforms, automation, and CI/CD systems.</p>
            <p className="text-sm md:text-base text-gray-400 leading-7">Experienced across cloud platforms, container orchestration, infrastructure automation, virtualization, and VFX production environments.</p>
          </Card>

          <Card className="p-6" id="skills">
            <SectionHeader title="Core Skills" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-2 rounded-lg bg-[#111827] border border-cyan-500/20 text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 items-stretch">
          <Card className="p-6 relative overflow-hidden">
            <SectionHeader title="Core DevOps Stack" subtitle="Tools I use across cloud, containers, automation, and delivery workflows." />
            <div className="grid grid-cols-2 gap-3">
              {stackGroups.map((group) => (
                <div key={group.title} className="bg-[#111827] border border-cyan-500/10 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-cyan-300 mb-3">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs px-2 py-1 rounded-md bg-[#0b1120] text-gray-300 border border-cyan-500/10">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 overflow-hidden">
            <SectionHeader title="CI/CD Delivery Workflow" subtitle="Simple automated lifecycle from source control to monitoring." />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {pipelineSteps.map((step, index) => (
                <motion.div key={step} whileHover={{ y: -3 }} className="relative bg-[#111827] border border-cyan-500/20 rounded-xl p-3 text-center">
                  <div className="mx-auto mb-2 w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-xs font-bold">{index + 1}</div>
                  <p className="font-semibold text-white text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-black/30 border border-cyan-500/20 p-4 font-mono text-xs text-green-300 h-28 overflow-hidden">
              <motion.div animate={{ y: ['0%', '-35%'] }} transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }} className="space-y-2">
                {[...logLines, ...logLines].map((line, index) => <p key={`${line}-${index}`}>[INFO] {line}</p>)}
              </motion.div>
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Card className="p-6">
          <SectionHeader title="Work Experience" subtitle="Professional roles across DevOps, infrastructure, and VFX pipeline systems." />
          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div key={`${exp.company}-${exp.role}`} whileHover={{ y: -3 }} className="bg-[#111827] border border-cyan-500/10 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-gray-300">{exp.period}</span>
                </div>
                <div className="space-y-2">
                  {exp.highlights.map((item) => (
                    <p key={item} className="text-sm text-gray-400 leading-6">- {item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={githubStats.public_repos} label="GitHub Repos" />
          <StatCard value={githubStats.followers} label="Followers" />
          <StatCard value="7+" label="Projects" />
          <StatCard value="24/7" label="Automation" />
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <SectionHeader title="Infrastructure & Automation Projects" />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm">View All Projects <Icon type="external" size={14} /></a>
        </div>

        <div className="mb-8">
          <motion.div whileHover={{ y: -4 }} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-7 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="relative z-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold mb-4">FEATURED PROJECT</span>
                <h3 className="text-3xl font-black mb-4">{featuredProject.title}</h3>
                <p className="text-gray-300 leading-7 mb-5 max-w-2xl">{featuredProject.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-[#0b1120] border border-cyan-500/20 text-sm text-cyan-300">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedProject(featuredProject)} className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">Project Details</button>
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition">GitHub Repository</a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['CI/CD', 'IaC', 'K8s', 'AWS'].map((item) => (
                  <div key={item} className="bg-[#0b1120] border border-cyan-500/10 rounded-xl p-5">
                    <p className="text-2xl font-black text-cyan-400 mb-2">{item}</p>
                    <p className="text-sm text-gray-400">Production workflow</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <motion.div whileHover={{ y: -5 }} key={project.title} className="bg-[#0b1120] border border-cyan-900/20 rounded-2xl p-5 hover:border-cyan-400/40 transition duration-300">
              <h3 className="text-lg font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-6 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag) => <span key={tag} className="px-2 py-1 rounded-md bg-[#111827] border border-cyan-500/20 text-xs text-gray-300">{tag}</span>)}</div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setSelectedProject(project)} className="py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black text-sm font-semibold transition">Details</button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block text-center py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black text-sm font-semibold transition">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-5">
          <Card className="p-6">
            <SectionHeader title="Training Programs" />
            <div className="space-y-4">
              {trainingPrograms.map((training) => (
                <div key={training.title} className="bg-[#111827] border border-cyan-500/10 rounded-xl p-4">
                  <div className="flex flex-wrap justify-between gap-3 mb-3">
                    <h3 className="text-base font-bold text-white max-w-xl">{training.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-gray-300 h-fit">{training.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {training.topics.map((topic) => <span key={topic} className="px-2 py-1 rounded-md bg-[#0b1120] border border-cyan-500/20 text-xs text-gray-300">{topic}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeader title="Courses & Learning" />
            <div className="grid sm:grid-cols-2 gap-2">
              {courses.map((course) => (
                <div key={course} className="bg-[#111827] border border-cyan-500/10 rounded-lg p-3">
                  <p className="text-sm text-gray-300 leading-6">- {course}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Card className="p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-3">Certifications</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl mx-auto">Verified certifications and training achievements are available in my Google Drive folder.</p>
          <a href={certificationsDriveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black text-sm font-semibold transition">Open Certificates Drive</a>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Card className="p-6">
          <SectionHeader title="Resume AI Assistant" subtitle="Quick answers based on Hossam resume and portfolio data." />
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(assistantReplies).map((key) => (
                <button key={key} onClick={() => setAssistantQuestion(key)} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${assistantQuestion === key ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-[#111827] text-gray-300 border-cyan-500/10 hover:border-cyan-400/30'}`}>Ask about {key}</button>
              ))}
            </div>
            <div className="bg-black/30 border border-cyan-500/20 rounded-xl p-5 min-h-[150px]">
              <p className="text-cyan-300 font-mono text-xs mb-3">assistant@portfolio: answer</p>
              <p className="text-gray-300 leading-7 text-sm md:text-base">{assistantReplies[assistantQuestion]}</p>
            </div>
          </div>
        </Card>
      </section>

      {selectedProject ? (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl w-full bg-[#0b1120] border border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-start justify-between gap-6 mb-5">
              <div><h3 className="text-2xl font-bold text-cyan-400 mb-2">{selectedProject.title}</h3><p className="text-sm text-gray-400 leading-6">{selectedProject.desc}</p></div>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white text-2xl">x</button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-[#111827] rounded-xl p-4 border border-cyan-500/10"><p className="text-cyan-300 font-bold mb-2 text-sm">Problem</p><p className="text-xs text-gray-400">Manual infrastructure workflows.</p></div>
              <div className="bg-[#111827] rounded-xl p-4 border border-cyan-500/10"><p className="text-cyan-300 font-bold mb-2 text-sm">Solution</p><p className="text-xs text-gray-400">Automation and DevOps practices.</p></div>
              <div className="bg-[#111827] rounded-xl p-4 border border-cyan-500/10"><p className="text-cyan-300 font-bold mb-2 text-sm">Result</p><p className="text-xs text-gray-400">Repeatable delivery and visibility.</p></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">{selectedProject.tags.map((tag) => <span key={tag} className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">{tag}</span>)}</div>
            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">Open Repository</a>
          </motion.div>
        </div>
      ) : null}

      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Contact Me</h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">Let us connect and build reliable DevOps infrastructure together.</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1120] border border-cyan-500/20 hover:border-cyan-400 transition"><Icon type="github" size={18} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1120] border border-cyan-500/20 hover:border-cyan-400 transition"><Icon type="linkedin" size={18} /> LinkedIn</a>
            <button onClick={copyEmail} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1120] border border-cyan-500/20 hover:border-cyan-400 transition"><Icon type="copy" size={18} /> Copy Email</button>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1120] border border-cyan-500/20 hover:border-cyan-400 transition"><Icon type="phone" size={18} /> Phone</a>
          </div>
          <p className="text-gray-500 mt-5 text-sm">{profile.location}</p>
        </div>
      </section>

      <footer className="border-t border-cyan-900/20 py-6 text-center text-gray-500 text-sm">
        © 2026 {profile.name} - Built with React and GitHub Pages
      </footer>
    </div>
  )
}
