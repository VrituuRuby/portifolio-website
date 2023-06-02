<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />
<main class="px-4">
	<slot />
</main>
<Footer />
