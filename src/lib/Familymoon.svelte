<script>
    /**
     * @type {string}
     */
     export let image;
     /**
     * @type {any}
     */
      export let capture;

</script>
<div class="item-container">
  <div class="image-container">
    <img src={image}>
  </div>
  <div class="capture">
    {capture} 
  </div>
</div>

<style lang="scss">

.image-container {
    position: relative;
    overflow: scroll;
    width: 220px;
    height: 220px;
    overflow: hidden;
    border-radius: 50%;
    // Adjust the border-radius values as needed
    margin: 0 60px;

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