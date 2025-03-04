import { motion } from 'framer-motion';
import { useState } from 'react';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '4.75', description: 'Espresso with lots of steamed milk and little foam' },
    { name: 'Mocha', price: '5.00', description: 'Espresso with chocolate and steamed milk' },
    { name: 'Americano', price: '3.75', description: 'Espresso diluted with hot water' },
    { name: 'Cold Brew', price: '4.50', description: '12-hour slow-steeped coffee' }
  ],
  pastries: [
    { name: 'Croissant', price: '3.75', description: 'Buttery, flaky pastry' },
    { name: 'Chocolate Muffin', price: '3.50', description: 'Rich chocolate chip muffin' },
    { name: 'Danish', price: '4.00', description: 'Fruit-filled pastry' },
    { name: 'Cinnamon Roll', price: '4.25', description: 'Fresh-baked with cream cheese frosting' },
    { name: 'Scone', price: '3.75', description: 'Buttery pastry with dried fruits' },
    { name: 'Apple Turnover', price: '4.00', description: 'Flaky pastry filled with cinnamon apples' }
  ],
  breakfast: [
    { name: 'Avocado Toast', price: '8.50', description: 'Sourdough, smashed avocado, poached egg' },
    { name: 'Breakfast Sandwich', price: '7.50', description: 'Egg, cheese, bacon on croissant' },
    { name: 'Acai Bowl', price: '9.00', description: 'Acai blend, granola, fresh fruits' },
    { name: 'Oatmeal', price: '6.00', description: 'Steel-cut oats with honey and fruits' }
  ],
  lunch: [
    { name: 'Chicken Pesto Panini', price: '10.50', description: 'Grilled chicken with homemade pesto' },
    { name: 'Caprese Sandwich', price: '9.50', description: 'Fresh mozzarella, tomato, basil' },
    { name: 'Quinoa Bowl', price: '11.00', description: 'Mixed greens, quinoa, roasted vegetables' },
    { name: 'Caesar Salad', price: '9.00', description: 'Romaine, parmesan, house-made dressing' }
  ],
  smoothies: [
    { name: 'Berry Blast', price: '6.50', description: 'Mixed berries, yogurt, honey' },
    { name: 'Green Goddess', price: '6.50', description: 'Spinach, apple, banana, ginger' },
    { name: 'Tropical Paradise', price: '6.75', description: 'Mango, pineapple, coconut milk' },
    { name: 'Protein Power', price: '7.00', description: 'Banana, peanut butter, protein, almond milk' }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = {
    coffee: 'Coffee & Tea',
    pastries: 'Fresh Pastries',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    smoothies: 'Smoothies'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Our Menu</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-cafe-300 text-white'
                  : 'bg-cafe-100 text-cafe-500 hover:bg-cafe-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-cafe-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-medium font-serif">{item.name}</h4>
                <span className="text-cafe-400 font-medium">${item.price}</span>
              </div>
              <p className="text-cafe-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;