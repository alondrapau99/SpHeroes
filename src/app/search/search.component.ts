import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string="";
  indice: number=0;
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  };

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe( params => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }else{
        this.showAlert();
      }
    });
   }

  ngOnInit(): void {
    
  }

  showAlert(){
    let timerInterval

    Swal.fire({
      position: 'center',
      title: "Oh no!",
      text: 'No tenemos resultados de: '+this.nombreh,
      imageUrl: '../../assets/img/spider.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigate(['/heroes']);

  }

}


