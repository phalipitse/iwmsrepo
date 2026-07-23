# ZaniQ IWMS Python Utilities

Python-based utilities and scripts for data processing, reporting, and automation.

## Setup

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/Mac)
source venv/bin/activate

# Install dependencies
pip install -r ../requirements.txt
```

## Available Utilities

### 1. Database Connection
- `db_connection.py` - PostgreSQL connection helper

### 2. Data Export
- `export_reports.py` - Export work orders, assets to Excel/PDF

### 3. Analytics
- `analytics.py` - Generate usage statistics and reports

### 4. Data Migration
- `migrate_data.py` - Import/export data from legacy systems

## Usage with Main App

These Python utilities complement the Node.js backend:
- Node.js handles real-time API requests
- Python handles batch processing, reports, analytics

## Database Connection

Uses the same PostgreSQL database as the Node.js backend.
Connection string from environment variable: `DATABASE_URL`
