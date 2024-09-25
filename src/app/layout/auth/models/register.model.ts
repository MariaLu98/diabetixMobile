import { AbstractControl } from '@angular/forms';
import { compare, email, maxLength, prop, required } from '@rxweb/reactive-form-validators';

export class RegisterRequest {
  @email({ message: 'Validations.MustBeEmail' })
  @required({ message: 'Validations.IsRequired' })
  public email: string = '';

  @required({ message: 'Validations.IsRequired' })
  public user: string = '';

  @required({ message: 'Validations.IsRequired' })
  public password: string = '';

  @compare({ fieldName: 'password', message: 'Validations.ThePasswordsAreNotEquals' })
  @required({ message: 'Validations.IsRequired' })
  public confirmpassword: string = '';

  @required({ message: 'Validations.IsRequired' })
  public name: string  = '';

  @required({ message: 'Validations.IsRequired' })
  public birthdate: Date = new Date();

  @required({ message: 'Validations.IsRequired' })
  public cellphone: string  = '';

}