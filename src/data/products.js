const products = [
  {
    id: 1,
    slug: "first-crush-coconut-oil",
    name: "First Crush Coconut Oil",
    category: "Cooking Oils",
    priceRange: "₹85 – ₹310",
    price: 85,
    image: "/products/coconutoil.png",
    description:
      "100% pure coconut oil for cooking, skin-care & haircare. Cold-pressed to retain maximum nutrients.",
    longDescription:
      "Naipunya First Crush Coconut Oil is extracted using traditional cold-press methods that retain all the natural goodness of fresh coconuts. Rich in medium-chain fatty acids, it is perfect for cooking, deep conditioning hair, and nourishing skin.",
    benefits: ["100% Natural", "Cold Pressed", "No Chemicals", "Multi-purpose"],
    sizes: [
      "250ml – ₹85 (MRP ₹90)",
      "500ml – ₹165 (MRP ₹195)",
      "1 Litre – ₹310 (MRP ₹365)"
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
    description:
      "Pure and fragrant oil for rituals and daily use. Keeps the flame steady and burns cleanly.",
    longDescription:
      "Naipunya Deepam Oil is specially formulated for oil lamps and spiritual rituals. It burns with a clear, steady flame without producing soot, keeping your space sacred and serene.",
    benefits: ["Pure & Fragrant", "Long Lasting Flame", "No Soot", "Ritual Grade"],
    sizes: [
      "250ml – ₹45 (MRP ₹52)",
      "500ml – ₹85 (MRP ₹98)",
      "1 Litre – ₹155 (MRP ₹178)"
    ],
    featured: true,
  }
];

export default products;
