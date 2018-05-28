
module.exports = {
  'schema': {
    'definitions': {
      'address': {
        'type': 'object',
        'title': 'Address',
        'properties': {
          'customerId': { 'type': 'number', 'title': 'customerId' },
          'gender': { 'type': 'string',
            'title': 'Gender',
            default: 'm',
            'enum': ['m', 'f'],
            'enumNames': [ 'Herr', 'Frau' ]
          },
          'company': { 'type': 'string', 'title': 'Company' },
          'firstname': { 'type': 'string', 'title': 'First name' },
          'lastname': { 'type': 'string', 'title': 'Last name' },

          'street': { 'type': 'string', 'title': 'Street' },
          'houseNumber': { 'type': 'string', 'title': 'houseNumber' },
          'additionalAddressInfo': { 'type': 'string', 'title': 'additionalAddressInfo' },
          'suburb': { 'type': 'string', 'title': 'Suburb' },
          'postcode': { 'type': 'string', 'title': 'postcode' },
          'city': { 'type': 'string', 'title': 'City' },
          'countryId': { 'type': 'number', 'title': 'countryId' },
          'zoneId': { 'type': 'number', 'title': 'zoneId' },
          'class': { type: 'string', 'title': 'class', 'default': 'null' },
          'b2bStatus': { 'type': 'boolean', 'title': 'b2bStatus' }
        }
      }
    }
  }
}
