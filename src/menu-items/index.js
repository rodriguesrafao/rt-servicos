import dashboard from './dashboard';
import utilities from './utilities';
import other from './other';
import fornecedores from './fornecedores';
import servicos from './servicos';
import clientes from './clientes';
import produtos from './produtos';


// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,clientes,fornecedores,servicos, produtos,utilities, other]
};

export default menuItems;
