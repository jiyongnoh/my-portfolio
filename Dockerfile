FROM node:20-alpine
WORKDIR /app

# package.json 관련 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 컨테이너에서 사용할 포트 노출
EXPOSE 3000

# 실행 명령 (npm start 실행)
CMD ["npm", "start"]
