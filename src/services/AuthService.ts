import { Auth } from 'aws-amplify'

export class AuthService {
  tokenRenewalTimeout: any
  public async signIn(username: string, password: string): Promise<any> {
    return await Auth.signIn(username, password)
  }

  public async signOut(): Promise<any> {
    return await Auth.signOut()
  }

  public async currentAuthenticatedUser(): Promise<any> {
    return await Auth.currentAuthenticatedUser()
  }

  public async currentSession(): Promise<any> {
    return await Auth.currentSession()
  }

  public async signUp(username: string, password: string): Promise<any> {
    return await Auth.signUp(username, password)
  }

  public async confirmSignUp(username: string, code: string): Promise<any> {
    return await Auth.confirmSignUp(username, code)
  }
}

export default new AuthService()
