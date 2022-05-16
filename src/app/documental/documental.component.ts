import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documental',
  templateUrl: './documental.component.html',
  styleUrls: ['./documental.component.css']
})
export class DocumentalComponent implements OnInit {

  video='XUm3yOhM-ks';

  constructor() { }

  ngOnInit(): void {
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // document.body.appendChild(tag);
  }

}
