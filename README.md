# 🥒 Purely Pickles - Business Cost Calculator

A comprehensive web application for calculating costs, profits, and managing inventory for a pickle manufacturing business. This calculator includes all major Indian pickle recipes with detailed ingredient pricing based on market rates.

## Features

### 📊 Cost Calculator
- **6 Complete Pickle Recipes**: Mango Thokku, Avakkai, Lemon, Amla, Tomato Thokku, and Coriander Thokku
- **Detailed Ingredient Breakdown**: Per-gram pricing for all ingredients
- **Labor Cost Integration**: ₹120/kg labor cost calculation
- **Jar Size Costing**: Separate calculations for 100g and 250g jars
- **Packaging Costs**: ₹15 for 100g jars, ₹20 for 250g jars

### 💰 Profit Analyzer
- **Multiple Margin Analysis**: 40%, 50%, 60%, and 70% profit margins
- **Flexible Jar Mix**: Configure ratios of 100g to 250g jars
- **Batch Quantity Scaling**: Calculate profits for any number of jars
- **Revenue & Cost Breakdown**: Complete financial analysis

### 📦 Inventory Tracker
- **Real-time Stock Management**: Track opening stock, purchases, usage, and closing stock
- **Value Calculation**: Automatic inventory valuation
- **CSV Export**: Export inventory reports for accounting
- **Dynamic Ingredient Management**: Add/remove ingredients as needed

## Recipe Database

The calculator includes market-researched pricing for all ingredients:

| Recipe | Batch Size | Key Ingredients | Total Cost (incl. labor) |
|--------|------------|----------------|---------------------------|
| Mango Thokku | 1000g | Gingelly oil, Chilli powder, Salt | ₹344.47 |
| Avakkai Pickle | 5000g | Mango, Chilli powder, Oil | ₹2,541.40 |
| Lemon Pickle | 1000g | Lemon, Oil, Spices | ₹384.38 |
| Amla Pickle | 1000g | Amla, Oil, Tamarind | ₹541.92 |
| Tomato Thokku | 1000g | Tomato, Oil, Spices | ₹358.96 |
| Coriander Thokku | 600g | Coriander leaves, Oil | ₹430.03 |

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. Navigate between tabs using the top navigation
3. Start with the Cost Calculator to analyze recipes

### Cost Calculator
1. Select a pickle recipe from the dropdown
2. View detailed ingredient breakdown and costs
3. Check per-jar costing for both 100g and 250g sizes
4. Use the data for pricing decisions

### Profit Analyzer
1. Choose a recipe and jar mix ratio
2. Set the total number of jars to produce
3. View profit analysis across different margin percentages
4. Make informed pricing and production decisions

### Inventory Tracker
1. Update opening stock and purchases
2. Record ingredient usage
3. Monitor closing stock and inventory value
4. Export reports for accounting purposes

## Technical Details

### Cost Calculations
- **Per-gram pricing** based on DMart and BigBasket market rates
- **Labor cost** calculated at ₹120 per kg of output
- **Packaging costs** factored into final jar pricing
- **Scalable calculations** for different batch sizes

### Pricing Sources
All ingredient prices are sourced from major Indian retailers:
- Fenugreek powder: ₹0.12/g
- Mustard powder: ₹0.30/g
- Asafoetida: ₹1.38/g
- Gingelly oil: ₹0.376/g
- And many more...

## File Structure
```
purelypickles/
├── index.html          # Main application interface
├── styles.css          # Responsive styling
├── script.js           # Business logic and calculations
├── .github/
│   └── copilot-instructions.md
└── README.md           # This documentation
```

## Business Applications

### Production Planning
- Calculate exact ingredient requirements for any batch size
- Determine optimal jar size mix for maximum profitability
- Plan inventory purchases based on production schedules

### Financial Analysis
- Set competitive pricing with accurate cost calculations
- Analyze profit margins across different product lines
- Track ingredient cost fluctuations and their impact

### Inventory Management
- Monitor stock levels to prevent shortages
- Calculate inventory value for financial reporting
- Export data for integration with accounting systems

## Browser Compatibility
- Chrome/Edge (Recommended)
- Firefox
- Safari
- Mobile responsive design

## Customization

### Adding New Recipes
1. Edit `script.js`
2. Add recipe data to the `recipes` object
3. Include all ingredients with per-gram pricing
4. Update dropdown options in `index.html`

### Updating Prices
1. Modify ingredient prices in the recipe data
2. Prices are automatically reflected in all calculations
3. Consider seasonal price variations

## Support & Maintenance

### Regular Updates Recommended
- **Monthly**: Review and update ingredient prices
- **Quarterly**: Add new recipes or seasonal variations
- **Annually**: Review labor and packaging costs

### Data Backup
- Export inventory data regularly
- Backup customized recipes and pricing
- Keep historical data for trend analysis

## License

This project is created for Purely Pickles business operations. All rights reserved.

---

**Note**: Ingredient prices are based on 2024 market rates and should be updated regularly to reflect current market conditions.