export interface InputI {
    value: string;
}

export interface KeyPressEvent {
    charCode: number;
}

export interface SearchAction {
    type: string;
    searchBy?: string;
    needSearch?: boolean;
    searchQuery?: string;
    inputValue?: string;
}

export interface SearchState {
    searchBy?: string;
    needSearch?: boolean;
    searchQuery?: string;
    inputValue?: string;
}

export interface FilmListAction {
    type: string;
    sortBy?: string;
    films?: FilmCardI[];
}

export interface FilmCardI {
    poster_path: string;
    title: string;
    release_date: string;
    vote_count: number;
    vote_average: number;
    id: number;
}

export interface FilmAction {
    type: string;
    filmInfo: FilmInfo;
}

export interface FilmState {
    filmInfo?: FilmInfo;
}

export interface FilmInfo {
    poster_path: string;
    title: string;
    vote_average: number;
    genres: any;
    release_date: string;
    runtime: string;
    overview: string;
    production_companies: any;
    original_language: string;
}

export interface FetchOptions {
    filmId?: number | string;
    filmTitle?: string;
    actor?: string;
}
