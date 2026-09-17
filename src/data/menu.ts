import type { MenuItem } from '../types';

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'chicken', name: 'Chickenjoy', icon: '🍗' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'spaghetti', name: 'Spaghetti', icon: '🍝' },
  { id: 'palabok', name: 'Palabok', icon: '🍜' },
  { id: 'rice-bowls', name: 'Rice Bowls', icon: '🍚' },
  { id: 'desserts', name: 'Desserts', icon: '🥧' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  // Chickenjoy
  {
    id: 'cj-1pc',
    name: '1pc Chickenjoy with Rice',
    description: 'Crispylicious, juicylicious! 1 piece of our world-famous fried chicken with steamed rice.',
    price: 119,
    emoji: '🍗',
    category: 'chicken',
    popular: true,
  },
  {
    id: 'cj-2pc',
    name: '2pc Chickenjoy with Rice',
    description: 'Double the joy! 2 pieces of crispy fried chicken with steamed rice.',
    price: 199,
    emoji: '🍗🍗',
    category: 'chicken',
    popular: true,
  },
  {
    id: 'cj-6pc',
    name: '6pc Chickenjoy Bucket',
    description: 'Perfect for the family! 6 pieces of our signature fried chicken.',
    price: 529,
    emoji: '🪣',
    category: 'chicken',
  },
  {
    id: 'cj-sandwich',
    name: 'Chickenjoy Sandwich',
    description: 'Crispy chicken fillet with mayo and lettuce on a toasted bun.',
    price: 99,
    emoji: '🥪',
    category: 'chicken',
  },

  // Burgers
  {
    id: 'yumburger',
    name: 'Yumburger',
    description: 'The classic Jollibee burger with our signature dressing.',
    price: 45,
    emoji: '🍔',
    category: 'burgers',
  },
  {
    id: 'cheesyburger',
    name: 'Cheesy Yumburger',
    description: 'Yumburger with melted cheese for extra yum!',
    price: 60,
    emoji: '🧀',
    category: 'burgers',
    popular: true,
  },
  {
    id: 'big-yum',
    name: 'Big Yum',
    description: 'Bigger patty, bigger flavor with lettuce and special sauce.',
    price: 89,
    emoji: '🍔',
    category: 'burgers',
  },
  {
    id: 'alo-ha',
    name: 'Aloha Burger',
    description: 'Beef patty with pineapple, bacon, and cheese.',
    price: 129,
    emoji: '🍍',
    category: 'burgers',
  },

  // Spaghetti
  {
    id: 'jsp-reg',
    name: 'Jolly Spaghetti Regular',
    description: 'Sweet-style spaghetti with chunky hotdog, ground meat, and cheese.',
    price: 75,
    emoji: '🍝',
    category: 'spaghetti',
    popular: true,
  },
  {
    id: 'jsp-fam',
    name: 'Jolly Spaghetti Family Pan',
    description: 'Good for 3-4 pax! Sweet spaghetti loaded with hotdogs and cheese.',
    price: 239,
    emoji: '🍝',
    category: 'spaghetti',
  },

  // Palabok
  {
    id: 'pf-reg',
    name: 'Palabok Fiesta Regular',
    description: 'Noodles in savory shrimp sauce topped with chicharon, egg, and shrimp.',
    price: 89,
    emoji: '🍜',
    category: 'palabok',
    popular: true,
  },
  {
    id: 'pf-fam',
    name: 'Palabok Fiesta Family Pan',
    description: 'Family-sized Palabok perfect for sharing.',
    price: 259,
    emoji: '🍜',
    category: 'palabok',
  },

  // Rice Bowls
  {
    id: 'burger-steak',
    name: 'Burger Steak 1pc',
    description: 'Juicy beef patties smothered in mushroom gravy with rice.',
    price: 99,
    emoji: '🥩',
    category: 'rice-bowls',
    popular: true,
  },
  {
    id: 'burger-steak-2',
    name: 'Burger Steak 2pc',
    description: 'Two burger steaks with mushroom gravy and rice.',
    price: 139,
    emoji: '🥩🥩',
    category: 'rice-bowls',
  },
  {
    id: 'supermeal',
    name: 'Super Meal',
    description: '1pc Chickenjoy, Burger Steak, Jolly Spaghetti, and drink.',
    price: 279,
    emoji: '🎁',
    category: 'rice-bowls',
  },

  // Desserts
  {
    id: 'mango-pie',
    name: 'Peach Mango Pie',
    description: 'Flaky crust filled with sweet peach and mango.',
    price: 45,
    emoji: '🥧',
    category: 'desserts',
    popular: true,
  },
  {
    id: 'sundae-choco',
    name: 'Chocolate Sundae Twirl',
    description: 'Creamy soft serve with rich chocolate syrup.',
    price: 35,
    emoji: '🍦',
    category: 'desserts',
  },
  {
    id: 'sundae-caramel',
    name: 'Caramel Sundae',
    description: 'Vanilla soft serve drizzled with caramel.',
    price: 35,
    emoji: '🍨',
    category: 'desserts',
  },
  {
    id: 'buko-pie',
    name: 'Buko Pie',
    description: 'Tender young coconut in a buttery crust.',
    price: 45,
    emoji: '🥥',
    category: 'desserts',
  },

  // Drinks
  {
    id: 'coke-reg',
    name: 'Coca-Cola Regular',
    description: 'Refreshing ice-cold Coca-Cola.',
    price: 45,
    emoji: '🥤',
    category: 'drinks',
  },
  {
    id: 'coke-large',
    name: 'Coca-Cola Large',
    description: 'Large ice-cold Coca-Cola for extra refreshment.',
    price: 65,
    emoji: '🥤',
    category: 'drinks',
  },
  {
    id: 'pineapple-juice',
    name: 'Pineapple Juice',
    description: 'Sweet and tangy pineapple juice.',
    price: 55,
    emoji: '🧃',
    category: 'drinks',
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Cool and refreshing iced tea.',
    price: 45,
    emoji: '🧋',
    category: 'drinks',
  },
];
