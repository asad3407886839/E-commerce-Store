import React, { useState } from 'react';
import CartReview from './CartReview';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import PaymentForm from './PaymentForm';
import OrderReview from './OrderReview';

const Checkout = () => {
    const [step, setStep] = useState(1); // Current step in the checkout process

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <CartReview onNext={nextStep} />;
            case 2:
                return <ShippingForm onNext={nextStep} onPrev={prevStep} />;
            case 3:
                return <BillingForm onNext={nextStep} onPrev={prevStep} />;
            case 4:
                return <PaymentForm onNext={nextStep} onPrev={prevStep} />;
            case 5:
                return <OrderReview onPrev={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="checkout-container">
            {renderStep()}
        </div>
    );
};

export default Checkout;
