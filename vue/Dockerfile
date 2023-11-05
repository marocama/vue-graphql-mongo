FROM node

RUN npm install -g serve

WORKDIR /home/node/app

ENTRYPOINT ["npm", "install"]
ENTRYPOINT ["npm", "run", "build"]
ENTRYPOINT ["serve", "-s", "dist", "-l", "5173"]