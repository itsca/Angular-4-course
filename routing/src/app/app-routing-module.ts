import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent, children: [
      { path: ":id/:name", component: UserComponent },
  ] },
  { path: "servers", /*canActivate: [AuthGuard]*/canActivateChild: [AuthGuard],  component: ServersComponent, children: [
      { path: ":id", component: ServerComponent, resolve: {/*This property name is asign by the user*/server: ServerResolver} },
      { path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
  ] },
  //{path: 'not-found', component: PageNotFoundComponent },
  {path: 'not-found', component: ErrorMessageComponent, data: {message: 'Page not Found'} },
  {path: '**', redirectTo: '/not-found' }, // ** is === to Otherwise, It MUST be at the end of all routes!
];


@NgModule({
	imports: [
		//RouterModule.forRoot(appRoutes, {useHash: true}) /*Method to active Hash routing for some servers*/
    RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {

}