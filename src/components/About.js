import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  color: #cccccc;
`;

const MainText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const HighlightText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #cccccc;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.3);
    background: rgba(0, 255, 136, 0.05);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const VisualContent = styled.div`
  position: relative;
`;

const FloatingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  
  &:nth-child(1) {
    position: relative;
    z-index: 3;
  }
  
  &:nth-child(2) {
    position: absolute;
    top: 20px;
    right: -20px;
    z-index: 2;
    opacity: 0.7;
  }
  
  &:nth-child(3) {
    position: absolute;
    bottom: 20px;
    left: -20px;
    z-index: 1;
    opacity: 0.5;
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Обо мне
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Разработчик, который создает не просто код, а цифровые миры
        </SectionSubtitle>
        
        <ContentGrid>
          <TextContent>
            <MainText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Я Андрей — разработчик с <strong>3+ годами Full-Stack опыта</strong>. 
              Специализируюсь на React, Node.js, Python и современных веб-технологиях. 
              Имею опыт разработки корпоративных приложений, e-commerce платформ и мобильных решений.
            </MainText>
            
            <HighlightText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Создаю масштабируемые системы с использованием <strong>Docker, AWS и современных DevOps практик</strong>. 
              Мой подход сочетает аналитику и креативность: я разбиваю проблемы на атомы и собираю их в нечто большее, чем просто функциональность.
            </HighlightText>
            
            <HighlightText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Меня вдохновляют проекты на пересечении <strong>технологий и искусства</strong>, 
              экспериментальные интерфейсы и системы, которые удивляют пользователей.
            </HighlightText>
            
            <StatsGrid
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <StatCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StatNumber>3+</StatNumber>
                <StatLabel>Года опыта</StatLabel>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StatNumber>3</StatNumber>
                <StatLabel>Репозитория</StatLabel>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StatNumber>14</StatNumber>
                <StatLabel>Звезд</StatLabel>
              </StatCard>
            </StatsGrid>
          </TextContent>
          
          <VisualContent>
            <FloatingCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <FaCode />
              </CardIcon>
              <CardTitle>Full-Stack Разработка</CardTitle>
              <CardText>
                Создаю полноценные веб-приложения от фронтенда до бэкенда
              </CardText>
            </FloatingCard>
            
            <FloatingCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <FaLightbulb />
              </CardIcon>
              <CardTitle>Креативные Решения</CardTitle>
              <CardText>
                Подход на стыке аналитики и творчества
              </CardText>
            </FloatingCard>
            
            <FloatingCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <FaRocket />
              </CardIcon>
              <CardTitle>Экспериментальные Проекты</CardTitle>
              <CardText>
                Смелые эксперименты и нестандартные подходы
              </CardText>
            </FloatingCard>
          </VisualContent>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
}

export default About;
