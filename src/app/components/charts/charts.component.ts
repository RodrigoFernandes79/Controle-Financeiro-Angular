import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReceitasDTO } from 'src/app/models/receitasMes';
import { ResumoMes } from 'src/app/models/resumoMes';


import { DespesasService } from 'src/app/services/despesas.service';
import { ReceitasService } from 'src/app/services/receitas.service';

import { ResumoMesService } from 'src/app/services/resumo-mes.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

pieChartData:any;

barChartData:any;

doughnutChartData:any;

saldo:ResumoMes = new ResumoMes();

  constructor(private resumoService:ResumoMesService, private despesasService:DespesasService) { }

  ngOnInit(): void {
   this.construirGraficoPizza();
   this.construirGraficoLinha();
   this.construirGraficoDoughnut();
   this.mostrarSaldo();
   
   
  }

  construirGraficoPizza():void{
      this.resumoService.buscarGastoPorCategoria().subscribe(resposta=>{
          this.pieChartData = {
            labels: resposta.gastoCategoria.map(respostas=>respostas.categoria),
            datasets: [
                {
                    data:resposta.gastoCategoria.map(respostas=>respostas.valor_total),
                    backgroundColor: [
                        "#008000",
                        "#FFA500",
                        "#FF0000",
                        "#0000ff",
                        "#800080",
                        "#fff000",
                        "#a52a2a",
                        "#000000"
                    ],
                    hoverBackgroundColor: [
                        "#008000",
                        "#FFa500",
                        "#FF0000",
                        "#0000ff",
                        "#800080",  
                        "#fff000",
                        "#a52a2a",
                        "#000000"
                    ]
                }]    
            };
        
      })
  }
 
  construirGraficoLinha():void{
      
      this.resumoService.buscaReceitasPorMes().subscribe(resposta =>{
       
       let dados = resposta.receitasDTO.map(dado=>dado)
       this.resumoService.buscaGastoPorMes().subscribe(resposta=>{

         let dadosGastos =resposta.despesasDTO.map(dado=>dado)
        
    const totalReceitas = this.totaisPorCadaMesReceitas(dados);
    const totalDespesas = this.totaisPorCadaMesDespesas(dadosGastos);
        this.barChartData = {
            labels:this.transformaMesemString(this.configuraMes()),
             
            datasets:
            
            [

                {
                    
                    label: 'Receitas',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    
                    data: totalReceitas
                
                    },
                
                    {
                        label: 'Despesas',
                        backgroundColor: '#F08080',
                        borderColor: '#FA8072',
                        data: totalDespesas
                      
                    }
                
                ]
            
            } 
        })      
        })
        }

        construirGraficoDoughnut():void{
            this.despesasService.gastoTipo().subscribe(resposta =>{
        this.doughnutChartData={
            labels: resposta.map(dado=>dado.tipo),
            datasets: [
                {
                    data: resposta.map(dado=>dado.valor_total),
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
            }) 
               
            };
    
        

    
      private totaisPorCadaMesReceitas(dados:any){
        const totais:any[]=[]
        for(let mes of this.configuraMes()){  
            let total=0
        for (let dad of dados){
           console.log(dad)
          if(dad.dataRecebimento==mes){
            total = total +dad.total_Receitas;
            
              console.log(total)
            break;
           }
           
           
         }
         totais.push(total)
         
        
       }
       return totais;  
            
    }     

    private totaisPorCadaMesDespesas( dados:any){
        const totais:any[]=[]
        for(let mes of this.configuraMes()){  
            let total=0
        for (let dad of dados){
           console.log(dad)
          if(dad.dataPagamento==mes){
            total = total +dad.total_Despesas;
            
              console.log(total)
            break;
           }
           
           
         }
         totais.push(total)
         
        
       }
       return totais;  
            
    }     

     private configuraMes(){
  
      let mes:number[]=[];
      for(let i=1;i<=12;i++){
        mes.push(i)
      }     
   return mes
   }
 
   private transformaMesemString(dados:any){
      let  meses:string=''
      let mesString:string[]=[]
    for (let mes of dados){
        if (mes=== 1){
            meses = 'Jan'
        }
        if(mes===2){
            meses='Fev'
        }
        if(mes===3){
            meses='Mar'
        }
        if(mes===4){
            meses='Abr'
        }
        if(mes===5){
            meses='Mai'
        }
        if(mes===6){
            meses='Jun'
        }
        if(mes===7){
            meses='Jul'
        }
        if(mes===8){
            meses='Ago'
        }
        if(mes===9){
            meses='Set'
        }
        if(mes===10){
            meses='Out'
        }
        if(mes===11){
            meses='Nov'
        }
        if(mes===12){
            meses='Dez'
        }
     mesString.push(meses);
      }
      console.log(mesString)
      return mesString;
      }

      mostrarSaldo(){
          this.resumoService.saldoFinal().subscribe(resposta =>{
              this.saldo = resposta;
              console.log(resposta)
              console.log(this.saldo)
          })
      }
   
      }

    
        
    
 

    


   

