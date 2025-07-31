import OrderConfirmation from '../components/OrderConfirmation';
import CheckoutSteps from '../components/CheckoutSteps';




export default function Confirmation() {

   
    return (
        <>
        <CheckoutSteps currentStep={4} />
            <OrderConfirmation />
        </>
    )
}