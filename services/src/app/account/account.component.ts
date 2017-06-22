import { Component,Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LoggingService, private AccountsService: AccountsService){}


  onSetTo(status: string) {
    this.AccountsService.updateStatus(this.id, status);
    this.logginService.logStatusChange(status);
  }
}


