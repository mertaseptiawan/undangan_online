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

	const finalTheme = { ...defaultTheme, ...theme };

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		alert('Account number copied!');
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
						onclick={() => copyToClipboard(account.accountNumber)}
						class="{finalTheme.buttonShape} px-4 py-2 text-sm font-medium transition-colors {finalTheme.buttonColor}"
					>
						Copy Account Number
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>
