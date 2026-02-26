export const prerender = false;

import db from '$lib/db';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const actions: Actions = {
    createOrder: async ({ request }) => {
        const formData = await request.formData();
        
        // Helper Simpan File
        const saveFile = async (file: File | null) => {
            if (!file || file.size === 0) return null;
            const ext = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${ext}`;
            const filePath = path.join(process.cwd(), 'static', 'uploads', fileName);
            const buffer = Buffer.from(await file.arrayBuffer());
            fs.writeFileSync(filePath, buffer);
            return fileName;
        };

        try {
            // 1. Proses Upload File Tunggal
            const cover_img = await saveFile(formData.get('cover_img') as File);
            const banner_img = await saveFile(formData.get('banner_img') as File);
            const payment_proof = await saveFile(formData.get('payment_proof') as File);

            // 2. Simpan Data Utama ke Tabel `orders`
            // Sesuaikan dengan kolom di screenshot phpMyAdmin kamu
            const [result] = await db.execute(
                `INSERT INTO orders 
                (slug, design_id, groom_name, bride_name, location, event_date, event_time, 
                groom_father, groom_mother, bride_father, bride_mother, 
                groom_origin, bride_origin, bank_account, cover_img, banner_img, payment_proof) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    formData.get('slug'), formData.get('design_id'), 
                    formData.get('groom_name'), formData.get('bride_name'),
                    formData.get('location'), formData.get('event_date'), formData.get('event_time'),
                    formData.get('groom_father'), formData.get('groom_mother'),
                    formData.get('bride_father'), formData.get('bride_mother'),
                    formData.get('groom_origin'), formData.get('bride_origin'),
                    formData.get('bank_account'), cover_img, banner_img, payment_proof
                ]
            );

            const orderId = (result as any).insertId;

            // 3. Proses Multiple Upload untuk Gallery
            const galleryFiles = formData.getAll('gallery') as File[];
            for (const file of galleryFiles) {
                if (file.size > 0) {
                    const fileName = await saveFile(file);
                    // Simpan ke tabel galleries (pastikan tabel ini sudah dibuat)
                    await db.execute(
                        'INSERT INTO galleries (order_id, image_path) VALUES (?, ?)',
                        [orderId, fileName]
                    );
                }
            }

            return { success: true, message: "Data lengkap berhasil dikirim!" };
        } catch (error) {
            console.error(error);
            return fail(500, { message: "Gagal simpan data. Cek terminal!" });
        }
    }
};