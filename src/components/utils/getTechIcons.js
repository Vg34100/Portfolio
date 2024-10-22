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
  SiIntellijidea,
  SiFlutter,
  SiDart,
  SiDjango,
  SiPostgresql,
  SiSupabase,
  SiGoogle
} from 'react-icons/si';
import { DiJava, DiGithubBadge } from 'react-icons/di';

import { FaReact } from "react-icons/fa";
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
  minecraft: MinecraftIcon,
  flutter: SiFlutter,
  dart: SiDart,
  django: SiDjango,
  reactnative: FaReact,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  google: SiGoogle,
};

export const getTechIcon = (tech) => {
  const Icon = techIcons[tech];
  return Icon ? <Icon /> : null;
};