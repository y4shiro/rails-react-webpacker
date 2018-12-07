# rails + react + webpacker 調査  
Rails + React.js プロジェクトを立ち上げる際の調査  

# 環境  

- ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-darwin16]  
- gem 'bundler' 1.17.1  
- Rails 5.2.2  

# 環境構築  

# 開発環境起動  

Rails server と webpack-dev-server の起動が必要  
```bash
$ bundle exec rails s
$ ./bin/webpack-dev-server
```

foreman 導入済みなので、下記のほうが楽  
```bash
$ bundle exec foreman start
```
