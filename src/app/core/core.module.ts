import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MyMaterialModule } from '../my-material/my-material.module';
import { SidenavService } from './sidenav/sidenav.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ThemingService } from './theming.service';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [
    SidenavService,
    ThemingService
  ]
})
export class CoreModule { }
