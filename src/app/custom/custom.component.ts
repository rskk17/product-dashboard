import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {

  apiUrl = 'https://api.publicapis.org/entries';
  postForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: '',
      body: '',
      userId: 1
    });
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const postData = this.postForm.value;

    this.http.post(this.apiUrl, postData, { headers }).subscribe(
      (response) => {
        console.log('Post created:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
