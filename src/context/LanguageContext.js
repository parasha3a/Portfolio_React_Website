import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  ru: {
    nav: {
      about: 'Обо мне',
      technologies: 'Технологии',
      projects: 'Проекты',
      portfolio: 'Портфолио'
    },
    hero: {
      greeting: 'Привет, я',
      name: 'Андрей',
      title: 'Full-Stack Разработчик',
      description: 'Создаю цифровые миры на пересечении технологий и искусства. Превращаю сложные концепции в элегантные решения.',
      viewWorks: 'Посмотреть работы',
      contact: 'Связаться'
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Разработчик, который создает не просто код, а цифровые миры',
      description: 'Опытный Full-Stack разработчик с глубоким пониманием современных веб-технологий',
      experience: 'Я Андрей — разработчик с 3+ годами Full-Stack опыта. Специализируюсь на React, Node.js, Python и современных веб-технологиях. Имею опыт разработки корпоративных приложений, e-commerce платформ и мобильных решений.',
      skills: 'Создаю масштабируемые системы с использованием Docker, AWS и современных DevOps практик. Мой подход сочетает аналитику и креативность: я разбиваю проблемы на атомы и собираю их в нечто большее, чем просто функциональность.',
      passion: 'Меня вдохновляют проекты на пересечении технологий и искусства, экспериментальные интерфейсы и системы, которые удивляют пользователей.',
      stats: {
        years: 'Года опыта',
        clients: 'Довольных клиентов',
        projects: 'Реализованных проектов'
      },
      card: {
        title: 'Full-Stack Разработка',
        text: 'Создаю полноценные веб-приложения от фронтенда до бэкенда'
      }
    },
    skills: {
      title: 'Навыки',
      subtitle: 'Технологии и инструменты, с которыми я работаю',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Базы данных',
        web3: 'Web3 & Blockchain',
        devops: 'DevOps & Инструменты'
      },
      items: {
        htmlCss: 'HTML/CSS',
        javascript: 'JavaScript',
        react: 'React',
        responsiveDesign: 'Адаптивный дизайн',
        nodejs: 'Node.js',
        python: 'Python',
        apis: 'APIs',
        serverArch: 'Серверная архитектура',
        sql: 'SQL',
        mongodb: 'MongoDB',
        dataModeling: 'Моделирование данных',
        performance: 'Производительность',
        solidity: 'Solidity',
        rust: 'Rust',
        smartContracts: 'Смарт-контракты',
        defi: 'DeFi протоколы',
        web3js: 'Web3.js',
        git: 'Git',
        docker: 'Docker',
        cicd: 'CI/CD',
        cloud: 'Облачные сервисы',
        kubernetes: 'Kubernetes'
      }
    },
    projects: {
      title: 'Проекты',
      subtitle: 'Мои работы и эксперименты в области разработки',
      featured: {
        title: 'Экспериментальные Проекты',
        description: 'В моих репозиториях вы найдете не только production-ready проекты, но и смелые эксперименты — потому что иногда нестандартный путь ведет к лучшему результату.',
        button: 'Посмотреть на GitHub'
      },
      links: {
        code: 'Код',
        demo: 'Демо'
      },
      items: [
        {
          title: 'VK-Crypto-Tracker',
          description: 'VK Mini App для отслеживания криптовалют с интерактивными графиками, P2P маркетплейсом и калькулятором валют.',
          tech: ['TypeScript', 'React', 'VK Mini Apps']
        },
        {
          title: 'Telegram-bot-for-monitoring-public-procurement',
          description: 'Telegram бот для мониторинга государственных закупок с автоматическими уведомлениями и аналитикой.',
          tech: ['Python', 'Telegram API', 'Web Scraping']
        },
        {
          title: 'Portfolio Website',
          description: 'Современный адаптивный сайт-портфолио с анимациями и интерактивными элементами.',
          tech: ['React', 'JavaScript', 'CSS3']
        }
      ]
    },
    footer: {
      name: 'Андрей',
      description: 'Full-Stack разработчик, создающий цифровые миры на пересечении технологий и искусства',
      quickLinks: {
        title: 'Быстрые ссылки',
        about: 'Обо мне',
        skills: 'Навыки',
        projects: 'Проекты',
        contacts: 'Контакты'
      },
      contact: {
        title: 'Связаться',
        description: 'Готов обсудить ваш проект или просто пообщаться о технологиях'
      },
      quote: 'Код — это больше, чем инструкции — это способ формировать опыт и вдохновлять людей.',
      copyright: {
        text: '© 2025 Андрей. Создано с',
        and: 'и',
        tech: 'React'
      }
    },
    switchLang: 'EN'
  },
  en: {
    nav: {
      about: 'About',
      technologies: 'Technologies',
      projects: 'Projects',
      portfolio: 'Portfolio'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Andrey',
      title: 'Full-Stack Developer',
      description: 'Creating digital worlds at the intersection of technology and art. Transforming complex concepts into elegant solutions.',
      viewWorks: 'View Works',
      contact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      subtitle: 'Developer who creates not just code, but digital worlds',
      description: 'Experienced Full-Stack developer with deep understanding of modern web technologies',
      experience: 'I\'m Andrey — a developer with 3+ years of Full-Stack experience. I specialize in React, Node.js, Python and modern web technologies. I have experience in developing enterprise applications, e-commerce platforms and mobile solutions.',
      skills: 'I create scalable systems using Docker, AWS and modern DevOps practices. My approach combines analytics and creativity: I break problems into atoms and assemble them into something more than just functionality.',
      passion: 'I\'m inspired by projects at the intersection of technology and art, experimental interfaces and systems that surprise users.',
      stats: {
        years: 'Years of Experience',
        clients: 'Happy Clients',
        projects: 'Projects Completed'
      },
      card: {
        title: 'Full-Stack Development',
        text: 'Creating complete web applications from frontend to backend'
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I work with',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        web3: 'Web3 & Blockchain',
        devops: 'DevOps & Tools'
      },
      items: {
        htmlCss: 'HTML/CSS',
        javascript: 'JavaScript',
        react: 'React',
        responsiveDesign: 'Responsive Design',
        nodejs: 'Node.js',
        python: 'Python',
        apis: 'APIs',
        serverArch: 'Server Architecture',
        sql: 'SQL',
        mongodb: 'MongoDB',
        dataModeling: 'Data Modeling',
        performance: 'Performance',
        solidity: 'Solidity',
        rust: 'Rust',
        smartContracts: 'Smart Contracts',
        defi: 'DeFi Protocols',
        web3js: 'Web3.js',
        git: 'Git',
        docker: 'Docker',
        cicd: 'CI/CD',
        cloud: 'Cloud Services',
        kubernetes: 'Kubernetes'
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'My works and experiments in development',
      featured: {
        title: 'Experimental Projects',
        description: 'In my repositories, you\'ll find not only production-ready projects but also bold experiments — because sometimes the unconventional path leads to better results.',
        button: 'View on GitHub'
      },
      links: {
        code: 'Code',
        demo: 'Demo'
      },
      items: [
        {
          title: 'VK-Crypto-Tracker',
          description: 'VK Mini App for tracking cryptocurrencies with interactive charts, P2P marketplace, and currency calculator.',
          tech: ['TypeScript', 'React', 'VK Mini Apps']
        },
        {
          title: 'Telegram-bot-for-monitoring-public-procurement',
          description: 'Telegram bot for monitoring public procurement with automatic notifications and analytics.',
          tech: ['Python', 'Telegram API', 'Web Scraping']
        },
        {
          title: 'Portfolio Website',
          description: 'Modern responsive portfolio website with animations and interactive elements.',
          tech: ['React', 'JavaScript', 'CSS3']
        }
      ]
    },
    footer: {
      name: 'Andrey',
      description: 'Full-Stack developer creating digital worlds at the intersection of technology and art',
      quickLinks: {
        title: 'Quick Links',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contacts: 'Contact'
      },
      contact: {
        title: 'Contact',
        description: 'Ready to discuss your project or just chat about technology'
      },
      quote: 'Code is more than instructions — it\'s a way to shape experiences and inspire people.',
      copyright: {
        text: '© 2025 Andrey. Made with',
        and: 'and',
        tech: 'React'
      }
    },
    switchLang: 'RU'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
