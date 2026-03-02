<script lang="ts">
	interface Props {
		message?: string;
		theme?: {
			bgColor?: string;
			textColor?: string;
		};
	}

	let { message = "Can't wait to see you!", theme = {} }: Props = $props();

	const defaultTheme = {
		bgColor: 'bg-rose-900',
		textColor: 'text-rose-100'
	};

	const finalTheme = $derived({ ...defaultTheme, ...theme });
</script>

<footer class="{finalTheme.bgColor} py-10 text-center {finalTheme.textColor}">
	<p class="text-sm tracking-widest uppercase">{message}</p>
</footer>
