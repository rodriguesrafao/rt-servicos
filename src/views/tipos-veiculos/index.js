import { AddBox, Edit } from "@material-ui/icons";
import { CopyAll } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { obterTiposVeiculos } from "services/VeiculosService";
import MainCard from "ui-component/cards/MainCard";
import TableGeneric from "views/componentes/tables/TableGeneric";
import CadastroTipoVeiculosModal from "./CadastroTipoVeiculosModal";

const TiposVeiculos = ()=>{
    const [listaVeiculos, setListaVeiculos] = useState();
    const [veiculoselecionado, setVeiculoSelecionado] = useState(null);
    const [open, setOpen] = useState(false);

    const buscarVeiculos = ()=>{
        obterTiposVeiculos().then(resp =>{
            setListaVeiculos(resp);
        });
    }

    const onClose = ()=>{
        setOpen(false);
        setVeiculoSelecionado(null);
    }

    useEffect(() => {
        buscarVeiculos();
        return () => {}
    }, []);

    return(
        <MainCard title="Tipos de veículos">
            <TableGeneric
                options={{actionsColumnIndex: 0, pageSize: 20}}
                data={listaVeiculos}
                columns={[
                    {field:'fabricante', title: 'Fabricante'},  
                    {field:'modelo', title: 'Modelo'},  
                    {field:'transmissao', title: 'Transmissão'}, 
                    {field:'cilindradas', title: 'Cilindradas'},  
                    {field:'aspiracao', title: 'Aspiração'},  
                    {field:'qtdCilindros', title: 'Cilindros'},  
                    {field:'rangeFabricacao', title: 'Fabricação'},  
                    {field:'combustivel', title: 'Combustível'},  
                    {field:'qtdValvulas', title: 'Valvulas'},  
                ]}
                actions={[
                    {
                        icon: AddBox,
                        tooltip: 'Novo Veículo',
                        isFreeAction: true,
                        onClick: () => {setOpen(true)}
                    },
                    {
                        icon: Edit,
                        tooltip: 'Editar',
                        onClick: (event, rowData) => {
                            setVeiculoSelecionado(rowData);
                            setOpen(true);
                        }
                    },
                    {
                        icon: CopyAll,
                        tooltip: 'Duplicar',
                        onClick: (event, rowData) => {
                            rowData.duplicar = true;
                            setVeiculoSelecionado(rowData);
                            setOpen(true);
                        }
                    }
                ]}  
            />
            <CadastroTipoVeiculosModal
                open={open} 
                onClose={onClose} 
                onSuccess={buscarVeiculos} 
                veiculo={veiculoselecionado} />
        </MainCard>
    );
}
export default TiposVeiculos;