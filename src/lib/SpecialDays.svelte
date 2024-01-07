<div class="day">
    <div class="image-container">
        <img src="/src/lib/images/days/09-35-TTG02004.jpg"/>
    </div>
    <div class="text-container">
        <h2>First Course Wedding Dinner, La Coupole</h2>
        <h3>The dinner was delicious</h3>
        <p>Your paragraph text goes here.</p>
    </div>
</div>

<style>

    .day {
        display: grid;
        grid-template-columns: 40% 1fr;
        height: 15vh;
        min-height: 250px;
    }

    h2, h3 {
        font-size: large;
        font-family: 'Playfair Display', serif;
    }


    .image-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
    }

    .text-container {
        padding: 20px;
    }

    img {
    max-width: 100%;
    height: auto;
}
</style>