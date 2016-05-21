# IntlInputPhone

Intelligent input phone is a jQuery plugin that allows to easily generating an input type phone, parsing, formating and validating any international phone numbers. This plugin is based on Google's [libphonenumber](https://github.com/googlei18n/libphonenumber) and some component of [twitter Bootstrap](http://getbootstrap.com/) (form, button, popover, dropdown)

## Functionality

* Generating input, parsing, formating and valiting phone numbers for all countries/regions of the world.
* `isValidNumber` - full validation of a phone number for a region using length and prefix information.
* `isValidNumberForRegion` - validation of a phone number for a region.
* `phoneNumberRegion` - gets code ISO 3166-1 alpha-2.
* `numberType` - gets the type of the number based on the number itself; able to distinguish Fixed-line, Mobile, Toll-free, Premium Rate, Shared Cost, VoIP and Personal Numbers (whenever feasible).
* `format`:
      - `national`
      - `international`
      - `E164`

## Dependency

* [jQuery Library](https://code.jquery.com/)

## Installation 

It recommanded to use [bower](http://bower.io/) to install the plugin.

```bash
$ bower install intlinputphone
```

You can also download or clone this repository [DanielKanangila/IntlInputPhone](https://github.com/DaneilKanangila/IntlInputPhone.git)

## Online Demo

## Example

Here is an example generating an input type phone:

```html
<div class="input-phone"></div>
```

```javascript
$('.input-phone').intlInputPhone();
```

## Options

The plugin accepts options as an object argument. Pass in the otions like this:

```javascript
$('.input-phone').intlInputPhone({ preferred_country: ['fr', 'us', 'gb'] });
```

Supported options are:

* **preferred_country** array of countries that will be dispayed in top of drowpdown-menu. Accept country to  ISO 3166-1 alpha-2 format.
*  **display_error** by default the errors are displayed in popover element, you can cutomize the error container like this:

  ```javascript
  $('.input-phone').intlInputPhone({ display_error: $('.custom-error-conyainer') });
  ```
* **error_message** all error messages are displayed in English, you can customize like this:

  ```javascript
  $('.input-phone').intlInputPhone({
    error_message: {
      INVALID_PH_N: "your custom message here for invalid phone number",
      INVALID_CC: "your custom message here for invalid country code",
      TOO_SHORT: "your custom message here for too short phone number",
      TOO_LONG: "your custom message here for too long phone number",
      UNKNOWN: "your custom message here for unknow phone number"
    }
  })
  ```
  
## Validation  

