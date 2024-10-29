// projectsData.js
import arcadiaImg from "../Assets/Projects/blog.png";
import deepImg from "../Assets/Projects/deep.png";
import asteroidDefenseImg from "../Assets/Projects/asteroid-defense.png";
import notForzaImg from "../Assets/Projects/not-forza.png";
import novusTechImg from "../Assets/Projects/novus-tech.png";
import uasImg from "../Assets/Projects/uas.png";

import sleepCycleImg from "../Assets/Projects/sleep-cycle.png";
import structureVoidableImg from "../Assets/Projects/structure-voidable.png";
import lootExplorerImg from "../Assets/Projects/loot-explorer.png";
import fishFrenzyImg from "../Assets/Projects/fish-frenzy.png";

import flutterHabitTrackerImg from "../Assets/Projects/codeEditor.png"
import flutterIndecisionMachineImg from "../Assets/Projects/codeEditor.png"
import flutterBookVaultImg from "../Assets/Projects/codeEditor.png"

import seniorVisionaryImg from "../Assets/Projects/codeEditor.png"


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
  },
  {
    imgPath: fishFrenzyImg,
    title: "Fish Frenzy",
    date: "2024-08-16",
    description: "A dynamic fishing experience inspired by Stardew Valley and Terraria.",
    ghLink: "https://github.com/Vg34100/Minecraft-FishingFrenzy",
    demoLink: "https://modrinth.com/mod/fishingfrenzy",


    technologies: ["java", "intellij", "minecraft"],
    skillsUsed: ["Java Programming", "Minecraft Modding", "Model Creation", "Dynamic Classes"],
    teamSize: 1,
    thingsLearned: [
      "Creating custom models and custom entities",
      "Coding a dynamic fish entity creator",
      "Using builders for rapid development of additional items",
      "Custom entitiy AI to allow fish breeding and attacking"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Java Programming", level: 95 },
      { name: "Minecraft Modding", level: 100 },
      { name: "Model Creation", level: 70 },
      { name: "Dynamic Classes", level: 60 }
    ],
    moreInfoLink: "/projects/fish-frenzy"
  },

  {
    imgPath: flutterHabitTrackerImg,
    title: "Flutter Habit Tracker",
    date: "2024-08-20",
    description: "A simple habit tracker app built using Flutter with local storage and habit customization.",
    detailedDescription: "The Flutter Habit Tracker app is designed to help users manage their daily habits by offering a fully customizable interface. Users can assign custom icons, set habit names, define units (times, minutes), and track frequency (daily, weekly, or monthly). The app also includes dark and light theme modes, giving users control over their experience. A key feature is the interactive date slider, allowing users to view habit completion across various intervals. All data is stored locally using persistent storage, ensuring users' habits are retained even when the app is closed. Habit editing functionality allows users to adjust or remove habits as needed. Future updates will focus on expanding features and refining the user experience.",
    technologies: ["flutter", "dart"],
    skillsUsed: ["Flutter Development", "MVC Architecture", "Local Storage Integration", "UI Design"],
    teamSize: 1,
    thingsLearned: [
      "Implementing local storage in Flutter",
      "Creating dynamic and customizable UI",
      "MVC pattern implementation in a mobile app",
      "Date-based tracking for interval-based habits"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Flutter Development", level: 85 },
      { name: "MVC Architecture", level: 75 },
      { name: "UI Design", level: 65 },
      { name: "Local Storage Integration", level: 80 }
    ],
    moreInfoLink: "/projects/flutter-habit-tracker"
  },
  {
    imgPath: flutterIndecisionMachineImg,
    title: "Flutter Indecision Machine",
    date: "2024-08-21",
    description: "An app that helps make decisions by using weighted categories and local storage.",
    detailedDescription: "The Flutter Indecision Machine app is a straightforward tool that helps users make decisions by allowing them to create weighted categories (such as 'Work' or 'Leisure') and assign choices to those categories. Each choice gets a weight value, and users can press a 'decide' button to have the app randomly choose an option for them, taking into account the weights assigned. This provides a fun and useful way to help prioritize tasks. The app also features the ability to delete and edit categories and choices, storing all data locally using persistent storage. This ensures that preferences are saved even after the app is closed. Future updates will add more advanced decision-making features and fine-tuning of the interface.",
    technologies: ["flutter", "dart"],
    skillsUsed: ["Flutter Development", "Persistent Storage", "Weighted Random Selection"],
    teamSize: 1,
    thingsLearned: [
      "Developing a decision-making algorithm",
      "Using local storage to persist user data",
      "Creating a category-based weighted selection system"
    ],
    contributionPercentage: 100,
    skillsCorrelation: [
      { name: "Flutter Development", level: 85 },
      { name: "Algorithm Design", level: 70 },
      { name: "Persistent Storage", level: 75 }
    ],
    moreInfoLink: "/projects/flutter-indecision-machine"
  },
  {
    imgPath: flutterBookVaultImg,
    title: "BookVault",
    date: "2024-09-01",
    description: "A book library app that integrates with Google Books API and Supabase for user collections.",
    detailedDescription: "BookVault is a mobile app designed to help users manage their personal book collections. Built in Flutter, the app integrates with the Google Books API to allow users to search for books, view detailed information such as descriptions, page counts, and genres, and add books to their personal collections. Using Supabase for authentication and database management, the app ensures a secure and personalized user experience. Users can sign up, browse recommended or genre-specific books on the homepage, and manage their collections by adding or removing books. The project was developed in a team of three, where I took on the majority of the development work, focusing on the integration of the Google Books API and Supabase for seamless book searches and data management. Future updates will include enhanced book categorization and sharing options.",
    technologies: ["flutter", "dart", "supabase", "google"],
    skillsUsed: ["Flutter Development", "Supabase Integration", "API Integration", "User Authentication"],
    teamSize: 3,
    thingsLearned: [
      "Integrating third-party APIs for book searches",
      "Using Supabase for user authentication and database management",
      "Building dynamic UI components in Flutter"
    ],
    contributionPercentage: 80,
    skillsCorrelation: [
      { name: "Flutter Development", level: 90 },
      { name: "API Integration", level: 85 },
      { name: "User Authentication", level: 80 },
      { name: "Database Management", level: 75 }
    ],
    moreInfoLink: "/projects/bookvault"
  },
  {
    imgPath: seniorVisionaryImg,
    title: "Visionary",
    date: "2024-10-05",
    description: "A Google Lens competitor that provides detailed image descriptions using LLMs.",
    detailedDescription: "Visionary is a senior project developed by a team of five, aimed at creating a more social-focused competitor to Google Lens. The app allows users to capture images, which are processed by a server using an advanced large language model (LLM) to return detailed descriptions of the objects in the photo. Built with React Native for the mobile front end, Django for the backend, and PostgreSQL for database management, the app emphasizes exploration and discovery. Users can earn points for scanning new items and build a collection of scanned images, which can be shared with others. Unlike Google Lens, Visionary is designed to offer a gamified experience, rewarding users for their curiosity. My primary contribution to the project involved setting up the image processing pipeline and ensuring the smooth integration of LLMs for generating descriptions. Future plans include adding social features, enhanced categorization of scanned items, and expanded image recognition capabilities.",
    technologies: ["django", "postgresql", "reactnative"],
    skillsUsed: ["Backend Development", "Database Management", "Mobile Development", "Image Processing"],
    teamSize: 5,
    thingsLearned: [
      "Integrating LLMs for image processing",
      "Managing image data using PostgreSQL",
      "Building a React Native app for cross-platform mobile functionality",
      "Designing a social system for sharing and tracking scans"
    ],
    contributionPercentage: 60,
    skillsCorrelation: [
      { name: "Backend Development", level: 80 },
      { name: "Database Management", level: 70 },
      { name: "Mobile Development", level: 85 },
      { name: "Image Processing", level: 65 }
    ],
    moreInfoLink: "/projects/visionary"
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
  },
  {
    title: "Learning Java",
    description: "Began learning Java programming and developing Minecraft mods.",
    date: "2024-06-30",
    technologies: ["java", "intellij", "github", "minecraft"],
  }
];

export default projectsData;