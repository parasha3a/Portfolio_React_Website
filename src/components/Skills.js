import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaNode, 
  FaDatabase, FaCloud
} from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiGit, SiDocker, SiRust, SiSolidity, SiEthereum, SiWeb3Dotjs } from 'react-icons/si';
import { IconContext } from 'react-icons';
import LogoLoop from './LogoLoop';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #999999;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  justify-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  /* Первый ряд - 3 элемента */
  & > div:nth-child(1) {
    grid-column: 1 / 3;
  }
  
  & > div:nth-child(2) {
    grid-column: 3 / 5;
  }
  
  & > div:nth-child(3) {
    grid-column: 5 / 7;
  }
  
  /* Второй ряд - 2 элемента по центру */
  & > div:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 2;
  }
  
  & > div:nth-child(5) {
    grid-column: 4 / 6;
    grid-row: 2;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      grid-column: auto;
      grid-row: auto;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.3);
    background: rgba(0, 255, 136, 0.05);
  }
  
  /* Блоки во втором ряду имеют одинаковую высоту */
  &:nth-child(4),
  &:nth-child(5) {
    min-height: 280px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem;
    min-height: auto;
    animation: mobileGlow 2s ease-in-out infinite alternate;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
    
    &:nth-child(4),
    &:nth-child(5) {
      min-height: auto;
    }
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.3s; }
    &:nth-child(3) { animation-delay: 0.6s; }
    &:nth-child(4) { animation-delay: 0.9s; }
    &:nth-child(5) { animation-delay: 1.2s; }
  }
  
  @keyframes mobileGlow {
    0% {
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
      border-color: rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.25);
      border-color: rgba(0, 255, 136, 0.2);
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const CategoryIcon = styled.div`
  font-size: 1.5rem;
  color: #00ff88;
  flex-shrink: 0;
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
  justify-content: space-between;
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

const SkillName = styled.span`
  color: #cccccc;
  font-size: 0.8rem;
  flex: 1;
`;

const SkillLevel = styled.div`
  width: 80px;
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88 0%, #00cc6a 100%);
  border-radius: 3px;
`;

const SkillPercentage = styled.span`
  color: #00ff88;
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 0.4rem;
  flex-shrink: 0;
`;


const getSkillData = (t) => [
  {
    category: t.skills.categories.frontend,
    icon: <FaHtml5 />,
    skills: [
      { name: t.skills.items.htmlCss, level: 90 },
      { name: t.skills.items.javascript, level: 85 },
      { name: t.skills.items.react, level: 80 },
      { name: t.skills.items.responsiveDesign, level: 85 }
    ]
  },
  {
    category: t.skills.categories.backend,
    icon: <FaNode />,
    skills: [
      { name: t.skills.items.nodejs, level: 75 },
      { name: t.skills.items.python, level: 80 },
      { name: t.skills.items.apis, level: 85 },
      { name: t.skills.items.serverArch, level: 70 }
    ]
  },
  {
    category: t.skills.categories.databases,
    icon: <FaDatabase />,
    skills: [
      { name: t.skills.items.sql, level: 75 },
      { name: t.skills.items.mongodb, level: 70 },
      { name: t.skills.items.dataModeling, level: 80 },
      { name: t.skills.items.performance, level: 70 }
    ]
  },
  {
    category: t.skills.categories.web3,
    icon: <SiEthereum />,
    skills: [
      { name: t.skills.items.solidity, level: 75 },
      { name: t.skills.items.rust, level: 70 },
      { name: t.skills.items.smartContracts, level: 80 },
      { name: t.skills.items.defi, level: 65 },
      { name: t.skills.items.web3js, level: 70 }
    ]
  },
  {
    category: t.skills.categories.devops,
    icon: <FaCloud />,
    skills: [
      { name: t.skills.items.git, level: 85 },
      { name: t.skills.items.docker, level: 65 },
      { name: t.skills.items.cicd, level: 70 },
      { name: t.skills.items.cloud, level: 65 },
      { name: t.skills.items.kubernetes, level: 60 }
    ]
  }
];


const techLogos = [
  { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiRust />, title: "Rust", href: "https://rust-lang.org" },
  { node: <SiSolidity />, title: "Solidity", href: "https://soliditylang.org" },
  { node: <SiEthereum />, title: "Ethereum", href: "https://ethereum.org" },
  { node: <SiWeb3Dotjs />, title: "Web3.js", href: "https://web3js.readthedocs.io" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" }
];

function Skills() {
  const { language, translations } = useLanguage();
  const t = translations[language];
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.skills.subtitle}
        </SectionSubtitle>
        
        <SkillsGrid>
          {getSkillData(t).map((category, index) => (
            <SkillCategory
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.category}</CategoryTitle>
              </CategoryHeader>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skill.name}>
                    <SkillName>{skill.name}</SkillName>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SkillLevel>
                        <SkillProgress
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </SkillLevel>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </div>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          style={{ 
            height: '120px', 
            position: 'relative', 
            overflow: 'hidden',
            marginTop: '3rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconContext.Provider value={{ color: '#00ff88' }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#0f0f0f"
              ariaLabel="Technology partners"
            />
          </IconContext.Provider>
        </motion.div>
      </Container>
    </SkillsSection>
  );
}

export default Skills;
