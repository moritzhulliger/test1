<script>
    /**
     * @type {string}
     */
     export let snap;

</script>

<div class="image-container">
    <img src={snap}>
</div>

<style lang="scss">
.image-container {
    position: relative;
    width: 35%;
    height: 100%;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 250px;
    // Adjust the border-radius values as needed
    margin-bottom: 120px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>