import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Package, Video, ShieldCheck, Truck, Sparkles, Ghost, Mail, ChevronDown, CreditCard, Lock, ShoppingCart } from 'lucide-react'
import roomGhost from './assets/room-ghost.png'
import fullGhost from './assets/full-ghost.png'
import blackBoltImg from './assets/packs/black-bolt.svg'
import whiteFlareImg from './assets/packs/white-flare.svg'
import destinedRivalsImg from './assets/packs/destined-rivals.svg'
import siteLogo from './assets/orion-logo.png'
import './style.css'

const packs = [
  { name: 'Black Bolt', status: 'Test stock soon', note: 'Opened live • Zekrom chase energy', image: blackBoltImg },
  { name: 'White Flare', status: 'Wanted next', note: 'Ghost-type IR vibes • Ghost pick', image: whiteFlareImg },
  { name: 'Destined Rivals', status: 'Coming later', note: 'New packs added before streams', image: destinedRivalsImg },
]

function getPage() {
  const hash = window.location.hash.replace('#/', '')
  return hash.split('?')[0] || 'home'
}

function App() {
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <main>
      <Navbar />

      {page === 'home' && <HomePage />}
      {page === 'rip-and-ship' && <RipShipPage />}
      {page === 'booster-packs' && <BoosterPacksPage />}
      {page === 'rules' && <RulesPage />}
      {page === 'about-me' && <AboutPage />}
      {page === 'delivery-fee' && <DeliveryFeePage />}
      {page === 'contact' && <ContactPage />}
      {page === 'checkout' && <CheckoutPage />}
    </main>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#/home" className="logoLink">
        <img src={siteLogo} alt="Orion Pulls logo" className="navLogoImg" />
        <span>Orion Pulls</span>
      </a>

      <div className="navLinks">
        <a href="#/home">Home</a>

        <div className="navDropdown">
          <a href="#/rip-and-ship">Rip&Ship <ChevronDown size={14} /></a>
          <div className="dropdownMenu">
            <a href="#/rip-and-ship">How It Works</a>
            <a href="#/booster-packs">Booster Packs</a>
          </div>
        </div>

        <a href="#/rules">Rules</a>
        <a href="#/about-me">About Me</a>
        <a href="#/delivery-fee">Delivery Fee</a>
        <a href="#/contact">Contact</a>
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <section className="hero page">
      <div className="heroText">
        <img src={siteLogo} alt="Orion Pulls logo" className="heroLogo" />
        <p className="eyebrow">Orion Pulls</p>
        <h1>Pokémon Rip & Ship from the Netherlands</h1>
        <p className="subtitle">
          Claim packs, watch them opened live, and get your hits sleeved + toploaded before shipping.
        </p>
        <div className="buttons">
          <a href="#/booster-packs" className="button primary"><Package size={18} /> View Packs</a>
          <a href="#/rip-and-ship" className="button secondary">How It Works</a>
        </div>
      </div>

      <div className="profileCard">
        <img src={roomGhost} alt="Purple ghost mascot in a moonlit room" className="profileImage" />
        <div className="profileInfo">
          <h2>Orion Pulls</h2>
          <p>Open. Pull. Grade. Repeat.</p>
        </div>
      </div>
    </section>
  )
}

function RipShipPage() {
  return (
    <section className="pageContent">
      <p className="smallTitle">Simple & transparent</p>
      <h1>How It Works</h1>
      <p className="pageIntro">Every order should be clear, fair, and easy to follow live.</p>

      <div className="steps">
        <div><Package /><h3>1. Claim a pack</h3><p>Choose a pack before or during the stream.</p></div>
        <div><Video /><h3>2. Ripped live</h3><p>Your pack is opened on camera, not off-screen.</p></div>
        <div><ShieldCheck /><h3>3. Hits sleeved + toploaded</h3><p>Hits are sleeved and toploaded live.</p></div>
        <div><Truck /><h3>4. Shipped safely</h3><p>Your cards are packed safely and shipped from the Netherlands.</p></div>
      </div>

      <div className="buttons">
        <a className="button primary" href="#/booster-packs"><Package size={18} /> View Booster Packs</a>
        <a className="button secondary" href="#/rules">Read Rules</a>
      </div>
    </section>
  )
}

function RulesPage() {
  return (
    <section className="pageContent">
      <p className="smallTitle">Please read first</p>
      <h1>Rules</h1>
      <p className="pageIntro">
        These rules keep every rip clear, fair, and organized.
      </p>

      <div className="rulesPanel standalone">
        <h2>Stream Rules</h2>
        <ul>
          <li>Packs are opened live on stream.</li>
          <li>No refunds after a pack has been opened.</li>
          <li>Pulls are random. Bad packs can happen.</li>
          <li>Hits are sleeved and toploaded live.</li>
          <li>Shipping is paid separately unless stated otherwise.</li>
          <li>You can choose to ship now or hold your cards for up to 2 months.</li>
          <li>Orders are handled manually while this is still being tested.</li>
        </ul>
      </div>
    </section>
  )
}

function BoosterPacksPage() {
  return (
    <section className="pageContent">
      <p className="smallTitle">Current Stream Stock</p>
      <h1>Booster Packs</h1>
      <p className="pageIntro">These are the packs planned for rip & ship streams.</p>

      <div className="grid">
        {packs.map((pack) => (
          <div className="card packCard" key={pack.name}>
            <img src={pack.image} alt={pack.name + ' pack art'} className="packImage" />
            <div className="packInfo">
              <div className="packTitleRow">
                <Package />
                <h3>{pack.name}</h3>
              </div>
              <p>{pack.note}</p>
              <span>{pack.status}</span>
              <a className="miniButton" href={`#/checkout?pack=${encodeURIComponent(pack.name)}`}>
                <ShoppingCart size={16} /> Select Pack
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="pageContent splitPage">
      <div>
        <p className="smallTitle">About Me</p>
        <h1>About Orion Pulls</h1>
        <p className="pageIntro">
          Orion Pulls is a small Pokémon card rip & ship project from the Netherlands. The goal is to keep openings clear, fair, and fun.
        </p>
        <div className="aboutBox">
          <p>
            Packs are opened live, hits are sleeved and toploaded, and cards are packed safely before shipping. This site is still being built step by step, so everything starts simple and organized.
          </p>
        </div>
      </div>

      <div className="mascotPanel">
        <img src={fullGhost} alt="Full body purple ghost mascot" />
        <h3>Purple Ghost Mascot</h3>
        <p>Cute, mischievous, spooky, and ready for big pulls.</p>
      </div>
    </section>
  )
}

function DeliveryFeePage() {
  return (
    <section className="pageContent">
      <p className="smallTitle">After your packs are opened</p>
      <h1>Delivery Fee</h1>
      <p className="pageIntro">Choose whether you want your cards shipped now or held for combined shipping.</p>

      <div className="shippingGrid">
        <div className="shippingCard">
          <h3>Ship Now</h3>
          <p>Pay shipping after the stream and your cards will be packed safely and shipped from the Netherlands.</p>
        </div>

        <div className="shippingCard">
          <h3>Hold My Cards</h3>
          <p>Your cards can be held safely for up to 2 months so you can combine multiple stream orders into one shipment.</p>
        </div>
      </div>
    </section>
  )
}


function CheckoutPage() {
  const selectedPack = new URLSearchParams(window.location.hash.split('?')[1] || '').get('pack') || 'Booster Pack'

  return (
    <section className="pageContent checkoutPage">
      <p className="smallTitle">Order Preview</p>
      <h1>Pay Screen</h1>
      <p className="pageIntro">
        This is the checkout preview for rip & ship orders. Real payment connection can be added later.
      </p>

      <div className="checkoutLayout">
        <div className="checkoutPanel">
          <h2>Your Pack</h2>

          <label className="fieldLabel">Selected product</label>
          <div className="fakeInput">{selectedPack}</div>

          <label className="fieldLabel">Quantity</label>
          <div className="quantityRow">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <label className="fieldLabel">Shipping choice</label>
          <div className="shippingChoice">
            <label>
              <input type="radio" name="shipping" defaultChecked />
              <span>
                <strong>Ship Now</strong>
                <small>Pay shipping and send after the stream.</small>
              </span>
            </label>

            <label>
              <input type="radio" name="shipping" />
              <span>
                <strong>Hold My Cards</strong>
                <small>Hold safely up to 2 months to combine shipping.</small>
              </span>
            </label>
          </div>
        </div>

        <div className="orderSummary">
          <h2>Order Summary</h2>
          <div className="summaryLine">
            <span>{selectedPack}</span>
            <strong>€--,--</strong>
          </div>
          <div className="summaryLine">
            <span>Shipping</span>
            <strong>Choose option</strong>
          </div>
          <div className="summaryTotal">
            <span>Total</span>
            <strong>Calculated later</strong>
          </div>

          <div className="secureNote">
            <Lock size={18} />
            <span>Payment is not connected yet. This is a preview screen.</span>
          </div>

          <button className="payButton">
            <CreditCard size={18} /> Continue to Payment
          </button>

          <p className="checkoutDisclaimer">
            By continuing, buyers should understand packs are opened live and refunds are not possible after ripping.
          </p>
        </div>
      </div>
    </section>
  )
}


function ContactPage() {
  return (
    <section className="pageContent contactPage">
      <p className="smallTitle">Questions first</p>
      <h1>Contact</h1>
      <p className="pageIntro">
        Contact details can be added here later. For now, check the booster packs and rules first before claiming anything.
      </p>
      <div className="buttons center">
        <a className="button primary" href="#/booster-packs"><Package size={18} /> View Booster Packs</a>
        <a className="button secondary" href="#/rip-and-ship">Check Rules</a>
      </div>
    </section>
  )
}

createRoot(document.getElementById('root')).render(<App />)
