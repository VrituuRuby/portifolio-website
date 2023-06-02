<script>
	const src = 'https://avatars.githubusercontent.com/u/61244052?v=4';

	import linkedin from '../lib/assets/icons/mdi_linkedin.svg';
	import github from './assets/icons/mdi_github.svg';
	import curriculum from './assets/icons/pepicons-pop_cv.svg';

	import cvSrc from './assets/Victor-Emanuel-de-Lima-Velozo-Curriculum.pdf';
</script>

<main class="flex justify-center items-center gap-16 p-[160px]">
	<img
		{src}
		class="max-w-[300px] w-[30vw] rounded-full border-white border-[7px]"
		alt="profile pic"
	/>
	<div class="flex-col text-4xl text-white">
		<h3 class="font-mono font-bold drop-shadow-default flex gap-2 items-center">
			Hello World
			<img
				width="40px"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand.png"
				alt="Peace hand sign"
			/>
		</h3>
		<h1 class="font-poppins font-black drop-shadow-default">Victor Velozo</h1>
		<h2 class="font-poppins font-black drop-shadow-default">Web Developer</h2>
		<div class="flex justify-start gap-4 mt-2">
			<a
				href="https://www.linkedin.com/in/victorlv/"
				target="_blank"
				class="rounded-md hover:bg-white transition-all p-1"
			>
				<img src={linkedin} alt="linkedin" class="drop-shadow-default" />
			</a>
			<a
				href="https://github.com/VrituuRuby"
				target="_blank"
				class="rounded-md hover:bg-white transition-all p-1"
			>
				<img src={github} alt="linkedin" class="drop-shadow-default" />
			</a>
			<a href={cvSrc} target="_blank" class="rounded-md hover:bg-white transition-all p-1">
				<img src={curriculum} alt="linkedin" class="drop-shadow-default" />
			</a>
		</div>
	</div>
</main>
