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

<div class="day">
    <div class="text-container">
        <h2 use:reveal={{ transition: "fly", delay: 800 }}>{title}</h2>
        <p use:reveal={{ transition: "fly", delay: 1000 }}>{text}</p>
    </div>
    <div class="image-container" use:reveal={{ transition: "fly", delay: 300 }}>
        <div class="image" style={bgImage}>
        </div>
    </div>
</div>

<style lang="scss">
    .day {
        display: grid;
        grid-template-columns: 42% 1fr;
        margin-bottom: 55px;
        max-width: 834px;
        width: 100%;
        
        h2 {
            font-size: clamp(3rem, 6vw, 7rem);
            font-weight: bold;
            font-family: 'Playfair Display', serif;
            margin: 20px 0px;
        }

        p {
            font-family: 'Barlow', sans-serif;
            font-size: clamp(0.8rem, 1vw, 1rem);
            letter-spacing: 0.1rem;
            text-transform: uppercase;
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