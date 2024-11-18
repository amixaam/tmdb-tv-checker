import { TMDB } from "npm:tmdb-ts";
import { loadConfig } from "../utils/loadConfig.ts";
import { assertEquals, assertNotEquals } from "jsr:@std/assert";

Deno.test("Query show name, and getting response", async () => {
    const config = loadConfig();
    
    if(config !== null && config.tmdb_key !== null) {
        const tmdb = new TMDB(config.tmdb_key);
        const search = await tmdb.search.tvShows({query: 'Rick and morty'});

        assertNotEquals(search, null);
        assertEquals(search.page, 1);
        assertEquals(typeof search.results, 'object');
    } else {
        assertEquals('Could not load config or tmdb api key is empty', '')
    }

});