import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// fornecedores page routing
const Fornecedores = Loadable(lazy(() => import('views/fornecedores')));
const Caixa = Loadable(lazy(() => import('views/caixa')));
const Clientes = Loadable(lazy(() => import('views/clientes')));
const Compras = Loadable(lazy(() => import('views/compras')));
const Estoque = Loadable(lazy(() => import('views/produtos/estoque')));
const Produtos = Loadable(lazy(() => import('views/produtos')));
const Funcionarios = Loadable(lazy(() => import('views/funcionarios')));
const TiposVeiculos = Loadable(lazy(() => import('views/tipos-veiculos')));
const DashboardOrdemServico = Loadable(lazy(() => import('views/servicos/dashboard')));
const FormOrcamentos = Loadable(lazy(() => import('views/servicos/orcamentos')));
const FormOrdemServico = Loadable(lazy(() => import('views/servicos/form')));
const PrestacaoDeContas = Loadable(lazy(() => import('views/servicos/relatorios/PrestacaoContas')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/sistema',
  element: <MainLayout />,
  children: [
    {
      path: '/sistema/caixa',
      element: <Caixa />
    },
    {
      path: '/sistema/dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/sistema/fornecedores',
      children: [
        {
          path: 'lista',
          element: <Fornecedores />
        }
      ]
    },
    {
      path: '/sistema/funcionarios',
      children: [
        {
          path: '',
          element: <Funcionarios />
        }
      ]
    },
    {
      path: '/sistema/clientes',
      children: [
        {
          path: 'lista',
          element: <Clientes />
        }
      ]
    },
    {
      path: '/sistema/produtos',
      children: [
        {
          path: 'compras',
          element: <Compras />
        },
        {
          path: 'lista',
          element: <Produtos />
        },
        {
          path: 'estoque',
          element: <Estoque />
        }
      ]
    },
    {
      path: '/sistema/veiculos',
      children: [
        {
          path: 'tipos',
          element: <TiposVeiculos />
        }
      ]
    },
    {
      path: '/sistema/servico',
      children: [
        {
          path: 'orcamentos',
          element: <FormOrcamentos />
        },
        {
          path: 'ordens',
          element: <FormOrdemServico />
        },
        {
          path: 'dashboard',
          element: <DashboardOrdemServico />
        },
        {
          path: 'prestacao',
          element: <PrestacaoDeContas />
        },
      ]
    }
  ]
};

export default MainRoutes;
