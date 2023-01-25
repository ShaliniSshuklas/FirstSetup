import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAddRequestModel } from '../../../models/user-add-request.model';


@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})

export class AddUpdateUserComponent implements OnInit {

  //*************According to my TL JI, how dare you to initialize a form here ..... 

  public form: FormGroup = new FormGroup({});
  // public lessonForm: FormArray = new FormArray([])
  public addModel: UserAddRequestModel[] = [];

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initialize();
  }

  get Form() {
    return this.form;
  }

  get UserName() {
    return this.Form.get('userName');
  }

  get Email() {
    return this.form.get('email');
  }

  get MobileNo() {
    return this.form.get('mobileNo');
  }

  get lessons() {
    return this.form.get('lessons') as FormArray;
  }

  public submit() {
    console.warn(this.form);
  }

  public addLesson() {
    const lessonForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  public saveDetails() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.mapToAddRequestModel();
    console.log(this.addModel);

  }

  private initialize(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      mobileNo: ['', Validators.required],
      lessons: this.fb.array([])
    })
  }

  private mapToAddRequestModel() {
    this.addModel = [];
    this.lessons.controls.forEach(c => {
      let newModel = new UserAddRequestModel();
      newModel.user = c.get('userName')?.value;
      newModel.email = c.get('email')?.value;
      newModel.mobile = c.get('mobileNo')?.value;
      this.addModel.push(newModel);
    })
  }
}
