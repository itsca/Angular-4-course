import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  	.online {
  		font-weight: bold;
  	}
  	`]
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;
  constructor() {
  	this.serverId = Math.floor(Math.random() * 10) + 1;
  }
  getServerStatus() {
  	this.serverStatus = this.serverId % 2 == 0 ? 'online' : 'offline';
  	return this.serverStatus;
  }
  getColor() {
  	return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
