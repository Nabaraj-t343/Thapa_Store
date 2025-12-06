import stripe from 'stripe'

const Stripe = stripe(process.env.STRIPE_SECRET_KEY)