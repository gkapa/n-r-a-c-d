FROM ruby:3.0.3

ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo

# -qqオプションはエラー以外何も吐かないっていうやつ
# -yオプションは全部yesでやるってやつ
RUN apt-get update -qq \
    && apt-get install -y nodejs \
    postgresql-client
    # default-mysql-client
RUN mkdir /app_back
WORKDIR /app_back

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .

CMD ["rails", "server", "-b", "0.0.0.0"]