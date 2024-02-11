import { makeAutoObservable } from "mobx";

interface IBookStore {
    readonly id: string;
    readonly title: string;
    readonly bookCategories: string[];
    readonly authors: string[];
    readonly coverUrl: string;
}

class BookStore implements IBookStore {
    private _id = '';
    private _title = '';
    private _bookCategories: string[] = [];
    private _authors: string[] = [];
    private _coverUrl = '';

    constructor() {
        makeAutoObservable(this);
    }

    public set id(value: string) {
        if (!value) return;
        this._id = value;
    }

    public get id() {
        return this._id;
    }

    public set title(value: string) {
        if (!value) return;
        this._title = value;
    }

    public get title() {
        return this._title;
    }
    public set bookCategories(value: string[]) {
        if (value.length) return;
        this._bookCategories = value;
    }

    public get bookCategories() {
        return this._bookCategories;
    }
    
    public set authors(value: string[]) {
        if (value.length) return;
        this._authors = value;
    }

    public get authors() {
        return this._authors;
    }

    public set coverUrl(value: string) {
        if (!value) return;
        this._coverUrl = value;
    }

    public get coverUrl() {
        return this._coverUrl;
    }

    public clearStore = () => {
        this._id = '';
        this._title = '';
        this._bookCategories = [];
        this._authors = [];
        this._coverUrl = '';
    }
}

const bookStore = new BookStore();

export default bookStore;