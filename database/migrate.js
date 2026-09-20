import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load file .env jika ada
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    if (process.loadEnvFile) {
        process.loadEnvFile(envPath);
    } else {
        // Fallback parser sederhana jika dibutuhkan
        const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
        for (const line of lines) {
            const [key, ...vals] = line.split('=');
            if (key && vals.length) {
                process.env[key.trim()] = vals.join('=').trim();
            }
        }
    }
}

const host = process.env.DB_HOST || '127.0.0.1';
const port = Number(process.env.DB_PORT) || 8889;
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'root';
const database = process.env.DB_NAME || 'invitenow';

async function migrate() {
    console.log(`Menghubungkan ke MySQL di ${host}:${port} dengan user "${user}"...`);
    
    // Koneksi ke server MySQL tanpa memilih database terlebih dahulu
    const conn = await mysql.createConnection({
        host,
        port,
        user,
        password,
        multipleStatements: true
    });

    console.log(`Memastikan database "${database}" tersedia...`);
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await conn.query(`USE \`${database}\`;`);

    console.log('Mengeksekusi database/schema.sql...');
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await conn.query(schemaSql);

    console.log(`✅ Sukses! Database "${database}" dan semua tabel siap digunakan.`);
    await conn.end();
}

migrate().catch((err) => {
    console.error('❌ Gagal menjalankan migrasi:', err.message);
    process.exit(1);
});
