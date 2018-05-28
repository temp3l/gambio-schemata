// 'a': { 'type': ', 'title': ', 'default': ', 'description': ' },
// 'a': {'type': 'object', 'title': ', 'description': ',
// 'properties': {
// 'en': {'type': 'string', 'title': 'english', 'default': '},
// 'de': {'type': 'string', 'title': 'german', 'default': '},
// }
// },
module.exports = {
  'schema': {
    'title': 'Product settings',
    'type': 'object',
    'required': [],
    'properties': {
      'isActive': {
        'type': 'boolean',
        'title': 'isActive',
        'description': 'Whether the product is active.'
      },
      'sortOrder': {
        'type': 'number',
        'title': 'sortOrder',
        'description': 'The sort order of the product.'
      },
      'orderedCount': {
        'type': 'number',
        'title': 'orderedCount',
        'description': 'How many times the product was ordered.'
      },
      'productModel': {
        'type': 'string',
        'title': 'products model',
        'description': 'Product\'s Model.'
      },
      'ean': {
        'type': 'string',
        'title': 'european article number',
        'description': 'European Article Number.'
      },
      'price': {
        'type': 'number',
        'title': 'Price',
        'description': "Product's Price as float value."
      },
      'discountAllowed': {
        'type': 'number',
        'title': 'discountAllowed',
        'description': 'Percentage of the allowed discount as float value.'
      },
      'taxClassId': {
        'type': 'number',
        'title': 'Tax class ID.',
        'description': 'The tax class ID.'
      },
      'quantity': {
        'type': 'number',
        'title': 'Quantity',
        'description': 'Quantity in stock as float value.'
      },
      'weight': {
        'type': 'number',
        'title': 'weight',
        'description': 'The weight of the product as float value.'
      },
      'shippingCosts': {
        'type': 'number',
        'title': 'shippingCosts',
        'description': 'Additional shipping costs as float value.'
      },
      'shippingTimeId': {
        'type': 'number',
        'title': 'shippingTimeId',
        'description': 'Must match a record from the shipping time entries.'
      },
      'productTypeId': {
        'type': 'number',
        'title': 'productTypeId',
        'description': 'Must match a record from the product type entries.'
      },
      'manufacturerId': {
        'type': 'number',
        'title': 'manufacturerId',
        'description': 'Must match the ID of the manufacturer record.'
      },
      'quantityUnitId': {
        'type': 'number',
        'title': 'Must match the ID of the quantity unit record.'
      },
      'isFsk18': {
        'type': 'boolean',
        'title': 'isFsk18',
        'description': 'Whether the product is FSK18.'
      },
      'isVpeActive': {
        'type': 'boolean',
        'title': 'isVpeActive',
        'description': 'Whether VPE is active.'
      },

      'vpeID': {
        'type': 'number',
        'title': 'vpeID',
        'description': 'The VPE ID of the product.'
      },
      'vpeValue': {
        'type': 'number',
        'title': 'vpeValue',
        'description': 'The VPE value of the product as float value.'
      },

      'name': {
        'type': 'object',
        'title': 'Name',
        'description': "Language specific object with the product's name.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english name'
          },
          'de': {
            'type': 'string',
            'title': 'german name'
          }
        }
      },
      'description': {
        'type': 'object',
        'title': 'description',
        'description': "Language specific object with the product's description.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english description'
          },
          'de': {
            'type': 'string',
            'title': 'german description'
          }
        }
      },
      'shortDescription': {
        'type': 'object',
        'title': 'shortDescription',
        'description': "Language specific object with the product's short description.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'short description',
            'description': 'a short description'
          },
          'de': {
            'type': 'string',
            'title': 'short description',
            'description': 'Kurzbeschreibung'
          }
        }
      },
      'keywords': {
        'type': 'object',
        'title': 'keywords',
        'description': "Language specific object with the product's keywords.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english keywords'
          },
          'de': {
            'type': 'string',
            'title': 'deutsche schlüsselworte'
          }
        }
      },
      'metaTitle': {
        'type': 'object',
        'title': 'metaTitle',
        'description': "Language specific object with the product's meta title.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'metaDescription': {
        'type': 'object',
        'title': 'metaDescription',
        'description': "Language specific object with the product's meta title.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'metaKeywords': {
        'type': 'object',
        'title': 'metaKeywords',
        'description': "Language specific object with the product's meta keywords.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'infoUrl': {
        'type': 'object',
        'title': 'infoUrl',
        'description': "Language specific object with the product's info url (e.g. manufacturer homepage).",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'urlKeywords': {
        'type': 'object',
        'title': 'urlKeywords',
        'description': "Language specific object with the product's url keywords.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'checkoutInformation': {
        'type': 'object',
        'title': 'checkoutInformation',
        'description': "Language specific object with the product's checkout information.",
        'properties': {
          'en': {
            'type': 'string',
            'title': 'english'
          },
          'de': {
            'type': 'string',
            'title': 'german'
          }
        }
      },
      'viewedCount': {
        'type': 'object',
        'title': 'viewedCount',
        'description': "Language specific object with the product's viewed count.",
        'properties': {
          'en': {
            'type': 'number',
            'title': 'english'
          },
          'de': {
            'type': 'number',
            'title': 'german'
          }
        }
      },

      'images': {
        'type': 'array',
        'title': 'images',
        'description': 'Contains the product images information.',
        'items': {
          'type': 'object',
          'properties': {
            'filename': {
              'type': 'string',
              'title': 'filename',
              'description': 'The product image file name (provide only the file name and not the whole path).'
            },
            'isPrimary': {
              'type': 'boolean',
              'title': 'isPrimary',
              'description': 'Whether the image is the primary one'
            },
            'isVisible': {
              'type': 'boolean',
              'title': 'isVisible',
              'description': 'Whether the image will be visible.'
            },
            'imageAltText': {
              'type': 'object',
              'title': 'imageAltText',
              'description': 'Language specific object with the image alternative text.',
              'properties': {
                'en': {
                  'type': 'string',
                  'title': 'english'
                },
                'de': {
                  'type': 'string',
                  'title': 'german'
                }
              }
            }
          }
        }
      },
      'settings': {
        'type': 'object',
        'title': 'settings',
        'description': 'Contains various product settings.',
        'properties': {
          'detailsTemplate': {
            'type': 'string',
            'title': 'detailsTemplate',
            'default': 'standard.html',
            'description': 'Filename of the details HTML template.',
            'enum': ['standard.html']
          },
          'optionsDetailsTemplate': {
            'type': 'string',
            'title': 'optionsDetailsTemplate',
            'default': 'product_options_dropdown.html',
            'description': 'Filename of the options details HTML template.',
            'enum': ['product_options_dropdown.html']
          },
          'optionsListingTemplate': {
            'type': 'string',
            'title': 'optionsListingTemplate',
            'default': 'product_options_dropdown.html',
            'description': 'Filename of the options listing HTML template.',
            'enum': ['product_options_dropdown.html']
          },
          'showOnStartpage': {
            'type': 'boolean',
            'title': 'showOnStartpage',
            'description': 'Whether to show the product on startpage.'
          },
          'showQuantityInfo': {
            'type': 'boolean',
            'title': 'showQuantityInfo',
            'description': 'Whether to show quantity information.'
          },
          'showWeight': {
            'type': 'boolean',
            'title': 'showWeight',
            'description': 'Whether to show the products weight.'
          },
          'showPriceOffer': {
            'type': 'boolean',
            'title': 'showPriceOffer',
            'description': 'Whether to show price offer.'
          },
          'showAddedDateTime': {
            'type': 'boolean',
            'title': 'showAddedDateTime',
            'description': 'Whether to show the creation date-time of the product.'
          },
          'priceStatus': {
            'type': 'integer',
            'title': 'priceStatus',
            'description': 'Must match a record from the price status entries.'
          },
          'minOrder': {
            'type': 'integer',
            'title': 'minOrder',
            'description': 'The minimum order of the product.'
          },
          'graduatedQuantity': {
            'type': 'integer',
            'title': 'graduatedQuantity',
            'description': "Product's graduated quantity."
          },
          'onSitemap': {
            'type': 'boolean',
            'title': 'onSitemap',
            'description': 'Whether to include the product in the sitemap.'
          },
          'sitemapPriority': {
            'type': 'string',
            'title': 'sitemapPriority',
            'description': 'The sitemap priority (provide a decimal value as a string).'
          },
          'sitemapChangeFrequency': {
            'type': 'string',
            'default': 'daily',
            'title': 'sitemapChangeFrequency',
            'description': 'Possible values can contain the always, hourly, daily, weekly, monthly, yearly, never.',
            'enum': [ 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never' ]
          },
          // todo: DropDown
          'propertiesDropdownMode': {
            'type': 'string',
            'title': 'propertiesDropdownMode',
            default: 'default',
            'description': 'Provide one of the following values:  >> Default - all values are always selectable, dropdown_mode_1 >> Any order, only possible values are selectable, dropdown_mode_2 >> Specified order, only possible values are selectable.',
            'enum': ['default', 'dropdown_mode_1', 'dropdown_mode_2']
          },
          // todo: DropDown
          'startpageSortOrder': {
            'type': 'integer',
            'title': 'startpageSortOrder',
            'description': 'The sort order in the startpage.'
          },
          'showPropertiesPrice': {
            'type': 'boolean',
            'title': 'showPropertiesPrice',
            'description': 'Whether to show properties price.'
          },
          'usePropertiesCombisQuantity': {
            'type': 'boolean',
            'title': 'usePropertiesCombisQuantity',
            'description': 'Whether to use properties combis quantitity.'
          },
          'usePropertiesCombisShippingTime': {
            'type': 'boolean',
            'title': 'usePropertiesCombisShippingTime',
            'description': 'Whether to use properties combis shipping time.'
          },
          'usePropertiesCombisWeight': {
            'type': 'boolean',
            'title': 'usePropertiesCombisWeight',
            'description': 'Whether to use properties combis weight.'
          }
        },
        'required': ['detailsTemplate', 'optionsDetailsTemplate', 'optionsListingTemplate', 'priceStatus', 'minOrder', 'graduatedQuantity', 'sitemapPriority', 'sitemapChangeFrequency', 'propertiesDropdownMode', 'startpageSortOrder', 'showPropertiesPrice']
      },
      'addonValues': {
        'type': 'object',
        'description': 'Contains some extra addon values.',
        'properties': {
          'productsImageWidth': {
            'type': 'string',
            'title': 'productsImageWidth',
            'description': 'The CSS product image width (might contain size metrics).'
          },
          'productsImageHeight': {
            'type': 'string',
            'title': 'productsImageHeight',
            'description': 'The CSS product image height (might contain size metrics).'
          }
        },
        'required': ['productsImageWidth', 'productsImageHeight']
      }
    }
  },
  'uiSchema': {},
  'formData': {
    'isActive': false,
    'sortOrder': 0,
    'orderedCount': 1,
    'productModel': 'ABC123',
    'ean': '',
    'price': 16.7983,
    'discountAllowed': 0,
    'taxClassId': 1,
    'quantity': 998,
    'weight': 0,
    'shippingCosts': 0,
    'shippingTimeId': 1,
    'productTypeId': 1,
    'manufacturerId': 0,
    'quantityUnitId': 0,
    'isFsk18': true,
    'isVpeActive': false,
    'vpeID': 0,
    'vpeValue': 0,
    'name': {
      'en': 'test article',
      'de': 'Testartikel'
    },
    'description': {
      'en': '[TAB:Page 1] Test Product Description (Page 1) [TAB: Page 2] Test Product Description (Page 2)',
      'de': '[TAB:Seite 1] Testartikel Beschreibung (Seite 1) [TAB:Seite 2] Testartikel Beschreibung (Seite 2)'
    },
    'shortDescription': {
      'en': '<p>Test product short description.</p>',
      'de': '<p>Testartikel Kurzbeschreibung</p>'
    },

    'keywords': {
      'en': '',
      'de': ''
    },
    'metaTitle': {
      'en': '',
      'de': ''
    },
    'metaDescription': {
      'en': '',
      'de': ''
    },
    'metaKeywords': {
      'en': '',
      'de': ''
    },
    'infoUrl': {
      'en': '',
      'de': ''
    },
    'urlKeywords': {
      'en': 'test-article',
      'de': 'Testartikel'
    },
    'checkoutInformation': {
      'en': '',
      'de': ''
    },

    'viewedCount': {
      'en': 0,
      'de': 32
    },
    'images': [{
      'filename': 'artikelbild_1_1.jpg',
      'isPrimary': false,
      'isVisible': true,
      'imageAltText': {
        'en': '',
        'de': ''
      }
    },
    {
      'filename': 'artikelbild_1_2.jpg',
      'isPrimary': false,
      'isVisible': true,
      'imageAltText': {
        'en': '',
        'de': ''
      }
    },
    {
      'filename': 'artikelbild_1_3.jpg',
      'isPrimary': false,
      'isVisible': true,
      'imageAltText': {
        'en': '',
        'de': ''
      }
    }
    ],
    'settings': {
      'detailsTemplate': 'standard.html',
      'optionsDetailsTemplate': 'product_options_dropdown.html',
      'optionsListingTemplate': 'product_options_dropdown.html',
      'showOnStartpage': false,
      'showQuantityInfo': true,
      'showWeight': false,
      'showPriceOffer': true,
      'showAddedDateTime': false,
      'priceStatus': 0,
      'minOrder': 1,
      'graduatedQuantity': 1,
      'onSitemap': true,
      'sitemapPriority': '0.5',
      'sitemapChangeFrequency': 'daily',
      'propertiesDropdownMode': 'dropdown_mode_1',
      'startpageSortOrder': 0,
      'showPropertiesPrice': true,
      'usePropertiesCombisQuantity': false,
      'usePropertiesCombisShippingTime': true,
      'usePropertiesCombisWeight': false
    },
    'addonValues': {
      'productsImageWidth': '0',
      'productsImageHeight': '0'
    }
  }
}
