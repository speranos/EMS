# install --cask dotnet-sdk
# dotnet add package Microsoft.EntityFrameworkCore.Sqlite
# dotnet add package Microsoft.EntityFrameworkCore.Design

FROM node:20-alpine

RUN npm install

COPY ./EmsApi/ ./

EXPOSE 5146

ENTRYPOINT ["sh", "./script.sh"]

CMD [ "dotnet run" ]

