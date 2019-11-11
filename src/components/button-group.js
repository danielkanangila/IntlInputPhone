import { CountryList } from './country-list';

const html = String.raw;

export class ButtonGroup {
    static component(selectors, defaultCountry) {
        const id = `${selectors.main}BtnToggle`;
        this.connectedCallback(id, selectors.main, selectors.ul);
        return html `
            <div class="${selectors.buttonGroup}">
                <button id="${id}" class="${selectors.btnCountriesToggle} f16">
                    <span id="btn-flag-icon" class="flag ${defaultCountry.cca2.toLowerCase()}"></span>
                    <span id="btn-cc-text">+ ${defaultCountry.callingCode}</span>
                    <span id="btn-caret" class="caret"></span>
                </button>
                ${ CountryList.component(selectors) }
            </div>
        `;
    }

    static connectedCallback(id, parentElementID, ulClasses) {
        // Adding event on button to toggle country list
        document.addEventListener('click', function(e) {
            if (e.target && e.target.id === id ||
                e.target.id === 'btn-cc-text' ||
                e.target.id === 'btn-flag-icon' ||
                e.target.id === 'btn-caret') {
                // Country list ul element
                const countryListEl = document.getElementById(`${parentElementID}Countries`);
                if (countryListEl.classList) {
                    countryListEl.classList.toggle('open');
                } else {
                    // For IE9 only
                    const classes = countryListEl.className.split(' '),
                        i = classes.indexOf('open');

                    if (i >= 0) {
                        classes.slice(i, 1);
                    } else {
                        classes.push('open');
                        countryListEl.className = classes.join(' ');
                    }
                }

            }
        }, true);
        /*document.addEventListener('country-selected', function(e) {
            console.log(e);
        });*/
    }

    static onSelectedCounrty(e) {
        console.log(e);
    }
}