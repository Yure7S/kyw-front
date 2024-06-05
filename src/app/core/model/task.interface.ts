export interface Task {
   id: string,
   status: string,
   criticality: string,
   title: string,
   description: string,
   attachments: string,
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