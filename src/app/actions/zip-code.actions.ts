import {Action} from '@ngrx/store';

export enum ZipCodeActionTypes {
    LoadZipCode = '[ZipCode] load ZipCode',
    AddZipCode = '[ZipCode] add ZipCode',
    RemoveZipCode = '[ZipCode] remove ZipCode',
}

export class LoadZipCode implements Action {
    readonly type = ZipCodeActionTypes.LoadZipCode;

    constructor(public zipCodes: string[]){}
}

export class AddZipCode implements Action {
    readonly type = ZipCodeActionTypes.AddZipCode;

    constructor(public zipCode: string){}
}

export class RemoveZipCode implements Action {
    readonly type = ZipCodeActionTypes.RemoveZipCode;

    constructor(public zipCode: string){}
}

export type ZipCodeActions = LoadZipCode| AddZipCode | RemoveZipCode;
