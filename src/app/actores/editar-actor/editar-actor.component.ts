import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  constructor() { }

  modelo: actorDTO = { nombre: 'Felipe', fechaNacimiento: new Date(), foto:'https://m.media-amazon.com/images/I/715JlS9KHkL._AC_SL1500_.jpg' };

  ngOnInit(): void {
    console.log(this.modelo.foto);
  }

  guardarCambios(actor: actorCreacionDTO) {


  }

}
