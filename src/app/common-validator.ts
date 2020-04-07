import { FormControl } from '@angular/forms';

export class CommonValidator {
    static startWithNumber(control: FormControl) {
        const firstChart = control.value.charAt(0);
        if (firstChart && isNaN(firstChart)) {
            return {startWithNumber: true};
        } else {
            return null;
        }
    }

    static userTaken(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'aa') {
                    resolve({userTaken: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
