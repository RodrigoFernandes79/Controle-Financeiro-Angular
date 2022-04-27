import { DespesasDTO } from "./despesasMes";
import { GastoCategoria } from "./gastoCategoria";
import { ReceitasDTO } from "./receitasMes";


export class ResumoMes{

    valorTotalReceitas:any;
    valorTotalDespesas:any;
    saldoFinalMes:any;
    gastoCategoria:GastoCategoria[];
    receitasDTO:ReceitasDTO[];
    despesasDTO:DespesasDTO[];
    receitasTotal:any;
    despesasTotal:any;
    totalSaldo:any;
    
    
}