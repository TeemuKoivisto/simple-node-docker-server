FROM node:carbon

ENV INSTALL_DIR /var/www/node-server
ENV NODE_ENV production
ENV PORT 4444

RUN mkdir -p ${INSTALL_DIR}

WORKDIR ${INSTALL_DIR}

COPY package.json package-lock.json ./
RUN npm install

COPY src ./src

EXPOSE 4444
CMD ["node", "src/app.js"]