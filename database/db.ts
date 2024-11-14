import { Database } from "jsr:@db/sqlite";
import { Error, Success } from "../types/db.ts";

const db = new Database("./database/db.db");

/*

===== Future tables =====

---- Shows ----
id
tmdb_id
title
description
seasons
status
trailer
rating
tmdb_link
downloaded
last_checked


---- Episodes ----
id
show_id
season
episode
title
description
rating

*/
