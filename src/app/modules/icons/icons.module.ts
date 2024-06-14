import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faChartBar, faCircleDown, faFile, faTrashCan, far } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight, faArrowRightFromBracket, faChevronLeft, faEllipsisVertical, faGear, faInfoCircle, faListCheck, faMagnifyingGlass, faPlus, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [FontAwesomeModule]
})
export class IconsModule { 

  constructor(library: FaIconLibrary) {

    library.addIconPacks(far)

    library.addIcons(
      faArrowLeft,
      faArrowRight,
      faPlus,
      faEllipsisVertical,
      faTrashCan,
      faGear,
      faBell,
      faListCheck,
      faChartBar,
      faChevronLeft,
      faInfoCircle,
      faTriangleExclamation,
      faMagnifyingGlass,
      faArrowRightFromBracket,
      faXmark,
      faFile,
      faCircleDown,
    )
  }
}
