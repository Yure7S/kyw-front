import { Directive, HostListener, Input, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CurrentUserService } from 'src/app/core/utils/current-user.service';

@Directive({
  selector: '[appHideItemByRoute]'
})
export class HideItemByRouteDirective implements OnInit {
  @Input() mediaQueryValueInPix: number = 540

  private route = inject(Router)
  private templateRef = inject(TemplateRef)
  private viewContainer = inject(ViewContainerRef)

  private hasView = false;

  ngOnInit(): void {
    this.checkPreview();
    this.route.events.pipe(
      filter(event => (event instanceof NavigationStart || event instanceof NavigationEnd))
    ).subscribe(() => this.checkPreview());
  }

  private checkPreview(): void {
    const shouldHide = this.route.routerState.snapshot.url.split('/').length > 2 && window.innerWidth <= this.mediaQueryValueInPix;
    
    if (shouldHide && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if (!shouldHide && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }
}