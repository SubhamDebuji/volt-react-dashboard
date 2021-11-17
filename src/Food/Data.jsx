import React from "react";
const menu = [
    {
        id: 1,
        title: "Monday",
        category: "breakfast",
        price: 15.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: `One poached egg and half a small avocado spread on one slice of Ezekiel bread, one orange. Total carbs: Approximately 39`
    },
    {
        id: 2,
        title: "Monday",
        category: "lunch",
        price: 13.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `Mexican bowl: two-thirds of a cup low-sodium canned pinto beans, 1 cup chopped spinach, a quarter cup chopped tomatoes, a quarter cup bell peppers, 1 ounce (oz) cheese, 1 tablespoon (tbsp) salsa as sauce. Total carbs: Approximately 30. `
    },
    {
        id: 3,
        title: "Monday",
        category: "Dinner",
        price: 6.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `1 cup cooked lentil penne pasta, 1.5 cups veggie tomato sauce (cook garlic, mushrooms, greens, zucchini, and eggplant into it), 2 oz ground lean turkey. Total carbs: Approximately 35.`
    },
    {
        id: 4,
        title: "Tuesday",
        category: "breakfast",
        price: 20.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: `1 cup (100g) cooked oatmeal, three-quarters of a cup blueberries, 1 oz almonds, 1 teaspoon (tsp) chia seeds. Total carbs: Approximately 34`
    },
    {
        id: 5,
        title: "Tuesday",
        category: "lunch",
        price: 22.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: ` Salad: 2 cups fresh spinach, 2 oz grilled chicken breast, half a cup chickpeas, half a small avocado, a half cup sliced strawberries, one quarter cup shredded carrots, 2 tbsp dressing. Total carbs: Approximately 52.`
    },
    {
        id: 6,
        title: "Tuesday",
        category: "Dinner",
        price: 18.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `Mediterranean couscous: two-thirds cup whole wheat cooked couscous, half a cup sautéed eggplant, four sundried tomatoes, five jumbo olives chopped, half a diced cucumber, 1 tbsp balsamic vinegar, fresh basil. Total carbs: Approximately 38.`
    },
    {
        id: 7,
        title: "Wednesday",
        category: "breakfast",
        price: 8.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: ` Two-egg veggie omelet (spinach, mushrooms, bell pepper, avocado) with a half cup black beans, three-quarters cup blueberries. Total carbs: Approximately 34.`
    },
    {
        id: 8,
        title: "Wednesday",
        category: "lunch",
        price: 12.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `Sandwich: two regular slices high-fiber whole grain bread, 1 tbsp plain, no-fat Greek yogurt and 1 tbsp mustard, 2 oz canned tuna in water mixed with a quarter cup of shredded carrots, 1 tbsp dill relish, 1 cup sliced tomato, half a medium apple. Total carbs: Approximately 40. `
    },
    {
        id: 9,
        title: "Wednesday",
        category: "Dinner",
        price: 16.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `Half a cup (50g) succotash, 1 tsp butter, 2 oz pork tenderloin, 1 cup cooked asparagus, half a cup fresh pineapple. Total carbs: Approximately 34.`
    },
    {
        id: 10,
        title: "Thursday",
        category: "breakfast",
        price: 8.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: ` Two-egg veggie omelet (spinach, mushrooms, bell pepper, avocado) with a half cup black beans, three-quarters cup blueberries. Total carbs: Approximately 34.`
    },
    {
        id: 11,
        title: "Thursday",
        category: "lunch",
        price: 12.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `Sandwich: two regular slices high-fiber whole grain bread, 1 tbsp plain, no-fat Greek yogurt and 1 tbsp mustard, 2 oz canned tuna in water mixed with a quarter cup of shredded carrots, 1 tbsp dill relish, 1 cup sliced tomato, half a medium apple. Total carbs: Approximately 40. `
    },
    {
        id: 12,
        title: "Thursday",
        category: "Dinner",
        price: 16.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `Half a cup (50g) succotash, 1 tsp butter, 2 oz pork tenderloin, 1 cup cooked asparagus, half a cup fresh pineapple. Total carbs: Approximately 34.`
    },
    {
        id: 13,
        title: "Friday",
        category: "breakfast",
        price: 8.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: `A one-third cup of Grape-Nuts (or similar high-fiber cereal), half a cup blueberries, 1 cup unsweetened almond milk. Total carbs: Approximately 41.`
    },
    {
        id: 14,
        title: "Friday",
        category: "lunch",
        price: 12.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `Salad: 2 cups spinach, a quarter cup tomatoes, 1 oz cheddar cheese, one boiled chopped egg, 2 tbsp yogurt dressing, a quarter cup grapes, 1 tsp pumpkin seeds, 2 oz roasted chickpeas. Total carbs: Approximately 47.`
    },
    {
        id: 15,
        title: "Friday",
        category: "Dinner",
        price: 16.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `2 oz salmon filet, one medium baked potato, 1 tsp butter, 1.5 cups steamed asparagus. Total carbs: Approximately 39.`
    },
    {
        id: 16,
        title: "Saturday",
        category: "breakfast",
        price: 8.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: ` 1 cup low-fat plain Greek yogurt sweetened with half a banana mashed, 1 cup strawberries, 1 tbsp chia seeds. Total carbs: Approximately 32.`
    },
    {
        id: 17,
        title: "Saturday",
        category: "lunch",
        price: 12.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `Tacos: two corn tortillas, a one-third cup cooked black beans, 1 oz low-fat cheese, 2 tbsp avocado, 1 cup coleslaw, salsa as dressing. Total carbs: Approximately 70.`
    },
    {
        id: 18,
        title: "Saturday",
        category: "Dinner",
        price: 16.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: `Half medium baked potato with skin, 2 oz broiled beef, 1 tsp butter, 1.5 cups steamed broccoli with 1 tsp nutritional yeast sprinkled on top, three-quarters cup whole strawberries. Total carbs: Approximately 41.`
    },
    {
        id: 19,
        title: "Sunday",
        category: "breakfast",
        price: 8.99,
        img: "https://images.medicinenet.com/images/article/main_image/type-1-diabetes-diet.jpg",
        desc: ` Chocolate peanut oatmeal: 1 cup cooked oatmeal, 1 scoop chocolate vegan or whey protein powder, 1 tbsp peanut butter, 1 tbsp chia seeds. Total carbs: Approximately 21.`
    },
    {
        id: 20,
        title: "Sunday",
        category: "lunch",
        price: 12.99,
        img: "https://images.medicinenet.com/images/article/main_image/diabetes-diet.jpg",
        desc: `One small whole wheat pita pocket, half a cup cucumber, half a cup tomatoes, half a cup lentils, half a cup leafy greens, 2 tbsp salad dressing. Total carbs: Approximately 30. `
    },
    {
        id: 21,
        title: "Sunday",
        category: "Dinner",
        price: 16.99,
        img: "https://www.pristyncare.com/blog/wp-content/uploads/2020/04/Ideal-Indian-Diet-for-Diabetes.jpg",
        desc: ` 2 oz boiled shrimp, 1 cup green peas, 1 tsp butter, half a cup cooked beets, 1 cup sauteed Swiss chard, 1 tsp balsamic vinegar. Total carbs: Approximately 39.`
    },

];

export default menu;
