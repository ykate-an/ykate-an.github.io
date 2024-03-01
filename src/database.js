import diveImg01 from "./assets";
import diveImg02 from "./assets/dive_2.jpeg";
import diveImg03 from "./assets/dive_3.jpeg";
import diveImg04 from "./assets/dive_4.jpeg";
import diveImg05 from "./assets/dive_5.jpeg";
import diveImg06 from "./assets/dive_6.jpeg";
import classImg01 from "./assets/class_1.png";
import classImg02 from "./assets/class_2.png";
import classImg03 from "./assets/class_3.png";
import classImg04 from "./assets/class_4.png";
import classImg05 from "./assets/class_5.png";
import ptImg01 from "./assets/Presentation_01.png";
import ptImg02 from "./assets/Presentation_02.png";
import ptImg03 from "./assets/Presentation_03.png";

const works = [
  {
    name: "WORK_WIZ_NAME",
    position: "WORK_WIZ_POSITION",
    period: "WORK_WIZ_PERIOD",
    description: "WORK_WIZ_DESC",
    tech: [
      "SKILL_JAVASCRIPT",
      "SKILL_REACT",
      "SKILL_NODE",
      "SKILL_HTML_CSS",
      "SKILL_AWS",
      "SKILL_GIT",
      "SKILL_DOCKER",
      "SKILL_GIT",
    ],
    projects: [
      {
        title: "WORK_WIZ_PROJECT_01_TITLE",
        period: "WORK_WIZ_PROJECT_01_PERIOD",
        description: "WORK_WIZ_PROJECT_01_DESC",
        role: "WORK_WIZ_PROJECT_01_ROLE",
        features: "WORK_WIZ_PROJECT_01_FEATURES",
        outcome: "WORK_WIZ_PROJECT_01_OUTCOME",
        tech: "WORK_WIZ_PROJECT_01_TECH",
        link: "https://wizlive.com/",
        details: [
          "WORK_WIZ_PROJECT_01_DETAILS_01",
          "WORK_WIZ_PROJECT_01_DETAILS_02",
          "WORK_WIZ_PROJECT_01_DETAILS_03",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_02_TITLE",
        period: "WORK_WIZ_PROJECT_02_PERIOD",
        description: "WORK_WIZ_PROJECT_02_DESC",
        role: "WORK_WIZ_PROJECT_02_ROLE",
        features: "WORK_WIZ_PROJECT_02_FEATURES",
        outcome: "WORK_WIZ_PROJECT_02_OUTCOME",
        tech: "WORK_WIZ_PROJECT_02_TECH",
        link: "https://www.wizlab.net",
        details: [
          "WORK_WIZ_PROJECT_02_DETAILS_01",
          "WORK_WIZ_PROJECT_02_DETAILS_02",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_03_TITLE",
        period: "WORK_WIZ_PROJECT_03_PERIOD",
        description: "WORK_WIZ_PROJECT_03_DESC",
        role: "WORK_WIZ_PROJECT_03_ROLE",
        features: "WORK_WIZ_PROJECT_03_FEATURES",
        outcome: "WORK_WIZ_PROJECT_03_OUTCOME",
        tech: "WORK_WIZ_PROJECT_03_TECH",
        link: "https://wizschool.io/",
        details: ["WORK_WIZ_PROJECT_03_DETAILS_01"],
      },
      {
        title: "WORK_WIZ_PROJECT_04_TITLE",
        period: "WORK_WIZ_PROJECT_04_PERIOD",
        description: "WORK_WIZ_PROJECT_04_DESC",
        role: "WORK_WIZ_PROJECT_04_ROLE",
        features: "WORK_WIZ_PROJECT_04_FEATURES",
        outcome: "WORK_WIZ_PROJECT_04_OUTCOME",
        tech: "WORK_WIZ_PROJECT_04_TECH",
        details: [
          "WORK_WIZ_PROJECT_04_DETAILS_01",
          "WORK_WIZ_PROJECT_04_DETAILS_02",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_05_TITLE",
        period: "WORK_WIZ_PROJECT_05_PERIOD",
        description: "WORK_WIZ_PROJECT_05_DESC",
        role: "WORK_WIZ_PROJECT_05_ROLE",
        features: "WORK_WIZ_PROJECT_05_FEATURES",
        outcome: "WORK_WIZ_PROJECT_05_OUTCOME",
        link: "https://www.donga.com/news/It/article/all/20200625/101680911/9",
        tech: "WORK_WIZ_PROJECT_05_TECH",
        details: [
          "WORK_WIZ_PROJECT_05_DETAILS_01",
          "WORK_WIZ_PROJECT_05_DETAILS_02",
          "WORK_WIZ_PROJECT_05_DETAILS_03",
          "WORK_WIZ_PROJECT_05_DETAILS_04",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_06_TITLE",
        period: "WORK_WIZ_PROJECT_06_PERIOD",
        description: "WORK_WIZ_PROJECT_06_DESC",
        role: "WORK_WIZ_PROJECT_06_ROLE",
        features: "WORK_WIZ_PROJECT_06_FEATURES",
        tech: "WORK_WIZ_PROJECT_06_TECH",
      },
      {
        title: "WORK_WIZ_PROJECT_07_TITLE",
        period: "WORK_WIZ_PROJECT_07_PERIOD",
        description: "WORK_WIZ_PROJECT_07_DESC",
        role: "WORK_WIZ_PROJECT_07_ROLE",
        features: "WORK_WIZ_PROJECT_07_FEATURES",
        outcome: "WORK_WIZ_PROJECT_07_OUTCOME",
        tech: "WORK_WIZ_PROJECT_07_TECH",
        link: "https://wizclass.com/",
        details: [
          "WORK_WIZ_PROJECT_07_DETAILS_01",
          "WORK_WIZ_PROJECT_07_DETAILS_02",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_08_TITLE",
        period: "WORK_WIZ_PROJECT_08_PERIOD",
        description: "WORK_WIZ_PROJECT_08_DESC",
        role: "WORK_WIZ_PROJECT_08_ROLE",
        features: "WORK_WIZ_PROJECT_08_FEATURES",
        outcome: "WORK_WIZ_PROJECT_08_OUTCOME",
        tech: "WORK_WIZ_PROJECT_08_TECH",
        details: [
          "WORK_WIZ_PROJECT_08_DETAILS_01",
          "WORK_WIZ_PROJECT_08_DETAILS_02",
          "WORK_WIZ_PROJECT_08_DETAILS_03",
          "WORK_WIZ_PROJECT_08_DETAILS_04",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_09_TITLE",
        period: "WORK_WIZ_PROJECT_09_PERIOD",
        description: "WORK_WIZ_PROJECT_09_DESC",
        role: "WORK_WIZ_PROJECT_09_ROLE",
        features: "WORK_WIZ_PROJECT_09_FEATURES",
        outcome: "WORK_WIZ_PROJECT_09_OUTCOME",
        tech: "WORK_WIZ_PROJECT_09_TECH",
        details: [
          "WORK_WIZ_PROJECT_09_DETAILS_01",
          "WORK_WIZ_PROJECT_09_DETAILS_02",
          "WORK_WIZ_PROJECT_09_DETAILS_03",
          "WORK_WIZ_PROJECT_09_DETAILS_04",
          "WORK_WIZ_PROJECT_09_DETAILS_05",
        ],
      },
      {
        title: "WORK_WIZ_PROJECT_10_TITLE",
        period: "WORK_WIZ_PROJECT_10_PERIOD",
        description: "WORK_WIZ_PROJECT_10_DESC",
        role: "WORK_WIZ_PROJECT_10_ROLE",
        features: "WORK_WIZ_PROJECT_10_FEATURES",
        outcome: "WORK_WIZ_PROJECT_10_OUTCOME",
        tech: "WORK_WIZ_PROJECT_10_TECH",
        link: "https://bangcl.co.kr/",
        details: [
          "WORK_WIZ_PROJECT_10_DETAILS_01",
          "WORK_WIZ_PROJECT_10_DETAILS_02",
          "WORK_WIZ_PROJECT_10_DETAILS_03",
          "WORK_WIZ_PROJECT_10_DETAILS_04",
        ],
      },
    ],
  },
  {
    name: "WORK_HACKERS_NAME",
    position: "WORK_HACKERS_POSITION",
    period: "WORK_HACKERS_PERIOD",
    description: "WORK_HACKERS_DESC",
    tech: ["SKILL_PHP", "SKILL_BOOTSTRAP", "SKILL_HTML_CSS", "SKILL_NGINX"],
    projects: [
      {
        title: "WORK_HACKERS_PROJECT_01_TITLE",
        period: "WORK_HACKERS_PROJECT_01_PERIOD",
        description: "WORK_HACKERS_PROJECT_01_DESC",
        role: "WORK_HACKERS_PROJECT_01_ROLE",
        features: "WORK_HACKERS_PROJECT_01_FEATURES",
        tech: "WORK_HACKERS_PROJECT_01_TECH",
        details: [
          "WORK_HACKERS_PROJECT_01_DETAILS_01",
          "WORK_HACKERS_PROJECT_01_DETAILS_02",
        ],
        appendix: [ptImg01, ptImg02, ptImg03],
      },
      {
        title: "WORK_HACKERS_PROJECT_02_TITLE",
        period: "WORK_HACKERS_PROJECT_02_PERIOD",
        description: "WORK_HACKERS_PROJECT_02_DESC",
        role: "WORK_HACKERS_PROJECT_02_ROLE",
        features: "WORK_HACKERS_PROJECT_02_FEATURES",
        tech: "WORK_HACKERS_PROJECT_02_TECH",
        details: ["WORK_HACKERS_PROJECT_02_DETAILS_01"],
      },
      {
        title: "WORK_HACKERS_PROJECT_03_TITLE",
        period: "WORK_HACKERS_PROJECT_03_PERIOD",
        description: "WORK_HACKERS_PROJECT_03_DESC",
        role: "WORK_HACKERS_PROJECT_03_ROLE",
        features: "WORK_HACKERS_PROJECT_03_FEATURES",
        tech: "WORK_HACKERS_PROJECT_03_TECH",
        details: [
          "WORK_HACKERS_PROJECT_03_DETAILS_01",
          "WORK_HACKERS_PROJECT_03_DETAILS_02",
        ],
      },
      {
        title: "WORK_HACKERS_PROJECT_04_TITLE",
        period: "WORK_HACKERS_PROJECT_04_PERIOD",
        description: "WORK_HACKERS_PROJECT_04_DESC",
        role: "WORK_HACKERS_PROJECT_04_ROLE",
        features: "WORK_HACKERS_PROJECT_04_FEATURES",
        tech: "WORK_HACKERS_PROJECT_04_TECH",
        details: ["WORK_HACKERS_PROJECT_04_DETAILS_01"],
      },
    ],
  },
];

const projects = [
  {
    title: "PROJECT_DIVE_TITLE",
    where: "PROJECT_DIVE_AT",
    period: "PROJECT_DIVE_PERIOD",
    description: "PROJECT_DIVE_DESC",
    role: "PROJECT_DIVE_ROLE",
    outcome: "PROJECT_DIVE_OUTCOME",
    link: "https://play.google.com/store/apps/details?id=com.gsb.dive",
    details: ["PROJECT_DIVE_DETAILS_01", "PROJECT_DIVE_DETAILS_02"],
    appendix: [
      diveImg01,
      diveImg02,
      diveImg03,
      diveImg04,
      diveImg05,
      diveImg06,
    ],
  },
  {
    title: "PROJECT_LECTURE_TITLE",
    where: "PROJECT_LECTURE_AT",
    period: "PROJECT_LECTURE_PERIOD",
    description: "PROJECT_LECTURE_DESC",
    role: "PROJECT_LECTURE_ROLE",
    outcome: "PROJECT_LECTURE_OUTCOME",
    details: ["PROJECT_LECTURE_DETAILS_01", "PROJECT_LECTURE_DETAILS_02"],
    appendix: [classImg01, classImg02, classImg03, classImg04, classImg05],
  },
  {
    title: "PROJECT_THEIF_TITLE",
    where: "PROJECT_THEIF_AT",
    period: "PROJECT_THEIF_PERIOD",
    description: "PROJECT_THEIF_DESC",
    role: "PROJECT_THEIF_ROLE",
    details: [
      "PROJECT_THEIF_DETAILS_01",
      "PROJECT_THEIF_DETAILS_02",
      "PROJECT_THEIF_DETAILS_03",
    ],
  },
];

const interests = [
  "INTEREST_READING",
  "INTEREST_COOKING",
  "INTEREST_SURFING",
  "INTEREST_SWIMMING",
];

const skills = {
  backend: ["SKILL_NODE", "SKILL_NGINX", "SKILL_PHP"],
  frontend: [
    "SKILL_REACT",
    "SKILL_JAVASCRIPT",
    "SKILL_HTML_CSS",
    "SKILL_FLUTTER",
  ],
  others: [
    "SKILL_DOCKER",
    "SKILL_AWS",
    "SKILL_GIT",
    "SKILL_NOTION",
    "SKILL_ZENKINS",
  ],
};
export { works, projects, interests, skills };