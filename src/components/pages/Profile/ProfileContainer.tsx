import composeHooks from 'react-hooks-compose'
import { useParams } from 'react-router-dom'
import useResource, { ResourceKey } from '../../../state/resource'
import Profile, { IProfileProps } from './Profile'

const useProfileContainer = (): IProfileProps => {
  const { id } = useParams()
  const [state, action] = useResource()

  return {  }
}

export default composeHooks({ useProfileContainer })(Profile)
