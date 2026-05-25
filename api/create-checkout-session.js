const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PACK_PRICES = {
  'Black Bolt': 1495,
  'White Flare': 1495,
  'Destined Rivals': 1495,
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items = [], shippingOption = 'ship-now' } = req.body || {};

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: 'Missing STRIPE_SECRET_KEY in Vercel environment variables.' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty.' });
    }

    const line_items = items.map((item) => {
      const name = item.name;
      const quantity = Math.max(1, Number(item.quantity || 1));
      const unit_amount = PACK_PRICES[name] || 1495;

      return {
        quantity,
        price_data: {
          currency: 'eur',
          unit_amount,
          product_data: {
            name,
            description: 'Rip & Ship Booster Pack',
          },
        },
      };
    });

    const origin = req.headers.origin || 'https://orion-pulls.vercel.app';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      payment_method_types: ['card', 'ideal'],
      success_url: `${origin}/#/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#/cart`,
      metadata: { shippingOption },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return res.status(500).json({ error: error.message || 'Stripe checkout failed.' });
  }
};
