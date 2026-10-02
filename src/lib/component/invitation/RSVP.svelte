<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createPagination } from '$lib/stores/usePagination';
	import { db } from '$lib/firebase'; // <-- Import koneksi database Firebase
	import {
		collection,
		addDoc,
		getDocs,
		query,
		where,
		orderBy,
		serverTimestamp
	} from 'firebase/firestore';

	interface Props {
		title?: string;
		designId?: string;
		theme?: {
			sectionTitleColor?: string;
			cardBg?: string;
			buttonColor?: string;
			inputBorder?: string;
			cardShape?: string;
			inputShape?: string;
			buttonShape?: string;
			textColor?: string;
		};
	}

	let { title = 'Guest Book', designId = 'general', theme = {} }: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		cardBg: 'bg-white',
		buttonColor: 'bg-rose-600 hover:bg-rose-700',
		inputBorder: 'border-gray-200 focus:ring-rose-500',
		cardShape: 'rounded-2xl',
		inputShape: 'rounded-lg',
		buttonShape: 'rounded-lg'
	};

	const finalTheme = $derived({ ...defaultTheme, ...theme });
	let newName = $state('');
	let newStatus = $state('');
	let newMessage = $state('');
	let loading = $state(false);

	// Reuse existing pagination logic
	const pagination = createPagination([], 5);
	const { paginatedItems, currentPage, totalPages } = pagination;

	async function fetchMessages() {
		try {
			// Mengambil data dari Firestore berdasarkan designId
			const q = query(
				collection(db, 'guestbooks'),
				where('design_id', '==', designId),
				orderBy('created_at', 'desc')
			);

			const querySnapshot = await getDocs(q);
			const messages: any[] = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				messages.push({
					id: doc.id,
					...data,
					// Ubah timestamp Firestore ke format Date JavaScript
					created_at: data.created_at ? data.created_at.toDate() : new Date()
				});
			});

			pagination.updateData(messages);
		} catch (err) {
			console.error('Gagal mengambil pesan buku tamu dari Firebase:', err);
		}
	}

	async function handleSubmit(event: Event) {
		event.preventDefault(); // Mencegah halaman reload atau melompat ke atas

		if (!newName || !newMessage || !newStatus) return alert('Lengkapi semua data!');

		loading = true;
		try {
			await addDoc(collection(db, 'guestbooks'), {
				name: newName,
				status: newStatus,
				message: newMessage,
				design_id: designId,
				created_at: serverTimestamp()
			});

			// Reset form dan refresh data
			newName = '';
			newStatus = '';
			newMessage = '';
			await fetchMessages();
		} catch (err: any) {
			alert('Gagal mengirim pesan: ' + err.message);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchMessages();
	});
</script>

<section class="px-4 py-20">
	<div class="mx-auto max-w-2xl {finalTheme.cardBg} {finalTheme.cardShape} p-8 shadow-lg">
		<h2 class="mb-8 text-center font-serif text-4xl {finalTheme.sectionTitleColor}">{title}</h2>

		<form onsubmit={handleSubmit} class="mb-10 space-y-4">
			<input
				bind:value={newName}
				type="text"
				placeholder="Your Name"
				class="w-full border p-3 {finalTheme.inputBorder} {finalTheme.inputShape} focus:ring-2 focus:outline-none"
				required
			/>
			<select
				bind:value={newStatus}
				class="w-full border p-3 {finalTheme.inputBorder} {finalTheme.inputShape} focus:ring-2 focus:outline-none"
				required
			>
				<option value="" disabled selected>Konfirmasi Kehadiran</option>
				<option value="hadir">Hadir</option>
				<option value="tidak">Tidak Hadir</option>
			</select>
			<textarea
				bind:value={newMessage}
				placeholder="Tulis ucapan dan doa restu..."
				rows="4"
				class="w-full border p-3 {finalTheme.inputBorder} {finalTheme.inputShape} focus:ring-2 focus:outline-none"
				required
			></textarea>

			<button
				type="submit"
				disabled={loading}
				class="w-full {finalTheme.buttonColor} {finalTheme.buttonShape} cursor-pointer py-3 font-bold transition-all disabled:opacity-50"
			>
				{loading ? 'Mengirim...' : 'Kirim Ucapan'}
			</button>
		</form>

		<div class="custom-scrollbar max-h-125 space-y-6 overflow-y-auto pr-2">
			{#each $paginatedItems as guest (guest.id || guest.created_at)}
				<div class="border-b border-white/10 pb-4 last:border-0" transition:fade>
					<div class="mb-1 flex items-start justify-between">
						<h5 class="font-bold {finalTheme.textColor || 'text-gray-800'}">{guest.name}</h5>
						{#if guest.status === 'hadir'}
							<span
								class="rounded-full border border-emerald-500/40 bg-emerald-950/60 px-2 py-0.5 text-xs font-normal text-emerald-300"
								>Hadir</span
							>
						{:else}
							<span
								class="rounded-full border border-zinc-600/40 bg-zinc-800/80 px-2 py-0.5 text-xs font-normal text-zinc-400"
								>Tidak Hadir</span
							>
						{/if}
					</div>
					<p
						class="mt-1 text-sm whitespace-pre-wrap {finalTheme.textColor
							? 'text-neutral-300'
							: 'text-gray-600'}"
					>
						{guest.message}
					</p>
					<span class="mt-1 block text-[10px] opacity-60 {finalTheme.textColor || 'text-gray-400'}"
						>{new Date(guest.created_at).toLocaleDateString('id-ID', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})}</span
					>
				</div>
			{:else}
				<p class="text-center opacity-60 italic py-4 {finalTheme.textColor || 'text-gray-400'}">
					Belum ada ucapan. Jadilah yang pertama!
				</p>
			{/each}
		</div>

		<!-- Pagination -->
		{#if $totalPages > 1}
			<div class="mt-10 flex items-center justify-center gap-6 border-t border-gray-100 pt-6">
				<button
					onclick={pagination.prev}
					disabled={$currentPage === 1}
					class="flex items-center font-medium text-gray-600 transition-colors hover:text-gray-900 disabled:text-gray-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-1 h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					Prev
				</button>

				<span class="text-sm font-medium text-gray-500">
					{$currentPage} / {$totalPages}
				</span>

				<button
					onclick={pagination.next}
					disabled={$currentPage === $totalPages}
					class="flex items-center font-medium text-gray-600 transition-colors hover:text-gray-900 disabled:text-gray-300"
				>
					Next
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</section>
