<script>
// @ts-nocheck

    import { generateClient } from "aws-amplify/api";
    import { createRSVP } from '../graphql/mutations';

    const client = generateClient()
    /**
     * @type {number}
     */
    let numberOfPeople;

    /**
     * @type {string}
     */
    let name;

    let dietary;

    let accept;

    let show = true;

    function closeForm() {
        show = false;
    }

    async function sendForm() {
        if(numberOfPeople && numberOfPeople) {
            try {
                const resp = await client.graphql({
                    query: createRSVP,
                    variables: {
                        input: {
                            "Name": name,
                            "numberofpeople": numberOfPeople,
                            "email": "noemail@nomail.com",
                            "dietary": dietary,
                            "accept": accept
                        }
                    }
                });
                if (resp) show = false;
            } catch (err) {
                console.log(err);
            }
        }
    }

</script>
{#if show}<div class="envelope" id="envelope">
    <!-- Envelope flap -->
    <div class="flap"></div>
    <!-- Content inside the envelope -->
    <p>This is a styled envelope that pops out from the right side of the screen.</p>
  </div>
<div class="container-formsli" on:click={closeForm}>
    <div class="formsli" on:click={(event) => { event.stopPropagation()}}>
        <div class="lets-dine">Lets dine together</div>
        <p class="text">
            Auch wenn es nun schon einen Moment her ist, würden wir doch gerne einmal alle zusammen essen gehen, zur Feier unserer Hochzeit.
            Das würden wir gerne in einem speziellen Umfeld machen und laden euch dazu ein uns in der Provence im Restaurant <a href="https://www.beaumier.com/de/properties/capelongue-hotel/">La Capelongue</a> zu besuchen.
            Das Essen findet am Samstag den 4. Mai statt.
            Für alle welche von ausserhalb anreisen, haben wir vom 2. Mai bis zum 5. Mai Zimmer reserviert im <a href="https://chateau-bellefontaine.com/">Château Bellefontaine</a>. Dort können wir zusammen ein paar schöne Tage verbringen.
        </p>
        <form method="POST">	
            <h2 class="text">RSVP</h2>
            <div>
                <label>
                    No of Guests: 
                    <input class="text-input number-input" name="number" type="number"  bind:value={numberOfPeople}>
                </label>
            </div>
    
            <label>
                Name:
                <input class="text-input" name="email" type="text" bind:value={name}>
            </label>
            <div class="accepting">
                <input type="radio" id="accept" bind:group={accept} name="fav_language" value="accept">
                <label for="accept">Accept with pleasure</label><br>
                <input type="radio" id="decline" bind:group={accept} name="fav_language" value="decline">
                <label for="decline">Decline with regret</label><br>
            </div>
            <label>
                *Dietary requirement:
                <input name="diet" type="text" class="text-input"  bind:value={dietary}>
            </label>
            <input type="button" name="button" value="Click" on:click={sendForm}/>
        </form>
    </div>
</div>

{/if}


<style lang=scss>

    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');

    .container-formsli {
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #1a1a1af2;
    }

    .text {
        font-family: "EB Garamond", serif;
        font-size: 1.2em;
        line-height: 1.5em;
        text-underline-offset: 0.2em; 

        a {
            color: white;
        }

    }

    
    h2 {
            font-size: 2em !important;
            text-align: center;
            margin-top: 1.2em;
        }
    
    .accepting {
        input[type="radio"] {
            display: none; 
        }

        label {
            position: relative;
            margin: 0.8em 2em 0.8em 4.5em !important;
            cursor: pointer; 
        }

        input[type="radio"] + label::before {
            content: "";
            display: block;
            width: 40px;
            height: 2px; 
            border-bottom: 2px solid #fff; 
            position: absolute;
            bottom: -2px; 
            left: -60px;
            padding-top: 50px;
        }

        input[type="radio"]:checked + label::after {
            content: "X";
            position: absolute;
            bottom: 4px; 
            left: -45px;
            color: #fff; 
        }
    }
    .lets-dine {
        font-family: "Caveat", cursive;
        font-optical-sizing: auto;
        font-weight: 400;
        font-size: 3em;
        font-style: normal;
        padding-bottom: 1em;
    }
    .formsli {
        margin-bottom: 100px;
        z-index: 1000;
        background-color: #1a1a1a;

        color: white;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0 50px;
        padding: 30px 60px;
        min-width: 80vw;

        label {
            font-family: "EB Garamond", serif;
            font-size: 1.5em;
        }


        .text-input {
            background-color: #1a1a1a;
            border: none; 
            color: white;
            border-bottom: 2px solid white; 
            outline: none; 
        }

        input {
            margin-left: 70px;
        }

        .number-input {
            max-width: 50px;
        }

        label {
            margin: .8em 2em;
        }
    }

</style>
