# n-r-a-c-d

---
# 始めに 

Next-Rails-Aws-CircleCI-Docker構成のポートフォリオを作成することで、その過程でのすべてを記録するための備忘録  
順次にアップデートする予定


---

# 目次

<!-- - [Golangでのバックエンド作成](#golangでのバックエンド作成) -->
- [Ruby on Railsでバックエンド作成](#ruby_on_railsでバックエンド作成)
- [NextJsでフロントエンド作成](#nextjsでフロントエンド作成)
- [Docker](#docker)
- [その他](#その他)

---

# Ruby on Railsでバックエンド作成

<del>
* Go 環境構築
    * Go パッケージダウンロード
        https://go.dev/ から windows用 msiファイルをダウンロード  
        ![IDB_2021_12_17_01_001](https://user-images.githubusercontent.com/44703302/146411047-e8561a92-d47b-49b1-938b-2935039b9b11.jpg)  
    * Vscode Go Extension インストール  
    ![IDB_2021_12_17_01_003](https://user-images.githubusercontent.com/44703302/146412309-1a6d7ae3-fc11-4e49-ba1f-d36b33a2b0a3.jpg)  
</del>
>

* フレームワーク選定にあたって
    - 当初はGolangで開発を進めようとしたが、とにかくRailsでの開発者の需要が高いこと、その割にgolangでの採用は、ほぼいないことで、まだ日本でgolangで開発をしてみてもアピールポイントは低くなると思った。また、golangのフレームワークの選定としても、gin, echo, fiber…数多くのフレームワークが乱立、まだ安定してないことで、Ruby on Railsに変更。

* Ruby on Rails 環境構築  
  - Ruby インストール  
    - ダウンロード  
    https://rubyinstaller.org/  
    - インストールが終了すると、CMD起動します。MSYS2をインストールするか確認されるので、「1,3」を入力して「Enter」を押下  
    - Ruby バージョン確認
    ```
    $ ruby -v
    ```
  - Bundler, Rails インストール  
    - Bundler: gem（rubyのライブラリ）の依存関係とバージョンを管理するためのツール  
    - Start Command Prompt with Ruby 実行  
    - 以下を実行
    ```
    $ gem install bundler
    $ gem install rails
    ```
    - Rails バージョン確認
    ```
    $ rails -v
    ```
  - 新規アプリケーション作成
    - 作成コマンド
    ```
    $ rails new back -d postgresql
    $ cd back
    $ gem install pg
    $ bundle install
    ```

  - DB連動  
    - DBのコンテナを使うように、/config/database.yml を修正
    ```
    ...
    default: &default
      adapter: postgresql
      encoding: unicode
      # For details on connection pooling, see Rails configuration guide
      # https://guides.rubyonrails.org/configuring.html#database-pooling
      # pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
      host: db
      username: postgres
      password: password
      pool: 5
    ...
    ```

    - サーバー実行前にdocker-compose.yml, DB作成
    ```
    docker-compose run back rake db:create
    ```

---

# NextJsでフロントエンド作成

* NextJs 環境構築
```
yarn create . --typescript
```

---
# Docker

---

# その他

* TroubleShotting
  - React + Dockerだと Hot Reloadingが効かない  
  CHOKIDAR_USEPOLLING=true だと解決したという例をstackoverflowとqiitaなどで見つけたが、自分の開発環境では解決せず。webpackのどちらかの問題かと思うが…  
  そのため、フロントエンド環境はNextjsに変更。  
  Nextjsでの Hot Reloadingは以下を next.config.jsに追加
    ```
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300
        };
        return config;
    }
    ```

* readme preview ショートカット: Ctrl + Shift + V
* markdown 参考リンク: https://gist.github.com/ihoneymon/652be052a0727ad59601

