export default class Validator {
    constructor() {

    }

    email(field) {
        const regEx = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

        return regEx.test(field) ? false : 'Not a valid email address';
    }

    max(field, maxValue) {
        if (+field <= maxValue) {
            return false;
        }

        return `The field shouldnt be greater than ${maxValue}`;
    }
    
    maxLength(field, maxValue) {
        if (field.length <= maxValue) {
            return false;
        }

        return `Max ${maxValue} characters allowed`;
    }

    min(field, minValue) {
        if (+field >= minValue) {
            return false;
        }

        return `The field shouldnt be lesser than ${minValue}`;
    }

    minLength(field, minValue) {
        if (field.length >= minValue) {
            return false;
        }

        return `Min ${minValue} characters allowed`;
    }

    required(field) {
        if (!field) {
            return 'Required field';
        }

        return false;
    }

    /**
     * Performs the validation against the given field
     * 
     * @param {string} field The field to validate
     * @param {string[]} rules An array of validation rules
     * @returns {string | boolean} An error message as string or boolean false if the validation succedes
     */
    validate(field, rules = []) {
        for (const rule of rules) {
            const [name, ...params] = rule.split(':');

            // let isInvalid;

            // switch(name) {
            //     case 'email':
            //         isInvalid = this.email(field);
            //         break;
            //     case 'max':
            //         isInvalid = this.max(field, ...params);
            //         break;
            //     case 'maxLength':
            //         isInvalid = this.maxLength(field, ...params);
            //         break;
            //     case 'min':
            //         isInvalid = this.min(field, ...params);
            //         break;
            //     case 'minLength':
            //         isInvalid = this.minLength(field, ...params);
            //         break;
            //     case 'required':
            //         isInvalid = this.required(field);
            //         break;
            //     default:
            //         isInvalid = false;
            // }

            const validator = this[name];
            let isInvalid = typeof validator === 'function' ? validator(field, ...params) : false;

            if (isInvalid) {
                return isInvalid;
            }
        }

        return false;
    }
}