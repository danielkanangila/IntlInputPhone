const html = String.raw;

export class CountryItem {
    static component(name, cca2, callingCode) {
        const $data = {
            id: `${name}${cca2}${callingCode}`,
            name: name,
            cca2: cca2,
            callingCode: callingCode
        };
        this.connectedCallback($data)
        return html `
        <li>
          <a id="${$data.id}" href="javascript:void(0)" role="button" class="country">
              <i  class="flag f16 ${cca2.toLowerCase()}"></i>
              ${name}
              <span class="callingCode">+ ${callingCode}<span>
          </a>    
        </li>
        `;
    }

    static connectedCallback(data) {
        const $data = data;
        document.addEventListener('click', function(e) {

            if (e.target && e.target.id === $data.id) {
                const event = new CustomEvent("country-selected", {
                    detail: {
                        data,
                        time: new Date(),
                    }
                });
                e.target.dispatchEvent(event)
            }
        });
    }
}