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
    downloadUrl: "https://cdn901.onehost.io/2023/Capcut_18.6.0_1783704691_latestmodapks.com.apk",
    videoUrls: ["https://youtu.be/13dMTwMmpQU?si=GDJ0cD4v9OIlrRkV"], // Converted to array support
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
    developer: "Imaanshu N",
    rating: "4.7",
    downloads: "1B",
    size: "135 MB",
    version: "3.24.1",
    category: "Arcade",
    type: "Game",
    updatedAt: "10/07/2026",
    icon: "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/subwaysurf.png&width=160",
    description: "Dodge trains, run at full speed, and escape from the grumpy inspector with unlimited coins.",
    longDescription: "The ultimate endless runner game arrives at Look Mod Store with everything unlocked! Join Jake, Tricky, and Fresh in their exciting escape through the train tracks of the world. This premium MOD version includes infinite gold coins, unlimited resurrection keys, and all premium characters and surfboards unlocked from the first second. Enjoy colorful HD graphics optimized with an ultra-smooth refresh rate. Challenge your friends and dominate the global leaderboards with superior performance.",
    downloadUrl: "https://cdn800.onehost.io/2023/Subway_Surfers_3.66.0_1783939501_latestmodapks.com.apk",
    videoUrls: ["https://youtu.be/o-3sDXTaiEY?si=FZUMMsrE6EkPUrqw"], // Converted to array support
    screenshots: [
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers1.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers2.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers3.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers4.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers5.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Subway-Surfers.webp"
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
    videoUrls: ["https://www.youtube.com/watch?v=MmB9b5njVbA"], // Converted to array support
    screenshots: [
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/minecraft-pocket-edition-1-media.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/minecraft-pocket-edition-2-media.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/minecraft-pocket-edition-3-media.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/minecraft-pocket-edition-4-media.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2024/08/minecraft-pocket-edition-5-media.webp"
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
    icon: "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-thumbnail-18615853.webp",
    description: "Listen to millions of songs, albums, and original podcasts without commercial ads.",
    longDescription: "Enjoy the best music and podcasts without limits. With Spotify Premium MOD, you will have the ultimate experience without audio or video advertising interruptions. Unlock the ability to skip songs unlimitedly, play any track you want on-demand with extreme audio quality (320kbps), and activate the music search bar. This version is optimized to consume less battery and RAM, allowing you to browse playlists and artists instantly.",
    downloadUrl: "https://dl.modded-1.com/v3/2Mml",
    videoUrls: ["https://youtu.be/0Wun0877Mrc?si=AfFuVnBZUUqj73sQ",
                "https://youtu.be/ZGwLcs0aot0?si=g-Wmn73gCwNnR1vL",
                "https://youtu.be/UTx5f4M01Wg?si=VcHHIWdQEVXCS0iK"], // Converted to array support
    screenshots: [
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-1-18621311.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-2-18631173.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-3-18633657.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-4-18639279.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-5-18647277.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-6-18641794.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-7-18653171.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-8-18655554.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-9-18665569.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-10-18669538.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-11-18671347.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-12-18679275.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-13-18683660.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-14-18685191.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-15-18692493.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-16-18696317.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-17-18701400.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-18-18707716.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-19-18703505.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-20-18715434.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-21-18717220.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-22-18714212.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-23-18721203.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-24-18726661.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-25-18727195.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-26-18734404.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-27-18735491.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-28-18737849.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-29-18741757.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-30-18748626.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-31-18747327.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-32-18743439.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-33-18759105.jpg",
      "https://apkgstore.co/wp-content/uploads/2025/09/spotify-app-msica-y-podcasts-screenshot-34-18758944.jpg"
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
    icon: "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/04/brawl-stars.png&width=160",
    description: "Fast-paced 3v3 multiplayer and mobile battle royale mode with unlocked brawlers.",
    longDescription: "Brawl Stars by Supercell is the action multiplayer game of the moment! Enjoy quick three-minute battles in a variety of exciting game modes. This MOD grants you free unlimited gems, unlimited boxes to open immediately, and spectacular gold skins to show off to all your rivals. Play on a 100% stable private server with automatic matchmaking so you never have to wait to jump into battle.",
    downloadUrl: "https://cdn600.onehost.io/2023/Brawl_Stars_67.264_1777009851_latestmodapks.com.apk",
    videoUrls: ["https://youtu.be/CaryjOdYFa0?si=8K0IEKko45XQ-CrM"], // Converted to array support
    screenshots: [
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars1.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars2.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars3.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars4.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars5.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars6.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars7.webp",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/08/brawlstars8.webp"
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
    downloadUrl: "https://files.modapkdl.com/ROOT/All%20Documents%20File/Folder%202/InstaPro-v15.20-APPS2APP.COM.apk",
    videoUrls: ["https://youtu.be/ZnT2azDpIA0?si=zZHJkU4VHIMgnlhj"], // Converted to array support
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
    size: "10 MB",
    version: "10.6.2",
    category: "Movie", // Mapped from "Movie" to match a base category or custom configuration
    type: "App",
    updatedAt: "04/07/2026",
    icon: "https://apkgstore.co/wp-content/uploads/2026/06/netflix-icon-09428465.png",
    description: "Watch exclusive movies and TV shows in 4K HDR resolution without paying a monthly subscription.",
    longDescription: "Netflix Premium MOD offers you unlimited access to the entire original Netflix catalog, trending world TV series, award-winning documentaries, and stunning cinematic feature films. The best part is that it does not require registering a credit card or paying monthly fees. Stream simultaneously on up to 4 devices in UHD 4K resolution and Dolby Atmos surround sound. Includes multi-language options with perfect subtitles.",
    downloadUrl: "https://www.mediafire.com/file/6gc2lq1qarpe74t/NetFlix+Mirror+Pro+v9.72.0-look-mod.vercel.app.apk/file",
    videoUrls: ["https://www.youtube.com/watch?v=GV3HUDMQ-F8",
                "https://youtu.be/L5AM7I2JgDM?si=IduY4U-CgoN5BAZr"
    ],// Perfectly fixed syntax error and successfully loaded multiple video URLs
    screenshots: [
      "https://play-lh.googleusercontent.com/bJrIdbqnzVixnnsYe8MgD2Ifsj95Az71ZBVyfHn34mLutfkWFvZG6W6Y6UAVQFBB6pnBFeX3NunRb23DqW-V6w",
      "https://play-lh.googleusercontent.com/QWBsHU-ACYxbmx-JsQd1UKL3QYiIe1nVqi4WnrC6D7FvRdIjo4RCrA3sS9gvTF8LLdg5w5ScBx1gRCZVtMqEB98",
      "https://play-lh.googleusercontent.com/-JL_3aAY99L85bez_VDAd2Kj_vITNDjLP7tjQqhf8JEbW1N3ppKBDSak4RKtkcLLC9EEBPSq3kzK0R91pklypQ",
      "https://play-lh.googleusercontent.com/UBMcCQ95xZuppNDv4DHCai60jqzxHNpgPNDPlp7ZBT-T-RS6YRdmyAic6TxwYR9hP5atUv7U21MvsdBuHHB2wA",
      "https://play-lh.googleusercontent.com/cxnMndqnsbcFGfLDk0lgxWJFRbO95GMle7runCUqOK1tV4tyW2ZdYVhD6JfPfRtQicF1DWVyMsXr6fGNu_UmGg",
      "https://play-lh.googleusercontent.com/1a1yokGJqW3LaJEqu4ai-l4-zKz4Fy0KR8LhggJfy4Q4vDgtJ9VWjViVPBghorazrYiQgUgKmzEKYw88m7t7MQ",
      "https://play-lh.googleusercontent.com/fZHmTfieMrR8QpiqJyaUOQBjWEtWZ2jFEesdShn4gchWtpSIf6RtLGYD7Ct2sLp7_XP1Gfkh248pqF6fy-gDdwI",
      "https://play-lh.googleusercontent.com/DmM6jsNTdgqNoDC-npaxhkxY6VCS49Z5B-pacu0RP4mWxFlYOhs2w8ZxJhofG3UaYMcpVh6tB0by6YXRlD5gLQ",
      "https://play-lh.googleusercontent.com/mRlPKnD8yWWILvIKEpSnE28niTg3e2UGkoXmUTPIcwAVzKG3P8C0inohOpkbkvtAKB-THH4wae2DQh1Py1JVSQ"
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
    icon: "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/com.miniclip.eightballpool.jpg&width=160",
    description: "The number one multiplayer pool game with infinite guideline lines for perfect shots.",
    longDescription: "Play with friends and become a pool legend. Face competitors from all over the world in competitive 1v1 matches or participate in international tournaments to win exclusive trophies. This modified version provides the coveted long line guide that allows you to visualize the exact trajectory of the balls from start to finish, ensuring perfect bank shots and mastering the most difficult tables effortlessly.",
    downloadUrl: "https://dl.8bpoolproapk.com/8.Ball.Pool.MOD.APK.8bpoolproapk.com.apk",
    videoUrls: ["https://youtu.be/MarGQrmbPm0?si=AF8RDd7cXCeDf7XM"], // Converted to array support
    screenshots: [
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.54-AM-1.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.54-AM.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.53-AM-2.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.53-AM-1.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.53-AM.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.52-AM-1.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.55-AM.jpeg",
      "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-5.21.54-AM-2.jpeg"
    ],
    security: {
      checksum: "SHA-256: 7810e4d372fc5927ad81d3542a419a42",
      secureToken: "Secure accounts without ban risk",
      cloudStorage: "Direct connection to Miniclip servers"
    },
    tags: ["MOD", "Long Line", "Free"],
    isRecommendation: false,
    isRecent: true
  },
    {
    id: "9",
    name: "MovieBox",
    slug: "moviebox",
    developer: "Imaanshu N",
    rating: "4.7/5",
    downloads: "500M",
    size: "58 MB",
    version: "5.14.2",
    category: "Movie",
    type: "app",
    updatedAt: "01/07/2026",
    icon: "https://apps2app.com/wp-content/uploads/2026/03/moviebox-150x150.webp",
    description: "The number one Free, HD, No Ads. Watch HD, Offline. No Ads, Free HD. ​Premium, Ad-free. ​Fast, HD Streaming.",
    longDescription: "MovieBox Mod APK Key Features:Unlimited access to premium content, free subscription model, massive library of movies and TV shows, extensive collection of web series, diverse genre support including action and drama, horror and romance categories, offline content downloading capabilities, uninterrupted offline viewing, high-definition streaming support, 1080p video resolution, 4K playback quality, optimized streaming performance, multilingual content library, native Hindi language support, English language accessibility, broad regional language options, no mandatory registration required, privacy-focused data handling, completely ad-free interface, seamless playback experience, intuitive user-friendly design, efficient navigation system, broad Android 5.0 compatibility, high device performance optimization, frequent library content updates, instant access to new releases, accelerated loading speeds, integrated data-saving modes, advanced security protocols, clean minimalist user interface, unrestricted content exploration, personalized favorites list, customizable playback settings, advanced internal media player, enhanced buffering optimization, streamlined installation process, stable performance on low-end devices, modern aesthetic interface, instant content accessibility.",
    downloadUrl: "https://files.modapkdl.com/ROOT/All%20Documents%20File/Folder%202/MovieBox_v3.0.16.0709.03_(50020116)_Mod-APPS2APP.COM.apk",
    videoUrls: ["https://youtu.be/rWoUM_nMPtc?si=bC-_r2uBqnE9f83m", "https://youtu.be/c8kXsCAOj8Y?si=TQhywvjtO0O0g16I"], // Converted to array support
    screenshots: [
      "https://play-lh.googleusercontent.com/lTQL8FNUICbVoVuSO8jMSRNIsz1vJs0ggttRks6d4TTsMiirAeN9c06oH6h-W6PNYUE=h305",
      "https://play-lh.googleusercontent.com/tkBwbyjRS1Wxnjrs_D55htQWuByuK8eHBm1pPb1so0_kv204P9pnqKF7097yLoySzQ=h305",
      "https://play-lh.googleusercontent.com/x-hk0oonVM-SLHcvbJMpYMz7KHflTUtJuqCcecKyke9saZDj7AA4WNZUu_kGA2TikSzd=h305",
      "https://play-lh.googleusercontent.com/yB9xDtcmAHScwfq2PDKcik1ASCnukkJMXWuRop21htGi5aDwxoctsqyo92tx3HJNhsI=h305",
      "https://play-lh.googleusercontent.com/VkcwvhZ6JJ38NA7t-EiNc5KT9bEOABWhM2BYmgwYGGGzTdH3lz_h4eDqgpnGardsBU8=h305",
    ],
    security: {
      checksum: "SHA-256: 91yeb72te8wg8w9sg6euw8hw7wh8w",
      secureToken: "Secure accounts without ban risk",
      cloudStorage: "Direct connection to Moviebox servers"
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
