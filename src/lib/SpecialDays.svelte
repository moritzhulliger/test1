<script>
    import { reveal } from 'svelte-reveal';

    /**
     * @type {any}
     */
     export let image;
    /**
     * @type {any}
     */
     export let title;
    /**
     * @type {any}
     */
     export let text;

     $: bgImage = `background-image: url("${image}");`;

</script>

<div class="day" use:reveal={{ transition: "fade" }}>
    <div class="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
    <div class="image-container">
        <div class="image" style={bgImage}>
        </div>
    </div>
</div>

<style lang="scss">
    .day {
        display: grid;
        grid-template-columns: 40% 1fr;
        margin-bottom: 65px;

        h2 {
            font-size: 75px;
            font-weight: bold;
            font-family: 'Playfair Display', serif;
        }

        p {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: left;
            max-width: auto;
        }
    }




    .image-container {
        border: 2px solid black;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 15px;

        .image {
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }

    .text-container {
        padding: 20px;
    }

    img {
    max-width: 100%;
    height: auto;
}
</style>