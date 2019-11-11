const html = String.raw;

export class PhoneField {
    constructor(id) {
        this.id = id;
        this.connectedCallback()
    }

    static component(selectors) {
        let $this = new PhoneField(`${selectors.main}PhoneField`);
        return html `
            <input
                type="tel"
                name="phone"
                id="${$this.id}"
                class="${selectors.phoneField}"
                placeholder="Phone number "
            />
        `;
    }

    connectedCallback() {

    }
}