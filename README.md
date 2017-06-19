# ptz-validations

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


## Use

### Install
```bash
    npm install --save ptz-validations
```

### How to use
Example test of how to create a function to validate user:
```typescript
    import * as assert from 'ptz-assert';
    import * as V from './index';

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
                id: V.generateId,
                displayName: V.validateString({
                    required: true,
                    minLength: 2,
                    maxLength: 100
                }),
                userName: V.validateString({
                    required: true,
                    minLength: 2,
                    maxLength: 40,
                    toLowerCase: true
                }),
                password: V.validateString({
                    required: true,
                    minLength: 6,
                    maxLength: 40
                }),
                email: V.validateEmail({
                    required: true
                }),
                weight: V.validateNumber({
                    min: 1,
                    max: 1000
                }),
                birthday: V.validateDate({
                    min: new Date('1800-01-01'),
                    max: new Date()
                })
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
                birthday: '1992-06-28',
                errors: [{
                    propName: 'displayName',
                    errorMsg: 'ERROR_REQUIRED'
                }, {
                    propName: 'password',
                    errorMsg: 'ERROR_MIN_LENGTH'
                }]
            };

            assert.ok(user.id, 'generate id');
            assert.equal(user.userName, expectedUser.userName, 'set userName');
            assert.equal(user.password, expectedUser.password, 'set password');
            assert.equal(user.email, expectedUser.email, 'set email');
            assert.equal(user.weight, expectedUser.weight, 'set weight');
            assert.equal(user.birthday, expectedUser.birthday, 'set birthday');
            assert.deepEqual(user.errors, expectedUser.errors, 'add errors');
        });
    });

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
