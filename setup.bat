@echo off
echo Setting up the project...

REM Set up Python virtual environment in api/venv
python -m venv api\venv
call api\venv\Scripts\activate

REM Install Python dependencies
pip install -r api\requirements.txt

REM Install Node.js dependencies
npm install

REM Build React app
npm run build

echo Setup complete.
