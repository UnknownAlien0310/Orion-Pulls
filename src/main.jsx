import React from 'react'
import { createRoot } from 'react-dom/client'
import { Package, Video, ShieldCheck, Truck, Sparkles, Ghost } from 'lucide-react'
import roomGhost from './assets/room-ghost.png'
import fullGhost from './assets/full-ghost.png'
import blackBoltImg from './assets/packs/black-bolt.svg'
import whiteFlareImg from './assets/packs/white-flare.svg'
import morePacksImg from './assets/packs/more-packs.svg'
import './style.css'

function App() {
  const packs = [
    { name: 'Black Bolt', status: 'Test stock soon', note: 'Opened live • Zekrom chase energy', image: blackBoltImg },
    { name: 'White Flare', status: 'Wanted next', note: 'Ghost-type IR vibes • Ghost pick', image: whiteFlareImg },
    { name: 'More packs', status: 'Coming later', note: 'New packs added before streams', image: morePacksImg },
  ]

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logoLink">
          <span className="logoMark">👻</span>
          <span>Orion Pulls</span>
        </a>

        <div className="navLinks">
          <a href="#home">Home</a>

          <div className="navDropdown">
            <a href="#packs">Rip&Ship ▾</a>
            <div className="dropdownMenu">
              <a href="#packs">Booster Packs</a>
            </div>
          </div>

          <a href="#about">About Me</a>
          <a href="#delivery">Delivery Fee</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">Orion Pulls</p>
          <h1>Pokémon Rip & Ship from the Netherlands</h1>
          <p className="subtitle">
            Claim packs, watch them opened live, and get your hits sleeved + toploaded before shipping.
          </p>
          <div className="buttons">
            <a href="#packs" className="button primary">View Packs</a>
            <a href="#rules" className="button secondary">Read Rules</a>
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

      <section id="packs" className="section">
        <div className="sectionHeader">
          <div>
            <p className="smallTitle">Current Stream Stock</p>
            <h2>Available Packs</h2>
          </div>
          <Sparkles />
        </div>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="sectionHeader">
          <div>
            <p className="smallTitle">Simple & transparent</p>
            <h2>How Rip & Ship Works</h2>
          </div>
        </div>

        <div className="steps">
          <div><Package /><h3>1. Claim a pack</h3><p>Choose a pack before or during the stream.</p></div>
          <div><Video /><h3>2. Ripped live</h3><p>Your pack is opened on camera, not off-screen.</p></div>
          <div><ShieldCheck /><h3>3. Hits sleeved + toploaded</h3><p>Hits are sleeved and toploaded live.</p></div>
          <div><Truck /><h3>4. Shipped safely</h3><p>Your cards are packed safely and shipped from the Netherlands.</p></div>
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="sectionHeader">
          <div>
            <p className="smallTitle">About Me</p>
            <h2>About Orion Pulls</h2>
          </div>
        </div>
        <div className="aboutBox">
          <p>
            Orion Pulls is a small Pokémon card rip & ship project from the Netherlands. The goal is to keep openings clear, fair, and fun: packs are opened live, hits are sleeved and toploaded, and cards are packed safely before shipping.
          </p>
        </div>
      </section>

      <section id="delivery" className="section shippingOptions">
        <div className="sectionHeader">
          <div>
            <p className="smallTitle">After your packs are opened</p>
            <h2>Shipping Options</h2>
          </div>
        </div>

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

      <section id="rules" className="section split">
        <div className="rulesPanel">
          <p className="smallTitle">Please read first</p>
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

        <div className="mascotPanel">
          <img src={fullGhost} alt="Full body purple ghost mascot" />
          <h3>Purple Ghost Mascot</h3>
          <p>Cute, mischievous, spooky, and ready for big pulls.</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="smallTitle">Ready to join?</p>
        <h2>Start With the Packs</h2>
        <p>
          Check the current pack list first, then read the rules before claiming anything. This keeps every rip clear, fair, and organized.
        </p>
        <div className="buttons center">
          <a className="button primary" href="#packs">
            <Package size={18} /> View Available Packs
          </a>
          <a className="button secondary" href="#rules">Check Rules</a>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
