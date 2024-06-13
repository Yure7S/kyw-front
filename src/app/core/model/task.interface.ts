import { TaskStatus } from "../enums/TaskStatus.enum"

export interface Task {
   id: string,
   status: TaskStatus,
   criticality: string,
   title: string,
   description: string,
   attachments: File[],
   createAt: string,
   completedAt: string,
   project: {
      projectId: string,
      name: string
   },
   attributedTo: {
      userId: string,
      nickname: string
   },
   pin: boolean
}