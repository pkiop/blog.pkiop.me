# setup
FROM denoland/deno:1.15.3
WORKDIR /pkiop_blog

USER deno

# env mode
ENV HOST=0.0.0.0
ENV PORT=8080

# transfer file host to docker
ADD . . 
EXPOSE 8080
CMD ["run", "--allow-net", "--allow-env", "./src/app.ts"]