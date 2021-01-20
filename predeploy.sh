#!/usr/bin/env sh
# [ -d "/app" ] &&  cd /app
echo "inside directory" $(pwd)
cd frontend
NODE_ENV=build npm ci
npm run build
cp -r dist ../backend/
cd ../backend/
npm install
