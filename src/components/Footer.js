import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterSection = styled.div`
  color: #999999;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 300px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FooterLink = styled(motion.a)`
  color: #999999;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff88;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
  margin: 2rem 0;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #666666;
  font-size: 0.9rem;
`;

const HeartIcon = styled(motion.div)`
  color: #ff6b6b;
  font-size: 1rem;
`;

const Quote = styled(motion.div)`
  color: #00ff88;
  font-style: italic;
  font-size: 1rem;
  margin: 2rem 0;
  opacity: 0.8;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Андрей</FooterTitle>
            <FooterText>
              Full-Stack разработчик, создающий цифровые миры на пересечении технологий и искусства
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Быстрые ссылки</FooterTitle>
            <FooterLinks>
              <FooterLink
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обо мне
              </FooterLink>
              <FooterLink
                href="#skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Навыки
              </FooterLink>
              <FooterLink
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Проекты
              </FooterLink>
              <FooterLink
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Контакты
              </FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Связаться</FooterTitle>
            <FooterText>
              Готов обсудить ваш проект или просто пообщаться о технологиях
            </FooterText>
          </FooterSection>
        </FooterContent>
        
        <Quote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          "Код — это больше, чем инструкции — это способ формировать опыт и вдохновлять людей."
        </Quote>
        
        <Divider />
        
        <Copyright>
          <span>© 2025 Андрей. Создано с</span>
          <HeartIcon
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaHeart />
          </HeartIcon>
          <span>и React</span>
        </Copyright>
        
        <FooterLinks style={{ marginBottom: 0 }}>
          <FooterLink
            href="https://github.com/parasha3a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={16} style={{ marginRight: '0.5rem' }} />
            GitHub
          </FooterLink>
        </FooterLinks>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
