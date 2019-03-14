export class Custom {
    static unique(control) {
        const db = ['kumar@kumar.com'];
        if(db.indexOf(control.value) !== -1) {
            return {unique: false}
        }

        return null;
    }
}