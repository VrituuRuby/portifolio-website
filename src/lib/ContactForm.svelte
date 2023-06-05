<script>
	import { _ } from 'svelte-i18n';
</script>

<form id="contact" action="" class="flex flex-col items-center gap-2 pb-4">
	<h3 class="font-poppins text-center text-3xl">{$_('contact_title')}</h3>
	<label for="name" class="font-rubik text-base text-gray-800 flex flex-col w-full"
		>{$_('contact_name_label')}

		<input
			type="text"
			name="name"
			id=""
			placeholder={$_('contact_name_placeholder')}
			class="px-2 py-1 rounded-md border-gray-400 border focus:outline-salmon shadow-md"
		/>
	</label>
	<label for="email" class="font-rubik text-base text-gray-800 flex flex-col w-full"
		>Email
		<input
			type="text"
			name="email"
			id=""
			placeholder={$_('contact_email_placeholder')}
			class="px-2 py-1 rounded-md border-gray-400 border focus:outline-salmon shadow-md"
		/>
	</label>
	<label for="message" class="font-rubik text-base text-gray-800 flex flex-col w-full"
		>{$_('contact_message_label')}
		<textarea
			name="message"
			placeholder={$_('contact_message_placeholder')}
			class="px-2 py-1 rounded-md border-gray-400 border min-h-[120px] focus:outline-salmon shadow-md"
		/>
	</label>
	<button
		class="rounded-md border-gray-400 border max-w-xs text-center text-white font-poppins px-4 py-1 hover:brightness-110 shadow-md"
		>{$_('button_submit')}</button
	>
</form>

<style>
	h3 {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	button {
		background: linear-gradient(97.6deg, #d13e55 -2.41%, #e25555 109.8%);
	}
</style>
