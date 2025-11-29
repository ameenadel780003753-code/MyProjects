import { drizzle } from "drizzle-orm/mysql2";
import { categories, products } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

const categoriesData = [
  { nameEn: "Luxury Watches", nameAr: "ساعات فاخرة", slug: "luxury" },
  { nameEn: "Sport Watches", nameAr: "ساعات رياضية", slug: "sport" },
  { nameEn: "Classic Watches", nameAr: "ساعات كلاسيكية", slug: "classic" },
  { nameEn: "Chronograph", nameAr: "كرونوغراف", slug: "chronograph" },
];

const productsData = [
  {
    nameEn: "Rolex Submariner",
    nameAr: "رولكس سبمارينر",
    brand: "Rolex",
    descriptionEn: "The Rolex Submariner is a legendary dive watch featuring a black dial with luminous markers, rotating bezel, and stainless steel bracelet. Water-resistant to 300 meters, it combines elegance with exceptional performance.",
    descriptionAr: "رولكس سبمارينر هي ساعة غوص أسطورية تتميز بقرص أسود مع علامات مضيئة وإطار دوار وسوار من الفولاذ المقاوم للصدأ. مقاومة للماء حتى 300 متر، تجمع بين الأناقة والأداء الاستثنائي.",
    price: 35000,
    imageUrl: "/images/product_rolex_submariner.png",
    categoryId: 1,
    featured: true,
  },
  {
    nameEn: "Omega Seamaster",
    nameAr: "أوميغا سيماستر",
    brand: "Omega",
    descriptionEn: "The Omega Seamaster features a stunning blue wave-pattern dial, stainless steel case and bracelet, with date window. A perfect blend of style and functionality for the modern gentleman.",
    descriptionAr: "أوميغا سيماستر تتميز بقرص أزرق رائع بنمط الموج، علبة وسوار من الفولاذ المقاوم للصدأ، مع نافذة التاريخ. مزيج مثالي من الأناقة والوظائف للرجل العصري.",
    price: 28000,
    imageUrl: "/images/product_omega_seamaster.png",
    categoryId: 1,
    featured: true,
  },
  {
    nameEn: "Patek Philippe Calatrava",
    nameAr: "باتيك فيليب كالاترافا",
    brand: "Patek Philippe",
    descriptionEn: "An elegant dress watch with white dial and blue hands, leather strap, and rose gold case. The Calatrava represents timeless sophistication and exceptional Swiss craftsmanship.",
    descriptionAr: "ساعة أنيقة بقرص أبيض وعقارب زرقاء، سوار جلدي، وعلبة من الذهب الوردي. كالاترافا تمثل الأناقة الخالدة والحرفية السويسرية الاستثنائية.",
    price: 95000,
    imageUrl: "/images/product_patek_philippe.png",
    categoryId: 3,
    featured: true,
  },
  {
    nameEn: "TAG Heuer Carrera Chronograph",
    nameAr: "تاغ هوير كاريرا كرونوغراف",
    brand: "TAG Heuer",
    descriptionEn: "Black dial with three sub-dials, tachymeter bezel, and steel bracelet. The Carrera Chronograph is designed for racing enthusiasts who demand precision and style.",
    descriptionAr: "قرص أسود مع ثلاثة أقراص فرعية، إطار تاكيميتر، وسوار فولاذي. كاريرا كرونوغراف مصممة لعشاق السباقات الذين يطالبون بالدقة والأناقة.",
    price: 22000,
    imageUrl: "/images/product_tag_heuer_carrera.png",
    categoryId: 4,
    featured: false,
  },
  {
    nameEn: "Cartier Santos",
    nameAr: "كارتييه سانتوس",
    brand: "Cartier",
    descriptionEn: "Square case design with Roman numerals, blue hands, and steel bracelet with visible screws. An iconic timepiece that revolutionized watch design.",
    descriptionAr: "تصميم علبة مربعة مع أرقام رومانية، عقارب زرقاء، وسوار فولاذي مع براغي ظاهرة. قطعة أيقونية أحدثت ثورة في تصميم الساعات.",
    price: 32000,
    imageUrl: "/images/product_cartier_santos.png",
    categoryId: 3,
    featured: false,
  },
  {
    nameEn: "Hublot Big Bang",
    nameAr: "هوبلو بيغ بانغ",
    brand: "Hublot",
    descriptionEn: "Black ceramic case with skeleton dial showing the movement, rubber strap with deployment clasp. Bold and innovative design for the modern watch collector.",
    descriptionAr: "علبة سيراميك سوداء مع قرص هيكلي يظهر الحركة، سوار مطاطي مع مشبك قابل للطي. تصميم جريء ومبتكر لجامع الساعات العصري.",
    price: 48000,
    imageUrl: "/images/product_hublot_bigbang.png",
    categoryId: 1,
    featured: false,
  },
  {
    nameEn: "Breitling Navitimer",
    nameAr: "بريتلينغ نافيتايمر",
    brand: "Breitling",
    descriptionEn: "Blue dial with circular slide rule bezel, three sub-dials, and steel bracelet. The iconic aviation chronograph trusted by pilots worldwide.",
    descriptionAr: "قرص أزرق مع إطار قاعدة انزلاقية دائرية، ثلاثة أقراص فرعية، وسوار فولاذي. الكرونوغراف الطيران الأيقوني الموثوق به من قبل الطيارين في جميع أنحاء العالم.",
    price: 38000,
    imageUrl: "/images/product_breitling_navitimer.png",
    categoryId: 4,
    featured: false,
  },
  {
    nameEn: "IWC Pilot's Watch",
    nameAr: "آي دبليو سي ساعة الطيار",
    brand: "IWC",
    descriptionEn: "Black dial with large Arabic numerals, date window, and brown leather strap. Military-inspired design with exceptional readability and reliability.",
    descriptionAr: "قرص أسود مع أرقام عربية كبيرة، نافذة تاريخ، وسوار جلدي بني. تصميم مستوحى من الطراز العسكري مع قابلية قراءة وموثوقية استثنائية.",
    price: 26000,
    imageUrl: "/images/product_iwc_pilot.png",
    categoryId: 2,
    featured: false,
  },
  {
    nameEn: "Panerai Luminor",
    nameAr: "بانيراي لومينور",
    brand: "Panerai",
    descriptionEn: "Black dial with luminous markers, distinctive crown guard, and brown leather strap. Italian design meets Swiss precision in this iconic timepiece.",
    descriptionAr: "قرص أسود مع علامات مضيئة، حارس تاج مميز، وسوار جلدي بني. التصميم الإيطالي يلتقي بالدقة السويسرية في هذه القطعة الأيقونية.",
    price: 42000,
    imageUrl: "/images/product_panerai_luminor.png",
    categoryId: 1,
    featured: false,
  },
  {
    nameEn: "Audemars Piguet Royal Oak",
    nameAr: "أوديمار بيغيه رويال أوك",
    brand: "Audemars Piguet",
    descriptionEn: "Blue textured dial with octagonal bezel and visible screws, integrated steel bracelet. The watch that redefined luxury sports watches.",
    descriptionAr: "قرص أزرق محكم مع إطار ثماني الأضلاع وبراغي ظاهرة، سوار فولاذي متكامل. الساعة التي أعادت تعريف ساعات الرياضة الفاخرة.",
    price: 125000,
    imageUrl: "/images/product_audemars_piguet_royal_oak.png",
    categoryId: 1,
    featured: true,
  },
  {
    nameEn: "Seiko Prospex Diver",
    nameAr: "سيكو بروسبكس للغوص",
    brand: "Seiko",
    descriptionEn: "Black dial with orange accents, rotating bezel, and stainless steel bracelet. Professional dive watch with exceptional value and reliability.",
    descriptionAr: "قرص أسود مع لمسات برتقالية، إطار دوار، وسوار من الفولاذ المقاوم للصدأ. ساعة غوص احترافية بقيمة وموثوقية استثنائية.",
    price: 3500,
    imageUrl: "/images/product_seiko_prospex.png",
    categoryId: 2,
    featured: false,
  },
  {
    nameEn: "Citizen Eco-Drive",
    nameAr: "سيتيزن إيكو درايف",
    brand: "Citizen",
    descriptionEn: "Blue dial with date window, steel case and bracelet, solar-powered technology. Never needs a battery replacement.",
    descriptionAr: "قرص أزرق مع نافذة تاريخ، علبة وسوار فولاذي، تقنية الطاقة الشمسية. لا تحتاج أبدًا إلى استبدال البطارية.",
    price: 2800,
    imageUrl: "/images/product_citizen_eco_drive.png",
    categoryId: 3,
    featured: false,
  },
  {
    nameEn: "Casio G-Shock",
    nameAr: "كاسيو جي شوك",
    brand: "Casio",
    descriptionEn: "Black resin case with digital-analog display and red accents. Shock-resistant and water-resistant, perfect for active lifestyles.",
    descriptionAr: "علبة راتنج سوداء مع شاشة رقمية تناظرية ولمسات حمراء. مقاومة للصدمات والماء، مثالية لأنماط الحياة النشطة.",
    price: 850,
    imageUrl: "/images/product_casio_gshock.png",
    categoryId: 2,
    featured: false,
  },
  {
    nameEn: "Rolex Datejust",
    nameAr: "رولكس ديت جست",
    brand: "Rolex",
    descriptionEn: "Champagne dial with Roman numerals, fluted bezel, and two-tone steel and gold bracelet. The epitome of classic elegance.",
    descriptionAr: "قرص شامبانيا مع أرقام رومانية، إطار محزز، وسوار ثنائي اللون من الفولاذ والذهب. قمة الأناقة الكلاسيكية.",
    price: 42000,
    imageUrl: "/images/product_rolex_datejust.png",
    categoryId: 3,
    featured: false,
  },
  {
    nameEn: "Omega Speedmaster Moonwatch",
    nameAr: "أوميغا سبيدماستر مونووتش",
    brand: "Omega",
    descriptionEn: "Black dial with three sub-dials, tachymeter bezel, and steel bracelet. The first watch worn on the moon, a true legend.",
    descriptionAr: "قرص أسود مع ثلاثة أقراص فرعية، إطار تاكيميتر، وسوار فولاذي. أول ساعة ترتدى على القمر، أسطورة حقيقية.",
    price: 32000,
    imageUrl: "/images/product_omega_speedmaster.png",
    categoryId: 4,
    featured: true,
  },
];

async function seed() {
  console.log("Starting seed...");
  
  // Insert categories
  console.log("Inserting categories...");
  const insertedCategories = await db.insert(categories).values(categoriesData).$returningId();
  console.log(`Inserted ${insertedCategories.length} categories`);
  
  // Insert products
  console.log("Inserting products...");
  const insertedProducts = await db.insert(products).values(productsData).$returningId();
  console.log(`Inserted ${insertedProducts.length} products`);
  
  console.log("Seed completed successfully!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
