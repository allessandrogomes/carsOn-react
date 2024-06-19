import { Chip } from "@mui/material";

export default function ChipActiveFilter({ title, handleDelete }) {

    return (
        <Chip sx={{ textTransform: "capitalize" }} label={title} onDelete={handleDelete} />
    )
}