module.exports = {
  'schema': {
    'title': 'A registration form',
    'description': 'A simple form example.',
    'type': 'object',
    'required': [
      'firstName',
      'lastName'
    ],
    'properties': {
      'firstName': {
        'type': 'string',
        'title': 'First name'
      },
      'lastName': {
        'type': 'string',
        'title': 'Last name'
      },
      'age': {
        'type': 'integer',
        'title': 'Age'
      },
      'bio': {
        'type': 'string',
        'title': 'Bio'
      },
      'password': {
        'type': 'string',
        'title': 'Password',
        'minLength': '3'
      },
      'telephone': {
        'type': 'string',
        'title': 'Telephone',
        'minLength': '10'
      }
    }
  },
  'formData': {
    'firstName': 'Chuck',
    'lastName': 'Norris',
    'age': 75,
    'bio': 'Roundhouse kicking asses since 1940',
    'password': 'noneed'
  },

  'uiSchema': {
    'ui:order': [
      'firstName',
      'lastName',
      '*',
      'password'
    ],
    'age': {
      'ui:widget': 'updown'
    },
    'bio': {
      'ui:widget': 'textarea'
    },
    'password': {
      'ui:widget': 'password'
    }
  }

}
