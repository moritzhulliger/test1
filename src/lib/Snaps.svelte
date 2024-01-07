<script>
    import { reveal } from 'svelte-reveal';


    /**
     * @type {string}
     */
     export let snap;



</script>

<div use:reveal={{ transition: "fade" }} class="image-container">
    <img src={snap}>
</div>  



<style lang="scss">
    @keyframes -global-from-left {
  0% {
    transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

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