import { createFileRoute } from '@tanstack/react-router'
import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  CircleCheckBig,
  Flower2,
  Gem,
  Heart,
  HeartHandshake,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Play,
  Quote,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const phoneNumber = '+919644538450'
const displayPhone = '+91 96445 38450'
const whatsappUrl =
  'https://wa.me/919644538450?text=Namaste%20Rudrani%2C%20mujhe%20apni%20wedding%20plan%20karni%20hai.'

const quickServices = [
  { icon: MapPin, label: 'Venue' },
  { icon: Flower2, label: 'Décor' },
  { icon: UtensilsCrossed, label: 'Catering' },
  { icon: Camera, label: 'Photography' },
  { icon: Music2, label: 'DJ' },
  { icon: Sparkles, label: 'Makeup' },
]

const services = [
  {
    number: '01',
    icon: Flower2,
    title: 'वेन्यू एवं डेकोर',
    english: 'Venue & Décor',
    description: 'शाही मंडप, फ्लोरल स्टेज और आपकी कहानी के रंगों में सजा पूरा सेलिब्रेशन।',
    image:
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    icon: UtensilsCrossed,
    title: 'कैटरिंग',
    english: 'Catering & Hospitality',
    description: 'पारंपरिक स्वाद, आधुनिक प्रस्तुति और हर मेहमान के लिए गर्मजोशी भरी मेहमाननवाज़ी।',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    icon: Camera,
    title: 'फोटो एवं फिल्म्स',
    english: 'Photography & Films',
    description: 'कैंडिड मोमेंट्स, सिनेमैटिक फिल्म, ड्रोन कवरेज और खूबसूरत प्री-वेडिंग शूट।',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '04',
    icon: Music2,
    title: 'एंटरटेनमेंट',
    english: 'Music, DJ & Artists',
    description: 'संगीत नाइट से बारात तक—DJ, लाइव म्यूज़िक, एंकर और परफॉर्मर्स का पूरा प्रबंधन।',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'मेकअप एवं स्टाइलिंग',
    english: 'Beauty & Styling',
    description: 'ब्राइडल मेकअप, हेयर, ड्रेपिंग और परिवार के लिए भरोसेमंद प्रोफेशनल आर्टिस्ट।',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '06',
    icon: Gem,
    title: 'सम्पूर्ण वेडिंग प्लानिंग',
    english: 'End-to-End Planning',
    description: 'बजट, वेंडर, गेस्ट, टाइमलाइन और हर रस्म—एक टीम, एक प्लान, बिल्कुल सुकून के साथ।',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85',
  },
]

const portfolio = [
  {
    title: 'The Royal Vows',
    place: 'Ujjain · Palace Wedding',
    image:
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=88',
    className: 'portfolio-tall',
  },
  {
    title: 'Mehendi in Marigolds',
    place: 'Indore · Intimate Celebration',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=88',
    className: '',
  },
  {
    title: 'A Night of Sangeet',
    place: 'Bhopal · Wedding Film',
    image:
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=88',
    className: 'portfolio-film',
  },
  {
    title: 'Phoolon Ki Haldi',
    place: 'Dewas · Garden Wedding',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=88',
    className: '',
  },
]

const processSteps = [
  ['01', 'Consultation', 'पहली मुलाकात में आपकी कहानी, पसंद और प्राथमिकताएं समझते हैं।'],
  ['02', 'Planning', 'बजट, वेंडर और टाइमलाइन को एक साफ़ रोडमैप में बदलते हैं।'],
  ['03', 'Design', 'कलर, फ्लोरल, लाइट और हर विज़ुअल डिटेल का रूप तय करते हैं।'],
  ['04', 'Coordination', 'सभी टीमों और रस्मों को एक ही लय में चलाते हैं।'],
  ['05', 'Wedding Day', 'आप जश्न मनाइए—हर छोटी-बड़ी ज़िम्मेदारी हमारी।'],
]

const packages = [
  {
    name: 'Essential',
    hindi: 'ज़रूरी शुरुआत',
    description: 'उन परिवारों के लिए जिन्हें सही वेंडर और सुव्यवस्थित प्लान चाहिए।',
    features: ['Planning consultation', 'Vendor shortlist', 'Budget roadmap', 'Event timeline'],
  },
  {
    name: 'Signature',
    hindi: 'सबसे पसंदीदा',
    description: 'डिज़ाइन से ऑन-ग्राउंड मैनेजमेंट तक एक खूबसूरत, संतुलित अनुभव।',
    features: ['Everything in Essential', 'Décor concept & design', 'Guest coordination', 'Function management'],
    featured: true,
  },
  {
    name: 'Royal',
    hindi: 'बेस्पोक अनुभव',
    description: 'शानदार मल्टी-डे वेडिंग के लिए सम्पूर्ण, निजी और प्रीमियम प्लानिंग।',
    features: ['End-to-end planning', 'Hospitality desk', 'Artist & logistics', 'Dedicated wedding team'],
  },
]

const reasons = [
  ['01', 'एक ही भरोसेमंद टीम', 'Single point of contact'],
  ['02', 'बजट पर साफ़ नज़र', 'Transparent planning'],
  ['03', 'लोकल वेंडर नेटवर्क', 'Trusted local partners'],
  ['04', 'कस्टम वेडिंग डिज़ाइन', 'Never copy-paste décor'],
  ['05', 'गेस्ट की खास देखभाल', 'Warm hospitality'],
  ['06', 'हर रस्म की टाइमलाइन', 'Minute-wise coordination'],
  ['07', 'बैकअप और रिस्क प्लान', 'Prepared for surprises'],
  ['08', 'शादी वाले दिन सुकून', 'You enjoy, we manage'],
]

const testimonials = [
  {
    quote:
      'पूरी शादी में हमें एक बार भी किसी vendor को call नहीं करना पड़ा। टीम ने हर detail परिवार की तरह संभाली।',
    name: 'Aarushi & Raghav',
    detail: 'Wedding Celebration · Indore',
  },
  {
    quote:
      'Décor exactly वैसा था जैसा हमने moodboard में सोचा था—elegant, warm और बिल्कुल हमारे जैसा।',
    name: 'Sakshi & Harsh',
    detail: 'Wedding Celebration · Ujjain',
  },
  {
    quote:
      'Guests की hospitality से लेकर विदाई तक सब perfectly timed था। हम सच में बस अपनी शादी enjoy कर पाए।',
    name: 'Neha & Aditya',
    detail: 'Wedding Celebration · Bhopal',
  },
]

const faqs = [
  {
    question: 'Wedding planning कितने समय पहले शुरू करनी चाहिए?',
    answer:
      'आदर्श रूप से 6–12 महीने पहले। लेकिन 8–12 सप्ताह में होने वाली weddings के लिए भी हम priority-based planning कर सकते हैं।',
  },
  {
    question: 'क्या आप सिर्फ décor या photography भी manage करते हैं?',
    answer:
      'हाँ। आप complete planning के साथ हमारी individual services—venue, décor, catering, photography, entertainment या makeup—भी चुन सकते हैं।',
  },
  {
    question: 'क्या packages customize हो सकते हैं?',
    answer:
      'बिल्कुल। हर wedding का scale, city, functions और expectations अलग होते हैं, इसलिए final proposal आपकी जरूरतों के अनुसार बनाया जाता है।',
  },
  {
    question: 'क्या आप destination weddings करते हैं?',
    answer:
      'हाँ। Venue discovery, travel logistics, guest hospitality और local vendor coordination के साथ destination weddings plan की जाती हैं।',
  },
  {
    question: 'पहली consultation paid है?',
    answer:
      'शुरुआती discovery call complimentary है। इसमें हम date, city, guest count, functions और आपकी vision समझते हैं।',
  },
]

function BotanicalMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" className={`botanical-mark ${className}`}>
      <path d="M78 146c-5-38 2-77 24-113" />
      <path d="M86 108c25-2 42-16 49-40-25 3-42 16-49 40Z" />
      <path d="M73 126c-25-4-42-19-48-44 25 4 41 19 48 44Z" />
      <path d="M101 48C83 35 78 17 86 0c19 13 24 31 15 48Z" />
      <circle cx="102" cy="32" r="5" />
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <p className="section-eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const closeMenu = () => setMenuOpen(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    const encoded = new URLSearchParams()
    formData.forEach((value, key) => encoded.append(key, String(value)))

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav shell">
          <a href="#home" className="brand" aria-label="Rudrani Wedding Planner home">
            <span className="brand-monogram">रु</span>
            <span className="brand-copy">
              <strong>रुद्राणी</strong>
              <small>Wedding Planner</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href={whatsappUrl} className="nav-whatsapp-mobile" target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </nav>

          <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-ornament hero-ornament-left" aria-hidden="true" />
        <div className="hero-ornament hero-ornament-right" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Rudrani Wedding Planner <span /></p>
            <h1>
              आपकी कहानी <i>•</i> हमारी प्लानिंग
              <em>• यादगार शादी •</em>
            </h1>
            <p className="hero-lead">
              Royal celebrations, thoughtful details और बिना किसी stress के—आपकी dream wedding को हम देते हैं एक खूबसूरत, यादगार रूप।
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> WhatsApp
              </a>
              <a className="button button-ivory" href="#contact">
                Plan My Wedding <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-seal" aria-label="Celebrations planned with heart">
            <BotanicalMark />
            <span>Planned with</span>
            <strong>दिल से</strong>
            <small>Rudrani Weddings</small>
          </div>
        </div>
        <a href="#quick-services" className="scroll-cue" aria-label="Scroll to services">
          <span>Explore</span><ChevronDown size={18} />
        </a>
      </section>

      <section className="quick-services" id="quick-services" aria-label="Quick services">
        <div className="quick-services-grid shell">
          {quickServices.map(({ icon: Icon, label }) => (
            <a href="#services" key={label} className="quick-service">
              <Icon size={22} strokeWidth={1.5} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="about-image-wrap">
          <div className="about-image" role="img" aria-label="Elegant Indian wedding mandap" />
          <div className="about-stat">
            <strong>हर detail</strong>
            <span>आपकी कहानी से प्रेरित</span>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="About Rudrani" title="हम सिर्फ शादी नहीं सजाते, यादें बनाते हैं।" />
          <p className="large-copy">
            आपकी शादी सिर्फ एक event नहीं—दो परिवारों, अनगिनत भावनाओं और जीवनभर की यादों का उत्सव है।
          </p>
          <p>
            Rudrani में हम creativity को disciplined planning के साथ जोड़ते हैं। Venue से विदाई तक हर निर्णय आपकी पसंद, budget और family traditions के अनुसार लिया जाता है।
          </p>
          <div className="signature-row">
            <span className="signature">Rudrani</span>
            <span><b>दिल से डिज़ाइन।</b><br />सलीके से मैनेज।</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Services"
            title="हर रस्म के लिए एक खास इंतज़ाम"
            copy="एक ही भरोसेमंद टीम के साथ अपनी जरूरत के अनुसार individual service या complete wedding planning चुनें।"
          />
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, english, description, image }) => (
              <article className="service-card" key={number}>
                <div className="service-image" style={{ backgroundImage: `url(${image})` }} />
                <div className="service-content">
                  <span className="service-number">{number}</span>
                  <Icon className="service-icon" size={30} strokeWidth={1.3} />
                  <p>{english}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="shell">
          <div className="portfolio-heading-row">
            <SectionHeading
              eyebrow="Our Wedding Work"
              title="पलों से बनी खूबसूरत कहानियाँ"
              light
            />
            <p>From intimate vows to grand celebrations, every frame carries a little piece of the couple.</p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <article className={`portfolio-card ${item.className}`} key={item.title}>
                <img src={item.image} alt={`${item.title} wedding celebration`} loading="lazy" />
                <div className="portfolio-overlay">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.className === 'portfolio-film' && <span className="play-button"><Play size={18} fill="currentColor" /></span>}
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="portfolio-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            View full wedding stories <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="shell">
          <SectionHeading
            eyebrow="How We Work"
            title="आपके सपने से शादी के दिन तक"
            copy="एक clear, calm और collaborative process—ताकि हर decision आसान लगे और हर moment खास।"
          />
          <div className="process-list">
            {processSteps.map(([number, title, description]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <div className="process-dot" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="packages-section" id="packages">
        <BotanicalMark className="packages-botanical" />
        <div className="shell">
          <SectionHeading
            eyebrow="Wedding Packages"
            title="आपके celebration के लिए सही साथ"
            copy="हर package को wedding city, guest count, functions और scope के अनुसार customize किया जाता है।"
          />
          <div className="package-grid">
            {packages.map((item) => (
              <article className={`package-card ${item.featured ? 'package-featured' : ''}`} key={item.name}>
                {item.featured && <span className="popular-tag">Most Loved</span>}
                <p className="package-hindi">{item.hindi}</p>
                <h3>{item.name}</h3>
                <p className="package-description">{item.description}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}><Check size={17} /> {feature}</li>
                  ))}
                </ul>
                <a href="#contact">Get Custom Quote <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
          <p className="package-note">No one-size-fits-all pricing. केवल वही सेवाएं चुनें जिनकी आपको सच में जरूरत है।</p>
        </div>
      </section>

      <section className="why-section">
        <div className="shell why-grid">
          <div className="why-intro">
            <SectionHeading eyebrow="Why Rudrani" title="क्यों परिवार हमें अपना मानते हैं" light />
            <p>
              Beautiful weddings happen when creative ideas meet reliable execution. हम दोनों को बराबर महत्व देते हैं।
            </p>
            <a href={`tel:${phoneNumber}`}><Phone size={17} /> Talk to a planner</a>
          </div>
          <div className="reason-grid">
            {reasons.map(([number, title, english]) => (
              <article className="reason-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{english}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="reviews">
        <div className="shell">
          <SectionHeading eyebrow="Client Love" title="शादी के बाद भी जो बातें याद रहती हैं" />
          <div className="testimonial-grid">
            {testimonials.map((review, index) => (
              <article className="testimonial-card" key={review.name}>
                <Quote className="quote-icon" size={42} strokeWidth={1} />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill="currentColor" />)}
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <div className="review-person">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p><strong>{review.name}</strong><small>{review.detail}</small></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <SectionHeading eyebrow="Frequently Asked" title="कुछ सवाल, जिनके जवाब पहले से जानना अच्छा है" />
            <p>कुछ और पूछना है? हमें WhatsApp करें—हम simple language में सब समझाएंगे।</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Ask on WhatsApp</a>
          </div>
          <div className="accordion-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><ChevronDown size={19} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-visual">
          <div className="contact-visual-content">
            <p>Let&apos;s create something</p>
            <strong>खूबसूरत</strong>
            <span>together.</span>
          </div>
          <div className="contact-details">
            <a href={`tel:${phoneNumber}`}><Phone size={17} /> {displayPhone}</a>
            <span><MapPin size={17} /> Madhya Pradesh · Destination Weddings</span>
          </div>
        </div>

        <div className="contact-form-wrap">
          <p className="section-eyebrow"><span /> Wedding Enquiry</p>
          <h2>अपनी शादी के बारे में हमें बताएं</h2>
          <p>कुछ basic details share करें। हमारी team जल्द ही एक discovery call के लिए संपर्क करेगी।</p>

          <form
            className="enquiry-form"
            name="wedding-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="wedding-enquiry" />
            <p className="honeypot">
              <label>Don&apos;t fill this out: <input name="bot-field" /></label>
            </p>
            <label>
              <span>Your Name *</span>
              <input type="text" name="name" placeholder="आपका नाम" required autoComplete="name" />
            </label>
            <label>
              <span>Phone / WhatsApp *</span>
              <input type="tel" name="phone" placeholder="+91" required autoComplete="tel" />
            </label>
            <label>
              <span>Wedding Date</span>
              <span className="input-with-icon"><CalendarDays size={17} /><input type="date" name="wedding-date" /></span>
            </label>
            <label>
              <span>Wedding City *</span>
              <span className="input-with-icon"><MapPin size={17} /><input type="text" name="city" placeholder="शहर" required /></span>
            </label>
            <label>
              <span>Expected Guests</span>
              <span className="input-with-icon"><Users size={17} /><select name="guests" defaultValue=""><option value="" disabled>Select</option><option>Under 100</option><option>100–300</option><option>300–600</option><option>600+</option></select></span>
            </label>
            <label>
              <span>Number of Functions</span>
              <select name="functions" defaultValue=""><option value="" disabled>Select</option><option>1–2 Functions</option><option>3–4 Functions</option><option>5+ Functions</option></select>
            </label>
            <label className="form-full">
              <span>What can we plan for you?</span>
              <textarea name="message" rows={3} placeholder="Venue, décor, complete planning या कुछ और..." />
            </label>
            <button className="form-submit form-full" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending...' : 'Request a Planning Call'} <ArrowRight size={18} />
            </button>
            <div className="form-status form-full" aria-live="polite">
              {formStatus === 'success' && <p className="form-success"><CircleCheckBig size={18} /> धन्यवाद! आपकी enquiry मिल गई है। हम जल्द संपर्क करेंगे।</p>}
              {formStatus === 'error' && <p className="form-error">Submission नहीं हो पाया। कृपया WhatsApp या call करें।</p>}
            </div>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner shell">
          <Heart className="cta-heart" fill="currentColor" />
          <p>One beautiful beginning</p>
          <h2>आपकी Dream Wedding की शुरुआत यहीं से करें</h2>
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> WhatsApp Now
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-main shell">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-monogram">रु</span>
              <span className="brand-copy"><strong>रुद्राणी</strong><small>Wedding Planner</small></span>
            </a>
            <p>Beautifully planned weddings, thoughtfully managed from the first idea to the final विदाई।</p>
          </div>
          <div className="footer-links">
            <p>Explore</p>
            <a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#packages">Packages</a>
          </div>
          <div className="footer-links">
            <p>Contact</p>
            <a href={`tel:${phoneNumber}`}>{displayPhone}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
            <span>Madhya Pradesh, India</span>
          </div>
          <div className="footer-promise">
            <HeartHandshake size={28} />
            <p>आप जश्न मनाइए,<br /><strong>हम सब संभालेंगे।</strong></p>
            <div><a href="#portfolio" aria-label="Instagram"><Instagram size={18} /></a><a href={whatsappUrl} aria-label="WhatsApp"><MessageCircle size={18} /></a></div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <p>© 2026 Rudrani Wedding Planner. Made with love for beautiful beginnings.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </main>
  )
}
