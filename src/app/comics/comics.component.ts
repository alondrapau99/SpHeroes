import { Component, OnInit } from '@angular/core';
import { comic } from '../comic';
import { ComicService } from '../shared/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicsDC: comic[] = [];
  comicsMarvel: comic[] = [];

  constructor(public miservicio:ComicService) {
    console.log("constructor de comics");
   }

  ngOnInit(): void {
    console.log("ngInit de comics");
    this.comicsDC = this.miservicio.getDc();
    this.comicsMarvel = this.miservicio.getMarvel();
  }

}
