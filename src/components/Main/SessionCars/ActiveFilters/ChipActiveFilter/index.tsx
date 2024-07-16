import { Chip } from '@mui/material'

interface IChipActiveFilterProps {
  filter: string
  filterType: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDelete: any
}

export default function ChipActiveFilter({
  filter,
  filterType,
  handleDelete,
}: IChipActiveFilterProps) {
  return (
    <Chip
      sx={{ textTransform: 'capitalize' }}
      label={`${filterType}: ${filter}`}
      onDelete={handleDelete}
    />
  )
}
