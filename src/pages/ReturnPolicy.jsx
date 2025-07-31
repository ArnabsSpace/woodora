export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
      <p className="mb-4">
        We want you to be happy with your purchase. Here's how our return process works:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Returns accepted within 7 days of delivery.</li>
        <li>Items must be unused and in original packaging.</li>
        <li>Refunds issued after inspection of returned item.</li>
        <li>Shipping charges are non-refundable unless the item was defective.</li>
      </ul>
    </div>
  );
}
