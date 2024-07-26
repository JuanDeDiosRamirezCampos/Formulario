import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  preguntas: any[] = [];
  respuestas: { [key: string]: number } = {}; // Clave como string para el formato "Q1", "Q2", etc.
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      // Define tus controles de formulario aquí si es necesario
    });
  }

  ngOnInit(): void {
    this.http.get<any[]>('https://personalidad.onrender.com/api/pregunta').subscribe(
      data => {
        this.preguntas = data;
      },
      error => {
        console.error('Error al obtener preguntas:', error);
      }
    );
  }

  onAnswerChange(preguntaId: number, value: number): void {
    this.respuestas[`Q${preguntaId}`] = value; // Almacena el valor de la respuesta
  }

  submitForm(): void {
    // Verificar que todas las preguntas tengan una respuesta
    for (let pregunta of this.preguntas) {
      if (this.respuestas[`Q${pregunta.id}`] === undefined) {
        this.errorMessage = 'Por favor, responda todas las preguntas antes de enviar.';
        return;
      }
    }
    
    this.errorMessage = null; // Limpiar mensaje de error si todas las preguntas están respondidas

    console.log('Datos a enviar:', this.respuestas); // Imprime los datos para inspección

    this.http.post('https://personalidad.onrender.com/api/save', this.respuestas).subscribe(
      response => {
        console.log('Respuestas enviadas con éxito', response);
      },
      error => {
        console.error('Error al enviar respuestas:', error);
      }
    );
  }
}
