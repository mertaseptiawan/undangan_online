import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$lib/db';
import type { GuestbookRow } from '$lib/types';
import type { ResultSetHeader } from 'mysql2';

export const GET: RequestHandler = async ({ url }) => {
    const designId = url.searchParams.get('designId') || url.searchParams.get('design_id');

    try {
        let rows: GuestbookRow[];
        if (designId) {
            [rows] = await db.query<GuestbookRow[]>(
                'SELECT * FROM guestbook WHERE design_id = ? ORDER BY created_at DESC',
                [designId]
            );
        } else {
            [rows] = await db.query<GuestbookRow[]>(
                'SELECT * FROM guestbook ORDER BY created_at DESC'
            );
        }

        return json(rows);
    } catch (error: any) {
        console.error('Error fetching guestbook:', error);
        return json({ error: error.message || 'Gagal mengambil data buku tamu' }, { status: 500 });
    }
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, status, message, design_id } = body;

        if (!name || !status || !message || !design_id) {
            return json({ error: 'Lengkapi semua data yang diperlukan!' }, { status: 400 });
        }

        const validStatus = status === 'tidak' ? 'tidak' : 'hadir';

        const [result] = await db.execute<ResultSetHeader>(
            'INSERT INTO guestbook (design_id, name, status, message) VALUES (?, ?, ?, ?)',
            [design_id, name.trim(), validStatus, message.trim()]
        );

        return json({
            success: true,
            id: result.insertId,
            message: 'Ucapan & RSVP berhasil dikirim!'
        });
    } catch (error: any) {
        console.error('Error saving guestbook:', error);
        return json({ error: error.message || 'Gagal menyimpan data buku tamu' }, { status: 500 });
    }
};
