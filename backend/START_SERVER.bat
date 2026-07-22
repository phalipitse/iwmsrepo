@echo off
echo.
echo ============================================================
echo   Starting ZaniQ IWMS Backend Server
echo ============================================================
echo.
echo API will be available at: http://localhost:3000
echo Health check: http://localhost:3000/health
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
npm run dev
