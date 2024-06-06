import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Sidebar {
   content?: string,
   link?: string,
   icon?: IconProp,
   hide?: boolean,
   collapsible?: boolean,
   collapsed?: boolean,
   items?: Sidebar[],
}