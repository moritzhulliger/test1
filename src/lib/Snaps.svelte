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
    width: 45%;
    height: 100%;
    overflow: hidden;
    border: 3px solid black;
    border-radius: 40% 40% 40% 40%;
    // Adjust the border-radius values as needed
    margin-bottom: 40px;

    
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>