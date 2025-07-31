import { useState } from "react";

export default function PaymentMethod({ onConfirm }) {
  const [paymentType, setPaymentType] = useState("debit");
  const [selectedCard, setSelectedCard] = useState("axis");
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [error, setError] = useState("");

  const cards = [
    {
      id: "axis",
      bank: "Axim Bank",
      last4: "4578",
      type: "debit",
      logo: "🟠",
    },
    {
      id: "hdfc",
      bank: "HDFC Bank",
      last4: "4521",
      type: "debit",
      logo: "🔵",
    },
    {
      id: "sbi",
      bank: "SBI Bank",
      last4: "9112",
      type: "credit",
      logo: "🟢",
    },
  ];

  const handleConfirm = () => {
    if (!paymentType || (!selectedCard && !showNewCardForm)) {
      setError("Please select payment type and a card.");
      return;
    }

    setError("");
    const paymentInfo = {
      method: paymentType,
      card: selectedCard || "new-card",
    };
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
    onConfirm();
  };

  const renderCardSection = (type) => (
    <div className="bg-gray-100 p-4 rounded-md space-y-2 mt-2">
      <div className="text-sm font-semibold text-gray-700 capitalize mb-2">
        {type} Card
      </div>

      {cards
        .filter((c) => c.type === type)
        .map((card) => (
          <label
            key={card.id}
            className={`flex items-center justify-between p-3 rounded-md border cursor-pointer ${
              selectedCard === card.id
                ? "bg-white border-primary"
                : "bg-gray-200 border-transparent"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{card.logo}</span>
              <div>
                <div className="font-medium">{card.bank}</div>
                <div className="text-xs text-gray-600">
                  **** **** **** {card.last4}
                </div>
              </div>
            </div>
            <input
              type="radio"
              name="card"
              className="accent-primary w-4 h-4"
              checked={selectedCard === card.id}
              onChange={() => {
                setSelectedCard(card.id);
                setShowNewCardForm(false);
              }}
            />
          </label>
        ))}

      {/* Add New Card Option */}
      {!showNewCardForm && (
        <div
          className="flex items-center gap-2 text-blue-600 text-sm cursor-pointer hover:underline mt-2"
          onClick={() => {
            setShowNewCardForm(true);
            setSelectedCard("");
          }}
        >
          <span className="text-lg">＋</span>
          <span>Add New Cards</span>
        </div>
      )}

      {/* New Card Form */}
      {showNewCardForm && (
        <div className="space-y-2 border p-4 rounded bg-gray-50 text-sm">
          <input
            type="text"
            className="w-full border p-2 rounded bg-gray-100 text-gray-500"
            placeholder="Card Number"
            disabled
          />
          <div className="flex gap-2">
            <input
              type="text"
              className="w-1/2 border p-2 rounded bg-gray-100 text-gray-500"
              placeholder="MM/YY"
              disabled
            />
            <input
              type="text"
              className="w-1/2 border p-2 rounded bg-gray-100 text-gray-500"
              placeholder="CVV"
              disabled
            />
          </div>
          <div className="text-sm text-orange-600">
            Demo card only. Payment integration coming soon.
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-full space-y-5 text-sm ">
      {/* Payment Options */}
      {["upi", "debit", "credit"].map((type) => (
        <div key={type} className="space-y-1">
          <div
            className={`flex justify-between items-center border rounded-full px-4 py-2 cursor-pointer transition-all ${
              paymentType === type ? "bg-white shadow-md" : "bg-gray-100"
            }`}
            onClick={() => {
              setPaymentType(type);
              setSelectedCard("");
              setShowNewCardForm(false);
            }}
          >
            <span className="capitalize">
              {type === "upi"
                ? "UPI Payment"
                : type === "debit"
                ? "Debit Card"
                : "Credit Card"}
            </span>
            <span
              className={`text-xl transform transition-transform duration-300 ${
                paymentType === type ? "rotate-90" : "rotate-0"
              }`}
            >
              ❯
            </span>
          </div>

          {/* Show only when active */}
          {(type === "debit" || type === "credit") &&
            paymentType === type &&
            renderCardSection(type)}
        </div>
      ))}

      {/* Error Message */}
      {error && <div className="text-red-600 text-sm">{error}</div>}

      {/* Confirm Button */}
      <div className="flex w-full justify-end ">
          <button
            className="w-full bg-primary text-white py-2 rounded-full h-12 hover:bg-primary-90 md:max-w-[250px] mt-8 max-w[200px] ml-auto mr-0"
            onClick={handleConfirm}
          >
            Confirm Your Order
          </button>
      </div>
    </div>
  );
}
