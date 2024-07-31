// projectsData.js
import arcadiaImg from "../../Assets/Projects/blog.png";
import deepImg from "../../Assets/Projects/deep.png";
import asteroidDefenseImg from "../../Assets/Projects/asteroid-defense.png";
import notForzaImg from "../../Assets/Projects/not-forza.png";
import novusTechImg from "../../Assets/Projects/novus-tech.png";
import uasImg from "../../Assets/Projects/uas.png";

export const projectsData = [
  {
    imgPath: arcadiaImg,
    title: "Arcadia",
    date: "2024-05-02",
    description: "A game browsing website similar to Steam. Developed as part of a database systems project in a group of 3.",
    ghLink: "https://github.com/Vg34100/Arcadia",
    demoLink: "https://artemis.cs.csub.edu/~group3part2/Arcadia/index.php",
    technologies: ["php", "css", "javascript"],
    skillsUsed: ["Web Development", "Database Design", "UI/UX", "PHP", "MySQL"],
    teamSize: 3,
    thingsLearned: [
      "Database normalization and optimization",
      "PHP backend development",
      "Collaborative coding practices",
      "User authentication and session management"
    ],
    contributionPercentage: 33,
    skillsCorrelation: [
      { name: "Web Development", level: 80 },
      { name: "Database Management", level: 70 },
      { name: "Teamwork", level: 90 },
      { name: "PHP", level: 75 }
    ],
    moreInfoLink: "/projects/arcadia"
  },
  {
    imgPath: deepImg,
    title: "DEEP",
    date: "2023-12-02",
    description: "A roguelike pixel art game with automatic floor creation and enemy combat. Developed as part of a software engineering project in a group.",
    ghLink: "https://github.com/Vg34100/DEEP",
    technologies: ["cpp", "c"],
    skillsUsed: ["Game Development", "C++", "Procedural Generation", "AI Programming"],
    teamSize: 4,
    thingsLearned: [
      "Game architecture design",
      "Procedural content generation",
      "Basic AI implementation for enemies",
      "Version control with Git"
    ],
    contributionPercentage: 25,
    skillsCorrelation: [
      { name: "C++ Programming", level: 85 },
      { name: "Game Development", level: 70 },
      { name: "Algorithm Design", level: 75 },
      { name: "Software Engineering", level: 80 }
    ],
    moreInfoLink: "/projects/deep"
  },
  {
    imgPath: asteroidDefenseImg,
    title: "Asteroid Defense",
    date: "2021-09-02",
    description: "A 3D asteroid shooter game with ship customization, enemy combat, and resource management. Solo game design project.",
    videoLink: "https://youtu.be/hY5ugPITB0Q",
    technologies: ["unreal"],
    skillsUsed: ["3D Game Development", "Unreal Engine", "Blueprint Programming", "3D Modeling"],
    teamSize: 1,
    thingsLearned: [
      "Unreal Engine workflow",
      "3D game physics",
      "Performance optimization for games",
      "Game balancing and playtesting"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Unreal Engine", level: 90 },
      { name: "Game Design", level: 85 },
      { name: "3D Modeling", level: 70 },
      { name: "Project Management", level: 75 }
    ],
    moreInfoLink: "/projects/asteroid-defense"
  },
  {
    imgPath: notForzaImg,
    title: "Not Forza",
    date: "2021-12-02",
    description: "An open-world racing game with a rewind system, skill points system, and car customization, similar to Forza Horizon. Solo game design project.",
    videoLink: "https://youtu.be/hY5ugPITB0Q",
    technologies: ["unreal"],
    skillsUsed: ["Game Development", "Unreal Engine", "Vehicle Physics", "Open World Design"],
    teamSize: 1,
    thingsLearned: [
      "Advanced Unreal Engine features",
      "Vehicle physics simulation",
      "Large-scale world design",
      "Complex game systems implementation"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Unreal Engine", level: 95 },
      { name: "Game Design", level: 90 },
      { name: "Physics Programming", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ],
    moreInfoLink: "/projects/not-forza"
  },
  {
    imgPath: novusTechImg,
    title: "Novus Tech",
    date: "2022-05-02",
    description: "A Portal-inspired story game with unique weapon mechanics and intricate level design. Final cumulative solo game design project.",
    videoLink: "https://youtu.be/hY5ugPITB0Q",
    technologies: ["unreal"],
    skillsUsed: ["Game Development", "Unreal Engine", "Level Design", "Narrative Design"],
    teamSize: 1,
    thingsLearned: [
      "Advanced shader programming",
      "Complex game mechanics implementation",
      "Storytelling through level design",
      "Performance optimization for complex scenes"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Unreal Engine", level: 98 },
      { name: "Game Design", level: 95 },
      { name: "Level Design", level: 90 },
      { name: "Shader Programming", level: 85 }
    ],
    moreInfoLink: "/projects/novus-tech"
  },
  {
    imgPath: uasImg,
    title: "CSU Unmanned Aerial System",
    date: "2024-06-02",
    description: "Developed an object detection system for package delivery and implemented an automated flight system with waypoint navigation.",
    demoLink: "https://cs.csub.edu/~bthomas/2680/final/home.php",
    technologies: ["python"],
    skillsUsed: ["Computer Vision", "Machine Learning", "Drone Programming", "Python"],
    teamSize: 5,
    thingsLearned: [
      "Object detection algorithms",
      "Drone flight control systems",
      "Integration of ML models with hardware",
      "Real-time data processing and decision making"
    ],
    contributionPercentage: 20,
    skillsCorrelation: [
      { name: "Python Programming", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Embedded Systems", level: 75 }
    ],
    moreInfoLink: "/projects/uas"
  },
  {
    title: "CSUB",
    description: "Started attended California State University Bakersfield for Computer Science",
    date: "2022-08-02",
    technologies: ["cpp"],
  },
  {
    title: "CTEC",
    description: "Started attended the Career and Technical Education Center for Video Game Design",
    date: "2021-08-02",
    technologies: ["unreal"],
  },
  {
    title: "Student Assistant",
    description: "Became an Instructional Student Assistant at CSUB for Computer Architecture.",
    date: "2024-01-02",
  },
  {
    title: "FabLab Intern",
    description: "Became a FabLab Intern at CSUB.",
    date: "2024-04-02",
  }
];

export default projectsData;