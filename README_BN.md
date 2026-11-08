# Zee Agri Solution BD — সোর্স কোড

এটি বর্তমান প্রকাশিত সাইটের HTML, CSS, JavaScript ও ছবির স্বাধীনভাবে ব্যবহারযোগ্য কপি। ৮ নভেম্বর ২০২৬-এর প্রকাশিত Version 1 থেকে নেওয়া। কোনো GitHub repository বা লাইভ সাইট এই export-এর জন্য পরিবর্তন করা হয়নি।

## VS Code-এ চালানো

1. ZIP ফাইল Extract All করুন।
2. VS Code → File → Open Folder থেকে `zee-agri-source` ফোল্ডার খুলুন।
3. `index.html`, `app.js`, `data.js`, `style.css`, `images` ও `assets` একই ফোল্ডারে পাবেন।
4. আপনার Live Server extension দিয়ে `index.html` চালান। অথবা Python থাকলে নিচের কমান্ড চালিয়ে `http://localhost:8000` খুলুন:

```bash
python -m http.server 8000
```

Windows-এ `python` কমান্ড না থাকলে `py -m http.server 8000` ব্যবহার করতে পারেন।

শুধু double-click করে `file://` ঠিকানায় খুললে মানচিত্রের JSON লোডে বাধা আসতে পারে। তাই local server ব্যবহার করুন।

## কোন ফাইলে কী আছে

| ফাইল | কাজ |
| --- | --- |
| index.html | সাইটের প্রবেশপথ |
| style.css | ডিজাইন, মোবাইল লেআউট ও থিম |
| app.js | নেভিগেশন, সার্চ, ফর্ম, মানচিত্র ও তারিখ |
| data.js | AEZ, পণ্যের অতিরিক্ত তথ্য, IPM ও তথ্যসূত্র |
| cropData.js | ফসলের বাংলা ও ইংরেজি তথ্য |
| pestData.js | পোকার পরিচিতি |
| productData.js | পণ্যের প্রাথমিক তথ্য |
| map-paths.json | মানচিত্রের সরলীকৃত সীমানা |
| images/ ও assets/ | ছবি, আইকন ও ফন্ট |
| validate.mjs | তথ্য, ফাইল ও ক্যালেন্ডারের যাচাই |

Node.js থাকলে `node validate.mjs` দিয়ে যাচাই করা যায়। সাইট চালাতে npm install বা build দরকার নেই।

## GitHub-এ নেওয়া

নিজের পুরোনো লাইভ repository-র ওপর সরাসরি এই ফাইলগুলো বসানোর বদলে প্রথমে আলাদা Private repository তৈরি করুন। VS Code-এর Source Control থেকে নতুন repository initialize করে ফাইল stage, commit ও GitHub-এ publish করা যায়।

এই export-এ Git history, repository credentials, hosting project identity বা ChatGPT access configuration নেই। আপনার GitHub repository এবং বর্তমান Sites project আলাদা থাকবে; একটির পরিবর্তন অন্যটিতে স্বয়ংক্রিয়ভাবে যাবে না।

## নিজস্ব হোস্টিং ও ডোমেইন

ডোমেইন হলো ঠিকানা; সাইট চালাতে hosting-ও লাগে। বর্তমান Sites hosting-এ custom domain যুক্ত করা যায়। বিকল্পভাবে এই কোড আপনার hosting account-এ নিতে পারেন।

Cloudflare Pages-এ এই export-এর root থেকে static site চালানোর ক্ষেত্রে:

| সেটিং | মান |
| --- | --- |
| Framework preset | None |
| Production branch | আপনার repository-র main branch |
| Build command | exit 0 |
| Build output directory | . |

এই export-এর `index.html` root-এ আছে। GitHub Pages ব্যবহার করলে root-কে publishing source হিসেবে নেওয়া যায়। GitHub Pages নিজে backend database চালায় না; তার জন্য আলাদা backend বা managed service লাগবে।

অন্য হোস্টিংয়ে বর্তমান ChatGPT sign-in/access policy সঙ্গে যায় না। সেখানে private access চাইলে সেটি আলাদাভাবে সেট করতে হবে। Domain কেনা, DNS পরিবর্তন বা অন্য হোস্টিংয়ে deploy করা এই export-এর অংশ হিসেবে করা হয়নি।

## ডেটাবেজ ও ছবি/ডকুমেন্ট

বর্তমান কোড static। সাধারণ কৃষি তথ্য কোডে আছে; theme, language ও ইচ্ছা করে রাখা খসড়া browser-এ থাকে। কোনো server database, admin panel বা স্থায়ী file upload এখনো যুক্ত হয়নি। Farmer Help ইমেইল/WhatsApp-এর জন্য বার্তা প্রস্তুত করে।

স্থায়ী ব্যবস্থার প্রস্তাব:

| অংশ | কী থাকবে |
| --- | --- |
| Database, যেমন D1 | ফসল, পোকা, পণ্য, অনুবাদ, ফাইলের নাম/বিবরণ, শ্রেণি, প্রকাশের অবস্থা |
| File storage, যেমন R2 | আসল ছবি, PDF, Word ও অন্য ফাইল |
| Backend/API | লগইন, অনুমতি, পড়া/লেখা ও upload পরিচালনা |
| Admin panel | ছবি/ডকুমেন্ট upload, তথ্য edit, draft এবং প্রকাশ |

উদাহরণ: একটি পোকার ছবি upload হলে আসল ছবিটি R2-তে থাকবে। তার object key/path, পোকার ID, নাম, caption ও public/private অবস্থাটি database-এ থাকবে। Website backend-এর মাধ্যমে তথ্য ও অনুমোদিত ছবি দেখাবে।

ব্যক্তিগত ডকুমেন্ট private থাকবে; প্রকাশ করতে বেছে নেওয়া কৃষি তথ্য ও ছবি visitor দেখতে পাবেন। Admin-এর পরিবর্তনের অধিকার server-side যাচাই করতে হবে। Database-এর admin secret বা storage token frontend JavaScript-এ রাখা যাবে না।

একসঙ্গে অনেক তথ্য আনতে import ও bulk upload, category/tag, search ও backup/export যোগ করা যেতে পারে। Storage ও ব্যবহারের সীমা এবং সম্ভাব্য খরচ provider-এর plan অনুযায়ী হবে।

## মূল তথ্যসূত্র ও ছবির পরিচয়

AEZ নাম ও ঐতিহাসিক আয়তন BARC LRI map; জেলার উদাহরণ ও ভূমির শ্রেণি FRG 2024 Table 3; মাটির সাধারণ বিবরণ FRG 2024-এর AEZ profiles। Spatial layer CRIIPS AEZ layer 118 থেকে সরলীকৃত। বিস্তারিত ও লিংক সাইটের Sources পাতায় আছে। এটি দাগভিত্তিক জমির মানচিত্র নয়।

প্রোফাইল ও পোকার ছবি মূল zee-agri সাইটের। Indoor gallery-তে Wikimedia public-domain/CC0 reference ছবির credit আছে; সেগুলো বর্তমান পণ্যের মজুতের ছবি নয়। Landscape photo সাজসজ্জার জন্য, নির্দিষ্ট বাংলাদেশি এলাকার দাবি নয়।

## সহায়ক ডকুমেন্টেশন

- VS Code GitHub: https://code.visualstudio.com/docs/sourcecontrol/github
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Cloudflare static HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare storage: https://developers.cloudflare.com/workers/platform/storage-options/

