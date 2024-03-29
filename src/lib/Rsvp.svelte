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
    let email;
    /**
     * @type {string}
     */
    let name;

    let dietary;

    let accept;

    async function sendForm() {
        if(numberOfPeople && email && numberOfPeople) {
            await client.graphql({
                    query: createRSVP,
                    variables: {
                        input: {
                        "Name": name,
                        "numberofpeople": numberOfPeople,
                        "email": email,
                        "dietary": dietary,
                        "accept": accept
                    }
                }
            });
        }
    }
</script>
<div class="formsli">
    <div class="lets-dine">Lets dine together</div>
    <p class="text"></p>
    <form method="POST">
        <label>
            Email
            <input class="text-input" name="email" type="email" bind:value={email}>
        </label>	
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

        <input type="radio" id="accept" bind:group={accept} name="fav_language" value="accept">
          <label for="html">Accept with pleasure</label><br>
          <input type="radio" id="decline" bind:group={accept} name="fav_language" value="decline">
          <label for="css">Decline with regret</label><br>
        <input type="button" name="button" value="Click" on:click={sendForm}/>
        <label>
            *Dietary requirement:
            <input name="password" type="text"  bind:value={dietary}>
        </label>
    </form>
</div>
<style lang=scss>

    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

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
        top: 20%;
        margin: 0 50px;
        padding: 30px 60px;
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
            margin: 2em;
        }
    }



</style>
