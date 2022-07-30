import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {



  // Promisse / Observable Exemplo

  // minhaPromisse(nome: string) : Promise<string>{
  //   return new Promise((resolve, reject) => {
  //     if(nome === "Eduardo"){
  //       setTimeout(() => {
  //         resolve('Seja Bem-vindo ' + nome);
  //       }, 1000);
  //     }
  //     else{
  //       reject('Ops, você não é o Eduardo!');
  //     }
  //   })
  // }


  // minhaObservable(nome: string): Observable<string> {


  //   return new Observable(subscriber => {

  //     if (nome === "Eduardo") {
  //       subscriber.next("Olá! " + nome);
  //       subscriber.next("Olá de novo! " + nome);
  //       setTimeout(() => {
  //         subscriber.next('Seja Bem-vindo Com delay ' + nome);
  //       }, 1000);
  //       subscriber.complete();
  //     } else {
  //       subscriber.error('Ops! deu Erro!');
  //     }


  //   });

  // }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {


    return new Observable(subscriber => {

      if (nome === "Admin") {

        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);



      } else {
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

    // this.minhaObservable('Eduardo')
    // .subscribe({
    //   next(result) {console.log(result)},
    //   error(err) {console.log(err)}
    // });

    const observer = {
      next: valor => console.log('Next ', valor),
      error: erro => console.log('Erro: ', erro),
      complete: () => console.log('FIM'),
    };

    // const obs = this.minhaObservable('Eduardo');

    // obs.subscribe(observer);

    const obs = this.usuarioObservable('Admin', 'admin@admin.com');
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão Fechada = ' + subs.closed);
    }, 3500);

  }


}


export class Usuario {

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}
