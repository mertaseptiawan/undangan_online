<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData, ActionData } from './$types';

    export let data: PageData;
    export let form: ActionData;

    // Helper dengan type string untuk parameter
    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
</script>

<div class="min-h-screen bg-slate-50 p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
        <header class="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h1>
                <p class="text-slate-500 text-sm">Manajemen aktivasi undangan klien.</p>
            </div>
            <div class="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <span class="text-sm font-medium text-slate-600">Total: {data.orders.length}</span>
            </div>
        </header>

        {#if form?.success}
            <div class="mb-6 p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-medium">
                ✅ Status berhasil diperbarui!
            </div>
        {/if}

        <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Mempelai & Slug</th>
                            <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Tanggal</th>
                            <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Payment Proof</th>
                            <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                            <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        {#each data.orders as order}
                            <tr class="hover:bg-slate-50/50 transition-colors">
                                <td class="px-6 py-4">
                                    <p class="font-semibold text-slate-800">{order.groom_name} & {order.bride_name}</p>
                                    <p class="text-xs text-indigo-600 font-mono">/{order.slug}</p>
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-600">
                                    {formatDate(order.event_date)}
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-600">{order.payment_proof}</td>
                                <td class="px-6 py-4">
                                    {#if order.is_active}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Aktif
                                        </span>
                                    {:else}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                            Menunggu
                                        </span>
                                    {/if}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex justify-center gap-3">
                                        {#if !order.is_active}
                                            <form method="POST" action="?/activate" use:enhance>
                                                <input type="hidden" name="id" value={order.id} />
                                                <button type="submit" class="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                                                    Aktifkan
                                                </button>
                                            </form>
                                        {:else}
                                            <span class="text-sm text-slate-400">Selesai</span>
                                        {/if}
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
