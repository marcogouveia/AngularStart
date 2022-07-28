import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {



  // Promisse / Observable Exemplo

  minhaPromisse(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome === "Eduardo"){
        setTimeout(() => {
          resolve('Seja Bem-vindo ' + nome);
        }, 1000);
      }
      else{
        reject('Ops, você não é o Eduardo!');
      }
    })
  }


  minhaObservable(nome: string) : Observable<string>{


    return new Observable(subscriber => {

      if(nome === "Eduardo"){
        subscriber.next("Olá! " + nome);
        subscriber.next("Olá de novo! " + nome);
        setTimeout(() => {
          subscriber.next('Seja Bem-vindo Com delay ' + nome);
        }, 1000);
      }else{
        subscriber.error('Ops! deu Erro!');
      }


    });

  }

  ngOnInit(): void {
    // this.minhaPromisse('Eduardo')
    // .then((reseult) => console.log(reseult));

    // this.minhaPromisse('Jose')
    // .then((reseult) => console.log(reseult))
    // .catch(error => {
    //   console.log(error)
    // });

    this.minhaObservable('Eduardo')
    .subscribe({
      next(result) {console.log(result)},
      error(err) {console.log(err)}
    });
  }



}
