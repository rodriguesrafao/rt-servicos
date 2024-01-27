import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  linearProgressClasses
} from '@mui/material';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { obterMetaMensal } from 'services/MetaFaturamentoService';
import { onError } from 'services/firebase';
import { percentage } from 'utils/number-utils';
import { useEffect, useState } from 'react';
import { obterVendasByPeriodo } from 'services/VendasService';

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#fff'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main
  }
}));

const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.light,
  marginBottom: '22px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '157px',
    height: '157px',
    background: theme.palette.primary[200],
    borderRadius: '50%',
    top: '-105px',
    right: '-96px'
  }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" sx={{ color: theme.palette.primary[800] }}>
              Progresso
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit">{`${Math.round(value)}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BorderLinearProgress variant="determinate" value={value} {...others} />
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
  const theme = useTheme();
  const [vrTotalVendas, setVrTotalVendas] = useState(0);
  const [metaFaturamento, setMetaFaturamento] = useState(0);
  const [peMeta, setPercentMeta] = useState(0);

  useEffect(() => {
    const hoje = new Date();
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    obterMetaMensal(hoje.getMonth()+1, hoje.getFullYear()).then( meta => {
      if(meta && meta.length > 0){
        setMetaFaturamento(meta[0].valor);
      }
    }).catch(onError);

    obterVendasByPeriodo(inicioMes, hoje)
    .then(mvns => {
      const total = mvns.reduce((a, b) => a + b.total, 0);
      setVrTotalVendas(total);
    })
    .catch(onError);
  
    return () => {}
  }, []);

  useEffect(() => {
    if(vrTotalVendas > 0 && metaFaturamento > 0){
      setPercentMeta(percentage(vrTotalVendas, metaFaturamento));
    }

  }, [vrTotalVendas, metaFaturamento]);


  return (
    <CardStyle>
      <CardContent sx={{ p: 2 }}>
        <List sx={{ p: 0, m: 0 }}>
          <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
            <ListItemAvatar sx={{ mt: 0 }}>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.largeAvatar,
                  color: theme.palette.primary.main,
                  border: 'none',
                  borderColor: theme.palette.primary.main,
                  background: '#fff',
                  marginRight: '12px'
                }}
              >
                <TableChartOutlinedIcon fontSize="inherit" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: 0 }}
              primary={
                <Typography variant="subtitle1" sx={{ color: theme.palette.primary[800] }}>
                  Meta
                </Typography>
              }
              secondary={<Typography variant="caption">{`${peMeta.toFixed(2)}/100%`}</Typography>}
            />
          </ListItem>
        </List>
        <LinearProgressWithLabel value={peMeta} />
      </CardContent>
    </CardStyle>
  );
};

export default MenuCard;
