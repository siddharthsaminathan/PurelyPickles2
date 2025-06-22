# Purely Pickles - Business Calculator

A comprehensive web application for managing pickle business operations including cost calculation, profit analysis, inventory tracking, and customer order management.

## Features

### 🧮 Cost Calculator
- Calculate ingredient costs for multiple pickle recipes
- Dynamic batch size scaling (250g to 5kg+)
- Real-world jar yields based on actual production experience
- Labor and packaging cost integration

### 📊 Profit Analyzer
- Base pricing strategy (₹65 for 100g, ₹150 for 250g)
- Multiple profit margin scenarios (Base, +30%, +40%, +50%)
- Market positioning recommendations
- ROI calculations with visual profit badges

### 📝 Simple Order Tracker (Grandmother-Friendly)
- Large button interface for elderly users
- Daily customer tracking with bottle counters
- Automatic total calculations
- Print/export functionality for daily reports

### 📦 Inventory Management
- Raw ingredient stock tracking
- Finished product stock management
- Low stock alerts and status indicators
- Batch number and expiry date tracking

### 🔧 Recipe Management
- Pre-configured recipes: Mango Thokku, Avakkai, Lemon Pickle, Amla Pickle, Tomato Thokku, Coriander Thokku
- Editable ingredient prices and quantities
- Accurate per-gram cost calculations

## Quick Start

1. Open `index.html` in any modern web browser
2. Select a recipe to calculate costs
3. Use the Profit Analyzer to determine selling prices
4. Track daily customers in the Order Tracker
5. Manage inventory in Stock Management

## Deployment

### Local Development
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Usage Guide

### Cost Calculator
1. Select a pickle recipe from dropdown
2. Adjust batch size using presets or custom input
3. View detailed ingredient breakdown
4. See per-jar costs for 100g and 250g sizes

### Order Tracker (For Elderly Users)
1. Enter customer name and phone
2. Use + and - buttons to count bottles
3. See total amount automatically calculated
4. Save customer and view daily summary

### Profit Analyzer
1. Choose recipe and jar mix ratio
2. Set total production quantity
3. View pricing scenarios with different margins
4. Use market positioning recommendations

## Technical Details

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage for data persistence
- **Responsive**: Mobile-friendly design
- **Accessibility**: High contrast mode support
- **Currency**: Indian Rupee (₹) formatting

## Business Focus

Designed specifically for Indian pickle manufacturers with:
- Accurate ingredient pricing per gram
- Regional recipe variations
- Family business workflow optimization
- Elderly-friendly interfaces
- Financial planning tools

## License

MIT License - Free for commercial and personal use