const foodDatabase = [
  {
    "name": "Naked Nutella",
    "price": 149,
    "restaurant": "Belgian Waffle",
    "icon": "🍽️",
    "desc": "Delicious naked nutella"
  },
  {
    "name": "Maple Butter",
    "price": 129,
    "restaurant": "Belgian Waffle",
    "icon": "🍽️",
    "desc": "Delicious maple butter"
  },
  {
    "name": "Peanut Butter",
    "price": 149,
    "restaurant": "Belgian Waffle",
    "icon": "🍽️",
    "desc": "Delicious peanut butter"
  },
  {
    "name": "Strawberry Cream",
    "price": 169,
    "restaurant": "Belgian Waffle",
    "icon": "🍽️",
    "desc": "Delicious strawberry cream"
  },
  {
    "name": "Dark Chocolate Overload",
    "price": 189,
    "restaurant": "Belgian Waffle",
    "icon": "🥤",
    "desc": "Delicious dark chocolate overload"
  },
  {
    "name": "KitKat Waffle",
    "price": 199,
    "restaurant": "Belgian Waffle",
    "icon": "🍰",
    "desc": "Delicious kitkat waffle"
  },
  {
    "name": "Triple Chocolate",
    "price": 219,
    "restaurant": "Belgian Waffle",
    "icon": "🥤",
    "desc": "Delicious triple chocolate"
  },
  {
    "name": "Red Velvet Waffle",
    "price": 229,
    "restaurant": "Belgian Waffle",
    "icon": "🍰",
    "desc": "Delicious red velvet waffle"
  },
  {
    "name": "Butterscotch Ice Cream Waffle",
    "price": 239,
    "restaurant": "Belgian Waffle",
    "icon": "🍰",
    "desc": "Delicious butterscotch ice cream waffle"
  },
  {
    "name": "Death By Chocolate Cake",
    "price": 299,
    "restaurant": "Belgian Waffle",
    "icon": "🥤",
    "desc": "Delicious death by chocolate cake"
  },
  {
    "name": "Oreo Milkshake",
    "price": 149,
    "restaurant": "Belgian Waffle",
    "icon": "🥤",
    "desc": "Delicious oreo milkshake"
  },
  {
    "name": "Chocolate Milkshake",
    "price": 149,
    "restaurant": "Belgian Waffle",
    "icon": "🥤",
    "desc": "Delicious chocolate milkshake"
  },
  {
    "name": "Cold Coffee",
    "price": 129,
    "restaurant": "Belgian Waffle",
    "icon": "☕",
    "desc": "Delicious cold coffee"
  },
  {
    "name": "Lays Classic Salted",
    "price": 25,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious lays classic salted"
  },
  {
    "name": "Blue Lays",
    "price": 25,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious blue lays"
  },
  {
    "name": "TakaTak",
    "price": 25,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious takatak"
  },
  {
    "name": "Thede Medhe",
    "price": 20,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious thede medhe"
  },
  {
    "name": "Coca Cola",
    "price": 40,
    "restaurant": "BEV Cafe",
    "icon": "🥤",
    "desc": "Delicious coca cola"
  },
  {
    "name": "Sprite",
    "price": 40,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious sprite"
  },
  {
    "name": "Maaza",
    "price": 30,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious maaza"
  },
  {
    "name": "Aloo Patty",
    "price": 49,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious aloo patty"
  },
  {
    "name": "Cheese Patty",
    "price": 69,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious cheese patty"
  },
  {
    "name": "Spicy Patty",
    "price": 55,
    "restaurant": "BEV Cafe",
    "icon": "🍽️",
    "desc": "Delicious spicy patty"
  },
  {
    "name": "Espresso",
    "price": 180,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious espresso"
  },
  {
    "name": "Cappuccino",
    "price": 220,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious cappuccino"
  },
  {
    "name": "Latte",
    "price": 230,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious latte"
  },
  {
    "name": "Flat White",
    "price": 240,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious flat white"
  },
  {
    "name": "Mocha",
    "price": 260,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious mocha"
  },
  {
    "name": "Cold Brew",
    "price": 250,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious cold brew"
  },
  {
    "name": "Iced Latte",
    "price": 250,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious iced latte"
  },
  {
    "name": "Iced Cappuccino",
    "price": 260,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious iced cappuccino"
  },
  {
    "name": "Iced Mocha",
    "price": 280,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious iced mocha"
  },
  {
    "name": "Pour Over",
    "price": 280,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious pour over"
  },
  {
    "name": "AeroPress",
    "price": 270,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious aeropress"
  },
  {
    "name": "Chemex",
    "price": 300,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious chemex"
  },
  {
    "name": "Butter Croissant",
    "price": 120,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious butter croissant"
  },
  {
    "name": "Chocolate Brownie",
    "price": 130,
    "restaurant": "Blue Tokai",
    "icon": "🥤",
    "desc": "Delicious chocolate brownie"
  },
  {
    "name": "Grilled Sandwich",
    "price": 220,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious grilled sandwich"
  },
  {
    "name": "Blueberry Muffin",
    "price": 110,
    "restaurant": "Blue Tokai",
    "icon": "🍽️",
    "desc": "Delicious blueberry muffin"
  },
  {
    "name": "Tandoori Chaap",
    "price": 129,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious tandoori chaap"
  },
  {
    "name": "Malai Chaap",
    "price": 149,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious malai chaap"
  },
  {
    "name": "Peri Peri Chaap",
    "price": 139,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious peri peri chaap"
  },
  {
    "name": "Afghani Chaap",
    "price": 159,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious afghani chaap"
  },
  {
    "name": "Butter Masala Chaap",
    "price": 169,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious butter masala chaap"
  },
  {
    "name": "Achari Chaap",
    "price": 159,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious achari chaap"
  },
  {
    "name": "Kadai Chaap",
    "price": 169,
    "restaurant": "Chaap n Grill",
    "icon": "🍽️",
    "desc": "Delicious kadai chaap"
  },
  {
    "name": "Masala Chai",
    "price": 30,
    "restaurant": "Chai Nagri",
    "icon": "☕",
    "desc": "Delicious masala chai"
  },
  {
    "name": "Adrak Chai",
    "price": 25,
    "restaurant": "Chai Nagri",
    "icon": "☕",
    "desc": "Delicious adrak chai"
  },
  {
    "name": "Elaichi Chai",
    "price": 25,
    "restaurant": "Chai Nagri",
    "icon": "☕",
    "desc": "Delicious elaichi chai"
  },
  {
    "name": "Lemon Tea",
    "price": 30,
    "restaurant": "Chai Nagri",
    "icon": "☕",
    "desc": "Delicious lemon tea"
  },
  {
    "name": "Cappuccino",
    "price": 99,
    "restaurant": "Chai Nagri",
    "icon": "🍽️",
    "desc": "Delicious cappuccino"
  },
  {
    "name": "Café Latte",
    "price": 109,
    "restaurant": "Chai Nagri",
    "icon": "🍽️",
    "desc": "Delicious café latte"
  },
  {
    "name": "Cold Coffee",
    "price": 119,
    "restaurant": "Chai Nagri",
    "icon": "☕",
    "desc": "Delicious cold coffee"
  },
  {
    "name": "Iced Latte",
    "price": 129,
    "restaurant": "Chai Nagri",
    "icon": "🍽️",
    "desc": "Delicious iced latte"
  },
  {
    "name": "Paneer Tikka Wrap",
    "price": 139,
    "restaurant": "Chai Nagri",
    "icon": "🥘",
    "desc": "Delicious paneer tikka wrap"
  },
  {
    "name": "Aloo Masala Wrap",
    "price": 99,
    "restaurant": "Chai Nagri",
    "icon": "🍽️",
    "desc": "Delicious aloo masala wrap"
  },
  {
    "name": "Mixed Veg Wrap",
    "price": 119,
    "restaurant": "Chai Nagri",
    "icon": "🍽️",
    "desc": "Delicious mixed veg wrap"
  },
  {
    "name": "Masala Chai",
    "price": 30,
    "restaurant": "Chai Vyanjan",
    "icon": "☕",
    "desc": "Delicious masala chai"
  },
  {
    "name": "Adrak Chai",
    "price": 35,
    "restaurant": "Chai Vyanjan",
    "icon": "☕",
    "desc": "Delicious adrak chai"
  },
  {
    "name": "Elaichi Chai",
    "price": 35,
    "restaurant": "Chai Vyanjan",
    "icon": "☕",
    "desc": "Delicious elaichi chai"
  },
  {
    "name": "Kulhad Chai",
    "price": 40,
    "restaurant": "Chai Vyanjan",
    "icon": "☕",
    "desc": "Delicious kulhad chai"
  },
  {
    "name": "Rusk",
    "price": 20,
    "restaurant": "Chai Vyanjan",
    "icon": "🍽️",
    "desc": "Delicious rusk"
  },
  {
    "name": "Mathri",
    "price": 25,
    "restaurant": "Chai Vyanjan",
    "icon": "🍽️",
    "desc": "Delicious mathri"
  },
  {
    "name": "Bun Maska",
    "price": 40,
    "restaurant": "Chai Vyanjan",
    "icon": "🍽️",
    "desc": "Delicious bun maska"
  },
  {
    "name": "Maggi",
    "price": 50,
    "restaurant": "Chai Vyanjan",
    "icon": "🍽️",
    "desc": "Delicious maggi"
  },
  {
    "name": "Espresso",
    "price": 99,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious espresso"
  },
  {
    "name": "Cappuccino",
    "price": 149,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious cappuccino"
  },
  {
    "name": "Café Latte",
    "price": 159,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious café latte"
  },
  {
    "name": "Americano",
    "price": 129,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious americano"
  },
  {
    "name": "Cold Brew",
    "price": 179,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious cold brew"
  },
  {
    "name": "Iced Latte",
    "price": 169,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious iced latte"
  },
  {
    "name": "Mocha Frappe",
    "price": 199,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious mocha frappe"
  },
  {
    "name": "Dalgona Coffee",
    "price": 189,
    "restaurant": "First Coffee",
    "icon": "☕",
    "desc": "Delicious dalgona coffee"
  },
  {
    "name": "Butter Croissant",
    "price": 89,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious butter croissant"
  },
  {
    "name": "Club Sandwich",
    "price": 149,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious club sandwich"
  },
  {
    "name": "Choco Brownie",
    "price": 129,
    "restaurant": "First Coffee",
    "icon": "🍽️",
    "desc": "Delicious choco brownie"
  },
  {
    "name": "Golgappe",
    "price": 50,
    "restaurant": "Golzza",
    "icon": "🍽️",
    "desc": "Delicious golgappe"
  },
  {
    "name": "Papdi Chaat",
    "price": 80,
    "restaurant": "Golzza",
    "icon": "🍽️",
    "desc": "Delicious papdi chaat"
  },
  {
    "name": "Dahi Bhalla",
    "price": 90,
    "restaurant": "Golzza",
    "icon": "🍽️",
    "desc": "Delicious dahi bhalla"
  },
  {
    "name": "Samosa Chaat",
    "price": 70,
    "restaurant": "Golzza",
    "icon": "🍽️",
    "desc": "Delicious samosa chaat"
  },
  {
    "name": "Slush",
    "price": 60,
    "restaurant": "Golzza",
    "icon": "🍽️",
    "desc": "Delicious slush"
  },
  {
    "name": "Paneer Tikka Wrap",
    "price": 149,
    "restaurant": "The Healthy Wave",
    "icon": "🥘",
    "desc": "Delicious paneer tikka wrap"
  },
  {
    "name": "Veg Grilled Wrap",
    "price": 129,
    "restaurant": "The Healthy Wave",
    "icon": "🍽️",
    "desc": "Delicious veg grilled wrap"
  },
  {
    "name": "Mexican Wrap",
    "price": 159,
    "restaurant": "The Healthy Wave",
    "icon": "🍽️",
    "desc": "Delicious mexican wrap"
  },
  {
    "name": "Classic Salted Fries",
    "price": 89,
    "restaurant": "The Healthy Wave",
    "icon": "🍟",
    "desc": "Delicious classic salted fries"
  },
  {
    "name": "Peri Peri Fries",
    "price": 99,
    "restaurant": "The Healthy Wave",
    "icon": "🍟",
    "desc": "Delicious peri peri fries"
  },
  {
    "name": "Cheese Fries",
    "price": 119,
    "restaurant": "The Healthy Wave",
    "icon": "🍟",
    "desc": "Delicious cheese fries"
  },
  {
    "name": "Veg Burger",
    "price": 99,
    "restaurant": "The Healthy Wave",
    "icon": "🍔",
    "desc": "Delicious veg burger"
  },
  {
    "name": "Cheese Burger",
    "price": 129,
    "restaurant": "The Healthy Wave",
    "icon": "🍔",
    "desc": "Delicious cheese burger"
  },
  {
    "name": "Spicy Crispy Burger",
    "price": 139,
    "restaurant": "The Healthy Wave",
    "icon": "🍔",
    "desc": "Delicious spicy crispy burger"
  },
  {
    "name": "Green Garden Salad",
    "price": 99,
    "restaurant": "The Healthy Wave",
    "icon": "🍽️",
    "desc": "Delicious green garden salad"
  },
  {
    "name": "Paneer Salad",
    "price": 129,
    "restaurant": "The Healthy Wave",
    "icon": "🥘",
    "desc": "Delicious paneer salad"
  },
  {
    "name": "Corn & Bean Salad",
    "price": 119,
    "restaurant": "The Healthy Wave",
    "icon": "🍽️",
    "desc": "Delicious corn & bean salad"
  },
  {
    "name": "Aloo Kulcha",
    "price": 70,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious aloo kulcha"
  },
  {
    "name": "Paneer Kulcha",
    "price": 90,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious paneer kulcha"
  },
  {
    "name": "Onion Kulcha",
    "price": 70,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious onion kulcha"
  },
  {
    "name": "Mix Kulcha",
    "price": 100,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious mix kulcha"
  },
  {
    "name": "Gobi Kulcha",
    "price": 75,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious gobi kulcha"
  },
  {
    "name": "Plain Kulcha",
    "price": 55,
    "restaurant": "House of Kulcha",
    "icon": "🫓",
    "desc": "Delicious plain kulcha"
  },
  {
    "name": "Margherita",
    "price": 199,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious margherita"
  },
  {
    "name": "Farm Villa",
    "price": 299,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious farm villa"
  },
  {
    "name": "Paneer Tikka",
    "price": 329,
    "restaurant": "La Pino'z Pizza",
    "icon": "🥘",
    "desc": "Delicious paneer tikka"
  },
  {
    "name": "Cheezy-7",
    "price": 349,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious cheezy-7"
  },
  {
    "name": "Mushroom Delight",
    "price": 299,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious mushroom delight"
  },
  {
    "name": "Jalapeno Fiesta",
    "price": 319,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious jalapeno fiesta"
  },
  {
    "name": "Chicken Tikka",
    "price": 369,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍗",
    "desc": "Delicious chicken tikka"
  },
  {
    "name": "Tandoori Chicken",
    "price": 379,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍗",
    "desc": "Delicious tandoori chicken"
  },
  {
    "name": "Butter Chicken",
    "price": 399,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍗",
    "desc": "Delicious butter chicken"
  },
  {
    "name": "Texas BBQ",
    "price": 389,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious texas bbq"
  },
  {
    "name": "Garlic Bread",
    "price": 99,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious garlic bread"
  },
  {
    "name": "Cheese Garlic Bread",
    "price": 129,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious cheese garlic bread"
  },
  {
    "name": "Penne Arrabbiata",
    "price": 169,
    "restaurant": "La Pino'z Pizza",
    "icon": "🍽️",
    "desc": "Delicious penne arrabbiata"
  },
  {
    "name": "Coca Cola",
    "price": 60,
    "restaurant": "La Pino'z Pizza",
    "icon": "🥤",
    "desc": "Delicious coca cola"
  },
  {
    "name": "Steamed Veg Momos",
    "price": 80,
    "restaurant": "Momos Hunter",
    "icon": "☕",
    "desc": "Delicious steamed veg momos"
  },
  {
    "name": "Fried Veg Momos",
    "price": 100,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious fried veg momos"
  },
  {
    "name": "Paneer Momos",
    "price": 110,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious paneer momos"
  },
  {
    "name": "Chicken Momos",
    "price": 120,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious chicken momos"
  },
  {
    "name": "Fried Chicken Momos",
    "price": 140,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious fried chicken momos"
  },
  {
    "name": "Tandoori Momos",
    "price": 150,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious tandoori momos"
  },
  {
    "name": "Cheese Burst Momos",
    "price": 160,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious cheese burst momos"
  },
  {
    "name": "Afghani Momos",
    "price": 170,
    "restaurant": "Momos Hunter",
    "icon": "🥟",
    "desc": "Delicious afghani momos"
  },
  {
    "name": "Aloo Paratha",
    "price": 60,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious aloo paratha"
  },
  {
    "name": "Paneer Paratha",
    "price": 80,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious paneer paratha"
  },
  {
    "name": "Gobi Paratha",
    "price": 60,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious gobi paratha"
  },
  {
    "name": "Mooli Paratha",
    "price": 55,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious mooli paratha"
  },
  {
    "name": "Onion Paratha",
    "price": 55,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious onion paratha"
  },
  {
    "name": "Mix Veg Paratha",
    "price": 70,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious mix veg paratha"
  },
  {
    "name": "Plain Paratha",
    "price": 40,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious plain paratha"
  },
  {
    "name": "Methi Paratha",
    "price": 60,
    "restaurant": "Parantha Corner",
    "icon": "🫓",
    "desc": "Delicious methi paratha"
  },
  {
    "name": "Aloo Samosa",
    "price": 20,
    "restaurant": "Panjaab 13",
    "icon": "🍽️",
    "desc": "Delicious aloo samosa"
  },
  {
    "name": "Onion Samosa",
    "price": 20,
    "restaurant": "Panjaab 13",
    "icon": "🍽️",
    "desc": "Delicious onion samosa"
  },
  {
    "name": "Bread Roll",
    "price": 30,
    "restaurant": "Panjaab 13",
    "icon": "🫓",
    "desc": "Delicious bread roll"
  },
  {
    "name": "Paneer Bread Roll",
    "price": 45,
    "restaurant": "Panjaab 13",
    "icon": "🫓",
    "desc": "Delicious paneer bread roll"
  },
  {
    "name": "Dal Tadka + Roti",
    "price": 99,
    "restaurant": "Panjaab 13",
    "icon": "🫓",
    "desc": "Delicious dal tadka + roti"
  },
  {
    "name": "Dal Makhani + Roti",
    "price": 119,
    "restaurant": "Panjaab 13",
    "icon": "🫓",
    "desc": "Delicious dal makhani + roti"
  },
  {
    "name": "Rajma + Roti",
    "price": 109,
    "restaurant": "Panjaab 13",
    "icon": "🫓",
    "desc": "Delicious rajma + roti"
  },
  {
    "name": "Butter Naan",
    "price": 40,
    "restaurant": "Sher E Punjab",
    "icon": "🫓",
    "desc": "Delicious butter naan"
  },
  {
    "name": "Tandoori Roti",
    "price": 25,
    "restaurant": "Sher E Punjab",
    "icon": "🫓",
    "desc": "Delicious tandoori roti"
  },
  {
    "name": "Aloo Paratha",
    "price": 60,
    "restaurant": "Sher E Punjab",
    "icon": "🫓",
    "desc": "Delicious aloo paratha"
  },
  {
    "name": "Paneer Paratha",
    "price": 70,
    "restaurant": "Sher E Punjab",
    "icon": "🫓",
    "desc": "Delicious paneer paratha"
  },
  {
    "name": "Paneer Butter Masala",
    "price": 180,
    "restaurant": "Sher E Punjab",
    "icon": "🥘",
    "desc": "Delicious paneer butter masala"
  },
  {
    "name": "Shahi Paneer",
    "price": 190,
    "restaurant": "Sher E Punjab",
    "icon": "🥘",
    "desc": "Delicious shahi paneer"
  },
  {
    "name": "Mix Veg Curry",
    "price": 149,
    "restaurant": "Sher E Punjab",
    "icon": "🍽️",
    "desc": "Delicious mix veg curry"
  },
  {
    "name": "Veg Pulao",
    "price": 130,
    "restaurant": "Sher E Punjab",
    "icon": "🍚",
    "desc": "Delicious veg pulao"
  },
  {
    "name": "Rajma Chawal",
    "price": 149,
    "restaurant": "Sher E Punjab",
    "icon": "🍽️",
    "desc": "Delicious rajma chawal"
  },
  {
    "name": "Dal Makhani",
    "price": 139,
    "restaurant": "Sher E Punjab",
    "icon": "🍽️",
    "desc": "Delicious dal makhani"
  },
  {
    "name": "Dal Tadka",
    "price": 119,
    "restaurant": "Sher E Punjab",
    "icon": "🍽️",
    "desc": "Delicious dal tadka"
  },
  {
    "name": "Coca Cola",
    "price": 40,
    "restaurant": "Sip-Stop",
    "icon": "🥤",
    "desc": "Delicious coca cola"
  },
  {
    "name": "Pepsi",
    "price": 40,
    "restaurant": "Sip-Stop",
    "icon": "🥤",
    "desc": "Delicious pepsi"
  },
  {
    "name": "Sprite",
    "price": 40,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious sprite"
  },
  {
    "name": "7UP",
    "price": 40,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious 7up"
  },
  {
    "name": "Frooti",
    "price": 20,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious frooti"
  },
  {
    "name": "Maaza",
    "price": 30,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious maaza"
  },
  {
    "name": "Slice",
    "price": 30,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious slice"
  },
  {
    "name": "Mountain Dew",
    "price": 40,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious mountain dew"
  },
  {
    "name": "Limca",
    "price": 35,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious limca"
  },
  {
    "name": "Real Juice",
    "price": 25,
    "restaurant": "Sip-Stop",
    "icon": "🍽️",
    "desc": "Delicious real juice"
  },
  {
    "name": "Masala Dosa",
    "price": 99,
    "restaurant": "South Circle",
    "icon": "🥞",
    "desc": "Delicious masala dosa"
  },
  {
    "name": "Plain Dosa",
    "price": 79,
    "restaurant": "South Circle",
    "icon": "🥞",
    "desc": "Delicious plain dosa"
  },
  {
    "name": "Paneer Dosa",
    "price": 129,
    "restaurant": "South Circle",
    "icon": "🥞",
    "desc": "Delicious paneer dosa"
  },
  {
    "name": "Plain Idli",
    "price": 69,
    "restaurant": "South Circle",
    "icon": "🥞",
    "desc": "Delicious plain idli"
  },
  {
    "name": "Masala Idli",
    "price": 89,
    "restaurant": "South Circle",
    "icon": "🥞",
    "desc": "Delicious masala idli"
  },
  {
    "name": "Pav Bhaji",
    "price": 119,
    "restaurant": "South Circle",
    "icon": "🍽️",
    "desc": "Delicious pav bhaji"
  },
  {
    "name": "Classic Vada Pav",
    "price": 49,
    "restaurant": "South Circle",
    "icon": "🍔",
    "desc": "Delicious classic vada pav"
  },
  {
    "name": "Schezwan Vada Pav",
    "price": 65,
    "restaurant": "South Circle",
    "icon": "🍔",
    "desc": "Delicious schezwan vada pav"
  },
  {
    "name": "Veg Hakka Noodles",
    "price": 129,
    "restaurant": "Venky's",
    "icon": "🍜",
    "desc": "Delicious veg hakka noodles"
  },
  {
    "name": "Chicken Hakka Noodles",
    "price": 159,
    "restaurant": "Venky's",
    "icon": "🍗",
    "desc": "Delicious chicken hakka noodles"
  },
  {
    "name": "Schezwan Noodles",
    "price": 149,
    "restaurant": "Venky's",
    "icon": "🍜",
    "desc": "Delicious schezwan noodles"
  },
  {
    "name": "Classic Fries",
    "price": 79,
    "restaurant": "Venky's",
    "icon": "🍟",
    "desc": "Delicious classic fries"
  },
  {
    "name": "Peri Peri Fries",
    "price": 99,
    "restaurant": "Venky's",
    "icon": "🍟",
    "desc": "Delicious peri peri fries"
  },
  {
    "name": "Cheese Fries",
    "price": 119,
    "restaurant": "Venky's",
    "icon": "🍟",
    "desc": "Delicious cheese fries"
  },
  {
    "name": "Veg Fried Rice",
    "price": 129,
    "restaurant": "Venky's",
    "icon": "🍚",
    "desc": "Delicious veg fried rice"
  },
  {
    "name": "Veg Momos (6 pcs)",
    "price": 89,
    "restaurant": "Venky's",
    "icon": "🥟",
    "desc": "Delicious veg momos (6 pcs)"
  },
  {
    "name": "Corn Dog",
    "price": 79,
    "restaurant": "Venky's",
    "icon": "🍽️",
    "desc": "Delicious corn dog"
  }
];
