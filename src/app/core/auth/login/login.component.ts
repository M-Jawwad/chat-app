import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = '';
    const fd = this.loginForm.value;
    // console.table(fd);
    
    const url = `${environment.authUrl}/login`;
    this.apiService.post(url, fd).subscribe((resp: any) => {
      localStorage.setItem('token', resp.token);
      this.router.navigateByUrl('admin');
    }, (err: any) => {
      if (!!err.error) {
        this.errorMessage = err.error['message'];
      }
    });
  }

}
