import { ButtonGroup } from './button-group.js';
import { PhoneField } from './phone-field.js';

const html = String.raw;

export class _InputPhone {
    static component(selectors, defaultCountries) {
        return html `
            <div class="${selectors.wrapper}">
                ${ ButtonGroup.component(selectors, defaultCountries) }
                ${ PhoneField.component(selectors) }
            </div>
        `;
    }
}