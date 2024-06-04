import { animate, style, transition, trigger } from "@angular/animations";

export const dropdownMenuAnimation = trigger('dropdownMenuAnimation', [
   transition(':enter', [
      style({
         transform: 'scale(0.9)',
         opacity: '0'
      }),
      animate('100ms ease', style({
         transform: 'initial',
         opacity: '1'
      }))
   ]),
   transition(':leave', [
      style({
         transform: 'initial',
         opacity: '1'
      }),
      animate('100ms ease', style({
         transform: 'scale(0.9)',
         opacity: '0'
      }))
   ])
])