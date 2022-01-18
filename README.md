# n-r-a-c-d

---
# 始めに 

Next-Rails-Aws-CircleCI-Docker構成のページを作成することで、その過程でのすべてを記録するための備忘録  

---

# 目次

- [Ruby on Railsでバックエンド作成](#ruby_on_railsでバックエンド作成)
- [NextJsでフロントエンド作成](#nextjsでフロントエンド作成)
- [Docker](#docker)
- [Youtube Api 活用](#youtube_api_活用)
- [その他](#その他)

---

# Ruby on Railsでバックエンド作成

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

* src directory 作成
```
-- tsconfig.json に以下を追加

{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

* ライブラリ インストール
```
-- mui(material ui), styled-components, mui icon
npm i @mui/material @emotion/react @emotion/styled 
npm i @mui/styled-engine-sc styled-components; npm i -D @types/styled-components
npm i @mui/icons-material

*styled-components, muiはサーバーサイドレンダリングとの兼ね合いでスタイル定義の処理順序を制御
*NextJs + styled-components用 設定. 
npm i -D babel-plugin-styled-components
cd /front; type nul > .babelrc

.babelrc =>
{
    "presets": [
      "next/babel"
    ],
    "plugins": [
      [
        "babel-plugin-styled-components",
        {
          "ssr": true,
          "displayName": true,
        }
      ]
    ]
  }

*NextJs + mui用 設定.
https://mui.com/guides/styled-engine/#next-js
https://maku.blog/p/s6djqw3/

```


* ディレクトリ構成
```
TBD
```

---
# Docker

* Docker + NextJsで Hot Reloading追加方法
  - next.config.js　に以下を追加
```
module.exports = {
  ...
  webpackDevMiddleware: (config) => {
      config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
      };
      return config;
  }
  ...
}
```

---

# Youtube api 活用

* 登録
  - [google cloud platform](https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project) \
  => 「+API 및 서비스 사용 설정」 \
  => 「youtube」 検索 \
  => 「Youtube Data API v3」
  => 「사용자 인증 정보 만들기」 \
  => 「액세스할 데이터는 무엇인가요? * => 「공개 데이터」 チェック => 「완료」\
  => API key 仕様可能になる

* API使用にあたって
  - 一日無料に使用可能なポイントは 10000 単位
  - 簡単な作業から複雑な作業まで消費される単位が異なる
  - 詳しくは、https://developers.google.com/youtube/v3/getting-started?hl=ko



---

# その他

* TroubleShotting
  - React + Dockerだと Hot Reloadingが効かない  
  CHOKIDAR_USEPOLLING=true だと解決したという例をstackoverflowとqiitaなどで見つけたが、自分の開発環境では解決せず。webpackのどちらかの問題かと思うが…  
  Nextjsでの Hot Reloadingは docker 項目参照

* readme preview ショートカット: Ctrl + Shift + V
* markdown 参考リンク: https://gist.github.com/ihoneymon/652be052a0727ad59601

