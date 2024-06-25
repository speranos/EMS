FROM debian:bullseye

WORKDIR /app

COPY ./EmsApi /app/EmsApi

RUN chmod +x ./EmsApi/script.sh

EXPOSE 5146

WORKDIR /app/EmsApi

ENTRYPOINT ["sh", "./script.sh"]



