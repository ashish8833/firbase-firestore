import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { environment } from "../../../environments/environment";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { User } from "../../shared/models/user";
import { CoreModule } from "../../shared/core/core.module";
import { AuthService } from "../../shared/core/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users$: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;
  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public authService: AuthService
  ) {
    this.initLoginForm();
    this.afAuth.auth.signOut();
    this.afAuth.idToken.subscribe(res => {
      console.log("IdToken");
      console.log(res);
    });
    this.usersCollection = afs.collection<User>("users");
    this.users$ = this.usersCollection.valueChanges();
    this.users$.subscribe(res => {
      console.log(res);
    });
    this.authService.user$.subscribe(res => {
      console.log(res);
    });
  }

  initLoginForm() {
    this.loginForm = this.fb.group(
      {
        email: new FormControl("", {
          validators: [
            Validators.required,
            Validators.pattern(environment.mobileValidator)
          ]
        }),
        password: new FormControl("", {
          validators: Validators.required
        })
      },
      { updateOn: "blur" }
    );
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(
        this.loginForm.getRawValue().email,
        this.loginForm.getRawValue().password
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res);
        this.users$ = this.usersCollection.valueChanges();
        console.log(this.usersCollection);
        this.users$.subscribe(res => {
          console.log(res);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {}
}
