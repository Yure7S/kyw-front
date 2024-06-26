export interface MessageResponse {
   id: string,
   sender: {
     userId: string,
     nickname: string,
     avatarUrl: string
   },
   project: {
     projectId: string,
     name: string
   },
   content: string,
   sentIn: string
 }