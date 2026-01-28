<script lang="ts">
	import Navbar from '$lib/component/landing/Navbar.svelte';
	import Hero from '$lib/component/landing/Hero.svelte';
	import Features from '$lib/component/landing/Features.svelte';
	import HowItWorks from '$lib/component/landing/HowItWorks.svelte';
	import TemplateGallery from '$lib/component/landing/TemplateGallery.svelte';
	import PriceList from '$lib/component/landing/PriceList.svelte';
	import Footer from '$lib/component/landing/Footer.svelte';
</script>

<main>
	<Navbar />
	<Hero />
	<Features />
	<HowItWorks />
	<TemplateGallery />
	<PriceList />
	<Footer />
</main>
