FROM node as builder
WORKDIR /app
COPY . /app
RUN npm install --registry=https://registry.npm.taobao.org \
    && npm run build \
    && mv build ../ \
    && rm -rf * \
    && mv ../build .

FROM nginx as prod
COPY --from=builder /APP/build /usr/share/nginx/html
