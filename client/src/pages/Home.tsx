import { useState } from "react";
import { ArrowLeft, Baby, Camera, Check, ChevronDown, HeartHandshake, Image as ImageIcon, Menu, MessageCircle, Phone, Play, ShieldCheck, Sparkles, Stethoscope, X } from "lucide-react";
import { toast } from "sonner";

const navItems = [
  ["عن الحضانة", "about"],
  ["برامجنا", "programs"],
  ["الأمان والرعاية", "care"],
  ["تواصل معنا", "contact"],
];

const programs = [
  { age: "من شهر — سنة", title: "براعم صغيرة", text: "عناية حنونة وروتين آمن يطمن طفلك ويطمنك.", color: "yellow", icon: Baby },
  { age: "سنة — ٣ سنوات", title: "خطوات واثقة", text: "نكتشف العالم باللعب، ونبني مهارات كل يوم.", color: "teal", icon: Sparkles },
  { age: "٣ — ٤ سنوات", title: "مستكشفون", text: "نشاطات مهنية ممتعة تهيئهم للمرحلة القادمة.", color: "coral", icon: HeartHandshake },
];
const gallery = [
  { src: "/manus-storage/activity-art_39cee063.png", title: "ألواننا الأولى", category: "نشاطات فنية", tone: "yellow" },
  { src: "/manus-storage/activity-garden_1c1c9bd1.png", title: "مستكشفو الحديقة", category: "وقت الطبيعة", tone: "teal" },
  { src: "/manus-storage/activity-music_7044916a.png", title: "نغني معاً", category: "موسيقى وحركة", tone: "coral" },
];

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [galleryFilter, setGalleryFilter] = useState("الكل");
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  const whatsapp = (message: string) => window.open(`https://wa.me/966500000000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  const reserve = () => whatsapp("مرحباً، أرغب بحجز جولة مجانية في حضانة نجوم صغيرة.");
  return (
    <main dir="rtl" className="site-shell">
      <div className="top-note"><span className="pulse-dot" /> التسجيل مفتوح للعام الجديد <span className="top-note-link" onClick={reserve}>احجزوا جولة مجانية <ArrowLeft size={14} /></span></div>
      <header className="nav-wrap">
        <div className="brand" onClick={() => scrollTo("home")}><div className="brand-mark"><span>✦</span></div><div><strong>نجوم صغيرة</strong><small>حضانة ورعاية مبكرة</small></div></div>
        <nav className="nav-links">{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}<a href="/parents">بوابة الأهل</a></nav>
        <div className="nav-actions"><a href="tel:+966500000000" className="phone"><Phone size={16} /> ٠٥٠ ٠٠٠ ٠٠٠٠</a><button className="primary-btn nav-cta" onClick={reserve}>احجزوا عبر واتساب <MessageCircle size={17} /></button></div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu">{navItems.map(([label, id]) => <button key={id} onClick={() => { scrollTo(id); setMenuOpen(false); }}>{label}</button>)}<a href="/parents">بوابة الأهل</a><button className="primary-btn" onClick={reserve}>احجزوا عبر واتساب</button></div>}

      <section id="home" className="hero">
        <div className="hero-copy"><div className="eyebrow"><Sparkles size={15} /> حيث يبدأ الفضول</div><h1>كل يوم<br /><em>حكاية جديدة</em><br />تُكتشف.</h1><p>مساحة آمنة ودافئة، ينمو فيها طفلك بالحب واللعب والتعلم — من شهره الأول وحتى خطواته الأولى نحو العالم.</p><div className="hero-actions"><button className="primary-btn large" onClick={reserve}>اكتشفوا عالمنا <ArrowLeft size={19} /></button><button className="play-btn" onClick={() => setShowVideo(true)}><span><Play size={15} fill="currentColor" /></span> شاهدوا يومنا في 60 ثانية</button></div><div className="trust-row"><div className="avatars"><span>س</span><span>ل</span><span>م</span><span>+</span></div><div><b>+120 عائلة مطمئنة</b><small>يثقون بنا كل يوم</small></div></div></div>
        <div className="hero-visual"><div className="image-frame"><img src="/manus-storage/nursery-hero_5ea289e9.png" alt="أطفال يلعبون في حضانة نجوم صغيرة" /><div className="image-badge"><span className="live-dot" /> <b>يومنا مليء بالمرح</b><small>نلعب • نتعلم • نكبر</small></div></div><div className="scribble one">✦</div><div className="scribble two">☼</div><div className="floating-card"><div className="heart-icon">♥</div><div><b>رعاية بقلب كبير</b><small>فريقنا معتمد ومحب</small></div></div></div>
        <div className="hero-doodle">⌁</div>
      </section>

      <section className="marquee"><div><span>نرعى فضولهم</span><i>✦</i><span>نحتضن خطواتهم</span><i>✦</i><span>نحتفل بكل إنجاز</span><i>✦</i><span>نرعى فضولهم</span><i>✦</i><span>نحتضن خطواتهم</span></div></section>

      <section id="about" className="intro section-pad"><div className="section-kicker">فلسفتنا في الرعاية <span>02 — 04</span></div><div className="intro-grid"><div><h2>مكان صغير،<br /><em>أثر كبير.</em></h2></div><div className="intro-text"><p>نؤمن أن السنوات الأولى ليست مجرد مرحلة — بل هي الأساس الذي يُبنى عليه كل شيء. لذلك صممنا «نجوم صغيرة» كبيت ثانٍ، فيه كل طفل معروف باسمه، ومحبوب كما هو.</p><button className="text-link" onClick={() => scrollTo("care")}>تعرفوا على طريقتنا <ArrowLeft size={17} /></button></div></div><div className="stat-strip"><div><strong>١ : ٤</strong><span>نسبة المربية<br />لكل طفل</span></div><div><strong>١٠٠٪</strong><span>بيئة آمنة<br />ومعقمة</span></div><div><strong>٤+</strong><span>سنوات من<br />الخبرة</span></div><div className="stat-note">«نرى في كل طفل<br /><em>قصة تستحق أن تُروى.</em>»</div></div></section>

      <section id="programs" className="programs section-pad"><div className="section-head"><div><div className="section-kicker">مراحلهم، بطريقتهم <span>برامجنا</span></div><h2>لكل عمر<br /><em>عالمه الخاص.</em></h2></div><p>برامج مصممة بعناية لتناسب احتياجات طفلك في كل محطة من محطات نموه.</p></div><div className="program-grid">{programs.map(({ age, title, text, color, icon: Icon }) => <article className={`program-card ${color}`} key={title}><div className="card-top"><span>{age}</span><div className="program-icon"><Icon size={22} /></div></div><h3>{title}</h3><p>{text}</p><button onClick={reserve}>اعرفوا المزيد <ArrowLeft size={16} /></button><div className="card-number">0{programs.findIndex(p => p.title === title) + 1}</div></article>)}</div></section>

      <section id="care" className="care-section"><div className="care-copy"><div className="section-kicker light">راحة بالك أولاً <span>أمان ورعاية</span></div><h2>اطمئنوا،<br />هم في <em>أيدٍ أمينة.</em></h2><p>من لحظة الدخول وحتى لحظة الاستلام، نعتني بكل التفاصيل الصغيرة التي تصنع فرقاً كبيراً.</p><div className="care-list"><div><ShieldCheck /><span><b>كاميرات مراقبة 24/7</b><small>مشاهدة مباشرة آمنة للأهل</small></span></div><div><Stethoscope /><span><b>فحوصات طبية دورية</b><small>طبيب أطفال متواجد باستمرار</small></span></div><div><Check /><span><b>فريق مؤهل ومحب</b><small>تدريب إسعافات أولية معتمد</small></span></div></div></div><div className="care-orbit"><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="care-center"><Camera size={34} /><b>نحن هنا</b><small>لكل لحظة</small></div><span className="orbit-star">✦</span><span className="orbit-heart">♥</span></div></section>

      <section id="gallery" className="gallery section-pad"><div className="section-head"><div><div className="section-kicker">من يومياتهم <span>المعرض</span></div><h2>لحظات صغيرة،<br /><em>ذكريات كبيرة.</em></h2></div><div className="gallery-intro"><p>نشارككم مقتطفات من أيامهم المليئة باللعب والاكتشاف.</p><div className="gallery-filters">{["الكل", "نشاطات فنية", "وقت الطبيعة", "موسيقى وحركة"].map(filter => <button className={galleryFilter === filter ? "active" : ""} key={filter} onClick={() => setGalleryFilter(filter)}>{filter}</button>)}</div></div></div><div className="gallery-grid">{gallery.filter(item => galleryFilter === "الكل" || item.category === galleryFilter).map(item => <button className={`gallery-item ${item.tone}`} key={item.title} onClick={() => setGalleryOpen(gallery.findIndex(entry => entry.title === item.title))}><img src={item.src} alt={item.title} /><span className="gallery-overlay"><ImageIcon size={18} /><b>{item.title}</b><small>{item.category}</small></span></button>)}</div></section>

      <section className="faq section-pad"><div className="section-kicker">أسئلة الأهل <span>نجيب عن فضولكم</span></div><div className="faq-grid"><h2>كل ما<br /><em>تودون معرفته.</em></h2><div>{["ما هي الأعمار التي تستقبلونها؟", "هل يمكنني مشاهدة طفلي عبر الكاميرات؟", "كيف يبدو اليوم الاعتيادي في الحضانة؟"].map((q, i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span>{q}<ChevronDown className={faq === i ? "rotated" : ""} size={19} /></button>{faq === i && <p>{i === 0 ? "نستقبل الأطفال من عمر شهر واحد وحتى أربع سنوات، ضمن مجموعات صغيرة تناسب كل مرحلة." : i === 1 ? "نعم، نوفر بثاً آمناً ومشفراً للأهل عبر تطبيق خاص، مع احترام خصوصية جميع الأطفال." : "يومنا مزيج متوازن من اللعب الحر، النشاطات المهنية، الوجبات الصحية، وأوقات الراحة."}</p>}</div>)}</div></div></section>

      <section id="contact" className="contact-cta"><div><Sparkles size={20} /><h2>هل نبدأ <em>الحكاية؟</em></h2><p>زورونا لنتعرف على طفلكم ونريكم عالمه الجديد.</p></div><button className="primary-btn light-btn" onClick={reserve}>احجزوا عبر واتساب <MessageCircle size={18} /></button></section>
      <footer><div className="brand"><div className="brand-mark"><span>✦</span></div><div><strong>نجوم صغيرة</strong><small>حضانة ورعاية مبكرة</small></div></div><span>نزرع اليوم، ليزهروا غداً © 2024</span><div className="footer-links"><a href="tel:+966500000000">اتصلوا بنا</a><a href="#home">الخصوصية</a><a href="/parents">بوابة الأهل</a></div></footer>
      {showVideo && <div className="modal-backdrop" onClick={() => setShowVideo(false)}><div className="video-modal" onClick={e => e.stopPropagation()}><button onClick={() => setShowVideo(false)}><X /></button><div className="video-placeholder"><Play size={42} fill="currentColor" /><p>فيديو تعريفي قصير عن يومنا في نجوم صغيرة</p></div></div></div>}
      {galleryOpen !== null && <div className="modal-backdrop" onClick={() => setGalleryOpen(null)}><div className="gallery-modal" onClick={e => e.stopPropagation()}><button onClick={() => setGalleryOpen(null)}><X /></button><img src={gallery[galleryOpen].src} alt={gallery[galleryOpen].title} /><div><b>{gallery[galleryOpen].title}</b><small>{gallery[galleryOpen].category} · من يوميات نجوم صغيرة</small></div></div></div>}
    </main>
  );
}
