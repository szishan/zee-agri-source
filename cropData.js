const cropData = {

            rice: {

                en: {
                    title: "🌾 Rice",
                    text: "Rice is one of the major food crops. Proper variety selection, land preparation, balanced fertilization, irrigation and pest management are important for successful production."
                },

                bn: {
                    title: "🌾 ধান",
                    text: "ধান বাংলাদেশের অন্যতম প্রধান খাদ্যশস্য। সঠিক জাত নির্বাচন, জমি প্রস্তুতি, সুষম সার ব্যবস্থাপনা, সেচ এবং বালাই ব্যবস্থাপনা ধানের ভালো ফলনের জন্য গুরুত্বপূর্ণ।"
                }

            },

            wheat: {

                en: {
                    title: "🌾 Wheat",
                    text: "Wheat is mainly cultivated during the cooler season. Proper sowing time, quality seed, balanced fertilizer and irrigation management are important."
                },

                bn: {
                    title: "🌾 গম",
                    text: "গম প্রধানত শীতকালীন মৌসুমে চাষ করা হয়। সঠিক সময়ে বপন, মানসম্মত বীজ, সুষম সার ও সেচ ব্যবস্থাপনা গুরুত্বপূর্ণ।"
                }

            },

            maize: {

                en: {
                    title: "🌽 Maize",
                    text: "Maize requires good soil preparation, quality seed, proper plant spacing, balanced nutrition and effective pest management."
                },

                bn: {
                    title: "🌽 ভুট্টা",
                    text: "ভুট্টার জন্য ভালোভাবে জমি প্রস্তুত করা, মানসম্মত বীজ, সঠিক দূরত্ব, সুষম পুষ্টি এবং কার্যকর বালাই ব্যবস্থাপনা গুরুত্বপূর্ণ।"
                }

            },

            chili: {

                en: {
                    title: "🌶️ Chili",
                    text: "Chili production requires suitable varieties, healthy seedlings, proper irrigation, balanced fertilizer and careful monitoring of insects and diseases."
                },

                bn: {
                    title: "🌶️ মরিচ",
                    text: "মরিচ চাষে উপযোগী জাত, সুস্থ চারা, সঠিক সেচ, সুষম সার এবং পোকামাকড় ও রোগ নিয়মিত পর্যবেক্ষণ গুরুত্বপূর্ণ।"
                }

            },

            tomato: {

                en: {
                    title: "🍅 Tomato",
                    text: "Tomato grows well under suitable temperature and good management. Proper nursery management, staking, irrigation, nutrition and disease management are important."
                },

                bn: {
                    title: "🍅 টমেটো",
                    text: "উপযুক্ত তাপমাত্রা ও ভালো ব্যবস্থাপনায় টমেটো ভালো হয়। নার্সারি ব্যবস্থাপনা, খুঁটি দেওয়া, সেচ, পুষ্টি ও রোগ ব্যবস্থাপনা গুরুত্বপূর্ণ।"
                }

            }

        };



// Expanded bilingual vegetable catalogue.
Object.assign(cropData, {
  "potato": {
    "en": {
      "title": "Potato",
      "text": "Potato: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "আলু",
      "text": "আলু চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "cabbage": {
    "en": {
      "title": "Cabbage",
      "text": "Cabbage: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "বাঁধাকপি",
      "text": "বাঁধাকপি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "cauliflower": {
    "en": {
      "title": "Cauliflower",
      "text": "Cauliflower: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ফুলকপি",
      "text": "ফুলকপি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "cucumber": {
    "en": {
      "title": "Cucumber",
      "text": "Cucumber: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "শসা",
      "text": "শসা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "pumpkin": {
    "en": {
      "title": "Pumpkin / squash",
      "text": "Pumpkin / squash: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "কুমড়া",
      "text": "কুমড়া চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "papaya": {
    "en": {
      "title": "Green papaya",
      "text": "Green papaya: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "কাঁচা পেঁপে",
      "text": "কাঁচা পেঁপে চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "zucchini": {
    "en": {
      "title": "Zucchini",
      "text": "Zucchini: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "জুকিনি",
      "text": "জুকিনি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "eggplant": {
    "en": {
      "title": "Eggplant / brinjal",
      "text": "Eggplant / brinjal: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "বেগুন",
      "text": "বেগুন চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "okra": {
    "en": {
      "title": "Okra",
      "text": "Okra: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ঢেঁড়স",
      "text": "ঢেঁড়স চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "bottle-gourd": {
    "en": {
      "title": "Bottle gourd",
      "text": "Bottle gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "লাউ",
      "text": "লাউ চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "bitter-gourd": {
    "en": {
      "title": "Bitter gourd",
      "text": "Bitter gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "করলা",
      "text": "করলা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "ridge-gourd": {
    "en": {
      "title": "Ridge gourd",
      "text": "Ridge gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ঝিঙে",
      "text": "ঝিঙে চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "sponge-gourd": {
    "en": {
      "title": "Sponge gourd",
      "text": "Sponge gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ধুন্দুল",
      "text": "ধুন্দুল চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "snake-gourd": {
    "en": {
      "title": "Snake gourd",
      "text": "Snake gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "চিচিঙ্গা",
      "text": "চিচিঙ্গা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "ash-gourd": {
    "en": {
      "title": "Ash gourd",
      "text": "Ash gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "চালকুমড়া",
      "text": "চালকুমড়া চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "pointed-gourd": {
    "en": {
      "title": "Pointed gourd",
      "text": "Pointed gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "পটল",
      "text": "পটল চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "spiny-gourd": {
    "en": {
      "title": "Spiny gourd",
      "text": "Spiny gourd: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "কাঁকরোল",
      "text": "কাঁকরোল চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "yardlong-bean": {
    "en": {
      "title": "Yardlong bean",
      "text": "Yardlong bean: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "বরবটি",
      "text": "বরবটি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "hyacinth-bean": {
    "en": {
      "title": "Hyacinth bean",
      "text": "Hyacinth bean: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "শিম",
      "text": "শিম চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "peas": {
    "en": {
      "title": "Peas",
      "text": "Peas: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "মটরশুঁটি",
      "text": "মটরশুঁটি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "radish": {
    "en": {
      "title": "Radish",
      "text": "Radish: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "মুলা",
      "text": "মুলা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "carrot": {
    "en": {
      "title": "Carrot",
      "text": "Carrot: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "গাজর",
      "text": "গাজর চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "turnip": {
    "en": {
      "title": "Turnip",
      "text": "Turnip: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "শালগম",
      "text": "শালগম চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "broccoli": {
    "en": {
      "title": "Broccoli",
      "text": "Broccoli: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ব্রকলি",
      "text": "ব্রকলি চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "spinach": {
    "en": {
      "title": "Spinach",
      "text": "Spinach: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "পালংশাক",
      "text": "পালংশাক চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "red-amaranth": {
    "en": {
      "title": "Red amaranth",
      "text": "Red amaranth: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "লালশাক",
      "text": "লালশাক চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "stem-amaranth": {
    "en": {
      "title": "Stem amaranth",
      "text": "Stem amaranth: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ডাঁটাশাক",
      "text": "ডাঁটাশাক চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "malabar-spinach": {
    "en": {
      "title": "Malabar spinach",
      "text": "Malabar spinach: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "পুঁইশাক",
      "text": "পুঁইশাক চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "water-spinach": {
    "en": {
      "title": "Water spinach",
      "text": "Water spinach: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "কলমিশাক",
      "text": "কলমিশাক চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "taro": {
    "en": {
      "title": "Taro",
      "text": "Taro: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "কচু",
      "text": "কচু চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "sweet-potato": {
    "en": {
      "title": "Sweet potato",
      "text": "Sweet potato: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "মিষ্টি আলু",
      "text": "মিষ্টি আলু চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "moringa": {
    "en": {
      "title": "Moringa / drumstick",
      "text": "Moringa / drumstick: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "সজিনা",
      "text": "সজিনা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "onion": {
    "en": {
      "title": "Onion",
      "text": "Onion: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "পেঁয়াজ",
      "text": "পেঁয়াজ চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "garlic": {
    "en": {
      "title": "Garlic",
      "text": "Garlic: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "রসুন",
      "text": "রসুন চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "coriander": {
    "en": {
      "title": "Coriander leaves",
      "text": "Coriander leaves: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "ধনেপাতা",
      "text": "ধনেপাতা চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  },
  "lettuce": {
    "en": {
      "title": "Lettuce",
      "text": "Lettuce: a vegetable crop for your growing plan. Select a locally suitable variety and planting season; check the basic care guidance below."
    },
    "bn": {
      "title": "লেটুস",
      "text": "লেটুস চাষের পরিকল্পনায় স্থানীয় উপযোগী জাত ও রোপণের সময় নির্বাচন করুন। জমি, পানি ও পরিচর্যার প্রাথমিক বিষয়গুলো নিচে দেখুন।"
    }
  }
});
