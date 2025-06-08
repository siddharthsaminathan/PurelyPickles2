// Recipe data with all ingredients and costs
let recipes = {
    'mango-thokku': {
        name: 'Mango Thokku',
        batchSize: 1000,
        // Realistic jar yields based on mango thokku density and consistency
        jarYields: {
            '100g': 13,  // Slightly chunky texture, moderate density
            '250g': 5,   // Good for family size portions
            '300g': 4    // Bulk packaging option
        },
        ingredients: [
            { name: 'Crushed salt', quantity: 100, unit: 'g', pricePerGram: 0.044, cost: 4.40 },
            { name: 'Chilli powder', quantity: 75, unit: 'g', pricePerGram: 0.50, cost: 37.50 },
            { name: 'Fenugreek powder', quantity: 5, unit: 'g', pricePerGram: 0.12, cost: 0.60 },
            { name: 'Mustard seed powder', quantity: 10, unit: 'g', pricePerGram: 0.30, cost: 3.00 },
            { name: 'Asafoetida', quantity: 5, unit: 'g', pricePerGram: 1.38, cost: 6.90 },
            { name: 'Turmeric powder', quantity: 10, unit: 'g', pricePerGram: 0.46, cost: 4.60 },
            { name: 'Gingelly oil', quantity: 400, unit: 'g', pricePerGram: 0.376, cost: 150.40 },
            { name: 'Sodium benzoate', quantity: 10, unit: 'g', pricePerGram: 1.60, cost: 16.00 },
            { name: 'Mustard seeds', quantity: 10, unit: 'g', pricePerGram: 0.107, cost: 1.07 }
        ],
        totalIngredientsCost: 224.47,
        laborCost: 120.00,
        totalCost: 344.47
    },
    'avakkai': {
        name: 'Avakkai Pickle',
        batchSize: 5000,
        // Avakkai has chunky mango pieces with oil, takes more space
        jarYields: {
            '100g': 55,  // Chunky pieces with oil, less dense packing
            '250g': 20,  // Traditional family size
            '300g': 17   // Bulk size for avakkai lovers
        },
        ingredients: [
            { name: 'Cut mango', quantity: 5000, unit: 'g', pricePerGram: 0, cost: 0 },
            { name: 'Salt', quantity: 1500, unit: 'g', pricePerGram: 0.044, cost: 66.00 },
            { name: 'Chilli powder', quantity: 1500, unit: 'g', pricePerGram: 0.50, cost: 750.00 },
            { name: 'Fenugreek powder', quantity: 250, unit: 'g', pricePerGram: 0.12, cost: 30.00 },
            { name: 'Mustard powder', quantity: 1000, unit: 'g', pricePerGram: 0.30, cost: 300.00 },
            { name: 'Dry red chillies', quantity: 40, unit: 'g', pricePerGram: 0.51, cost: 20.40 },
            { name: 'Turmeric powder', quantity: 50, unit: 'g', pricePerGram: 0.46, cost: 23.00 },
            { name: 'Gingelly oil', quantity: 2000, unit: 'g', pricePerGram: 0.376, cost: 752.00 }
        ],
        totalIngredientsCost: 1941.40,
        laborCost: 600.00,
        totalCost: 2541.40
    },
    'lemon': {
        name: 'Lemon Pickle',
        batchSize: 1000,
        // Lemon pickle has pieces with oil, moderate density
        jarYields: {
            '100g': 12,  // Lemon pieces with spices and oil
            '250g': 4,   // Good portion size for lemon pickle
            '300g': 3    // Family size portions
        },
        ingredients: [
            { name: 'Lemon (loose)', quantity: 1000, unit: 'g', pricePerGram: 0.106, cost: 106.00 },
            { name: 'Salt', quantity: 250, unit: 'g', pricePerGram: 0.044, cost: 11.00 },
            { name: 'Green chillies', quantity: 5, unit: 'pcs', pricePerGram: 0.075, cost: 1.50 },
            { name: 'Ginger (fresh)', quantity: 50, unit: 'g', pricePerGram: 0.094, cost: 4.70 },
            { name: 'Chilli powder', quantity: 100, unit: 'g', pricePerGram: 0.50, cost: 50.00 },
            { name: 'Turmeric powder', quantity: 10, unit: 'g', pricePerGram: 0.46, cost: 4.60 },
            { name: 'Gingelly oil', quantity: 200, unit: 'g', pricePerGram: 0.376, cost: 75.20 },
            { name: 'Mustard seeds', quantity: 40, unit: 'g', pricePerGram: 0.107, cost: 4.28 },
            { name: 'Fenugreek powder', quantity: 10, unit: 'g', pricePerGram: 0.12, cost: 1.20 },
            { name: 'Asafoetida', quantity: 5, unit: 'g', pricePerGram: 1.38, cost: 6.90 }
        ],
        totalIngredientsCost: 264.38,
        laborCost: 120.00,
        totalCost: 384.38
    },
    'amla': {
        name: 'Amla Pickle',
        batchSize: 1000,
        // Amla pieces are dense and compact well
        jarYields: {
            '100g': 14,  // Dense amla pieces pack well
            '250g': 5,   // Good for regular consumption
            '300g': 4    // Family portions
        },
        ingredients: [
            { name: 'Amla (gooseberry)', quantity: 1000, unit: 'g', pricePerGram: 0.145, cost: 145.00 },
            { name: 'Gingelly oil', quantity: 350, unit: 'g', pricePerGram: 0.376, cost: 131.60 },
            { name: 'Chilli powder', quantity: 100, unit: 'g', pricePerGram: 0.50, cost: 50.00 },
            { name: 'Mustard seeds', quantity: 25, unit: 'g', pricePerGram: 0.107, cost: 2.68 },
            { name: 'Turmeric powder', quantity: 10, unit: 'g', pricePerGram: 0.46, cost: 4.60 },
            { name: 'Salt', quantity: 110, unit: 'g', pricePerGram: 0.044, cost: 4.84 },
            { name: 'Lemon juice', quantity: 250, unit: 'ml', pricePerGram: 0.106, cost: 26.50 },
            { name: 'Tamarind pulp', quantity: 100, unit: 'g', pricePerGram: 0.355, cost: 35.50 },
            { name: 'Mustard powder', quantity: 10, unit: 'g', pricePerGram: 0.30, cost: 3.00 },
            { name: 'Fenugreek powder', quantity: 10, unit: 'g', pricePerGram: 0.12, cost: 1.20 },
            { name: 'Asafoetida', quantity: 10, unit: 'g', pricePerGram: 1.38, cost: 13.80 },
            { name: 'Vinegar', quantity: 30, unit: 'g', pricePerGram: 0.076, cost: 2.28 }
        ],
        totalIngredientsCost: 421.92,
        laborCost: 120.00,
        totalCost: 541.92
    },
    'tomato-thokku': {
        name: 'Tomato Thokku',
        batchSize: 1000,
        // Tomato thokku is thick and dense, packs well
        jarYields: {
            '100g': 13,  // Thick consistency, good packing
            '250g': 5,   // Popular size for tomato thokku
            '300g': 4    // Bulk family size
        },
        ingredients: [
            { name: 'Tomato (local)', quantity: 1000, unit: 'g', pricePerGram: 0.040, cost: 40.00 },
            { name: 'Gingelly oil', quantity: 250, unit: 'g', pricePerGram: 0.376, cost: 94.00 },
            { name: 'Mustard seeds', quantity: 25, unit: 'g', pricePerGram: 0.107, cost: 2.68 },
            { name: 'Asafoetida', quantity: 10, unit: 'g', pricePerGram: 1.38, cost: 13.80 },
            { name: 'Tamarind pulp', quantity: 100, unit: 'g', pricePerGram: 0.355, cost: 35.50 },
            { name: 'Chilli powder', quantity: 50, unit: 'g', pricePerGram: 0.50, cost: 25.00 },
            { name: 'Turmeric powder', quantity: 10, unit: 'g', pricePerGram: 0.46, cost: 4.60 },
            { name: 'Salt', quantity: 100, unit: 'g', pricePerGram: 0.044, cost: 4.40 },
            { name: 'Mustard powder', quantity: 25, unit: 'g', pricePerGram: 0.30, cost: 7.50 },
            { name: 'Fenugreek powder', quantity: 10, unit: 'g', pricePerGram: 0.12, cost: 1.20 },
            { name: 'Vinegar', quantity: 30, unit: 'g', pricePerGram: 0.076, cost: 2.28 },
            { name: 'Sodium benzoate', quantity: 5, unit: 'g', pricePerGram: 1.60, cost: 8.00 }
        ],
        totalIngredientsCost: 238.96,
        laborCost: 120.00,
        totalCost: 358.96
    },
    'coriander-thokku': {
        name: 'Coriander Thokku',
        batchSize: 1000,
        // Real-world jar yields based on grandmother's experience
        jarYields: {
            '100g': 15,  // Can fill 15 x 100g jars from 1000g
            '250g': 6,   // Can fill 6 x 250g jars from 1000g  
            '300g': 10   // Can fill 10 x 300g jars from 1000g (grandmother's fact)
        },
        ingredients: [
            { name: 'Coriander (leaves)', quantity: 600, unit: 'g', pricePerGram: 0.113, cost: 67.80 },
            { name: 'Tamarind pulp', quantity: 190, unit: 'g', pricePerGram: 0.355, cost: 67.45 },
            { name: 'Salt', quantity: 120, unit: 'g', pricePerGram: 0.044, cost: 5.28 },
            { name: 'Gingelly oil', quantity: 300, unit: 'g', pricePerGram: 0.376, cost: 112.80 },
            { name: 'Dry red chillies', quantity: 150, unit: 'g', pricePerGram: 0.51, cost: 76.50 },
            { name: 'Mustard seeds', quantity: 25, unit: 'g', pricePerGram: 0.107, cost: 2.68 },
            { name: 'Asafoetida', quantity: 5, unit: 'g', pricePerGram: 1.38, cost: 6.90 },
            { name: 'Mustard powder', quantity: 25, unit: 'g', pricePerGram: 0.30, cost: 7.50 },
            { name: 'Fenugreek powder', quantity: 25, unit: 'g', pricePerGram: 0.12, cost: 3.00 },
            { name: 'Jaggery', quantity: 25, unit: 'g', pricePerGram: 0.085, cost: 2.13 },
            { name: 'Sodium benzoate', quantity: 5, unit: 'g', pricePerGram: 1.60, cost: 8.00 }
        ],
        totalIngredientsCost: 358.03,
        laborCost: 120.00,
        totalCost: 478.03
    }
};

// Packaging costs - now editable
let packaging = {
    jar100g: 15.00,
    jar250g: 20.00,
    labor100g: 12.00,
    labor250g: 30.00,
    laborPerKg: 120.00
};

// Load data from localStorage if available
function loadStoredData() {
    const storedRecipes = localStorage.getItem('pickleRecipes');
    const storedPackaging = localStorage.getItem('picklePackaging');
    
    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
    }
    
    if (storedPackaging) {
        packaging = JSON.parse(storedPackaging);
        updateSettingsDisplay();
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('pickleRecipes', JSON.stringify(recipes));
    localStorage.setItem('picklePackaging', JSON.stringify(packaging));
}

// Update settings display
function updateSettingsDisplay() {
    document.getElementById('labor-cost-setting').value = packaging.laborPerKg;
    document.getElementById('packaging-100g').value = packaging.jar100g;
    document.getElementById('packaging-250g').value = packaging.jar250g;
}

// Current recipe data and batch size
let currentRecipe = null;
let currentBatchSize = null;

// Tab functionality
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Initialize specific tab content
    if (tabId === 'inventory-tracker') {
        initializeInventory();
    } else if (tabId === 'recipe-manager') {
        displayRecipeManager();
    } else if (tabId === 'settings') {
        updateSettingsDisplay();
    }
}

// Load recipe data and display
function loadRecipe() {
    const recipeSelect = document.getElementById('recipe-select');
    const selectedRecipe = recipeSelect.value;
    
    if (!selectedRecipe) {
        document.getElementById('recipe-details').style.display = 'none';
        document.getElementById('batch-size-selector').style.display = 'none';
        return;
    }
    
    currentRecipe = { ...recipes[selectedRecipe] }; // Create a copy
    currentBatchSize = currentRecipe.batchSize; // Set default batch size
    
    // Show batch size selector
    document.getElementById('batch-size-selector').style.display = 'block';
    document.getElementById('custom-batch-size').value = currentBatchSize;
    
    displayRecipeDetails();
    document.getElementById('recipe-details').style.display = 'block';
    
    // Update dropdown to show current batch size
    updateRecipeDropdownText();
}

// NEW FUNCTION: Update just the selected option text
function updateRecipeDropdownText() {
    const recipeSelect = document.getElementById('recipe-select');
    const selectedRecipe = recipeSelect.value;
    
    if (selectedRecipe && currentRecipe) {
        // Update the selected option text to show current batch size
        const selectedOption = recipeSelect.options[recipeSelect.selectedIndex];
        selectedOption.text = `${currentRecipe.name} (${currentBatchSize}g)`;
    }
}

// Update batch size based on user input
function updateBatchSize() {
    const customBatchSize = parseInt(document.getElementById('custom-batch-size').value);
    if (customBatchSize && customBatchSize >= 100) {
        setBatchSize(customBatchSize);
    }
}

// Set batch size and recalculate ingredients
function setBatchSize(newBatchSize) {
    if (!currentRecipe) return;
    
    currentBatchSize = newBatchSize;
    document.getElementById('custom-batch-size').value = newBatchSize;
    
    // Calculate scaling factor based on ORIGINAL recipe batch size
    const originalRecipe = recipes[document.getElementById('recipe-select').value];
    const scaleFactor = newBatchSize / originalRecipe.batchSize;
    
    // Scale all ingredients from original recipe
    currentRecipe.ingredients = originalRecipe.ingredients.map(ingredient => ({
        ...ingredient,
        quantity: ingredient.quantity * scaleFactor,
        cost: ingredient.quantity * scaleFactor * ingredient.pricePerGram
    }));
    
    // Recalculate totals
    currentRecipe.totalIngredientsCost = currentRecipe.ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);
    currentRecipe.laborCost = (newBatchSize / 1000) * packaging.laborPerKg;
    currentRecipe.totalCost = currentRecipe.totalIngredientsCost + currentRecipe.laborCost;
    currentRecipe.batchSize = newBatchSize;
    
    // Update dropdown text to show new batch size
    updateRecipeDropdownText();
    
    // Refresh display
    displayRecipeDetails();
}

// Display recipe details
function displayRecipeDetails() {
    if (!currentRecipe) return;
    
    // Display ingredients table
    displayIngredientsTable();
    
    // Update cost summary
    updateCostSummary();
    
    // Update jar costing
    updateJarCosting();
}

// Display ingredients in table format
function displayIngredientsTable() {
    const tableContainer = document.getElementById('ingredients-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Price per gram (₹)</th>
                    <th>Cost (₹)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    currentRecipe.ingredients.forEach(ingredient => {
        tableHTML += `
            <tr>
                <td>${ingredient.name}</td>
                <td>${ingredient.quantity}</td>
                <td>${ingredient.unit}</td>
                <td>${ingredient.pricePerGram.toFixed(3)}</td>
                <td>₹${ingredient.cost.toFixed(2)}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

// Update cost summary with dynamic labor cost label
function updateCostSummary() {
    document.getElementById('total-ingredients').textContent = `₹${currentRecipe.totalIngredientsCost.toFixed(2)}`;
    document.getElementById('labor-cost').textContent = `₹${currentRecipe.laborCost.toFixed(2)}`;
    document.getElementById('total-cost-before-packaging').textContent = `₹${currentRecipe.totalCost.toFixed(2)}`;
    
    // Update labor cost label dynamically
    const laborCostLabel = document.getElementById('labor-cost-label');
    if (laborCostLabel) {
        laborCostLabel.textContent = `Labor Cost (₹${packaging.laborPerKg}/kg):`;
    }
}

// Update jar costing with REAL jar yields based on grandmother's experience
function updateJarCosting() {
    const recipeKey = document.getElementById('recipe-select').value;
    if (!recipeKey || !currentRecipe) return;
    
    const originalRecipe = recipes[recipeKey];
    
    // Get jar yields - use from original recipe or calculate based on scaling
    let jarYields = originalRecipe.jarYields || {
        '100g': Math.floor(currentBatchSize / 100),
        '250g': Math.floor(currentBatchSize / 250)
    };
    
    // Scale jar yields if batch size is different from original
    if (currentBatchSize !== originalRecipe.batchSize) {
        const scaleFactor = currentBatchSize / originalRecipe.batchSize;
        jarYields = {
            '100g': Math.floor((originalRecipe.jarYields?.['100g'] || 10) * scaleFactor),
            '250g': Math.floor((originalRecipe.jarYields?.['250g'] || 4) * scaleFactor),
            '300g': Math.floor((originalRecipe.jarYields?.['300g'] || 3) * scaleFactor)
        };
    }
    
    // Calculate cost per jar based on ACTUAL yields (not theoretical division)
    const costPer100gJar = currentRecipe.totalIngredientsCost / jarYields['100g'];
    const costPer250gJar = currentRecipe.totalIngredientsCost / jarYields['250g'];
    
    // Calculate dynamic labor costs for jars
    const labor100g = packaging.labor100g;
    const labor250g = packaging.labor250g;
    
    // 100g jar costs
    const jar100gTotal = costPer100gJar + labor100g + packaging.jar100g;
    document.getElementById('jar-100-ingredients').textContent = `₹${costPer100gJar.toFixed(2)}`;
    document.getElementById('jar-100-labor').textContent = `₹${labor100g.toFixed(2)}`;
    document.getElementById('jar-100-packaging').textContent = `₹${packaging.jar100g.toFixed(2)}`;
    document.getElementById('jar-100-total').textContent = `₹${jar100gTotal.toFixed(2)}`;
    
    // 250g jar costs
    const jar250gTotal = costPer250gJar + labor250g + packaging.jar250g;
    document.getElementById('jar-250-ingredients').textContent = `₹${costPer250gJar.toFixed(2)}`;
    document.getElementById('jar-250-labor').textContent = `₹${labor250g.toFixed(2)}`;
    document.getElementById('jar-250-packaging').textContent = `₹${packaging.jar250g.toFixed(2)}`;
    document.getElementById('jar-250-total').textContent = `₹${jar250gTotal.toFixed(2)}`;
    
    // Show jar yield information
    const jarYieldInfo = document.getElementById('jar-yield-info');
    if (jarYieldInfo) {
        jarYieldInfo.innerHTML = `
            <div class="jar-yields">
                <h4>Expected Jar Yields from ${currentBatchSize}g batch:</h4>
                <p><strong>100g jars:</strong> ${jarYields['100g']} jars</p>
                <p><strong>250g jars:</strong> ${jarYields['250g']} jars</p>
                ${jarYields['300g'] ? `<p><strong>300g jars:</strong> ${jarYields['300g']} jars</p>` : ''}
            </div>
        `;
    }
}

// Profit analyzer functions
function loadProfitData() {
    const recipeSelect = document.getElementById('batch-recipe');
    const selectedRecipe = recipeSelect.value;
    
    if (selectedRecipe) {
        calculateProfits();
    }
}

function calculateProfits() {
    const recipeSelect = document.getElementById('batch-recipe');
    const jarMix = document.getElementById('jar-mix').value;
    const totalJars = parseInt(document.getElementById('total-jars').value) || 1000;
    
    const selectedRecipe = recipeSelect.value;
    if (!selectedRecipe) return;
    
    const recipe = recipes[selectedRecipe];
    const [ratio100, ratio250] = jarMix.split(':').map(Number);
    
    const jars100g = Math.floor(totalJars * (ratio100 / 100));
    const jars250g = totalJars - jars100g;
    
    // Calculate costs per jar
    const ingredientsPer100g = (recipe.totalIngredientsCost / recipe.batchSize) * 100;
    const ingredientsPer250g = (recipe.totalIngredientsCost / recipe.batchSize) * 250;
    
    const cost100g = ingredientsPer100g + packaging.labor100g + packaging.jar100g;
    const cost250g = ingredientsPer250g + packaging.labor250g + packaging.jar250g;
    
    // Generate profit table
    generateProfitTable(cost100g, cost250g, jars100g, jars250g);
}

function generateProfitTable(cost100g, cost250g, jars100g, jars250g) {
    const margins = [40, 50, 60, 70];
    const tableContainer = document.getElementById('margin-table');
    
    // Determine which jar sizes to show based on mix
    const show100g = jars100g > 0;
    const show250g = jars250g > 0;
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Margin %</th>`;
    
    // Only show columns for relevant jar sizes
    if (show100g) {
        tableHTML += `<th>100g Price</th>`;
    }
    if (show250g) {
        tableHTML += `<th>250g Price</th>`;
    }
    
    tableHTML += `
                    <th>Total Revenue</th>
                    <th>Total Cost</th>
                    <th>Total Profit</th>
                    <th>Profit Margin</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    margins.forEach(margin => {
        const multiplier = 1 + (margin / 100);
        const price100g = cost100g * multiplier;
        const price250g = cost250g * multiplier;
        
        const revenue100g = price100g * jars100g;
        const revenue250g = price250g * jars250g;
        const totalRevenue = revenue100g + revenue250g;
        
        const totalCost = (cost100g * jars100g) + (cost250g * jars250g);
        const totalProfit = totalRevenue - totalCost;
        const profitMargin = ((totalProfit / totalRevenue) * 100);
        
        tableHTML += `
            <tr>
                <td>${margin}%</td>`;
        
        // Only show prices for relevant jar sizes
        if (show100g) {
            tableHTML += `<td>₹${price100g.toFixed(2)} (${jars100g} jars)</td>`;
        }
        if (show250g) {
            tableHTML += `<td>₹${price250g.toFixed(2)} (${jars250g} jars)</td>`;
        }
        
        tableHTML += `
                <td>₹${totalRevenue.toFixed(2)}</td>
                <td>₹${totalCost.toFixed(2)}</td>
                <td>₹${totalProfit.toFixed(2)}</td>
                <td>${profitMargin.toFixed(1)}%</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
        
        <div class="jar-summary">
            <h5>Jar Breakdown:</h5>
            <p>`;
    
    if (show100g && show250g) {
        tableHTML += `${jars100g} × 100g jars + ${jars250g} × 250g jars = ${jars100g + jars250g} total jars`;
    } else if (show100g) {
        tableHTML += `${jars100g} × 100g jars only`;
    } else if (show250g) {
        tableHTML += `${jars250g} × 250g jars only`;
    }
    
    tableHTML += `</p>
        </div>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

// Inventory tracking
let inventoryData = [];

function initializeInventory() {
    if (inventoryData.length === 0) {
        // Initialize with common ingredients
        const commonIngredients = [
            { name: 'Crushed Salt', unit: '1 kg', unitPrice: 44.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Chilli Powder', unit: '100 g', unitPrice: 20.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Fenugreek Powder', unit: '50 g', unitPrice: 5.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Mustard Powder', unit: '100 g', unitPrice: 30.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Asafoetida', unit: '50 g', unitPrice: 69.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Turmeric Powder', unit: '100 g', unitPrice: 46.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Gingelly Oil', unit: '1 L', unitPrice: 376.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Mustard Seeds', unit: '1 kg', unitPrice: 107.00, opening: 0, purchased: 0, used: 0 }
        ];
        
        inventoryData = [...commonIngredients];
    }
    
    displayInventoryTable();
}

function displayInventoryTable() {
    const tableContainer = document.getElementById('inventory-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Unit</th>
                    <th>Unit Price (₹)</th>
                    <th>Opening Stock</th>
                    <th>Purchased</th>
                    <th>Total Stock</th>
                    <th>Used</th>
                    <th>Closing Stock</th>
                    <th>Value (₹)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    inventoryData.forEach((item, index) => {
        const totalStock = item.opening + item.purchased;
        const closingStock = totalStock - item.used;
        const value = closingStock * item.unitPrice;
        
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.unit}</td>
                <td><input type="number" value="${item.unitPrice}" onchange="updateInventoryItem(${index}, 'unitPrice', this.value)" step="0.01"></td>
                <td><input type="number" value="${item.opening}" onchange="updateInventoryItem(${index}, 'opening', this.value)"></td>
                <td><input type="number" value="${item.purchased}" onchange="updateInventoryItem(${index}, 'purchased', this.value)"></td>
                <td>${totalStock}</td>
                <td><input type="number" value="${item.used}" onchange="updateInventoryItem(${index}, 'used', this.value)"></td>
                <td>${closingStock}</td>
                <td>₹${value.toFixed(2)}</td>
                <td><button onclick="removeInventoryItem(${index})" class="btn btn-secondary">Remove</button></td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

function updateInventoryItem(index, field, value) {
    inventoryData[index][field] = parseFloat(value) || 0;
    displayInventoryTable();
}

function removeInventoryItem(index) {
    inventoryData.splice(index, 1);
    displayInventoryTable();
}

function addIngredient() {
    const name = prompt('Enter ingredient name:');
    if (name) {
        const unit = prompt('Enter unit (e.g., 1 kg, 100 g):') || '100 g';
        const unitPrice = parseFloat(prompt('Enter unit price (₹):')) || 0;
        
        inventoryData.push({
            name: name,
            unit: unit,
            unitPrice: unitPrice,
            opening: 0,
            purchased: 0,
            used: 0
        });
        
        displayInventoryTable();
    }
}

function exportInventory() {
    let csvContent = "Ingredient,Unit,Unit Price (₹),Opening Stock,Purchased,Total Stock,Used,Closing Stock,Value (₹)\n";
    
    inventoryData.forEach(item => {
        const totalStock = item.opening + item.purchased;
        const closingStock = totalStock - item.used;
        const value = closingStock * item.unitPrice;
        
        csvContent += `${item.name},${item.unit},${item.unitPrice},${item.opening},${item.purchased},${totalStock},${item.used},${closingStock},${value.toFixed(2)}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory_report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Currency formatting helper
function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load stored data
    loadStoredData();
    
    // Set default tab
    showTab('cost-calculator');
    
    // Initialize inventory for the first time
    initializeInventory();
});

// Recipe Manager Functions
function displayRecipeManager() {
    const tableContainer = document.getElementById('recipe-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Recipe Name</th>
                    <th>Batch Size (g)</th>
                    <th>Ingredients Count</th>
                    <th>Total Cost (₹)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(recipes).forEach(recipeKey => {
        const recipe = recipes[recipeKey];
        tableHTML += `
            <tr>
                <td>${recipe.name}</td>
                <td>${recipe.batchSize}</td>
                <td>${recipe.ingredients.length}</td>
                <td>₹${recipe.totalCost.toFixed(2)}</td>
                <td>
                    <button onclick="editRecipe('${recipeKey}')" class="btn btn-primary">Edit</button>
                    <button onclick="deleteRecipe('${recipeKey}')" class="btn btn-secondary">Delete</button>
                </td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

function addRecipe() {
    const recipeName = prompt('Enter recipe name:');
    if (!recipeName) return;
    
    const batchSize = parseInt(prompt('Enter batch size (grams):')) || 1000;
    const recipeKey = recipeName.toLowerCase().replace(/\s+/g, '-');
    
    recipes[recipeKey] = {
        name: recipeName,
        batchSize: batchSize,
        ingredients: [],
        totalIngredientsCost: 0,
        laborCost: (batchSize / 1000) * packaging.laborPerKg,
        totalCost: 0
    };
    
    saveData();
    updateRecipeDropdowns();
    displayRecipeManager();
    editRecipe(recipeKey);
}

function editRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (!recipe) return;
    
    // Set the editing recipe variable immediately
    editingRecipe = recipe;
    
    // Create a modal-like interface for editing
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Edit Recipe: ${recipe.name}</h3>
            <div class="recipe-form">
                <label>Recipe Name:</label>
                <input type="text" id="edit-recipe-name" value="${recipe.name}">
                
                <label>Batch Size (g):</label>
                <input type="number" id="edit-batch-size" value="${recipe.batchSize}">
                
                <h4>Ingredients</h4>
                <div id="edit-ingredients"></div>
                
                <button onclick="addIngredientToRecipe()" class="btn btn-primary">Add Ingredient</button>
                <div class="modal-actions">
                    <button onclick="saveRecipe('${recipeKey}')" class="btn btn-primary">Save</button>
                    <button onclick="closeRecipeModal()" class="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    displayRecipeIngredients(recipe);
}

function displayRecipeIngredients(recipe) {
    const container = document.getElementById('edit-ingredients');
    
    let ingredientsHTML = `
        <div class="ingredient-header">
            <span class="field-label">Ingredient Name</span>
            <span class="field-label">Quantity</span>
            <span class="field-label">Unit (g/ml/pcs)</span>
            <span class="field-label">Price per Unit (₹)</span>
            <span class="field-label">Total Cost (₹)</span>
            <span class="field-label">Action</span>
        </div>
    `;
    
    recipe.ingredients.forEach((ingredient, index) => {
        ingredientsHTML += `
            <div class="ingredient-row">
                <input type="text" placeholder="e.g. Chilli Powder" value="${ingredient.name}" onchange="updateRecipeIngredient(${index}, 'name', this.value)" class="ingredient-name">
                <input type="number" placeholder="100" value="${ingredient.quantity}" onchange="updateRecipeIngredient(${index}, 'quantity', this.value)" class="ingredient-quantity">
                <select onchange="updateRecipeIngredient(${index}, 'unit', this.value)" class="ingredient-unit">
                    <option value="g" ${ingredient.unit === 'g' ? 'selected' : ''}>grams (g)</option>
                    <option value="ml" ${ingredient.unit === 'ml' ? 'selected' : ''}>milliliters (ml)</option>
                    <option value="pcs" ${ingredient.unit === 'pcs' ? 'selected' : ''}>pieces (pcs)</option>
                    <option value="kg" ${ingredient.unit === 'kg' ? 'selected' : ''}>kilograms (kg)</option>
                </select>
                <input type="number" placeholder="0.50" value="${ingredient.pricePerGram}" step="0.001" onchange="updateRecipeIngredient(${index}, 'pricePerGram', this.value)" class="ingredient-price">
                <span class="ingredient-cost">₹${ingredient.cost.toFixed(2)}</span>
                <button onclick="removeRecipeIngredient(${index})" class="btn btn-remove">Remove</button>
            </div>
        `;
    });
    
    container.innerHTML = ingredientsHTML;
}

let editingRecipe = null;

function updateRecipeIngredient(index, field, value) {
    if (!editingRecipe) return;
    
    editingRecipe.ingredients[index][field] = field === 'pricePerGram' || field === 'quantity' ? parseFloat(value) || 0 : value;
    
    // Recalculate cost
    const ingredient = editingRecipe.ingredients[index];
    ingredient.cost = ingredient.quantity * ingredient.pricePerGram;
    
    displayRecipeIngredients(editingRecipe);
}

function addIngredientToRecipe() {
    if (!editingRecipe) return;
    
    editingRecipe.ingredients.push({
        name: '',
        quantity: 0,
        unit: 'g',
        pricePerGram: 0,
        cost: 0
    });
    
    displayRecipeIngredients(editingRecipe);
}

function removeRecipeIngredient(index) {
    if (!editingRecipe) return;
    
    editingRecipe.ingredients.splice(index, 1);
    displayRecipeIngredients(editingRecipe);
}

function saveRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    editingRecipe = recipe;
    
    recipe.name = document.getElementById('edit-recipe-name').value;
    recipe.batchSize = parseInt(document.getElementById('edit-batch-size').value) || 1000;
    
    // Recalculate totals
    recipe.totalIngredientsCost = recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);
    recipe.laborCost = (recipe.batchSize / 1000) * packaging.laborPerKg;
    recipe.totalCost = recipe.totalIngredientsCost + recipe.laborCost;
    
    saveData();
    updateRecipeDropdowns();
    displayRecipeManager();
    closeRecipeModal();
    editingRecipe = null;
}

function deleteRecipe(recipeKey) {
    if (confirm(`Are you sure you want to delete ${recipes[recipeKey].name}?`)) {
        delete recipes[recipeKey];
        saveData();
        updateRecipeDropdowns();
        displayRecipeManager();
    }
}

function closeRecipeModal() {
    const modal = document.querySelector('.recipe-modal');
    if (modal) {
        modal.remove();
    }
    editingRecipe = null;
}

function exportRecipes() {
    const dataStr = JSON.stringify(recipes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pickle_recipes.json';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Settings Functions
function updateLaborCost() {
    packaging.laborPerKg = parseFloat(document.getElementById('labor-cost-setting').value) || 120;
    
    // Update labor costs for jar calculations
    packaging.labor100g = (100 / 1000) * packaging.laborPerKg;
    packaging.labor250g = (250 / 1000) * packaging.laborPerKg;
    
    saveData();
    
    // Update the labor cost label immediately
    const laborCostLabel = document.getElementById('labor-cost-label');
    if (laborCostLabel) {
        laborCostLabel.textContent = `Labor Cost (₹${packaging.laborPerKg}/kg):`;
    }
    
    // Refresh current recipe display if any
    if (currentRecipe) {
        // Recalculate labor cost for current recipe
        currentRecipe.laborCost = (currentRecipe.batchSize / 1000) * packaging.laborPerKg;
        currentRecipe.totalCost = currentRecipe.totalIngredientsCost + currentRecipe.laborCost;
        displayRecipeDetails();
    }
}

function updatePackagingCost(jarSize) {
    if (jarSize === '100g') {
        packaging.jar100g = parseFloat(document.getElementById('packaging-100g').value) || 15;
    } else if (jarSize === '250g') {
        packaging.jar250g = parseFloat(document.getElementById('packaging-250g').value) || 20;
    }
    
    saveData();
    
    // Refresh current recipe display if any
    if (currentRecipe) {
        displayRecipeDetails();
    }
}

function updateRecipeDropdowns() {
    // Update cost calculator dropdown
    const costCalculatorSelect = document.getElementById('recipe-select');
    const profitAnalyzerSelect = document.getElementById('batch-recipe');
    
    // Clear existing options (except first one)
    costCalculatorSelect.innerHTML = '<option value="">Choose a recipe...</option>';
    profitAnalyzerSelect.innerHTML = '<option value="">Select recipe...</option>';
    
    // Add all recipes with CURRENT batch sizes (not original)
    Object.keys(recipes).forEach(recipeKey => {
        const recipe = recipes[recipeKey];
        // If this recipe is currently selected, show the current batch size, otherwise show original
        const displayBatchSize = (currentRecipe && document.getElementById('recipe-select').value === recipeKey) 
            ? currentBatchSize 
            : recipe.batchSize;
            
        const option1 = new Option(`${recipe.name} (${displayBatchSize}g)`, recipeKey);
        const option2 = new Option(recipe.name, recipeKey);
        
        costCalculatorSelect.appendChild(option1);
        profitAnalyzerSelect.appendChild(option2);
    });
}

// Make ingredients table editable
function displayIngredientsTable() {
    const tableContainer = document.getElementById('ingredients-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Price per gram (₹)</th>
                    <th>Cost (₹)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    currentRecipe.ingredients.forEach((ingredient, index) => {
        tableHTML += `
            <tr>
                <td><input type="text" value="${ingredient.name}" onchange="updateCurrentIngredient(${index}, 'name', this.value)"></td>
                <td><input type="number" value="${ingredient.quantity}" onchange="updateCurrentIngredient(${index}, 'quantity', this.value)"></td>
                <td><input type="text" value="${ingredient.unit}" onchange="updateCurrentIngredient(${index}, 'unit', this.value)"></td>
                <td><input type="number" value="${ingredient.pricePerGram}" step="0.001" onchange="updateCurrentIngredient(${index}, 'pricePerGram', this.value)"></td>
                <td>₹${ingredient.cost.toFixed(2)}</td>
                <td><button onclick="removeCurrentIngredient(${index})" class="btn btn-secondary">Remove</button></td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
        <button onclick="addCurrentIngredient()" class="btn btn-primary">Add Ingredient</button>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

function updateCurrentIngredient(index, field, value) {
    const recipeKey = document.getElementById('recipe-select').value;
    if (!recipeKey) return;
    
    currentRecipe.ingredients[index][field] = field === 'pricePerGram' || field === 'quantity' ? parseFloat(value) || 0 : value;
    
    // Recalculate cost
    const ingredient = currentRecipe.ingredients[index];
    ingredient.cost = ingredient.quantity * ingredient.pricePerGram;
    
    // Update recipe in recipes object
    recipes[recipeKey] = currentRecipe;
    
    // Recalculate recipe totals
    recalculateRecipeTotals();
    
    // Refresh display
    displayRecipeDetails();
    saveData();
}

function addCurrentIngredient() {
    const recipeKey = document.getElementById('recipe-select').value;
    if (!recipeKey) return;
    
    currentRecipe.ingredients.push({
        name: 'New Ingredient',
        quantity: 0,
        unit: 'g',
        pricePerGram: 0,
        cost: 0
    });
    
    recipes[recipeKey] = currentRecipe;
    recalculateRecipeTotals();
    displayRecipeDetails();
    saveData();
}

function removeCurrentIngredient(index) {
    const recipeKey = document.getElementById('recipe-select').value;
    if (!recipeKey) return;
    
    currentRecipe.ingredients.splice(index, 1);
    recipes[recipeKey] = currentRecipe;
    recalculateRecipeTotals();
    displayRecipeDetails();
    saveData();
}

function recalculateRecipeTotals() {
    if (!currentRecipe) return;
    
    currentRecipe.totalIngredientsCost = currentRecipe.ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);
    currentRecipe.laborCost = (currentRecipe.batchSize / 1000) * packaging.laborPerKg;
    currentRecipe.totalCost = currentRecipe.totalIngredientsCost + currentRecipe.laborCost;
}