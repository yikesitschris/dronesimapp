# Drone Detection Display

A web application that simulates drone detection, processes the data, and displays it in a user-friendly interface with real-time updates and data visualization.

## Table of Contents

- [Project Title and Description](#project-title-and-description)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

### Prerequisites

- [Python 3.x](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```
2. Run the setup script:
   - For Linux/MacOS:
     ```bash
     .\setup.sh
     ```
   - For Windows:
     ```bash
     setup.bat
     ```

### Usage

Running the Application

1. Activate the virtual environment:
   - For Linux/MacOS:
     ```bash
     source api/venv/bin/activate
     ```
   - For Windows:
     ```bash
     call api\venv\Scripts\activate
     ```
2. Start the flask server:
   ```bash
   python api/app.py
   ```
4. The React frontend should be served automatically from the build/ directory.
5. Open your browser and navigate to http://127.0.0.1:5001 to view the data being sent.

### Project Structure

$ ./DRONE-SIM-APP.
# Project tree

.
 * [DRONE-SIM-APP](./DRONE-SIM-APP)
 * [build](./build)
 * [src](./src)
 * [api](./api)
   * [venv/.ext](./venv)
   * [app.py.ext](./app.py)
   * [requirements.txt](./requirements.txt)
 * [setup.sh](./setup.sh)
 * [setup.bat](./setup.bat)
 * [.gitignore](./.gitignore)
 * [README.md](./README.md)

DRONE-SIM-APP/
│
├── build/ # React build files (for production)
├── src/ # Source files for your React app
│
├── api/
│ ├── venv/ # Virtual environment for Python
│ ├── app.py # Flask application code
│ └── requirements.txt # Python dependencies
│
├── setup.sh # Shell script for Linux/macOS setup
├── setup.bat # Batch script for Windows setup
├── package.json # Node.js dependencies and scripts
├── .gitignore # Git ignore file
│
└── README.md # Project documentation
