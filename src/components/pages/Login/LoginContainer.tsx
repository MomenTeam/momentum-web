import { useToasts } from 'bumbag'
import { useState } from 'react'
import composeHooks from 'react-hooks-compose'
import { useHistory } from 'react-router-dom'
import urls from '../../../routers/urls'
import useGlobal from '../../../state/globalStore'
import Login from './Login'

const useLoginContainer = () => {
  const history = useHistory()
  const [error, setError] = useState('')
  const toasts = useToasts()
  const [state, action] = useGlobal()

  const login = async (email: string, password: string) => {
    try {
      /* const data = await AuthService.signIn(email, password)
      action.setUserInfo(data)
      setTimeout(() => {
      }, 1000) */
      history.push(urls.Dashboard)
    } catch (error) {
      toasts.danger({ title: 'Error', message: error.message })
      setError(error.code)
    }
  }

  return { login, error }
}

export default composeHooks({ useLoginContainer })(Login)
