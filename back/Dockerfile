FROM ruby:3.0.3

ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo

# パッケージのリストをアップデート。
# -qqオプションはエラー以外何も吐かないっていうやつ
# -yオプションは全部yesでやるってやつ
# build-essential libpq-dev: コンパイラなどのビルドに必要なパッケージ
RUN apt-get update -qq \
    && apt-get install -y nodejs \
    # build-essential libpq-dev \
    postgresql-client
    # default-mysql-client
RUN mkdir /app_back
WORKDIR /app_back

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]