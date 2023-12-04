import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string="";
password:string="";

  constructor(private http:HttpClient , private router:Router ) {}

  ngOnInit(): void { 
  }

  login(event: Event){
    event.preventDefault();
    console.log("Enter in login function");
    let bodydata = {
      email:this.email
    }
    console.log(bodydata);
    const url = environment.apiUrl;
    console.log(url);
        this.http.post(`${url}/patient/login`, bodydata, { responseType: 'text', observe: 'response' }).subscribe(
          (response) => {
            const contentType = response.headers.get('Content-Type');
        
            if (contentType && contentType.includes('application/json')) {
              // It's a JSON response
              const jsonData = JSON.parse(response.body);
              console.log(jsonData);
        
              if (jsonData.status) {
                this.router.navigateByUrl('/dashboard');
              } else {
                alert("Incorrect Password");
                console.log("Login Error");
              }
            } else {
              // It's a plain text response
              console.log(response.body);
        
              // Handle the plain text error here
              alert(response.body); // Display the error message to the user
            }
          },
          (error) => {
            // Handle error if any
            console.error("Error during login:", error);
          }
        );
        

        }
 

}
