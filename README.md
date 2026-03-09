# Каталог пользователей

Тестовое задание: SPA-приложение на React + TypeScript — каталог пользователей с поиском и пагинацией.

Данные берутся из публичного API [DummyJSON](https://dummyjson.com/docs/users).

## Стек

- React 19 + TypeScript
- Vite
- DummyJSON API

## Функциональность

- Список пользователей с аватаром, именем, email, телефоном и городом
- Поиск по имени (с debounce)
- Пагинация

## Запуск локально

**Требования:** Node.js >= 18, npm >= 9

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev
```

Приложение откроется по адресу: [http://localhost:5173](http://localhost:5173)

## Сборка

```bash
npm run build
```

Результат сборки окажется в папке `dist/`.

## Структура проекта

```
src/
├── api/           # Запросы к DummyJSON API
├── components/    # Переиспользуемые компоненты (UserCard, Pagination, SearchBar)
├── pages/         # Страница каталога пользователей
├── types/         # TypeScript-типы
└── hooks/         # Кастомные хуки
```
