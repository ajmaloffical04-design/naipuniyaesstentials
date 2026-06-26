const products = [
  {
    id: 1,
    slug: "coconut-oil",
    name: "First Crush Coconut Oil",
    category: "Cooking Oils",
    priceRange: "₹85 – ₹310",
    price: 85,
    image: "/products/coconutoil.png",
    rating: 4.8,
    reviews: 1257,
    description:
      "100% pure coconut oil for cooking, skin-care & haircare. Cold-pressed to retain maximum nutrients.",
    longDescription:
      "Our coconut oil is cold pressed, chemical free, and made using traditional methods to retain maximum natural goodness.",
    benefits: ["100% Natural", "Cold Pressed", "Cruelty Free"],
    sizes: [
      "100ml – ₹85",
      "500ml – ₹165",
      "1 Litre – ₹310"
    ],
    sizeOptions: [
      { size: "1 Litre", price: 310, originalPrice: 365, perUnit: "₹0.31/ml", popular: true },
      { size: "500 ml", price: 165, originalPrice: 195, perUnit: "₹0.33/ml", popular: false },
      { size: "100 ml", price: 85, originalPrice: 90, perUnit: "₹0.85/ml", popular: false }
    ],
    productDetails: [
      { label: "Ingredients", value: "100% Natural Coconut Oil" },
      { label: "Extraction Method", value: "Cold Pressed" },
      { label: "Shelf Life", value: "18 Months" },
      { label: "Storage", value: "Store in a cool, dry place away from sunlight" },
      { label: "Usage", value: "For cooking, skin care & hair care" }
    ],
    faqs: [
      {
        question: "Is this coconut oil suitable for cooking?",
        answer: "Yes, our coconut oil is 100% pure and edible. It is perfect for cooking, frying, baking and adds a natural flavour to your food."
      },
      {
        question: "Is this oil refined or unrefined?",
        answer: "Our oil is unrefined and cold-pressed to ensure it retains all its natural nutrients, aroma, and flavor."
      },
      {
        question: "Can I use this oil for hair and skin?",
        answer: "Absolutely! It acts as an excellent natural moisturizer for the skin and a deep conditioner for hair."
      },
      {
        question: "How should I store coconut oil?",
        answer: "Keep it in a cool, dry place away from direct sunlight. There is no need to refrigerate it."
      },
      {
        question: "Does coconut oil solidify in winter?",
        answer: "Yes, 100% pure coconut oil naturally solidifies in cooler temperatures. You can gently warm the bottle in warm water to liquefy it."
      }
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "deepam-oil",
    name: "Deepam Oil",
    category: "Lamp Oils",
    priceRange: "₹45 – ₹155",
    price: 45,
    image: "/products/deepamoil.png",
    rating: 4.9,
    reviews: 843,
    description:
      "Pure and fragrant oil for rituals and daily use. Keeps the flame steady and burns cleanly.",
    longDescription:
      "Naipunya Deepam Oil is specially formulated for oil lamps and spiritual rituals. It burns with a clear, steady flame without producing soot, keeping your space sacred and serene.",
    benefits: ["Pure & Fragrant", "Long Lasting Flame", "No Soot"],
    sizes: [
      "100ml – ₹45",
      "500ml – ₹85",
      "1 Litre – ₹155"
    ],
    sizeOptions: [
      { size: "1 Litre", price: 155, originalPrice: 178, perUnit: "₹0.15/ml", popular: true },
      { size: "500 ml", price: 85, originalPrice: 98, perUnit: "₹0.17/ml", popular: false },
      { size: "100 ml", price: 45, originalPrice: 52, perUnit: "₹0.45/ml", popular: false }
    ],
    productDetails: [
      { label: "Ingredients", value: "Premium Blended Lamp Oil" },
      { label: "Usage", value: "Strictly for lighting lamps. Not for consumption." },
      { label: "Shelf Life", value: "24 Months" },
      { label: "Storage", value: "Store securely away from open flames and children." }
    ],
    faqs: [
      {
        question: "Is this oil safe for daily use indoors?",
        answer: "Yes, it is specially formulated to burn cleanly with minimal smoke, making it perfect for daily indoor pooja and rituals."
      },
      {
        question: "Does it produce soot?",
        answer: "When used with a clean cotton wick, it produces a bright, steady flame with virtually no soot."
      }
    ],
    featured: true,
  }
];

export default products;
