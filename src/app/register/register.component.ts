﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { first } from 'rxjs/operators';

//import { AlertService } from '../alert.service';
//import { AuthenticationService } from '../authentication.service';
//import { UserService } from '../user.service';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    //    private authenticationService: AuthenticationService,
    //    private userService: UserService,
    //    private alertService: AlertService
    ) {
        // redirect to home if already logged in
    /*    if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }*/
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            vorname: ['', Validators.required],
            nachname: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
            strasse: [''],
            plz: ['', Validators.maxLength(5)],
            ort: [''],
            telefon: [''],
            speichern: [true, Validators.required],
            mailingliste: [false, Validators.required],
            newsletter: [false, Validators.required],
            //password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.router); // FIXME
        this.loading = true;
/*        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }

}