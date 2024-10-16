// projectsData.js
import arcadiaImg from "../../Assets/Projects/blog.png";
import deepImg from "../../Assets/Projects/deep.png";
import asteroidDefenseImg from "../../Assets/Projects/asteroid-defense.png";
import notForzaImg from "../../Assets/Projects/not-forza.png";
import novusTechImg from "../../Assets/Projects/novus-tech.png";
import uasImg from "../../Assets/Projects/uas.png";

import sleepCycleImg from "../../Assets/Projects/sleep-cycle.png";
import structureVoidableImg from "../../Assets/Projects/structure-voidable.png";
import lootExplorerImg from "../../Assets/Projects/loot-explorer.png";


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
    moreInfoLink: "/arcadia"
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
    moreInfoLink: "/deep"
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
    imgPath: sleepCycleImg,
    title: "Sleep Cycle",
    date: "2024-07-08",
    description: "Enhances the sleeping mechanics by allowing time to pass progressively while players are asleep, rather than skipping the night instantly.",
    ghLink: "https://github.com/Vg34100/Minecraft-SleepCycle",
    demoLink: "https://modrinth.com/mod/sleepcycle",
    
    technologies: ["java", "intellij", "minecraft"],
    skillsUsed: ["Java Programming", "Minecraft Modding", "Game Mechanics", "FabricAPI"],
    teamSize: 1,
    thingsLearned: [
      "Minecraft mod development",
      "Custom game mechanics implementation",
      "Working with FabricAPI",
      "Creating custom effects and advancements"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Java Programming", level: 85 },
      { name: "Minecraft Modding", level: 80 },
      { name: "Game Design", level: 75 },
      { name: "Problem Solving", level: 85 }
    ],
    moreInfoLink: "/projects/sleep-cycle"
  },
  {
    imgPath: structureVoidableImg,
    title: "Structure Voidable",
    date: "2024-07-27",
    description: "Helps the Minecraft content developer by making the Structure Void block easier to use and visible like barriers.",
    ghLink: "https://github.com/Vg34100/Minecraft-StructureVoidable",
    demoLink: "https://modrinth.com/mod/structurevoidable",


    technologies: ["java", "intellij", "minecraft"],
    skillsUsed: ["Java Programming", "Minecraft Modding", "UI/UX Design", "Block Behavior Modification"],
    teamSize: 1,
    thingsLearned: [
      "Advanced block behavior modification in Minecraft",
      "Customizing rendering and visual effects",
      "Enhancing developer tools within Minecraft",
      "Optimizing mod performance"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Java Programming", level: 90 },
      { name: "Minecraft Modding", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Problem Solving", level: 90 }
    ],
    moreInfoLink: "/projects/structure-voidable"
  },
  {
    imgPath: lootExplorerImg,
    title: "Loot Explorer",
    date: "2024-07-27",
    description: "Makes containers containing loot tables appear in the creative inventory.",
    ghLink: "https://github.com/Vg34100/Minecraft-LootExplorer",
    demoLink: "https://modrinth.com/mod/lootexplorer",


    technologies: ["java", "intellij", "minecraft"],
    skillsUsed: ["Java Programming", "Minecraft Modding", "Inventory Management", "Data Pack Integration"],
    teamSize: 1,
    thingsLearned: [
      "Manipulating Minecraft's creative inventory",
      "Working with loot tables and NBT data",
      "Integrating mod features with data packs",
      "Enhancing developer workflow in Minecraft"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Java Programming", level: 95 },
      { name: "Minecraft Modding", level: 90 },
      { name: "Data Management", level: 85 },
      { name: "User Experience Design", level: 80 }
    ],
    moreInfoLink: "/projects/loot-explorer"
  }
];

export default projectsData;