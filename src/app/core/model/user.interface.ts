export interface User {
    id: string,
    nickname: string,
    email: string,
    phone: string,
    notification: Notification[]
    avatarUrl: string
}