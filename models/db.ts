import type {Note} from './types.js';

//Criar estruturas de dados com tipos estáticos

const n_list: Note[] = [];

type NotesList = {
    add: Function,
    get_all: Function
};

const NoteTable: NotesList = {
    add: function(note: Note): void {
        n_list.push(note);
    },

    get_all: function(): Note[] {
        return n_list;
    }
}

export {NoteTable};