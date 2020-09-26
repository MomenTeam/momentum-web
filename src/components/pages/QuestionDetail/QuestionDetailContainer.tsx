import composeHooks from 'react-hooks-compose'
import { useParams } from 'react-router-dom'
import useResource, { ResourceKey } from '../../../state/resource'
import QuestionDetail, { IQuestionDetailProps } from './QuestionDetail'

const useQuestionDetailContainer = (): IQuestionDetailProps => {
  const { id } = useParams()
  const [state, action] = useResource()

  return {  }
}

export default composeHooks({ useQuestionDetailContainer })(QuestionDetail)
