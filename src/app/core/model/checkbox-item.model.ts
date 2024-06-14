export class CheckboxItem<T> {
   selected?: boolean = false
   data: T

   constructor(dataValue: any, selected: boolean = false) {
      this.selected = selected
      this.data = dataValue
   }
}