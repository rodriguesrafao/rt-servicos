import { Typography } from "@mui/material";
import MaterialTable from "material-table";
import tableIcons from "./tableIcons"
import { tableLabels } from "./tableLabels";

const TableGeneric = ({title = '', data, columns, options={actionsColumnIndex: -1}, actions, ...others })=>{
    if(!data){
        return(<Typography variant="body2">carregando dados...</Typography>)
    }
    return(
        <MaterialTable
            localization={tableLabels}
            icons={tableIcons}
            title={title}
            data={data}
            columns={columns}
            options={options}
            actions={actions}
            {...others}
        />
    )
}

export default TableGeneric;