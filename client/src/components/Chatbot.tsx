import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, Bot } from "lucide-react";

// ═══════════════════════════════════════════════════════
//  RESPONSE BANKS — HOPE KOMBUCHA
// ═══════════════════════════════════════════════════════

// ─── GREETINGS (300+) ───────────────────────────────────
const greetings = [
  "Hey there! 👋 Welcome to Hope Kombucha!",
  "Hi! 😊 Great to see you at Hope Kombucha!",
  "Hello! Ready to explore some amazing kombucha today?",
  "Hey! How's it going? Hope you're ready for something refreshing! 🍹",
  "Hi there! Hope Kombucha is happy to see you!",
  "Hello friend! What kombucha adventure are we on today?",
  "Hey buddy! 🍹 Let's find your perfect brew!",
  "Hi! Good to see you — our kombucha lineup is ready for you!",
  "Hello! Can I help you find something delicious today?",
  "Hey! What's up? We've got 7 amazing flavors waiting for you 🌿",
  "Hi! Need a refreshing pick-me-up? You're in the right place!",
  "Hello! 😊 Hope Kombucha is here to make your day brighter!",
  "Hey! Nice to see you here — taste the difference of Hope!",
  "Hi! Ready to explore our kombucha world? Let's go! 🍹",
  "Hello there! Our brews are calling your name 🌿",
  "Hey! Hope you're doing well — and we hope our kombucha helps even more!",
  "Hi! 👋 Let's find the perfect Hope Kombucha for you!",
  "Hello hello! What can this little kombucha buddy do for you?",
  "Hey! Welcome back — your favorite brews missed you 🍹",
  "Hi! What's on your mind? Kombucha, wellness, or both? 😄",
  "Hey! 🌟 Hope Kombucha is buzzing with great flavors — let's explore!",
  "Hi! Feeling adventurous? We have 7 unique flavors just for you! 🍹",
  "Hello! Let's kickstart your day the Hope Kombucha way! 🌿",
  "Hey there, health hero! What can Hope Kombucha do for you today?",
  "Hi! Your gut health just got a best friend — that's us! 😊",
  "Hello! Ready to taste something truly hopeful? 🍹",
  "Hey! Wellness starts with a sip — let's find yours!",
  "Hi there, kombucha lover! Great to have you here!",
  "Hello! Let's make today a little more bubbly, shall we? 🌿",
  "Hey! 🎉 Welcome to the Hope Kombucha family!",
  "Hi! Our flavors are brewed with love — just like this greeting! 😄",
  "Hello! Sip, smile, repeat — that's the Hope way! 🍹",
  "Hey! Looking for something refreshing? You've landed in the right spot!",
  "Hi! Hope Kombucha: where every bubble tells a wellness story 🌿",
  "Hello there! We're so glad you stopped by today!",
  "Hey! 🌱 Gut-friendly, delicious, and here to help — that's us!",
  "Hi! Whether it's your first sip or your hundredth, we're thrilled to see you!",
  "Hello! Your wellness journey starts with a single sip 🍹",
  "Hey! Good vibes and great kombucha — that's what Hope is all about!",
  "Hi! 🌿 Let's talk flavors, wellness, and all things Hope Kombucha!",
  "Hey! Did someone say kombucha? 🍹 That's my cue!",
  "Hi! I was just fermenting some ideas for you! 😄",
  "Hello! Brewing up some good vibes just for you 🌿",
  "Hey there! Let's get bubbly! 🍹",
  "Hi! Fun fact: kombucha makes everything better — and I can prove it!",
  "Hello! I'm fizzing with excitement to help you today! 😄",
  "Hey! Life is too short for boring drinks — let's fix that! 🌿",
  "Hi! You look like someone who appreciates good kombucha 🍹",
  "Hello! Ready to fall in love with your new favorite drink?",
  "Hey! 🌟 The bubbly adventure begins now!",
  "Hi! Kombucha o'clock — the best time of day! 🍹",
  "Hello! Every sip of Hope is brewed with heart 💚",
  "Hey! Your taste buds are in for a treat today!",
  "Hi! 😊 Small sip, big joy — that's Hope Kombucha!",
  "Hello! Our flavors are so good, they practically say hi back 🍹",
  "Hey! Don't let your gut down — try a Hope brew today! 😄",
  "Hi! Fermented with live SCOBY, delivered with a smile 🌿",
  "Hello! We're not just a drink — we're a lifestyle! 🍹",
  "Hey! 🎊 You just made a great choice coming here!",
  "Hi! Hope Kombucha: the happiest bubbles in town! 😊",
  "Hey! 🌿 Looking after your gut today? We can help!",
  "Hi! Wellness meets flavor — that's the Hope Kombucha promise!",
  "Hello! Your body will thank you for this visit 🍹",
  "Hey! Probiotic goodness is just a sip away!",
  "Hi! Gut health is wealth — let's talk about it! 🌿",
  "Hello! Real ingredients, real flavor, real wellness 🍹",
  "Hey! Kombucha isn't just a drink — it's self-care in a bottle! 💚",
  "Hi! Here to nourish your body and delight your senses 🌿",
  "Hello! Naturally fermented, naturally amazing 🍹",
  "Hey! Because you deserve drinks that are good FOR you! 😊",
  "Hi! 🌱 Sip your way to better days with Hope!",
  "Hello! Your daily dose of gut love is here! 🍹",
  "Hey! Feeling off? A Hope kombucha might be just what you need! 🌿",
  "Hi! We believe in drinks that work as hard as you do! 💪",
  "Hello! Live well, sip often — that's our motto! 🍹",
  "Good morning! ☀️ Start your day with a Hope Kombucha!",
  "Good afternoon! 🌤️ A midday sip of Hope is just what you need!",
  "Good evening! 🌙 Wind down with a refreshing Hope Kombucha!",
  "Morning! ☀️ Rise and shine — our 7 flavors are ready!",
  "Good morning! 🌱 The best mornings start with gut-friendly goodness!",
  "Good afternoon! Our flavors are perfect for a little pick-me-up! 🍹",
  "Good evening! 🌙 Settle in with something delicious from Hope!",
  "Hey hey! What's the vibe today? 😄",
  "Hi! Come on in — the kombucha's freshly fermented! 😄",
  "Hello! We've been waiting for you 🍹",
  "Hey! Something tells me this is going to be a great conversation! 😊",
  "Hi! Let's chat — I love talking about all things Hope Kombucha!",
  "Hey! Pull up a chair and let's talk brews 🌿",
  "Hi! I'm Kombucha Buddy, powered by Hope Kombucha, and I'm here to help!",
  "Hello! No boring drinks here — just Hope! 🍹",
  "Hey! What's brewing? (Pun absolutely intended 😄)",
  "Hi! Let's get this kombucha conversation started!",
  "Hello! I've been waiting to tell you about our 7 amazing flavors 🌿",
  "Hey! Welcome to the fizzy side of wellness! 🍹",
  "Hi! Ready to discover your new obsession? 😊",
  "Hey! 🍹 We're passionate about every sip — and it shows!",
  "Hi! From our fermentation tanks to your glass — with love 💚",
  "Hello! Crafted with care, enjoyed with joy 🍹",
  "Hey! Our story started in 2021 with a love for wellness — and great taste!",
  "Hi! Every bottle of Hope is a little act of self-love! 🌿",
  "Hey there! 🍹 Hope Kombucha awaits your curiosity!",
  "Hi! Come explore the bubbly world of Hope! 🌿",
  "Hello! Your wellness journey just got more delicious! 🍹",
  "Hey! Sip smarter — sip Hope! 😊",
  "Hi! What can your Kombucha Buddy help with today? 🍹",
  "Hello! Health, happiness, and great taste — all in one 300ml bottle 🌿",
  "Hey! It's a great day for kombucha. Every day is! 😄",
  "Hi! Bubbles, probiotics, and good vibes incoming! 🍹",
  "Hello! Here to guide you through the wonderful world of Hope! 🌿",
  "Hey! Let's find the brew that makes your soul happy 😊",
  "Hi! Great kombucha doesn't happen by accident — it's Hope! 🍹",
  "Hello! We're small-batch, big-hearted, and here for you! 🌿",
  "Hey! Real fermentation, real flavor, real Hope! 🍹",
  "Hi! Your daily wellness ritual just got an upgrade! 😊",
  "Hello! From our hands to your lips — with joy 🌿",
  "Hey! 🍹 Hope is more than a brand — it's a feeling!",
  "Hi! Let's explore flavors that make you feel alive! 🌿",
  "Hello! Life's too short for bad kombucha — choose Hope! 😄",
  "Hey! We think you deserve the best — so here we are! 🍹",
  "Hi! Wellness that actually tastes good — welcome to Hope! 🌿",
  "Hello! Our SCOBY has been working hard just for you 😄",
  "Hey! Fermentation magic is real — and it's called Hope! 🍹",
  "Hi! We're proof that healthy can be delicious! 🌿",
  "Hello! The future of beverages is functional — welcome! 🍹",
  "Hey! Your gut flora will love us — and so will you! 😊",
  "Hi! 🌱 Rooted in wellness, rising with hope!",
  "Hello! Thanks for choosing Hope — you made a great choice! 🍹",
  "Hey! Flavor-first, health-always — that's our promise 🌿",
  "Hi! We can't wait to become your favorite daily ritual! 😊",
  "Hello! Hopeful sips for a healthier you! 🍹",
  "Hey! 🌟 Every bottle carries a little bit of our heart!",
  "Hi! Crafted for those who care about what they drink 🌿",
  "Hello! Your wellness, our passion — perfectly blended! 🍹",
  "Hey! Ready to taste the difference hope makes? 😊",
  "Hi! Because great health tastes even better! 🌿",
  "Hello! Let's find the flavor that speaks to your soul! 🍹",
  "Hey! One sip and you'll understand why we're called Hope! 😄",
  "Hi! More than kombucha — it's a lifestyle! 🌿",
  "Hello! Your health journey deserves something special! 🍹",
  "Hey! 💚 Brewing happiness, one bottle at a time!",
  "Hi! Hope Kombucha: where every sip is intentional 🌿",
  "Hello! We put love in every batch — taste it for yourself! 🍹",
  "Hey! 🌟 Welcome to a community of kombucha lovers!",
  "Hi! Your kombucha adventure starts right here! 🌿",
  "Hello! Refreshing, gut-loving, soul-lifting — that's us! 🍹",
  "Hey! We're bubbly and we know it 😄",
  "Hi! Hope: brewed with purpose, enjoyed with pleasure 🌿",
  "Hello! Let the good bubbles begin! 🍹",
  "Hey! 🌿 Better days start with better drinks!",
  "Hi! We're here to make your wellness journey delicious! 🍹",
  "Hello! Drink more hope, feel more alive! 🌿",
  "Hey! The world needs more Hope — starting in your cup! 🍹",
  "Hi! Your taste buds sent us a message — they want Hope 😄",
  "Hello! Let's brew up something wonderful together! 🌿",
  "Hey! A sip of Hope is a step toward wellness! 🍹",
  "Hi! 💚 We care about what goes into your body — and your bottle!",
  "Hello! Great taste, great gut, great day — it all starts here! 🍹",
  "Hey! The Hope difference is real — taste it and see! 🌿",
  "Hi! We make kombucha you'll actually look forward to drinking! 😊",
  "Hello! Less guilt, more goodness — welcome to Hope! 🍹",
  "Hey! Alive cultures, alive flavors, alive YOU! 🌿",
  "Hi! It's not just what's in the bottle — it's what we stand for! 💚",
  "Hello! Raising a glass (bottle!) to your health 🍹",
  "Hey! From our kitchen to your heart — with Hope! 🌿",
  "Hi! Let's toast to wellness — cheers! 🍹",
  "Hello! Because your health deserves nothing but the best! 🌿",
  "Hey! 🎉 You've officially joined the Hope Kombucha family!",
  "Hi! A bottle of Hope a day keeps the bad vibes away! 😄",
  "Hello! We take wellness seriously — and deliciously! 🍹",
  "Hey! FSSAI approved, gut approved, taste-bud approved! 🌿",
  "Hi! Our SCOBY cultures have been working overtime for you 😊",
  "Hello! Dr. Arawdh J's vision, your daily wellness — one bottle at a time! 🍹",
  "Hey! No artificial preservatives. No shortcuts. Just Hope! 🌿",
  "Hi! Naturally carbonated, naturally amazing, naturally Hope! 🍹",
  "Hello! Seven flavors of wellness — which one is yours? 😊",
  "Hey! Clean label. Real ingredients. Big flavor. That's Hope! 🌿",
  "Hi! The future of beverages is functional — and it's here! 🍹",
  "Hello! Refresh. Restore. Rebalance — let's get started! 🌿",
  "Hey! 300ml of pure wellness — ready for you! 🍹",
  "Hi! Brewed with live SCOBY and a whole lot of love 💚",
  "Hello! For the gym, the office, the café — Hope fits everywhere! 🌿",
  "Hey! Health-conscious people choose Hope — welcome aboard! 🍹",
  "Hi! Working professionals, fitness fans, wellness seekers — you're home! 😊",
  "Hello! From leaf to bottle — Hope Kombucha is crafted with care! 🌿",
  "Hey! Controlled fermentation for a consistently amazing sip 🍹",
  "Hi! We don't just make drinks — we make wellness accessible! 💚",
  "Hello! Your next favorite drink is one sip away! 🌿",
  "Hey! Turmeric, Mint, Ginger, Rose, Hibiscus, Butterfly Pea, Elixir — take your pick! 🍹",
  "Hi! Seven flavors, endless wellness benefits — let's explore! 😊",
  "Hello! Glass bottle. Chilled fresh. Brewed with love. That's Hope! 🌿",
  "Hey! Naturally fermented probiotic goodness is here for you 🍹",
  "Hi! Hope Kombucha: where science meets soul! 💚",
  "Hello! Ready to refresh, restore, and rebalance? 🌿",
  "Hey! Your wellness journey deserves a delicious companion — that's us 🍹",
  "Hi! We exist because health should taste good — always! 😊",
  "Hello! One brand, seven flavors, infinite wellness — welcome to Hope! 🍹",
  "Hey! 🌿 Sip by sip, we're changing what healthy looks like!",
  "Hi! No compromise on quality, no compromise on taste — that's Hope! 🍹",
  "Hello! We ferment with intention and bottle with love 💚",
  "Hey! Every batch is a labor of love — and you're about to taste it! 🌿",
  "Hi! The cleanest label in your fridge — that's Hope Kombucha! 🍹",
  "Hello! Founded in 2021, fueled by purpose, loved by wellness seekers! 🌿",
  "Hey! Real probiotics from real fermentation — not a lab shortcut! 💚",
  "Hi! Hope Kombucha: making functional beverages approachable and delicious! 🍹",
  "Hello! Your gut deserves the best — and the best is here! 🌿",
  "Hey! We started with a dream of better beverages — and here we are! 🍹",
  "Hi! Six months or six years into wellness — Hope Kombucha belongs in your routine! 💚",
  "Hello! Ask me anything — flavors, benefits, our process, our story! 🌿",
  "Hey! I know Hope Kombucha inside out — ask away! 🍹",
  "Hi! Whether you're curious or ready to order — I'm here! 💚",
  "Hello! The world's getting healthier one sip at a time — join us! 🍹",
  "Hey! Every bottle of Hope is FSSAI approved and made with care! 🌿",
  "Hi! Our founder Dr. Arawdh J built this brand for YOU! 🍹",
  "Hello! Wellness doesn't have to be boring — Hope proves it daily! 💚",
  "Hey! 🌿 From the fermentation tank to your fridge — with quality at every step!",
  "Hi! Real cultures, real flavors, real results — that's our promise! 🍹",
  "Hello! Small bottle, big wellness impact — welcome to Hope! 🌿",
  "Hey! 💚 Because what you drink every day shapes who you become!",
  "Hi! Hope Kombucha is not a trend — it's a daily wellness choice! 🍹",
  "Hello! Start your wellness journey with the most delicious step — us! 🌿",
  "Hey! Thank you for being here — let's make this conversation count! 🍹",
  "Hi! 🌿 Wellness seekers welcome — you've found your brand!",
  "Hello! We're proud of every bottle we brew — and you'll taste why! 🍹",
  "Hey! No artificial anything — just honest, fermented goodness! 💚",
  "Hi! Hope Kombucha: built for the shift toward functional beverages! 🌿",
  "Hello! Refresh your routine with 7 flavors of natural wellness! 🍹",
  "Hey! We believe in beverages that nourish — not harm! 💚",
  "Hi! Your daily sip of gut love has arrived 🌿",
  "Hello! The functional beverage revolution is here — led by Hope! 🍹",
  "Hey! Naturally carbonated, naturally delicious, naturally yours! 🌿",
  "Hi! Meet your new wellness ritual — Hope Kombucha! 🍹",
  "Hello! Quality you can taste, values you can trust — that's us! 💚",
  "Hey! 🌿 Kombucha brewed the right way — always at Hope!",
  "Hi! Let's talk about what makes Hope different — everything! 😄 🍹",
];

// ─── HOW ARE YOU ────────────────────────────────────────
const howAreYouReplies = [
  "I'm doing great, thank you! 😊 Ready to help you explore Hope Kombucha — what are you looking for today?",
  "All bubbly over here! 🍹 How about you? Can I help you find the perfect Hope brew?",
  "Feeling fresh like a cold bottle of naturally fermented kombucha! 😄 What can I do for you?",
  "Doing awesome — and even better now that you're here! What would you like to know about Hope?",
  "I'm good, thanks for asking! 🌿 Ready to talk flavors, wellness, or anything Hope Kombucha!",
  "Fizzing with energy! 🍹 Speaking of Hope, can I help you explore our 7 flavors?",
  "Never better! 😊 This is my favorite part — helping wellness lovers like you. What can I do for you?",
];

// ─── NAME & IDENTITY ────────────────────────────────────
const nameReplies = [
  "I'm Kombucha Buddy — your personal guide to Hope Kombucha! 🍹 What can I help you discover today?",
  "You can call me Kombucha Buddy! I'm here to help you explore everything Hope Kombucha has to offer 😊",
  "I'm your Kombucha Buddy, powered by Hope Kombucha! 🌿 Think of me as your friendly flavor guide!",
  "Kombucha Buddy at your service! 🍹 I know everything about Hope Kombucha — ask away!",
];

// const whoAreYouReplies = [
//   "I'm your friendly Hope Kombucha assistant! 😊 I help you explore our 7 flavors, learn about wellness benefits, and find your perfect brew 🍹",
//   "I'm Kombucha Buddy — your guide to everything Hope Kombucha! Founded in 2021 by Dr. Arawdh J, Hope is a premium naturally fermented probiotic beverage brand. I'm here to help! 🌿",
//   "Think of me as your personal kombucha concierge! 🍹 I'm here to make your Hope Kombucha experience wonderful!",
// ];

// ─── LOVE / COMPLIMENTS ─────────────────────────────────
const loveReplies = [
  "Aww, that's so sweet! ❤️ Love you too! And speaking of love — why not show your gut some love with a Hope Kombucha today? 🍹 Want to explore our 7 flavors?",
  "That just made my day! 😊 Love you back! You know what else you'll love? Our naturally fermented Hope Kombucha — want to know about our flavors? 🌿",
  "Aww stop it, you're too kind! ❤️ Let's channel that love into finding your perfect Hope Kombucha — shall we explore? 🍹",
  "Love you too, friend! 💚 And since you're in a loving mood — how about falling in love with our Turmeric or Rose flavor? Want to know more? 😄",
];

const complimentReplies = [
  "Aww, thank you so much! 😊 That means the world — and speaking of amazing things, have you tried our 7 Hope Kombucha flavors? 🍹",
  "You're too kind! 💚 We work hard to make this experience great. Can I help you explore our probiotic kombucha lineup?",
  "That's so sweet! 🌿 We love our community. Now — let me help you find your perfect Hope Kombucha! 🍹",
];

// ─── THANKS & GOODBYE ───────────────────────────────────
const thanksReplies = [
  "You're so welcome! 🍹 Anything else I can help you with — maybe exploring more Hope Kombucha flavors?",
  "Happy to help! 😊 That's what Kombucha Buddy is here for! Anything else on your mind?",
  "Of course! 💚 Hope Kombucha is all about making your experience wonderful. Anything else?",
  "My pleasure! 🌿 Can I help you discover anything else about Hope Kombucha today?",
];

const byeReplies = [
  "Goodbye! 🍹 Don't forget to grab a Hope Kombucha — your gut will thank you! 💚",
  "See you soon! 😊 Remember, Hope Kombucha is always here for your daily wellness boost 🌿",
  "Bye bye! 🍹 Come back anytime — we'll have something delicious waiting for you!",
  "Take care! 💚 Stay healthy, stay hopeful — and sip Hope Kombucha! 🌿",
];

// ═══════════════════════════════════════════════════════
//  BRAND Q&A — EXTRACTED FROM HOPE KOMBUCHA PDF
// ═══════════════════════════════════════════════════════

const whatIsKombuchaReplies = [
  "Kombucha is a naturally fermented probiotic beverage made using a live culture called SCOBY (Symbiotic Culture of Bacteria and Yeast)! 🌿 It's packed with beneficial bacteria that support gut health, immunity, and overall wellness. Hope Kombucha takes this tradition and crafts it with modern precision and zero artificial shortcuts.",
  "Great question! 🍹 Kombucha is a functional fermented drink brewed from tea, sugar, and a live SCOBY culture. The fermentation process creates natural probiotics, organic acids, and beneficial enzymes. Hope Kombucha harnesses this power in 7 delicious flavors!",
  "Kombucha is a live, naturally carbonated probiotic drink produced by fermenting sweetened tea with a SCOBY. 🌿 It supports digestive wellness, provides natural immunity support, and is a clean alternative to sugary drinks. At Hope, we make it taste amazing too!",
  "Think of kombucha as tea lovingly transformed by live cultures into a gut-friendly, naturally fizzy wellness drink! 🍹 At Hope Kombucha, we use controlled fermentation and real ingredients to ensure every sip is both delicious and beneficial.",
];

const aboutBrandReplies = [
  "Hope Kombucha is a premium naturally fermented probiotic beverage brand — representing the new generation of clean-label beverages where taste meets wellness! 🌿 We use traditional fermentation science combined with modern food safety standards.",
  "Hope Kombucha was built on one mission: everyday beverages should nourish the body, not harm it. 💚 Each bottle uses live SCOBY cultures, real ingredients, and zero artificial preservatives — delivering Refresh. Restore. Rebalance.",
  "We're a clean-label functional beverage brand committed to gut health and great taste! 🍹 Hope Kombucha is FSSAI approved, brewed with live SCOBY, and available in 7 unique naturally carbonated flavors.",
  "Hope Kombucha represents the future of beverages — functional, delicious, and built for a wellness-first world! 🌿 As Dr. Arawdh J says: 'Health is not a trend. It is a daily choice. And that choice should taste good.'",
];

const founderReplies = [
  "Hope Kombucha was founded by Dr. Arawdh J in 2021! 🌿 Driven by a passion for functional wellness and clean-label nutrition, he set out to blend traditional fermentation science with modern food safety. What began as a vision for a probiotic-rich gut-friendly beverage has grown into an FSSAI-compliant brand with regional and national expansion.",
  "Our founder is Dr. Arawdh J — a wellness visionary who started Hope Kombucha in 2021! 💚 His guiding belief: 'Health is not a trend. It is a daily choice. And that choice should taste good.' That philosophy lives in every bottle.",
  "Dr. Arawdh J is the man behind Hope Kombucha! 🍹 He founded the brand in 2021, driven by his belief in functional wellness and clean-label beverages. His vision has shaped Hope into a premium, FSSAI-compliant probiotic drink brand with a growing national presence.",
];

const flavorReplies = [
  "Hope Kombucha comes in 7 amazing flavors of wellness! 🍹\n\n🟡 Turmeric — anti-inflammatory powerhouse\n🔴 Hibiscus — floral & antioxidant-rich\n🟢 Mint — cool & refreshing\n🟤 Ginger — spicy & gut-warming\n🌹 Rose — delicate & aromatic\n💙 Butterfly Pea — stunning & antioxidant-rich\n✨ Elixir — special wellness blend\n\nAll naturally carbonated, brewed with live SCOBY, zero artificial preservatives! Which one calls to you?",
  "We have 7 incredible flavors, each infused during secondary fermentation for authentic flavor depth! 🌿 Turmeric, Hibiscus, Mint, Ginger, Rose, Butterfly Pea, and our special Elixir — all naturally carbonated, all brewed with love 🍹 Which would you like to know more about?",
  "Seven flavors of wellness await! ✨\n🟡 Turmeric | 🔴 Hibiscus | 🟢 Mint | 🟤 Ginger | 🌹 Rose | 💙 Butterfly Pea | ⭐ Elixir\n\nEvery variant is brewed with live SCOBY, naturally carbonated, and free from artificial preservatives 🌿 Want details on a specific one?",
];

const turmericReplies = [
  "Our Turmeric Kombucha is a wellness powerhouse! 🌿 Turmeric is renowned for its anti-inflammatory and antioxidant properties. Combined with our naturally fermented kombucha base and live SCOBY, it creates a warming, gut-friendly brew that supports your body inside out. A must-try! 🍹",
  "Turmeric is one of our most popular variants! 💛 It brings the ancient benefits of turmeric — immunity, anti-inflammation, and digestive support — in a delicious, naturally carbonated drink brewed with live SCOBY for maximum probiotic benefit! 🌿",
];

const gingerReplies = [
  "Our Ginger Kombucha is bold, spicy, and incredibly gut-friendly! 🫚 Ginger is a time-tested digestive powerhouse, and when combined with our live SCOBY fermentation, it creates a naturally fizzy, zingy drink perfect for any time of day! 🍹",
  "Love ginger? You'll adore our Ginger Kombucha! 🌿 Warming, naturally carbonated, and packed with the digestive benefits of real ginger + live probiotics. A classic Hope favorite and a great entry point for first-timers! 🍹",
];

const hibiscusReplies = [
  "Our Hibiscus Kombucha is a floral, tangy delight! 🌸 Rich in antioxidants and naturally vibrant, it's a beautiful brew that's as good for your health as it is for your senses. Naturally carbonated with live SCOBY goodness! 🍹",
  "Hibiscus is nature's wellness flower — and in kombucha form, it's stunning! 🌸 Our Hibiscus variant offers a tart, floral taste with antioxidant benefits, brewed with love and live cultures. A visual and wellness treat! 💚",
];

const roseReplies = [
  "Our Rose Kombucha is delicate, aromatic, and absolutely delightful! 🌹 A gentle floral note with the probiotic power of live SCOBY fermentation. Perfect for those who love something elegant and wellness-packed in every sip! 🍹",
  "Rose flavor, real wellness — that's our Rose Kombucha! 🌹 Soft, floral, and naturally carbonated with live SCOBY and zero artificial ingredients. Romance your gut with every sip! 😄 🍹",
];

const mintReplies = [
  "Our Mint Kombucha is cool, refreshing, and incredibly invigorating! 🌱 Fresh mint combined with naturally fermented kombucha creates a crisp, gut-friendly brew that's perfect post-workout or as a midday refresher! 🍹",
  "Mint Kombucha — the ultimate cool-down drink! 🌿 Naturally carbonated, brewed with live SCOBY, and packed with the refreshing power of real mint. Great for digestion and energy anytime! 🍹",
];

const butterflyPeaReplies = [
  "Our Butterfly Pea Kombucha is a total showstopper! 💙 The stunning natural blue hue of butterfly pea flower is rich in antioxidants. Combined with our live fermentation process, it's a visually beautiful, wellness-packed brew unlike anything else! 🍹",
  "Butterfly Pea is our most visually stunning flavor! 💙✨ Known for its antioxidant-rich properties and gorgeous natural color, this variant proves wellness can be beautiful. Naturally carbonated, live SCOBY brewed, and absolutely unique! 🍹",
];

const elixirReplies = [
  "Our Elixir variant is a special wellness blend — the ultimate Hope Kombucha experience! ✨ Carefully crafted to bring together the best functional ingredients in one powerful, naturally fermented bottle. The one to try when you want it all! 🍹",
  "Elixir is our signature special blend! ✨ A thoughtfully crafted combination of wellness ingredients fermented with live SCOBY. It's for those who want the full Hope Kombucha experience in a single bottle! 🍹",
];

const pricingReplies = [
  "For the latest pricing on Hope Kombucha, please reach out to us directly or visit your nearest retail partner! 🍹 Our 300ml glass bottles are competitively priced for a premium wellness beverage. Our team will be happy to share current pricing! 💚",
  "We'd love to share our pricing with you! 💚 Hope Kombucha is available in 300ml glass bottles. For exact pricing and bulk/retail queries, please contact our team — we have options for individual customers and retail partners alike! 🍹",
  "Pricing varies by order type and location! 🌿 For individual bottles, packs, or B2B/retail pricing, please contact us directly. Hope Kombucha is designed to be accessible for every health-conscious individual! 🍹",
];

const packagingReplies = [
  "Hope Kombucha is available in 300ml sealed glass bottles! 🍹 Best served chilled, our glass packaging preserves the live cultures and natural carbonation while maintaining the highest quality. Store away from direct sunlight! 🌿",
  "Our bottles are 300ml glass — premium, eco-friendly, and perfect for on-the-go wellness! 💚 Glass preserves the live probiotics and natural carbonation better than plastic. Always keep refrigerated and serve chilled for the best experience! 🍹",
  "300ml sealed glass bottles — that's the Hope Kombucha way! 🌿 Sealed to maintain freshness and protect the live cultures inside. Always serve chilled for maximum taste and benefit! 🍹",
];

const storageReplies = [
  "Hope Kombucha should be kept refrigerated at all times! 🌿 Store away from direct sunlight and serve chilled for the best taste and probiotic benefits. Once opened, consume promptly for maximum freshness! 🍹",
  "Storage is simple! 🍹 Keep your Hope Kombucha refrigerated, away from sunlight, and serve chilled. Since it contains live cultures, cold storage maintains the probiotic potency and natural carbonation! 💚",
];

const deliveryReplies = [
  "For delivery options in your area, please contact our team directly! 🌿 Hope Kombucha is designed for sustainable market growth and we're actively expanding our delivery network! 🍹 Reach out for the latest updates!",
  "We're growing our delivery reach! 🍹 Hope Kombucha is available through select retail partners and direct supply. Contact us to find options near you — our team will guide you! 💚",
  "Delivery details vary by location! 🌿 Hope Kombucha is built for retail and direct supply with sustainable market expansion in mind. Get in touch for up-to-date delivery information for your area! 🍹",
];

const ingredientReplies = [
  "Hope Kombucha is brewed with clean, real ingredients! 🌿 Our primary ingredients include filtered water, organic cane sugar, tea, and our live SCOBY culture. No artificial colors, no synthetic preservatives, no unnecessary additives — ever! 🍹",
  "We keep it clean and real! 💚 Filtered water, organic cane sugar, tea, live SCOBY, and natural flavors added during secondary fermentation. Zero artificial anything — that's our clean-label promise! 🌿",
  "Clean label is our promise! 🍹 No artificial colors, no synthetic preservatives, no unnecessary additives. Just real ingredients, live cultures, and natural botanical flavors that your body will actually love! 💚",
];

const processReplies = [
  "Our Controlled Fermentation Process has 7 precise steps! 🌿\n\n1️⃣ Controlled tea brewing\n2️⃣ Controlled sugar addition\n3️⃣ Primary fermentation with live SCOBY\n4️⃣ Secondary fermentation with natural flavors\n5️⃣ Carbonation refinement\n6️⃣ Hygiene bottling & sealing\n7️⃣ Cold chain storage & distribution\n\nEvery step is quality-controlled to deliver a consistently amazing bottle! 🍹",
  "We call it 'From the Leaf to the Bottle'! 🍹 It starts with controlled tea brewing, followed by primary fermentation with our live SCOBY, secondary fermentation with natural flavors, and ends with hygienic bottling + cold chain distribution. Precision at every step! 🌿",
  "Our brewing process combines ancient fermentation wisdom with modern food safety! 💚 Primary fermentation with live SCOBY creates the probiotic base; secondary fermentation adds our unique natural flavors. Strict hygiene bottling and cold storage ensures every bottle reaches you perfectly! 🍹",
];

const scobyReplies = [
  "SCOBY stands for Symbiotic Culture of Bacteria and Yeast! 🌿 It's the living heart of our kombucha — a colony of microorganisms that ferments tea and sugar into a probiotic-rich, naturally carbonated wellness drink. Our SCOBY is live, active, and lovingly maintained! 🍹",
  "Great question! SCOBY is the live culture that makes kombucha, kombucha! 💚 It transforms sweetened tea into a fizzy, probiotic-packed beverage through natural fermentation. At Hope, we use high-quality SCOBY to ensure every bottle is alive with beneficial bacteria! 🌿",
];

const healthBenefitReplies = [
  "Hope Kombucha supports your wellness in multiple ways! 🌿\n\n✅ Supports digestive wellness\n✅ Provides natural immunity boost\n✅ Reduces dependency on sugary & artificial drinks\n✅ Promotes mindful, healthier consumption habits\n✅ Rich in live probiotics & beneficial enzymes\n\nYour daily wellness ritual in a bottle! 🍹",
  "The benefits of Hope Kombucha go beyond great taste! 💚 Regular consumption supports gut health, aids digestion, boosts natural immunity, and helps cut down on unhealthy sugary drinks. It's functional wellness you can actually drink! 🍹",
  "Drinking Hope Kombucha helps you refresh, restore, and rebalance! 🌿 It nourishes your gut with live probiotics, supports your immune system naturally, and gives your body the functional boost it deserves — without artificial shortcuts! 🍹",
];

const probioticReplies = [
  "Yes! Hope Kombucha is naturally rich in live probiotics! 🌿 The fermentation process with live SCOBY creates beneficial bacteria that support your gut microbiome, aid digestion, and strengthen your immune system. Real probiotics, naturally created! 🍹",
  "Our kombucha is loaded with live probiotics from natural fermentation! 💚 Unlike supplements, our probiotics come embedded in a delicious drink — making your daily wellness routine something to genuinely look forward to! 🍹",
];

const artificialReplies = [
  "Absolutely not! 🙌 Hope Kombucha contains NO artificial colors, NO synthetic preservatives, and NO unnecessary additives. Clean-label is our promise — what you see is what you get, and it's all real! 🌿",
  "Proudly free from artificial everything! 💚 No artificial colors, no synthetic preservatives, no junk. Just real fermented goodness with natural flavors. That's the Hope clean-label promise! 🍹",
];

const targetCustomerReplies = [
  "Hope Kombucha is crafted for health-conscious individuals, fitness professionals, working professionals, and wellness-focused families! 🌿 It fits seamlessly into modern lifestyles — at the gym, at home, at work, or on café menus! 🍹",
  "Our community is made of wellness lovers! 💚 Whether you're a fitness enthusiast, a professional seeking a healthy alternative, a parent looking for clean beverages, or someone on a wellness journey — Hope Kombucha is for YOU! 🍹",
];

const purposeReplies = [
  "Our purpose is powerful: everyday beverages should nourish the body, not harm it. 💚 Hope exists to support digestive wellness, provide natural immunity, reduce dependency on artificial drinks, and promote mindful consumption habits! 🌿",
  "Hope was built on a belief — 'Health is not a trend. It is a daily choice. And that choice should taste good.' 🌿 Everything we do, every flavor we create, every bottle we brew is in service of that mission! 🍹",
];

const qualityReplies = [
  "Hope Kombucha is produced in an FSSAI-approved facility! ✅ Our quality measures include batch-level quality testing, hygiene monitoring, regulatory formulation control, and global compliance certifications. Every bottle meets the highest food safety standards! 🌿",
  "Quality is at the heart of everything we do! 💚 We're FSSAI approved, run strict batch-level quality checks, maintain hygiene monitoring, and meet regulatory compliance requirements. You can trust every bottle of Hope! 🍹",
];

const marketPositionReplies = [
  "Hope Kombucha is positioned in the growing functional beverage segment! 🌿 We stand out as: Naturally Fermented ✓ Authentic ✓ Clean Label ✓ Wellness-Backed ✓ — with a scalable model built for sustainable retail expansion! 🍹",
  "We're in the premium functional beverage space — and proud of it! 💚 Hope Kombucha combines clean-label authenticity with wellness science, designed not just for shelves but for sustainable market growth! 🌿",
];

const safetyReplies = [
  "Absolutely safe! ✅ Hope Kombucha is produced in an FSSAI-approved facility with strict food safety protocols. Traditional fermentation science is combined with modern safety standards to ensure every bottle is clean and beneficial! 🌿",
  "100% safe! 💚 We're FSSAI compliant, use hygienically controlled fermentation, and test every batch. No artificial preservatives, no synthetic additives — just clean, safe, naturally fermented goodness! 🍹",
];

const sugarReplies = [
  "We use organic cane sugar as food for the SCOBY during fermentation! 🌿 The fermentation process consumes much of the sugar, resulting in a naturally low-sugar, naturally carbonated drink. No refined syrups, no artificial sweeteners! 🍹",
  "Great question! 🌿 We use organic cane sugar — but most of it is consumed by the live SCOBY during fermentation. The result is a naturally low-sugar, probiotic-rich drink without artificial sweeteners! 💚",
];

const caffeineReplies = [
  "Kombucha is brewed from tea, which contains small amounts of natural caffeine! 🍹 However, the fermentation process significantly reduces caffeine levels, making it a light natural energy option — far less than coffee or regular tea. Great for any time of day! 🌿",
  "There's a small amount of natural caffeine from the tea base, but fermentation reduces it considerably! 🌿 You get a gentle, natural energy lift without the jitters of coffee — perfect as a healthy daily drink! 🍹",
];

const alcoholReplies = [
  "Hope Kombucha contains only trace amounts of alcohol (typically under 0.5%) — a natural byproduct of fermentation, well within food-grade safety limits! 🌿 It is not an alcoholic beverage and is suitable for everyday consumption by the whole family! 🍹",
  "Naturally fermented kombucha contains only trace alcohol (under 0.5%) — completely within safe, non-alcoholic standards! ✅ Our controlled fermentation process ensures this stays within healthy, compliant limits. It's a wellness drink, not an alcoholic one! 🌿",
];

const whereToBuyReplies = [
  "Hope Kombucha is available through our retail partners and is expanding to new locations! 🍹 For the nearest outlet or to place an order, please reach out to us directly — our team will guide you! 💚",
  "We're growing our retail presence fast! 🌿 Hope Kombucha is designed for scalable retail expansion. Contact us to find the nearest stockist or to set up a supply arrangement! 🍹",
  "You can find Hope Kombucha through our official retail channels! 💚 We're expanding rapidly — reach out for the latest stockist information and delivery options near you! 🍹",
];

const wholesaleReplies = [
  "We'd love to partner with you! 💚 Hope Kombucha is designed as a scalable model for retail expansion — perfect for cafés, gyms, health stores, restaurants, and corporate wellness programs. Reach out for B2B pricing and supply details! 🍹",
  "Great interest! 🌿 Hope Kombucha offers retail and wholesale supply options. Whether you're a café, health store, gym, or events organizer, we have a solution for you! Contact our sales team for details! 🍹",
];

const veganReplies = [
  "Hope Kombucha is made with plant-based ingredients — tea, organic cane sugar, natural botanical flavors, and live SCOBY! 🌱 It's suitable for vegetarians and most dietary lifestyles. For specific dietary requirements, please check with our team! 🍹",
  "Our kombucha uses no animal products in its core ingredients! 🌱 Naturally plant-friendly, clean-label, and made with real botanical flavors. Always feel free to reach out if you have specific dietary needs! 🍹",
];

const comparisonReplies = [
  "Hope Kombucha is in a completely different league from soft drinks! 🌿 No artificial colors, no synthetic preservatives, live probiotics, natural carbonation, functional ingredients — all things regular sodas simply can't offer. It's your upgrade, not just a swap! 🍹",
  "Unlike sugary sodas or energy drinks, Hope Kombucha is naturally fermented, probiotic-rich, and clean-label! 💚 It refreshes you AND nourishes your gut — no crash, no guilt, just genuine wellness! 🍹",
];

const firstTimerReplies = [
  "Welcome to the world of kombucha! 🍹 If you're new, start with our Ginger or Mint variant — they're crowd favorites with approachable, familiar flavors. Drink chilled and start with a small amount to let your gut get used to the live cultures! 🌿",
  "New to kombucha? No worries at all! 😊 We recommend starting with Ginger or Hibiscus — both are delicious entry points. Drink chilled, enjoy the natural fizz, and let the probiotics do their magic! 🍹 You'll be a fan in no time!",
];

const productReplies = [
  "Hope Kombucha comes in 7 amazing flavors — Turmeric, Hibiscus, Mint, Ginger, Rose, Butterfly Pea, and Elixir! 🍹 All naturally carbonated, brewed with live SCOBY, in 300ml glass bottles. No artificial preservatives — just pure wellness! 🌿 Want details on any specific flavor?",
  "Our product lineup is a wellness rainbow! 🌿 Seven naturally fermented probiotic variants in 300ml glass bottles. Each flavor is infused during secondary fermentation for authentic depth and real benefits. Want details on a specific variant? 🍹",
];

const fallbackReplies = [
  "Hmm 🤔 I'm not sure about that yet, but I'd love to help you explore Hope Kombucha! What would you like to know?",
  "Great question! I specialize in Hope Kombucha — want to chat about flavors, wellness benefits, our process, or our story? 🌿",
  "I might not have that answer right now, but I know our kombucha inside out! 🍹 Can I help you with something Hope-related?",
  "Let's bring it back to what I know best — Hope Kombucha! 😊 Ask me about flavors, health benefits, our process, or our founder! 🌿",
  "Interesting! I'm best at helping with Hope Kombucha questions 🍹 What can I tell you about our brews, ingredients, or wellness benefits?",
];

// ═══════════════════════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════════════════════

const randomReply = (arr: Array<string>) =>
  arr[Math.floor(Math.random() * arr.length)];

const getBotReply = (input: string) => {
  const t = input.toLowerCase();

  if (
    /\b(hi|hello|hey|hiya|howdy|sup|yo|good morning|good evening|good afternoon|morning|afternoon|evening|greetings|what'?s up|wassup|heya)\b/.test(
      t,
    )
  )
    return randomReply(greetings);
  if (/how are you|how r u|how do you do|you good|you okay|you alright/.test(t))
    return randomReply(howAreYouReplies);
  if (/your name|what.*called|who are you|what are you/.test(t))
    return randomReply(nameReplies);
  if (/i love you|ily|luv you/.test(t)) return randomReply(loveReplies);
  if (
    /(you'?re|you are)\s+(great|awesome|amazing|cool|nice|wonderful|the best|helpful|fantastic|brilliant)/.test(
      t,
    )
  )
    return randomReply(complimentReplies);
  if (/thank|thanks|thx|\bty\b|appreciate/.test(t))
    return randomReply(thanksReplies);
  if (/bye|goodbye|see you|see ya|later|cya|take care/.test(t))
    return randomReply(byeReplies);
  if (/how old|your age/.test(t))
    return "I don't have an age — I'm timeless, just like the love in every Hope Kombucha! 😄 Can I help you find a flavor?";

  // Brand Q&A
  if (
    /what is kombucha|what'?s kombucha|explain kombucha|tell me about kombucha|kombucha meaning|define kombucha|kombucha drink/.test(
      t,
    )
  )
    return randomReply(whatIsKombuchaReplies);
  if (
    /about hope|about your brand|about the brand|who is hope|what is hope kombucha|tell me about hope|your company|your brand/.test(
      t,
    )
  )
    return randomReply(aboutBrandReplies);
  if (
    /founder|owner|who started|who created|who made|who built|who runs|dr arawdh|arawdh|man behind/.test(
      t,
    )
  )
    return randomReply(founderReplies);
  if (/\bturmeric\b/.test(t)) return randomReply(turmericReplies);
  if (/\bginger\b/.test(t)) return randomReply(gingerReplies);
  if (/\bhibiscus\b/.test(t)) return randomReply(hibiscusReplies);
  if (/\brose\b/.test(t)) return randomReply(roseReplies);
  if (/\bmint\b/.test(t)) return randomReply(mintReplies);
  if (/butterfly pea|\bpea\b/.test(t)) return randomReply(butterflyPeaReplies);
  if (/\belixir\b/.test(t)) return randomReply(elixirReplies);
  if (
    /flavor|flavour|variant|varieties|variety|available flavor|what flavor|how many flavor|types of|which flavor|all flavor/.test(
      t,
    )
  )
    return randomReply(flavorReplies);
  if (
    /process|how.*made|how.*brewed|fermentation|how do you make|brewing process|from leaf|production|manufacture/.test(
      t,
    )
  )
    return randomReply(processReplies);
  if (
    /scoby|what is scoby|symbiotic|bacteria.*yeast|live culture|culture/.test(t)
  )
    return randomReply(scobyReplies);
  if (
    /ingredient|what.*in it|contents|formula|what.*made of|composition/.test(t)
  )
    return randomReply(ingredientReplies);
  if (
    /health benefit|benefit|good for|why drink|healthy|wellness benefit|gut health|digestive|immunity|probiotic benefit/.test(
      t,
    )
  )
    return randomReply(healthBenefitReplies);
  if (/probiotic|microbi/.test(t)) return randomReply(probioticReplies);
  if (
    /artificial|preservative|additive|natural|clean label|no artificial/.test(t)
  )
    return randomReply(artificialReplies);
  if (/price|pricing|cost|how much|rate|charges|money|rupee|affordable/.test(t))
    return randomReply(pricingReplies);
  if (/pack size|packaging|bottle|glass bottle|300ml|\bml\b/.test(t))
    return randomReply(packagingReplies);
  if (
    /storage|store|keep|refrigerat|shelf life|how to keep|how to store/.test(t)
  )
    return randomReply(storageReplies);
  if (/delivery|deliver|shipping|dispatch/.test(t))
    return randomReply(deliveryReplies);
  if (
    /where.*buy|where.*get|available|stock|stockist|retail|shop|purchase|nearest|location|order/.test(
      t,
    )
  )
    return randomReply(whereToBuyReplies);
  if (/wholesale|bulk|b2b|retailer|cafe|gym|partner|resell|distribut/.test(t))
    return randomReply(wholesaleReplies);
  if (/for who|who is it for|target|customer|audience|suitable for/.test(t))
    return randomReply(targetCustomerReplies);
  if (
    /purpose|mission|vision|goal|why hope|why kombucha|philosophy|belief/.test(
      t,
    )
  )
    return randomReply(purposeReplies);
  if (/quality|fssai|certif|approved|complian|safety|standard/.test(t))
    return randomReply(qualityReplies);
  if (
    /market|position|segment|functional beverage|clean label|where.*stand|differenti/.test(
      t,
    )
  )
    return randomReply(marketPositionReplies);
  if (/safe|is it safe|can i drink|okay to drink/.test(t))
    return randomReply(safetyReplies);
  if (/sugar|sweet|how much sugar|sugar free|low sugar/.test(t))
    return randomReply(sugarReplies);
  if (/caffeine|caffeinated|energy|stimulant|coffee alternative/.test(t))
    return randomReply(caffeineReplies);
  if (/alcohol|alcoholic|percentage|ethanol/.test(t))
    return randomReply(alcoholReplies);
  if (/vs |versus|better than|compare|different from|unlike|instead of/.test(t))
    return randomReply(comparisonReplies);
  if (/vegan|vegetarian|diet|gluten|dairy|plant based/.test(t))
    return randomReply(veganReplies);
  if (
    /first time|new to kombucha|never tried|beginner|start with|recommend for beginner/.test(
      t,
    )
  )
    return randomReply(firstTimerReplies);
  if (
    /product|your drink|what do you sell|what do you offer|range|lineup/.test(t)
  )
    return randomReply(productReplies);

  return randomReply(fallbackReplies);
};

// ═══════════════════════════════════════════════════════
//  QUICK REPLIES
// ═══════════════════════════════════════════════════════

const quickReplies = [
  "Our Flavors 🍹",
  "Health Benefits 🌿",
  "Our Process ⚗️",
  "Where to Buy 🛒",
  "About Hope 💚",
  "Our Founder 👤",
];

// ═══════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Welcome to Hope Kombucha! 🍹 I'm Kombucha Buddy — your guide to all things gut-friendly and delicious. Ask me about our 7 flavors, ingredients, founder, wellness benefits, or how we brew!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: getBotReply(text) },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[320px] sm:w-[390px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-[#1B4D3E] px-5 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full  bg-white/20 flex items-center justify-center">
                  <Bot size={22} className="text-[#FF852C]" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">
                    Kombucha Buddy
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#4ade80] inline-block" />
                    <p className="text-[11px] text-white/70">
                      Online · Hope Kombucha
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="h-[340px] overflow-y-auto p-4 space-y-3 bg-slate-50/60"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-[#1B4D3E] flex items-center justify-center flex-shrink-0 mb-0.5">
                      <Bot size={14} className="text-[#FF852C]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#1B4D3E] text-white rounded-br-sm"
                        : "bg-white border border-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1B4D3E] flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-[#FF852C]" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1 items-center">
                      <span
                        className="w-2 h-2 bg-[#1B4D3E]/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-[#1B4D3E]/40 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-[#1B4D3E]/40 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2.5 bg-white border-t border-gray-50 flex gap-2 overflow-x-auto scrollbar-hide">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => handleSend(qr)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-[#1B4D3E]/20 text-[#1B4D3E] bg-[#1B4D3E]/5 hover:bg-[#1B4D3E]/10 transition font-medium"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2 items-center">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow bg-slate-100 rounded-full px-4 py-2.5 text-sm outline-none ring-1 focus:ring-2 ring-[#1B4D3E]/30 transition"
                  placeholder="Ask about Hope Kombucha..."
                />
                <button
                  onClick={() => handleSend()}
                  className="bg-[#FF852C] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e6731e] transition shadow-sm flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        className="w-16 h-16 rounded-full bg-[#FF852C] text-white flex items-center justify-center shadow-xl border border-gray-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;
