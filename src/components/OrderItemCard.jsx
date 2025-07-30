export default function OrderItemCard({ item }) {
  return (
    <div className="flex items-center gap-4 border rounded-lg overflow-hidden mb-3">
      <div className="bg-[#FFF2E6] p-2">
        <img src={item.thumbnail} alt={item.name} className="w-12 h-14 object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm text-[#2D2941] font-medium">{item.name}</p>
        <p className="text-[#2D2941] font-bold text-base">₹{item.newPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
