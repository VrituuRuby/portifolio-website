<script>
	import '../i18n';
	import { _ } from 'svelte-i18n';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>{$_('page_title')}</title>
</svelte:head>

<Header />
<main class="px-4">
	<slot />
</main>
<Footer />
