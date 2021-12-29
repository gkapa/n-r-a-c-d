FROM ruby:2.7

RUN apt-get update -qq \
    && apt-get install -y nodejs yarn \
    && postgresql-client
RUN mkdir /app_back
WORKDIR /app_back

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .

# Add a script to be executed every time the container starts.
COPY entirypoint.sh /usr/bin 

EXPOSE 3000

