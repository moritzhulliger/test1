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
{#if show}
<div class="container-formsli">
    <div class="formsli">
        <div class="lets-dine">Lets dine together</div>
        <p class="text"></p>
        <form method="POST">	
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
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #1a1a1af2;
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
        padding-bottom: 100px;
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
