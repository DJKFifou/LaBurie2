<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();

	let element: HTMLElement[] = $state([]);
	let containerWidth: number = $state(0);
	let paused = $state(false);
	let renderQty = $derived(Math.ceil(containerWidth / (element[0]?.clientWidth || 1) + 2));

	function marqueeAnimation(speed: number) {
		let offSet = 0;
		const interval = setInterval(() => {
			if (paused) return;
			element[0].style.marginLeft = `-${offSet}px`;
			if (offSet > element[0].clientWidth) {
				offSet = 0;
			}
			offSet += speed;
		}, 16);

		return () => clearInterval(interval);
	}
	onMount(() => {
		return marqueeAnimation(2.5);
	});
</script>

<div
	class="flex w-full overflow-hidden"
	bind:clientWidth={containerWidth}
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	role="none"
>
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array(renderQty) as _, i (i)}
		<div bind:this={element[i]}>
			{@render children()}
		</div>
	{/each}
</div>
