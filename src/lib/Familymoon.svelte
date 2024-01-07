<script>
    /**
     * @type {string}
     */
     export let dest;

</script>
<div class="image-container">
    <img src={dest}>
</div>

<style lang="scss">

.image-container {
    position: relative;
    overflow: scroll;
    width: 220px;
    height: 220px;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 50%;
    // Adjust the border-radius values as needed
    margin-right: 20px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>