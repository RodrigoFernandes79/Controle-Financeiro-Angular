import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receitas } from 'src/app/models/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.scss']
})
export class CriarReceitaComponent implements OnInit {

  receitas:Receitas =new Receitas();


  constructor(private service:ReceitasService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionaReceitas():void{
    
  
    this.service.createReceitas(this.receitas).subscribe(()=>{
      this.router.navigate(['/receitas'])
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: `Receita ${this.receitas.descricao} adicionada com sucesso!`,
        showConfirmButton: false,
        timer: 3500
      })
     this.receitas=new Receitas();
    
    },err =>{
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Receita ${this.receitas.descricao} não pôde ser cadastrada`,
        footer: err.error.mensagem
      })
    }
   )
  }
  
  reset(){
    this.receitas= new Receitas();
  }
}


