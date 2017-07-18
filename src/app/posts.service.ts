import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }



   getName() {
    return this.http.get('/api/satabdi')
      .map(res => "welcome satabdi");
  }


   getAllBooks() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/book')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

    saveBook(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/booksave', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
 registeruser(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/api/userregister', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  showBook(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/api/book/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  showUser(id)
  {
    return new Promise((resolve, reject) => {
        this.http.get('/api/userdetails/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  showloginUser(user)
  {
 return new Promise((resolve, reject) => {
        this.http.post('/api/loginuserdetails/',user)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });

  }
  showmailresponse(email)
  {
    return new Promise((resolve, reject) => {
      this.http.get('/api/showmailresponse/' + email)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }
  /*



  updateBook(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/book/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteBook(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/book/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }*/

}
