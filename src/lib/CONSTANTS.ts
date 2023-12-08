export const MUHAMMAD: String[] = ["H", "I", ","];
export const ARSALLAN: String[] = ["A", "R", "S", "A", "'", "L", "L", "A", "N"];
export const SHAHAB: String[] = ["H", "E", "R", "E", "!"];

export const MUHAMMAD_ARSALLAN: String[] = [...MUHAMMAD, ...ARSALLAN];

export const MUHAMMAD_ARSALLAN_SHAHAB: String[] = [
  ...MUHAMMAD_ARSALLAN,
  ...SHAHAB,
];

// const ABOUT_ME_STRING =
//   "Passionate about orchestrating digital innovation with the MERN stack, I am Arsallan, a seasoned software architect. My expertise in weaving the power of Next.js into every project ensures not just functionality but a harmonious user experience. Let's craft a digital narrative that transcends expectations.";

export const ABOUT_ME_STRING =
  "A sophomore software developer, full stack, weaving the power of Next.js into every project ensures not just functionality but a fluid user experience. reach out to me at";

export const ABOUT_ME: String[] = ABOUT_ME_STRING.split("");

export const sentences = [
  [
    { word: "a", color: "bg-gray-900" },
    { word: "software", color: "bg-gray-700" },
    { word: "engineer", color: "bg-gray-500" },
  ],
  [
    { word: "a full", color: "bg-[#0e0218]" },
    { word: "stack", color: "bg-[#480878]" },
    { word: "developer", color: "bg-[#810ed8]" },
  ],
  [
    { word: "passionate", color: "bg-[#190009]" },
    { word: "frontend", color: "bg-[#7d022b]" },
    { word: "developer", color: "bg-[#e2044d]" },
  ],
  [
    //generate for backend developer in 3 words and 3 colors
    { word: "java, nodejs", color: "bg-[#0f1801]" },
    { word: "backend", color: "bg-[#4c7a05]" },
    { word: "developer", color: "bg-[#88dc09]" },
  ],
  [
    { word: "mern", color: "bg-[#000814]" },
    { word: "stack", color: "bg-[#003380]" },
    { word: "developer", color: "bg-[#005ce6]" },
  ],
];

export type Sentence = {
  word: string;
  color: string;
};

export type Sentences = Sentence[];
