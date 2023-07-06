<script lang="ts">
	import '../app.css';

	import IconGitHub from '~icons/ri/github-fill';
	import IconLinkedIn from '~icons/ri/linkedin-box-fill';
	import IconArrowDown from '~icons/ri/arrow-down-line';

	const sidebarLinks = [
		{
			text: 'GitHub',
			url: 'https://github.com/benunyolo',
			icon: IconGitHub
		},
		{
			text: 'LinkedIn',
			url: 'https://www.linkedin.com/in/benunyolo/',
			icon: IconLinkedIn
		}
	];

	let windowScrollY: number;
	let windowInnerHeight: number;

	$: arrowHidden = windowScrollY > 100;
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowInnerHeight} />

<div class="_container">
	<!-- sidebar links -->
	<div class="relative">
		<div class="absolute translate-y-[calc(100vh-100%)] md:-translate-x-[calc(50px+50%)] md:fixed">
			<div class="flex flex-col py-6 space-y-4">
				{#each sidebarLinks as link (link.url)}
					<a href={link.url} target="_blank" rel="noreferrer">
						<svelte:component this={link.icon} class="w-10 h-10 sm:w-8 sm:h-8" />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- scroll arrow -->
	<div class="relative">
		<div class="absolute right-0 translate-y-[calc(100vh-100%)] md:translate-x-[calc(100%+50px)]">
			<a
				class={`flex flex-col justify-end mb-6 h-[calc(32px+8px)] ${
					arrowHidden ? 'invisible opacity-0' : 'visible opacity-100'
				}`}
				href="#about-me"
			>
				<IconArrowDown
					class={`w-10 h-10 animate-bounce transition-all duration-300 sm:w-8 sm:h-8`}
				/>
			</a>
		</div>
	</div>

	<slot />
</div>

<style>
</style>
