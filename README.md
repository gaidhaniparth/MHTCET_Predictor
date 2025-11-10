# MHT-CET College Predictor

A professional web application that predicts college allotment possibilities based on MHT-CET scores using machine learning.

## Features

- Modern, professional UI with a clean white theme
- Real-time predictions using machine learning
- Responsive design that works on all devices
- Interactive result cards with detailed college information

## Prerequisites

Before running this project, make sure you have:

- Node.js 16+ installed
- Python 3.8+ installed
- Machine learning model files (contact repository owner for these files)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd MHTCET_Predictor_Final_Project
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Create a Python virtual environment (recommended):
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

4. Install Python dependencies:
```bash
pip install scikit-learn pandas numpy
```

5. Set up the machine learning models:
- Place `allotment_model_final.pkl` in the `models/` directory
- Place `ordinal_encoder_final.pkl` in the `models/` directory

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

- `pages/` - Next.js pages and API routes
- `components/` - React components
- `models/` - Machine learning model files
- `scripts/` - Python scripts for predictions
- `styles/` - CSS and styling files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Notes

- The predictions are based on historical data and should be used as a general guide only
- Final admission decisions depend on various factors including seat availability and reservation policies
- Keep your model files private and secure
