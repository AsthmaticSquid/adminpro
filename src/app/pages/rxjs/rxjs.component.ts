import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})

export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {


    this.subscription = this.regresaObservable()
    // .retry(2)
      .subscribe(
        numero => console.log('subs', numero),
        error => console.error('Error en el observador', error),
        () => console.log('el observador terminó')
      );

  }

  ngOnInit() {
  }
/* detiene el observador cuando cambiamos de pantalla en la app */
  ngOnDestroy() {
    // console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    return new Observable( observer => {

      let cont = 0;
      // tslint:disable-next-line:prefer-const
      let inertvalo = setInterval( () => {
        cont += 1;

        // tslint:disable-next-line:prefer-const
        let salida = {
          valor: cont
        };

        observer.next(salida);

        // if (cont === 3) {
        //   clearInterval(inertvalo);
        //   observer.complete();
        // }

        // if (cont === 2) {
        //   observer.error('Help me');
        // }

      }, 500);

    })
    .retry(2)// si falla, vuelve a observar. entre parentesi, quantas veces se repetirà el observer antes de terminar
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter((valor, index) => {
      if (valor % 2 === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    });
  }

}
