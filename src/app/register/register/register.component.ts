import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl
} from "@angular/forms";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { User } from "../../shared/models/user";
import { University } from "../../shared/models/university";
import { v4 as uuid } from "uuid";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users$: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;
  private universityCollection: AngularFirestoreCollection<University>;
  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.initRegisterForm();
    // List All Document
    this.usersCollection = afs.collection<User>("users"); // Pass Reference to your class so easily access object
    this.universityCollection = afs.collection<University>("universitys"); // Pass Reference to your class so easily access object
    // this.users$ = this.usersCollection.valueChanges();
    // console.log(this.usersCollection);
    // console.log(this.users$);
    // this.users$.subscribe(res => {
    //   console.log(res);
    // });
    //Add Document
    // const id = this.afs.createId();
    // this.usersCollection.doc("1234567adsfasdf89").set({
    //   uuid: id,
    //   email: "test@tst.comfasdfasdf",
    //   emailVefified: false
    // });
  }

  initRegisterForm() {
    this.registerForm = this.fb.group(
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

  register() {
    this.afAuth.auth
      .createUserWithEmailAndPassword(
        this.registerForm.getRawValue().email,
        this.registerForm.getRawValue().password
      )
      .then(res => {
        this.afAuth.user.subscribe(x => {
          if (x) {
            x.sendEmailVerification()
              .then(() => {
                this.usersCollection.doc(x.uid).set({
                  email: x.email,
                  emailVerified: x.emailVerified,
                  uid: x.uid,
                  phoneNumber: x.phoneNumber,
                  photoURL: x.photoURL,
                  displayName: x.displayName
                });
                const universityId = uuid();
                this.universityCollection.doc(universityId).set({
                  uuid: universityId,
                  isProduction: false,
                  createdId: x.uid,
                  name: "",
                  address: "",
                  img: ""
                });
              })
              .catch(error => {
                console.log("Something went wrong");
              });
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {}
}
