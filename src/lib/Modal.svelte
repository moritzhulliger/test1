<script>
	/**
     * @type {boolean}
     */
	 export let showModal; // boolean

	/**
     * @type {HTMLDialogElement}
     */
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>	
	<div class="content">
		<slot />
	</div>
</dialog>

<style>
	dialog {
		padding: 0;
		border: none;
		justify-content: center;
		align-items: center;
	}

	.content {
		max-width: 100%;
		max-height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		max-width: 90vw;
		max-height: 90vh;
		object-fit: contain;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}


</style>
