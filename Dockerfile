# Nodeイメージの取得
FROM node:14.7.0-alpine

ENV HOME="/app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo 

WORKDIR ${HOME}

RUN apk update && \
    apk upgrade && \
    npm install -g npm && \
    npm install -g @vue/cli

# RUN npm install 
# RUN npm rebuild node-sass 

ENV HOST 0.0.0.0
EXPOSE 3000

# 起動コマンド
CMD ["/bin/ash"]