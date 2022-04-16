import * as moment from "moment";

export class Receitas{
    id?:number;
    descricao:string;
    valor:any;
    dataRecebimento?:Date;

    static toJson(receitas: Receitas): any {
        return {
          ...receitas,
          
          dataRecebimento: moment(receitas.dataRecebimento).format('DD/MM/YYYY')
        };
      }
    } 
