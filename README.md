# ptz-validations

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/068342fbeda7406681981883c0469928)](https://www.codacy.com/app/polutz/ptz-validations?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=polutz/ptz-validations&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/polutz/ptz-validations.svg)](https://travis-ci.org/polutz/ptz-validations)
[![NPM](https://img.shields.io/npm/v/ptz-validations.svg)](https://www.npmjs.com/package/ptz-validations)
[![codecov.io](http://codecov.io/github/polutz/ptz-validations/coverage.svg)](http://codecov.io/github/polutz/ptz-validations)
[![Dependency Status](https://gemnasium.com/polutz/ptz-validations.svg)](https://gemnasium.com/polutz/ptz-validations)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-validations)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Translations
[pt-br](https://github.com/polutz/ptz-validations/blob/master/README.pt-br.md)
[en-us](https://github.com/polutz/ptz-validations/blob/master/README.md)

Validate your js objects.

## Install
```bash
    npm install --save ptz-validations
```

## How to use

### Simple example
```js
    import * as V from 'ptz-validations';

    const validateLogin = V.validate({
        userName: [
            V.required,
            V.isString,
            V.min(2),
            V.max(40),
            V.toLowerCase
        ],
        password: [
            V.required,
            V.isString,
            V.min(6),
            V.max(40)
        ]
    });

    const login = validateLogin({
        userName: '',
        password: 'abcd'
    });

    /* login Output with errors:
    {
        userName: '',
        password: 'abcd',
        errors: [{
            propName: 'userName',
            errorMsg: 'ERROR_REQUIRED'
        }, {
            propName: 'password',
            errorMsg: 'ERROR_MIN'
        }]
    }
    */
```

### Complex example
Example test of how to create a function to validate user.

**assert, describe, it** are used to test this code, this is a copy paste of a real code.
```typescript
    import * as assert from 'ptz-assert';
    import * as V from 'ptz-validations';

    describe('ptz-validations', () => {
        it('createUser example', () => {

            // Optional interface for Typescript projects
            interface IUser {
                id: string;
                userName: string;
                password: string;
                email: string;
                weight?: number;
                birthday?: Date;
            }

            const validateUser = V.validate<IUser>({
                id: [
                    V.generateId
                ],
                displayName: [
                    V.required,
                    V.isString,
                    V.min(2),
                    V.max(100)
                ],
                userName: [
                    V.required,
                    V.isString,
                    V.min(2),
                    V.max(40),
                    V.toLowerCase
                ],
                password: [
                    V.required,
                    V.isString,
                    V.min(6),
                    V.max(40)
                ],
                email: [
                    V.required,
                    V.isEmail
                ],
                weight: [
                    V.isNumber,
                    V.min(1),
                    V.max(1000)
                ],
                birthday: [
                    V.isDate,
                    V.min(new Date('1800-01-01')),
                    V.max(new Date())
                ]
            });

            const user = validateUser({
                userName: 'angeloocana',
                password: 'abcd',
                email: 'angeloocana@gmail.com',
                weight: 90,
                birthday: '1992-06-28'
            });

            const expectedUser = {
                id: 'hfk397d',
                userName: 'angeloocana',
                password: 'abcd',
                email: 'angeloocana@gmail.com',
                weight: 90,
                birthday: new Date('1992-06-28'),
                errors: [{
                    propName: 'displayName',
                    errorMsg: 'ERROR_REQUIRED'
                }, {
                    propName: 'password',
                    errorMsg: 'ERROR_MIN'
                }]
            };

            assert.ok(user.id, 'generate id');
            assert.equal(user.userName, expectedUser.userName, 'set userName');
            assert.equal(user.password, expectedUser.password, 'set password');
            assert.equal(user.email, expectedUser.email, 'set email');
            assert.equal(user.weight, expectedUser.weight, 'set weight');
            assert.equal(user.birthday.toString(), expectedUser.birthday.toString(), 'set birthday');
            assert.deepEqual(user.errors, expectedUser.errors, 'add errors');
        });
    });

```

### Create your own custom validation function

Create a curried function using **ramda**.
This function must receive:
- **errorMsg**: optional, it is good for enabling custom error messages;
- **propName**: will be the property name of the object you are validating;
- **obj**: the instance of the object to be validated.

```js
    import R from 'ramda';
    import * as V from 'ptz-validations';

    /**
    * Checks if an object prop is even:
    *   - true: return the same object
    *   - false: return a new object with errorMsg
    */
    export const isEvenWithError = R.curry((errorMsg, propName, obj) => {

        const propValue = R.prop(propName, obj);

        return R.isEven(propValue)
            ? obj
            : V.addError(obj, propName, errorMsg);
    });

    export const isEven = isEvenWithError('DEFAULT_EVEN_ERROR_MSG');
```

## Contribute

### NPM Global packages
```bash
    npm install -g ts-node babel-cli
```

### Setup
```bash
    npm install   
```

### Test
```bash
    npm test
```
