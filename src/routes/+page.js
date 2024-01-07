import { listSpecialDayElements, getSpecialDayElement } from "../graphql/queries";
import { client } from "$lib";

export async function load() {
    const allSpecialDayElements = await client.graphql({
        query: listSpecialDayElements
    });
	return allSpecialDayElements;
}