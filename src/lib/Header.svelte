<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import { fly } from 'svelte/transition';
	import DropdownSelect from './DropdownSelect.svelte';

	let showNav = false;

	export let dark = false;
</script>

<header class="bg-[rgba(0,0,0,0.7)] backdrop-blur-sm shadow-default fixed w-full z-10">
	<div class="flex w-full justify-between items-center relative px-4 max-w-[1200px] mx-auto">
		<button
			class="p-3 hover:bg-[#222] transition text-center text-white font-rubik sm:hidden"
			on:click={() => (showNav = !showNav)}
		>
			<img src="./icons/menu.svg" alt="menu" />
		</button>
		{#if showNav}
			<nav
				class="absolute shadow-default sm:hidden top-[100%] left-0 font-rubik text-base text-white flex flex-col items-center gap-1
				bg-[rgba(0,0,0,0.5)] p-1 w-full"
				transition:fly={{ duration: 200, y: -20 }}
			>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#home"
					on:click={() => (showNav = false)}>{$_('nav_home')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] trsnsition text-center"
					href="#about"
					on:click={() => (showNav = false)}>{$_('nav_about')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#projects"
					on:click={() => (showNav = false)}>{$_('nav_projects')}</a
				>
				<a
					class="w-full px-2 py-3 hover:bg-[#222] transition text-center"
					href="#contact"
					on:click={() => (showNav = false)}>{$_('nav_contact')}</a
				>
			</nav>
		{/if}
		<nav
			class="hidden sm:flex font-rubik text-base text-white justify-center items-center gap-1"
			transition:fly
		>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#home">{$_('nav_home')}</a>
			<a class="px-2 py-3 hover:bg-[#222] trsnsition text-center" href="#about">{$_('nav_about')}</a
			>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#projects"
				>{$_('nav_projects')}</a
			>
			<a class="px-2 py-3 hover:bg-[#222] transition text-center" href="#contact"
				>{$_('nav_contact')}</a
			>
		</nav>
		<div class="flex items-center gap-2">
			<button
				class="p-1 hover:bg-[#222] transition text-center text-white font-rubik rounded-full"
				on:click|preventDefault={() => (dark = !dark)}
			>
				<img
					src={dark ? './icons/sun.svg' : './icons/moon.svg'}
					alt="Toggle dark mode"
					class="w-6"
				/>
			</button>
			<DropdownSelect />
		</div>
	</div>
</header>
