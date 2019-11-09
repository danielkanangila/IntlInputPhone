import { CountryItem } from './country-item.js';
import countries from '../../data/countries.json';

const html = String.raw;

export class countryList {
    static component(selectors) {
        return html `
            <ul id="${selectors.main}Countries">
                ${this.items()}
            </ul>
        `;
    }

    static items() {
        let items = countries.map(
            country => CountryItem.component(country.name, country.cca2, country.callingCode)
        ).join('');
        return items;
    }
}