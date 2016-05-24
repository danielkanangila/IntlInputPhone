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
  $('.input-phone').intlInputPhone({ display_error: $('.custom-error-container') });
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

Validation is done automatically during the jQuery `.blur()` event and form `.submit()` event. If the input is validated, the plugin add an input hidden named `intlInputPhone`. This input has as value a JSON string which will be recover server side in the following way: 

```php
// code php

$inputphone = json_decode($_POST['intlInputPhone']);

var_dump($inputphone);

```
Example if the user enter a valide phone number from France (fr):

```
object(stdClass)[1]
  public 'isValidNumber' => boolean true
  public 'isValidNumberForRegion' => boolean true
  public 'phoneNumberRegion' => string 'FR' (length=2)
  public 'numberType' => string 'MOBILE' (length=6)
  public 'format' => 
    object(stdClass)[2]
      public 'E164' => string '+33610203010' (length=12)
      public 'orginal' => string '6 10 20 30 10' (length=13)
      public 'national' => string '06 10 20 30 10' (length=14)
      public 'international' => string '+33 6 10 20 30 10' (length=17)
      public 'out-country-us' => string '011 33 6 10 20 30 10' (length=20)
      public 'out-country-ch' => string '00 33 6 10 20 30 10' (length=19)
```

## License

The MIT License

Copyright (c) 2016 daniel kanangila.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
