import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';
import { toBase64 } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.scss']
})
export class FormularioActoresComponent implements OnInit {
  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  @Input()
  modelo: actorDTO;

  imagenBase64: string;


  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaNacimiento: '',
      foto:''
    });

    if (this.modelo != undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  cargarImagen(imagen: File) {
    if (imagen) {
      this.form.get('foto').setValue(imagen);
    }
  }

}
