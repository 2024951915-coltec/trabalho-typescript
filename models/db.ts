import {User, Note} from '../models/types.ts';

//Criar estruturas de dados com tipos estáticos
const u_map = new Map<string, User>();
const n_list: Note[] = [];

type UsersList = {
    add: Function,
    find: Function,
    check_pass: Function
};

type NotesList = {
    add: Function,
    get_all: Function
};

const UserTable: UsersList = {
    add: function(user: User): void {
        u_map.set(user.name, user);
    },
    find: function(username: string): User | null {
        //se "u_map.get()"" retornar "undefined", converta para null
        let u: User | null = u_map.get(username) ?? null;

        return u;
    },

    check_pass: function(username: string, password: string): boolean {
        let u: User | null = u_map.get(username) ?? null;
        if(!u) return false;

        return password == u.password;
    }
};

const NoteTable: NotesList = {
    add: function(note: Note): void {
        n_list.push(note);
    },

    get_all: function(): Note[] {
        return [...n_list];
    }
}

export {UserTable, NoteTable};