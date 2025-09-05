import React from 'react';
import styled from 'styled-components';
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
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-bottom: 4rem;
  justify-content: center;
  overflow-x: auto;
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;
  max-width: 220px;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.3);
    background: rgba(0, 255, 136, 0.05);
  }
  
  @media (max-width: 1200px) {
    min-width: 240px;
    max-width: 280px;
    padding: 1.2rem;
  }
  
  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 100%;
    padding: 1.5rem;
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


const skillData = [
  {
    category: 'Frontend',
    icon: <FaHtml5 />,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Responsive Design', level: 85 }
    ]
  },
  {
    category: 'Backend',
    icon: <FaNode />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'APIs', level: 85 },
      { name: 'Server Architecture', level: 70 }
    ]
  },
  {
    category: 'Databases',
    icon: <FaDatabase />,
    skills: [
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Data Modeling', level: 80 },
      { name: 'Performance', level: 70 }
    ]
  },
  {
    category: 'Web3 & Blockchain',
    icon: <SiEthereum />,
    skills: [
      { name: 'Solidity', level: 75 },
      { name: 'Rust', level: 70 },
      { name: 'Smart Contracts', level: 80 },
      { name: 'DeFi Protocols', level: 65 },
      { name: 'Web3.js', level: 70 }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <FaCloud />,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD', level: 70 },
      { name: 'Cloud Services', level: 65 }
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
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Навыки
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Технологии и инструменты, с которыми я работаю
        </SectionSubtitle>
        
        <SkillsGrid>
          {skillData.map((category, index) => (
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
