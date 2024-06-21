import { Button } from "@mui/material";

export default function ButtonOk() {
    return <Button
        type="submit"
        sx={{
            minWidth: "initial",
            width: "10px",
            height: "30px",
            backgroundColor: "#38BCAC",
            '&:hover': { backgroundColor: '#1f8b7f' }
        }}
        variant="contained"
    >
        Ok
    </Button>
}