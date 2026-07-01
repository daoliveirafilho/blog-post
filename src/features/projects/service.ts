// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderLast from '@/assets/placeholderLast.webp';
import placeholderFirst from '@/assets/placeholderFirst.webp';
import placeholderSecond from '@/assets/placeholderSecond.webp';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'lastProject', // Unique identifier for translations
    slug: 'last-project', // Used in the URL
    imageUrl: placeholderLast, // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['Grafana', 'InfluxDB', 'Telegraf'], // Generic tags
    category: 'Enregistrer', // Generic category
    date: '2023-03-12', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'grafana' },
      { id: 'influxdb' },
      { id: 'telegraf' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'grafana', name: 'Grafana' },
      { id: 'influxdb', name: 'InfluxDB' },
      { id: 'telegraf', name: 'Telegraf' },
    ],
  },
  {
    id: 'firstProject', // Unique identifier for translations
    slug: 'first-project', // Used in the URL
    imageUrl: placeholderFirst, // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['Ollama', 'PHP', 'Telegram'], // Generic tags
    category: 'Application Web', // Generic category
    date: '2018-01-02', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'ollama' },
      { id: 'php' },
      { id: 'telegram' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'ollama', name: 'Ollama' },
      { id: 'php', name: 'PHP' },
      { id: 'telegram', name: 'Telegram' },
    ],
  },
  {
    id: 'secondProject', // Unique identifier for translations
    slug: 'second-project', // Used in the URL
    imageUrl: placeholderSecond, // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['ESP32', 'FreeRTOS', 'Supabase'], // Generic tags
    category: 'Internet of Thinks', // Generic category
    date: '2020-11-10', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'esp32' },
      { id: 'freertos' },
      { id: 'supabase' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'esp32', name: 'ESP32' },
      { id: 'freertos', name: 'FreeRTOS' },
      { id: 'supabase', name: 'Supabase' },
    ],
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'uiUxDesign',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'Server',
    technologies: [
      { id: 'gnubash', name: 'Gnu Bash' },
      { id: 'influxdb', name: 'InfluxDB' },
      { id: 'postgresql', name: 'Postgresql' },
      { id: 'redis', name: 'Redis' },
      { id: 'sqlite', name: 'Sqlite' },
    ],
  },
  {
    id: 'frontendDevelopment',
    iconName: 'Languages',
    technologies: [
      { id: 'astro', name: 'Astro' },
      { id: 'css3', name: 'CSS' },
      { id: 'html5', name: 'HTML' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
