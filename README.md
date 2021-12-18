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

* Dockerfile
Dockerは、基本的にimageがcontainer作成と動作に必要になる。dockerfileは、packageをインストール及び動作させるための最小限の設定が含まれていて、このファイルでimageをbuildする。
  - command
    ```
    FROM         베이스 이미지 지정
    RUN          명령 실행
    CMD          컨테이너 실행 명령
    LABEL        라벨 설정
    EXPOSE       포트 익스포트
    ENV          환경변수
    ADD          파일/디렉토리 추가
    COPY         파일 복사
    ENTRYPOINT   컨테이너 실행 명령
    VOLUME       볼륨 마운트
    USER         사용자 지정
    WORKDIR      작업 디렉토리
    ARG          Dockerfile 에서의 변수
    ONBUILD      빌드 완료 후 생성된 이미지가 다른 dockerfile에서 FROM 으로 불러질 때   실행되는 명령
    STOPSIGNAL   시스템 콜 시그널 설정
    HEALTHCHECK  컨테이너의 헬스 체크
    SHELL        기본 쉘 설정
    ```
  - example
```

```

---

# その他


* readme preview ショートカット: Ctrl + Shift + V
* markdown 참고: https://gist.github.com/ihoneymon/652be052a0727ad59601

