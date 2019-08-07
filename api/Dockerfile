################ Build the application ############################

FROM node:12.7-slim

RUN userdel node

ARG UID=1000
RUN useradd --uid $UID --create-home user
USER user

WORKDIR /usr/src/api/

ENV PATH="/usr/src/api/node_modules/.bin:${PATH}"

CMD ["yarn", "start"]
