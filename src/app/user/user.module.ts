import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, children: [
          {path: '', redirectTo: '/user/login', pathMatch: 'full'},
          {path: 'user-page', component: UserPageComponent},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'post/:id/edit', component: EditPageComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})

export class UserModule {

}

// dashboard ===userpage
