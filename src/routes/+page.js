import { listSpecialDayElements, listSnaps, listIntros, listFamilymoons } from "../graphql/queries";
import { client } from "$lib";

export async function load() {
    const allSpecialDayElements = await client.graphql({
        query: listSpecialDayElements
    });

    const sortedItems = allSpecialDayElements.data.listSpecialDayElements.items.sort((/** @type {{ Title: string; }} */ a, /** @type {{ Title: any; }} */ b) => {
        return a.Title.localeCompare(b.Title); 
      });

    const allSnaps = await client.graphql({
        query: listSnaps
    });

    const intro = await client.graphql({
        query: listIntros
    });

    const moons = await client.graphql({
        query: listFamilymoons
    })
    
	return { allSpecialDayElements, allSnaps, intro, moons };
}