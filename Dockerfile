# client
FROM node:14 as client-build
WORKDIR /usr/src/app
COPY client-next/ ./client-next/
RUN cd client-next && npm i && npm run build


# setup
FROM denoland/deno:1.15.3
WORKDIR /pkiop_blog
COPY --from=client-build /usr/src/app/client-next/build ./server/build/

USER deno

# env mode
ENV HOST=0.0.0.0
ENV PORT=8080

# transfer file host to docker
ADD . . 
EXPOSE 8080
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "./server/src/app.ts"]