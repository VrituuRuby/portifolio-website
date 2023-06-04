<script lang="ts">
	import { locale } from 'svelte-i18n';
	let showOptions = false;
</script>

<div class="relative text-white">
	<button
		class="flex gap-1 items-center font-rubik text-white rounded-full py-1 px-2 bg-gray-900"
		on:click={() => (showOptions = !showOptions)}
	>
		{#if $locale === 'en-US'}
			<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" class="w-5" alt="" />
			EN
		{:else if $locale === 'pt-BR'}
			<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" class="w-5" alt="" />
			BR
		{/if}
	</button>
	{#if showOptions}
		<ul class="absolute top-full rounded-lg mt-1 bg-gray-800 w-full p-0.5">
			<li>
				<button
					class="flex gap-1 justify-center items-center hover:bg-gray-700 w-full p-0.5 rounded-lg"
					on:click={() => {
						$locale = 'pt-BR';
						showOptions = false;
					}}
				>
					<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" class="w-5" alt="" />
					BR
				</button>
			</li>
			<li>
				<button
					class="flex gap-1 justify-center items-center hover:bg-gray-700 w-full p-0.5 rounded-lg"
					on:click={() => {
						$locale = 'en-US';
						showOptions = false;
					}}
				>
					<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" class="w-5" alt="" />
					EN
				</button>
			</li>
		</ul>
	{/if}
</div>
