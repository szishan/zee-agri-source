// Bilingual pest, disease and indoor-plant catalogue. Reviewed 2026-11-09.
const LIBRARY_SOURCES={
  "borer": {
    "title": "কৃষকের জানালা · বেগুনের ডগা ও ফল ছিদ্রকারী পোকা",
    "url": "https://krishokerjanala.gov.bd/crop-problem/701"
  },
  "diamond": {
    "title": "UC IPM · Diamondback moth",
    "url": "https://ipm.ucanr.edu/agriculture/cole-crops/diamondback-moth/"
  },
  "cutworm": {
    "title": "UC IPM · Cutworms",
    "url": "https://ipm.ucanr.edu/agriculture/tomato/cutworms/"
  },
  "thrips": {
    "title": "UC IPM · Thrips",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/thrips/"
  },
  "miner": {
    "title": "Cornell · Leafminers",
    "url": "https://greenhouse.cornell.edu/pests-diseases/guidelines/cornell-pesticide-guidelines-supplemental-information-insects/"
  },
  "mite": {
    "title": "UC IPM · Spider mites",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/webspinning-spider-mites/"
  },
  "mealy": {
    "title": "UC IPM · Mealybugs",
    "url": "https://ipm.ucanr.edu/home-and-landscape/mealybugs/"
  },
  "scale": {
    "title": "UC IPM · Scales",
    "url": "https://ipm.ucanr.edu/home-and-landscape/scales/"
  },
  "gnat": {
    "title": "UC IPM · Fungus gnats",
    "url": "https://ipm.ucanr.edu/home-and-landscape/fungus-gnats/"
  },
  "flea": {
    "title": "UC IPM · Flea beetles",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/flea-beetle/"
  },
  "looper": {
    "title": "UC IPM · Cabbage looper",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/cabbage-looper/"
  },
  "army": {
    "title": "UC IPM · Armyworms",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/armyworm/"
  },
  "early": {
    "title": "UMN Extension · Early blight",
    "url": "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/early-blight-in-tomato-and-potato"
  },
  "late": {
    "title": "NC State · Tomato late blight",
    "url": "https://content.ces.ncsu.edu/tomato-late-blight"
  },
  "damping": {
    "title": "UMN Extension · Damping off",
    "url": "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/yard-and-garden-problems/how-to-prevent-seedling-damping-off"
  },
  "powdery": {
    "title": "UMN Extension · Powdery mildew",
    "url": "https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/disease-management/powdery-mildew-of-cucurbits"
  },
  "downy": {
    "title": "UC IPM · Downy mildew",
    "url": "https://ipm.ucanr.edu/agriculture/cucurbits/downy-mildew/"
  },
  "wilt": {
    "title": "NC State · Bacterial wilt",
    "url": "https://content.ces.ncsu.edu/bacterial-wilt-of-tomatoes"
  },
  "root": {
    "title": "UC IPM · Root rots",
    "url": "https://ipm.ucanr.edu/agriculture/eggplant/root-rots/"
  },
  "rice": {
    "title": "IRRI · Rice disease diagnosis",
    "url": "https://www.knowledgebank.irri.org/images/docs/diagnostic-of-common-diseases-of-rice.pdf"
  },
  "ricecare": {
    "title": "Department of Agriculture · Rice diseases",
    "url": "https://doa.gov.lk/rrdi_commonricediseases/"
  },
  "indoor": {
    "title": "MU Extension · Caring for houseplants",
    "url": "https://extension.missouri.edu/publications/g6510"
  },
  "light": {
    "title": "UMN Extension · Indoor plant lighting",
    "url": "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/lighting-for-indoor-plants"
  },
  "care": {
    "title": "WVU Extension · Common houseplant care",
    "url": "https://extension.wvu.edu/lawn-gardening-pests/indoor-plants/common-houseplant-care"
  },
  "sheath": {
    "title": "Department of Agriculture · Rice sheath",
    "url": "https://doa.gov.lk/rrdi_ricediseases_sheathblight/"
  },
  "brown": {
    "title": "Department of Agriculture · Rice brown",
    "url": "https://doa.gov.lk/rrdi_ricediseases_brownspot/"
  },
  "bacterial": {
    "title": "Department of Agriculture · Rice bacterial",
    "url": "https://doa.gov.lk/rrdi_ricediseases_bacterialleafblight/"
  }
};
const diseases=[{en:{name:'Rice blast',sci:'Magnaporthe oryzae',crop:'Crop: Rice',damage:'Spindle-shaped leaf lesions with pale centres can be associated with blast; neck infection can leave panicles empty. Other causes can look similar.',control:'Use locally recommended resistant varieties and balanced nitrogen. Ask an extension adviser to confirm the cause before treatment.'},bn:{name:'ধানের ব্লাস্ট',sci:'Magnaporthe oryzae',crop:'ফসল: ধান',damage:'ফ্যাকাশে কেন্দ্রযুক্ত মাকু আকৃতির দাগ ব্লাস্টের লক্ষণ হতে পারে; শীষের গোড়ায় আক্রমণে চিটা হতে পারে। অন্য কারণেও এমন লক্ষণ হয়।',control:'স্থানীয় সুপারিশকৃত প্রতিরোধী জাত ও সুষম নাইট্রোজেন ব্যবহার করুন। ব্যবস্থাপনার আগে কৃষি পরামর্শককে দিয়ে কারণ নিশ্চিত করুন।'}},{en:{name:'Leaf curl symptoms',sci:'Multiple causes; diagnosis required',crop:'Crop: Tomato and chili',damage:'Curled leaves and stunted growth may be associated with viruses, mites, herbicide injury or other stress. Whiteflies can transmit some leaf-curl viruses.',control:'Use healthy seedlings, protect nurseries and monitor whiteflies. A pesticide cannot cure a virus-infected plant; seek diagnosis before removing plants or spraying.'},bn:{name:'পাতা কোঁকড়ানো লক্ষণ',sci:'একাধিক কারণ; রোগনির্ণয় দরকার',crop:'ফসল: টমেটো ও মরিচ',damage:'কোঁকড়ানো পাতা ও খর্ব বৃদ্ধি ভাইরাস, মাকড়, আগাছানাশকের ক্ষতি বা অন্য চাপ থেকে হতে পারে। সাদা মাছি কিছু পাতা কোঁকড়ানো ভাইরাস ছড়ায়।',control:'সুস্থ চারা, সুরক্ষিত নার্সারি ও সাদা মাছি পর্যবেক্ষণ জরুরি। বালাইনাশকে ভাইরাস আক্রান্ত গাছ সারে না; গাছ সরানো বা স্প্রের আগে কারণ জানুন।'}}];
diseases.push(...[
  {
    "id": "early-blight",
    "images": [],
    "sources": [
      "early"
    ],
    "en": {
      "name": "Early blight",
      "sci": "Alternaria spp.",
      "crop": "Tomato and potato",
      "damage": "Brown spots with concentric rings usually begin on older leaves; surrounding tissue may yellow.",
      "control": "Keep leaves dry, improve airflow, mulch to reduce soil splash and rotate away from susceptible crops. Remove badly affected lower leaves while retaining healthy foliage."
    },
    "bn": {
      "name": "আগাম ধসা রোগ",
      "sci": "Alternaria spp.",
      "crop": "টমেটো ও আলু",
      "damage": "পুরোনো পাতায় সাধারণত বাদামি দাগে একের পর এক বলয় দেখা যায়; চারপাশ হলুদ হতে পারে।",
      "control": "পাতা শুকনো রাখুন, বাতাস চলাচল বাড়ান, মাটির ছিটা কমাতে মালচ দিন ও উপযোগী ফসল পর্যায়ক্রম করুন। সুস্থ পাতা রেখে বেশি আক্রান্ত নিচের পাতা সরান।"
    }
  },
  {
    "id": "late-blight",
    "images": [],
    "sources": [
      "late"
    ],
    "en": {
      "name": "Late blight",
      "sci": "Phytophthora infestans",
      "crop": "Tomato and potato",
      "damage": "Rapidly expanding water-soaked dark lesions occur on leaves and stems; humid conditions may produce white growth at lesion margins.",
      "control": "Seek prompt diagnosis because spread can be rapid. Start with healthy planting material, remove infected sources and avoid overhead watering. Use only locally advised, registered protection after confirmation."
    },
    "bn": {
      "name": "নাবি ধসা রোগ",
      "sci": "Phytophthora infestans",
      "crop": "টমেটো ও আলু",
      "damage": "পাতা ও কাণ্ডে পানিভেজা কালচে দাগ দ্রুত বাড়ে; আর্দ্র আবহাওয়ায় দাগের কিনারায় সাদা আবরণ হতে পারে।",
      "control": "দ্রুত ছড়াতে পারে বলে দ্রুত রোগ শনাক্ত করান। সুস্থ বীজ বা চারা নিন, সংক্রমণের উৎস সরান ও ওপর থেকে পানি দেওয়া এড়ান। নিশ্চিত হওয়ার পর স্থানীয় পরামর্শে নিবন্ধিত সুরক্ষা ব্যবস্থা নিন।"
    }
  },
  {
    "id": "damping-off",
    "images": [],
    "sources": [
      "damping"
    ],
    "en": {
      "name": "Damping off",
      "sci": "Pythium, Rhizoctonia and other pathogens",
      "crop": "Vegetable and ornamental seedlings",
      "damage": "Seeds may rot before emergence; emerged seedlings develop thin, water-soaked stems near soil level and collapse.",
      "control": "Use clean trays and fresh suitable seed-starting media. Avoid crowding, excessive moisture and poor drainage; give seedlings appropriate light. Remove diseased seedlings and do not reuse their media."
    },
    "bn": {
      "name": "চারা ঢলে পড়া / ড্যাম্পিং অফ",
      "sci": "Pythium, Rhizoctonia and other pathogens",
      "crop": "সবজি ও শোভাবর্ধক গাছের চারা",
      "damage": "বীজ ওঠার আগে পচতে পারে; ওঠা চারার গোড়া পানিভেজা ও সরু হয়ে চারা পড়ে যায়।",
      "control": "পরিষ্কার ট্রে ও নতুন উপযোগী চারা তৈরির মাধ্যম নিন। ঘন বপন, অতিরিক্ত ভেজাভাব ও জলাবদ্ধতা এড়ান; প্রয়োজনীয় আলো দিন। আক্রান্ত চারা ও তার মাধ্যম পুনর্ব্যবহার করবেন না।"
    }
  },
  {
    "id": "powdery-mildew",
    "images": [],
    "sources": [
      "powdery"
    ],
    "en": {
      "name": "Powdery mildew",
      "sci": "Podosphaera xanthii and related fungi",
      "crop": "Cucumber, gourds and pumpkin",
      "damage": "White powdery patches form on leaf surfaces and stems; affected leaves can yellow and dry.",
      "control": "Choose resistant varieties where available, allow airflow and check lower leaves early. Avoid excess nitrogen. Get local advice on registered fungicides if disease progresses; protect healthy foliage."
    },
    "bn": {
      "name": "পাউডারি মিলডিউ / সাদা গুঁড়া রোগ",
      "sci": "Podosphaera xanthii and related fungi",
      "crop": "শসা, লাউজাতীয় ফসল ও কুমড়া",
      "damage": "পাতা ও কাণ্ডে সাদা গুঁড়ার মতো ছোপ হয়; আক্রান্ত পাতা হলুদ ও শুকনো হতে পারে।",
      "control": "উপযোগী প্রতিরোধী জাত নিন, বাতাস চলাচল রাখুন এবং নিচের পাতা শুরু থেকেই দেখুন। অতিরিক্ত নাইট্রোজেন নয়। রোগ বাড়লে সুস্থ পাতা রক্ষায় স্থানীয় নিবন্ধিত ছত্রাকনাশকের পরামর্শ নিন।"
    }
  },
  {
    "id": "downy-mildew",
    "images": [],
    "sources": [
      "downy"
    ],
    "en": {
      "name": "Downy mildew",
      "sci": "Pseudoperonospora cubensis",
      "crop": "Cucumber and other cucurbits",
      "damage": "Angular yellow patches can be bounded by leaf veins. Grey-purple growth may develop underneath during humid weather.",
      "control": "Inspect both leaf surfaces and use suitable resistant varieties. Reduce prolonged leaf wetness and improve airflow. Seek early confirmation and local crop-specific protection advice."
    },
    "bn": {
      "name": "ডাউনি মিলডিউ",
      "sci": "Pseudoperonospora cubensis",
      "crop": "শসা ও অন্যান্য কুমড়াজাতীয় ফসল",
      "damage": "শিরায় সীমাবদ্ধ কৌণিক হলুদ দাগ হয়। আর্দ্র আবহাওয়ায় পাতার নিচে ধূসর-বেগুনি আবরণ দেখা যেতে পারে।",
      "control": "পাতার দুই পিঠ দেখুন ও উপযোগী প্রতিরোধী জাত নিন। দীর্ঘসময় পাতা ভেজা থাকা কমান এবং বাতাস চলাচল রাখুন। দ্রুত শনাক্ত করিয়ে স্থানীয় ফসলভিত্তিক ব্যবস্থা নিন।"
    }
  },
  {
    "id": "bacterial-wilt",
    "images": [],
    "sources": [
      "wilt"
    ],
    "en": {
      "name": "Bacterial wilt",
      "sci": "Ralstonia solanacearum species complex",
      "crop": "Tomato and other susceptible solanaceous crops",
      "damage": "Plants may wilt quickly while leaves remain green; the inner stem may brown. Several other problems also cause wilting.",
      "control": "Confirm the cause before removing plants. Use clean seedlings and resistant rootstocks where suitable; prevent movement of contaminated soil or water. Clean tools. Foliar fungicides do not cure bacterial wilt."
    },
    "bn": {
      "name": "ব্যাকটেরিয়াজনিত ঢলে পড়া",
      "sci": "Ralstonia solanacearum species complex",
      "crop": "টমেটো ও সংবেদনশীল সোলানেসি ফসল",
      "damage": "পাতা সবুজ থাকা অবস্থায় গাছ দ্রুত ঢলে পড়তে পারে; কাণ্ডের ভেতর বাদামি হয়। অন্য কারণেও ঢলে পড়া হয়।",
      "control": "গাছ সরানোর আগে কারণ নিশ্চিত করুন। পরিচ্ছন্ন চারা ও উপযোগী প্রতিরোধী রুটস্টক নিন; আক্রান্ত মাটি বা পানি ছড়ানো বন্ধ করুন। যন্ত্র পরিষ্কার রাখুন। পাতায় ছত্রাকনাশক দিয়ে এই রোগ সারে না।"
    }
  },
  {
    "id": "root-rot",
    "images": [],
    "sources": [
      "root"
    ],
    "en": {
      "name": "Root and collar rot symptoms",
      "sci": "Phytophthora, Pythium and other causes",
      "crop": "Vegetables and potted plants",
      "damage": "Plants wilt despite wet soil; roots or the collar may become dark, soft and decayed. Overwatering can cause similar decline.",
      "control": "Improve drainage and avoid standing water. Inspect roots, isolate affected pots and use clean planting media. Identify the cause before treatment; do not automatically add more water to a wilted plant."
    },
    "bn": {
      "name": "শিকড় ও গোড়া পচার লক্ষণ",
      "sci": "Phytophthora, Pythium and other causes",
      "crop": "সবজি ও টবের গাছ",
      "damage": "মাটি ভেজা থাকলেও গাছ ঢলে পড়ে; শিকড় বা গোড়া কালচে, নরম ও পচা হয়। অতিরিক্ত পানিতেও অনুরূপ অবনতি হয়।",
      "control": "নিষ্কাশন ঠিক করুন, পানি জমতে দেবেন না। শিকড় পরীক্ষা করুন, আক্রান্ত টব আলাদা রাখুন ও পরিচ্ছন্ন মাধ্যম নিন। ব্যবস্থা নেওয়ার আগে কারণ জানুন; ঢলে পড়া দেখলেই আরও পানি নয়।"
    }
  },
  {
    "id": "rice-sheath-blight",
    "images": [],
    "sources": [
      "sheath"
    ],
    "en": {
      "name": "Rice sheath blight",
      "sci": "Rhizoctonia solani",
      "crop": "Rice",
      "damage": "Oval or irregular lesions develop on leaf sheaths, often near the waterline; centres turn grey-white with darker margins.",
      "control": "Avoid excessive nitrogen and very dense planting. Monitor lower sheaths in humid canopies, manage infected residues and seek local advice if lesions spread upward."
    },
    "bn": {
      "name": "ধানের খোলপোড়া রোগ",
      "sci": "Rhizoctonia solani",
      "crop": "ধান",
      "damage": "প্রায়ই পানির কাছাকাছি পাতার খোলে ডিম্বাকার বা অনিয়মিত দাগ হয়; মাঝখান ধূসর-সাদা ও কিনারা গাঢ় হয়।",
      "control": "অতিরিক্ত নাইট্রোজেন ও খুব ঘন রোপণ এড়ান। আর্দ্র অবস্থায় নিচের খোল পরীক্ষা করুন, আক্রান্ত অবশিষ্টাংশ ব্যবস্থাপনা করুন এবং দাগ ওপরে উঠলে স্থানীয় পরামর্শ নিন।"
    }
  },
  {
    "id": "rice-brown-spot",
    "images": [],
    "sources": [
      "brown"
    ],
    "en": {
      "name": "Rice brown spot",
      "sci": "Bipolaris oryzae",
      "crop": "Rice",
      "damage": "Round to oval brown spots appear on leaves and sometimes grains. Larger spots may have pale centres and dark margins.",
      "control": "Use healthy seed and a locally suitable variety. Correct nutrient and water stress using soil-test advice; confirm the disease before selecting seed treatment or fungicides."
    },
    "bn": {
      "name": "ধানের বাদামি দাগ রোগ",
      "sci": "Bipolaris oryzae",
      "crop": "ধান",
      "damage": "পাতা ও কখনো দানায় গোল বা ডিম্বাকার বাদামি দাগ হয়। বড় দাগের মাঝখান ফ্যাকাশে ও কিনারা গাঢ় হতে পারে।",
      "control": "সুস্থ বীজ ও স্থানোপযোগী জাত নিন। মাটি পরীক্ষার পরামর্শে পুষ্টি ও পানির ঘাটতি ঠিক করুন; বীজ শোধন বা ছত্রাকনাশক বাছার আগে রোগ নিশ্চিত করুন।"
    }
  },
  {
    "id": "rice-bacterial-blight",
    "images": [],
    "sources": [
      "bacterial"
    ],
    "en": {
      "name": "Rice bacterial leaf blight",
      "sci": "Xanthomonas oryzae pv. oryzae",
      "crop": "Rice",
      "damage": "Yellowing and drying extend from leaf tips or margins, often with a wavy boundary; severe early infection can wilt seedlings.",
      "control": "Use locally recommended resistant varieties and balanced nitrogen. Reduce plant injury and infected residues. Confirm diagnosis; routine fungicides will not cure this bacterial disease."
    },
    "bn": {
      "name": "ধানের ব্যাকটেরিয়াজনিত পাতাপোড়া",
      "sci": "Xanthomonas oryzae pv. oryzae",
      "crop": "ধান",
      "damage": "পাতার আগা বা কিনারা থেকে হলুদ হয়ে শুকায়, সীমানা প্রায়ই ঢেউখেলানো; শুরুতে তীব্র আক্রমণে চারা ঢলে পড়তে পারে।",
      "control": "স্থানীয় সুপারিশকৃত প্রতিরোধী জাত ও সুষম নাইট্রোজেন নিন। গাছে আঘাত ও আক্রান্ত অবশিষ্টাংশ কমান। রোগ নিশ্চিত করুন; সাধারণ ছত্রাকনাশকে এই ব্যাকটেরিয়ার রোগ সারে না।"
    }
  }
]);
pestData.push(...[
  {
    "id": "eggplant-borer",
    "images": [],
    "sources": [
      "borer"
    ],
    "en": {
      "name": "Eggplant shoot and fruit borer",
      "sci": "Leucinodes orbonalis",
      "crop": "Eggplant",
      "damage": "Young shoots wilt; fruit may have small entry holes with droppings. Larvae feed inside shoots and fruit.",
      "control": "Remove infested shoots and fruit promptly. Use species-specific pheromone traps for monitoring and keep the plot free of infested residues. Seek local IPM advice for persistent attack."
    },
    "bn": {
      "name": "বেগুনের ডগা ও ফল ছিদ্রকারী পোকা",
      "sci": "Leucinodes orbonalis",
      "crop": "বেগুন",
      "damage": "কচি ডগা নেতিয়ে পড়ে; ফলে ছোট ছিদ্র ও বিষ্ঠা দেখা যায়। শুককীট ডগা ও ফলের ভেতরে খায়।",
      "control": "আক্রান্ত ডগা ও ফল দ্রুত সংগ্রহ করে সরান। পর্যবেক্ষণে নির্দিষ্ট প্রজাতির ফেরোমন ফাঁদ ব্যবহার করুন এবং আক্রান্ত অবশিষ্টাংশ জমিতে রাখবেন না। আক্রমণ চলতে থাকলে স্থানীয় আইপিএম পরামর্শ নিন।"
    }
  },
  {
    "id": "diamondback",
    "images": [],
    "sources": [
      "diamond"
    ],
    "en": {
      "name": "Diamondback moth",
      "sci": "Plutella xylostella",
      "crop": "Cabbage, cauliflower and other brassicas",
      "damage": "Small green larvae scrape leaf tissue, leaving translucent windows and irregular holes; they wriggle when disturbed.",
      "control": "Check leaf undersides and protect seedlings with insect netting. Conserve parasitoids; remove infested crop residues. Locally registered Bt products can target young larvae when intervention is justified."
    },
    "bn": {
      "name": "ডায়মন্ডব্যাক মথ",
      "sci": "Plutella xylostella",
      "crop": "বাঁধাকপি, ফুলকপি ও অন্যান্য কপিজাতীয় ফসল",
      "damage": "ছোট সবুজ শুককীট পাতা চেঁছে খায়; পাতায় স্বচ্ছ পর্দার মতো অংশ ও অনিয়মিত ছিদ্র হয়। বিরক্ত করলে নড়াচড়া করে।",
      "control": "পাতার নিচে দেখুন, চারা পোকা প্রতিরোধী নেটে রক্ষা করুন। উপকারী পরজীবী পোকা বাঁচান এবং আক্রান্ত ফসলের অবশিষ্টাংশ সরান। ব্যবস্থা প্রয়োজন হলে স্থানীয়ভাবে নিবন্ধিত বিটি পণ্য লেবেল মেনে কচি শুককীটে ব্যবহার করা যায়।"
    }
  },
  {
    "id": "cutworm",
    "images": [],
    "sources": [
      "cutworm"
    ],
    "en": {
      "name": "Cutworms",
      "sci": "Agrotis spp. and related moths",
      "crop": "Vegetable seedlings and tomato",
      "damage": "Seedlings are cut near the soil surface, often overnight. Smooth caterpillars may curl up in soil beside damaged plants.",
      "control": "Inspect at dusk and remove larvae in small plots. Clear weeds and residues before planting; protect individual seedlings with collars. Check affected patches before considering treatment."
    },
    "bn": {
      "name": "কাটুই পোকা",
      "sci": "Agrotis spp. and related moths",
      "crop": "সবজির চারা ও টমেটো",
      "damage": "রাতে মাটির কাছ থেকে চারা কেটে পড়ে। ক্ষতিগ্রস্ত গাছের পাশের মাটিতে কুণ্ডলী পাকানো মসৃণ শুককীট থাকতে পারে।",
      "control": "সন্ধ্যায় দেখে ছোট জমিতে শুককীট সংগ্রহ করুন। রোপণের আগে আগাছা ও অবশিষ্টাংশ সরান; চারার গোড়ায় সুরক্ষাবেষ্টনী দিন। ব্যবস্থা নেওয়ার আগে আক্রান্ত অংশ চিহ্নিত করুন।"
    }
  },
  {
    "id": "thrips",
    "images": [],
    "sources": [
      "thrips"
    ],
    "en": {
      "name": "Thrips",
      "sci": "Thysanoptera; several species",
      "crop": "Vegetables and ornamental plants",
      "damage": "Feeding causes silvery scars, distorted tender leaves and small black specks. Check flowers and growing tips for slender insects.",
      "control": "Inspect new plants and flowers; remove heavily infested material and manage nearby host weeds. Preserve natural enemies. Confirm the species and damage before choosing a locally registered treatment."
    },
    "bn": {
      "name": "থ্রিপস",
      "sci": "Thysanoptera; several species",
      "crop": "সবজি ও শোভাবর্ধক গাছ",
      "damage": "পাতায় রুপালি আঁচড়, কচি পাতা বিকৃতি ও ছোট কালো বিন্দু হয়। ফুল ও কচি ডগায় সরু পোকা দেখুন।",
      "control": "নতুন গাছ ও ফুল পরীক্ষা করুন; বেশি আক্রান্ত অংশ এবং আশপাশের আশ্রয়দাতা আগাছা সরান। উপকারী পোকা সংরক্ষণ করুন। স্থানীয় নিবন্ধিত ব্যবস্থা বাছার আগে পোকা ও ক্ষতি নিশ্চিত করুন।"
    }
  },
  {
    "id": "leafminer",
    "images": [],
    "sources": [
      "miner"
    ],
    "en": {
      "name": "Leafminer flies",
      "sci": "Liriomyza spp.",
      "crop": "Tomato, beans and other vegetables",
      "damage": "Pale winding or blotchy tunnels form within leaves. Small larvae feed between the leaf surfaces.",
      "control": "Inspect new leaves. In small infestations remove leaves containing active larvae without stripping the plant. Remove host weeds and conserve parasitoid wasps; old empty mines alone do not justify spraying."
    },
    "bn": {
      "name": "পাতা সুড়ঙ্গকারী মাছি",
      "sci": "Liriomyza spp.",
      "crop": "টমেটো, শিম ও অন্যান্য সবজি",
      "damage": "পাতার ভেতরে আঁকাবাঁকা সাদা বা ছোপযুক্ত সুড়ঙ্গ দেখা যায়। ছোট শুককীট পাতার দুই পৃষ্ঠের মাঝের অংশ খায়।",
      "control": "নতুন পাতা পরীক্ষা করুন। অল্প আক্রমণে জীবন্ত শুককীটসহ পাতা সরান, তবে গাছের অতিরিক্ত পাতা ছাঁটবেন না। আশ্রয়দাতা আগাছা সরান ও উপকারী পরজীবী পোকা বাঁচান; শুধু পুরোনো খালি সুড়ঙ্গ দেখে স্প্রে নয়।"
    }
  },
  {
    "id": "spider-mite",
    "images": [],
    "sources": [
      "mite"
    ],
    "en": {
      "name": "Spider mites",
      "sci": "Tetranychus spp. (mites, not insects)",
      "crop": "Eggplant, vegetables and indoor plants",
      "damage": "Fine pale stippling becomes bronze or dry leaf tissue; fine webbing may occur underneath. Use a hand lens to inspect mites.",
      "control": "Reduce dust and plant water stress. Isolate affected pots; gently rinse robust leaves and conserve predatory mites. Avoid routine broad-spectrum sprays that kill natural enemies."
    },
    "bn": {
      "name": "লাল মাকড় / স্পাইডার মাইট",
      "sci": "Tetranychus spp. (mites, not insects)",
      "crop": "বেগুন, সবজি ও ইনডোর গাছ",
      "damage": "পাতায় ছোট ফ্যাকাশে বিন্দু পরে তামাটে বা শুকনো হয়; নিচে সূক্ষ্ম জাল থাকতে পারে। হাতলেন্স দিয়ে মাকড় দেখুন।",
      "control": "ধুলো ও পানির ঘাটতিজনিত চাপ কমান। আক্রান্ত টব আলাদা রাখুন; সহনশীল পাতা আলতো পানিতে ধুয়ে দিন এবং শিকারি মাকড় বাঁচান। উপকারী জীব মারে এমন নির্বিচার স্প্রে এড়ান।"
    }
  },
  {
    "id": "mealybug",
    "images": [],
    "sources": [
      "mealy"
    ],
    "en": {
      "name": "Mealybugs",
      "sci": "Pseudococcidae",
      "crop": "Indoor plants, ornamentals and fruit crops",
      "damage": "White cottony clusters collect around leaf joints and tender shoots. Sticky honeydew and sooty mould may follow.",
      "control": "Inspect and isolate new or infested pots. Wipe off small colonies, prune badly infested parts and control ants where they protect pests. Avoid excess nitrogen."
    },
    "bn": {
      "name": "মিলিবাগ / সাদা তুলাপোকা",
      "sci": "Pseudococcidae",
      "crop": "ইনডোর গাছ, শোভাবর্ধক গাছ ও ফলের গাছ",
      "damage": "পাতার গোড়া ও কচি ডগায় সাদা তুলার মতো দল দেখা যায়। আঠালো মধুরস ও কালো ছত্রাক হতে পারে।",
      "control": "নতুন বা আক্রান্ত টব পরীক্ষা করে আলাদা রাখুন। অল্প পোকা মুছে সরান, বেশি আক্রান্ত অংশ ছাঁটুন এবং পোকাকে রক্ষা করলে পিঁপড়া নিয়ন্ত্রণ করুন। অতিরিক্ত নাইট্রোজেন এড়ান।"
    }
  },
  {
    "id": "scale",
    "images": [],
    "sources": [
      "scale"
    ],
    "en": {
      "name": "Scale insects",
      "sci": "Coccoidea",
      "crop": "Ornamental and indoor plants",
      "damage": "Small immobile raised covers appear on stems or leaves. Leaves may yellow; soft scales can produce sticky honeydew.",
      "control": "Inspect stems and leaf undersides; isolate affected pots and gently remove small colonies. Preserve natural enemies and identify the scale type before treatment, especially the vulnerable crawler stage."
    },
    "bn": {
      "name": "স্কেল পোকা",
      "sci": "Coccoidea",
      "crop": "শোভাবর্ধক ও ইনডোর গাছ",
      "damage": "কাণ্ড বা পাতায় স্থির ছোট উঁচু আবরণের মতো পোকা দেখা যায়। পাতা হলুদ হতে পারে; নরম স্কেল আঠালো মধুরস ছাড়ে।",
      "control": "কাণ্ড ও পাতার নিচে দেখুন; আক্রান্ত টব আলাদা করে অল্প পোকা আলতোভাবে সরান। উপকারী জীব বাঁচান; ব্যবস্থা বাছার আগে স্কেলের ধরন ও চলমান কচি দশা শনাক্ত করুন।"
    }
  },
  {
    "id": "fungus-gnat",
    "images": [],
    "sources": [
      "gnat"
    ],
    "en": {
      "name": "Fungus gnats",
      "sci": "Bradysia and related genera",
      "crop": "Potting media and young plants",
      "damage": "Tiny dark flies hover over wet potting mix. Larvae feed on organic matter and sometimes roots, particularly in seedlings.",
      "control": "Avoid overwatering and improve drainage. Let the surface dry as appropriate for the plant; remove decaying matter. Yellow sticky cards monitor adults; do not spray flying adults indoors."
    },
    "bn": {
      "name": "ফাঙ্গাস ন্যাট / টবের ছোট মাছি",
      "sci": "Bradysia and related genera",
      "crop": "টবের মাটি ও কচি গাছ",
      "damage": "ভেজা টবের মাটির ওপরে ছোট কালো মাছি ওড়ে। শুককীট জৈব পদার্থ ও কখনো বিশেষত চারার শিকড় খায়।",
      "control": "অতিরিক্ত পানি এড়িয়ে নিষ্কাশন ঠিক করুন। গাছের প্রয়োজন অনুযায়ী ওপরের মাটি শুকাতে দিন এবং পচা অংশ সরান। হলুদ আঠালো কার্ডে পূর্ণবয়স্ক মাছি পর্যবেক্ষণ করুন; ঘরের ভেতর উড়ন্ত মাছিতে স্প্রে করবেন না।"
    }
  },
  {
    "id": "flea-beetle",
    "images": [],
    "sources": [
      "flea"
    ],
    "en": {
      "name": "Flea beetles",
      "sci": "Alticini; several species",
      "crop": "Eggplant and vegetable seedlings",
      "damage": "Small jumping beetles chew numerous tiny round holes, giving young leaves a shot-hole appearance.",
      "control": "Monitor seedlings closely; insect netting can protect young plants when beetles are excluded. Manage host weeds before planting and avoid unnecessary treatment of established plants with minor injury."
    },
    "bn": {
      "name": "ফ্লি বিটল / লাফানো পাতাপোকা",
      "sci": "Alticini; several species",
      "crop": "বেগুন ও সবজির চারা",
      "damage": "ছোট লাফানো বিটল পাতায় অসংখ্য গোল ছিদ্র করে; কচি পাতায় গুলির ছিদ্রের মতো ক্ষতি দেখা যায়।",
      "control": "চারায় নিয়মিত দেখুন; পোকামুক্ত চারায় জাল দিয়ে প্রবেশ আটকান। রোপণের আগে আশ্রয়দাতা আগাছা সরান। বড় গাছের সামান্য ক্ষতিতে অপ্রয়োজনীয় ব্যবস্থা নয়।"
    }
  },
  {
    "id": "looper",
    "images": [],
    "sources": [
      "looper"
    ],
    "en": {
      "name": "Cabbage looper",
      "sci": "Trichoplusia ni",
      "crop": "Cabbage, eggplant and other vegetables",
      "damage": "Green caterpillars arch their bodies while moving and chew irregular leaf holes. Larger larvae can remove substantial leaf tissue.",
      "control": "Inspect leaf undersides for eggs and small larvae. Hand-pick in small gardens and protect natural enemies. Use locally approved caterpillar-specific biological controls only where needed."
    },
    "bn": {
      "name": "লুপার / পাতা খেকো শুককীট",
      "sci": "Trichoplusia ni",
      "crop": "বাঁধাকপি, বেগুন ও অন্যান্য সবজি",
      "damage": "সবুজ শুককীট শরীর বাঁকিয়ে চলে এবং পাতায় অনিয়মিত ছিদ্র করে। বড় শুককীট পাতার অনেক অংশ খেয়ে ফেলে।",
      "control": "পাতার নিচে ডিম ও কচি শুককীট দেখুন। ছোট বাগানে হাতে সংগ্রহ করুন এবং উপকারী পোকা বাঁচান। প্রয়োজন হলে স্থানীয় অনুমোদিত শুককীটনির্দিষ্ট জৈবিক ব্যবস্থা নিন।"
    }
  },
  {
    "id": "armyworm",
    "images": [],
    "sources": [
      "army"
    ],
    "en": {
      "name": "Leaf-eating armyworms",
      "sci": "Spodoptera spp.",
      "crop": "Eggplant and vegetables",
      "damage": "Young larvae may feed in groups and skeletonise leaves; older larvae chew larger holes and can scar fruit.",
      "control": "Look for egg masses and small larvae. Remove infested leaves or larvae in small plots, keep residues managed and preserve beneficial insects. Confirm the species before selecting pheromone traps."
    },
    "bn": {
      "name": "পাতা খেকো লেদাপোকা",
      "sci": "Spodoptera spp.",
      "crop": "বেগুন ও অন্যান্য সবজি",
      "damage": "কচি শুককীট দলবেঁধে পাতা চেঁছে জালের মতো করে; বড় শুককীট বড় ছিদ্র করে এবং ফলেও ক্ষত করতে পারে।",
      "control": "ডিমের গুচ্ছ ও কচি শুককীট খুঁজুন। ছোট জমিতে আক্রান্ত পাতা বা পোকা সংগ্রহ করুন, অবশিষ্টাংশ পরিষ্কার রাখুন ও উপকারী পোকা বাঁচান। ফেরোমন ফাঁদ বাছার আগে প্রজাতি নিশ্চিত করুন।"
    }
  }
]);
const INDOOR_PLANTS=[
  {
    "id": "pothos",
    "name": {
      "en": "Pothos / money plant",
      "bn": "পথোস / মানিপ্ল্যান্ট"
    },
    "images": [
      "images/indoor-plants/web/pothos.jpg",
      "images/indoor-plants/web/marble-pothos-indoor-hanging-plant.jpg",
      "images/indoor-plants/web/indoor-plants-studio.jpg"
    ],
    "light": {
      "en": "Bright indirect light; tolerates lower light",
      "bn": "উজ্জ্বল পরোক্ষ আলো; কম আলোও কিছুটা সহ্য করে"
    },
    "water": {
      "en": "Water when the upper mix has dried",
      "bn": "ওপরের মাধ্যম শুকালে পানি দিন"
    },
    "description": {
      "en": "Trailing foliage for shelves or a support. Variegation and leaf shape vary.",
      "bn": "তাক বা অবলম্বনে ঝুলিয়ে রাখা যায়। জাতভেদে পাতার রং ও আকার ভিন্ন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "monstera",
    "name": {
      "en": "Monstera",
      "bn": "মনস্টেরা"
    },
    "images": [
      "images/indoor-plants/web/monstera.jpg"
    ],
    "light": {
      "en": "Bright indirect light",
      "bn": "উজ্জ্বল পরোক্ষ আলো"
    },
    "water": {
      "en": "Let the surface dry slightly; drain excess water",
      "bn": "ওপরের অংশ সামান্য শুকালে পানি দিন; অতিরিক্ত পানি ঝরান"
    },
    "description": {
      "en": "Give the spreading leaves room and a climbing support as the plant grows.",
      "bn": "পাতা ছড়ানোর জায়গা রাখুন এবং বড় হলে ওঠার অবলম্বন দিন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "peace-lily",
    "name": {
      "en": "Peace lily",
      "bn": "পিস লিলি"
    },
    "images": [
      "images/indoor-plants/web/peace-lily-plant-white-pot.jpg",
      "images/indoor-plants/web/peace-lily.jpg"
    ],
    "light": {
      "en": "Indirect light; avoid harsh midday sun",
      "bn": "পরোক্ষ আলো; দুপুরের কড়া রোদ এড়ান"
    },
    "water": {
      "en": "Keep lightly moist, never waterlogged",
      "bn": "হালকা আর্দ্র রাখুন; জলাবদ্ধ নয়"
    },
    "description": {
      "en": "White spathes and green foliage; flowering depends on light and plant condition.",
      "bn": "সাদা ফুলের মতো আবরণ ও সবুজ পাতা; আলো ও গাছের অবস্থার ওপর ফুল নির্ভর করে।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "snake",
    "name": {
      "en": "Snake plant",
      "bn": "স্নেক প্ল্যান্ট"
    },
    "images": [
      "images/indoor-plants/web/snake.jpg"
    ],
    "light": {
      "en": "Indirect light; tolerates lower light",
      "bn": "পরোক্ষ আলো; কম আলো কিছুটা সহ্য করে"
    },
    "water": {
      "en": "Allow the mix to dry between waterings",
      "bn": "দুইবার পানি দেওয়ার মাঝে মাধ্যম শুকাতে দিন"
    },
    "description": {
      "en": "Upright patterned leaves. A drainage hole is important for its fleshy roots.",
      "bn": "খাড়া নকশাযুক্ত পাতা। মাংসল শিকড়ের জন্য টবে নিষ্কাশন ছিদ্র জরুরি।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "zz",
    "name": {
      "en": "ZZ plant",
      "bn": "জেডজেড প্ল্যান্ট"
    },
    "images": [
      "images/indoor-plants/web/zz.jpg"
    ],
    "light": {
      "en": "Indirect light; tolerates lower light",
      "bn": "পরোক্ষ আলো; কম আলো কিছুটা সহ্য করে"
    },
    "water": {
      "en": "Allow the mix to dry; water sparingly in low light",
      "bn": "মাধ্যম শুকাতে দিন; কম আলোয় পানি কম লাগে"
    },
    "description": {
      "en": "Glossy leaves and thick storage organs; avoid constantly wet potting mix.",
      "bn": "চকচকে পাতা ও মোটা সঞ্চয়ী অংশ; টবের মাধ্যম সবসময় ভেজা রাখবেন না।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "fern",
    "name": {
      "en": "Fern",
      "bn": "ফার্ন"
    },
    "images": [
      "images/indoor-plants/web/fern.jpg"
    ],
    "light": {
      "en": "Filtered or indirect light",
      "bn": "ছাঁকা বা পরোক্ষ আলো"
    },
    "water": {
      "en": "Keep evenly moist with good drainage",
      "bn": "নিষ্কাশন রেখে সমান আর্দ্রতা বজায় রাখুন"
    },
    "description": {
      "en": "Fine divided foliage. Confirm the fern species before choosing a precise care routine.",
      "bn": "সূক্ষ্ম বিভক্ত পাতা। নির্দিষ্ট পরিচর্যা ঠিক করতে ফার্নের প্রজাতি নিশ্চিত করুন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "anthurium",
    "name": {
      "en": "Anthurium",
      "bn": "অ্যান্থুরিয়াম"
    },
    "images": [
      "images/indoor-plants/web/red-anthurium-plant-gray-pot.jpg"
    ],
    "light": {
      "en": "Bright indirect light",
      "bn": "উজ্জ্বল পরোক্ষ আলো"
    },
    "water": {
      "en": "Let the upper mix start drying; avoid standing water",
      "bn": "ওপরের মাধ্যম শুকাতে শুরু করলে পানি দিন; পানি জমাবেন না"
    },
    "description": {
      "en": "Red spathes and glossy leaves; use an airy potting mix.",
      "bn": "লাল ফুলের মতো আবরণ ও চকচকে পাতা; বাতাস চলাচলকারী মাধ্যম দিন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "cactus",
    "name": {
      "en": "Cactus",
      "bn": "ক্যাকটাস"
    },
    "images": [
      "images/indoor-plants/web/cactus.jpg"
    ],
    "light": {
      "en": "Very bright light; acclimatise to direct sun",
      "bn": "খুব উজ্জ্বল আলো; সরাসরি রোদে ধীরে অভ্যস্ত করুন"
    },
    "water": {
      "en": "Let the mix dry thoroughly",
      "bn": "মাধ্যম ভালোভাবে শুকাতে দিন"
    },
    "description": {
      "en": "Spiny succulent group; exact light needs depend on species.",
      "bn": "কাঁটাযুক্ত রসালো গাছের দল; নির্দিষ্ট আলোর চাহিদা প্রজাতিভেদে ভিন্ন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "succulent",
    "name": {
      "en": "Succulent",
      "bn": "সাকুলেন্ট"
    },
    "images": [
      "images/indoor-plants/web/succulent.jpg"
    ],
    "light": {
      "en": "Bright light appropriate to the species",
      "bn": "প্রজাতি অনুযায়ী উজ্জ্বল আলো"
    },
    "water": {
      "en": "Allow the mix to dry; provide rapid drainage",
      "bn": "মাধ্যম শুকাতে দিন; দ্রুত নিষ্কাশন রাখুন"
    },
    "description": {
      "en": "Fleshy leaves store water. Confirm the species before choosing direct-sun exposure.",
      "bn": "মাংসল পাতায় পানি জমা থাকে। সরাসরি রোদ দেওয়ার আগে প্রজাতি নিশ্চিত করুন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "bamboo",
    "name": {
      "en": "Lucky bamboo",
      "bn": "লাকি ব্যাম্বু"
    },
    "images": [
      "images/indoor-plants/web/bamboo.jpg"
    ],
    "light": {
      "en": "Bright filtered light",
      "bn": "উজ্জ্বল ছাঁকা আলো"
    },
    "water": {
      "en": "Match watering to soil or water-grown culture",
      "bn": "মাটি বা পানিতে লাগানোর পদ্ধতি অনুযায়ী পরিচর্যা করুন"
    },
    "description": {
      "en": "A Dracaena, not a true bamboo; keep the container clean.",
      "bn": "এটি ড্রাসিনা, প্রকৃত বাঁশ নয়; পাত্র পরিষ্কার রাখুন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "ivy",
    "name": {
      "en": "Climbing foliage / ivy reference",
      "bn": "লতানো গাছ / আইভির নমুনা"
    },
    "images": [
      "images/indoor-plants/web/ivy.jpg"
    ],
    "light": {
      "en": "Species-dependent; the photo shows outdoor growth",
      "bn": "প্রজাতিভেদে ভিন্ন; ছবিতে বাইরে বেড়ে ওঠা গাছ"
    },
    "water": {
      "en": "Confirm species before setting a watering routine",
      "bn": "পানির নিয়ম ঠিক করার আগে প্রজাতি নিশ্চিত করুন"
    },
    "description": {
      "en": "The building-climbing photo does not confirm an indoor species. Identify it before indoor placement.",
      "bn": "ভবনের গায়ে ওঠা এই ছবি থেকে ইনডোর প্রজাতি নিশ্চিত নয়। ঘরে রাখার আগে পরিচয় নিশ্চিত করুন।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  },
  {
    "id": "arrangement",
    "name": {
      "en": "Decorative potted arrangement",
      "bn": "সাজানো টবের প্রদর্শনী"
    },
    "images": [
      "images/indoor-plants/web/front-view-potted-plant-wooden-surface.jpg"
    ],
    "light": {
      "en": "Confirm the plants in the arrangement",
      "bn": "সাজানো টবের গাছগুলোর পরিচয় নিশ্চিত করুন"
    },
    "water": {
      "en": "Care depends on whether plants are live and their species",
      "bn": "জীবন্ত গাছ ও প্রজাতির পরিচয় অনুযায়ী পরিচর্যা"
    },
    "description": {
      "en": "A styling reference; this image does not establish a single plant species.",
      "bn": "সাজসজ্জার নমুনা; ছবিটি থেকে একটি নির্দিষ্ট প্রজাতি নিশ্চিত নয়।"
    },
    "sources": [
      "indoor",
      "light",
      "care"
    ]
  }
];
