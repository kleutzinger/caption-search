#!/usr/bin/env sh
# [ -d "/app" ] &&  cd /app
echo "inside directory" $(pwd)
cd frontend
npm install
npm run build
cp -r dist ../backend/
cd ../backend/
npm install
