import header_img from "./header.avif";
import burger from "./burger.jpg";
import pizza from "./pizza.jpg";
import chickenBiryani from "./chickenBiryani.jpg";
import chickencurry from "./chickencurry.jpg";
import dosa from "./dosa.jpg";
import idli from "./idli.jpg";
import muttoncurry from "./muttoncurry.jpg";
import naan from "./naan.jpg";
import tacos from "./tacos.jpg";
import vegRice from "./vegRice.webp";

export const assets = {
  header_img,
};

export const recipes = [
  {
    id: 1,
    name: "Burger",
    image: burger,
    description: "A delicious burger with lettuce, tomato, and cheese.",
    ingredients: ["Burger bun", "Lettuce", "Tomato", "Cheese", "Beef patty"],
    substitutions: {
      "Beef patty": ["Veggie patty", "Chicken patty"],
      Cheese: ["Vegan cheese", "Low-fat cheese"],
      "Burger bun": ["Lettuce wrap", "Gluten-free bun"],
    },
    instructions:
      "Grill the patty, assemble the burger with all ingredients, and serve hot.",
    time: "30 minutes",
    servings: 2,
    category: "Fast_Food",
    cuisine: "American",
    rating: 4.5,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Pizza",
    image: pizza,
    description: "Classic cheesy pizza with a variety of toppings.",
    ingredients: [
      "Pizza base",
      "Tomato sauce",
      "Mozzarella",
      "Olives",
      "Pepperoni",
    ],
    substitutions: {
      Mozzarella: ["Vegan cheese", "Goat cheese"],
      Pepperoni: ["Mushroom", "Vegan pepperoni"],
      "Pizza base": ["Cauliflower crust", "Whole wheat base"],
    },
    instructions:
      "Spread sauce on base, add toppings, bake at 220°C for 15 minutes.",
    time: "25 minutes",
    servings: 4,
    category: "Fast_Food",
    cuisine: "Italian",
    rating: 4.8,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Chicken Biryani",
    image: chickenBiryani,
    description: "Fragrant rice with spicy marinated chicken.",
    ingredients: ["Chicken", "Basmati rice", "Yogurt", "Spices", "Onions"],
    substitutions: {
      Chicken: ["Paneer", "Tofu"],
      Yogurt: ["Coconut yogurt", "Almond yogurt"],
    },
    instructions: "Marinate chicken, cook rice, layer and cook on low flame.",
    time: "60 minutes",
    servings: 4,
    category: "Non_Veg",
    cuisine: "Indian",
    rating: 4.9,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Chicken Curry",
    image: chickencurry,
    description: "Spicy and rich chicken curry with aromatic spices.",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Spices"],
    substitutions: {
      Chicken: ["Soy chunks", "Chickpeas"],
      Tomatoes: ["Tomato paste", "Pumpkin puree"],
    },
    instructions: "Cook onions, add chicken and spices, simmer until done.",
    time: "45 minutes",
    servings: 3,
    category: "Non_Veg",
    cuisine: "Indian",
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Dosa",
    image: dosa,
    description: "Crispy South Indian pancake made from fermented batter.",
    ingredients: ["Rice", "Urad dal", "Salt", "Oil"],
    substitutions: {
      Rice: ["Quinoa", "Millets"],
      Oil: ["Ghee", "Coconut oil"],
    },
    instructions:
      "Ferment batter overnight, spread on hot pan, and roast until crispy.",
    time: "20 minutes (after batter is ready)",
    servings: 2,
    category: "Veg",
    cuisine: "Indian",
    rating: 4.4,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Idli",
    image: idli,
    description: "Soft steamed rice cakes perfect for breakfast.",
    ingredients: ["Rice", "Urad dal", "Salt", "Water"],
    substitutions: {
      Rice: ["Brown rice", "Foxtail millet"],
      "Urad dal": ["Moong dal"],
    },
    instructions:
      "Steam the fermented batter in an idli steamer for 10–15 minutes.",
    time: "15 minutes (after batter is ready)",
    servings: 3,
    category: "Veg",
    cuisine: "Indian",
    rating: 4.3,
    isFavorite: false,
  },
  {
    id: 7,
    name: "Mutton Curry",
    image: muttoncurry,
    description: "Rich and spicy curry made with tender mutton pieces.",
    ingredients: ["Mutton", "Yogurt", "Onions", "Garlic", "Spices"],
    substitutions: {
      Mutton: ["Jackfruit", "Mushrooms"],
      Yogurt: ["Coconut yogurt", "Cashew cream"],
    },
    instructions: "Marinate mutton, cook with onions and spices till soft.",
    time: "80 minutes",
    servings: 4,
    category: "Non_Veg",
    cuisine: "Indian",
    rating: 4.7,
    isFavorite: false,
  },
  {
    id: 8,
    name: "Naan",
    image: naan,
    description: "Soft and fluffy Indian flatbread.",
    ingredients: ["All-purpose flour", "Yeast", "Yogurt", "Salt", "Butter"],
    substitutions: {
      "All-purpose flour": ["Whole wheat flour", "Gluten-free flour"],
      Butter: ["Olive oil", "Vegan butter"],
    },
    instructions:
      "Prepare dough, let it rise, roll and cook on tandoor or pan.",
    time: "60 minutes(including resting)",
    servings: 4,
    category: "Veg",
    cuisine: "Indian",
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: 9,
    name: "Tacos",
    image: tacos,
    description: "Crunchy Mexican tortillas filled with meat and veggies.",
    ingredients: ["Tortillas", "Beef or chicken", "Lettuce", "Cheese", "Salsa"],
    substitutions: {
      "Beef or chicken": ["Beans", "Grilled tofu"],
      Cheese: ["Vegan cheese", "Avocado"],
    },
    instructions: "Cook meat, fill tortillas with all ingredients, and serve.",
    time: "20 minutes",
    servings: 3,
    category: "Fast_Food",
    cuisine: "Mexican",
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 10,
    name: "Veg Rice",
    image: vegRice,
    description: "Mixed vegetable fried rice with spices and herbs.",
    ingredients: [
      "Cooked rice",
      "Mixed vegetables",
      "Soy sauce",
      "Garlic",
      "Spices",
    ],
    substitutions: {
      "Soy sauce": ["Tamari", "Coconut aminos"],
      "Cooked rice": ["Quinoa", "Cauliflower rice"],
    },
    instructions: "Stir-fry vegetables, add rice and sauce, cook well.",
    time: "25 minutes",
    servings: 2,
    category: "Veg",
    cuisine: "Indo-Chinese",
    rating: 4.5,
    isFavorite: false,
  },
];
