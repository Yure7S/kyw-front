import { Member } from "./member.interface";
import { Project } from "./project.interface";

export interface Message {
   id: string
   sender: Member
   project: {
      id: string
      name: string
   }
   content: string
   sendIn: string
}