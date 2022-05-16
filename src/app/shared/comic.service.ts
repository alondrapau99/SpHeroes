import { Injectable } from '@angular/core';
import { comic } from '../comic';
import { DC, MARVEL } from '../miscomics';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private dc: comic[] = DC;

  private marvel: comic[] = MARVEL;

  constructor() { }

  getDc(): comic[] {
    return this.dc;
  }

  getMarvel(): comic[] {
    return this.marvel;
  }

}
