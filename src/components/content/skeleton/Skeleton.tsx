import { Background } from '../../background'
import Loader from './loader/Loader'
import { SkeletonWrapper } from './Skeleton.style'

export const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <Background />
      <Loader />
    </SkeletonWrapper>
  )
}
