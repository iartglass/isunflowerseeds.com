@echo off
title HydroBase Preview Server
echo ============================================
echo  HydroBase groutedmattress.com - Dev Preview
echo ============================================
echo.

cd /d "%~dp0土工膜袋新网站\construction-service-website"

echo Installing dependencies for Windows...
npm install --legacy-peer-deps
echo.

echo Starting preview server at http://localhost:3000
echo Press Ctrl+C to stop.
echo.

start "" msedge "http://localhost:3000"

npm run dev
pause
