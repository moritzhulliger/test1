<script>

/**
 * @type {any}
 */
 export let heading
/**
 * @type {any}
 */
 export let descriptions

/**
 * @type {any}
 */
 export let images

</script>

<h2>{heading}</h2>
<p>{descriptions}</p>
{#each images as image, i}
<img src={image} class="r{i*5 + ""} image-stack">
{/each}

<style lang="scss">
.image-stack {
  position: absolute;
  width: 400px;
  height: 700px;

  &:hover {
    z-index: 1000;
    transform: scale(1.1);
  }
}

@for $deg from 0 through 359 {
  .r#{$deg} {
    z-index: $deg;
    position: absolute;
    left: #{$deg}0px;
    top: #{$deg}0px;
    transform: rotate(-#{$deg}deg);
    transform-origin: center center;
    transition: transform 0.3s ease; 
  }
}

.image-stack:hover .r {
  transform: rotate(0); 
}

</style>

