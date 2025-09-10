import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 120px 2rem 0;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 80px 1rem 0;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0.5rem 0;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  max-width: 550px;
  width: 100%;
  text-align: center;
  z-index: 10;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem 1.2rem;
  border: 1px solid rgba(0, 255, 136, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 136, 0.2);
  box-sizing: border-box;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    border-radius: 15px;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: #00ff88;
  margin-bottom: 1rem;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.3);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.6rem;
  background: linear-gradient(135deg, #ffffff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 255, 136, 0.8), 0 0 60px rgba(0, 255, 136, 0.4);
  filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.6));
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1.2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 480px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;

const Description = styled(motion.p)`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.8);
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

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2rem;
  border: 2px solid #00ff88;
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3), 0 0 20px rgba(0, 255, 136, 0.2);
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  white-space: nowrap;
  text-align: center;
  
  &:hover {
    background: #00ff88;
    color: #0a0a0a;
    box-shadow: 0 6px 20px rgba(0, 255, 136, 0.6), 0 0 30px rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem 1.2rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 1rem 2rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  white-space: nowrap;
  text-align: center;
  
  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem 1.2rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
  
  &:hover {
    border-color: #00ff88;
    color: #00ff88;
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 255, 136, 0.3), 0 0 20px rgba(0, 255, 136, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;


function Hero() {
  const { language, translations } = useLanguage();
  const t = translations[language];
  const shouldReduce = useReducedMotion();
  const baseDur = shouldReduce ? 0.4 : 0.8;
  const baseDelay = shouldReduce ? 0.1 : 0.2;

  return (
    <HeroSection id="hero">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay }}
        >
          {t.hero.greeting}
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay + 0.2 }}
        >
          {t.hero.name}
        </Name>
        
        <Title
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay + 0.4 }}
        >
          {t.hero.title}
        </Title>
        
        <Description
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay + 0.6 }}
        >
          {t.hero.description}
        </Description>
        
        <CTAButtons
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay + 0.8 }}
        >
          <CTAButton
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: shouldReduce ? 0.98 : 0.95 }}
          >
            {t.hero.viewWorks}
          </CTAButton>
          <SecondaryButton
            href="https://t.me/wrk_24_8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: shouldReduce ? 1.03 : 1.05 }}
            whileTap={{ scale: shouldReduce ? 0.99 : 0.95 }}
          >
            {t.hero.contact}
          </SecondaryButton>
        </CTAButtons>
        
        <SocialLinks
          initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: baseDur, delay: baseDelay + 1.0 }}
        >
          <SocialLink
            href="https://github.com/parasha3a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: shouldReduce ? 1.05 : 1.1 }}
            whileTap={{ scale: shouldReduce ? 0.97 : 0.9 }}
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href="#"
            whileHover={{ scale: shouldReduce ? 1.05 : 1.1 }}
            whileTap={{ scale: shouldReduce ? 0.97 : 0.9 }}
          >
            <FaLinkedin size={20} />
          </SocialLink>
          <SocialLink
            href="https://t.me/wrk_24_8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: shouldReduce ? 1.05 : 1.1 }}
            whileTap={{ scale: shouldReduce ? 0.97 : 0.9 }}
          >
            <FaTelegram size={20} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
