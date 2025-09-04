import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PixelBlast from './components/PixelBlast';
import logo from './assets/logo.svg';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  width: 100vw;
  overflow-x: hidden;
`;

const BackgroundEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingText = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 300;
  color: #00ff88;
  letter-spacing: 2px;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    {
      label: "Обо мне",
      bgColor: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
      textColor: "#ffffff",
      links: [
        { label: "Технологии", ariaLabel: "Стек технологий" },
        { label: "Проекты", ariaLabel: "Портфолио проектов" }
      ]
    },
    {
      label: "Проекты", 
      bgColor: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      textColor: "#ffffff",
      links: [
        { label: "Портфолио", ariaLabel: "Портфолио проектов" },
        { label: "GitHub", ariaLabel: "GitHub репозитории" }
      ]
    },
    {
      label: "Контакты",
      bgColor: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)", 
      textColor: "#ffffff",
      links: [
        { label: "Email", ariaLabel: "Email" },
        { label: "Telegram", ariaLabel: "Telegram" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  if (loading) {
    return (
      <LoadingScreen
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LoadingText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Загрузка...
        </LoadingText>
      </LoadingScreen>
    );
  }

  return (
    <AppContainer>
      <BackgroundEffect>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#00ff88"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </BackgroundEffect>
      <ContentWrapper>
        <CardNav
          logo={logo}
          logoAlt="Portfolio - Full-Stack Разработчик"
          items={navItems}
          baseColor="rgba(0, 0, 0, 0.8)"
          menuColor="#00ff88"
          buttonBgColor="#00ff88"
          buttonTextColor="#000"
          ease="power3.out"
        />
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </AnimatePresence>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
