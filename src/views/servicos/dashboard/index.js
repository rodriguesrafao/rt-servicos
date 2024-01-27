import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Visibility } from "@material-ui/icons";
import { Card, CardHeader, Divider, Grid } from "@mui/material";

const DashBoardOS = ()=>{
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const stateListaStatus= useSelector((state) => state );


    return(
        <>
            //View alerada para preservar regra do negócio do cliente.
        </>
    )
}

export default DashBoardOS;