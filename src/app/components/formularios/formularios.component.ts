import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/models/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  receitas:Receitas[]=[]

  
  constructor(private service:ReceitasService) { }

  ngOnInit(): void {
    this.listarReceitas();
  }

  listarReceitas():void{
    this.service.getReceitas().subscribe(resposta=>{
      this.receitas=resposta;
    })
  }

}
