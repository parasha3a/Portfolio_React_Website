import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaJs } from 'react-icons/fa';
import ElectricBorder from './ElectricBorder';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }
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
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #999999;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.25rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: stretch;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 0.25rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 20px;
  overflow: visible;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(0, 255, 136, 0.05);
  }
`;

const MobileProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(0, 255, 136, 0.3);
  border-radius: 20px;
  overflow: visible;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    background: linear-gradient(45deg, 
      rgba(0, 255, 136, 0.6),
      rgba(0, 255, 136, 0.2),
      rgba(0, 255, 136, 0.6)
    );
    background-size: 200% 200%;
    animation: borderGlow 3s linear infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 255, 136, 0.08);
    border-color: rgba(0, 255, 136, 0.6);
    box-shadow: 
      0 4px 20px rgba(0, 255, 136, 0.2),
      inset 0 1px 0 rgba(0, 255, 136, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  @keyframes borderGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
      background: rgba(0, 255, 136, 0.4);
    }
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 136, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: #00ff88;
  opacity: 0.7;
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const TechTag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 136, 0.3);
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    border-color: #00ff88;
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    gap: 0.25rem;
  }
`;

const FeaturedProject = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%);
  border: 2px solid rgba(0, 255, 136, 0.3);
  border-radius: 25px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  box-sizing: border-box;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem 3rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 0 0.5rem 2rem 0.5rem;
  }
`;

const FeaturedTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const FeaturedDescription = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
`;

const FeaturedButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #00ff88;
  color: #0a0a0a;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
    gap: 0.25rem;
  }
`;

const getProjects = (t) => [
  {
    ...t.projects.items[0],
    icon: <FaJs />,
    github: 'https://github.com/parasha3a/VK-Crypto-Tracker',
    live: null
  },
  {
    ...t.projects.items[1],
    icon: <FaPython />,
    github: 'https://github.com/parasha3a/Telegram-bot-for-monitoring-public-procurement',
    live: null
  },
  {
    ...t.projects.items[2],
    icon: <FaJs />,
    github: 'https://github.com/parasha3a/portfolio-website',
    live: 'https://parasha3a.github.io/portfolio-website'
  }
];

function Projects() {
  const { language, translations } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.projects.subtitle}
        </SectionSubtitle>
        
        <FeaturedProject
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FeaturedTitle>{t.projects.featured.title}</FeaturedTitle>
          <FeaturedDescription>
            {t.projects.featured.description}
          </FeaturedDescription>
          <FeaturedButton
            href="https://github.com/parasha3a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            {t.projects.featured.button}
          </FeaturedButton>
        </FeaturedProject>
        
        <ProjectsGrid>
          {getProjects(t).map((project, index) => (
            isMobile ? (
              <MobileProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTech>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={16} />
                      Код
                    </ProjectLink>
                    
                    {project.live && (
                      <ProjectLink
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={16} />
                        {t.projects.links.demo}
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </MobileProjectCard>
            ) : (
              <ElectricBorder
                key={project.title}
                color="#00ff88"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ 
                  borderRadius: 20, 
                  height: '100%', 
                  width: '100%',
                  margin: 0, 
                  padding: 0,
                  boxSizing: 'border-box'
                }}
              >
                <ProjectCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectImage>
                    <ProjectIcon>{project.icon}</ProjectIcon>
                  </ProjectImage>
                  
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    
                    <ProjectTech>
                      {project.tech.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </ProjectTech>
                    
                    <ProjectLinks>
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={16} />
                        {t.projects.links.code}
                      </ProjectLink>
                      
                      {project.live && (
                        <ProjectLink
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={16} />
                          Демо
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              </ElectricBorder>
            )
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
