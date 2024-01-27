import ModalWrapper from "views/componentes/ModalWrapper";
import FormOrdemServico from "./form";

const CadastroOrdemServicoModal = ({ open, onClose, servico, onSuccess }) => {
    return (
        <ModalWrapper 
            size='large'
            open={open} 
            onClose={onClose} 
            title="Visualizar Ordem de Serviço">
                <FormOrdemServico 
                    servico={servico} 
                    onSuccess={onSuccess}
                    onClose={onClose}
                />
        </ModalWrapper>
    );
};
export default CadastroOrdemServicoModal;