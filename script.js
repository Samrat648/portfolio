/* ==========================================
   EASY PLACEHOLDERS (EDIT THESE FIRST)
   ========================================== */
const SITE_CONFIG = {
  trainingInstitute: "Ardent Computech Pvt. Ltd.",
  trainerName: "SK SAHIL",
  trainerRole: "Full Stack AI Developer",
  collegeName: "GNIT Kolkata",
  department: "ECE Engineering",
  year: "2nd Year",
  trainingDuration: "10 Days",
  mcqsPracticed: 60,
  toolsExplored: 13,

  heroTitle: "Samrat Portfolio",
  heroBadge: "10 Days AI/ML Training Completed",
  heroSubtitle: "GNIT Kolkata | 2nd Year ECE | Ardent Computech Pvt. Ltd.",

  aboutPrimary:
    "We are 2nd year ECE Engineering students from GNIT, Kolkata, who completed an intensive 10-day AI/ML training program at Ardent Computech Pvt. Ltd. with a strong focus on practical implementation.",
  aboutSecondary:
    "Across the training journey, we moved from fundamentals to guided project execution, practiced 60 MCQs, explored essential tools, and built confidence to pursue AI-focused careers with a portfolio-first mindset.",

  trainerLine:
    "Mentored students through AI, Machine Learning, and full-stack project workflows with a practical, industry-oriented approach focused on clarity, consistency, and real implementation.",

  footerSocialLinks: [
    {
      label: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/"
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/"
    },
    {
      label: "Training Institute",
      icon: "fa-solid fa-building",
      url: "https://ardentcollaborations.com/"
    }
  ]
};

/* ==========================================
   ✅ UPDATED STUDENTS (4 MEMBERS)
   ========================================== */
const STUDENTS = [
  {
    name: "Samrat Sinha",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Focused on practical Python workflows and AI/ML project development.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  },
  {
    name: "Souhardya Bose",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Interested in data analysis, automation, and real-world AI applications.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  },
  {
    name: "Sudipto Mondal",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Focused on machine learning and computer vision systems.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  },
  {
    name: "Tirtharaj Bhattacharya",
    image: "",
    department: "ECE",
    year: "2nd Year",
    bio: "Exploring ML models, data science, and applied AI solutions.",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "https://drive.google.com/"
  }
];

/* ==========================================
   Reusable Data Models (UNCHANGED)
   ========================================== */
const JOURNEY_POINTS = [
  "Students are from GNIT, Kolkata and currently in 2nd Year ECE Engineering.",
  "Completed 10 days of AI/ML training at Ardent Computech Pvt. Ltd.",
  "Built beginner-to-intermediate projects using Python, data analysis, and model basics.",
  "Practiced 60 MCQs for concept reinforcement and technical confidence.",
  "Trained by SK SAHIL (Full Stack AI Developer) through project-based learning.",
  "Future interests include Data Science, Machine Learning, Agentic AI, Automation, and AI Engineering."
];

const SKILLS = [
  { name: "Python 3", note: "Core programming foundation", icon: "fa-brands fa-python" },
  { name: "Pandas", note: "Data cleaning and analysis", icon: "fa-solid fa-table" },
  { name: "NumPy", note: "Numerical computing", icon: "fa-solid fa-superscript" },
  { name: "OpenCV", note: "Image and vision workflows", icon: "fa-solid fa-camera" },
  { name: "Matplotlib", note: "Visual plotting basics", icon: "fa-solid fa-chart-line" },
  { name: "Keras", note: "Neural network APIs", icon: "fa-solid fa-network-wired" },
  { name: "TensorFlow", note: "Model development ecosystem", icon: "fa-solid fa-brain" },
  { name: "Seaborn", note: "Statistical visualization", icon: "fa-solid fa-chart-column" },
  { name: "Scikit-learn", note: "Classical ML toolkit", icon: "fa-solid fa-robot" },
  { name: "Linux", note: "Command-line development", icon: "fa-brands fa-linux" },
  { name: "Git", note: "Version control discipline", icon: "fa-solid fa-code-branch" },
  { name: "GitHub", note: "Portfolio and collaboration", icon: "fa-brands fa-github" },
  { name: "Google Colab", note: "Cloud notebooks for ML", icon: "fa-solid fa-cloud" }
];

const STATS = [
  { label: "Days Training", value: 10, suffix: "", icon: "fa-solid fa-calendar-days" },
  { label: "Projects Built", value: 9, suffix: "", icon: "fa-solid fa-diagram-project" },
  { label: "MCQs Practiced", value: 60, suffix: "", icon: "fa-solid fa-list-check" },
  { label: "Tools Explored", value: 13, suffix: "+", icon: "fa-solid fa-toolbox" }
];

/* ==========================================
   PROJECTS (UPDATED INDEX SAFE)
   ========================================== */
const PROJECTS = [
  {
    id: 1,
    title: "Student Intro Generator",
    icon: "fa-solid fa-id-card",
    description: "Generate professional student intros using Python.",
    tags: ["Python"],
    github: STUDENTS[0].github
  },
  {
    id: 2,
    title: "Smart Grade Calculator",
    icon: "fa-solid fa-graduation-cap",
    description: "Calculate marks and grades efficiently.",
    tags: ["Python"],
    github: STUDENTS[1].github
  },
  {
    id: 3,
    title: "Simple Calculator",
    icon: "fa-solid fa-calculator",
    description: "Basic calculator using Python logic.",
    tags: ["Python"],
    github: STUDENTS[2].github
  },
  {
    id: 4,
    title: "Contact Book",
    icon: "fa-solid fa-address-book",
    description: "CRUD contact system.",
    tags: ["Python"],
    github: STUDENTS[3].github
  }
];

/* ==========================================
   (REST CODE SAME — RENDER + LOGIC)
   ========================================== */

const $ = (s, sc = document) => sc.querySelector(s);
const $$ = (s, sc = document) => [...sc.querySelectorAll(s)];

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

function applyConfigText() {
  $("#heroTitle").textContent = SITE_CONFIG.heroTitle;
  $("#heroBadgeText").textContent = SITE_CONFIG.heroBadge;
  $("#heroSubtitle").textContent = SITE_CONFIG.heroSubtitle;
  $("#studentNamesLine").textContent = STUDENTS.map(s => s.name).join(", ");
}

function renderStudents() {
  const c = $("#studentsGrid");
  c.innerHTML = STUDENTS.map(s => `
    <article class="student-card">
      <div class="student-photo">${getInitials(s.name)}</div>
      <h3>${s.name}</h3>
      <p>${s.bio}</p>
    </article>
  `).join("");
}

function initApp() {
  applyConfigText();
  renderStudents();
}

document.addEventListener("DOMContentLoaded", initApp);
