<script>
	import { projects } from './projects';
</script>

<section class="max-w-[1200px] mx-auto my-4 flex-col">
	<h3 class="font-poppins text-3xl font-bold text-center">Projetos</h3>

	<div class="flex justify-between gap-2">
		{#each projects as project}
			<article class="flex-1 flex flex-col p-4">
				<h3 class="font-rubik font-bold text-center text-2xl">{project.name}</h3>
				<img src={project.image} alt={project.name} class="p-2" />
				<div class="flex justify-between gap-2">
					<a
						class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center items-center transition hover:brightness-110"
						href={project.repo}
						target="_blank"
					>
						Repositorio</a
					>
					{#if project.liveDemo}
						<a
							class="link flex gap-4 rounded-md font-poppins text-white font-bold text-base flex-1 p-2 justify-center transition hover:brightness-110"
							target="_blank"
							href={project.liveDemo}
						>
							Live Demo</a
						>
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
