
module.exports = {
  'schema': {
    'title': 'Customer settings',
    'type': 'object',
    'required': ['customerId'],
    'properties': {
      'customerId': {
        'type': 'number',
        'title': 'customerId'
      },
      'gender': {
        'type': 'string',
        'title': 'Gender',
        'enum': ['m', 'w'],
        'default': 'm'
      },
      'company': {
        'type': 'string',
        'title': 'Company'
      },
      'firstname': {
        'type': 'string',
        'title': 'First name'
      },
      'lastname': {
        'type': 'string',
        'title': 'Last name'
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
      'class': {
        type: 'string',
        'title': 'class',
        'default': 'null'
      },
      'b2bStatus': {
        'type': 'boolean',
        'title': 'b2bStatus'
      }
    }
  },
  'uiSchema': {
    'customerId': 1,
    'gender': 'm',
    'company': 'Test Company',
    'firstname': 'John',
    'lastname': 'Doe',
    'street': 'Test Street',
    'houseNumber': '123',
    'additionalAddressInfo': '1. Etage',
    'suburb': 'Test Suburb',
    'postcode': '23983',
    'city': 'Test City',
    'countryId': 81,
    'zoneId': 84,
    'class': null,
    'b2bStatus': false
  },
  'formData': {
    'firstname': 'Chuck'
  }
}
