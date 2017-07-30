import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { PlayerService } from '../player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  private addResult;

  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {}

  usernameControl = new FormControl( '' , [
    Validators.required
  ]);

  passwordControl = new FormControl( '' , [
    Validators.required
  ]);

  onSubmit() {
    return this.addResult = this.PlayerService.addPlayer(this.username, this.password);
  }


}
