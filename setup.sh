#!/bin/bash
echo "Setting up the project..."

# Set up Python virtual environment in api/venv
python3 -m venv api/venv
source api/venv/bin/activate

# Install Python dependencies
pip install -r api/requirements.txt

# Install Node.js dependencies
npm install

# Build React app
npm run build

echo "Setup complete."
