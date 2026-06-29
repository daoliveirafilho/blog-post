export const languages: Record<'fr' | 'en', { name: string; flag: string }> = {
  fr: { name: 'French', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'fr';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      lastProject: {
        title: 'Observabilité',
        description: "Observabilité et surveillance.",
        imageAltText: "Observabilité",
        categoryText: 'Enregistrer',
        dateText: 'Mars 2023',
        detailedDescription:
          "Intelligence artificielle capable de atteindre un objectif complexe de manière autonome.",
        keyFeatures: {
          grafana: {
            title: 'Grafana',
            description: "Envisagez d'utiliser des protocoles open source comme MCP, une norme ouverte émergente qui crée une couche unifiée et sécurisée permettant aux LLM de se connecter de manière transparente aux sources de données et aux outils.",
          },
          influxdb: {
            title: 'InfluxDB',
            description:
              'Récupère les données externes (documents, bases de données) et les intègre au modèle, garantissant ainsi des réponses hautement pertinentes et précises.',
          },
          telegraf: {
            title: 'Telegraf',
            description: "Envisagez d'utiliser des protocoles open source comme MCP, une norme ouverte émergente qui crée une couche unifiée et sécurisée permettant aux LLM de se connecter de manière transparente aux sources de données et aux outils.",
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          'Description des défis rencontrés lors de la création de ce projet exemple.',
        learnings: 'Description des apprentissages tirés de ce projet exemple.',
      },
      firstProject: {
        title: 'IA Agentique',
        description: "Intelligence artificielle autonome.",
        imageAltText: "IA Agentique",
        categoryText: 'Application Web',
        dateText: 'Janvier 2018',
        detailedDescription:
          "Intelligence artificielle capable de atteindre un objectif complexe de manière autonome.",
        keyFeatures: {
          ollama: {
            title: 'Ollama',
            description: "Envisagez d'utiliser des protocoles open source comme MCP, une norme ouverte émergente qui crée une couche unifiée et sécurisée permettant aux LLM de se connecter de manière transparente aux sources de données et aux outils.",
          },
          php: {
            title: 'PHP',
            description: "Envisagez d'utiliser des protocoles open source comme MCP, une norme ouverte émergente qui crée une couche unifiée et sécurisée permettant aux LLM de se connecter de manière transparente aux sources de données et aux outils.",
          },
          telegram: {
            title: 'Telegram',
            description:
              'Récupère les données externes (documents, bases de données) et les intègre au modèle, garantissant ainsi des réponses hautement pertinentes et précises.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          'Description des défis rencontrés lors de la création de ce projet exemple.',
        learnings: 'Description des apprentissages tirés de ce projet exemple.',
      },
      secondProject: {
        title: 'Télémétrie',
        description: "Enregistreur de données de télémétrie.",
        imageAltText: "Télémétrie",
        categoryText: 'Internet des objets',
        dateText: 'Novembre 2020',
        detailedDescription:
          "Acquisition de données reposant sur un modèle de déploiement flexible ainsi que sur un ensemble de politiques et de procédures régissant la continuité, le rétablissement de l'environnement et la réplication des données stockées, soutenant ainsi les applications informatiques pour en garantir la stabilité.",
        keyFeatures: {
          esp32: {
            title: 'ESP32',
            description: "Les appareils transmettent ces données sans fil via une passerelle Internet. En cas d'anomalies détectées, les actionneurs peuvent déclencher automatiquement des réactions physiques.",
          },
          freertos: {
            title: 'FreeRTOS',
            description: "Les appareils transmettent ces données sans fil via une passerelle Internet. En cas d'anomalies détectées, les actionneurs peuvent déclencher automatiquement des réactions physiques.",
          },
          supabase: {
            title: 'Supabase',
            description:
              'Les serveurs cloud ou edge reçoivent les flux de données entrants et les tableaux de bord analysent les indicateurs.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          'Description des défis rencontrés lors de la création de ce projet exemple.',
        learnings: 'Description des apprentissages tirés de ce projet exemple.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces utilisateur interactives et performantes.",
      },
      backendDevelopment: {
        title: 'Développement Backend',
        description: "Construction de logiques serveur robustes et d'API.",
      },
      uiUxDesign: {
        title: 'Design UI/UX',
        description:
          "Conception d'expériences utilisateur intuitives et esthétiques.",
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatisation des processus de développement et de déploiement.',
      },
    },
    site: {
      title: 'Rekall',
      description:
        'Un template Astro moderne et performant pour démarrer votre projet.',
    },
    nav: {
      home: 'Accueil',
      tips: 'Astuces',
      projects: 'Projets',
      blog: 'Blog',
      contact: 'Contact',
    },
    footer: {
      rights: 'Utilisation du blog Astro Persona.',
    },
    homePage: {
      pageTitle: 'Rekall',
      pageDescription:
        "Projets d'intégration.",
      heroGreeting: "Salut, c'est Oliver",
      heroSubtitlePart1: 'Analyste Réseau',
      heroSubtitlePart2: 'Développeur FullStack',
      heroIntroduction: 'Éliminez la complexité des passerelles traditionnelles et acheminez les données directement vers une infrastructure distribuée, garantissant ainsi performance et évolutivité.',
      heroViewWorkButton: 'Whatsapp',
      heroContactButton: 'Me contacter',
      heroImageAlt:
        'Illustration représentant Rekall ou un concept de développement',
      featuredProjectsTitle: 'Derniers projets',
      featuredProjectsDescription:
        "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
      projectCardViewProject: 'Voir le projet',
      projectCardViewCode: 'Voir le code',
      imageNotAvailable: 'Image bientôt disponible',
      mySkillsTitle: 'Mes Compétences',
      mySkillsDescription:
        "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
    },
    blogPage: {
      pageTitle: 'Rekall',
      pageDescription:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      title: 'Blog',
      description:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      comingSoon:
        'Les articles de blog apparaîtront ici bientôt. Revenez plus tard !',
      heroImageAlt: "Image de couverture pour l'article : ",
      publishedOn: 'Publié le : ',
      readMore: 'Lire la suite',
      readingTimeSuffix: 'min de lecture',
      searchPlaceholder: 'Rechercher des articles...',
      filterByTagButtonLabel: 'Filtrer par tag',
      noTagFound: 'Aucun tag trouvé.',
      selectTagCommandPlaceholder: 'Rechercher un tag...',
      allTagsLabel: 'Tous les tags',
      noPostsFound: 'Aucun article trouvé.',
    },
    blogPost: {
      publishedOn: 'Publié le : ',
      updatedOn: 'Mis à jour le : ',
      heroImageAlt: "Image de couverture pour l'article : ",
      backToList: 'Retour à la liste des articles',
      readingTimeSuffix: 'min de lecture',
      relatedPostsTitle: 'Je te recommande aussi :',
      readMore: 'Lire la suite',
      editOnGithub: 'Proposer une modification sur GitHub',
    },
    toc: {
      title: "Sommaire de l'article",
    },
    contactPage: {
      pageTitle: 'Rekall',
      pageDescription:
        "Si vous souhaitez soumettre votre propre demande, le format est assez strict. Envoyez un courriel à contato@rekall.log.br avec un objet contenant le mot demande.",
      title: 'Me Contacter',
      description:
        "Si vous souhaitez soumettre votre propre demande, le format est assez strict. Envoyez un courriel à contato@rekall.log.br avec un objet contenant le mot demande.",

      formTitle: 'Envoyer un message',
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Envoyer',
      firstNamePlaceholder: 'Ton prénom',

      lastNamePlaceholder: 'Ton nom de famille',
      emailPlaceholder: 'Ton adresse e-mail',
      messagePlaceholder: 'Ton message ici...',
      calendarTitle: 'Planifier un RDV',
      calendarDescription:
        'Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.',
      calendarButtonLabel: 'Voir mes disponibilités',
      calendarLinkLabel: 'Voir mon agenda',
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
      orSeparatorText: 'OU',
      toastSuccessMessageSent: 'Message envoyé avec succès !',
      toastErrorFailedToSend: "Échec de l'envoi du message.",
      toastErrorUnexpected: "Une erreur inattendue s'est produite.",
      toastErrorDetails: "Détails de l'erreur:",
      toastErrorValidationFailed: 'Validation du formulaire échouée.',
    },
    projectDetailPage: {
      backToProjects: 'Retour aux Projets',
      categoryLabel: 'Catégorie :',
      dateLabel: 'Date :',
      aboutTitle: 'À propos de ce projet',
      keyFeaturesTitle: 'Fonctionnalités Clés',
      galleryTitle: 'Galerie',
      challengesTitle: 'Défis Rencontrés',
      learningsTitle: 'Leçons Apprises',
      visitProjectButton: 'Visiter le Projet',
      viewCodeButton: 'Voir le Code',
    },
    projectsPage: {
      title: 'Projets',
      metaTitle: 'Rekall',
      metaDescription: 'Découvrez tous les projets.',
      noProjects: 'Aucun projet à afficher pour le moment.',
      noProjectsDescription:
        "Il semble que vous n'ayez pas encore de projets à afficher.",
    },
    notFoundPage: {
      pageTitle: 'Rekall',
      title: 'Oups ! Page Non Trouvée',
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
      homeLink: "Retourner à l'Accueil",
    },

    tipsPage: {
      title: 'Astuces',
      metaTitle: 'Rekall',
      metaDescription:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      description:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      noTips: 'Aucune astuce à afficher pour le moment.',
      readTip: "Lire l'astuce",
      backToList: 'Retour à la liste des astuces',
      featuredTips: 'Astuces recommandées',
      allTips: 'Toutes les astuces',
      tipsAvailable: 'astuces disponibles',
      tipAvailable: 'astuce disponible',
      editOnGithub: 'Modifier sur GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      firstProject: {
        title: 'Observability',
        description: 'Observability and monitoring',
        imageAltText: 'Observability',
        categoryText: 'Log',
        dateText: 'March 2023',
        detailedDescription:
          'Autonomous artificial intelligence systems designed to achieve specific goals by independently planning, executing, and refining their own action plans.',
        keyFeatures: {
          grafana: {
            title: 'Grafana',
            description: 'Consider utilizing open-source protocols like MCP, an emerging open standard that creates a unified, secure layer for LLMs to connect with data sources and tools seamlessly.',
          },
          influxdb: {
            title: 'InfluxDB',
            description: 'Consider utilizing open-source protocols like MCP, an emerging open standard that creates a unified, secure layer for LLMs to connect with data sources and tools seamlessly.',
          },
          telegraf: {
            title: 'Telegraf',
            description:
              'Retrieves external data (documents, databases) and feeds it to the model, ensuring highly relevant and accurate responses.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
      lastProject: {
        title: 'AI Agentic',
        description: 'Autonomous artificial intelligence',
        imageAltText: 'AI Agentic',
        categoryText: 'Web Application',
        dateText: 'January 2018',
        detailedDescription:
          'Autonomous artificial intelligence systems designed to achieve specific goals by independently planning, executing, and refining their own action plans.',
        keyFeatures: {
          ollama: {
            title: 'Ollama',
            description: 'Consider utilizing open-source protocols like MCP, an emerging open standard that creates a unified, secure layer for LLMs to connect with data sources and tools seamlessly.',
          },
          php: {
            title: 'PHP',
            description:
              'Retrieves external data (documents, databases) and feeds it to the model, ensuring highly relevant and accurate responses.',
          },
          telegram: {
            title: 'Telegram',
            description: 'Consider utilizing open-source protocols like MCP, an emerging open standard that creates a unified, secure layer for LLMs to connect with data sources and tools seamlessly.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
      secondProject: {
        title: 'Telemetry',
        description: 'Telemetry data logger.',
        imageAltText: 'Telemetry',
        categoryText: 'Internet of things',
        dateText: 'November 2020',
        detailedDescription:
          'Data acquisition featuring a flexible deployment model and a set of policies and procedures governing continuity, environment recovery, and stored data replication, thereby supporting IT applications to ensure their stability.',
        keyFeatures: {
          esp32: {
            title: 'ESP32',
            description: 'The project adapts to all screen sizes.',
          },
          freertos: {
            title: 'FreeRTOS',
            description: 'The project adapts to all screen sizes.',
          },
          supabase: {
            title: 'Supabase',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'Rekall',
      description:
        'Projects of integration.',
    },
    nav: {
      home: 'Home',
      tips: 'Tips',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    footer: {
      rights: 'Using the Astro Persona blog.',
    },
    homePage: {
      pageTitle: 'Rekall',
      pageDescription:
        'Projects of integration.',
      heroGreeting: "Hi, I'm Oliver",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'Network Analyst',
      heroIntroduction: 'Eliminate the complexity of traditional gateways and deliver data directly to a distributed infrastructure, ensuring performance and scalability.',
      heroViewWorkButton: 'Whatsapp',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Rekall or a development concept',
      featuredProjectsTitle: 'Latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      title: 'Blog',
      pageTitle: 'Rekall',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      title: 'Contact Me',
      description:
        "If you want to submit your own inquiry, the format is quite rigid. Mail to contato at rekall.log.br, with a Subject: line containing the word inquire.",
      pageTitle: 'Rekall',
      pageDescription:
        "If you want to submit your own inquiry, the format is quite rigid. Mail to contato at rekall.log.br, with a Subject: line containing the word inquire.",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'Projects',
      metaTitle: "Rekall",
      metaDescription: "Discover all of Rekall's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      title: 'Tips',
      metaTitle: 'Rekall',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
