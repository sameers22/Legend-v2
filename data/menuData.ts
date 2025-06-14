// menuData.ts

// ✅ Import dish images from assets (adjust paths if needed)
export const buffaloWingsImg = require('../assets/Appetizer/A1-Chicken-Wings.png');
export const bbqChickenImg = require('../assets/Appetizer/A2-BBQ-Chicken-Boneless.png');
export const beefFajitasImg = require('../assets/Appetizer/A3-Beef-Fajitas.png');
export const chickenFajitasImg = require('../assets/Appetizer/A4-Chicken-Fajitas.png');

export const chilliChickenImg = require('../assets/Appetizer/A5-Chilli-Chicken.png');
export const bonelessChickenImg = require('../assets/Appetizer/A6-Crispy-Boneless-Chicken-Breast.avif');
export const calamariImg = require('../assets/Appetizer/A7-Golden-Fried-Calamari.avif');
export const snapperImg = require('../assets/Appetizer/A8-Fried-Guyana-Snapper.avif');
export const roastLambImg = require('../assets/Appetizer/A9-Roast-Lamb.avif');
export const roastBeefImg = require('../assets/Appetizer/A10-Roast-Beef.avif');
export const roastChickenImg = require('../assets/Appetizer/A11-Roast-Chicken.avif');
export const bbqRibsImg = require('../assets/Appetizer/A12-BBQ-Baby-Back-Ribs.avif');
export const bbqChickenFullImg = require('../assets/Appetizer/A13-BBQ-Chicken.avif');
export const jerkChickenImg = require('../assets/Appetizer/A14-Jerk-Chicken.avif');
export const jerkPorkImg = require('../assets/Appetizer/A15-Jerk-Pork.avif');
export const pepperJumboShrimpImg = require('../assets/Appetizer/A16-Pepper-Jumbo-Shrimp.avif');
export const batteredShrimpImg = require('../assets/Appetizer/A17-Fried-Battered-Jumbo-Shrimp.avif');
export const shrimpWontonImg = require('../assets/Appetizer/A18-Shrimp-Wonton.avif');
export const friedSharkImg = require('../assets/Appetizer/A19-Fried-Shark.avif');
export const friedBangamaryImg = require('../assets/Appetizer/A20-Fried-Small-Bangamary.avif');


export const seafoodSoupSmallImg = require('../assets/Soups/B1-Seafood-Soup-Sm.avif');
export const chickenNoodleSoupLargeImg = require('../assets/Soups/B2-Chicken-Noodle-Soup-Lg .avif');
export const chickenVeggieSoupLargeImg = require('../assets/Soups/B3-Chicken-Veggie-Soup-Lg.avif');
export const seafoodSoupLargeImg = require('../assets/Soups/B4-Seafood-Soup-Lg.avif');
export const chickenNoodleSoupSmallImg = require('../assets/Soups/B5-Chicken-Noodle-Soup-sm.avif');
export const chickenVeggieSoupSmallImg = require('../assets/Soups/B6-Chicken-Veggie-Soup.avif');

export const E8 = require('../assets/Beef/E8.avif');
export const E9 = require('../assets/Beef/E9.avif');
export const E10 = require('../assets/Beef/E10.avif');
export const E12 = require('../assets/Beef/E12.avif');

export const StewWholeRedSnapper = require('../assets/CarribeanDelights/StewWholeRedSnapper.avif');

export const BBQ = require('../assets/Catering Trays to Go, Half Size (small)Trays/BBQ Baby Back Ribs SmallTrays.avif');

export const chickenDish1Img = require('../assets/Chicken/E1.avif');
export const chickenDish2Img = require('../assets/Chicken/E2.avif');

export const chickenDish3Img = require('../assets/Chicken/E3.avif');

export const lambDish1Img = require('../assets/Lamb/E5.avif');
export const lambDish2Img = require('../assets/Lamb/E6.avif')

// ✅ Export menuData array
export const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Hot Buffalo Wings", price: "$12.95", description: "Crispy, spicy wings served with blue cheese dip.", image: buffaloWingsImg },
            { name: "BBQ Chicken Wings", price: "$12.95", description: "Sweet and tangy BBQ sauce glazed wings.", image: bbqChickenImg },
            { name: "Beef Fajitas", price: "$15.95", description: "Sizzling beef fajitas with peppers and onions.", image: beefFajitasImg },
            { name: "Chicken Fajitas", price: "$14.95", description: "Tender chicken fajitas with seasoned veggies.", image: chickenFajitasImg },
            { name: "Sweet Chili Chicken", price: "$15.95", description: "Crispy chicken tossed in a sweet and spicy chili sauce.", image: chilliChickenImg },
            { name: "Crispy Boneless Chicken Breast", price: "$14.95", description: "Tender, crispy chicken breast served with house sauce.", image: bonelessChickenImg },
            { name: "Golden Fried Calamari", price: "$14.95", description: "Crispy calamari rings served with marinara sauce.", image: calamariImg },
            { name: "Fried Guyana Snapper", price: "$16.95", description: "Delicately fried Guyanese snapper with house seasoning.", image: snapperImg },
            { name: "Roast Lamb", price: "$19.95", description: "Slow-roasted lamb with rich seasoning.", image: roastLambImg },
            { name: "Roast Beef", price: "$18.95", description: "Juicy roast beef with a flavorful crust.", image: roastBeefImg },
            { name: "Roast Chicken", price: "$14.95", description: "Slow-roasted chicken with a smoky flavor.", image: roastChickenImg },
            { name: "BBQ Baby Back Ribs", price: "$19.95", description: "Smoky, tender BBQ ribs glazed to perfection.", image: bbqRibsImg },
            { name: "BBQ Chicken", price: "$15.95", description: "Classic BBQ chicken with rich smoky flavors.", image: bbqChickenFullImg },
            { name: "Jerk Chicken", price: "$16.95", description: "Spicy and flavorful jerk-marinated chicken.", image: jerkChickenImg },
            { name: "Jerk Pork", price: "$16.95", description: "Tender pork marinated in Caribbean spices.", image: jerkPorkImg },
            { name: "Pepper Jumbo Shrimp", price: "$18.95", description: "Sweet and spicy peppered shrimp.", image: pepperJumboShrimpImg },
            { name: "Fried Battered Jumbo Shrimp", price: "$19.95", description: "Crispy battered shrimp served with dip.", image: batteredShrimpImg },
            { name: "Shrimp Wonton", price: "$14.95", description: "Delicious crispy wontons filled with shrimp.", image: shrimpWontonImg },
            { name: "Fried Shark", price: "$17.95", description: "Lightly battered and fried shark fillets.", image: friedSharkImg },
            { name: "Fried Small Bangamary", price: "$16.95", description: "Crispy fried Bangamary fish with house seasoning.", image: friedBangamaryImg }
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Seafood Soup (Small)", price: "$12.95", description: "Rich seafood broth with calamari, shrimp, and crab.", image: seafoodSoupSmallImg },
            { name: "Seafood Soup (Large)", price: "$16.95", description: "A larger portion of our delicious seafood soup.", image: seafoodSoupLargeImg },
            { name: "Chicken Noodle Soup (Small)", price: "$7.95", description: "Homemade broth with tender chicken and noodles.", image: chickenNoodleSoupSmallImg },
            { name: "Chicken Noodle Soup (Large)", price: "$11.95", description: "Large portion of classic chicken noodle soup.", image: chickenNoodleSoupLargeImg },
            { name: "Chicken Veggie Soup (Small)", price: "$10.95", description: "Savory chicken broth loaded with fresh vegetables.", image: chickenVeggieSoupSmallImg },
            { name: "Chicken Veggie Soup (Large)", price: "$14.95", description: "Larger bowl of nutritious chicken veggie soup.", image: chickenVeggieSoupLargeImg }
        ]
    },
    {
        category: "Salads",
        items: [
            { name: "Fresh Garden Salad", price: "$10.95", description: "Crisp greens, tomatoes, cucumbers, and carrots." },
            { name: "Grilled Chicken Salad", price: "$12.00", description: "Fresh salad topped with juicy grilled chicken." },
            { name: "Jerk Chicken Salad", price: "$12.00", description: "Caribbean-style jerk chicken over fresh greens." }
        ]
    },
    {
        category: "Caribbean Delights",
        items: [
            { name: "Chicken Curry", price: "$16.95", description: "Served with choice of white rice, roti, dhal puri, or rice and peas." },
            { name: "Duck Curry Platter", price: "$19.95", description: "Choice of white rice, roti, dhal puri, or rice and peas." },
            { name: "Curried Duck", price: "$19.95", description: "Classic curried duck dish." },
            { name: "Bunjai Pork", price: "$18.95", description: "Choice of white rice, roti, or dhal puri." },
            { name: "Curry Goat Platter", price: "$16.95", description: "Served with choice of white rice, roti, dhal puri, or rice and peas." },
            { name: "Curry Shrimp", price: "$18.95", description: "Served with choice of white rice, roti, or dhal puri." },
            { name: "Stew Whole Red Snapper", price: "$18.95", description: "Served with rice, fried rice, or rice and peas.", image: StewWholeRedSnapper },
            { name: "Oxtail", price: "$20.95", description: "Choice of white rice, roti, dhal puri, or rice and peas." }
        ]
    },
    {
        category: "Favorite Caribbean Delights",
        items: [
            { name: "Duck Curry", price: "$20.00", description: "Authentic Caribbean-style duck curry with rich flavors." },
            { name: "Bunjal Duck", price: "$20.00", description: "Spicy dry-style duck curry, bursting with flavor." },
            { name: "Chicken Curry", price: "$16.95", description: "Aromatic curry chicken served with choice of sides." },
            { name: "Oxtails", price: "$20.95", description: "Slow-cooked oxtail in a flavorful brown sauce." }
        ]
    },
    {
        category: "Fried Rice",
        items: [
            { name: "Chicken Fried Rice", price: "$14.95", description: "Most popular." },
            { name: "House Special Fried Rice", price: "$16.95", description: "Shrimp, pork, crab meat, and chicken on top. Modify if no pork, no shrimp, no crab meat." },
            { name: "Jerk Chicken Fried Rice", price: "$15.95", description: "Most popular." },
            { name: "BBQ Chicken Fried Rice", price: "$17.95", description: "Most popular." },
            { name: "Pepper Lamb Fried Rice", price: "$19.95", description: "Smokey and a hint of heat sweet pepper and onions." },
            { name: "Shrimp Fried Rice", price: "$16.95", description: "Caribbean-Guyanese-style with options for regular, small, or add a soda." },
            { name: "Plain Fried Rice", price: "$11.95", description: "Guyanese-style Chinese plain fried rice." }
        ]
    },
    {
        category: "Rasta Pasta",
        items: [
            { name: "Rasta Pasta BBQ Baby Back Ribs", price: "$13.95 / $22.95", description: "BBQ baby back ribs tossed in creamy Rasta Pasta sauce." },
            { name: "Roast Duck", price: "$24.95", description: "Slow-roasted duck served with lo mein or penne pasta." },
            { name: "Jerk Chicken", price: "$10.95 / $16.95", description: "Fiery jerk chicken served over creamy pasta." }
        ]
    },
    {
        category: "Rasta Pasta",
        items: [
            { name: "Jerk Chicken over Rasta Pasta", price: "$18.95", description: "Jerk chicken seasoned with Caribbean spices, served over vibrant Rasta Pasta featuring bell peppers and creamy sauce." },
            { name: "Jerk Pork over Rasta Pasta", price: "$18.95", description: "Tender jerk pork slices seasoned with Caribbean spices, served over colorful pasta, garnished with fresh green onions." },
            { name: "Roast Duck over Rasta Pasta", price: "$24.95", description: "Succulent roast duck slices paired with vibrant tri-color pasta, garnished with fresh scallions and cucumber slices." },
            { name: "Roast Chicken over Rasta Pasta", price: "$17.95", description: "Tender roast chicken, seasoned with Caribbean spices, atop creamy, colorful pasta, garnished with fresh green onions." },
            { name: "BBQ Chicken over Rasta Pasta", price: "$18.95", description: "Tender BBQ chicken paired with pasta, featuring a vibrant blend of bell peppers, onions, and creamy sauce." },
            { name: "Roast Beef over Rasta Pasta", price: "$18.95", description: "Tender roasted beef chunks over creamy Rasta Pasta, garnished with fresh green onions." },
            { name: "Sweet and Tangy Pepper Lamb over Rasta Pasta", price: "$19.95", description: "Tender lamb pieces with sweet and tangy peppers, and Rasta Pasta noodles in a rich, savory sauce." },
            { name: "Grill Jumbo Shrimp over Rasta Pasta", price: "$19.95", description: "Succulent grilled jumbo shrimp atop creamy pasta, complemented by bell peppers and onions." }
        ]
    },
    {
        category: "Lo Mein Dishes",
        items: [
            { name: "Chicken Lo Mein", price: "$14.95", description: "Most popular." },
            { name: "House Special Lo Mein", price: "$18.95", description: "Shrimp, pork, crab meat, and chicken on top. MODIFY IF NO PORK, NO SHRIMP, NO CRAB MEAT." },
            { name: "Roast Duck Lo Mein", price: "$24.95", description: "Roast duck served over lo mein. Options include regular, small, or with a soda." },
            { name: "Roast Beef Lo Mein", price: "$18.95", description: "Roast beef served with lo mein noodles. Options for size include regular, small, or with added soda." },
            { name: "Roast Lamb Lo Mein", price: "$18.95", description: "Roast lamb lo mein available in regular, small sizes or with soda." },
            { name: "BBQ Chicken Lo Mein", price: "$17.95", description: "Stir-fried noodles with BBQ chicken. Optional sizes: regular, small, or with a soda." },
            { name: "Shrimp Lo Mein", price: "$14.95", description: "Shrimp tossed with lo mein noodles. Options include regular, small, or add a soda." },
            { name: "BBQ Baby Back Ribs Lo Mein", price: "$24.95", description: "BBQ baby back ribs lo mein. Options include regular, small, or with a soda." },
            { name: "Roast Chicken Lo Mein", price: "$16.95", description: "Roast chicken tossed with lo mein noodles. Options: regular, small, or add a soda." },
            { name: "Jerk Pork Lo Mein", price: "$17.95", description: "Jerk pork with lo mein noodles. Small size." },
            { name: "Vegetable Lo Mein", price: "$12.95", description: "Vegetable lo mein with choice of size: regular, small, or with soda." },
            { name: "Mixed Lo Mein", price: "$17.95", description: "Shrimp, pork, and chicken on top. MODIFY IF NO PORK, NO SHRIMP." },
            { name: "Pepper Lamb Lo Mein", price: "$18.95", description: "SMOKEY AND A HINT OF HEAT SWEET PEPPER AND ONIONS." },
            { name: "Pepper Shrimp Lo Mein", price: "$18.95", description: "SMOKEY AND A HINT OF HEAT SWEET PEPPER AND ONIONS." }
        ]
    },
    {
        category: "Guyanese Chow Mein Dishes",
        items: [
            { name: "Shrimp Chow Mein", price: "$15.95", description: "Guyanese shrimp chow mein with options for regular, small sizes, or addition of a soda." },
            { name: "Chicken Chow Mein", price: "$15.95", description: "Guyanese-style chow mein: tender chicken strips, stir-fried noodles. Size options include regular, small, or with a soda." },
            { name: "Vegetable Chow Mein", price: "$12.95", description: "Caribbean-style chow mein with mixed vegetables. Options include regular, small, or add a soda." },
            { name: "Roast Lamb Chow Mein", price: "$18.95", description: "Guyanese-style chow mein featuring tender roast lamb. Options include regular size, small, or with a soda." },
            { name: "BBQ Chicken Chow Mein", price: "$15.95", description: "Guyanese chow mein with BBQ chicken. Options include regular, small, or add a soda." },
            { name: "Jerk Pork Chow Mein", price: "$18.95", description: "Jerk pork, mixed with chow mein noodles. Options: regular, small, or with a soda." },
            { name: "Pepper Lamb Chow Mein", price: "$18.95", description: "SWEET PEPPER LITTLE HINT OF HEAT." },
            { name: "Roast Chicken Chow Mein", price: "$15.95", description: "Guyanese chow mein with roasted chicken. Options include regular, small, or with a soda." },
            { name: "BBQ Baby Back Chow Mein", price: "$24.95", description: "Caribbean Guyanese chow mein noodles with BBQ baby back rib pieces. Size options include regular, small, or add a soda." },
            { name: "Roast Duck Chow Mein", price: "$24.95", description: "Roast duck with Guyanese-style noodles. Options include regular, small, or add a soda." },
            { name: "Jerk Chicken Chow Mein", price: "$18.95", description: "Guyanese chow mein featuring jerk chicken, stir-fried with vegetables and spices. Options include regular, small, or add a soda." },
            { name: "Roast Pork Chow Mein", price: "$18.95", description: "Guyanese-style chow mein with roast pork. Options: regular, small, or add a soda." },
            { name: "Roast Beef Chow Mein", price: "$18.95", description: "Guyanese-style roast beef on chow mein noodles. Options include regular, small, or with a soda." },
            { name: "Mixed Chow Mein", price: "$18.95", description: "Shrimp, pork, and chicken on top. MODIFY IF NO PORK, NO SHRIMP." },
            { name: "House Special Chow Mein", price: "$18.95", description: "Shrimp, pork, crab meat, and chicken on top. MODIFY IF NO PORK, NO SHRIMP, NO CRAB MEAT." },
            { name: "Regular Jamaica Escovitch Fish Chow Mein", price: "$21.95", description: "A traditional Guyanese-style chow mein featuring escovitch fish." },
            { name: "Mixed Seafood Chow Mein", price: "$22.95", description: "Caribbean Guyanese chow mein with a mix of seafood. Available in regular or small sizes. Option to add a soda." }
        ]
    },
    {
        category: "Vegetables",
        items: [
            { name: "Broccoli in Garlic Sauce", price: "$12.95", description: "Tender broccoli and crisp snow peas stir-fried with sliced carrots and water chestnuts in a savory garlic sauce." },
            { name: "Stir Fry Vegetables", price: "$12.95", description: "A vibrant mix of broccoli, snow peas, carrots, and bell peppers, stir-fried with a savory sauce." },
            { name: "Mixed Vegetables", price: "$12.95", description: "A medley of broccoli, snow peas, carrots, and water chestnuts stir-fried with a light sauce." },
            { name: "Steamed Mixed Vegetables", price: "$12.95", description: "A medley of steamed broccoli, snow peas, carrots, and water chestnuts, lightly seasoned for a fresh and vibrant dish." }
        ]
    },
    {
        category: "Chicken",
        items: [
            { name: "Chicken with Mixed Vegetables", price: "$18.95", description: "Served with white rice.", image: chickenDish2Img },
            { name: "Chicken in Garlic Sauce", price: "$18.95", description: "Served with white rice." },
            { name: "Chicken with Broccoli", price: "$18.95", description: "Served with white rice.", image: chickenDish1Img },
            { name: "Chicken Breast", price: "$21.95", description: "Served with white rice.", image: chickenDish3Img },
        ]
    },
    {
        category: "Lamb",
        items: [
            { name: "Lamb with Mixed Vegetables", price: "$19.95", description: "Served with white rice.", image: lambDish2Img },
            { name: "Roast Lamb", price: "$19.95", description: "Served with white rice.", image: lambDish1Img },
            { name: "Lamb with Peppers & Onion", price: "$18.95", description: "Served with white rice." }
        ]
    },
    {
        category: "Beef",
        items: [
            { name: "Pepper Steak with Onions", price: "$19.95", description: "Served with white rice.", image: E8 },
            { name: "Beef with Broccoli", price: "$19.95", description: "Served with white rice.", image: E10 },
            { name: "Roast Beef", price: "$19.95", description: "Peppers and onions. Served with white rice.", image: E12 },
            { name: "Beef with Mixed Vegetables", price: "$19.95", description: "Served with white rice.", image: E9 },
            { name: "Rib Eye Steak", price: "$29.95", description: "Served with white rice."}
        ]
    },
    {
        category: "Pork",
        items: [
            { name: "Roast Pork with Mixed Vegetables", price: "$18.95", description: "Served with white rice." },
            { name: "Roast Pork with Bora and Cabbage", price: "$18.95", description: "Served with white rice." }
        ]
    },
    {
        category: "Seafood",
        items: [
            { name: "Stewed Whole Red Snapper", price: "$22.95", description: "With tomatoes, peppers, and onions. Served with white rice." },
            { name: "Pan Fried Whole Red Snapper", price: "$19.95", description: "Served with white rice." },
            { name: "Battered Fried Shrimp", price: "$19.95", description: "Served with white rice." },
            { name: "Shrimp with Broccoli", price: "$19.95", description: "Served with white rice." },
            { name: "Shrimp with Mixed Vegetables", price: "$19.95", description: "Served with white rice." },
            { name: "Seafood Combination", price: "$22.95", description: "Shrimp, crab meat, lobster meat, calamari. Served with white rice." },
            { name: "Jamaica Escovitch Fish", price: "$22.95", description: "Served with white rice." },
            { name: "Grilled Shrimp", price: "$19.95", description: "Served with white rice." }
        ]
    },
    {
        category: "Sides",
        items: [
            { name: "Rice and Peas", price: "$7.99", description: "Plain." },
            { name: "Fried Green Plantains (small wedges)", price: "$8.99", description: "Crispy and delicious fried green plantains." },
            { name: "Oil Roti", price: "$4.00", description: "Soft and flaky Caribbean-style roti." },
            { name: "Dhal Puri", price: "$4.00", description: "A traditional roti stuffed with seasoned split peas." },
            { name: "Dhal", price: "$5.00", description: "A flavorful lentil-based dish, served as a side." }
        ]
    },
    {
        category: "Catering Trays  to Go, Large Deep Trays",
        items: [
            { name: "Jerk Wings Large Tray", price: "$139.00", description: "Perfect for parties, a large tray of our delicious jerk wings." },
            { name: "Fry Wings Large Tray", price: "$139.00", description: "Crispy fried wings in a large tray for gatherings." },
            { name: "Crispy Boneless Chicken Breast Fried Large Tray", price: "$149.00", description: "Tender and crispy boneless chicken breast, deep-fried to perfection." },
            { name: "Fry Chicken Large Tray", price: "$119.00", description: "A full tray of crispy and flavorful fried chicken." },
            { name: "Jerk Chicken Large Tray", price: "$149.00", description: "A large portion of our signature jerk chicken, marinated with authentic Caribbean spices." },
            { name: "BBQ Boneless Chicken Sliced Large Tray", price: "$149.00", description: "Juicy boneless chicken slices glazed with rich BBQ sauce." },
            { name: "BBQ Baby Back Ribs Large Tray", price: "$179.00", description: "Tender, juicy baby back ribs marinated in Caribbean spices, grilled to perfection." },
            { name: "Roast Duck Chinese Style Large Tray", price: "$279.00", description: "Authentic Chinese-style roast duck in a large portion for events." },
            { name: "Roast Beef Sliced and Sauteed in Special Sauce Large Tray", price: "$199.00", description: "Savory roast beef slices sauteed in a special sauce." },
            { name: "Beef Broccoli Large Tray", price: "$159.00", description: "A classic combination of beef and broccoli stir-fried to perfection." },
            { name: "Pepper Lamb Large Tray", price: "$179.00", description: "Tender lamb seasoned with peppers and spices, perfect for large groups." },
            { name: "Roast Pork Chinese Style Sliced Large Tray", price: "$149.00", description: "Savory roast pork with Chinese-style flavors." },
            { name: "Chili Chicken Sweet and Tangy Large Tray", price: "$179.00", description: "Sweet and tangy chili chicken, with a slight hint of heat." },
            { name: "Chicken Fajitas Large Tray", price: "$159.00", description: "Grilled chicken fajitas with bell peppers and onions." },
            { name: "Jumbo Pepper Shrimp Sweet and Tangy Large Tray", price: "$220.00", description: "Jumbo shrimp cooked in a sweet and tangy pepper sauce." },
            { name: "Fried Large Jumbo Shrimp Battered Large Tray", price: "$220.00", description: "Golden crispy battered jumbo shrimp." },
            { name: "Curry Chicken Large Tray", price: "$169.00", description: "Authentic Caribbean-style curry chicken." },
            { name: "Curry Goat Large Tray", price: "$179.00", description: "Tender slow-cooked goat in flavorful curry sauce." },
            { name: "Curry Duck Large Tray", price: "$220.00", description: "Rich and flavorful Caribbean-style curry duck." },
            { name: "Oxtails Large Tray", price: "$250.00", description: "Slow-braised oxtails cooked in a savory brown sauce." },
            { name: "Large Tray of Plain Fry Rice", price: "$89.00", description: "A full tray of classic plain fried rice." },
            { name: "House Special Fried Rice Large Tray", price: "$120.00", description: "A mix of pork, shrimp, and crab meat in a large fried rice tray." },
            { name: "Pineapple Fried Rice Large Tray", price: "$99.00", description: "Savory and slightly sweet pineapple fried rice." },
            { name: "Shrimp Fried Rice Large Tray", price: "$109.00", description: "Shrimp fried rice in a generous portion for gatherings." },
            { name: "Mixed Fried Rice Large Tray", price: "$119.00", description: "A mix of meats and vegetables in a large fried rice portion." },
            { name: "Plain Chow Mein Large Tray", price: "$99.00", description: "A large tray of classic Guyanese-style chow mein noodles." },
            { name: "House Special Chow Mein Large Tray", price: "$120.00", description: "A mix of pork, shrimp, and crab meat with stir-fried noodles." },
            { name: "Shrimp Chow Mein Large Tray", price: "$119.00", description: "A generous portion of shrimp chow mein." },
            { name: "Plain Lo Mein Large Tray", price: "$99.00", description: "A full tray of classic lo mein noodles." },
            { name: "House Special Lo Mein Large Tray", price: "$120.00", description: "Lo mein with pork, shrimp, and crab meat." },
            { name: "Rice and Peas Large Tray", price: "$119.00", description: "A large serving of the Caribbean favorite, rice, and peas." },
            { name: "Rasta Pasta Large Tray", price: "$119.00", description: "A creamy and flavorful Rasta pasta dish in a large tray." },
            { name: "Hot Buffalo Wings Large Trays", price: "$139.00", description: "A party-sized tray of spicy hot buffalo wings." },
            { name: "BBQ Wings Large Trays", price: "$139.00", description: "BBQ-glazed wings in a large portion." }
        ]
    },
    {
       
            category: "Catering Trays (Half Size)",
            items: [
                { name: "Jerk Wings Small Tray", price: "$79.00", description: "Perfect for small gatherings, a tray of our delicious jerk wings." },
                { name: "Fry Wings Small Tray", price: "$79.00", description: "Crispy fried wings in a smaller portion for events." },
                { name: "Crispy Boneless Chicken Breast Fried Small Tray", price: "$85.00", description: "Tender and crispy boneless chicken breast, deep-fried to perfection." },
                { name: "Fry Chicken Small Tray", price: "$59.00", description: "A small tray of crispy and flavorful fried chicken." },
                { name: "Jerk Chicken Small Tray", price: "$79.00", description: "A smaller portion of our signature jerk chicken, marinated with authentic Caribbean spices." },
                { name: "BBQ Boneless Chicken Sliced Small Tray", price: "$79.00", description: "Juicy boneless chicken slices glazed with rich BBQ sauce." },
                { name: "BBQ Baby Back Ribs Small Tray", price: "$89.00", description: "Tender, juicy baby back ribs glazed with a rich BBQ sauce, garnished with chopped green onions.", image: BBQ },
                { name: "Roast Duck Chinese Style Small Tray", price: "$140.00", description: "Authentic Chinese-style roast duck in a smaller portion for events." },
                { name: "Roast Beef Sliced and Sauteed in Special Sauce Small Tray", price: "$99.00", description: "Savory roast beef slices sauteed in a special sauce." },
                { name: "Beef Broccoli Small Tray", price: "$80.00", description: "A classic combination of beef and broccoli stir-fried to perfection." },
                { name: "Chicken Broccoli Small Tray", price: "$79.00", description: "Tender chicken stir-fried with fresh broccoli." },
                { name: "Pepper Lamb Small Tray", price: "$79.00", description: "Tender lamb seasoned with peppers and spices, perfect for small groups." },
                { name: "Roast Pork Chinese Style Sliced Small Tray", price: "$79.00", description: "Savory roast pork with Chinese-style flavors." },
                { name: "Chili Chicken Sweet and Tangy Small Tray", price: "$80.00", description: "Sweet and tangy chili chicken with a slight hint of heat." },
                { name: "Roast Chicken Cut Into Pieces Small Tray", price: "$69.00", description: "Perfectly roasted chicken, cut into pieces for convenience." },
                { name: "Jumbo Pepper Shrimp Sweet and Tangy Small Tray", price: "$110.00", description: "Jumbo shrimp cooked in a sweet and tangy pepper sauce." },
                { name: "Fried Large Jumbo Shrimp Battered Small Tray", price: "$110.00", description: "Golden crispy battered jumbo shrimp." },
                { name: "Chicken Fajitas Small Tray", price: "$89.00", description: "Grilled chicken fajitas with bell peppers and onions." },
                { name: "Curry Chicken Small Tray", price: "$89.00", description: "Authentic Caribbean-style curry chicken." },
                { name: "Curry Duck Small Tray", price: "$110.00", description: "Rich and flavorful Caribbean-style curry duck." },
                { name: "Oxtails Small Tray", price: "$125.00", description: "Slow-braised oxtails cooked in a savory brown sauce." },
                { name: "Plain Fry Rice Small Tray", price: "$49.00", description: "A small tray of classic plain fried rice." },
                { name: "House Special Fried Rice Small Tray", price: "$69.00", description: "A mix of pork, shrimp, and crab meat in a small fried rice tray." },
                { name: "Pineapple Fried Rice Small Tray", price: "$49.00", description: "Savory and slightly sweet pineapple fried rice." },
                { name: "Shrimp Fried Rice Small Tray", price: "$59.00", description: "Shrimp fried rice in a smaller portion for gatherings." },
                { name: "Mixed Fried Rice Small Tray", price: "$59.00", description: "A mix of meats and vegetables in a small fried rice portion." },
                { name: "Plain Chow Mein Small Tray", price: "$49.00", description: "A small tray of classic Guyanese-style chow mein noodles." },
                { name: "House Special Chow Mein Small Tray", price: "$69.00", description: "A mix of pork, shrimp, and crab meat with stir-fried noodles." },
                { name: "Shrimp Chow Mein Small Tray", price: "$59.00", description: "A generous portion of shrimp chow mein." },
                { name: "Plain Lo Mein Small Tray", price: "$49.00", description: "A full tray of classic lo mein noodles." },
                { name: "House Special Lo Mein Small Tray", price: "$69.00", description: "Lo mein with pork, shrimp, and crab meat." },
                { name: "Shrimp Lo Mein Small Tray", price: "$69.00", description: "A small portion of shrimp lo mein for events." },
                { name: "Rice and Peas Small Tray", price: "$69.00", description: "A small serving of the Caribbean favorite, rice, and peas." },
                { name: "Rasta Pasta Small Tray", price: "$59.00", description: "A creamy and flavorful Rasta pasta dish in a small tray." },
                { name: "Hot Buffalo Wings Small Tray", price: "$79.00", description: "A tray of spicy hot buffalo wings in a smaller portion." },
                { name: "BBQ Wings Small Tray", price: "$79.00", description: "BBQ-glazed wings in a small portion." }
            ]
       
    },
    {
        category: "Guyana Soda",
        items: [
            { name: "Kola Champagne", price: "$2.50", description: "Traditional flavored soft drink." },
            { name: "Pineapple", price: "$2.95", description: "Refreshing pineapple-flavored soda." },
            { name: "Lemonade", price: "$2.95", description: "Classic lemon-flavored soda." },
            { name: "Banana Soda", price: "$2.95", description: "Sweet banana-flavored soda." },
            { name: "Lime Rickey", price: "$2.95", description: "Tangy lime-flavored soft drink." },
            { name: "Ginger", price: "$2.95", description: "Ginger-flavored soda with a refreshing taste." },
            { name: "Orange", price: "$2.95", description: "Refreshing orange-flavored soda." },
            { name: "Cream Soda", price: "$2.50", description: "Smooth and creamy soda, a popular choice." },
            { name: "Raspberry", price: "$2.95", description: "Sweet and fruity raspberry soda." }
        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Cheesecake", price: "$7.00", description: "Creamy cheesecake with a graham cracker crust." },
            { name: "Chocolate Cake", price: "$7.00", description: "Decadent chocolate cake with a rich ganache." },
            { name: "Red Velvet Cake", price: "$7.00", description: "Classic red velvet cake with cream cheese frosting." },
            { name: "Guyana Custard", price: "$7.00", description: "Traditional Guyanese custard dessert." }
        ]
    }
];
