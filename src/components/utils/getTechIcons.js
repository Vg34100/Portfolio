import React from 'react';
import { 
  SiUnrealengine, 
  SiMonogames, 
  SiCss3, 
  SiPhp, 
  SiJavascript, 
  SiCplusplus, 
  SiC, 
  SiPython, 
  SiIntellijidea 
} from 'react-icons/si';
import { DiJava, DiGithubBadge } from 'react-icons/di';
import MinecraftIcon from './icons/MinecraftIcon';  // Adjust the import path as needed

const techIcons = {
  unreal: SiUnrealengine,
  monogame: SiMonogames,
  css: SiCss3,
  php: SiPhp,
  javascript: SiJavascript,
  cpp: SiCplusplus,
  c: SiC,
  python: SiPython,
  java: DiJava,
  intellij: SiIntellijidea,
  github: DiGithubBadge,
  minecraft: MinecraftIcon
};

export const getTechIcon = (tech) => {
  const Icon = techIcons[tech];
  return Icon ? <Icon /> : null;
};