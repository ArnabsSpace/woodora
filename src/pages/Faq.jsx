export default function Faq() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg">1. How can I place an order?</h2>
          <p className="text-gray-700">Simply browse products, add to cart, and proceed to checkout.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">2. What payment methods are accepted?</h2>
          <p className="text-gray-700">We accept Credit Card, UPI, Net Banking, and COD (selected areas).</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">3. How do I track my order?</h2>
          <p className="text-gray-700">You'll receive a tracking link via email/SMS after shipping.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">4. Can I cancel or modify my order?</h2>
          <p className="text-gray-700">Yes, before it is shipped. Contact support as early as possible.</p>
        </div>
      </div>
    </div>
  );
}
