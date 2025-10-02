import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

 title = 'front-end';

  peliculas = null;
  peliculasEstreno = [
{
        titulo: 'Iron-man',
        fechaEstreno: new Date(),
        precio: 1400.99,
        poster: "https://m.media-amazon.com/images/I/715JlS9KHkL._AC_SL1500_.jpg"
      },
      {
        titulo: 'Cell',
        fechaEstreno: new Date(),
        precio: 1800.99,
        poster: "https://cdn1.totalcommerce.cloud/linalca/web_content/assets/funcionespc.webp"
      },
       {
        titulo: 'Rocky',
        fechaEstreno: new Date(),
        precio: 1880.99
      }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [{
        titulo: 'Spider-man',
        fechaEstreno: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Mohana',
        fechaEstreno: new Date(),
        precio: 1800.99
      }]
    }, 1000);
  }

  manejarReated(voto:number): void
  {
    alert(voto);
  }

}
