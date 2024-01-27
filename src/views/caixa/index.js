import { useEffect, useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { AddBox } from "@material-ui/icons";

import { dateFromTimestampFirebase, formatDateToString } from "utils/date-utils";
import CadastroMovimentoCaixaModal from "./CadastroMovimentoCaixaModal";
import TableGeneric from "views/componentes/tables/TableGeneric";


const Caixa = ()=>{
    const [listaMovimentos, setListaMovimentos] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        return () => {}
    }, []);

    return(
        <MainCard title="Caixa do dia" secondary={`${formatDateToString(agora)}`}>
            <TableGeneric
                data={listaMovimentos}
                columns={[]}
                actions={[
                    {
                        icon: AddBox,
                        tooltip: 'Novo Produto',
                        isFreeAction: true,
                        onClick: () => {setOpen(true)}
                    }
                ]}  
            />
            <CadastroMovimentoCaixaModal
                open={open}
                onClose={onClose} 
                onSuccess={listarMovimentos} 
            />
        </MainCard>
    )

}
export default Caixa;