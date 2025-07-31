export default function YourOrderItemCard({ item }) {
  return (
    <div className="flex items-center gap-4 border rounded-lg overflow-hidden mb-3">
      <div className="bg-[#FFF2E6] p-2 w-24 max-w-[100px] h-24 max-h-[100px] flex items-center justify-center">
        <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-contain" />
      </div>
      <div className="flex flex-col justify-center w-full pr-4">
        <p className="text-sm text-[#2D2941] font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
      </div>
    </div>
  );
}
