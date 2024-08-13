import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtService} from "./services/jwt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IT_Support-Angular';
  admin : boolean = false;
  user : boolean = false;
  tech : boolean = false;

  constructor(
    private router:Router,
    private service: JwtService
  ) {
  }

  ngOnInit(): void {
    this.checkpath()
  }

  protected checkpath() {
    const url = this.router.url;
    this.admin = url.includes('/admin');
  }

  logout(){
    this.service.logout();
    this.router.navigate(['']);
  }

}
