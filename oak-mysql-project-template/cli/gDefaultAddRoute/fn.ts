import { copySync } from "https://deno.land/std@0.106.0/fs/mod.ts";
// add to project route

export function fn(){
    // copy default file route content
    //server/add-routes.ts 
    copySync("cli/gDefaultAddRoute/view/add-routes.txt", "server/add-routes.ts");
}

// gApp example from template