import React from "react";

const steps = [
  {
    id: 1,
    label: "CART",
    desc: "Review all your product and edit the number.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M16 11V3a1 1 0 00-1-1H5a1 1 0 00-1 1v8a2 2 0 00.586 1.414L7 15.828V17a1 1 0 001 1h4a1 1 0 001-1v-1.172l2.414-3.414A2 2 0 0016 11zM5 3h10v8H5V3zm5 13a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "CUSTOMER INFORMATION",
    desc: "Add your name, phone number and address.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.014-8 4.5V18h16v-1.5c0-2.486-3.582-4.5-8-4.5z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "SHIPPING & PAYMENT",
    desc: "With many payment method, included yours.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 4H3a1 1 0 00-1 1v3h20V5a1 1 0 00-1-1zm1 5H2v10a1 1 0 001 1h18a1 1 0 001-1V9zm-2 5h-4v2h4v-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "REVIEW",
    desc: "View all your information before the confirmation.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
      </svg>
    ),
  },
];

const CheckoutSteps = ({ currentStep = 1 }) => {
  return (
    <div className="w-full p-4 md:p-8 bg-white rounded">
      <h2 className="text-xl md:text-2xl font-bold text-center">Customer Information</h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Please enter your details for billing and shipping.
      </p>
        <div className="relative h-[75px] max-w-[725px] mx-auto mb-2">
            {/* Progress Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>

            {/* Yellow progress line */}
            <div
                className="absolute top-1/2 left-0 h-1 bg-yellow-500 z-10 transition-all duration-500 transform -translate-y-1/2"
                style={{
                width: `${currentStep * (100 / steps.length)}%`,
                }}
            ></div>

            {/* Yellow Dots for Steps */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between z-30 transform -translate-y-1/2">
                {steps.map((step) => (
                <div key={step.id} className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                ))}
            </div>
        </div>
      <div className="relative h-fit flex items-center justify-center max-w-[950px] mx-auto">
        

        {/* Step Items */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-40 w-full relative">
            {steps.map((step) => (
            <div key={step.id} className="text-center flex-1">
                <div className={`md:block ${currentStep === step.id ? "block" : "hidden"} md:text-center`}>
                <div
                    className={`mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 ${
                    currentStep === step.id
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-primary border-gray-300"
                    }`}
                >
                    {step.icon}
                </div>
                <p className="mt-2 mb-2 text-sm font-semibold text-gray-800">{step.label}</p>
                <p className="text-sm font-medium text-primary-75 px-4">{step.desc}</p>
                </div>
            </div>
            ))}
        </div>
    </div>

    </div>
  );
};

export default CheckoutSteps;
