import ModalWrapper from "views/componentes/ModalWrapper";
import { FormMovimentoCaixa } from "./FormMovimentoCaixa";

const CadastroMovimentoCaixaModal = ({ open, onClose, movimento, onSuccess }) => {
    return (
        <ModalWrapper 
            size='medium'
            open={open} 
            onClose={onClose} 
            title="Movimento de caixa">
                <FormMovimentoCaixa 
                    onClose={onClose} 
                    movimento={movimento} 
                    onSuccess={onSuccess}
                />
        </ModalWrapper>
    );
};
export default CadastroMovimentoCaixaModal;