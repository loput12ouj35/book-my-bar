import '@auth0/auth0-react'

declare module '@auth0/auth0-react' {
  export interface User {
    isAdmin?: boolean
  }
}
