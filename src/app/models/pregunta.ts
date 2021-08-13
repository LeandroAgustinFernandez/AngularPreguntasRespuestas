import { Respuesta } from "./respuesta";

export class Pregunta {
    descripcionPregunta: string;
    respuestas: Respuesta[];

    constructor(descripcion: string,respuestas: Respuesta[]) {
        this.descripcionPregunta = descripcion;
        this.respuestas = respuestas;
    }
}