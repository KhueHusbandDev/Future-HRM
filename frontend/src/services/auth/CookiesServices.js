import Cookies from 'js-cookie';


class CookieService {
    /**
     * Method to get a cookie value. Can parse the value as JSON and validate it against a schema. If the validation fails, it will throw an exception. If the cookie is not found, it will return undefined.
     */
    static get(
        key,
        options
    ) {
        const value = Cookies.get(key);

        if (typeof value === 'undefined') return value;

        let mutatedValue = value;

        if (options?.parseJSON) {
            try {
                mutatedValue = JSON.parse(value);
                // eslint-disable-next-line no-empty
            } catch (e) { }
        }

        if (options?.validationSchema) {
            return options.validationSchema.parse(mutatedValue);
        }

        return mutatedValue;
    }

    static getAll() {
        return Cookies.get();
    }

    static set(
        key,
        value,
        options
    ) {
        const stringValue =
            typeof value === 'string' ? value : JSON.stringify(value);
        return Cookies.set(key, stringValue, options);
    }

    static remove(key, options) {
        return Cookies.remove(key, options);
    }
}

export default CookieService;