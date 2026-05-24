import React from 'react'
import { createRoot } from 'react-dom/client'
import { Ghost, Package, Video, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import './style.css'

function App() {
  const packs = [
    { name: 'Black Bolt', price: 'Coming soon', note: 'Rip live • shipped from NL' },
    { name: 'White Flare', price: 'Coming soon', note: 'Ghost-type IR chase vibes' },
    { name: 'More packs', price: 'Soon', note: 'New stock added before streams' },
  ]

  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Justin | Orion</p>
          <h1>Pokémon Rip & Ship from the Netherlands</h1>
          <p className="subtitle">
            Claim packs, watch them opened live, and get your cards shipped safely.
          </p>
          <div className="buttons">
            <a href="#packs" className="button primary">View Packs</a>
            <a href="#rules" className="button secondary">Read Rules</a>
          </div>
        </div>

        <div className="mascotCard">
          <div className="moon"></div>
          <Ghost size={110} />
          <h2>Orion Pulls</h2>
          <p>Spooky pulls. Clean shipping. Big chase energy.</p>
        </div>
      </section>

      <section id="packs" className="section">
        <div className="sectionTitle">
          <Sparkles />
          <h2>Available Packs</h2>
        </div>
        <div className="grid">
          {packs.map((pack) => (
            <div className="card" key={pack.name}>
              <Package />
              <h3>{pack.name}</h3>
              <p>{pack.note}</p>
              <strong>{pack.price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <h2>How It Works</h2>
        <div className="steps">
          <div><Package /><h3>1. Claim a pack</h3><p>Choose a pack before or during stream.</p></div>
          <div><Video /><h3>2. Opened live</h3><p>Your pack is ripped on camera.</p></div>
          <div><ShieldCheck /><h3>3. Hits protected</h3><p>Hits are sleeved live. Valuable hits get toploaders.</p></div>
          <div><Truck /><h3>4. Shipped safely</h3><p>Your cards are packed and shipped from the Netherlands.</p></div>
        </div>
      </section>

      <section id="rules" className="section rules">
        <h2>Stream Rules</h2>
        <ul>
          <li>Packs are opened live on stream.</li>
          <li>No refunds after a pack has been opened.</li>
          <li>Pulls are random. Bad packs can happen.</li>
          <li>Hits are sleeved live.</li>
          <li>Shipping is paid separately unless stated otherwise.</li>
        </ul>
      </section>

      <section className="section contact">
        <h2>Claim a Pack</h2>
        <p>For now, orders are handled through TikTok DM while the shop is being tested.</p>
        <a className="button primary" href="https://www.tiktok.com/" target="_blank">DM on TikTok</a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
