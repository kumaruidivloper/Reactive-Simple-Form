import { Directive, forwardRef } from '@angular/core';
import { Validator, 
         AbstractControl,
         NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[upUnique]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => UniqueDirective),
        multi: true
    }]
})

export class UniqueDirective implements Validator {
    
    validate(c: AbstractControl) {
        const db = ['kumar@kumar.com'];
        if (db.indexOf(c.value) !== -1) {
            return {unique: false}
        }
        return null;
    }

    constructor() {

    }
}