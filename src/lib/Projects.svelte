<script>
	import { _ } from 'svelte-i18n';
	import { projects } from './projects';
	import { locale } from 'svelte-i18n';
</script>

<section class="my-4 flex flex-col gap-4 scroll-mt-12" id="projects">
	<h3 class="font-poppins text-3xl text-center">{$_('projects_title')}</h3>

	<div class="flex flex-col md:flex-row justify-between gap-4">
		{#each projects as project}
			<article class="flex-1 flex flex-col">
				<h3 class="font-rubik font-bold text-center text-2xl">{project.name}</h3>
				<img src={project.image} alt={project.name} class="drop-shadow-default rounded-md" />
				<p class="font-roboto text-base text-center text-black-900 dark:text-gray-200">
					{project.title[$locale]}
				</p>
				<div class="flex flex-col md:flex-row justify-between gap-2">
					<a
						class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center items-center transition hover:brightness-110"
						href={project.repo}
						target="_blank"
					>
						{$_('projects_repo_link')}
					</a>
					{#if project.liveDemo}
						<a
							class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center items-center transition hover:brightness-110"
							target="_blank"
							href={project.liveDemo}
						>
							{$_('projects_live_link')}
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	a.link {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
	}
</style>
