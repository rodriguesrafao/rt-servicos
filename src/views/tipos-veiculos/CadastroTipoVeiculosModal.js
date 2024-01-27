import ModalWrapper from "views/componentes/ModalWrapper";
import { FormCadastroTipoVeiculo } from "./FormCadastroTipoVeiculo";

const CadastroTipoVeiculosModal = ({ open, onClose, veiculo, onSuccess }) => {
    return (
        <ModalWrapper 
            size='large'
            open={open} 
            onClose={onClose} 
            title="Cadastro de Tipo de veículo">
                <FormCadastroTipoVeiculo 
                    onClose={onClose} 
                    veiculo={veiculo} 
                    onSuccess={onSuccess}
                />
        </ModalWrapper>
    );
};
export default CadastroTipoVeiculosModal;