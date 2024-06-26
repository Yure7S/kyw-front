export interface Project {
   id: string,
   name: string,
   description: string,
   creator: {
      userId: string,
      nickname: string,
      avatarUrl: string
   },
   imageUrl: string,
   linkGroup: string,
   pin: boolean,
   createAt: string
}