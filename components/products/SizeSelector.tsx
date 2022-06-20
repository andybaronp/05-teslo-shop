import { FC } from 'react'

import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { ISize } from '../../interfaces'

interface Props {
  selectedSize?: ISize
  sizes: ISize[]
  onSelectedSize: (sixe: ISize) => void
}
export const SizeSelector: FC<Props> = ({
  selectedSize,
  sizes,
  onSelectedSize,
}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size='small'
          color={selectedSize === size ? 'primary' : 'info'}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  )
}
