const KB = {
  en: [
    { keys: ["hello","hi","hey","greet","start"], q: "👋 Say Hello", a: "Hello! Welcome to Mudralaya Fintech Limited! 😊\n\nI'm your virtual assistant, here to help you with loans, deposits, accounts, and much more!\n\nHow can I assist you today?" },
    { keys: ["loan","personal loan","apply loan","borrow"], q: "💰 Apply for Loan", a: "Great! Here's how to apply for a loan:\n\n1️⃣ Visit our website or any branch\n2️⃣ Fill the online application form\n3️⃣ Upload your KYC documents (Aadhaar, PAN, income proof)\n4️⃣ Our team reviews & disburses within 24–72 hours!\n\nEasy, right? 😊" },
    { keys: ["interest","rate","roi","interest rate"], q: "📊 Interest Rates", a: "Our competitive interest rates:\n\n🏠 Home Loan — from 9.75% p.a.\n👤 Personal Loan — from 10.5% p.a.\n🏢 Business Loan — from 11% p.a.\n\nRates depend on your credit score & tenure. Contact us for a personalised quote!" },
    { keys: ["emi","monthly","repay","payment"], q: "📅 Pay EMI", a: "You can pay your EMI through:\n\n📱 Mudralaya Mobile App\n🌐 Net Banking / UPI\n🏦 Auto-debit (NACH Mandate)\n🏢 Visit nearest branch\n\n⚠️ EMI is due on the 5th of every month. Don't miss it!" },
    { keys: ["document","kyc","id","proof","required"], q: "📄 Documents Needed", a: "For KYC verification, you'll need:\n\n🪪 Aadhaar Card or PAN Card\n🏠 Address Proof (utility bill / passport)\n💼 Income Proof (3-month salary slips or ITR)\n🏦 Bank Statements (last 6 months)\n\nThat's it! Simple and quick!" },
    { keys: ["fd","fixed deposit","invest","deposit"], q: "🏦 Fixed Deposit", a: "Mudralaya Fixed Deposits — safe & rewarding!\n\n✅ Minimum amount: ₹5,000\n💰 Interest up to 8.5% p.a.\n📅 Tenure: 1–5 years\n👴 Senior citizens get extra 0.5%!\n\nInterest can be paid monthly, quarterly, or on maturity!" },
    { keys: ["account","open","savings","current"], q: "🏧 Open Account", a: "Opening an account is super easy!\n\n1️⃣ Visit any branch or apply online\n2️⃣ Minimum balance: ₹1,000 (Savings)\n3️⃣ Bring Aadhaar, PAN & passport photo\n4️⃣ Account activated in 1 working day! 🎉" },
    { keys: ["contact","support","helpline","phone","email"], q: "📞 Contact Us", a: "We're here to help! 💙\n\n📞 Helpline: 1800-XXX-XXXX (Toll-Free)\n⏰ Timing: 9 AM – 7 PM, Mon–Sat\n📧 Email: support@mudralaya.in\n🌐 Website: www.mudralaya.in\n📍 Branches: Maharashtra, Rajasthan & Delhi NCR" },
    { keys: ["eligible","eligibility","criteria","who can"], q: "✅ Loan Eligibility", a: "Check if you're eligible!\n\n🎂 Age: 21–60 years (salaried)\n💵 Minimum income: ₹15,000/month\n⭐ Credit score: 650 or above\n🇮🇳 Must be an Indian resident with valid KYC\n\nMost people qualify easily! 😊" },
    { keys: ["app","mobile","download","android","ios"], q: "📱 Mobile App", a: "The Mudralaya App is available now!\n\n📱 Google Play Store (Android)\n🍎 Apple App Store (iOS)\n\nFeatures:\n✅ Track loans\n✅ Pay EMI via UPI\n✅ Manage FDs\n✅ View statements\n✅ 24/7 chat support!" },
    { keys: ["miss","missed","default","overdue","late"], q: "⚠️ Missed EMI?", a: "Please don't panic! Here's what happens:\n\n💸 Penalty: 2% per month on overdue amount\n📉 CIBIL score may be affected\n\n👉 Contact us immediately if you're facing any issue — we have loan restructuring options available for you! We're here to help 💙" },
    { keys: ["sip","mutual fund","mf","invest"], q: "📈 Mutual Funds / SIP", a: "Start your investment journey today! 🚀\n\n💰 Start SIP from just ₹500/month\n📊 Curated funds by SEBI-registered AMCs\n📈 Options: Equity, Debt, Hybrid funds\n\nTalk to our wealth advisor for a personalised plan!" },
  ],
  hi: [
    { keys: ["नमस्ते","हैलो","नमस्कार","शुरू","हाय"], q: "👋 नमस्ते", a: "नमस्ते! मुद्रालय फिनटेक लिमिटेड में आपका स्वागत है! 😊\n\nमैं आपका वर्चुअल असिस्टेंट हूँ। लोन, FD, खाता और बहुत कुछ में आपकी मदद कर सकता हूँ!\n\nबताइए, मैं आपकी कैसे मदद करूँ?" },
    { keys: ["लोन","ऋण","कर्ज","आवेदन","उधार"], q: "💰 लोन कैसे लें?", a: "लोन लेना बहुत आसान है!\n\n1️⃣ हमारी वेबसाइट या शाखा पर जाएं\n2️⃣ आवेदन फॉर्म भरें\n3️⃣ KYC दस्तावेज़ अपलोड करें\n4️⃣ 24–72 घंटों में राशि मिल जाएगी! 🎉" },
    { keys: ["ब्याज","दर","ब्याज दर","roi"], q: "📊 ब्याज दरें", a: "हमारी प्रतिस्पर्धी ब्याज दरें:\n\n🏠 गृह ऋण — 9.75% प्रति वर्ष से\n👤 व्यक्तिगत लोन — 10.5% प्रति वर्ष से\n🏢 व्यापार लोन — 11% प्रति वर्ष से\n\nयह आपके क्रेडिट स्कोर पर निर्भर करता है।" },
    { keys: ["ईएमआई","emi","भुगतान","किस्त"], q: "📅 EMI कैसे भरें?", a: "EMI भरने के तरीके:\n\n📱 मुद्रालय ऐप से\n🌐 नेट बैंकिंग / UPI\n🏦 ऑटो-डेबिट (NACH)\n🏢 नजदीकी शाखा\n\n⚠️ EMI हर महीने की 5 तारीख को देय है।" },
    { keys: ["दस्तावेज़","kyc","पहचान","प्रमाण","कागज"], q: "📄 दस्तावेज़", a: "KYC के लिए ज़रूरी दस्तावेज़:\n\n🪪 आधार कार्ड या PAN कार्ड\n🏠 पते का प्रमाण\n💼 आय प्रमाण (3 महीने की सैलरी स्लिप या ITR)\n🏦 बैंक स्टेटमेंट (6 महीने)" },
    { keys: ["संपर्क","हेल्पलाइन","फोन","सहायता","मदद"], q: "📞 संपर्क करें", a: "हम यहाँ हैं! 💙\n\n📞 हेल्पलाइन: 1800-XXX-XXXX (टोल-फ्री)\n⏰ समय: सुबह 9 – शाम 7\n📧 ईमेल: support@mudralaya.in\n🌐 वेबसाइट: www.mudralaya.in" },
  ],
  mr: [
    { keys: ["नमस्कार","हॅलो","सुरू","नमस्ते"], q: "👋 नमस्कार", a: "नमस्कार! मुद्रालय फिनटेक लिमिटेडमध्ये आपले स्वागत आहे! 😊\n\nमी आपला व्हर्च्युअल असिस्टंट आहे. कर्ज, FD, खाते आणि बरेच काही मदत करू शकतो!\n\nसांगा, मी आपली कशी मदत करू?" },
    { keys: ["कर्ज","लोन","अर्ज","उधार"], q: "💰 कर्जासाठी अर्ज", a: "कर्ज घेणे अगदी सोपे आहे!\n\n1️⃣ वेबसाइट किंवा शाखेला भेट द्या\n2️⃣ अर्ज फॉर्म भरा\n3️⃣ KYC कागदपत्रे अपलोड करा\n4️⃣ 24–72 तासांत रक्कम मिळेल! 🎉" },
    { keys: ["व्याज","दर","व्याजदर"], q: "📊 व्याजदर", a: "आमचे स्पर्धात्मक व्याजदर:\n\n🏠 गृहकर्ज — 9.75% प्रति वर्ष पासून\n👤 वैयक्तिक कर्ज — 10.5% प्रति वर्ष पासून\n\nतुमच्या क्रेडिट स्कोरनुसार बदलू शकतो." },
    { keys: ["संपर्क","मदत","हेल्पलाइन","फोन"], q: "📞 संपर्क करा", a: "आम्ही इथे आहोत! 💙\n\n📞 हेल्पलाइन: 1800-XXX-XXXX (टोल-फ्री)\n⏰ वेळ: सकाळी 9 – संध्याकाळी 7\n📧 ईमेल: support@mudralaya.in\n🌐 वेबसाइट: www.mudralaya.in" },
  ]
};

const GREET = { en: "Hello! 👋 Welcome to **Mudralaya Fintech Limited**!\n\nI'm your AI assistant. Feel free to ask me anything about our services!\n\nYou can also switch languages using EN | HI | MR buttons above. 😊", hi: "नमस्ते! 👋 **मुद्रालय फिनटेक** में आपका स्वागत है!\n\nमैं आपकी मदद के लिए यहाँ हूँ।", mr: "नमस्कार! 👋 **मुद्रालय फिनटेक**मध्ये आपले स्वागत आहे!\n\nमी आपल्या मदतीसाठी इथे आहे." };
const PLACEHOLDER = { en: "Ask me anything...", hi: "कुछ पूछें...", mr: "काही विचारा..." };
const NOMATCH = { en: "Hmm, I'm not sure about that! 🤔\n\nPlease try one of the quick questions below, or rephrase your query. You can also call our helpline: 1800-XXX-XXXX 😊", hi: "मुझे खेद है, मैं यह नहीं समझ सका। 🤔\n\nकृपया नीचे दिए विकल्पों में से चुनें या हमारी हेल्पलाइन से संपर्क करें।", mr: "माफ करा, मला हे समजले नाही. 🤔\n\nकृपया खालील पर्यायांमधून निवडा किंवा आमच्या हेल्पलाइनशी संपर्क करा." };

let lang = 'en';

function getTime() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m < 10 ? '0'+m : m} ${ampm}`;
}

function addMsg(type, text) {
  const box = document.getElementById('messages');
  const row = document.createElement('div');
  row.className = 'msg-row ' + type;

  const formatted = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');

  if (type === 'bot') {
    row.innerHTML = `
      <div class="msg-avatar">MF</div>
      <div>
        <div class="bubble"><div class="bot-name">MUDRALAYA BOT</div>${formatted}</div>
        <div class="msg-time">${getTime()}</div>
      </div>`;
  } else {
    row.innerHTML = `
      <div>
        <div class="bubble">${formatted}</div>
        <div class="msg-time">${getTime()}</div>
      </div>`;
  }
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

function showTyping() {
  const box = document.getElementById('messages');
  const row = document.createElement('div');
  row.className = 'msg-row bot'; row.id = 'typing';
  row.innerHTML = `<div class="msg-avatar">MF</div><div class="typing-bubble"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function renderQuickBtns() {
  const sec = document.getElementById('quick-section');
  const old = sec.querySelectorAll('.qbtn');
  old.forEach(b => b.remove());
  KB[lang].slice(0,7).forEach(item => {
    const b = document.createElement('button');
    b.className = 'qbtn';
    b.textContent = item.q.length > 22 ? item.q.slice(0,20)+'…' : item.q;
    b.onclick = () => { addMsg('user', item.q); respondWith(item.a); };
    sec.appendChild(b);
  });
}

function findAnswer(input) {
  const low = input.toLowerCase();
  for (const item of KB[lang]) {
    for (const k of item.keys) {
      if (low.includes(k.toLowerCase())) return item.a;
    }
  }
  return null;
}

function respondWith(answer) {
  showTyping();
  setTimeout(() => { removeTyping(); addMsg('bot', answer); }, 900);
}

function sendMsg() {
  const inp = document.getElementById('user-input');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  addMsg('user', text);
  const ans = findAnswer(text);
  respondWith(ans || NOMATCH[lang]);
}

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === l.toUpperCase()));
  document.getElementById('user-input').placeholder = PLACEHOLDER[l];
  renderQuickBtns();
}

// add today badge and welcome msg
const box = document.getElementById('messages');
const badge = document.createElement('div');
badge.className = 'date-badge';
badge.textContent = new Date().toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long' });
box.appendChild(badge);

setLang('en');
setTimeout(() => addMsg('bot', GREET['en']), 300);