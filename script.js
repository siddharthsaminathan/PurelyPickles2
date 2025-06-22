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
        // Real-world jar yields based on actual production experience
        // From 1kg ingredients = 8-9 x 300g jars (2400-2700g total)
        // Scaled proportionally for 100g and 250g jars
        jarYields: {
            '100g': 26,  // Can fill 26 x 100g jars from 1000g ingredients (makes 2.6kg total)
            '250g': 10   // Can fill 10 x 250g jars from 1000g ingredients (makes 2.5kg total)
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
    const clickedButton = document.querySelector(`.tab-btn[onclick="showTab('${tabId}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Initialize specific tab content
    if (tabId === 'inventory-tracker') {
        initializeInventory();
    } else if (tabId === 'stock-management') {
        initializeStockManagement();
    } else if (tabId === 'order-tracking') {
        initializeSimpleOrderTracking(); // Initialize simple order tracking
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
    
    // Simple cost calculation without jar yields dependency
    // Use basic cost per jar calculation
    const cost100g = 40.77; // Average cost for 100g jar
    const cost250g = 85.80; // Average cost for 250g jar
    
    // Generate profit table
    generateProfitTableWithJarSizes(cost100g, cost250g, jars100g, jars250g, recipe.name);
}

function generateProfitTableWithJarSizes(cost100g, cost250g, jars100g, jars250g, recipeName) {
    const margins = [0, 30, 40, 50]; // Added 0% margin to show base price profit
    const tableContainer = document.getElementById('margin-table');
    
    // Base selling prices in INR
    const basePrice100g = 65;
    const basePrice250g = 150;
    
    // Determine which jar sizes to show
    const show100g = jars100g > 0;
    const show250g = jars250g > 0;
    const totalJars = jars100g + jars250g;
    
    let tableHTML = `
        <div class="profit-overview">
            <h4>Profit Analysis for ${recipeName}</h4>
            <div class="production-summary">
                <div class="summary-card">
                    <h5>Production Mix</h5>
                    <p>${show100g ? `${jars100g} × 100g jars` : ''}${show100g && show250g ? '<br>' : ''}${show250g ? `${jars250g} × 250g jars` : ''}</p>
                    <p><strong>Total: ${totalJars} jars</strong></p>
                </div>
                <div class="summary-card">
                    <h5>Cost per Jar</h5>
                    <p>100g jar: <strong>₹${cost100g.toFixed(2)}</strong></p>
                    <p>250g jar: <strong>₹${cost250g.toFixed(2)}</strong></p>
                </div>
                <div class="summary-card">
                    <h5>Total Investment</h5>
                    <p><strong>₹${((cost100g * jars100g) + (cost250g * jars250g)).toFixed(2)}</strong></p>
                </div>
            </div>
        </div>
        
        <div class="pricing-scenarios">
            <h4>Pricing Scenarios & Profit Analysis</h4>
            <div class="base-pricing-info">
                <div class="base-price-card">
                    <h5>Base Selling Prices</h5>
                    <p>100g jar: <strong>₹${basePrice100g}</strong></p>
                    <p>250g jar: <strong>₹${basePrice250g}</strong></p>
                    <small>Margins calculated from these base prices</small>
                </div>
            </div>
            <div class="scenarios-grid">
    `;
    
    margins.forEach(margin => {
        const sellingPrice100g = basePrice100g * (1 + margin/100);
        const sellingPrice250g = basePrice250g * (1 + margin/100);
        const profit100g = sellingPrice100g - cost100g;
        const profit250g = sellingPrice250g - cost250g;
        
        const revenue100g = sellingPrice100g * jars100g;
        const revenue250g = sellingPrice250g * jars250g;
        const totalRevenue = revenue100g + revenue250g;
        
        const totalCost = (cost100g * jars100g) + (cost250g * jars250g);
        const totalProfit = totalRevenue - totalCost;
        const profitPercentage = ((totalProfit / totalCost) * 100);
        
        // Calculate actual margin based on cost
        const actualMargin100g = ((sellingPrice100g - cost100g) / cost100g * 100);
        const actualMargin250g = ((sellingPrice250g - cost250g) / cost250g * 100);
        
        // Different header text for 0% margin
        const headerText = margin === 0 ? 'Base Price (0% markup)' : `+${margin}% from Base Price`;
        
        tableHTML += `
            <div class="scenario-card ${margin === 0 ? 'base-scenario' : ''}">
                <div class="scenario-header">
                    <h5>${headerText}</h5>
                    <div class="profit-badge ${margin === 0 ? 'base-profit' : ''}">₹${totalProfit.toFixed(0)} profit</div>
                </div>
                
                <div class="pricing-details">
                    ${show100g ? `
                    <div class="jar-pricing">
                        <span class="jar-type">100g jar:</span>
                        <span class="price">₹${sellingPrice100g.toFixed(0)}</span>
                        <span class="profit">(₹${profit100g.toFixed(0)} profit | ${actualMargin100g.toFixed(0)}% margin)</span>
                    </div>
                    ` : ''}
                    
                    ${show250g ? `
                    <div class="jar-pricing">
                        <span class="jar-type">250g jar:</span>
                        <span class="price">₹${sellingPrice250g.toFixed(0)}</span>
                        <span class="profit">(₹${profit250g.toFixed(0)} profit | ${actualMargin250g.toFixed(0)}% margin)</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="scenario-summary">
                    <div class="summary-row">
                        <span>Total Revenue:</span>
                        <span><strong>₹${totalRevenue.toFixed(0)}</strong></span>
                    </div>
                    <div class="summary-row">
                        <span>Total Investment:</span>
                        <span>₹${totalCost.toFixed(0)}</span>
                    </div>
                    <div class="summary-row highlight">
                        <span>Net Profit:</span>
                        <span><strong>₹${totalProfit.toFixed(0)}</strong></span>
                    </div>
                    <div class="roi-indicator ${margin === 0 ? 'base-roi' : ''}">
                        <span>ROI: ${profitPercentage.toFixed(1)}%</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    tableHTML += `
            </div>
        </div>
        
        <div class="market-recommendations">
            <h4>Market Positioning Strategy</h4>
            <div class="recommendations-grid">
                <div class="recommendation-card standard">
                    <h5>Base Price Strategy</h5>
                    <p class="price-range">₹${basePrice100g} - ₹${basePrice250g}</p>
                    <p>Competitive entry-level pricing to establish market presence</p>
                </div>
                <div class="recommendation-card premium">
                    <h5>Growth Strategy (+30%)</h5>
                    <p class="price-range">₹${(basePrice100g * 1.3).toFixed(0)} - ₹${(basePrice250g * 1.3).toFixed(0)}</p>
                    <p>Balanced growth pricing for established customers</p>
                </div>
                <div class="recommendation-card premium">
                    <h5>Premium Strategy (+40-50%)</h5>
                    <p class="price-range">₹${(basePrice100g * 1.4).toFixed(0)} - ₹${(basePrice250g * 1.5).toFixed(0)}</p>
                    <p>Premium positioning for quality-conscious market</p>
                </div>
            </div>
        </div>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

// Packaging cost calculator
function calculatePackagingCosts() {
    const recipeSelect = document.getElementById('recipe-select');
    const selectedRecipe = recipeSelect.value;
    
    if (!selectedRecipe) return;
    
    const recipe = recipes[selectedRecipe];
    const jarYields = recipe.jarYields;
    
    // Calculate number of jars for each size
    const numJars100g = Math.ceil(recipe.batchSize / 100) * (jarYields['100g'] || 0);
    const numJars250g = Math.ceil(recipe.batchSize / 250) * (jarYields['250g'] || 0);
    
    // Calculate total packaging cost
    const totalCost100g = numJars100g * (packaging.jar100g + packaging.labor100g);
    const totalCost250g = numJars250g * (packaging.jar250g + packaging.labor250g);
    
    // Display results
    document.getElementById('packaging-cost-100g').textContent = `₹${totalCost100g.toFixed(2)}`;
    document.getElementById('packaging-cost-250g').textContent = `₹${totalCost250g.toFixed(2)}`;
}

// Inventory tracking
let inventoryData = [];

function initializeInventory() {
    if (inventoryData.length === 0) {
        // Initialize with common ingredients
        const commonIngredients = [
            { name: 'Crushed Salt', unit: '1 kg', unitPrice: 44.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Chilli Powder', unit: '100 g', unitPrice: 20.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Fenugreek Powder', unit: '100 g', unitPrice: 12.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Mustard Seeds', unit: '100 g', unitPrice: 10.70, opening: 0, purchased: 0, used: 0 },
            { name: 'Turmeric Powder', unit: '100 g', unitPrice: 46.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Asafoetida', unit: '10 g', unitPrice: 138.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Gingelly Oil', unit: '1 L', unitPrice: 376.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Sodium Benzoate', unit: '100 g', unitPrice: 16.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Dry Red Chillies', unit: '100 g', unitPrice: 51.00, opening: 0, purchased: 0, used: 0 },
            { name: 'Jaggery', unit: '100 g', unitPrice: 8.50, opening: 0, purchased: 0, used: 0 }
        ];
        
        inventoryData = commonIngredients.map(ingredient => ({
            ...ingredient,
            opening: 10, // Default opening stock
            purchased: 0,
            used: 0
        }));
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

// Stock Management functionality
let stockItems = [];

function initializeStockManagement() {
    // Load stock data from localStorage if available
    const storedStock = localStorage.getItem('pickleStock');
    if (storedStock) {
        stockItems = JSON.parse(storedStock);
    } else {
        // Initialize with sample data
        stockItems = [
            {
                id: 1,
                productType: 'Mango Thokku',
                jarSize: '100g',
                batchNumber: 'MT-001',
                productionDate: '2025-05-15',
                expiryDate: '2026-05-15',
                quantity: 50,
                pricePerUnit: 120,
                status: 'in-stock',
                location: 'Shelf A'
            },
            {
                id: 2,
                productType: 'Avakkai Pickle',
                jarSize: '250g',
                batchNumber: 'AP-001',
                productionDate: '2025-05-10',
                expiryDate: '2026-05-10',
                quantity: 30,
                pricePerUnit: 220,
                status: 'in-stock',
                location: 'Shelf B'
            },
            {
                id: 3,
                productType: 'Lemon Pickle',
                jarSize: '100g',
                batchNumber: 'LP-001',
                productionDate: '2025-05-05',
                expiryDate: '2026-05-05',
                quantity: 10,
                pricePerUnit: 110,
                status: 'low-stock',
                location: 'Shelf A'
            }
        ];
    }
    
    // Add filter UI to the stock management page
    displayStockFilters();
    
    // Display stock table
    displayStockTable(stockItems);
}

function displayStockFilters() {
    const stockSection = document.getElementById('stock-management');
    
    // Remove existing filters to prevent duplicates
    const existingFilters = stockSection.querySelector('.stock-filters');
    if (existingFilters) {
        existingFilters.remove();
    }
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'stock-filters';
    
    // Get unique values for dropdown filters
    const productTypes = [...new Set(stockItems.map(item => item.productType))];
    const jarSizes = [...new Set(stockItems.map(item => item.jarSize))];
    const statuses = [...new Set(stockItems.map(item => item.status))];
    const locations = [...new Set(stockItems.map(item => item.location))];
    
    filterContainer.innerHTML = `
        <div class="filter-group">
            <label for="filter-product-type">Product Type:</label>
            <select id="filter-product-type" onchange="filterStock()">
                <option value="">All Products</option>
                ${productTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label for="filter-jar-size">Jar Size:</label>
            <select id="filter-jar-size" onchange="filterStock()">
                <option value="">All Sizes</option>
                ${jarSizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label for="filter-status">Status:</label>
            <select id="filter-status" onchange="filterStock()">
                <option value="">All Status</option>
                ${statuses.map(status => `<option value="${status}">${formatStatus(status)}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label for="filter-location">Location:</label>
            <select id="filter-location" onchange="filterStock()">
                <option value="">All Locations</option>
                ${locations.map(location => `<option value="${location}">${location}</option>`).join('')}
            </select>
        </div>
        <div class="filter-group">
            <label for="search-stock">Search:</label>
            <input type="text" id="search-stock" placeholder="Search batch number or product..." oninput="filterStock()">
        </div>
    `;
    
    // Insert filters before the stock-table but after the stock-controls
    const stockControls = stockSection.querySelector('.stock-controls');
    stockControls.after(filterContainer);
}

function filterStock() {
    const productTypeFilter = document.getElementById('filter-product-type').value;
    const jarSizeFilter = document.getElementById('filter-jar-size').value;
    const statusFilter = document.getElementById('filter-status').value;
    const locationFilter = document.getElementById('filter-location').value;
    const searchQuery = document.getElementById('search-stock').value.toLowerCase();
    
    const filteredStock = stockItems.filter(item => {
        return (!productTypeFilter || item.productType === productTypeFilter) && 
               (!jarSizeFilter || item.jarSize === jarSizeFilter) && 
               (!statusFilter || item.status === statusFilter) && 
               (!locationFilter || item.location === locationFilter) && 
               (!searchQuery || 
                item.productType.toLowerCase().includes(searchQuery) || 
                item.batchNumber.toLowerCase().includes(searchQuery));
    });
    
    displayStockTable(filteredStock);
}

function displayStockTable(items) {
    const tableContainer = document.getElementById('stock-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Jar Size</th>
                    <th>Batch #</th>
                    <th>Production Date</th>
                    <th>Expiry Date</th>
                    <th>Quantity</th>
                    <th>Unit Price (₹)</th>
                    <th>Total Value (₹)</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    if (items.length === 0) {
        tableHTML += `
            <tr>
                <td colspan="11" style="text-align: center;">No stock items found</td>
            </tr>
        `;
    } else {
        items.forEach(item => {
            const totalValue = item.quantity * item.pricePerUnit;
            const statusClass = getStatusClass(item.status);
            
            tableHTML += `
                <tr>
                    <td>${item.productType}</td>
                    <td>${item.jarSize}</td>
                    <td>${item.batchNumber}</td>
                    <td>${formatDate(item.productionDate)}</td>
                    <td>${formatDate(item.expiryDate)}</td>
                    <td><input type="number" value="${item.quantity}" onchange="updateStockQuantity(${item.id}, this.value)" min="0"></td>
                    <td>₹${item.pricePerUnit.toFixed(2)}</td>
                    <td>₹${totalValue.toFixed(2)}</td>
                    <td><span class="stock-status ${statusClass}">${formatStatus(item.status)}</span></td>
                    <td>${item.location}</td>
                    <td>
                        <button onclick="editStockItem(${item.id})" class="btn btn-primary">Edit</button>
                        <button onclick="deleteStockItem(${item.id})" class="btn btn-secondary">Delete</button>
                    </td>
                </tr>
            `;
        });
    }
    
    tableHTML += `
            </tbody>
        </table>
        
        <div class="stock-summary">
            <p><strong>Total Items:</strong> ${items.length}</p>
            <p><strong>Total Value:</strong> ₹${items.reduce((sum, item) => sum + (item.quantity * item.pricePerUnit), 0).toFixed(2)}</p>
        </div>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

function getStatusClass(status) {
    switch(status) {
        case 'in-stock':
            return 'status-in-stock';
        case 'low-stock':
            return 'status-low-stock';
        case 'out-of-stock':
            return 'status-out-of-stock';
        default:
            return '';
    }
}

function formatStatus(status) {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function updateStockQuantity(id, newQuantity) {
    const item = stockItems.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(newQuantity) || 0;
        
        // Update status based on quantity
        if (item.quantity === 0) {
            item.status = 'out-of-stock';
        } else if (item.quantity <= 10) {
            item.status = 'low-stock';
        } else {
            item.status = 'in-stock';
        }
        
        saveStockData();
        displayStockTable(stockItems);
    }
}

function addStockItem() {
    // Get unique product types from recipes
    const productTypes = Object.values(recipes).map(recipe => recipe.name);
    
    // Create modal for adding stock
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    
    modal.innerHTML = `
        <div class="order-modal-content">
            <h3>Add New Stock Item</h3>
            <div class="order-form" id="add-stock-form">
                <div class="form-group">
                    <label for="new-product-type">Product Type:</label>
                    <select id="new-product-type" required>
                        ${productTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="new-jar-size">Jar Size:</label>
                    <select id="new-jar-size" required>
                        <option value="100g">100g</option>
                        <option value="250g">250g</option>
                        <option value="300g">300g</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="new-batch-number">Batch Number:</label>
                    <input type="text" id="new-batch-number" required placeholder="e.g. MT-001">
                </div>
                <div class="form-group">
                    <label for="new-production-date">Production Date:</label>
                    <input type="date" id="new-production-date" required value="${getCurrentDate()}">
                </div>
                <div class="form-group">
                    <label for="new-expiry-date">Expiry Date:</label>
                    <input type="date" id="new-expiry-date" required value="${getOneYearLaterDate()}">
                </div>
                <div class="form-group">
                    <label for="new-quantity">Quantity:</label>
                    <input type="number" id="new-quantity" required min="0" value="0">
                </div>
                <div class="form-group">
                    <label for="new-price">Price Per Unit (₹):</label>
                    <input type="number" id="new-price" required min="0" value="0" step="0.01">
                </div>
                <div class="form-group">
                    <label for="new-location">Location:</label>
                    <input type="text" id="new-location" required placeholder="e.g. Shelf A">
                </div>
                    <button onclick="closeStockModal()" class="btn btn-secondary">Cancel</button>
                    <button onclick="saveNewStockItem()" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function getOneYearLaterDate() {
    const today = new Date();
    const oneYearLater = new Date();
    oneYearLater.setFullYear(today.getFullYear() + 1);
    return oneYearLater.toISOString().split('T')[0];
}

function saveNewStockItem() {
    const productType = document.getElementById('new-product-type').value;
    const jarSize = document.getElementById('new-jar-size').value;
    const batchNumber = document.getElementById('new-batch-number').value;
    const productionDate = document.getElementById('new-production-date').value;
    const expiryDate = document.getElementById('new-expiry-date').value;
    const quantity = parseInt(document.getElementById('new-quantity').value) || 0;
    const pricePerUnit = parseFloat(document.getElementById('new-price').value) || 0;
    const location = document.getElementById('new-location').value;
    
    // Validate required fields
    if (!productType || !jarSize || !batchNumber || !productionDate || !expiryDate || !location) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Determine status based on quantity
    let status = 'in-stock';
    if (quantity === 0) {
        status = 'out-of-stock';
    } else if (quantity <= 10) {
        status = 'low-stock';
    }
    
    // Generate a new ID
    const newId = stockItems.length > 0 ? Math.max(...stockItems.map(item => item.id)) + 1 : 1;
    
    // Add new stock item
    stockItems.push({
        id: newId,
        productType,
        jarSize,
        batchNumber,
        productionDate,
        expiryDate,
        quantity,
        pricePerUnit,
        status,
        location
    });
    
    saveStockData();
    closeStockModal();
    displayStockTable(stockItems);
    
    // Update filters to include new options
    displayStockFilters();
}

function closeStockModal() {
    const modal = document.querySelector('.order-modal');
    if (modal) {
        modal.remove();
    }
}

function editStockItem(id) {
    const item = stockItems.find(item => item.id === id);
    if (!item) return;
    
    // Get unique product types from recipes
    const productTypes = Object.values(recipes).map(recipe => recipe.name);
    
    // Create modal for editing stock
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    
    modal.innerHTML = `
        <div class="order-modal-content">
            <h3>Edit Stock Item</h3>
            <div class="order-form" id="edit-stock-form">
                <div class="form-group">
                    <label for="edit-product-type">Product Type:</label>
                    <select id="edit-product-type" required>
                        ${productTypes.map(type => `<option value="${type}" ${item.productType === type ? 'selected' : ''}>${type}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-jar-size">Jar Size:</label>
                    <select id="edit-jar-size" required>
                        <option value="100g" ${item.jarSize === '100g' ? 'selected' : ''}>100g</option>
                        <option value="250g" ${item.jarSize === '250g' ? 'selected' : ''}>250g</option>
                        <option value="300g" ${item.jarSize === '300g' ? 'selected' : ''}>300g</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-batch-number">Batch Number:</label>
                    <input type="text" id="edit-batch-number" required value="${item.batchNumber}">
                </div>
                <div class="form-group">
                    <label for="edit-production-date">Production Date:</label>
                    <input type="date" id="edit-production-date" required value="${item.productionDate}">
                </div>
                <div class="form-group">
                    <label for="edit-expiry-date">Expiry Date:</label>
                    <input type="date" id="edit-expiry-date" required value="${item.expiryDate}">
                </div>
                <div class="form-group">
                    <label for="edit-quantity">Quantity:</label>
                    <input type="number" id="edit-quantity" required min="0" value="${item.quantity}">
                </div>
                <div class="form-group">
                    <label for="edit-price">Price Per Unit (₹):</label>
                    <input type="number" id="edit-price" required min="0" value="${item.pricePerUnit}" step="0.01">
                </div>
                <div class="form-group">
                    <label for="edit-location">Location:</label>
                    <input type="text" id="edit-location" required value="${item.location}">
                </div>
                <div class="order-actions">
                    <button onclick="closeStockModal()" class="btn btn-secondary">Cancel</button>
                    <button onclick="updateStockItem(${item.id})" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function updateStockItem(id) {
    const item = stockItems.find(item => item.id === id);
    if (!item) return;
    
    const productType = document.getElementById('edit-product-type').value;
    const jarSize = document.getElementById('edit-jar-size').value;
    const batchNumber = document.getElementById('edit-batch-number').value;
    const productionDate = document.getElementById('edit-production-date').value;
    const expiryDate = document.getElementById('edit-expiry-date').value;
    const quantity = parseInt(document.getElementById('edit-quantity').value) || 0;
    const pricePerUnit = parseFloat(document.getElementById('edit-price').value) || 0;
    const location = document.getElementById('edit-location').value;
    
    // Validate required fields
    if (!productType || !jarSize || !batchNumber || !productionDate || !expiryDate || !location) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Determine status based on quantity
    let status = 'in-stock';
    if (quantity === 0) {
        status = 'out-of-stock';
    } else if (quantity <= 10) {
        status = 'low-stock';
    }
    
    // Update item
    item.productType = productType;
    item.jarSize = jarSize;
    item.batchNumber = batchNumber;
    item.productionDate = productionDate;
    item.expiryDate = expiryDate;
    item.quantity = quantity;
    item.pricePerUnit = pricePerUnit;
    item.status = status;
    item.location = location;
    
    saveStockData();
    closeStockModal();
    displayStockTable(stockItems);
}

// Simple Order Tracking functionality for grandmothers
let todaysCustomers = [];
let currentBottleCounts = { '100g': 0, '250g': 0 };

function initializeSimpleOrderTracking() {
    // Load today's customers from localStorage
    const today = getCurrentDate();
    const storedCustomers = localStorage.getItem(`customers_${today}`);
    if (storedCustomers) {
        todaysCustomers = JSON.parse(storedCustomers);
    }
    
    // Initialize counter displays
    updateCounterDisplays();
    updateCustomersDisplay();
    updateSummaryStats();
    updateTotalAmount();
}

function changeBottleCount(size, delta) {
    console.log(`Changing ${size} by ${delta}`); // Debug log
    
    currentBottleCounts[size] = Math.max(0, currentBottleCounts[size] + delta);
    
    // Update the display immediately
    updateCounterDisplays();
    updateTotalAmount();
}

function updateCounterDisplays() {
    // Update both counter displays
    const count100g = document.getElementById('count-100g');
    const count250g = document.getElementById('count-250g');
    
    if (count100g) {
        count100g.textContent = currentBottleCounts['100g'];
    }
    if (count250g) {
        count250g.textContent = currentBottleCounts['250g'];
    }
}

function updateTotalAmount() {
    const total100g = currentBottleCounts['100g'] * 65;
    const total250g = currentBottleCounts['250g'] * 150;
    const totalAmount = total100g + total250g;
    
    const totalAmountElement = document.getElementById('total-amount');
    if (totalAmountElement) {
        totalAmountElement.textContent = `₹${totalAmount}`;
    }
}

function saveCustomerOrder() {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();
    
    // Validation
    if (!customerName) {
        alert('Please enter customer name');
        return;
    }
    
    if (currentBottleCounts['100g'] === 0 && currentBottleCounts['250g'] === 0) {
        alert('Please select at least one bottle');
        return;
    }
    
    // Calculate totals
    const total100g = currentBottleCounts['100g'] * 65;
    const total250g = currentBottleCounts['250g'] * 150;
    const totalAmount = total100g + total250g;
    const totalBottles = currentBottleCounts['100g'] + currentBottleCounts['250g'];
    
    // Create customer record
    const customer = {
        id: Date.now(),
        name: customerName,
        phone: customerPhone,
        bottles100g: currentBottleCounts['100g'],
        bottles250g: currentBottleCounts['250g'],
        totalBottles: totalBottles,
        totalAmount: totalAmount,
        timestamp: new Date().toLocaleTimeString('en-IN')
    };
    
    // Add to today's customers
    todaysCustomers.push(customer);
    
    // Save to localStorage with today's date
    const today = getCurrentDate();
    localStorage.setItem(`customers_${today}`, JSON.stringify(todaysCustomers));
    
    // Clear form first
    clearForm();
    
    // Force immediate update of displays with slight delay to ensure DOM is ready
    setTimeout(() => {
        updateCustomersDisplay();
        updateSummaryStats();
    }, 50);
    
    // Show success message
    alert(`✅ Customer saved successfully!\n${customerName} owes ₹${totalAmount}`);
}

function clearForm() {
    const customerNameInput = document.getElementById('customer-name');
    const customerPhoneInput = document.getElementById('customer-phone');
    
    if (customerNameInput) customerNameInput.value = '';
    if (customerPhoneInput) customerPhoneInput.value = '';
    
    // Reset bottle counts
    currentBottleCounts = { '100g': 0, '250g': 0 };
    
    // Update displays
    updateCounterDisplays();
    updateTotalAmount();
}

function updateCustomersDisplay() {
    const tableContainer = document.getElementById('simple-customers-table');
    
    if (todaysCustomers.length === 0) {
        tableContainer.innerHTML = `
            <div class="empty-customers">
                <p>No customers added today</p>
                <p>Start by adding your first customer above 👆</p>
            </div>
        `;
        return;
    }
    
    let tableHTML = '';
    
    // Sort customers by most recent first
    const sortedCustomers = [...todaysCustomers].sort((a, b) => b.id - a.id);
    
    sortedCustomers.forEach(customer => {
        const bottlesText = [];
        if (customer.bottles100g > 0) {
            bottlesText.push(`${customer.bottles100g} × 100g`);
        }
        if (customer.bottles250g > 0) {
            bottlesText.push(`${customer.bottles250g} × 250g`);
        }
        
        tableHTML += `
            <div class="customer-entry">
                <div class="customer-info">
                    <div class="customer-name">${customer.name}</div>
                    <div class="customer-phone">${customer.phone || 'No phone'}</div>
                    <small style="color: #7f8c8d;">${customer.timestamp}</small>
                </div>
                
                <div class="customer-bottles">
                    <div class="bottles-count">${bottlesText.join(' + ')}</div>
                    <small style="color: #7f8c8d;">Total: ${customer.totalBottles} bottles</small>
                </div>
                
                <div class="customer-total">₹${customer.totalAmount}</div>
                
                <button onclick="deleteCustomer(${customer.id})" class="delete-customer-btn" title="Delete customer">
                    🗑️
                </button>
            </div>
        `;
    });
    
    tableContainer.innerHTML = tableHTML;
}

function updateSummaryStats() {
    const totalCustomers = todaysCustomers.length;
    const totalBottles = todaysCustomers.reduce((sum, customer) => sum + customer.totalBottles, 0);
    const totalMoney = todaysCustomers.reduce((sum, customer) => sum + customer.totalAmount, 0);
    
    // Update the summary stats with proper null checks
    const totalCustomersElement = document.getElementById('total-customers');
    const totalBottlesElement = document.getElementById('total-bottles');
    const totalMoneyElement = document.getElementById('total-money');
    
    if (totalCustomersElement) totalCustomersElement.textContent = totalCustomers;
    if (totalBottlesElement) totalBottlesElement.textContent = totalBottles;
    if (totalMoneyElement) totalMoneyElement.textContent = `₹${totalMoney}`;
}

function deleteCustomer(customerId) {
    const customer = todaysCustomers.find(c => c.id === customerId);
    if (!customer) return;
    
    const isConfirmed = confirm(`Delete ${customer.name}?\nThey owed ₹${customer.totalAmount}`);
    if (!isConfirmed) return;
    
    // Remove from array
    todaysCustomers = todaysCustomers.filter(c => c.id !== customerId);
    
    // Save updated list
    const today = getCurrentDate();
    localStorage.setItem(`customers_${today}`, JSON.stringify(todaysCustomers));
    
    // Update display
    updateCustomersDisplay();
    updateSummaryStats();
}

function exportTodaysCustomers() {
    if (todaysCustomers.length === 0) {
        alert('No customers to export today');
        return;
    }
    
    const today = getCurrentDate();
    const totalCustomers = todaysCustomers.length;
    const totalBottles = todaysCustomers.reduce((sum, c) => sum + c.totalBottles, 0);
    const totalMoney = todaysCustomers.reduce((sum, c) => sum + c.totalAmount, 0);
    
    // Create a formatted report for printing
    let reportContent = `PURELY PICKLES - DAILY CUSTOMER REPORT\n`;
    reportContent += `Date: ${today}\n`;
    reportContent += `Time: ${new Date().toLocaleTimeString('en-IN')}\n`;
    reportContent += `=${'='.repeat(50)}\n\n`;
    
    reportContent += `CUSTOMER DETAILS:\n`;
    reportContent += `${'-'.repeat(50)}\n`;
    
    // Sort customers by timestamp
    const sortedCustomers = [...todaysCustomers].sort((a, b) => {
        const timeA = a.timestamp || '00:00:00';
        const timeB = b.timestamp || '00:00:00';
        return timeA.localeCompare(timeB);
    });
    
    sortedCustomers.forEach((customer, index) => {
        reportContent += `${index + 1}. ${customer.name}\n`;
        reportContent += `   Phone: ${customer.phone || 'Not provided'}\n`;
        reportContent += `   Time: ${customer.timestamp}\n`;
        
        // Show bottles breakdown
        const bottlesList = [];
        if (customer.bottles100g > 0) {
            bottlesList.push(`${customer.bottles100g} × 100g jars (₹${customer.bottles100g * 65})`);
        }
        if (customer.bottles250g > 0) {
            bottlesList.push(`${customer.bottles250g} × 250g jars (₹${customer.bottles250g * 150})`);
        }
        
        reportContent += `   Bottles: ${bottlesList.join(', ')}\n`;
        reportContent += `   Total Amount: ₹${customer.totalAmount}\n`;
        reportContent += `   ${'-'.repeat(30)}\n`;
    });
    
    // Add summary
    reportContent += `\nDAILY SUMMARY:\n`;
    reportContent += `${'='.repeat(30)}\n`;
    reportContent += `Total Customers: ${totalCustomers}\n`;
    reportContent += `Total Bottles Sold: ${totalBottles}\n`;
    reportContent += `Total Money Collected: ₹${totalMoney}\n\n`;
    
    // Breakdown by jar size
    const total100g = todaysCustomers.reduce((sum, c) => sum + c.bottles100g, 0);
    const total250g = todaysCustomers.reduce((sum, c) => sum + c.bottles250g, 0);
    const revenue100g = total100g * 65;
    const revenue250g = total250g * 150;
    
    reportContent += `BOTTLES BREAKDOWN:\n`;
    reportContent += `100g jars: ${total100g} bottles = ₹${revenue100g}\n`;
    reportContent += `250g jars: ${total250g} bottles = ₹${revenue250g}\n`;
    reportContent += `Total Revenue: ₹${revenue100g + revenue250g}\n\n`;
    
    reportContent += `Report generated on: ${new Date().toLocaleString('en-IN')}\n`;
    reportContent += `${'='.repeat(50)}\n`;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(`
        <html>
        <head>
            <title>Purely Pickles - Daily Report</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    line-height: 1.4;
                    margin: 20px;
                    color: #000;
                }
                pre {
                    white-space: pre-wrap;
                    margin: 0;
                }
                @media print {
                    body { margin: 15px; }
                }
            </style>
        </head>
        <body>
            <pre>${reportContent}</pre>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Auto-print after a short delay
    setTimeout(() => {
        printWindow.print();
    }, 500);
    
    // Also offer CSV download as backup
    const csvHeaders = ['Time', 'Customer Name', 'Phone', '100g Bottles', '250g Bottles', 'Total Bottles', 'Amount Owed'];
    let csvContent = `Purely Pickles Daily Report - ${today}\n\n`;
    csvContent += csvHeaders.join(',') + '\n';
    
    sortedCustomers.forEach(customer => {
        const row = [
            customer.timestamp || '',
            `"${customer.name}"`,
            `"${customer.phone || ''}"`,
            customer.bottles100g || 0,
            customer.bottles250g || 0,
            customer.totalBottles || 0,
            customer.totalAmount || 0
        ];
        csvContent += row.join(',') + '\n';
    });
    
    csvContent += `\nSUMMARY\n`;
    csvContent += `Total Customers,${totalCustomers}\n`;
    csvContent += `Total Bottles Sold,${totalBottles}\n`;
    csvContent += `Total Money Owed,₹${totalMoney}\n`;
    
    // Create download link for CSV backup
    setTimeout(() => {
        const shouldDownloadCSV = confirm('Print window opened. Would you also like to download a CSV backup?');
        if (shouldDownloadCSV) {
            downloadCSV(csvContent, `purely_pickles_report_${today}.csv`);
        }
    }, 1000);
}

// Update DOMContentLoaded to include simple order tracking initialization
document.addEventListener('DOMContentLoaded', function() {
    // Load stored data
    loadStoredData();
    
    // Set default tab
    showTab('cost-calculator');
    
    // Initialize inventory for the first time
    initializeInventory();
    
    // Initialize stock management
    initializeStockManagement();
    
    // Initialize simple order tracking
    initializeSimpleOrderTracking();
});