<script lang="ts">
	/** @type {import('./$types').PageData} */
	// export let data;

	const technologies = [
		'TypeScript',
		'JavaScript',
		'Node.js',
		'React',
		'Next.js',
		'Svelte',
		'Express',
		'SQL',
		'MongoDB',
		'Python',
		'CSS',
		'HTML'
	];

	// Gatsby
	// Flask
	// GraphQL
</script>

<!-- FRONT PAGE -->
<section id="front-page" class="flex flex-col justify-center min-h-screen">
	<div class="text-6xl sm:text-7xl md:text-8xl">
		<h1 class="text-[var(--highlight)]">Ben Unyolo</h1>
		<h2 class="-mt-4 text-[var(--highlight-light)]">Developer</h2>
	</div>
</section>

<section id="about-me" class="sub-section">
	<h2 class="section-title">About Me</h2>
	<p>
		Hey! I’m Ben, a <strong>Full Stack Developer</strong> originally from England, currently based in
		Montreal.
	</p>

	<p>
		I'm currently working at <strong>iwn studio</strong> here in Montreal, where I'm helping to
		build innovative applications for businesses. Before that I was a Front End Developer for the
		marketing agency <strong>KRFTWRK</strong>. Check out my full career path so far on
		<a href="https://www.linkedin.com/in/benunyolo/" target="_blank" rel="noreferrer">LinkedIn</a>.
	</p>

	<p>
		I'm always on the lookout for new technologies and tools to dive into, some of the ones I've
		been working with recently include:
	</p>
	<ul class="flex flex-wrap -mt-3">
		{#each technologies as technology (technology)}
			<li class="pr-8">{technology}</li>
		{/each}
	</ul>
	<p>
		When I'm not coding, you can probably find me running, reading, or watching <strike
			>soccer</strike
		> football.
	</p>
</section>
