import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateWay_Pk);
const Payment = () => {
    return (
        <div className="w-full">
            <SectionTitle
                heading={'Payment'}
                subHeading={'Please Process'}
            >
            </SectionTitle>
            <h2 className='text-xl'> Taka o taka tmi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;