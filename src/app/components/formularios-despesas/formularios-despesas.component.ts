import { Component, OnInit } from '@angular/core';
import { Despesas } from 'src/app/models/despesas';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-formularios-despesas',
  templateUrl: './formularios-despesas.component.html',
  styleUrls: ['./formularios-despesas.component.scss']
})
export class FormulariosDespesasComponent implements OnInit {


  despesas:Despesas[]=[];
  


  constructor(private service:DespesasService) { }

  ngOnInit(): void {
    this.listarDespesas();
  }

  listarDespesas():void{
    this.service.getDespesas().subscribe(resposta=>{
      console.log(resposta)
      this.despesas=resposta;
    })
  }
}
