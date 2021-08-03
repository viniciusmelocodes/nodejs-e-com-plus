var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.e-com.plus/v1/products.json',
  'headers': {
    'X-Store-ID': '1182',
    'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZjljMjQ3MmIyMTYxNzA5ZmE0NmE0OTIiLCJjb2QiOjM2MjUxNTU2LCJraWQiOm51bGwsImV4cCI6MTYyMTAwMzIwMTA1NH0.YH7IdlheaOxTIErnqDTE0CTTUdSup0rU3JHdWMCi4VU/2',
    'X-My-ID': '5f9c2472b2161709fa46a492',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "sku": "teste-produto-postman",
    "name": "teste produto postman",
    "slug": "teste-produto-postman",
    "short_description": "Red, 100% cotton, large men’s t-shirt",
    "body_html": "<p>Red, 100% cotton, large men’s t-shirt.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
    "body_text": "Red, 100% cotton, large men’s t-shirt.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "meta_title": "Mens Pique Polo Shirt - My Shirt Shop",
    "meta_description": "Mens Pique Polo Shirt, Red, 100% cotton, large men’s t-shirt",
    "keywords": [
      "tshirt",
      "t-shirt",
      "man"
    ],
    "price": 42.9,
    "price_effective_date": {
      "end": "2018-12-01T10:00:00.612Z"
    },
    "base_price": 60,
    "quantity": 100,
    "dimensions": {
      "width": {
        "value": 10
      },
      "height": {
        "value": 8
      },
      "length": {
        "value": 8
      }
    },
    "weight": {
      "value": 400
    },
    "brands": [
      {
        "_id": "a10000000000000000000001",
        "name": "Shirts Example",
        "slug": "shirts-example",
        "logo": {
          "url": "https://mycdn.com/shirts-example.jpg",
          "size": "100x50"
        }
      }
    ],
    "categories": [
      {
        "_id": "f10000000000000000000001",
        "name": "Polo Shirts",
        "slug": "polo"
      }
    ],
    "specifications": {
      "age_group": [
        {
          "text": "Adult",
          "value": "adult"
        }
      ],
      "gender": [
        {
          "text": "Male",
          "value": "male"
        }
      ],
      "size": [
        {
          "text": "Large",
          "value": "large"
        }
      ],
      "size_type": [
        {
          "text": "Regular",
          "value": "regular"
        }
      ],
      "size_system": [
        {
          "text": "BR",
          "value": "BR"
        }
      ],
      "material": [
        {
          "text": "Cotton",
          "value": "cotton"
        }
      ],
      "colors": [
        {
          "text": "Pique",
          "value": "#ff5b00"
        }
      ]
    },
    "gtin": [
      "12345678901234"
    ],
    "mpn": [
      "T1230"
    ]
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
