import * as moment from "moment";

export class Despesas {
    
    id?: number;
    descricao: string;
     tipo: string= "FIXA";
     categoria: string ="OUTRAS"
    valor: any;
    dataPagamento:Date;
    
    static toJson(despesas: Despesas): any {
        return {
          ...despesas,
          
          dataPagamento: moment(despesas.dataPagamento).format('DD/MM/YYYY')
        };
      }
   

}



