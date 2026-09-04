import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownRight,
  Camera,
  Check,
  Flower2,
  Gem,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    number: '01',
    icon: Flower2,
    title: 'वेन्यू एवं डेकोर',
    english: 'Venue & Decor',
    description: 'शाही स्टेज, खूबसूरत मंडप और आपकी कहानी से प्रेरित थीम डेकोरेशन।',
    featured: true,
  },
  {
    number: '02',
    icon: UtensilsCrossed,
    title: 'कैटरिंग सर्विसेज',
    english: 'Catering',
    description: 'पारंपरिक स्वाद और आधुनिक प्रस्तुति के साथ वेज एवं नॉन-वेज मेन्यू।',
  },
  {
    number: '03',
    icon: Camera,
    title: 'फोटोग्राफी',
    english: 'Photo & Films',
    description: 'सिनेमैटिक प्री-वेडिंग, ड्रोन कवरेज और यादगार वेडिंग फिल्में।',
  },
  {
    number: '04',
    icon: Music2,
    title: 'संगीत एवं डीजे',
    english: 'Music & DJ',
    description: 'लाइव ऑर्केस्ट्रा, प्रीमियम साउंड और शानदार डांस फ्लोर सेटअप।',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'मेकअप एवं स्टाइलिंग',
    english: 'Beauty & Styling',
    description: 'ब्राइडल मेकअप, हेयर स्टाइलिंग और प्रोफेशनल ग्रूमिंग टीम।',
  },
  {
    number: '06',
    icon: Gem,
    title: 'सम्पूर्ण प्रबंधन',
    english: 'Complete Planning',
    description: 'मेहंदी से विदाई तक, हर रस्म और हर मेहमान का सलीके से प्रबंधन।',
    featured: true,
  },
]

const whatsappUrl =
  'https://wa.me/919644538450?text=Namaste%2C%20mujhe%20wedding%20planning%20ke%20bare%20me%20jankari%20chahiye.'

function FloralMark() {
  return (
    <svg viewBox="0 0 140 140" aria-hidden="true" className="floral-mark">
      <path d="M70 126c-4-25 2-50 17-75" />
      <path d="M76 96c17-2 28-11 33-28-17 2-28 11-33 28Z" />
      <path d="M66 109c-18-3-29-13-33-30 17 3 28 13 33 30Z" />
      <path d="M85 59c-14-10-18-24-12-40 14 10 18 24 12 40Z" />
      <circle cx="85" cy="19" r="4" />
    </svg>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="मुख्य नेविगेशन">
          <a href="#home" className="brand" aria-label="रुद्राणी होम">
            <span className="brand-monogram">रु</span>
            <span>
              <strong>रुद्राणी</strong>
              <small>Wedding Planner</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#services">सेवाएं</a>
            <a href="#promise">हमारा वादा</a>
            <a href="#contact">संपर्क</a>
          </div>
          <a className="nav-call" href="tel:+919644538450">
            <Phone size={16} />
            <span>96445 38450</span>
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Rudrani Wedding Planner</p>
            <h1>
              आपके सपनों की शादी,
              <em>हमारी खूबसूरत ज़िम्मेदारी</em>
            </h1>
            <p className="hero-lead">
              “हम सजाएं, आप बस मुस्कुराएं” — हर रस्म को शाही अंदाज़, सुकून और यादगार
              पलों में बदलने के लिए सम्पूर्ण वेडिंग प्लानिंग।
            </p>
            <div className="hero-actions">
              <a href={whatsappUrl} className="button button-whatsapp" target="_blank" rel="noreferrer">
                <MessageCircle size={20} />
                WhatsApp पर बात करें
              </a>
              <a href="#services" className="text-link">
                हमारी सेवाएं <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-note" aria-label="हमारा विशेष अनुभव">
            <FloralMark />
            <span>From first ritual</span>
            <strong>to forever</strong>
            <p>हर छोटी-बड़ी तैयारी, एक अनुभवी टीम के साथ।</p>
          </div>
        </div>

        <div className="hero-footer shell">
          <span>Koteshwar Road · Chandranagar</span>
          <span className="hero-footer-line" />
          <span>Weddings · Celebrations · Memories</span>
        </div>
      </section>

      <section className="intro shell" id="promise">
        <div className="intro-kicker">
          <span>शुभारंभ</span>
          <FloralMark />
        </div>
        <div className="intro-copy">
          <p className="section-label">हमारा वादा / Our Promise</p>
          <h2>आपकी शादी सिर्फ एक आयोजन नहीं, <em>एक विरासत है।</em></h2>
        </div>
        <div className="intro-detail">
          <p>
            रुद्राणी में हम परंपरा की गरिमा और आधुनिक आयोजन की बारीकी को एक साथ लाते हैं।
            हमारी टीम बजट, वेन्यू, डिज़ाइन और मेहमानों के अनुभव—हर पहलू को संभालती है।
          </p>
          <div className="trust-row">
            <span><Check size={16} /> व्यक्तिगत थीम</span>
            <span><Check size={16} /> भरोसेमंद टीम</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label section-label-light">हमारी सेवाएं / Our Services</p>
              <h2>हर रस्म, पूरी रौनक के साथ</h2>
            </div>
            <p>एक टीम। हर तैयारी। शुरुआत से विदाई तक।</p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.number}>
                  <div className="service-topline">
                    <span>{service.number}</span>
                    <Icon size={27} strokeWidth={1.5} />
                  </div>
                  <div>
                    <small>{service.english}</small>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-visual">
          <div className="contact-frame">
            <span className="contact-script">शुभ विवाह</span>
          </div>
        </div>
        <div className="contact-panel">
          <p className="section-label">संपर्क सूत्र / Contact</p>
          <h2>आइए, आपकी शादी की कहानी लिखें।</h2>
          <p className="contact-intro">
            अपनी तारीख, शहर और मेहमानों की संख्या साझा करें। हम आपके लिए सही योजना पर बात करेंगे।
          </p>

          <div className="contact-list">
            <div>
              <span className="contact-icon"><Phone size={19} /></span>
              <p><small>संचालक · Piyush Shakya</small><a href="tel:+919644538450">+91 96445 38450</a></p>
            </div>
            <div>
              <span className="contact-icon"><MapPin size={19} /></span>
              <p><small>पता</small><span>कोटेश्वर रोड, चंद्रनगर दुर्गा कॉलोनी</span></p>
            </div>
          </div>

          <div className="contact-actions">
            <a href={whatsappUrl} className="button button-primary" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> WhatsApp करें
            </a>
            <a href="tel:+919644538450" className="button button-outline">
              <Phone size={19} /> कॉल करें
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a href="#home" className="brand brand-footer">
            <span className="brand-monogram">रु</span>
            <span><strong>रुद्राणी</strong><small>Wedding Planner</small></span>
          </a>
          <p>© 2026 Rudrani Wedding Planner. सर्वाधिकार सुरक्षित।</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">शादी की तैयारी शुरू करें <ArrowDownRight size={17} /></a>
        </div>
      </footer>
    </main>
  )
}
