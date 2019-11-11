import { CountryItem } from './country-item.js';
import { countries } from '../../data/data.js';

const html = String.raw;

export class CountryList {
    static component(selectors) {
        return html `
            <ul id="${selectors.main}Countries" class="${selectors.ul} f16">
                ${this.items()}
            </ul>
        `;
    }

    static items() {
        countries.sort((a, b) => {
            let x = a.name.toLocaleLowerCase(),
                y = b.name.toLocaleLowerCase();
            if (x < y) { return -1 }
            if (x > y) { return 1 }
            return 0
        })
        let items = countries.map(
            country => CountryItem.component(country.name, country.cca2, country.callingCode)
        ).join('');
        return items;
    }
}