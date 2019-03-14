// import { resolve } from 'dns';

export class Custom {
    static unique(control) {
        const db = ['kumar@kumar.com'];
        return new Promise( resolve => {
            setTimeout(() => {
                if (db.indexOf(control.value) !== -1) {
                    resolve ({unique: false})
                }
                return(null);
            }, 4000)
        })

        // static Validation-below
        // const db = ['kumar@kumar.com'];
        // if(db.indexOf(control.value) !== -1) {
        //     return {unique: false}
        // }
        // return null;
    }
}