import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(proccess.env.STRIPE_TEST_KEY)
    }
    return stripePromise;
}

export default getStripe;