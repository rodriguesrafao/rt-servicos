

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const clientes = {
  id: 'clientes',
  title: 'Clientes',
  type: 'group',
  children: [
    {
      id: 'clientes-lista',
      title: 'Lista',
      type: 'item',
      url: '/sistema/clientes/lista',
      breadcrumbs: false
    },
  ]
};

export default clientes;
