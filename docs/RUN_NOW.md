# Run Gebo Presence App Now

## 1. Install

```bash
npm install
npm install --save-dev electron electron-builder concurrently wait-on
```

## 2. Environment

Copy `.env.example` to `.env`.

```bash
copy .env.example .env
```

## 3. Local Model

```bash
ollama pull llama3.2:3b
ollama serve
```

## 4. Database

```bash
npm run db:push
```

## 5. Web App

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Click `Seed Root Presence`.

## 6. Chat Test

Open:

```text
http://localhost:3000/chat-test
```

## 7. Desktop App

```bash
npx electron desktop/main.js
```

## 8. Build Desktop Installer

After scripts are added to `package.json`, run:

```bash
npm run desktop:build
```

Until then, use:

```bash
npx electron desktop/main.js
```
