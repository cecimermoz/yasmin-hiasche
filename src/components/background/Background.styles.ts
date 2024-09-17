import { Stack, styled } from '@mui/material'

export const BackgroundWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'grid',
  zIndex: '-1',

  '& > *': {
    gridArea: '1 / 1',
  },
})

export const Overlay = styled('div')({
  background: '#0d0513',
  width: '100%',
  height: '100%',
  opacity: '1',
  gridColumn: 1,
  gridRow: 1,
})

export const BackgroundImage = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'url' && prop !== 'isVisible',
})<{ url: string; isVisible: boolean }>(({ url, isVisible }) => ({
  background: `no-repeat scroll 0% 0% / contain  border-box url(${url}) transparent`,
  gridColumn: 1,
  gridRow: 1,
  height: '100%',
  opacity: isVisible ? 0.5 : 0,
  transition: 'opacity 500ms ease-in-out',
  width: '100%',
  zIndex: 1,
}))

export const StyledGradient = styled('div')(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(76, 31, 110, 1) 0%, rgba(141,13,152,1) 100%)',
  width: '100%',
  height: '100%',
  zIndex: '5',
  opacity: '0.6',
  gridColumn: 1,
  gridRow: 1,
}))
