import type { UnwrapNestedRefs } from 'vue'

declare type Authenticator = {
  authStatus: 'authenticated'|'unauthenticated'|'configuring'
  challengeName?: unknown

  route: string

  initializeMachine: (param?: unknown) => unknown
  resendCode: (param?: unknown) => unknown
  send: (param?: unknown) => unknown
  signOut: (param?: unknown) => unknown
  skipVerification?: (param: unknown) => unknown
  toSignIn: (param?: unknown) => unknown
  toSignUp: (param?: unknown) => unknown
  updateBlur: (param?: unknown) => unknown
  updateForm: (param?: unknown) => unknown
  toSignUp: (param?: unknown) => unknown

  user?: {
    signInDetails: { loginId: string, authFlowType: string }
    userId: string
    username: string
  }
  username?: unknown
}

declare type UseAuthenticator = UnwrapNestedRefs<Authenticator>