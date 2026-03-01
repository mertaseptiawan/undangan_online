<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { supabase } from '$lib/supabase';
	import { createPagination } from '$lib/stores/usePagination';

	interface Props {
		title?: string;
		designId: string;
		theme?: {
			sectionTitleColor?: string;
			cardBg?: string;
			buttonColor?: string;
			inputBorder?: string;
			cardShape?: string;
			inputShape?: string;
			buttonShape?: string;
		};
	}

	let { title = 'Guest Book', designId, theme = {} }: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		cardBg: 'bg-white',
		buttonColor: 'bg-rose-600 hover:bg-rose-700',
		inputBorder: 'border-gray-200 focus:ring-rose-500',
		cardShape: 'rounded-2xl',
		inputShape: 'rounded-lg',
		buttonShape: 'rounded-lg'
	};

	const finalTheme = { ...defaultTheme, ...theme };

	let newName = $state('');
	let newStatus = $state('');
	let newMessage = $state('');
	let loading = $state(false);

	// Reuse existing pagination logic
	const pagination = createPagination([], 5);
	const { paginatedItems, currentPage, totalPages } = pagination;

	// src/lib/component/invitation/RSVP.svelte

	async function fetchMessages() {
		const { data, error } = await supabase
			.from('guestbook')
			.select('*')
			.eq('design_id', designId) // Ini wajib agar tidak campur aduk
			.order('created_at', { ascending: false });

		if (!error) {
			pagination.updateData(data || []);
		}
	}

	async function handleSubmit() {
		if (!newName || !newMessage || !newStatus) return alert('Lengkapi semua data!');

		loading = true;
		const { error } = await supabase
			.from('guestbook')
			.insert([{ 
				name: newName, 
				status: newStatus, 
				message: newMessage,
				design_id: designId // Ini wajib agar tersimpan di kolom yang tepat
			}]);

		if (error) {
			alert('Gagal: ' + error.message);
		} else {
			// Reset form dan refresh data
			newName = ''; newStatus = ''; newMessage = '';
			await fetchMessages();
		}
		loading = false;
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
				class="w-full border p-3 {finalTheme.inputBorder} {finalTheme.inputShape} bg-white focus:ring-2 focus:outline-none"
				required
			>
				<option value="" disabled selected>Will you attend?</option>
				<option value="hadir">Attending</option>
				<option value="tidak">Not Attending</option>
			</select>
			<textarea
				bind:value={newMessage}
				placeholder="Your Wishes"
				rows="4"
				class="w-full border p-3 {finalTheme.inputBorder} {finalTheme.inputShape} focus:ring-2 focus:outline-none"
				required
			></textarea>

			<button
				type="submit"
				disabled={loading}
				class="w-full {finalTheme.buttonColor} {finalTheme.buttonShape} cursor-pointer py-3 font-bold text-white transition-colors disabled:opacity-50"
			>
				{loading ? 'Sending...' : 'Send Message'}
			</button>
		</form>

		<div class="custom-scrollbar max-h-[500px] space-y-6 overflow-y-auto pr-2">
			{#each $paginatedItems as guest (guest.id || guest.created_at)}
				<div class="border-b border-gray-100 pb-4 last:border-0" transition:fade>
					<div class="mb-1 flex items-start justify-between">
						<h5 class="font-bold text-gray-800">{guest.name}</h5>
						{#if guest.status === 'hadir'}
							<span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-normal text-green-700"
								>Attending</span
							>
						{:else}
							<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-normal text-gray-500"
								>Not Attending</span
							>
						{/if}
					</div>
					<p class="mt-1 text-sm whitespace-pre-wrap text-gray-600">{guest.message}</p>
					<span class="mt-1 block text-[10px] text-gray-400"
						>{new Date(guest.created_at).toLocaleDateString()}</span
					>
				</div>
			{:else}
				<p class="text-center text-gray-400 italic py-4">No messages yet. Be the first!</p>
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
