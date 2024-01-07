import { listSpecialDayElements, listSnaps, listIntros } from "../graphql/queries";
import { client } from "$lib";

export async function load() {
    const allSpecialDayElements = await client.graphql({
        query: listSpecialDayElements
    });

    const allSnaps = await client.graphql({
        query: listSnaps
    });

    const intro = await client.graphql({
        query: listIntros
    });
	return { allSpecialDayElements, allSnaps, intro };
}