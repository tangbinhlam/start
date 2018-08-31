import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  LoadZipCodes = '[ZipCode] Load ZipCodes'
}

export class LoadZipCodes implements Action {
  readonly type = ZipCodeActionTypes.LoadZipCodes;
}

export type ZipCodeActions = LoadZipCodes;
