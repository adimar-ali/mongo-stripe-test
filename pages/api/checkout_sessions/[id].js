import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_TEST_KEY)

export default async function handler(req, res) {
    const id = req.query.id;
    try {
        if (!id.startsWith('cs_')) {
            throw Error('Incorrect CheckoutSession Id.');
        }
        const checkout_session = await stripe.checkout.sessions.retrieve(id)
        res.status(200).json(checkout_session)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}


