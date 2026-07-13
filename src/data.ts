import { AppItem, CategoryItem, BlogPost } from './types';

const BASE_CATEGORIES = [
  { name: 'Action', icon: 'Sword' },
  { name: 'Arcade', icon: 'Gamepad2' },
  { name: 'Sports', icon: 'Trophy' },
  { name: 'Video Editor', icon: 'Video' },
  { name: 'Music & Audio', icon: 'Music' },
  { name: 'Social', icon: 'MessageCircle' },
  { name: 'Tools', icon: 'Wrench' },
  { name: 'Productivity', icon: 'Clock' },
  { name: 'Adventure', icon: 'Compass' },
];

export const APPS_DATA: AppItem[] = [
  {
    id: "1",
    name: "CapCut",
    slug: "capcut",
    developer: "ByteDance",
    rating: "4.8",
    downloads: "100M",
    size: "298 MB",
    version: "3.5.0",
    category: "Video Editor",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://apkgstore.co/wp-content/uploads/2026/06/capcut-video-editor-icon-15093990.png",
    description: "All-in-one video editor with premium effects, modern filters, and professional-level transitions.",
    longDescription: "CapCut is the most downloaded all-in-one free video editor in the world. Designed specifically for content creators on TikTok, Instagram, and YouTube, it allows you to cut, reverse, and change the speed of your clips with absolute precision. This modified premium version (MOD) unlocks all VIP templates, cinematic transitions, advanced color filters, and video export in 4K resolution at 60 FPS without annoying watermarks. In addition, it features a powerful AI-powered automatic subtitle generator to save you hours of manual editing.",
    downloadUrl: "https://download.liteapks.dev/CapCut/CapCut%20v18.5.0%20b18500002%20(Pro).apk?token=TVRjNE16ZzFNamszTkE9PQ%3D%3D",
    videoUrl: "https://www.youtube.com/watch?v=kGgVfFhVvWk", // Added video URL
    screenshots: [
      "https://play-lh.googleusercontent.com/bVcUMymeJZIxp5p01Ttmc1FHp9Jy501K4lQHB3-OXXSVfNLE6tUa76PY1goZ-O_VBg",
      "https://play-lh.googleusercontent.com/tc7WpgpN90ij7FFkefwBwntXqPdS5TBCk0895Lf5-jB7rPIyz0FdH6OefiWNGlfpDTs",
      "https://play-lh.googleusercontent.com/WfwbtHi4g3vglzS6VgUxeRts_g_wgQ1tSa5DLQl91M4kOoTg8BQFsXi16J4FwIdIKTL_",
      "https://play-lh.googleusercontent.com/6BR---l84afm3uDl0Is1feusM2KO2C_UKek4QNEd70rTRvIa7EgGtBPvl_HVdFyLXg",
      "https://play-lh.googleusercontent.com/iv2O5J96YhJdfKNPZzafkGkrUqphn20Ivbjo0-sJzp6l-HJvrgJjmsknAHNft4DPjA",
      "https://play-lh.googleusercontent.com/lPWAbB_jZycmQg67n7QXxZ2zJRKCZ2lEs7uTwRlRBZIjTuBhJ_9IVsvS85U2BTG3Mhs",
      "https://play-lh.googleusercontent.com/kvAqso_fnZQyheK31RGHZvPhy9UwirOrToD6dYsKiGJo41gQ6OcpxanqB4dG3G2tAQ",
      "https://play-lh.googleusercontent.com/1iL8DEs-fViIMwtJ98yru4PNVgbhK6ndVUe-KwBaC5WVosmk6U_WXYq2Mup0q9K4ZvE",
      "https://play-lh.googleusercontent.com/x4jrQP9_Ev18Cv06R3jGe6pwzRQbL71dN59qnY9M6QYTX6DyEeFQ4LTE7ho6KuA-92L-",
      "https://play-lh.googleusercontent.com/D6F2g22GL-4mRjwAtHLrPmDr64O-4-L_EMsxVxy_K7uZFtTGaEeQKysd3Sx7Y4hxDoM",
      "https://play-lh.googleusercontent.com/V8hd0zQ3-gvG09fe_SijjDuOvhh4UIVox58CfVB-lwkc0RwvpAFLA3yvxTdOD5e3Nw",
      "https://play-lh.googleusercontent.com/V14aFGQw0xuV975eZBiCJfumTJTGEjsOQQx8Gt3LM_cOXh8Pam0UV8lfJiyN5wYJu8cV",
      "https://play-lh.googleusercontent.com/WwhB9aG1IzQoYH1ijHkZ_8z2hyWMc5r718Fm7VW56cvSRLQW9aHXhBjUe2fHfWrT_N_AOepkwBVG3GPsfE6Y"
    ],
    security: {
      checksum: "SHA-256: 9e107d9d372bb6826bd81d3542a419d6",
      secureToken: "Download via verified secure token",
      cloudStorage: "High-speed cloud storage with encrypted access"
    },
    tags: ["MOD", "Free", "No Watermark"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "2",
    name: "Subway Surfers",
    slug: "subway-surfers",
    developer: "SYBO Games",
    rating: "4.7",
    downloads: "1B",
    size: "135 MB",
    version: "3.24.1",
    category: "Arcade",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=80",
    description: "Dodge trains, run at full speed, and escape from the grumpy inspector with unlimited coins.",
    longDescription: "The ultimate endless runner game arrives at Look Mod Store with everything unlocked! Join Jake, Tricky, and Fresh in their exciting escape through the train tracks of the world. This premium MOD version includes infinite gold coins, unlimited resurrection keys, and all premium characters and surfboards unlocked from the first second. Enjoy colorful HD graphics optimized with an ultra-smooth refresh rate. Challenge your friends and dominate the global leaderboards with superior performance.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Subway_Surfers_v3.24.1_Mod.apk",
    videoUrl: "https://www.youtube.com/watch?v=tY2Z3bU0H4w", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: a1e87d9d372bc6826bd81d3542a419f1",
      secureToken: "Secure direct download in a single click",
      cloudStorage: "Dedicated premium SYBO servers"
    },
    tags: ["MOD", "Unlimited Coins", "Free"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "3",
    name: "Minecraft Pocket Edition",
    slug: "minecraft",
    developer: "Mojang Studios",
    rating: "4.9",
    downloads: "50M",
    size: "620 MB",
    version: "1.21.10",
    category: "Adventure",
    type: "Game",
    updatedAt: "09/07/2026",
    icon: "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/Minecraft-Pocket-Edition-APK-logo-media.webp&width=160",
    description: "Explore infinite worlds, build anything from the simplest home to the grandest castle.",
    longDescription: "Explore randomly generated worlds and build amazing things, from the simplest homes to the most majestic castles. Play in creative mode with unlimited resources, or delve into survival mode, where you will have to craft weapons and armor to defend yourself against dangerous creatures. Our special MOD version offers you completely free access to all premium aspects of the store, unlocked paid textures, and the ability to play on official multiplayer servers without license verification required.",
    downloadUrl: "https://go.onehost.io/aMacNBG5x6Cr",
    videoUrl: "https://www.youtube.com/watch?v=MmB9b5njVbA", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: c398e4d372fc5927ad81d3542a419f9",
      secureToken: "License unlocked and clean",
      cloudStorage: "Hosting on distributed premium network"
    },
    tags: ["Paid Subscription Unlocked", "Free", "MOD Menu"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "4",
    name: "Spotify Premium",
    slug: "spotify",
    developer: "Spotify AB",
    rating: "4.8",
    downloads: "500M",
    size: "65 MB",
    version: "8.9.22",
    category: "Music & Audio",
    type: "App",
    updatedAt: "11/07/2026",
    icon: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=150&auto=format&fit=crop&q=80",
    description: "Listen to millions of songs, albums, and original podcasts without commercial ads.",
    longDescription: "Enjoy the best music and podcasts without limits. With Spotify Premium MOD, you will have the ultimate experience without audio or video advertising interruptions. Unlock the ability to skip songs unlimitedly, play any track you want on-demand with extreme audio quality (320kbps), and activate the music search bar. This version is optimized to consume less battery and RAM, allowing you to browse playlists and artists instantly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Spotify_Premium_v8.9.22_Mod.apk",
    videoUrl: "https://www.youtube.com/watch?v=HUp3Xj7a86w", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: f1107d9e102bc6826bd81d3542a419ff",
      secureToken: "High encryption SSL Token",
      cloudStorage: "Ultra-fast global CDN file storage"
    },
    tags: ["MOD", "Premium Unlocked", "Free"],
    isRecommendation: true,
    isRecent: true
  },
  {
    id: "5",
    name: "Brawl Stars",
    slug: "brawl-stars",
    developer: "Supercell",
    rating: "4.6",
    downloads: "100M",
    size: "380 MB",
    version: "55.220",
    category: "Action",
    type: "Game",
    updatedAt: "08/07/2026",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80",
    description: "Fast-paced 3v3 multiplayer and mobile battle royale mode with unlocked brawlers.",
    longDescription: "Brawl Stars by Supercell is the action multiplayer game of the moment! Enjoy quick three-minute battles in a variety of exciting game modes. This MOD grants you free unlimited gems, unlimited boxes to open immediately, and spectacular gold skins to show off to all your rivals. Play on a 100% stable private server with automatic matchmaking so you never have to wait to jump into battle.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Brawl_Stars_v55.220_Mod.apk",
    videoUrl: "https://www.youtube.com/watch?v=J64o3j8Wl7c", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: b882e4d372fc5927ad81d3542a4192b3",
      secureToken: "High security anti-ban bypass",
      cloudStorage: "Dedicated Nulls private servers"
    },
    tags: ["MOD", "Unlimited Gems", "Free"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "6",
    name: "InstaPro",
    slug: "instapro",
    developer: "Sam MOD",
    rating: "4.7",
    downloads: "1B",
    size: "173.68 MB",
    version: "32.8.4",
    category: "Social",
    type: "App",
    updatedAt: "05/07/2026",
    icon: "https://apps2app.com/wp-content/uploads/2026/03/Insta-Pro-APK-150x150.png",
    description: "Watch millions of videos from around the world and download videos without watermarks.",
    longDescription: "InstaPro is an advanced modified version of the social media giant. It allows you to download any photo, video, or reel directly to your local gallery without watermarks. In addition, it removes all annoying sponsored ads from the main feed, unlocks high-fidelity media upload quality, and adds special privacy controls to view stories anonymously, hide typing status, and read messages without sending read receipts.",
    downloadUrl: "https://www.mediafire.com/file/gn9tjx0oui36cl4/InstaPro-v15.20-look-mod.vercel.app.apk/file",
    videoUrl: "https://youtube.com/watch?v=YXUF8lvSNyU", // Added video URL
    screenshots: [
      "https://play-lh.googleusercontent.com/hZ2Ob6d0MqLse2lIdNOGgl93H5y82uhX4hC6mWDUpdwK8LjXAunweDQZ6Hocy0riv4KX0lTIzKJz6lhRDV_BiHg=h305",
      "https://play-lh.googleusercontent.com/EvykD5h_-49MNu1JNfAyP0h9xMLceepomvT4DmZgJcy51a6My9G4XjxILgO7LCnEgfYElXY5tWnpmiaZMfMT=h305",
      "https://play-lh.googleusercontent.com/7h2Yo9e9ay8J4Uwt5WkhPCyfLQtI1LzcMbqopSbcGlUcnNS1gWtu9Q2jto2WvhgtB2roGwWyp7wsZudyHhqeLw=h305",
      "https://play-lh.googleusercontent.com/CxApBF84EDVWl6wUS1yeQcCdsOGaFgaI3lujcVqRuIUJiPcxGoPvy7br1D3f9XKW8VRT6hyHlZFFYR0ZbKSz4A=h305",
      "https://play-lh.googleusercontent.com/Jr_DSebXQK02c2iHuZ5thdxg5v3UsOY2wfE7LpaAuhpZxi-ZQeJfILU21zJODaZOg05ZqyzQ2m05nG42ald3=h305",
      "https://play-lh.googleusercontent.com/zYyKKicgmcvhFArPvVoqjUogVev1xsRkX8sa3HGuFJmJ-XiDljYfvinWCK6gzEXcYXruCIb-wbaxeWJnvM1_PA=h305"
    ],
    security: {
      checksum: "SHA-256: d241e4d372fc5927ad81d3542a4192dd",
      secureToken: "Direct clean download free of ads",
      cloudStorage: "Fast file storage"
    },
    tags: ["MOD", "Ad-Free", "Free"],
    isRecommendation: true,
    isRecent: false
  },
  {
    id: "7",
    name: "Netflix Premium App",
    slug: "netflix-premium",
    developer: "Netflix Inc.",
    rating: "4.5",
    downloads: "100M",
    size: "42 MB",
    version: "10.6.2",
    category: "Video Editor",
    type: "App",
    updatedAt: "04/07/2026",
    icon: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=150&auto=format&fit=crop&q=80",
    description: "Watch exclusive movies and TV shows in 4K HDR resolution without paying a monthly subscription.",
    longDescription: "Netflix Premium MOD offers you unlimited access to the entire original Netflix catalog, trending world TV series, award-winning documentaries, and stunning cinematic feature films. The best part is that it does not require registering a credit card or paying monthly fees. Stream simultaneously on up to 4 devices in UHD 4K resolution and Dolby Atmos surround sound. Includes multi-language options with perfect subtitles.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/Netflix_Premium_v10.6.2_Mod.apk",
    videoUrl: "https://www.youtube.com/watch?v=GV3HUDMQ-F8", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: e810e4d372fc5927ad81d3542a419ab7",
      secureToken: "Paywall bypass Mod",
      cloudStorage: "Mirror stream servers"
    },
    tags: ["Paid Subscription Unlocked", "Free", "Ultra HD 4K"],
    isRecommendation: false,
    isRecent: true
  },
  {
    id: "8",
    name: "8 Ball Pool MOD",
    slug: "8-ball-pool",
    developer: "Miniclip",
    rating: "4.7",
    downloads: "500M",
    size: "115 MB",
    version: "5.14.2",
    category: "Sports",
    type: "Game",
    updatedAt: "01/07/2026",
    icon: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=150&auto=format&fit=crop&q=80",
    description: "The number one multiplayer pool game with infinite guideline lines for perfect shots.",
    longDescription: "Play with friends and become a pool legend. Face competitors from all over the world in competitive 1v1 matches or participate in international tournaments to win exclusive trophies. This modified version provides the coveted long line guide that allows you to visualize the exact trajectory of the balls from start to finish, ensuring perfect bank shots and mastering the most difficult tables effortlessly.",
    downloadUrl: "https://lookmodstore-cdn.takano3d.com/apks/8_Ball_Pool_v5.14.2_Mod.apk",
    videoUrl: "https://www.youtube.com/watch?v=5U0QoT5K_Xo", // Added video URL
    screenshots: [
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80"
    ],
    security: {
      checksum: "SHA-256: 7810e4d372fc5927ad81d3542a419a42",
      secureToken: "Secure accounts without ban risk",
      cloudStorage: "Direct connection to Miniclip servers"
    },
    tags: ["MOD", "Long Line", "Free"],
    isRecommendation: false,
    isRecent: true
  }
];

export const CATEGORIES_DATA: CategoryItem[] = BASE_CATEGORIES.map(category => {
  const appsCount = APPS_DATA.filter(app => app.category === category.name).length;
  return {
    ...category,
    count: appsCount
  };
});

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Top 5 Android MODs of the Month",
    summary: "Discover modified apps and games with the most outstanding features unlocked completely free of charge.",
    content: "Android stands out over other mobile ecosystems for its versatility and freedom of installation. In this article, we delve into five exceptional modifications that will allow you to optimize your applications and expand your entertainment limits. From Spotify Premium to professional video editors without watermarks, we explain how to install them safely on your smartphone using the clean and pre-verified files available on Look Mod Store.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    date: "11 July, 2026",
    author: "Takano3D"
  },
  {
    id: "b2",
    title: "How to Safely Install an APK / OBB File",
    summary: "Step-by-step guide for beginners and advanced users on how to enable unknown sources without compromising your phone.",
    content: "Manual installation of APK files is a simple task but requires attention to certain critical security details. First, you must go to Settings > Security and enable 'Install applications from unknown sources'. In this guide, we show you how to use our integrated SHA-256 validator to confirm that no files have been tampered with, protecting your personal information at all times.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    date: "08 July, 2026",
    author: "Takano3D Team"
  }
];
