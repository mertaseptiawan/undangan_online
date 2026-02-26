import db from '$lib/db';
import type { OrderRow } from '$lib/types';
import type { PageServerLoad, Actions } from './$types';

// Ini untuk mengambil data saat halaman pertama kali dibuka
export const load: PageServerLoad = async () => {
    const [rows] = await db.query<OrderRow[]>('SELECT * FROM orders');
    return {
        orders: rows
    };
};

// Ini untuk menangani pengiriman data (misal: update status)
export const actions: Actions = {
    updateStatus: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');

        // Contoh query update
        await db.query('UPDATE orders SET is_active = 1 WHERE id = ?', [id]);

        return {
            success: true // Ini yang akan ditangkap oleh variabel `form`
        };
    }
};