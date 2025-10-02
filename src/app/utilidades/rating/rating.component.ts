import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  maximoRating =5;

  @Input()
  ratingSeleccionado=0;
  maximoRatingArr = [];
  ratingAnterior;

  votado= false;

  @Output()
  reated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void
  {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave()
  {
    if(this.ratingAnterior !== 0)
    {
      this.ratingSeleccionado = this.ratingAnterior
    }
    else{
        this.ratingSeleccionado = 0;
    }
  }

  rate(index:number)
  {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.reated.emit(this.ratingSeleccionado);
  }

}
