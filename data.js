const bi=(en,bn)=>({en,bn});
const ZONE_NAMES=[
['Old Himalayan Piedmont Plain','পুরাতন হিমালয় পাদভূমি'],['Active Tista Floodplain','সক্রিয় তিস্তা প্লাবনভূমি'],['Tista Meander Floodplain','তিস্তা সর্পিল প্লাবনভূমি'],['Karatoya-Bangali Floodplain','করতোয়া-বাঙ্গালী প্লাবনভূমি'],['Lower Atrai Basin','নিম্ন আত্রাই অববাহিকা'],['Lower Purnabhaba Floodplain','নিম্ন পুনর্ভবা প্লাবনভূমি'],['Active Brahmaputra-Jamuna Floodplain','সক্রিয় ব্রহ্মপুত্র-যমুনা প্লাবনভূমি'],['Young Brahmaputra-Jamuna Floodplain','নবীন ব্রহ্মপুত্র-যমুনা প্লাবনভূমি'],['Old Brahmaputra Floodplain','পুরাতন ব্রহ্মপুত্র প্লাবনভূমি'],['Active Ganges Floodplain','সক্রিয় গঙ্গা প্লাবনভূমি'],['High Ganges River Floodplain','উচ্চ গঙ্গা নদী প্লাবনভূমি'],['Low Ganges River Floodplain','নিম্ন গঙ্গা নদী প্লাবনভূমি'],['Ganges Tidal Floodplain','গঙ্গা জোয়ারভাটা প্লাবনভূমি'],['Gopalganj-Khulna Bils','গোপালগঞ্জ-খুলনা বিলাঞ্চল'],['Arial Bil','আড়িয়াল বিল'],['Middle Meghna River Floodplain','মধ্য মেঘনা নদী প্লাবনভূমি'],['Lower Meghna River Floodplain','নিম্ন মেঘনা নদী প্লাবনভূমি'],['Young Meghna Estuarine Floodplain','নবীন মেঘনা মোহনা প্লাবনভূমি'],['Old Meghna Estuarine Floodplain','পুরাতন মেঘনা মোহনা প্লাবনভূমি'],['Eastern Surma-Kushiyara Floodplain','পূর্ব সুরমা-কুশিয়ারা প্লাবনভূমি'],['Sylhet Basin','সিলেট অববাহিকা'],['Northern and Eastern Piedmont Plain','উত্তর ও পূর্ব পাদভূমি সমভূমি'],['Chittagong Coastal Plain','চট্টগ্রাম উপকূলীয় সমভূমি'],["St. Martin’s Coral Island",'সেন্টমার্টিন প্রবাল দ্বীপ'],['Level Barind Tract','সমতল বরেন্দ্রভূমি'],['High Barind Tract','উচ্চ বরেন্দ্রভূমি'],['North-Eastern Barind Tract','উত্তর-পূর্ব বরেন্দ্রভূমি'],['Madhupur Tract','মধুপুর গড়'],['Northern and Eastern Hills','উত্তর ও পূর্ব পাহাড়ি অঞ্চল'],['Akhaura Terrace','আখাউড়া সোপান']];
const AREAS=[400797,83644,946804,257158,85105,12896,319001,592394,723037,333447,1320548,796751,1706573,224700,14436,155464,90934,926885,774026,462159,457345,403758,372016,804,504851,159964,107926,424359,1817172,11324];
const DISTRICTS=[['Thakurgaon, Panchagarh, Dinajpur','ঠাকুরগাঁও, পঞ্চগড়, দিনাজপুর'],['Kurigram, Lalmonirhat, Nilphamari','কুড়িগ্রাম, লালমনিরহাট, নীলফামারী'],['Rangpur, Nilphamari, Gaibandha','রংপুর, নীলফামারী, গাইবান্ধা'],['Sirajganj, Bogura, Pabna','সিরাজগঞ্জ, বগুড়া, পাবনা'],['Naogaon, Natore, Sirajganj','নওগাঁ, নাটোর, সিরাজগঞ্জ'],['Naogaon, Chapai Nawabganj','নওগাঁ, চাঁপাইনবাবগঞ্জ'],['Kurigram, Sirajganj, Gaibandha','কুড়িগ্রাম, সিরাজগঞ্জ, গাইবান্ধা'],['Jamalpur, Mymensingh, Kishoreganj','জামালপুর, ময়মনসিংহ, কিশোরগঞ্জ'],['Mymensingh, Netrokona, Jamalpur','ময়মনসিংহ, নেত্রকোনা, জামালপুর'],['Shariatpur, Pabna, Chapai Nawabganj','শরীয়তপুর, পাবনা, চাঁপাইনবাবগঞ্জ'],['Jashore, Jhenaidah, Rajshahi','যশোর, ঝিনাইদহ, রাজশাহী'],['Faridpur, Pabna, Rajbari','ফরিদপুর, পাবনা, রাজবাড়ী'],['Khulna, Bagerhat, Satkhira','খুলনা, বাগেরহাট, সাতক্ষীরা'],['Gopalganj, Khulna, Jashore','গোপালগঞ্জ, খুলনা, যশোর'],['Munshiganj, Dhaka','মুন্সিগঞ্জ, ঢাকা'],['Cumilla, Narsingdi, Brahmanbaria','কুমিল্লা, নরসিংদী, ব্রাহ্মণবাড়িয়া'],['Chandpur, Lakshmipur, Noakhali','চাঁদপুর, লক্ষ্মীপুর, নোয়াখালী'],['Bhola, Noakhali, Lakshmipur, Patuakhali, Chattogram, Barishal, Feni','ভোলা, নোয়াখালী, লক্ষ্মীপুর, পটুয়াখালী, চট্টগ্রাম, বরিশাল, ফেনী'],['Cumilla, Brahmanbaria, Habiganj','কুমিল্লা, ব্রাহ্মণবাড়িয়া, হবিগঞ্জ'],['Sylhet, Moulvibazar, Sunamganj','সিলেট, মৌলভীবাজার, সুনামগঞ্জ'],['Sunamganj, Kishoreganj, Netrokona','সুনামগঞ্জ, কিশোরগঞ্জ, নেত্রকোনা'],['Netrokona, Sunamganj, Sherpur','নেত্রকোনা, সুনামগঞ্জ, শেরপুর'],['Chattogram, Cox’s Bazar, Feni','চট্টগ্রাম, কক্সবাজার, ফেনী'],['St. Martin’s Island, Cox’s Bazar','সেন্টমার্টিন দ্বীপ, কক্সবাজার'],['Naogaon, Bogura, Dinajpur','নওগাঁ, বগুড়া, দিনাজপুর'],['Naogaon, Chapai Nawabganj, Rajshahi','নওগাঁ, চাঁপাইনবাবগঞ্জ, রাজশাহী'],['Rangpur, Dinajpur, Bogura','রংপুর, দিনাজপুর, বগুড়া'],['Gazipur, Tangail, Mymensingh','গাজীপুর, টাঙ্গাইল, ময়মনসিংহ'],['Rangamati, Bandarban, Khagrachhari, Chattogram, Cox’s Bazar, Moulvibazar','রাঙ্গামাটি, বান্দরবান, খাগড়াছড়ি, চট্টগ্রাম, কক্সবাজার, মৌলভীবাজার'],['Brahmanbaria','ব্রাহ্মণবাড়িয়া']];
const LANDSCAPES={piedmont:bi('Piedmont plain','পাহাড়ের পাদদেশের সমভূমি'),river:bi('Active river floodplain','সক্রিয় নদী প্লাবনভূমি'),flood:bi('River / estuarine floodplain','নদী / মোহনা প্লাবনভূমি'),basin:bi('Basin and wetland','অববাহিকা ও জলাভূমি'),coast:bi('Coastal / tidal plain','উপকূলীয় / জোয়ারভাটা সমভূমি'),island:bi('Coral island','প্রবাল দ্বীপ'),terrace:bi('Terrace landscape','সোপানভূমি'),hills:bi('Hilly landscape','পাহাড়ি ভূপ্রকৃতি')};
const TYPES=['piedmont','river','flood','flood','basin','basin','river','flood','flood','river','flood','flood','coast','basin','basin','flood','flood','coast','flood','flood','basin','piedmont','coast','island','terrace','terrace','terrace','terrace','hills','terrace'];
const CONSIDERATIONS={piedmont:bi('Check local drainage, soil texture and runoff before selecting a crop.','ফসল নির্বাচনের আগে স্থানীয় নিষ্কাশন, মাটির বুনট ও ঢলের প্রবাহ দেখুন।'),river:bi('Check erosion, new sediment and seasonal flood exposure with your local agriculture office.','স্থানীয় কৃষি অফিসের সহায়তায় ভাঙন, নতুন পলি ও মৌসুমি বন্যার ঝুঁকি যাচাই করুন।'),flood:bi('Match crop timing to the depth and duration of flooding in the actual field.','জমির প্লাবনের গভীরতা ও স্থায়িত্ব অনুযায়ী ফসলের সময় নির্ধারণ করুন।'),basin:bi('Plan around seasonal water levels and the local drainage window.','মৌসুমি পানির উচ্চতা ও পানি নামার সময় অনুযায়ী পরিকল্পনা করুন।'),coast:bi('Test irrigation water and soil salinity; check drainage and tidal exposure locally.','সেচের পানি ও মাটির লবণাক্ততা পরীক্ষা করুন; স্থানীয় নিষ্কাশন ও জোয়ারভাটার প্রভাব দেখুন।'),island:bi('Check local conservation rules and freshwater availability before planting.','চাষের আগে স্থানীয় সংরক্ষণ বিধি ও মিঠাপানির প্রাপ্যতা যাচাই করুন।'),terrace:bi('Use a soil test to assess acidity and nutrients; plan dry-season water carefully.','অম্লতা ও পুষ্টি জানতে মাটি পরীক্ষা করুন; শুষ্ক মৌসুমের পানি পরিকল্পনা করুন।'),hills:bi('Prioritise erosion control, soil cover and locally suitable perennial planting.','ভূমিক্ষয় রোধ, মাটির আচ্ছাদন ও স্থানোপযোগী বহুবর্ষজীবী গাছকে অগ্রাধিকার দিন।')};
const zones=ZONE_NAMES.map((n,i)=>({id:i+1,name:bi(...n),area:AREAS[i],districts:bi(...DISTRICTS[i]),type:TYPES[i]}));
// Concise soil texture summaries from BARC FRG 2024, section 3.3, printed pp.20–32.
const SOILS=[
['Rapidly permeable sandy loams and sandy clay loams.','দ্রুত পানি চলাচলকারী বেলে দোআঁশ ও বেলে এঁটেল দোআঁশ।'],['Grey, layered sands and silts; mainly non-calcareous alluvium.','ধূসর স্তরযুক্ত বালি ও পলি; প্রধানত চুনবিহীন পলিমাটি।'],['Loamy ridge soils; heavier silt loams and silty clay loams in basins.','উঁচু অংশে দোআঁশ; অববাহিকায় ভারী পলি দোআঁশ ও পলি এঁটেল দোআঁশ।'],['Silt loams and silty clay loams on ridges; clays in basins.','উঁচু অংশে পলি দোআঁশ ও পলি এঁটেল দোআঁশ; অববাহিকায় এঁটেল।'],['Dark grey, heavy acidic clays dominate the low basins.','নিচু অববাহিকায় গাঢ় ধূসর ভারী অম্লীয় এঁটেল মাটির প্রাধান্য।'],['Heavy acid basin clays occur on ridges and in basins.','উঁচু ও নিচু অংশে ভারী অম্লীয় অববাহিকার এঁটেল মাটি।'],['Sandy and silty alluvium on land shaped by shifting channels.','নদীর গতিপথ বদলে গড়া জমিতে বালি ও পলিসমৃদ্ধ পলিমাটি।'],['Permeable silt loams on ridges; less permeable basin clays.','উঁচু অংশে পানি চলাচলকারী পলি দোআঁশ; অববাহিকায় কম প্রবেশ্য এঁটেল।'],['Silt loams to silty clay loams on ridges; clay in basins.','উঁচু অংশে পলি দোআঁশ থেকে পলি এঁটেল দোআঁশ; অববাহিকায় এঁটেল।'],['Mixed calcareous sandy, silty and clayey alluvium.','চুনযুক্ত বেলে, পলি ও এঁটেল পলিমাটির মিশ্রণ।'],['Often calcareous loamy ridge soils; mainly clayey basins.','উঁচু অংশে প্রায়ই চুনযুক্ত দোআঁশ; অববাহিকায় প্রধানত এঁটেল।'],['Loamy ridge soils grade to silty clay loams and heavy clays lower down.','উঁচু অংশের দোআঁশ থেকে নিচে পলি এঁটেল দোআঁশ ও ভারী এঁটেল।'],['Heavy silty clays and clays in basins; acid sulphate soils locally.','অববাহিকায় ভারী পলি এঁটেল ও এঁটেল; কোথাও অম্ল সালফেট মাটি।'],['Heavy grey clays with peat and muck in wet basin centres.','ভারী ধূসর এঁটেল; ভেজা অববাহিকার কেন্দ্রে পিট ও মাক মাটি।'],['Dark grey, acidic heavy clays in a low basin.','নিচু অববাহিকায় গাঢ় ধূসর অম্লীয় ভারী এঁটেল।'],['Grey loams on ridges; grey to dark grey basin clays.','উঁচু অংশে ধূসর দোআঁশ; অববাহিকায় ধূসর থেকে গাঢ় ধূসর এঁটেল।'],['Silt loams on higher land; silty clay loams in depressions.','উঁচু জমিতে পলি দোআঁশ; নিচু অংশে পলি এঁটেল দোআঁশ।'],['Layered silt loams and silty clay loams; dry-season salinity locally.','স্তরযুক্ত পলি দোআঁশ ও পলি এঁটেল দোআঁশ; কোথাও শুষ্ক মৌসুমে লবণাক্ততা।'],['Silt loams on ridges; silty clays and clays in basins.','উঁচু অংশে পলি দোআঁশ; অববাহিকায় পলি এঁটেল ও এঁটেল।'],['Heavy silty clay loams on ridges and clays in basins.','উঁচু অংশে ভারী পলি এঁটেল দোআঁশ; অববাহিকায় এঁটেল।'],['Loamy to clayey higher sites; grey clays in the basins.','তুলনামূলক উঁচু অংশে দোআঁশ থেকে এঁটেল; অববাহিকায় ধূসর এঁটেল।'],['Loams to clays on gently sloping alluvial fans.','মৃদু ঢালু পলল পাখায় দোআঁশ থেকে এঁটেল মাটি।'],['Grey silt loams and silty clay loams; acid sulphate soils locally.','ধূসর পলি দোআঁশ ও পলি এঁটেল দোআঁশ; কোথাও অম্ল সালফেট মাটি।'],['Calcareous alluvium developed on coral beach sands.','প্রবাল সৈকতের বালিতে গঠিত চুনযুক্ত পলিমাটি।'],['Grey silty topsoils over heavy Madhupur clay; plough pans common.','ভারী মধুপুর কাদার ওপর ধূসর পলিসমৃদ্ধ মাটি; চাষতলায় শক্ত স্তর সাধারণ।'],['Silt loam to silty clay loam topsoil with strong plough pans.','পলি দোআঁশ থেকে পলি এঁটেল দোআঁশ; চাষতলায় শক্ত স্তর।'],['Silty or loamy topsoil above clay loam to clay subsoil.','পলিসমৃদ্ধ বা দোআঁশ উপরিমাটির নিচে এঁটেল দোআঁশ থেকে এঁটেল।'],['Clay loams to clays on terraces; heavy clays in valleys.','সোপানে এঁটেল দোআঁশ থেকে এঁটেল; উপত্যকায় ভারী এঁটেল।'],['Mostly permeable, brown loamy hill soils; local variation is complex.','প্রধানত পানি চলাচলকারী বাদামি দোআঁশ পাহাড়ি মাটি; স্থানীয় বৈচিত্র্য জটিল।'],['Brown upland clays; silty clay loams to clays in valleys.','উঁচু অংশে বাদামি এঁটেল; উপত্যকায় পলি এঁটেল দোআঁশ থেকে এঁটেল।']];
const LAND_CLASSES={HL:bi('Highland','উঁচু ভূমি'),MHL:bi('Medium highland','মাঝারি উঁচু ভূমি'),MLL:bi('Medium lowland','মাঝারি নিচু ভূমি'),LL:bi('Lowland','নিচু ভূমি')};
const MAIN_LAND=[['HL',58],['MHL',72],['MHL',51],['MHL',44],['LL',65],['LL',60],['MHL',37],['MHL',42],['MHL',35],['MHL',33],['HL',43],['MLL',31],['MHL',78],['MLL',41],['LL',73],['MLL',29],['MLL',31],['MHL',45],['MLL',33],['LL',36],['LL',43],['HL',33],['MHL',43],['MHL',63],['MHL',55],['HL',93],['MHL',56],['HL',56],['HL',92],['HL',55]];
zones.forEach((z,i)=>{z.soil=bi(...SOILS[i]);z.land=MAIN_LAND[i]});
const SOURCES=[
{title:bi('BARC · Land Resources Information & Maps','বিএআরসি · ভূমি সম্পদ তথ্য ও মানচিত্র'),url:'https://apps.barc.gov.bd/maps/LRI-Map%20Products-Bangladesh.pdf',desc:bi('Canonical zone numbering and historical area figures, based on the 1988 land resources appraisal.','অঞ্চলের ক্রম ও ঐতিহাসিক আয়তন; ১৯৮৮ সালের ভূমি সম্পদ মূল্যায়নভিত্তিক।')},
{title:bi('BARC · Fertilizer Recommendation Guide 2024','বিএআরসি · সার সুপারিশমালা ২০২৪'),url:'https://apps.barc.gov.bd/fertilizer_recommendation/FRG%20English%2030.10.2024.pdf',desc:bi('Table 3 (pp. 13–18): district coverage and land classes. AEZ soil profiles (pp. 20–32): general soil texture summaries.','সারণি ৩ (পৃষ্ঠা ১৩–১৮): জেলা ও ভূমির শ্রেণি। এইজেডের মাটির পরিচিতি (পৃষ্ঠা ২০–৩২): সাধারণ বুনটের সারাংশ।')},
{title:bi('BAMIS · Agro-Ecological Zones','বামিস · কৃষি-পরিবেশ অঞ্চল'),url:'https://www.bamis.gov.bd/en/page/aezs-maps/',bnurl:'https://www.bamis.gov.bd/bn/page/aezs-maps/',desc:bi('Bangladesh’s 30 zones, 88 subregions and 535 units.','বাংলাদেশের ৩০টি অঞ্চল, ৮৮টি উপ-অঞ্চল ও ৫৩৫টি একক।')},
{title:bi('CRIIPS · AEZ spatial layer','সিআরআইআইপিএস · এইজেড স্থানিক স্তর'),url:'https://www.arcgisbd.com/server/rest/services/ADB005/CRIIPS/MapServer/118',desc:bi('Map geometry from the published AEZ layer; subregions grouped into 30 zones and boundaries simplified for the web. Not a parcel-level map.','প্রকাশিত এইজেড স্তরের জ্যামিতি; উপ-অঞ্চল ৩০ অঞ্চলে একত্র ও ওয়েবের জন্য সীমানা সরলীকৃত। এটি দাগভিত্তিক মানচিত্র নয়।')},
{title:bi('IRRI · Rice Knowledge Bank','ইরি · রাইস নলেজ ব্যাংক'),url:'https://www.knowledgebank.irri.org/',desc:bi('Rice crop health and integrated pest management learning resources.','ধানের স্বাস্থ্য ও সমন্বিত বালাই ব্যবস্থাপনার শিক্ষণ উপকরণ।')},
{title:bi('AIS · Agriculture Call Centre','এআইএস · কৃষি কল সেন্টার'),url:'https://ais.gov.bd/pages/static-pages/6922df5e933eb65569e21833',desc:bi('Official agricultural advice through 16123. Charges and service hours follow AIS’s current notice.','১৬১২৩ নম্বরে সরকারি কৃষি পরামর্শ। চার্জ ও সেবার সময় এআইএসের বর্তমান বিজ্ঞপ্তি অনুযায়ী।')}];
const CROP_EXTRA={
rice:{season:bi('Aus · Aman · Boro','আউশ · আমন · বোরো'),soil:bi('Match variety to land height, water and local season.','জমির উচ্চতা, পানি ও মৌসুমের সাথে জাত মিলিয়ে নিন।'),care:bi('Use healthy seedlings, balanced nutrients and regular field scouting. Check leaf and stem symptoms before treatment.','সুস্থ চারা, সুষম পুষ্টি ও নিয়মিত জমি পর্যবেক্ষণ করুন। ব্যবস্থাপনার আগে পাতা ও কাণ্ডের লক্ষণ যাচাই করুন।')},
wheat:{season:bi('Rabi / cool season','রবি / শীতকাল'),soil:bi('Well-drained land; avoid prolonged standing water.','সুনিষ্কাশিত জমি; দীর্ঘস্থায়ী জলাবদ্ধতা এড়ান।'),care:bi('Use a locally recommended variety and sowing window. Monitor rust and leaf blight; keep irrigation timely.','স্থানীয় সুপারিশকৃত জাত ও বপনের সময় অনুসরণ করুন। মরিচা ও পাতার ঝলসানো দেখুন; সময়মতো সেচ দিন।')},
maize:{season:bi('Rabi and locally suitable Kharif windows','রবি ও স্থানীয় উপযোগী খরিফ মৌসুম'),soil:bi('Well-drained soil with reliable moisture.','সুনিষ্কাশিত মাটি ও পর্যাপ্ত আর্দ্রতা।'),care:bi('Scout the whorl for fall armyworm and egg masses. Avoid waterlogging and plan nutrients using a soil test.','পাতার ভাঁজে ফল আর্মিওয়ার্ম ও ডিমের গুচ্ছ দেখুন। জলাবদ্ধতা এড়িয়ে মাটি পরীক্ষাভিত্তিক পুষ্টি দিন।')},
chili:{season:bi('Variety and location dependent','জাত ও এলাকাভেদে ভিন্ন'),soil:bi('Raised, well-drained beds and healthy nursery plants.','উঁচু সুনিষ্কাশিত বেড ও সুস্থ নার্সারির চারা।'),care:bi('Monitor leaf undersides for whiteflies and aphids. Remove badly affected plants after confirming the cause.','পাতার নিচে সাদা মাছি ও জাব পোকা দেখুন। কারণ নিশ্চিত করে মারাত্মক আক্রান্ত গাছ সরান।')},
tomato:{season:bi('Mainly cool season; suitable varieties differ','প্রধানত শীতকাল; উপযোগী জাত ভিন্ন হয়'),soil:bi('Well-drained beds with staking and airflow.','সুনিষ্কাশিত বেড, খুঁটি ও বাতাস চলাচল।'),care:bi('Water at the root and inspect plants frequently. Check wilt, leaf spots and whiteflies before choosing treatment.','গোড়ায় পানি দিন ও নিয়মিত গাছ দেখুন। চিকিৎসার আগে ঢলে পড়া, পাতার দাগ ও সাদা মাছি যাচাই করুন।')}
};
const PRODUCT_EXTRA={
fruits:{icon:'fruit',items:bi(['Seasonal vegetables','Locally grown fruits','Grower harvest enquiries'],['মৌসুমি সবজি','স্থানীয় ফল','চাষির ফসলের খোঁজ']),check:bi(['Ask about harvest date, grade and quantity.','Agree on packing, collection and freshness before ordering.'],['সংগ্রহের তারিখ, মান ও পরিমাণ জেনে নিন।','কেনার আগে প্যাকিং, সংগ্রহ ও সতেজতা নিশ্চিত করুন।'])},
biopesticides:{icon:'shield',items:bi(['Microbial crop protection','Botanical formulations','Species-specific traps and lures'],['জীবাণুভিত্তিক ফসল সুরক্ষা','উদ্ভিদজাত প্রস্তুতি','প্রজাতি উপযোগী ফাঁদ ও লিউর']),check:bi(['Confirm target crop and pest, registration and expiry.','Check storage conditions and label compatibility. Lures are species-specific.'],['ফসল, বালাই, নিবন্ধন ও মেয়াদ যাচাই করুন।','সংরক্ষণ ও লেবেলের সামঞ্জস্য দেখুন। লিউর প্রজাতিনির্ভর।'])},
medicines:{icon:'bottle',items:bi(['Registered insecticides','Fungicides','Crop protection enquiries'],['নিবন্ধিত কীটনাশক','ছত্রাকনাশক','ফসল সুরক্ষা সংক্রান্ত জিজ্ঞাসা']),check:bi(['Identify the cause before selecting a product.','Follow the registered label, protective equipment, re-entry and pre-harvest intervals. Never mix products without label guidance.'],['পণ্য নির্বাচনের আগে কারণ শনাক্ত করুন।','নিবন্ধিত লেবেল, সুরক্ষা পোশাক, পুনঃপ্রবেশ ও ফসল সংগ্রহের বিরতি মানুন। নির্দেশনা ছাড়া পণ্য মেশাবেন না।'])},
seeds:{icon:'sprout',items:bi(['Cereal seeds','Vegetable seeds','Season and variety selection'],['দানাশস্যের বীজ','সবজি বীজ','মৌসুম ও জাত নির্বাচন']),check:bi(['Check variety, lot, germination and expiry date.','Match the variety to your location, season and irrigation. Keep the label and receipt.'],['জাত, লট, অঙ্কুরোদ্গম ও মেয়াদ দেখুন।','এলাকা, মৌসুম ও সেচের সাথে জাত মিলিয়ে নিন। লেবেল ও রসিদ রাখুন।'])},
seedlings:{icon:'plant',items:bi(['Fruit saplings','Vegetable seedlings','Grafted plants'],['ফলের চারা','সবজির চারা','কলমের গাছ']),check:bi(['Check nursery identity, plant health and true-to-type status.','Inspect roots, graft union and signs of pests before transport.'],['নার্সারির পরিচয়, চারার স্বাস্থ্য ও জাতের বিশুদ্ধতা দেখুন।','পরিবহনের আগে শিকড়, জোড়া ও বালাইয়ের লক্ষণ দেখুন।'])},
tissue:{icon:'flask',items:bi(['Acclimatised tissue-culture plants','MS basal medium enquiries','Laboratory propagation inputs'],['অভিযোজিত টিস্যু কালচার চারা','এমএস বেসাল মিডিয়ার খোঁজ','ল্যাবের বংশবিস্তার উপকরণ']),check:bi(['Confirm plant stage, acclimatisation and source laboratory.','For media, check composition, grade, storage and intended protocol. A medium is not a complete propagation protocol.'],['চারার পর্যায়, অভিযোজন ও উৎস ল্যাব নিশ্চিত করুন।','মিডিয়ার উপাদান, মান, সংরক্ষণ ও প্রোটোকল দেখুন। শুধু মিডিয়া পূর্ণ বংশবিস্তার পদ্ধতি নয়।'])},
indoor:{icon:'plant',items:bi(['Low-light tolerant plants','Foliage plants','Pot and substrate advice'],['কম আলো সহনশীল গাছ','পাতাবাহার গাছ','টব ও মাধ্যমের পরামর্শ']),check:bi(['Match the plant to available light and space.','Choose drainage holes and a suitable substrate. Check suitability around children and pets.'],['আলো ও জায়গা অনুযায়ী গাছ বাছুন।','নিষ্কাশনযুক্ত টব ও উপযোগী মাধ্যম নিন। শিশু ও পোষা প্রাণীর জন্য উপযোগিতা যাচাই করুন।'])},
organic:{icon:'soil',items:bi(['Mature compost','Vermicompost','Organic soil amendments'],['পরিপক্ব কম্পোস্ট','ভার্মিকম্পোস্ট','জৈব মাটি সংশোধক']),check:bi(['Check maturity, cleanliness and reliable nutrient information.','Account for organic nutrient supply in the whole fertiliser plan. Avoid fresh manure on edible parts.'],['পরিপক্বতা, পরিচ্ছন্নতা ও নির্ভরযোগ্য পুষ্টির তথ্য দেখুন।','সার পরিকল্পনায় জৈব উৎসের পুষ্টি ধরুন। খাদ্যযোগ্য অংশে কাঁচা গোবর লাগাবেন না।'])},
nutrients:{icon:'drop',items:bi(['Primary nutrients','Secondary and micronutrients','Soil-test based planning'],['মুখ্য পুষ্টি উপাদান','গৌণ ও অণুপুষ্টি','মাটি পরীক্ষাভিত্তিক পরিকল্পনা']),check:bi(['Use a soil test and crop-specific advice before purchase.','Check guaranteed analysis and application method. Yellow leaves alone do not prove nutrient deficiency.'],['কেনার আগে মাটি পরীক্ষা ও ফসলভিত্তিক পরামর্শ নিন।','ঘোষিত উপাদান ও প্রয়োগপদ্ধতি দেখুন। শুধু হলুদ পাতা পুষ্টির ঘাটতির প্রমাণ নয়।'])}
};
const IPM=[
{name:bi('Identify & observe','শনাক্ত ও পর্যবেক্ষণ'),text:bi('Walk through the field. Check healthy and affected plants, both leaf surfaces, roots and stems. Record crop stage, weather and how fast symptoms spread.','জমি ঘুরে সুস্থ ও আক্রান্ত গাছ, পাতার দুই পাশ, শিকড় ও কাণ্ড দেখুন। ফসলের পর্যায়, আবহাওয়া ও লক্ষণ ছড়ানোর গতি লিখুন।')},
{name:bi('Prevent with crop care','পরিচর্যায় প্রতিরোধ'),text:bi('Start with healthy seed and suitable varieties. Use crop rotation, clean tools, balanced nutrition and proper spacing and drainage.','সুস্থ বীজ ও উপযোগী জাত নিন। ফসল পর্যায়ক্রম, পরিষ্কার যন্ত্র, সুষম পুষ্টি, সঠিক দূরত্ব ও নিষ্কাশন বজায় রাখুন।')},
{name:bi('Protect natural enemies','উপকারী জীব সংরক্ষণ'),text:bi('Conserve predators and parasitoids. Avoid routine broad-spectrum spraying and use biological options suited to the target pest.','শিকারি ও পরজীবী উপকারী পোকা সংরক্ষণ করুন। নিয়মিত নির্বিচার স্প্রে এড়িয়ে নির্দিষ্ট বালাইয়ের উপযোগী জৈবিক পদ্ধতি নিন।')},
{name:bi('Use physical & botanical options','যান্ত্রিক ও উদ্ভিদজাত ব্যবস্থা'),text:bi('Remove egg masses and affected material where practical. Use nets, fruit bagging and species-appropriate traps. Use registered botanical products according to their labels.','সম্ভব হলে ডিমের গুচ্ছ ও আক্রান্ত অংশ সরান। নেট, ফল ব্যাগিং ও প্রজাতি উপযোগী ফাঁদ ব্যবহার করুন। নিবন্ধিত উদ্ভিদজাত পণ্য লেবেল মেনে নিন।')},
{name:bi('Decide, act & review','সিদ্ধান্ত, ব্যবস্থা ও মূল্যায়ন'),text:bi('Ask a local extension adviser whether intervention is needed. If a pesticide is justified, use the registered crop–pest label and review the field afterwards.','ব্যবস্থা প্রয়োজন কি না স্থানীয় কৃষি পরামর্শকের কাছে জানুন। বালাইনাশক প্রয়োজন হলে নিবন্ধিত ফসল-বালাইয়ের লেবেল মানুন এবং পরে জমি পর্যবেক্ষণ করুন।')}
];

// Crop catalogue: general guidance; local planting windows vary.
Object.assign(CROP_EXTRA, {
  "potato": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "cabbage": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "cauliflower": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "cucumber": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "pumpkin": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "papaya": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "zucchini": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "eggplant": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "okra": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "bottle-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "bitter-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "ridge-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "sponge-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "snake-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "ash-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "pointed-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "spiny-gourd": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "yardlong-bean": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "hyacinth-bean": {
    "season": {
      "en": "Confirm the local planting season",
      "bn": "স্থানীয় রোপণের মৌসুম জেনে নিন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "peas": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "radish": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "carrot": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "turnip": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "broccoli": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "spinach": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "red-amaranth": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "stem-amaranth": {
    "season": {
      "en": "Warm season; variety and location dependent",
      "bn": "উষ্ণ মৌসুম; জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "malabar-spinach": {
    "season": {
      "en": "Variety and location dependent",
      "bn": "জাত ও এলাকাভেদে ভিন্ন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Plan space and suitable support for climbing growth. Inspect leaves and fruit regularly and use local crop-specific advice.",
      "bn": "লতানো গাছের জন্য জায়গা ও উপযোগী মাচার পরিকল্পনা করুন। পাতা ও ফল নিয়মিত দেখুন এবং ফসলভিত্তিক স্থানীয় পরামর্শ নিন।"
    },
    "icon": "leaf"
  },
  "water-spinach": {
    "season": {
      "en": "Confirm the local planting season",
      "bn": "স্থানীয় রোপণের মৌসুম জেনে নিন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "taro": {
    "season": {
      "en": "Confirm the local planting season",
      "bn": "স্থানীয় রোপণের মৌসুম জেনে নিন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "sweet-potato": {
    "season": {
      "en": "Confirm the local planting season",
      "bn": "স্থানীয় রোপণের মৌসুম জেনে নিন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "moringa": {
    "season": {
      "en": "Confirm the local planting season",
      "bn": "স্থানীয় রোপণের মৌসুম জেনে নিন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "onion": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "garlic": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "coriander": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  },
  "lettuce": {
    "season": {
      "en": "Mainly cool season; check local varieties",
      "bn": "প্রধানত শীতকাল; স্থানীয় উপযোগী জাত বাছুন"
    },
    "soil": {
      "en": "Choose suitable land and manage soil moisture for the crop and variety.",
      "bn": "ফসল ও জাত অনুযায়ী উপযোগী জমি বেছে মাটির আর্দ্রতা বজায় রাখুন।"
    },
    "care": {
      "en": "Use healthy planting material, inspect the crop regularly and follow local advice for nutrients and harvest.",
      "bn": "সুস্থ রোপণ উপকরণ নিন, নিয়মিত গাছ দেখুন এবং পুষ্টি ও সংগ্রহে স্থানীয় পরামর্শ অনুসরণ করুন।"
    },
    "icon": "leaf"
  }
});
const CROP_IMAGES = {
  "rice": "images/crops/web/rice.jpg",
  "wheat": "images/crops/web/wheat.jpg",
  "maize": "images/crops/web/maize.jpg",
  "chili": "images/crops/web/chili.jpg",
  "tomato": "images/crops/web/tomato.jpg",
  "potato": "images/crops/web/potato.jpg",
  "cabbage": "images/crops/web/cabbage.jpg",
  "cauliflower": "images/crops/web/cauliflower.jpg",
  "cucumber": "images/crops/web/cucumber.jpg",
  "pumpkin": "images/crops/web/pumpkin.jpg",
  "papaya": "images/crops/web/papaya.jpg",
  "zucchini": "images/crops/web/zucchini.jpg"
};
