# r-g-a-c-d

---
# 始めに 

React-Golang-Aws-CircleCI-Docker構成のポートフォリオを作成することで、その過程でのすべてを記録するための備忘録  
順次にアップデートする予定


---

# 目次

- [Golangでのバックエンド作成](#golangでのバックエンド作成)
- [Docker](#docker)
- [その他](#その他)

---

# Golangでのバックエンド作成

* Go 環境構築
    * Go パッケージダウンロード
        https://go.dev/ から windows用 msiファイルをダウンロード  
        ![IDB_2021_12_17_01_001](https://user-images.githubusercontent.com/44703302/146411047-e8561a92-d47b-49b1-938b-2935039b9b11.jpg)  
    * Vscode Go Extension インストール  
    ![IDB_2021_12_17_01_003](https://user-images.githubusercontent.com/44703302/146412309-1a6d7ae3-fc11-4e49-ba1f-d36b33a2b0a3.jpg)  
>

* フレームワークの選定
    *  [Golang으로 백엔드 개발하기 - 3. 웹 애플리케이션 개발해보기 (feat. fiber)](https://umi0410.github.io/blog/golang/how-to-backend-in-go-webapp/)  
    fiber, echo, gin がWebフレームワークとしてよく使われているらしい。 fiberを使うようにする
    https://github.com/gofiber/fiber
    * [(Youtube) React and Golang JWT Authentication - Tutorial](https://www.youtube.com/watch?v=d4Y2DkKbxM0)  
    作成は、こちらを参照する


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

