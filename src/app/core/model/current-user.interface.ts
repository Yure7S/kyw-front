export interface CurrentUser {
    token: string,
    type: string,
    refreshToken: string,
    id: string,
    nickname: string,
    email: string,
    roles: string[]
}