import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receitas } from 'src/app/models/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alterar-receita',
  templateUrl: './alterar-receita.component.html',
  styleUrls: ['./alterar-receita.component.scss']
})
export class AlterarReceitaComponent implements OnInit {

  id:number;
  receitas:Receitas;

  constructor(private route:ActivatedRoute, private service:ReceitasService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.encontraReceitaPorId();
  }

  encontraReceitaPorId():void{
    this.service.encontrarReceitasPorId(this.id).subscribe(resposta=>{
     
    
       this.receitas = resposta;
       
    })
    }

    alteraReceitas(): void{
  
      this.service.alterarReceitasPorId(this.receitas, this.id).subscribe(resposta=>{
    
        this.receitas = resposta;
        console.log(this.receitas)
  
        this.router.navigate(['/receitas'])
        Swal.fire({
          position: 'bottom',
          icon: 'success',
          title: `Receita ${this.receitas.descricao} alterada com sucesso!`,
          showConfirmButton: false,
          timer: 3500
        })
       
      
      },err =>{
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Receita ${this.receitas.descricao} não pôde ser cadastrada`,
          footer: err.error.message
        })
      }
     )
    }
    
  
  
    reset(){
      this.receitas= new Receitas();
    }

}
