# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Setup di Komputer / Laptop Baru

1. Clone repositori:
   ```sh
   git clone <repo-url>
   cd invitenow1
   npm install
   ```

2. Buat file `.env` dari template:
   ```sh
   cp .env.example .env
   ```
   *Sesuaikan `DB_PORT`, `DB_USER`, dan `DB_PASSWORD` sesuai konfigurasi MySQL di laptop tersebut (misal MAMP port `8889` atau XAMPP port `3306`).*

3. Pastikan MySQL sudah menyala, lalu jalankan migrasi database otomatis:
   ```sh
   npm run db:migrate
   ```

4. Jalankan server development:
   ```sh
   npm run dev
   ```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
