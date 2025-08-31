
# Symfony + React Demo Project

This is a demo project demonstrating a **Symfony backend** with a **React frontend** living in the `assets` directory. The setup allows **session sharing** between Symfony and a React frontend.

- Symfony handles routes under `/api`, `/twig`, and debug routes (`/_profiler`, `/_wdt`). Of course you can change the routes depending on you project.
- All other routes are managed by React using a catch-all Symfony route:

```php
Route(
    '/{reactRouting}',
    name: 'app_react',
    requirements: ['reactRouting' => '^(?!api|twig|_(profiler|wdt)).*'],
    defaults: ['reactRouting' => 'home']
)
```

This allows React to handle its own client-side routing while Symfony serves API endpoints and templates.

⚠️ The demo contains unnecessary dependencies in npm and composer. These can be cleaned up depending on your use case. It's meant as a quick starting point for a Symfony + React project.

## Setup

1. Install PHP dependencies
```bash
composer install -vvv
```

2. Install Node dependencies
```bash
npm install
npm install --force
```

3. Build React assets
```bash
npm run build
```

4. Setup database (SQLite)
```bash
php bin/console doctrine:schema:update --force
```

5. Create a user
```bash
php bin/console app:create-user test@example.com password
```

6. Start Symfony server
```bash
symfony serve
```

## Project Structure

```
├── assets/          # React frontend lives here
├── templates/       # Twig templates
├── src/             # Symfony backend (Controllers, Entities, etc.)
├── public/          # Compiled assets served by Symfony
└── ...
```

Symfony routes for API and Twig remain fully functional.

React SPA handles all other routes via the `/{reactRouting}` catch-all.
