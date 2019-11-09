const html = String.raw;

export class CountryItem {
    constructor(data) {
        this.id = `${data.name}${data.cca2}${data.callingCode}`;
        this.data = data;
        this.connectedCallback();
    }

    static component(name, cca2, callingCode) {
        let $this = new CountryItem({
            name: name,
            cca2: cca2,
            callingCode: callingCode
        });
        return html `
        <li>
          <a href="javascript:void(0)" role="button" class="country">
              <i id="${$this.id}" class="flag ${cca2}"></i>
              ${name}
              <span class="callingCode">${callingCode}<span>
          </a>    
        </li>
        `;
    }

    connectedCallback() {
        this.el = document.querySelector(`#${this.id}`);
        const data = this.data;
        this.el.addEventListener('click', e => {
            const event = new CustomEvent("country-selected", {
                detail: {
                    data,
                    time: new Date(),
                }
            });
            this.el.dispatchEvent(event);
        });
    }
}