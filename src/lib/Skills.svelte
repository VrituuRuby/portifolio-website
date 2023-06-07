<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { backend, frontend } from './skills';
</script>

<div class="flex flex-col gap-1 py-4">
	<h3 class="font-poppins text-center text-3xl">{$_('skills_title')}</h3>
	<div class="flex gap-4 md:text-lg">
		<div class="flex flex-col flex-1 p-2 rounded-lg bg-gray-100 shadow-lg gap-2 dark:bg-gray-900">
			<h4
				class="font-poppins font-bold text-center text-xl rounded-full w-full text-gray-800 dark:text-white"
			>
				Frontend
			</h4>
			<div class="flex flex-col gap-2 justify-center sm:flex-row sm:flex-wrap">
				{#each frontend as skill}
					<div
						class="flex gap-2 p-2 font-rubik text-gray-800 dark:text-gray-200 bg-gray-300 rounded-lg dark:bg-gray-800"
					>
						<img src={skill.iconPath} alt={skill.name} />
						{skill.name}
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col flex-1 p-2 rounded-lg bg-gray-100 shadow-lg gap-2 dark:bg-gray-900">
			<h4
				class="font-poppins font-bold text-center text-xl rounded-full w-full text-gray-800 dark:text-white"
			>
				Backend
			</h4>
			<div class="flex flex-col gap-2 justify-center sm:flex-row sm:flex-wrap">
				{#each backend as skill}
					<div
						class="flex gap-2 p-2 font-rubik text-gray-800 dark:text-gray-200 bg-gray-300 rounded-lg dark:bg-gray-800"
					>
						<img src={skill.iconPath} alt={skill.name} />
						{skill.name}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
