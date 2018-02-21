import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contarTres().then(
      mensajeOK => console.log('Terminó', mensajeOK)
    )
    .catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    // tslint:disable-next-line:prefer-const
    return new Promise((resolve, reject) => {

      let contador = 0;
      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          // reject('an error');
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });

  }

}
