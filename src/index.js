/*import { CountryItem } from './components/country-item';
import { CountryList } from './components/country-list';
import { PhoneField } from './components/phone-field';
import { ButtonGroup } from './components/button-group';*/
import { _InputPhone } from './components/input-phone.js';
import {
    countries,
    bootstrapSelectors,
    defaultSelectors
} from '../data/data.js'

/*customElements.define('country-item', CountryItem);
customElements.define('country-list', CountryList);
customElements.define('phone-field', PhoneField);
customElements.define('button-group', ButtonGroup);
customElements.define('input-phone', _InputPhone);*/

const defaultCountry = countries.filter(item => item.cca2 === 'US')[0];

class InputPhone {
    constructor(attrs) {
        this.el = document.querySelector(`#${attrs.target}`)
        this.theme = attrs.theme;
        this.defaultCountry = attrs.defaultCountry !== undefined ? attrs.defaultCountry : defaultCountry;
        this.setSelectors(attrs);
    }

    static initialize(attrs) {
        const $this = new InputPhone(attrs);
        $this.el.innerHTML = _InputPhone.component($this.selectors, $this.defaultCountry);
    }

    setSelectors(attrs) {
        switch (this.theme) {
            /** 
             * Check if the selectors list exist when 
             * theme is set to custom and return error if not.
             * 
             */
            case 'custom':
                try {
                    this.selectors = attrs.selectors
                } catch (err) {
                    this.el.innerHTML = err.message;
                }
                break;
            case 'bootstrap':
                this.selectors = bootstrapSelectors;
                break;
            default:
                this.selectors = defaultSelectors;
        }
    }
}

window.InputPhone = InputPhone;