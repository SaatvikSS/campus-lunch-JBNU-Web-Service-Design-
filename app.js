// Hardcoded menu data to allow opening index.html directly from the file system
const menuData = [
  {
    "day": "Monday",
    "name": "Bibimbap",
    "price": 6500,
    "vegetarian": true,
    "description": "Rice, vegetables, and gochujang."
  },
  {
    "day": "Monday",
    "name": "Chicken rice",
    "price": 7000,
    "vegetarian": false,
    "description": "Grilled chicken with steamed rice."
  },
  {
    "day": "Monday",
    "name": "Tofu bowl",
    "price": 6000,
    "vegetarian": true,
    "description": "Tofu, greens, and sesame dressing."
  },
  {
    "day": "Tuesday",
    "name": "Mushroom pasta",
    "price": 7500,
    "vegetarian": true,
    "description": "Pasta with mushrooms and herbs."
  },
  {
    "day": "Tuesday",
    "name": "Beef noodles",
    "price": 8000,
    "vegetarian": false,
    "description": "Noodles with beef and vegetables."
  },
  {
    "day": "Tuesday",
    "name": "Lentil soup",
    "price": 5500,
    "vegetarian": true,
    "description": "Lentils with bread on the side."
  },
  {
    "day": "Wednesday",
    "name": "Fish rice",
    "price": 7500,
    "vegetarian": false,
    "description": "Fish with rice and seasonal greens."
  },
  {
    "day": "Wednesday",
    "name": "Pork cutlet",
    "price": 8000,
    "vegetarian": false,
    "description": "Breaded pork with cabbage salad."
  },
  {
    "day": "Wednesday",
    "name": "Chicken noodles",
    "price": 7000,
    "vegetarian": false,
    "description": "Chicken and noodles in broth."
  }
];

// Formats price into "KRW 6,500" format
function formatPrice(price) {
  return `KRW ${new Intl.NumberFormat('en-US').format(price)}`;
}

// Renders meals for a specific day
function renderMeals(day) {
  const container = document.getElementById('menu-container');
  const mealSummary = document.getElementById('meal-summary');
  const headerDesc = document.getElementById('header-description');
  container.innerHTML = ''; // Clear container

  const meals = menuData.filter(meal => meal.day === day);
  
  if (mealSummary) {
    mealSummary.innerHTML = `${day} &middot; ${meals.length} meal${meals.length !== 1 ? 's' : ''}`;
  }
  
  if (headerDesc) {
    headerDesc.textContent = `${day}'s menu, all in one place.`;
  }

  if (meals.length === 0) {
    container.innerHTML = '<p class="empty-message">No meals available for this day.</p>';
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement('article');
    card.className = 'meal-card';

    const dietaryText = meal.vegetarian ? 'VEGETARIAN' : 'CONTAINS MEAT OR FISH';

    card.innerHTML = `
      <div class="dietary-label">${dietaryText}</div>
      <h2 class="meal-name">${meal.name}</h2>
      <p class="meal-description">${meal.description}</p>
      <div class="meal-price">${formatPrice(meal.price)}</div>
    `;

    container.appendChild(card);
  });
}

// Initialize and set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  const daySelect = document.getElementById('day-select');
  
  if (daySelect) {
    daySelect.value = 'Monday'; // Default to Monday
    daySelect.addEventListener('change', (e) => {
      renderMeals(e.target.value);
    });
  }

  renderMeals('Monday');
});
