// http://azimi.me/json-schema-view/demo/demo.html
// https://cswr.github.io/JsonSchema/spec/multiple_types/#how-restrictions-work-under-multiple-types
// https://spacetelescope.github.io/understanding-json-schema/reference/regular_expressions.html?highlight=options
// http://json-schema.org/example2.html

module.exports = {
  'schema': {
    'title': 'Customer settings',
    'type': 'object',
    'required': ['firstname', 'lastname', 'telephone', 'password', 'email'],
    'properties': {
      'gender': {
        'type': 'string',
        'title': 'Gender',
        'default': 'm',
        'enum': ['m', 'f'],
        'enumNames': ['Herr', 'Frau'],
      },
      'firstname': {
        'type': 'string',
        'title': 'First name'
      },
      'lastname': {
        'type': 'string',
        'title': 'Last name'
      },
      'dateOfBirth': {
        'type': 'string',
        'title': 'Birthdate',
        'format': 'date'
      },
      'vatNumber': {
        'type': 'string',
        'title': 'vatNumber'
      },
      'telephone': {
        'type': 'string',
        'title': 'Telephone',
        'minLength': 10
      },
      'fax': {
        'type': 'string',
        'title': 'Fax',
        'minLength': 10
      },
      'email': {
        'type': 'string',
        'title': 'email',
        'format': 'email'
      },
      'password': {
        'type': 'string',
        'title': 'Password',
        'minLength': 6
      },
      'isGuest': {
        'type': 'boolean',
        'title': 'isGuest'
      },

      'address': {
        'type': 'object',
        'title': 'Address',
        'required': ['company', 'street', 'houseNumber', 'suburb', 'postcode', 'city', 'countryId', 'zoneId', 'b2bStatus'],
        'properties': {
          'company': {
            'type': 'string',
            'title': 'Company'
          },
          'street': {
            'type': 'string',
            'title': 'Street'
          },
          'houseNumber': {
            'type': 'string',
            'title': 'houseNumber'
          },
          'additionalAddressInfo': {
            'type': 'string',
            'title': 'additionalAddressInfo'
          },
          'suburb': {
            'type': 'string',
            'title': 'Suburb'
          },
          'postcode': {
            'type': 'string',
            'title': 'postcode'
          },
          'city': {
            'type': 'string',
            'title': 'City'
          },
          'countryId': {
            'type': 'number',
            'title': 'countryId'
          },
          'zoneId': {
            'type': 'number',
            'title': 'zoneId'
          },
          'b2bStatus': {
            'type': 'boolean',
            'title': 'b2bStatus'
          }
        }
      },
      'addonValues': {
        'type': 'object',
        'properties': {
          'test_key': {
            'type': 'string'
          }
        }
      }
    }
  },

  'uiSchema': {
    'gender': {
      'ui:title': 'Anrede'
    },
    'firstname': {
      'ui:title': 'Vorname'
    }
  },

  'formData': {
    'gender': 'm',
    'firstname': 'John',
    'lastname': 'Doe',
    'dateOfBirth': '1985-02-13',
    'vatNumber': '0923429837942',
    'telephone': '2343948798345',
    'fax': '2093049283',
    'email': 'customer@email.de',
    'password': '0123456789',
    'isGuest': false,
    'address': {
      'company': 'Test Company',
      'street': 'Test Street',
      'houseNumber': '123',
      'additionalAddressInfo': '1. Etage',
      'suburb': 'Test Suburb',
      'postcode': '23983',
      'city': 'Test City',
      'countryId': 81,
      'zoneId': 84,
      'b2bStatus': true
    },
    'addonValues': {
      'test_key': 'test_value'
    }
  }
}
