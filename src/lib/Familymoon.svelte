<script>
    import Modal from "./Modal.svelte";

    /**
     * @type {string}
     */
     export let image;
     /**
     * @type {any}
     */
      export let capture;

      let showModal = false;

</script>
<div class="item-container">
  <div class="image-container" on:click={() => (showModal = true)}>
    <img src={image}>
  </div>
  <div class="capture">
    {capture} 
  </div>
  <Modal bind:showModal>
    <img src={image} style="max-width: 90vw; max-height: 90vh; object-fit: contain;">
  </Modal>
</div>

<style lang="scss">

.image-container {
    position: relative;
    overflow: scroll;
    width: clamp(240px, 4vw, 420px);
    height: clamp(240px, 4vw, 420px);
    overflow: hidden;
    border-radius: 50%;
    // Adjust the border-radius values as needed
    margin: 0 30px;

    @include media-breakpoint-up(lg) { 
      margin: 0 60px;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


}
.capture {
  font-family: 'Barlow', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 35px 0px;
}
</style>