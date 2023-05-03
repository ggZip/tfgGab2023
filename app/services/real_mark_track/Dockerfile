FROM ruby:2.7

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 3005

CMD ["ruby", "app.rb", "-o", "0.0.0.0", "-p", "3005"]
