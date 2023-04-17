import {Paper} from "@mui/material";
export const Background = ({children}) => {
    return <div style={{background: "linear-gradient(to bottom, #a6c8ff, #fafcff)"}}>
        <Paper elevation={2} style={{ margin: "auto", padding: "5vh", width: "60vw" }}>
            {children}
        </Paper>
    </div>
}


