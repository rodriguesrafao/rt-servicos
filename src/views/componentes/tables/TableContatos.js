import { AddBox } from "@material-ui/icons";
import { useState } from "react";
import TableGeneric from "views/componentes/tables/TableGeneric";
import { FormContato } from "../forms/FormContato";
import ModalWrapper from "../ModalWrapper";

export const TableContatos = ({contatos, setContatos, showContatoNome, showTitle=false})=>{

    const [modalOpen, setModalOpen] = useState(false);

    const onCloseModal = ()=>{
        setModalOpen(false);
    }

    const  handleAddContato = (values, {resetForm})=>{
        const novaLista = [...contatos];
        novaLista.push(values);
        setContatos(novaLista);
        setModalOpen(false);
        if(resetForm){
            resetForm();
        }
    }

    return(<>
        <TableGeneric
            title={showTitle ? "Contatos" : ""}
            data={contatos}
            columns={[
                {field:'contato', title: 'Contato'},
                {field:'nome', title: 'Nome'},
                {field:'tipo.tipo', title: 'Tipo'}
            ]}
            editable={{
                onRowDelete: oldData =>
                    new Promise((resolve) => {
                        const dataDelete = [...contatos];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setContatos([...dataDelete]);
                        resolve();
                    }),
                }}
            actions={[
                {
                    icon: AddBox,
                    tooltip: 'Novo Contato',
                    isFreeAction: true,
                    onClick: () => {setModalOpen(true)}
                }
            ]}
        />
        <ModalWrapper 
            title='Adicionar contato' 
            size='small' 
            open={modalOpen} 
            onClose={onCloseModal}
        >
            <FormContato showNome={showContatoNome} onSend={handleAddContato}/>
        </ModalWrapper>
    </>)
}