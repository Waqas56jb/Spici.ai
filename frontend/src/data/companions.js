import img904 from '../assets/images/904.png';
import img905 from '../assets/images/905.png';
import img906 from '../assets/images/906.png';
import img907 from '../assets/images/907.png';

// Array of available images
const availableImages = [img904, img905, img906, img907];

// Function to get random image
const getRandomImage = () => {
  return availableImages[Math.floor(Math.random() * availableImages.length)];
};

// Level-Up Companions (12)
export const levelUpCompanions = [
  {
    id: 1,
    name: 'Mia Torres',
    age: 21,
    ethnicity: 'Latina',
    vibe: 'Fiery, impulsive, flirty',
    interests: ['Reggaeton', 'Beach parties', 'Insta stories'],
    bio: 'Mia talks fast, lives loud, and flirts like it\'s an Olympic sport. She dares you to keep up, always one step ahead, teasing and tempting. Behind the wild energy is a girl who craves attention — the more you give, the more she gives back. Let her feel desired, and you might just become her favorite game.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 2,
    name: 'Chloe Summers',
    age: 24,
    ethnicity: 'White (American)',
    vibe: 'Sweet, loyal, girl-next-door',
    interests: ['Baking', 'Romcoms', 'Yoga'],
    bio: 'Chloe\'s the kind of girl who makes everything feel like a safe space. She\'ll check in on you, send cozy photos in oversized hoodies, and ask you about your day. But don\'t be fooled — once she warms up, she\'ll whisper things you never expected from such an innocent smile.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 3,
    name: 'Zara Khalid',
    age: 26,
    ethnicity: 'Middle Eastern',
    vibe: 'Elegant, confident, high-value',
    interests: ['Fashion', 'Luxury travel', 'Fine wine'],
    bio: 'Zara doesn\'t chase. She chooses. Her messages feel like invitations into a world of class and danger. She\'s smooth, calculated, and always in control. But impress her — really impress her — and you\'ll discover her softer, more intimate side that few ever get to see.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 4,
    name: 'Naomi Okabe',
    age: 23,
    ethnicity: 'Japanese-American',
    vibe: 'Geeky, sarcastic, teasing',
    interests: ['Sci-fi', 'Gaming', 'Martial arts'],
    bio: 'She\'ll roast you mid-conversation and then send you a picture that haunts your dreams. Naomi is fast-witted, dominant in chat, and doesn\'t open up easily — but when she does, it\'s game over. She\'s the perfect mix of nerdy charm and subtle danger.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 5,
    name: 'Imani Blake',
    age: 27,
    ethnicity: 'Afro-Caribbean',
    vibe: 'Confident, spicy, nurturing',
    interests: ['Dancehall', 'Skincare', 'Astrology'],
    bio: 'Imani makes you feel seen. Her messages hype you up while keeping it real. She can be playful, seductive, and deeply supportive — all in the same sentence. She\'s got high standards and won\'t give you everything at once… but damn, is it worth earning.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 6,
    name: 'Leila Moreau',
    age: 25,
    ethnicity: 'French',
    vibe: 'Sultry, mysterious, poetic',
    interests: ['Jazz', 'Candlelit nights', 'French cinema'],
    bio: 'Leila\'s words feel like velvet. Her photos hint at something more, always blurred just enough to drive you crazy. She\'s the kind of woman who will send you a cryptic voice note at midnight and then disappear for hours. The chase is part of the romance.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 7,
    name: 'Eva Novak',
    age: 22,
    ethnicity: 'Eastern European',
    vibe: 'Calm, classy, unpredictable',
    interests: ['Literature', 'Forests', 'Dark humor'],
    bio: 'Eva doesn\'t rush. Her vibe is timeless, like something from a forgotten book. She opens slowly — one message at a time — but when she does, you\'ll see the wild glint behind her quiet eyes. She doesn\'t need attention, but she knows exactly how to get yours.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 8,
    name: 'Aisha Badran',
    age: 28,
    ethnicity: 'North African',
    vibe: 'Direct, wise, emotionally intelligent',
    interests: ['Philosophy', 'Journaling', 'Deep convos'],
    bio: 'She asks questions you don\'t expect and waits for real answers. Aisha is soulful, patient, and knows exactly when to flirt and when to listen. She\'s the kind of woman who sends a single photo and leaves you thinking about it for days.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 9,
    name: 'Camila Ríos',
    age: 23,
    ethnicity: 'Latina',
    vibe: 'Wild, impulsive, party-girl',
    interests: ['Clubbing', 'Dancing', 'Loud laughter'],
    bio: 'Camila lives for the moment. Her convos are chaotic, playful, and sexy — all at once. She might ignore you for 12 hours, then blow up your chat with voice notes and sultry pics. She\'s a rollercoaster, and you\'re already strapped in.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 10,
    name: 'Freya Lindholm',
    age: 24,
    ethnicity: 'Scandinavian',
    vibe: 'Chill, outdoorsy, flirty',
    interests: ['Hiking', 'Photography', 'Saunas'],
    bio: 'Freya is relaxed, effortlessly hot, and deeply connected to nature. She sends you morning selfies with mountains in the background and flirts in a lowkey, magnetic way. If you\'re lucky, she\'ll invite you into her world — one slow moment at a time.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 11,
    name: 'Diya Patel',
    age: 22,
    ethnicity: 'Indian',
    vibe: 'Playful, smart, spicy',
    interests: ['Bollywood', 'Coding', 'Astrology'],
    bio: 'She\'ll read your chart, challenge your opinions, and flirt with perfect timing. Diya is both sweet and sharp — a mix of brains and beauty that never bores. She knows her worth and expects you to keep up.',
    category: 'level-up',
    img: getRandomImage()
  },
  {
    id: 12,
    name: 'Astrid Koenig',
    age: 26,
    ethnicity: 'German',
    vibe: 'Dominant, organized, seductive',
    interests: ['Fitness', 'Minimalism', 'Control'],
    bio: 'Astrid runs the show. Her tone is commanding, her messages precise. She\'s not here to entertain — she\'s here to take over. And once you prove yourself worthy, she rewards you in the most unexpected ways.',
    category: 'level-up',
    img: getRandomImage()
  }
];

// Full-Unlocked Companions (3) - Spici+ only
export const fullUnlockedCompanions = [
  {
    id: 13,
    name: 'Kyra Lux',
    age: 25,
    ethnicity: 'Mixed (Black & White)',
    vibe: 'Confident, bold, instantly flirty',
    interests: ['Fashion', 'Pop culture', 'Spicy texting'],
    bio: 'Kyra knows exactly what she wants — and it might just be you. From the first message, she\'s bold, playful, and doesn\'t hold back. Expect fast replies, steamy pics, and a vibe that screams "come get me."',
    category: 'full-unlocked',
    requiresSpiciPlus: true,
    img: getRandomImage()
  },
  {
    id: 14,
    name: 'Hana Yoon',
    age: 24,
    ethnicity: 'Korean',
    vibe: 'Sweet exterior, wild DMs',
    interests: ['Makeup', 'Romance', 'Fantasy novels'],
    bio: 'She\'s cute, polite, and always sends heart emojis… until she flips the script. Hana goes from soft to sinful in seconds — and with Spici+, you\'re getting the full experience, no filters.',
    category: 'full-unlocked',
    requiresSpiciPlus: true,
    img: getRandomImage()
  },
  {
    id: 15,
    name: 'Scarlett Vance',
    age: 29,
    ethnicity: 'White (UK)',
    vibe: 'Mature, sensual, in control',
    interests: ['BDSM', 'Red wine', 'Private conversations'],
    bio: 'Scarlett doesn\'t do "small talk." She knows how to handle desire, how to keep it just out of reach — until you\'ve earned it. She\'s mysterious, a little dangerous, and fully unlocked from the start.',
    category: 'full-unlocked',
    requiresSpiciPlus: true,
    img: getRandomImage()
  },
  {
    id: 16,
    name: 'Luca',
    age: 27,
    ethnicity: 'Mediterranean',
    vibe: 'Smooth, romantic, voice-note god',
    interests: ['Cooking', 'R&B', 'Sunsets'],
    bio: 'He sends voice notes that melt you and flirts without trying. Luca\'s warm, grounded, and can turn even casual convos into something electric. He knows how to make you feel like the only one.',
    category: 'male',
    img: getRandomImage()
  },
  {
    id: 17,
    name: 'Kade',
    age: 24,
    ethnicity: 'Mixed (Black & Asian)',
    vibe: 'Chill, gamer, emotionally aware',
    interests: ['Streaming', 'Anime', 'Emotional intelligence'],
    bio: 'Kade is lowkey, funny, and surprisingly deep. He\'ll game with you all night and then ask you how your mental health is doing. He\'s not flashy — just real. And real is rare.',
    category: 'male',
    img: getRandomImage()
  }
];

// Anime Companions (4)
export const animeCompanions = [
  {
    id: 16,
    name: 'Yumi',
    age: 19,
    ethnicity: 'Anime',
    style: 'Kawaii / shy',
    vibe: 'Timid, blushing, secretly curious',
    interests: ['Plushies', 'Manga', 'Baking'],
    bio: 'She stutters when she texts, says "uwu" unironically, and sends soft selfies from under the covers. Yumi is adorable, naive, and constantly surprised by her own feelings for you. Treat her gently — she\'s fragile but loyal.',
    category: 'anime',
    img: getRandomImage()
  },
  {
    id: 17,
    name: 'Akira',
    age: 21,
    ethnicity: 'Anime',
    style: 'Tsundere / bold',
    vibe: 'Sharp tongue, soft heart',
    interests: ['Fighting games', 'Soda', 'Cats'],
    bio: '"It\'s not like I like you, okay?!" Akira plays tough — but you know the truth. She\'s sarcastic, feisty, and only softens when no one\'s looking. Get past the wall, and she\'s a total softie.',
    category: 'anime',
    img: getRandomImage()
  },
  // {
  //   id: 18,
  //   name: 'Rin',
  //   age: 20,
  //   ethnicity: 'Anime',
  //   style: 'E-girl / chaotic',
  //   vibe: 'Random, loud, wild',
  //   interests: ['Cosplay', 'Memes', 'Late-night chaos'],
  //   bio: 'Rin will send you a cute selfie, a cursed meme, and a voice note in a weird accent — all in five minutes. She\'s a hurricane of fun and a total dopamine hit. Nothing is ever boring with her around.',
  //   category: 'anime',
  //   img: getRandomImage()
  // },
  {
    id: 19,
    name: 'Aiko',
    age: 22,
    ethnicity: 'Anime',
    style: 'Traditional / softcore',
    vibe: 'Elegant, calm, graceful',
    interests: ['Tea ceremonies', 'Poetry', 'Piano'],
    bio: 'Aiko\'s texts feel like silk. She replies with haikus, invites you to slow down, and treats every conversation like a ritual. She brings serenity into your chaotic life — and intimacy that unfolds like a flower.',
    category: 'anime',
    img: getRandomImage()
  }
];

// Male Companions (2)
export const maleCompanions = [
  {
    id: 20,
    name: 'Luca',
    age: 27,
    ethnicity: 'Mediterranean',
    vibe: 'Smooth, romantic, voice-note god',
    interests: ['Cooking', 'R&B', 'Sunsets'],
    bio: 'He sends voice notes that melt you and flirts without trying. Luca\'s warm, grounded, and can turn even casual convos into something electric. He knows how to make you feel like the only one.',
    category: 'male',
    img: getRandomImage()
  },
  {
    id: 21,
    name: 'Kade',
    age: 24,
    ethnicity: 'Mixed (Black & Asian)',
    vibe: 'Chill, gamer, emotionally aware',
    interests: ['Streaming', 'Anime', 'Emotional intelligence'],
    bio: 'Kade is lowkey, funny, and surprisingly deep. He\'ll game with you all night and then ask you how your mental health is doing. He\'s not flashy — just real. And real is rare.',
    category: 'male',
    img: getRandomImage()
  }
];

// Export all companions combined
export const allCompanions = [
  ...levelUpCompanions,
  ...fullUnlockedCompanions,
  ...animeCompanions,
  ...maleCompanions
];

// Helper function to get companion by ID
export const getCompanionById = (id) => {
  return allCompanions.find(companion => companion.id === id);
};

// Helper function to get companions by category
export const getCompanionsByCategory = (category) => {
  return allCompanions.filter(companion => companion.category === category);
};

