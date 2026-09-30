<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface BankAccount {
		bankName: string;
		accountNumber: string;
		accountHolder: string;
		logo?: string;
	}

	interface Props {
		title?: string;
		subTitle?: string;
		bankAccounts: BankAccount[];
		theme?: {
			sectionTitleColor?: string;
			cardBg?: string;
			textColor?: string;

			buttonColor?: string;
			cardShape?: string;
			buttonShape?: string;
		};
	}

	let {
		title = 'Wedding Gift',
		subTitle = 'Your presence is the greatest gift of all. However, if you wish to honor us with a gift, we have provided the following account details.',
		bankAccounts,
		theme = {}
	}: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		cardBg: 'bg-white',
		textColor: 'text-gray-600',
		buttonColor: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
		cardShape: 'rounded-2xl',
		buttonShape: 'rounded-full'
	};

	const finalTheme = $derived({ ...defaultTheme, ...theme });

	let copiedIndex = $state<number | null>(null);

	function copyToClipboard(text: string, index: number) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
		}
		copiedIndex = index;
		setTimeout(() => {
			if (copiedIndex === index) copiedIndex = null;
		}, 2500);
	}
</script>

<section class="px-4 py-20 text-center">
	<div class="mx-auto max-w-3xl">
		<h2 use:reveal class="mb-8 font-serif text-5xl {finalTheme.sectionTitleColor}">{title}</h2>
		<p
			use:reveal={{ delay: 200 }}
			class="mb-12 {finalTheme.textColor} mx-auto max-w-lg leading-relaxed italic"
		>
			{subTitle}
		</p>

		<div class="grid justify-center">
			{#each bankAccounts as account, i}
				<div
					use:reveal={{ delay: 300 + i * 100 }}
					class="{finalTheme.cardBg} {finalTheme.cardShape} flex flex-col items-center p-8 shadow-lg"
				>
					{#if account.logo}
						<img src={account.logo} alt={account.bankName} class="mb-6 h-8 object-contain" />
					{:else}
						<h3 class="mb-6 text-xl font-bold {finalTheme.sectionTitleColor}">
							{account.bankName}
						</h3>
					{/if}

					<p class="mb-2 font-mono text-lg {finalTheme.textColor} tracking-wider">
						{account.accountNumber}
					</p>
					<p class="text-sm {finalTheme.textColor} mb-6 opacity-80">a.n {account.accountHolder}</p>

					<button
						onclick={() => copyToClipboard(account.accountNumber, i)}
						class="{finalTheme.buttonShape} px-6 py-2.5 text-sm font-medium transition-all {finalTheme.buttonColor} active:scale-95 flex items-center gap-2"
					>
						{#if copiedIndex === i}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Tersalin!</span>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
							</svg>
							<span>Salin Nomor Rekening</span>
						{/if}
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>
