@echo off
REM ZaniQ IWMS - Quick Start Script
REM Double-click this file to get started!

echo.
echo ============================================================
echo   ZANIQ IWMS V2 - QUICK START
echo ============================================================
echo.

echo What would you like to do?
echo.
echo 1. Test locally (install and run)
echo 2. Deploy to DigitalOcean
echo 3. Just view documentation
echo 4. Exit
echo.

set /p choice="Enter choice (1-4): "

if "%choice%"=="1" goto local
if "%choice%"=="2" goto deploy
if "%choice%"=="3" goto docs
if "%choice%"=="4" goto end

:local
echo.
echo Installing dependencies...
cd backend
call npm install
echo.
echo Done! Now run: npm run dev
pause
goto end

:deploy
echo.
echo Opening DigitalOcean signup...
start https://cloud.digitalocean.com
echo.
echo Opening deployment guide...
start DEPLOY_NOW.md
pause
goto end

:docs
echo.
echo Opening documentation...
start COMPLETE_PACKAGE.md
pause
goto end

:end
echo.
echo Goodbye!
timeout /t 2
