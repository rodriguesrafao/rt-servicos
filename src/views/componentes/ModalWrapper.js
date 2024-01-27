import PropTypes from 'prop-types';

// material-ui
import { Box, IconButton, Modal } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';
import { Close } from '@material-ui/icons';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //


const ModalWrapper = ({open, onClose, children, size, ...other }) => {
  const sx = {
    '& > *': {
      flexGrow: 1,
      flexBasis: '10%'
    }
  }
  switch(size){
    case 'small':
      sx.maxWidth = { xs: 400, lg: 475 };
      sx.mx ={xs: 'auto', md: 'auto', lg:'auto'}
      break;
    case 'medium':
      sx.maxWidth = { xs: 600, lg: 775 };
      sx.mx ={xs: 'auto', md: 'auto', lg:'auto'}
      break;
    case 'large':
      sx.maxWidth = { xs: 800, lg: 975 };
      sx.mx = {xs: 'auto', md: 'auto', lg:'auto'}
      break;
    default:
      sx.margin = { xs: 2.5, md: 3 }
      break;
  }

  const handleClose = (e, reason)=>{
    if (reason && reason == "backdropClick") 
      return;
    onClose();
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <MainCard
        secondary={<IconButton color='error' size='small' onClick={onClose}><Close /></IconButton>}
        sx={sx}
        content={false}
        {...other}
      >
        <Box sx={{ p: { xs: 2, sm: 2, xl: 3 } }} >{children}</Box>
      </MainCard>
    </Modal>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.node
};

export default ModalWrapper;
