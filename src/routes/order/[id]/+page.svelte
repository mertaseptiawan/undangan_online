<script lang="ts">
    import { enhance } from '$app/forms';
    export let form;
</script>

<div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Detail Undangan Online</h2>

    {#if form?.success}
        <div class="p-4 mb-4 bg-green-100 text-green-700 rounded-lg">{form.message}</div>
    {/if}

    <form method="POST" action="?/createOrder" enctype="multipart/form-data" use:enhance class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="slug" placeholder="Slug Undangan (contoh: budi-ani)" class="input-style" required>
            <select name="design_id" class="input-style">
                <option value="modern">Modern Design</option>
                <option value="rustic">Rustic Floral</option>
            </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <div class="space-y-3">
                <h3 class="font-bold text-indigo-700">Mempelai Pria</h3>
                <input type="text" name="groom_name" placeholder="Nama Lengkap Pria" class="input-style">
                <input type="text" name="groom_father" placeholder="Nama Ayah" class="input-style">
                <input type="text" name="groom_mother" placeholder="Nama Ibu" class="input-style">
                <input type="text" name="groom_origin" placeholder="Asal (Kota/Provinsi)" class="input-style">
            </div>
            <div class="space-y-3">
                <h3 class="font-bold text-pink-700">Mempelai Wanita</h3>
                <input type="text" name="bride_name" placeholder="Nama Lengkap Wanita" class="input-style">
                <input type="text" name="bride_father" placeholder="Nama Ayah" class="input-style">
                <input type="text" name="bride_mother" placeholder="Nama Ibu" class="input-style">
                <input type="text" name="bride_origin" placeholder="Asal (Kota/Provinsi)" class="input-style">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="date" name="event_date" class="input-style">
            <input type="text" name="event_time" placeholder="Contoh: 09:00 - Selesai" class="input-style">
            <input type="text" name="bank_account" placeholder="No. Rekening Kado Digital" class="input-style">
        </div>
        <textarea name="location" placeholder="Alamat Lengkap Lokasi Acara" class="input-style h-24"></textarea>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
            <div>
                <label class="label-text">Foto Cover</label>
                <input type="file" name="cover_img" accept="image/*">
            </div>
            <div>
                <label class="label-text">Foto Banner</label>
                <input type="file" name="banner_img" accept="image/*">
            </div>
            <div class="md:col-span-2">
                <label class="label-text">Gallery Foto (Bisa pilih banyak sekaligus)</label>
                <input type="file" name="gallery" accept="image/*" multiple class="w-full">
            </div>
        </div>

        <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <label class="block font-bold text-amber-800">Upload Bukti Transfer</label>
            <input type="file" name="payment_proof" accept="image/*" required>
        </div>

        <button type="submit" class="w-full bg-indigo-600 py-4 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all">
            Simpan & Aktifkan Undangan
        </button>
    </form>

    <style>
        .input-style { @apply w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none; }
        .label-text { @apply block text-xs font-bold text-gray-500 uppercase mb-1; }
    </style>
</div>