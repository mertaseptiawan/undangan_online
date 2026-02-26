export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    last_login: Date;
}

export interface Order {
    id: number;
    slug: string;
    design_id: string;
    groom_name: string;
    bride_name: string;
    location: string;
    event_date: Date | string; // SQL Date bisa berupa string "YYYY-MM-DD"
    event_time: string;
    groom_father: string;
    groom_mother: string;
    bride_father: string;
    bride_mother: string;
    groom_origin: string;
    bride_origin: string;
    bank_account: string;
    cover_img: string;
    banner_img: string;
    payment_proof: string;
    is_active: number; // tinyint(1) biasanya dibaca sebagai 0 atau 1
}

// Opsi tambahan jika kamu ingin menggunakan type RowDataPacket dari mysql2
import type { RowDataPacket } from 'mysql2';
export interface OrderRow extends Order, RowDataPacket {}