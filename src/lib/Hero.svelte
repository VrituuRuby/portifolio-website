<script>
	const src = 'https://avatars.githubusercontent.com/u/61244052?v=4';

	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import GoFile from 'svelte-icons/go/GoFile.svelte';

	const cvSrc = './Victor-Emanuel-de-Lima-Velozo-Curriculum.pdf';
</script>

<main id="home" class="flex justify-center items-center gap-16 p-[140px] h-[100vh]">
	<div class="flex-col text-6xl text-white">
		<h3 class="font-mono font-bold drop-shadow-default flex gap-2 items-center">
			Hello World
			<img
				width="50px"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand.png"
				alt=""
			/>
		</h3>
		<h1 class="font-poppins font-black drop-shadow-default">Victor Velozo</h1>
		<h2 class="font-poppins font-black drop-shadow-default">Web Developer</h2>
		<div class="flex justify-start gap-4 mt-2 text-[#353546]">
			<a
				href="https://www.linkedin.com/in/victorlv/"
				target="_blank"
				class="rounded-md hover:bg-white transition-all w-14 h-14 p-1"
			>
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/VrituuRuby"
				target="_blank"
				class="rounded-md hover:bg-white transition-all w-14 h-14 p-1"
			>
				<FaGithubSquare />
			</a>
			<a
				href={cvSrc}
				target="_blank"
				class="rounded-md hover:bg-white transition-all w-14 h-14 p-1"
			>
				<GoFile class="drop-shadow-default" />
			</a>
		</div>
	</div>
</main>
