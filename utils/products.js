const Products = [
  {
    src: "/foodimages/abacha.jpeg",
    title: "Abacha (Cassava)",
    price: "2,500 - 3,000",
    category: "local foods",
    description:
      "Authentic African salad made from premium dried cassava flakes. A traditional delicacy best enjoyed with palm oil, ugba, and garden eggs.",
  },
  {
    src: "/foodimages/akidi.jpeg",
    title: "Black Akidi Beans - 1 Paint",
    price: "4,500",
    category: "grains & legumes",
    description:
      "Nutritious local black beans, carefully dried and stone-free. A high-protein staple perfect for traditional vegetable stews and native rice.",
  },
  {
    src: "/foodimages/akpaka.jpeg",
    title: "Oil Bean Seed (Akpaka) - 1 Cup",
    price: "600",
    category: "local foods",
    description:
      "Fermented and finely shredded oil bean seeds. Adds a unique, pungent umami flavor to Abacha, African salad, and native soups.",
  },
  {
    src: "/foodimages/azamu-beans.jpeg",
    title: "Premium Azamu Beans - 1 Paint",
    price: "5,000",
    category: "grains & legumes",
    description:
      "High-quality Azamu beans that cook quickly and taste delicious. Ideal for making creamy bean porridge, fluffy Akara, or Moi-Moi.",
  },
  {
    src: "/foodimages/black-beans.jpeg",
    title: "Nutritious Black Beans - 1 Paint",
    price: "6,000",
    category: "grains & legumes",
    description:
      "Fiber-rich black beans sourced from the best farms. These beans offer a distinct earthy flavor and are packed with essential antioxidants.",
  },
  {
    src: "/foodimages/brown-beans.jpeg",
    title: "Brown Beans - 1 Paint",
    price: "4,000",
    category: "grains & legumes",
    description:
      "Clean, sweet-tasting brown beans. Hand-picked to ensure they are stone-free and ready for your favorite Nigerian bean dishes.",
  },
  {
    src: "/foodimages/dry-bread-fruit.jpeg",
    title: "Breadfruit (Ukwa) - 1 Milk Cup",
    price: "500",
    category: "local foods",
    description:
      "Premium dried Ukwa (Breadfruit). A highly sought-after delicacy known for its rich nutritional profile and creamy texture when cooked.",
  },
  {
    src: "/foodimages/dry-okra.jpeg",
    title: "Sliced Dry Okra - 1 Paint",
    price: "6,000",
    category: "vegetables",
    description:
      "Traditionally sun-dried okra slices. Perfect for making 'Orunla' or crunchy okra soup, preserving the vegetable's nutrients and draw.",
  },
  {
    src: "/foodimages/dry-pepper.jpeg",
    title: "Ground Dry Pepper - 1 Milk Cup",
    price: "500",
    category: "spices & condiments",
    description:
      "Intensely spicy and aromatic dried red peppers. A kitchen essential for adding heat and depth to your stews, soups, and marinades.",
  },
  {
    src: "/foodimages/egusi.jpeg",
    title: "Hand-Peeled Egusi - 1 Milk Cup",
    price: "400",
    category: "spices & condiments",
    description:
      "Oil-rich melon seeds, expertly peeled and dried. The perfect thickener for traditional Egusi soup, offering a rich and nutty taste.",
  },
  {
    src: "/foodimages/brown-fio-fio.jpeg",
    title: "Brown Fio Fio (Pigeon Peas) - 1 Paint",
    price: "4,500",
    category: "grains & legumes",
    description:
      "Hearty brown pigeon peas, a staple in Eastern Nigeria. High in protein and perfect for the classic Fio-Fio and Achicha dish.",
  },
  {
    src: "/foodimages/fresh-tomatoes.jpeg",
    title: "Farm-Fresh Tomatoes - 1/2 Paint",
    price: "2,500",
    category: "vegetables",
    description:
      "Bright red, firm, and juicy tomatoes. Freshly harvested to provide the best base for your Jollof rice, stews, and fresh salads.",
  },
  {
    src: "/foodimages/garden-egg.jpeg",
    title: "Garden Eggs - 1/2 Paint",
    price: "1,000",
    category: "vegetables",
    description:
      "Fresh and crunchy garden eggs. A healthy snack often served with peanut paste or used in preparing delicious garden egg sauces.",
  },
  {
    src: "/foodimages/garri-white-paint.jpeg",
    title: "White Garri - 1 Paint",
    price: "1,200",
    category: "local foods",
    description:
      "Extra dry and crunchy white garri. Whether you are making smooth Eba or drinking it as a snack, this garri offers the perfect texture.",
  },
  {
    src: "/foodimages/garri-yellow-half-paint.jpeg",
    title: "Yellow Garri - 1/2 Paint",
    price: "900",
    category: "local foods",
    description:
      "Fried with high-quality palm oil, this yellow garri is rich in nutrients and has that classic savory taste preferred for heavy meals.",
  },
  {
    src: "/foodimages/honey.jpeg",
    title: "Raw Unfiltered Honey - 50cl Bottle",
    price: "4,000",
    category: "spices & condiments",
    description:
      "Pure, undiluted honey straight from the farm. A natural sweetener and immunity booster with no added sugar or preservatives.",
  },
  {
    src: "/foodimages/joro.jpeg",
    title: "Pearl Millet (Joro) - 1 Paint",
    price: "3,500",
    category: "grains",
    description:
      "A nutrient-dense, gluten-free ancient grain. Perfect for making traditional pap (Ogi/Kunu), Fura, or healthy swallows like Tuwo. Rich in fiber and iron.",
  },

  {
    src: "/foodimages/locust-beans.jpeg",
    title: "Locust Beans (Iru) - 1 Paint",
    price: "12,000",
    category: "spices & condiments",
    description:
      "High-grade fermented locust beans. An essential traditional spice that provides an unmistakable savory depth to local soups.",
  },
  {
    src: "/foodimages/ogiri.jpeg",
    title: "Traditional Ogiri - 1 Paint",
    price: "200",
    category: "spices & condiments",
    description:
      "A potent, fermented castor seed condiment. This is the secret ingredient for authentic Ofe Onugbu and other traditional soups.",
  },
  {
    src: "/foodimages/sweet-potatoes.jpeg",
    title: "Fresh Sweet Potatoes - 1 Paint",
    price: "200",
    category: "vegetables",
    description:
      "Naturally sweet and fiber-filled sweet potatoes. Perfect for boiling, frying, or roasting as a healthy carbohydrate source.",
  },
  {
    src: "/foodimages/white-fio-fio.jpeg",
    title: "White Fio Fio (Pigeon Peas) - 1 Paint",
    price: "4,500",
    category: "grains & legumes",
    description:
      "Clean and premium white pigeon peas. These are highly nutritious and serve as an excellent plant-based protein for various meals.",
  },
];

export default Products;
