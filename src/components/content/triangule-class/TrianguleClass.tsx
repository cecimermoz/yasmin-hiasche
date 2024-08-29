import { Box } from '@mui/material'
import { TrianWrapper } from './TrianguleClass.styles'

export const TrianguleClass = () => {
  return (
    <TrianWrapper>
      <Box width={100} height={125} position="absolute" className="trian3" />
      <Box width={100} height={125} position="absolute" className="trian1" />
      <Box width={100} height={125} position="absolute" className="trian2" />
    </TrianWrapper>
  )
}
