import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Notification, UserService } from '@app/core';

declare var $:any;

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login'
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(fb: FormBuilder, private _userService: UserService, private _router: Router){
        this.form = fb.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {}

    submit() {
        this._userService.list(1,'','').subscribe((data)=>{
            let user = data.response.find(x=>x.nombre == this.form.controls.usuario.value);
            console.log(user);
            if (user && user.clave === this.form.controls.password.value) {
                localStorage.setItem("username", user.nombre);
                window.location.reload();
            } else {
                this.showError();
            }
        });
    }

    showError(){
        Notification.notify('Las credenciales incorrectas');
    }

}
