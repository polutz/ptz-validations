## master

## 3.0.0 (June 25, 2017)

* Change validate from prop Function to prop Array of Functions.
* Add:
    - max
    - min
    - isString
    - isDate
    - isNumber
    - toLowerCase
    - toUpperCase
    - isEmail
* Remove:
    - validatePrice

## 2.0.3 (June 19, 2017)

* Add isValidNumber.
* Add number validation to validatePrice

## 2.0.2 (June 19, 2017)

* Add validatePrice.

## 2.0.1 (June 6, 2017)

* Add types to addError().
* Add Generic types to validate().

## 2.0.0 (June 3, 2017)

* Complete rewrite to Functional Programming.

## 1.2.2 (April 28, 2017)

* Transpiling Typescript to esnext.
* Add tests for:
    - ValidateString
        - toLowerCase
        - toUpperCase
    - HaveValidation
        - new with null
        - addError with null

## 1.2.1 (April 26, 2017)

* Fix unused variables.

## 1.2.0 (April 25, 2017)

* Update validateEmail and validateString usage:
    - Now you can create one static property called 'validations'.

## 1.1.0 (April 24, 2017)

* Rename validateEmail to isEmailValid.
* Add new validateEmail as validateString.

## 1.0.0 (April 24, 2017)

* Initial public release.
