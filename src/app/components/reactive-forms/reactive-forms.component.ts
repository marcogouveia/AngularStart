import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './models/usuario';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  //Form Control / Group

  // cadastroForm = new FormGroup({
  //   nome: new FormControl(''),
  //   cpf: new FormControl(''),
  //   email: new FormControl(''),
  //   senha: new FormControl(''),
  //   senhaConfirmacao: new FormControl(''),
  // })

  // FormBuilder


  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = "";


  constructor (private fb: FormBuilder ) {

  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      senhaConfirmacao: [''],
    })
  }

  adicionarUsuario(){

    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }else{
      this.formResult = "Não Submeteu!!";
    }


  }

}
