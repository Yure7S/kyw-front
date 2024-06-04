import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, far } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    )
  }
}
