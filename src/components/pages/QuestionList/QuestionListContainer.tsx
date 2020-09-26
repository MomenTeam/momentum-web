import composeHooks from 'react-hooks-compose'
import { useParams } from 'react-router-dom'
import useResource, { ResourceKey } from '../../../state/resource'
import QuestionList, { IQuestionListProps } from './QuestionList'

const useQuestionListContainer = (): IQuestionListProps => {
  const { id } = useParams()
  const [state, action] = useResource()

  return {  }
}

export default composeHooks({ useQuestionListContainer })(QuestionList)
