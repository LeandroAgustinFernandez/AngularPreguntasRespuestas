import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[];

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
    console.log(this.listPregunta);
  }

  obtenerPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }
  respuestaSeleccionada(respuesta: Respuesta, index: number){
    if (this.preguntaService.pregConfirmada === true) {
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = index;
  }

  AddClassOption(respuesta: Respuesta){
    //Respuesta seleccionada y no esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && !this.preguntaService.pregConfirmada) {
      return 'active text-ligth';
    } 
    //Respuesta CORRECTA y esta confirmada 
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    } 
    //Respuesta INCORRECTA y esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    } 
  }

  iconCorrecto(respuesta: Respuesta){
      if (respuesta === this.preguntaService.opcionSeleccionada 
        && this.preguntaService.pregConfirmada && 
        this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
        return true;
      }else {
        return false;
      }
  }

  iconIncorrecto(respuesta: Respuesta){
    if (respuesta === this.preguntaService.opcionSeleccionada 
      && this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    }else {
      return false;
    }
}
}
