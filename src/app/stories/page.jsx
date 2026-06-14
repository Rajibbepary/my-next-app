
import StoryCard from '@/components/StoryCard';
import Title from '@/components/Title';
import React from 'react';

const stories = () => {

   
 const devstory = [
  {
    "id": 1,
    "name": "Ariana Brooks",
    "designation": "Frontend Developer",
    "company": "TechNova Solutions",
    "experience": "2 Years",
    "image": "https://randomuser.me/api/portraits/women/11.jpg",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "story": "Built responsive websites for startups.",
    "about": "Passionate frontend developer."
  },
  {
    "id": 2,
    "name": "Ethan Carter",
    "designation": "UI/UX Designer",
    "company": "Creative Pixels",
    "experience": "4 Years",
    "image": "https://randomuser.me/api/portraits/men/12.jpg",
    "skills": ["Figma", "Adobe XD", "Photoshop"],
    "story": "Designed user-friendly interfaces.",
    "about": "Creative and detail-oriented designer."
  },
  {
    "id": 3,
    "name": "Sophia Turner",
    "designation": "Backend Developer",
    "company": "CodeCraft Ltd.",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/women/13.jpg",
    "skills": ["Node.js", "MongoDB", "Express.js"],
    "story": "Developed scalable backend systems.",
    "about": "API and database expert."
  },
  {
    "id": 4,
    "name": "Liam Walker",
    "designation": "Full Stack Developer",
    "company": "Digital Horizon",
    "experience": "6 Years",
    "image": "https://randomuser.me/api/portraits/men/14.jpg",
    "skills": ["React", "Next.js", "Node.js"],
    "story": "Built SaaS products from scratch.",
    "about": "Full stack problem solver."
  },
  {
    "id": 5,
    "name": "Olivia Bennett",
    "designation": "DevOps Engineer",
    "company": "CloudSync Technologies",
    "experience": "4 Years",
    "image": "https://randomuser.me/api/portraits/women/15.jpg",
    "skills": ["Docker", "AWS", "Kubernetes"],
    "story": "Automated deployment pipelines.",
    "about": "Cloud infrastructure specialist."
  },
  {
    "id": 6,
    "name": "Noah Mitchell",
    "designation": "Software Engineer",
    "company": "NextGen Systems",
    "experience": "3 Years",
    "image": "https://randomuser.me/api/portraits/men/16.jpg",
    "skills": ["Java", "Spring Boot", "MySQL"],
    "story": "Built enterprise software solutions.",
    "about": "Passionate software engineer."
  },
  {
    "id": 7,
    "name": "Emma Richardson",
    "designation": "Mobile App Developer",
    "company": "AppVerse Studio",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/women/17.jpg",
    "skills": ["Flutter", "Firebase", "Dart"],
    "story": "Published successful mobile apps.",
    "about": "Cross-platform app specialist."
  },
  {
    "id": 8,
    "name": "James Foster",
    "designation": "Data Analyst",
    "company": "Insight Analytics",
    "experience": "3 Years",
    "image": "https://randomuser.me/api/portraits/men/18.jpg",
    "skills": ["Python", "SQL", "Power BI"],
    "story": "Created business intelligence dashboards.",
    "about": "Data-driven decision maker."
  },
  {
    "id": 9,
    "name": "Charlotte Hayes",
    "designation": "Cybersecurity Specialist",
    "company": "SecureNet Solutions",
    "experience": "7 Years",
    "image": "https://randomuser.me/api/portraits/women/19.jpg",
    "skills": ["Network Security", "Linux", "SIEM"],
    "story": "Protected enterprise infrastructures.",
    "about": "Cybersecurity expert."
  },
  {
    "id": 10,
    "name": "Benjamin Cooper",
    "designation": "Project Manager",
    "company": "InnovateX",
    "experience": "8 Years",
    "image": "https://randomuser.me/api/portraits/men/20.jpg",
    "skills": ["Agile", "Scrum", "Leadership"],
    "story": "Led high-performing software teams.",
    "about": "Results-oriented project leader."
  },
  {
    "id": 11,
    "name": "Mia Parker",
    "designation": "Frontend Developer",
    "company": "PixelWorks",
    "experience": "2 Years",
    "image": "https://randomuser.me/api/portraits/women/21.jpg",
    "skills": ["React", "CSS", "TypeScript"],
    "story": "Built modern web interfaces.",
    "about": "Frontend enthusiast."
  },
  {
    "id": 12,
    "name": "Lucas Evans",
    "designation": "Backend Engineer",
    "company": "ServerStack",
    "experience": "6 Years",
    "image": "https://randomuser.me/api/portraits/men/22.jpg",
    "skills": ["Node.js", "PostgreSQL", "Redis"],
    "story": "Designed microservices architecture.",
    "about": "Backend scalability expert."
  },
  {
    "id": 13,
    "name": "Amelia Scott",
    "designation": "Product Designer",
    "company": "DesignLab",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/women/23.jpg",
    "skills": ["Figma", "UX Research", "Wireframing"],
    "story": "Improved user engagement through design.",
    "about": "User-focused designer."
  },
  {
    "id": 14,
    "name": "Henry Adams",
    "designation": "QA Engineer",
    "company": "QualitySoft",
    "experience": "4 Years",
    "image": "https://randomuser.me/api/portraits/men/24.jpg",
    "skills": ["Selenium", "Cypress", "Testing"],
    "story": "Ensured software reliability.",
    "about": "Automation testing specialist."
  },
  {
    "id": 15,
    "name": "Grace Collins",
    "designation": "Machine Learning Engineer",
    "company": "AI Nexus",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/women/25.jpg",
    "skills": ["Python", "TensorFlow", "PyTorch"],
    "story": "Built predictive AI models.",
    "about": "AI and ML enthusiast."
  },
  {
    "id": 16,
    "name": "Daniel Reed",
    "designation": "Cloud Engineer",
    "company": "SkyCloud",
    "experience": "6 Years",
    "image": "https://randomuser.me/api/portraits/men/26.jpg",
    "skills": ["AWS", "Terraform", "Linux"],
    "story": "Managed cloud infrastructure.",
    "about": "Cloud-native solutions expert."
  },
  {
    "id": 17,
    "name": "Ella Morgan",
    "designation": "Technical Writer",
    "company": "DocsHub",
    "experience": "3 Years",
    "image": "https://randomuser.me/api/portraits/women/27.jpg",
    "skills": ["Documentation", "Markdown", "API Docs"],
    "story": "Created developer-friendly guides.",
    "about": "Technical communication specialist."
  },
  {
    "id": 18,
    "name": "Michael Ward",
    "designation": "Database Administrator",
    "company": "DataCore",
    "experience": "7 Years",
    "image": "https://randomuser.me/api/portraits/men/28.jpg",
    "skills": ["MySQL", "PostgreSQL", "Performance Tuning"],
    "story": "Optimized database performance.",
    "about": "Database expert."
  },
  {
    "id": 19,
    "name": "Harper Lewis",
    "designation": "Frontend Developer",
    "company": "BrightWeb",
    "experience": "3 Years",
    "image": "https://randomuser.me/api/portraits/women/29.jpg",
    "skills": ["React", "Next.js", "Tailwind CSS"],
    "story": "Developed SEO-friendly websites.",
    "about": "Frontend and UI specialist."
  },
  {
    "id": 20,
    "name": "Jack Turner",
    "designation": "Systems Engineer",
    "company": "TechBridge",
    "experience": "8 Years",
    "image": "https://randomuser.me/api/portraits/men/30.jpg",
    "skills": ["Linux", "Networking", "Automation"],
    "story": "Maintained enterprise systems.",
    "about": "Infrastructure expert."
  },
  {
    "id": 21,
    "name": "Lily Hall",
    "designation": "React Developer",
    "company": "CodeWave",
    "experience": "4 Years",
    "image": "https://randomuser.me/api/portraits/women/31.jpg",
    "skills": ["React", "Redux", "TypeScript"],
    "story": "Built complex web applications.",
    "about": "React specialist."
  },
  {
    "id": 22,
    "name": "Owen Young",
    "designation": "Security Engineer",
    "company": "CyberWall",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "skills": ["Security Audits", "Pen Testing", "Linux"],
    "story": "Secured enterprise networks.",
    "about": "Information security professional."
  },
  {
    "id": 23,
    "name": "Zoe Brooks",
    "designation": "Business Analyst",
    "company": "InsightPro",
    "experience": "4 Years",
    "image": "https://randomuser.me/api/portraits/women/33.jpg",
    "skills": ["Analysis", "Reporting", "Agile"],
    "story": "Bridged business and technology.",
    "about": "Strategic business analyst."
  },
  {
    "id": 24,
    "name": "William Green",
    "designation": "Software Architect",
    "company": "ArchTech",
    "experience": "10 Years",
    "image": "https://randomuser.me/api/portraits/men/34.jpg",
    "skills": ["Architecture", "Java", "Cloud"],
    "story": "Designed enterprise-scale systems.",
    "about": "Software architecture expert."
  },
  {
    "id": 25,
    "name": "Chloe King",
    "designation": "UI Designer",
    "company": "VisionStudio",
    "experience": "3 Years",
    "image": "https://randomuser.me/api/portraits/women/35.jpg",
    "skills": ["Figma", "Illustrator", "Design Systems"],
    "story": "Crafted elegant user interfaces.",
    "about": "Creative UI designer."
  },
  {
    "id": 26,
    "name": "David Phillips",
    "designation": "Full Stack Developer",
    "company": "DevSphere",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/men/36.jpg",
    "skills": ["MERN", "Next.js", "MongoDB"],
    "story": "Built scalable web platforms.",
    "about": "Experienced full stack engineer."
  },
  {
    "id": 27,
    "name": "Victoria Price",
    "designation": "AI Engineer",
    "company": "FutureAI",
    "experience": "6 Years",
    "image": "https://randomuser.me/api/portraits/women/37.jpg",
    "skills": ["Python", "LLMs", "Deep Learning"],
    "story": "Developed AI-powered solutions.",
    "about": "Artificial intelligence specialist."
  },
  {
    "id": 28,
    "name": "Joseph Ross",
    "designation": "DevOps Engineer",
    "company": "CloudEdge",
    "experience": "7 Years",
    "image": "https://randomuser.me/api/portraits/men/38.jpg",
    "skills": ["Docker", "CI/CD", "AWS"],
    "story": "Streamlined software delivery.",
    "about": "DevOps and automation expert."
  },
  {
    "id": 29,
    "name": "Natalie Bell",
    "designation": "Data Scientist",
    "company": "DataMind",
    "experience": "5 Years",
    "image": "https://randomuser.me/api/portraits/women/39.jpg",
    "skills": ["Python", "Machine Learning", "Statistics"],
    "story": "Built predictive analytics models.",
    "about": "Data science professional."
  },
  {
    "id": 30,
    "name": "Christopher Cook",
    "designation": "Engineering Manager",
    "company": "ScaleTech",
    "experience": "9 Years",
    "image": "https://randomuser.me/api/portraits/men/40.jpg",
    "skills": ["Leadership", "Agile", "System Design"],
    "story": "Managed engineering teams and products.",
    "about": "Engineering leader focused on growth."
  }
]
 

    return (
        <div>
            <Title>Explore developer story</Title>
           <div className='grid grid-cols-4 gap-8'>
             {
                devstory.map((story) => (<StoryCard key={story.id} story={story}> </StoryCard>
                
                )) }
           </div>
        </div>
    );
};

export default stories;