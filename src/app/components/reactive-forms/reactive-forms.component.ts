import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  cadastroForm = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    senhaConfirmacao: new FormControl(''),
  })

  constructor () {

  }

  ngOnInit(): void {

  }

  adicionarUsuario(){
    let x = this.cadastroForm.value;
  }

}
