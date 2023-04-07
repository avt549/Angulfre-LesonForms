import {AbstractControl, Form, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators {
  static restrictedEmails(controls: FormControl): { [p: string]: boolean } | null {
    if(['v@mail.ru','test@mail.ru'].includes((controls.value))){

      return {restrictedEmails:true}
    }
    return null
  }

  static uniqEmail(control:AbstractControl): Promise<any>| Observable<any>{
    return new Promise(resolve => {
      setTimeout(()=>{
        if(control.value==='asinc@mail.ru'){
          resolve({uniqEmail:true})
        }else{
          resolve(null)
        }
      },1000)
    })
  }
}

