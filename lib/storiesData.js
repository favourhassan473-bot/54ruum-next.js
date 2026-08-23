const FIRST_NAMES = [
  "Norkor",
  "Kimberly",
  "Ahmad",
  "Islam",
  "Mohammed",
  "Tonia",
  "Amara",
  "Thabang",
  "Rija",
  "Hamza",
  "Kwesi",
  "Zola",
  "Sena",
  "Yassine",
  "Ifeoma",
  "Chidi",
  "Zanele",
  "Kofi",
  "Aisha",
  "Tendai",
  "Nia",
  "Baraka",
  "Lerato",
  "Sipho",
  "Fatima",
  "Kwame",
  "Adaeze",
  "Naledi",
  "Omar",
  "Amina",
  "Chinedu",
  "Wanjiru",
  "Tarek",
  "Ngozi",
  "Themba",
  "Halima",
  "Kojo",
  "Zuri",
  "Ibrahim",
  "Folake",
];

const LAST_NAMES = [
  "Traikia",
  "Nahi",
  "Parker",
  "Okafor",
  "Mensah",
  "Diallo",
  "Haile",
  "Mwangi",
  "Abara",
  "Nwosu",
  "Dube",
  "Osei",
  "Camara",
  "Bello",
  "Nkosi",
  "Adeyemi",
  "Toure",
  "Keita",
  "Chukwu",
  "Moyo",
  "Sow",
  "Abdi",
  "Fofana",
  "Ndlovu",
  "Achebe",
  "Sarr",
  "Balogun",
  "Musa",
  "Njoroge",
  "Tesfaye",
];

const COUNTRIES = [
  "Ghanaian",
  "South African",
  "Egyptian",
  "Algerian",
  "Nigerian",
  "Kenyan",
  "Moroccan",
  "Senegalese",
  "Ethiopian",
  "Tanzanian",
  "Ugandan",
  "Ivorian",
  "Tunisian",
  "Zimbabwean",
  "Rwandan",
  "Malian",
  "Cameroonian",
  "Angolan",
  "Zambian",
  "Namibian",
  "Malagasy",
  "Togolese",
];

const CITIES = [
  "Accra",
  "Lagos",
  "Nairobi",
  "Cairo",
  "Algiers",
  "Dakar",
  "Kigali",
  "Kampala",
  "Lusaka",
  "Windhoek",
  "Gaborone",
  "Tunis",
  "Casablanca",
  "Addis Ababa",
  "Dar es Salaam",
  "Harare",
  "Bamako",
  "Yaoundé",
  "Luanda",
];

const ROLES = [
  "Photographer",
  "Documentary Photographer",
  "Portrait Photographer",
  "Street Photographer",
  "Visual Artist",
  "Photojournalist",
];

const SUBJECTS = [
  "chasing scale and silence",
  "the last boatyards of the old port",
  "grief, buoyancy, and the color red",
  "memory, belief and everyday life",
  "studio light as a language of pride",
  "portraiture as inheritance",
  "the quiet hour before the market opens",
  "what gets left behind in a move",
  "coastlines that keep changing shape",
  "the architecture of waiting rooms",
  "girlhood in a fishing town",
  "the last generation of tailors",
  "rooftop gardens above the noise",
  "faith and football on Sunday mornings",
  "a family archive rebuilt from memory",
  "the border towns nobody photographs",
  "night shifts and neon light",
  "elders who still speak the old dialect",
  "children mapping their own neighborhoods",
  "the color of dust after rain",
];

const OPENING_QUOTES = [
  "I've always been fascinated by the power of an image. It can transport you into a reality removed from your own and elicit an emotional response.",
  "I'm not trying to make things look beautiful. I'm trying to make them look true.",
  "Every frame is a small negotiation between what's really there and what I want you to notice first.",
  "My camera is the excuse. The real work is the conversation before I ever lift it to my eye.",
  "I grew up watching my mother pose for photos she never got to keep. This work is partly for her.",
  "The city changes so fast that a photograph becomes proof something existed at all.",
];

const WRITERS = [
  "KMÒ",
  "Editorial Desk",
  "Amaka O.",
  "The 54Journal Team",
  "Boluwatife A.",
];
const CURATORS = ["guvnor", "The Ruum Desk", "Selasi K.", "Editorial Board"];

// Each answer template is a function so it can be personalized per photographer.
const QA_TEMPLATES = [
  {
    question: "How did you get started in photography?",
    answer: (s) =>
      `Cameras were always around growing up in ${s.city}, but it wasn't until a relative handed me an old camera as a teenager that it clicked. I was fascinated by the power of an image — its ability to transport you into a reality removed from your own and elicit an emotional response. I haven't put a camera down since.`,
  },
  {
    question: "How would you describe yourself?",
    answer: (s) =>
      `I'd describe myself as inquisitive and multi-passionate, with a love for travel and for paying attention to things other people walk past. I feel like I've lived several creative lives already — I've tried my hand at design, at writing, at small businesses — and photography is where all of it finally landed.`,
  },
  {
    question: "What are the main themes that inspire your photography?",
    answer: (s) =>
      `I'm drawn to ${SUBJECTS[(s.seed * 3) % SUBJECTS.length]}. I hope my photographs put the viewer inside the exact moment they were made, and help them understand why the photograph needed to exist in the first place.`,
  },
  {
    question: "What moment in your career are you most proud of?",
    answer: (s) =>
      `Completing a long-term project documenting everyday life in ${s.city} stands out. It had more moving parts than anything I'd done before, and I had to adjust constantly — new environments, new relationships to build from nothing. It eventually became a small exhibition, and seeing people from the neighborhood come see themselves on a wall was the whole point.`,
  },
  {
    question: "What is the biggest challenge you've faced as a photographer?",
    answer: (s) =>
      `Building the confidence to approach strangers. Documentary work asks you to be an observer, but it also asks you to connect with the people in front of your lens. Initiating that connection can be nerve-racking, but I've learned that pushing through the awkward first minute is almost always worth it — people warm up, and that's when the real photograph happens.`,
  },
  {
    question: "What type of photography do you specialise in?",
    answer: (s) =>
      `${s.role} is where I keep coming back to, mostly because it lets me combine the two things I love most: asking people questions, and photographing them while they answer. My style is still evolving, and I like that it hasn't settled yet.`,
  },
  {
    question: "What is your unique technical or visual approach?",
    answer: (s) =>
      `I'm drawn to movement, rich skin tones, and unusual light. I lean on intuition more than a fixed process — I watch how a body is composed within a frame, and I love the moment when the camera disappears completely from the subject's awareness.`,
  },
  {
    question: (s) => `How's the photography and art scene in ${s.country}?`,
    answer: (s) =>
      `It has a long history, and younger photographers are increasingly able to make a real career out of it, which is genuinely new. There's real breadth too — commercial and editorial work sitting right alongside fine art and documentary practice, often from people who trained each other informally.`,
  },
  {
    question:
      "Which photographers or institutions do you feel your work aligns with?",
    answer: (s) =>
      `I'd love to work with organisations that platform work like mine at scale, and I look up to several photographers from across the continent whose archives feel like they're building something bigger than any single career.`,
  },
  {
    question: "What's next for you?",
    answer: (s) =>
      `More long-form work, ideally something that takes over a year to finish properly. I'd rather under-promise on speed and get the access and trust a real project needs.`,
  },
];

const MID_QUOTES = [
  (s) =>
    `"The project had many moving parts, and I had to adjust quickly — especially in a new environment and with a language barrier."`,
  (s) =>
    `"Documentary photography allows you to be an observer, but it also requires you to connect with the people in front of the lens."`,
  (s) =>
    `"I lean into intuition, watch how the body is composed within the frame, and love the moment the camera disappears from view."`,
  (s) =>
    `"A photograph is proof that something existed, in a city that doesn't always slow down long enough to remember it."`,
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildStories(count) {
  const list = [];
  const usedSlugs = new Set();
  const baseDate = new Date("2026-08-01T00:00:00Z");

  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName = LAST_NAMES[(i * 7) % LAST_NAMES.length];
    const country = COUNTRIES[(i * 3) % COUNTRIES.length];
    const city = CITIES[(i * 4) % CITIES.length];
    const role = ROLES[i % ROLES.length];
    const subject = SUBJECTS[(i * 5) % SUBJECTS.length];
    const openingQuote = OPENING_QUOTES[i % OPENING_QUOTES.length];

    let slug = slugify(`${firstName}-${lastName}`);
    if (usedSlugs.has(slug)) {
      slug = `${slug}-${i}`;
    }
    usedSlugs.add(slug);

    const published = new Date(baseDate.getTime() - i * 86400000);
    const publishedStr = published
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();

    const storyCtx = {
      firstName,
      lastName,
      country,
      city,
      role,
      seed: 200 + i,
    };

    // Rotate through the question pool so every story gets 7 questions,
    // but not always the same 7 or in the same order.
    const offset = i % QA_TEMPLATES.length;
    const qa = [];
    for (let q = 0; q < 7; q++) {
      const template = QA_TEMPLATES[(offset + q) % QA_TEMPLATES.length];
      qa.push({
        question:
          typeof template.question === "function"
            ? template.question(storyCtx)
            : template.question,
        answer: template.answer(storyCtx),
      });
    }

    list.push({
      slug,
      firstName,
      lastName,
      country,
      city,
      role,
      seed: 200 + i,
      gallerySeeds: [300 + i, 400 + i, 500 + i],
      title: `${firstName} ${lastName}: ${subject
        .charAt(0)
        .toUpperCase()}${subject.slice(1)}`,
      tagline: `${country} ${role.toLowerCase()}`,
      readTime: `${9 + (i % 12)} MINS READ`,
      published: publishedStr,
      openingQuote,
      bio: `${firstName} ${lastName} is a ${country.toLowerCase()} ${role.toLowerCase()} based in ${city} whose practice centres on the everyday lives of people who don't usually get to choose how they're seen. Their work is shaped by an interest in quiet moments, movement, colour, and pattern, and draws on a background that mixes formal training with a lot of self-teaching.`,
      qa,
      midQuote: MID_QUOTES[i % MID_QUOTES.length](storyCtx),
      credits: {
        photography: `${firstName} ${lastName}`,
        text: WRITERS[i % WRITERS.length],
        curation: CURATORS[i % CURATORS.length],
      },
    });
  }

  return list;
}

const stories = buildStories(500);

export function getAllStories() {
  return stories;
}

// Lightweight version for listing/grid pages — leaves out the long-form
// Q&A/bio/credits content that only the individual story page needs.
export function getStoryCards() {
  return stories.map(
    ({ slug, firstName, lastName, country, role, seed, tagline }) => ({
      slug,
      firstName,
      lastName,
      country,
      role,
      seed,
      tagline,
    }),
  );
}

export function getStoryBySlug(slug) {
  return stories.find((s) => s.slug === slug);
}

export function getFeaturedStories(count = 5) {
  return getStoryCards().slice(0, count);
}

export default stories;
