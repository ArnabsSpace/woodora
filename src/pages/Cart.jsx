import CartSummary from '../components/CartSummary';

import CheckoutSteps from '../components/CheckoutSteps';



export default function Cart(){
    return (
        <>
        <CheckoutSteps currentStep={1} />
        <CartSummary />
        </>
    )
}