export interface Task {
   id: string,
   name: string,
   description: string,
   creator: {
      userId: string,
      nickname: string
   },
   imageUrl: string,
   linkGroup: string,
   pin: boolean,
   createAt: string
}