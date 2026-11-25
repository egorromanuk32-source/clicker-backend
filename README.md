# Clicker Backend

Бэкенд для игры-кликера: Node.js, Express, SQLite.

## Требования

- Node.js 18 или новее (для `npm run dev` нужен Node 18.11+)

## Запуск

1. Перейди в папку проекта:
   ```bash
   cd clicker-backend
   ```
2. Установи зависимости:
   ```bash
   npm install
   ```
3. Запусти сервер:
   ```bash
   npm start
   ```
   Для режима разработки с авто-перезагрузкой:
   ```bash
   npm run dev
   ```

Сервер стартует на `http://localhost:3000`. Файл `database.sqlite` создаётся в корне проекта автоматически при первом запуске.

## API

- `GET /api/load` — данные игрока:
  `{ "id": 1, "balance": 0, "click_level": 0, "auto_level": 0 }`
- `POST /api/save` — тело `{ "balance": 10, "click_level": 1, "auto_level": 0 }`, ответ `{ "success": true }`

## Проверка

```bash
curl http://localhost:3000/api/load

curl -X POST http://localhost:3000/api/save \
  -H "Content-Type: application/json" \
  -d '{"balance":100,"click_level":2,"auto_level":1}'
```
