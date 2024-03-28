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

    async function sendForm() {
        console.log("lalalla")
        if(numberOfPeople && email && numberOfPeople) {
            console.log("lelele")

            await client.graphql({
                    query: createRSVP,
                    variables: {
                        input: {
                        "Name": "Lorem ipsum dolor sit amet",
                        "numberofpeople": 1020,
                        "email": "test12346789@testemailtestemail.com"
                    }
                }
            });
        }

    }
</script>
<div class="formsli">
    <form method="POST">
        <label>
            Name
            <input name="email" type="text" bind:value={name}>
        </label>
        <label>
            Email
            <input name="password" type="email" bind:value={email}>
        </label>	
        <label>
            Wir sind .. Personen
            <input name="password" type="number"  bind:value={numberOfPeople}>
        </label>
        <input type="button" name="button" value="Click" on:click={sendForm}/>
    </form>
</div>
<style>
    .formsli {
        margin-bottom: 100px;
    }
</style>
