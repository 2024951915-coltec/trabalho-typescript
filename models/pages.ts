import {app} from "./app.js";
import { NoteTable } from "./db.js";
import type { Note } from "./types.js";

function pages(): void
{
    app.get('/', (req: any, res: any)=>{
        let notes: Note[] = NoteTable.get_all();
        
        res.render('index', {NOTES: notes});
    })

    app.post('/send', (req: any, res: any)=>{
        NoteTable.add({
            title: req.body.title,
            message: req.body.message
        });

        res.redirect("/");
    })
}

export default pages;