const products = [
  {
    id: "prod001",
    name: "Blue Velvet Lounge Chair",
    category: "Chair",
    gallery: ["prod1.png", "chair1.png", "chair2.png", "chair3.png"],
    thumbnail: "prod1.png",
    colors: ["Blue", "Navy"],
    oldPrice: 149.99,
    newPrice: 119.99,
    rating: 4.6,
    ratingCount: 88,
    isNew: true,
    description: "Elegant velvet chair with brass legs, ideal for modern interiors.",
    highlights: ["Velvet fabric", "Solid brass legs", "Contemporary shape"],
    additionalInfo: {
      dimensions: "72cm x 65cm x 85cm",
      material: "Velvet & Metal",
      returnPolicy: "30-day return policy"
    }
  },
  {
    id: "prod002",
    name: "Modern Teal Sofa",
    category: "Sofa",
    gallery: ["prod2.png", "sofa1.png", "sofa2.png", "sofa3.png"],
    thumbnail: "prod2.png",
    colors: ["Teal", "Green"],
    oldPrice: 399.00,
    newPrice: 339.00,
    rating: 4.7,
    ratingCount: 102,
    isNew: false,
    description: "Compact 2-seater sofa with sleek arms and tufted backrest.",
    highlights: ["Durable upholstery", "Modern silhouette", "Wooden base"],
    additionalInfo: {
      dimensions: "150cm x 85cm x 85cm",
      material: "Fabric & Wood",
      returnPolicy: "30 days return"
    }
  },
  {
    id: "prod003",
    name: "Scandi Green Armchair",
    category: "Chair",
    gallery: ["prod3.png", "chair3.png", "chair4.png", "chair1.png"],
    thumbnail: "prod3.png",
    colors: ["Green", "Olive"],
    oldPrice: 129.99,
    newPrice: 109.99,
    rating: 4.4,
    ratingCount: 75,
    isNew: true,
    description: "Comfortable armchair with curved back and soft upholstery.",
    highlights: ["Soft cushions", "Wood legs", "Ergonomic design"],
    additionalInfo: {
      dimensions: "78cm x 72cm x 85cm",
      material: "Linen & Wood",
      returnPolicy: "15-day return"
    }
  },
  {
    id: "prod004",
    name: "Swivel Lounge Chair",
    category: "Chair",
    gallery: ["prod4.png", "chair2.png", "chair3.png", "table4.png"],
    thumbnail: "prod4.png",
    colors: ["Gray", "Beige"],
    oldPrice: 189.00,
    newPrice: 159.00,
    rating: 4.3,
    ratingCount: 69,
    isNew: false,
    description: "Relaxing swivel chair with wide seat and plush cushions.",
    highlights: ["360° rotation", "Soft padding", "Stylish profile"],
    additionalInfo: {
      dimensions: "90cm x 90cm x 90cm",
      material: "Fabric & Metal",
      returnPolicy: "20-day return"
    }
  },
  {
    id: "prod005",
    name: "Round Yellow Coffee Table",
    category: "Table",
    gallery: ["prod5.png", "table4.png", "table1.png", "table3.png"],
    thumbnail: "prod5.png",
    colors: ["Yellow", "Oak"],
    oldPrice: 110.00,
    newPrice: 89.00,
    rating: 4.1,
    ratingCount: 55,
    isNew: true,
    description: "Brighten your room with this sunny round coffee table.",
    highlights: ["Durable finish", "Lightweight", "Minimalist look"],
    additionalInfo: {
      dimensions: "70cm x 70cm x 45cm",
      material: "Wood",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod006",
    name: "Elegant Gold Side Table",
    category: "Table",
    gallery: ["prod6.png", "table1.png", "table2.png", "table4.png"],
    thumbnail: "prod6.png",
    colors: ["Gold", "Glass"],
    oldPrice: 139.00,
    newPrice: 115.00,
    rating: 4.3,
    ratingCount: 42,
    isNew: false,
    description: "Modern gold-finished side table with glass top.",
    highlights: ["Glass surface", "Metal frame", "Contemporary look"],
    additionalInfo: {
      dimensions: "50cm x 50cm x 55cm",
      material: "Glass & Metal",
      returnPolicy: "15-day return"
    }
  },
  {
    id: "prod007",
    name: "Pet Basket Coffee Table",
    category: "Table",
    gallery: ["prod7.png", "table3.png", "table4.png", "table1.png"],
    thumbnail: "prod7.png",
    colors: ["Beige", "Natural"],
    oldPrice: 179.00,
    newPrice: 149.00,
    rating: 4.6,
    ratingCount: 60,
    isNew: true,
    description: "Multifunctional coffee table with built-in pet bed.",
    highlights: ["Pet-friendly", "Rattan body", "Removable cushion"],
    additionalInfo: {
      dimensions: "60cm x 60cm x 50cm",
      material: "Rattan & Wood",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod008",
    name: "Sculptural Dining Table",
    category: "Table",
    gallery: ["prod8.png", "table4.png", "table2.png"],
    thumbnail: "prod8.png",
    colors: ["Bronze", "Glass"],
    oldPrice: 429.00,
    newPrice: 379.00,
    rating: 4.8,
    ratingCount: 47,
    isNew: true,
    description: "Statement dining table with sculptural metal base.",
    highlights: ["Tempered glass", "Artistic frame", "Spacious top"],
    additionalInfo: {
      dimensions: "160cm x 90cm x 75cm",
      material: "Glass & Metal",
      returnPolicy: "20-day return"
    }
  },
  {
    id: "prod009",
    name: "Classic Gold Lamp",
    category: "Lamp",
    gallery: ["prod9.png", "lamp2.png", "lamp3.png"],
    thumbnail: "prod9.png",
    colors: ["Gold", "Black"],
    oldPrice: 85.00,
    newPrice: 69.00,
    rating: 4.5,
    ratingCount: 51,
    isNew: false,
    description: "Classic style lamp with golden stem and black shade.",
    highlights: ["Ambient lighting", "Gold finish", "Compact size"],
    additionalInfo: {
      dimensions: "28cm x 28cm x 50cm",
      material: "Metal & Fabric",
      returnPolicy: "15-day return"
    }
  },
  {
    id: "prod010",
    name: "Ceramic Base Lamp",
    category: "Lamp",
    gallery: ["prod10.png", "lamp1.png", "lamp3.png", "lamp2.png"],
    thumbnail: "prod10.png",
    colors: ["Aqua", "Beige"],
    oldPrice: 78.00,
    newPrice: 62.00,
    rating: 4.1,
    ratingCount: 36,
    isNew: true,
    description: "Handcrafted ceramic table lamp for cozy ambiance.",
    highlights: ["Hand-glazed base", "Soft fabric shade", "Warm tone"],
    additionalInfo: {
      dimensions: "22cm x 22cm x 40cm",
      material: "Ceramic & Linen",
      returnPolicy: "10-day return"
    }
  },
  {
    id: "prod011",
    name: "Modern Brass Lamp",
    category: "Lamp",
    gallery: ["prod11.png", "lamp3.png", "lamp2.png"],
    thumbnail: "prod11.png",
    colors: ["Brass", "White"],
    oldPrice: 95.00,
    newPrice: 82.00,
    rating: 4.4,
    ratingCount: 40,
    isNew: false,
    description: "Sleek brass lamp with cylindrical white shade.",
    highlights: ["Sleek silhouette", "Stable base", "High-quality finish"],
    additionalInfo: {
      dimensions: "24cm x 24cm x 46cm",
      material: "Brass & Cotton",
      returnPolicy: "15-day return"
    }
  },
    {
    id: "prod012",
    name: "Wood Tripod Lamp",
    category: "Lamp",
    gallery: ["prod12.png", "lamp1.png", "lamp2.png", "lamp3.png"],
    thumbnail: "prod12.png",
    colors: ["Natural", "White"],
    oldPrice: 72.00,
    newPrice: 59.00,
    rating: 4.3,
    ratingCount: 45,
    isNew: true,
    description: "A minimalist tripod lamp made from light wood, perfect for cozy spaces.",
    highlights: ["Natural wood", "Soft lighting", "Stable tripod base"],
    additionalInfo: {
      dimensions: "30cm x 30cm x 60cm",
      material: "Wood & Fabric",
      returnPolicy: "15-day return"
    }
  },
  {
    id: "prod013",
    name: "Luxe Swivel Accent Chair",
    category: "Chair",
    gallery: ["prod13.png", "chair1.png", "chair3.png", "prod4.png"],
    thumbnail: "prod13.png",
    colors: ["Beige", "Grey"],
    oldPrice: 199.00,
    newPrice: 169.00,
    rating: 4.5,
    ratingCount: 78,
    isNew: false,
    description: "Comfortable and stylish swivel chair with a plush seat and modern design.",
    highlights: ["360-degree swivel", "Plush seating", "Accent design"],
    additionalInfo: {
      dimensions: "80cm x 75cm x 90cm",
      material: "Fabric & Metal",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod014",
    name: "Olive Green Lounge Chair",
    category: "Chair",
    gallery: ["prod14.png", "chair2.png", "chair4.png", "prod1.png"],
    thumbnail: "prod14.png",
    colors: ["Green", "Olive"],
    oldPrice: 145.00,
    newPrice: 119.00,
    rating: 4.2,
    ratingCount: 66,
    isNew: true,
    description: "Mid-century inspired lounge chair with curved back and wooden legs.",
    highlights: ["Sleek silhouette", "Padded seating", "Timeless look"],
    additionalInfo: {
      dimensions: "75cm x 70cm x 85cm",
      material: "Fabric & Wood",
      returnPolicy: "20-day return"
    }
  },
  {
    id: "prod015",
    name: "Cloud Gray Swivel Chair",
    category: "Chair",
    gallery: ["prod15.png", "chair4.png", "prod4.png", "prod13.png"],
    thumbnail: "prod15.png",
    colors: ["Gray", "Light Gray"],
    oldPrice: 159.00,
    newPrice: 135.00,
    rating: 4.6,
    ratingCount: 54,
    isNew: false,
    description: "Soft and supportive swivel chair with a cloud-like design.",
    highlights: ["Swivel function", "Soft backrest", "Compact form"],
    additionalInfo: {
      dimensions: "82cm x 76cm x 85cm",
      material: "Fabric & Foam",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod016",
    name: "Blush Shell Armchair",
    category: "Chair",
    gallery: ["prod16.png", "chair1.png", "chair3.png", "prod14.png"],
    thumbnail: "prod16.png",
    colors: ["Pink", "Gold"],
    oldPrice: 139.00,
    newPrice: 118.00,
    rating: 4.4,
    ratingCount: 59,
    isNew: true,
    description: "Chic armchair with shell-shaped back and soft blush upholstery.",
    highlights: ["Gold legs", "Compact luxury", "Comfort foam"],
    additionalInfo: {
      dimensions: "73cm x 70cm x 78cm",
      material: "Velvet & Metal",
      returnPolicy: "15-day return"
    }
  },
  {
    id: "prod017",
    name: "Pink Velvet Vanity Chair",
    category: "Chair",
    gallery: ["prod17.png", "chair1.png", "prod16.png", "prod13.png"],
    thumbnail: "prod17.png",
    colors: ["Blush", "Rose"],
    oldPrice: 129.00,
    newPrice: 99.00,
    rating: 4.3,
    ratingCount: 48,
    isNew: false,
    description: "Stylish velvet chair perfect for vanity or reading nook.",
    highlights: ["Elegant shape", "Velvet finish", "Compact design"],
    additionalInfo: {
      dimensions: "65cm x 60cm x 80cm",
      material: "Velvet & Wood",
      returnPolicy: "20-day return"
    }
  },
  {
    id: "prod018",
    name: "Charcoal Arm Accent Chair",
    category: "Chair",
    gallery: ["prod18.png", "chair2.png", "prod3.png", "prod1.png"],
    thumbnail: "prod18.png",
    colors: ["Dark Gray", "Black"],
    oldPrice: 159.00,
    newPrice: 132.00,
    rating: 4.4,
    ratingCount: 67,
    isNew: true,
    description: "Deep-toned chair with sturdy wooden frame and padded armrests.",
    highlights: ["Padded arms", "Durable base", "Elegant design"],
    additionalInfo: {
      dimensions: "85cm x 70cm x 88cm",
      material: "Polyester & Wood",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod019",
    name: "Mid-century Molded Chair",
    category: "Chair",
    gallery: ["prod19.png", "chair3.png", "prod18.png", "prod2.png"],
    thumbnail: "prod19.png",
    colors: ["Black", "Natural"],
    oldPrice: 89.00,
    newPrice: 75.00,
    rating: 4.1,
    ratingCount: 55,
    isNew: false,
    description: "Iconic molded chair with a durable shell and wooden legs.",
    highlights: ["Classic mid-century design", "Stable frame", "Smooth seat"],
    additionalInfo: {
      dimensions: "60cm x 60cm x 80cm",
      material: "Plastic & Wood",
      returnPolicy: "10-day return"
    }
  },
  {
    id: "prod020",
    name: "Wooden Frame Queen Bed",
    category: "Bed",
    gallery: ["prod20.png", "bed1.png", "bed2.png", "bed3.png"],
    thumbnail: "prod20.png",
    colors: ["Walnut", "Brown"],
    oldPrice: 749.00,
    newPrice: 679.00,
    rating: 4.8,
    ratingCount: 90,
    isNew: true,
    description: "Premium wooden frame bed designed for comfort and durability.",
    highlights: ["Solid wood frame", "Modern aesthetic", "Spacious size"],
    additionalInfo: {
      dimensions: "200cm x 160cm x 95cm",
      material: "Solid Wood",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod021",
    name: "Minimalist King Bed Frame",
    category: "Bed",
    gallery: ["prod21.png", "bed2.png", "bed3.png", "prod20.png"],
    thumbnail: "prod21.png",
    colors: ["Oak", "White"],
    oldPrice: 789.00,
    newPrice: 715.00,
    rating: 4.7,
    ratingCount: 72,
    isNew: false,
    description: "Sleek and minimal king-sized bed with a low profile.",
    highlights: ["Modern silhouette", "Durable structure", "Easy to assemble"],
    additionalInfo: {
      dimensions: "210cm x 180cm x 90cm",
      material: "Wood & MDF",
      returnPolicy: "30-day return"
    }
  },
  {
    id: "prod022",
    name: "White Comfort Bed Frame",
    category: "Bed",
    gallery: ["prod22.png", "bed1.png", "bed2.png", "prod20.png"],
    thumbnail: "prod22.png",
    colors: ["White", "Ivory"],
    oldPrice: 699.00,
    newPrice: 649.00,
    rating: 4.5,
    ratingCount: 68,
    isNew: true,
    description: "Chic white bed frame with soft edges and contemporary feel.",
    highlights: ["Clean design", "Spacious fit", "Smooth finish"],
    additionalInfo: {
      dimensions: "200cm x 160cm x 90cm",
      material: "Engineered Wood",
      returnPolicy: "30-day return"
    }
  }
];

export default products;

