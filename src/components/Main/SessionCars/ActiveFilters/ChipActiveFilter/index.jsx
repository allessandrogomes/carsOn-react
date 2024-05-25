import { Chip } from "@mui/material";

export default function ChipActiveFilter({ title }) {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Chip label={title} onDelete={handleDelete} />
    )
}