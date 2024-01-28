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
		background-color: rgba(0, 0, 0, 0.7);
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
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
