<script>
   export const welcomeMessage = "Thuy-Duc \n & Moritz"
   console.log(welcomeMessage)
</script>

<div class="main-container">
    <h1>{welcomeMessage}</h1>

</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
 .main-container {
    position: absolute;

    width: 100vw;
    height: 50vh;
    min-height: 60vw;
    background-image: url(/src/lib/images/main1.jpg);
    background-size: cover;
 }

 h1 {
    font-weight: 100;
    font-size: 5rem;
    width: 40vw;
    margin: 50px auto 0;
    text-align: center;
 }
</style>