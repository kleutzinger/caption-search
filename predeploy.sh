#!/usr/bin/env sh
# [ -d "/app" ] &&  cd /app
echo "inside directory" $(pwd)
cd frontend
NODE_ENV=build npm ci
# build outputs to ../backend/dist
npm run build
cd ../backend/
npm install
