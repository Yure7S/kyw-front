export interface LoginResponse {
    token: string,
    type: string,
    refreshToken: string,
    id: string,
    nickname: string,
    email: string,
    roles: string[]
}