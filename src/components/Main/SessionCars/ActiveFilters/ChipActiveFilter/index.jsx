import { Chip } from "@mui/material";

export default function ChipActiveFilter({ filter, filterType, handleDelete }) {

    return (
        <Chip sx={{ textTransform: "capitalize" }} label={`${filterType}: ${filter}`} onDelete={handleDelete} />
    )
}