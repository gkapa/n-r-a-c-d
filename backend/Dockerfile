FROM golang:1.12.0-alpine3.9
# go getコマンドは裏でgitコマンドを使用しているようですがalpineにはgitが入っていないのでインストールする必要があります。
RUN apk update && apk add git
# get image from docker and create app directory
RUN mkdir /app
ADD . /app
WORKDIR /app
# RUN go build -o main .
# CMD ["/app/main"]