export const member = {
  "id": 22,
  "name": "Emily, James Franco",
  "email": "Eveline1@yahoo.com",
  "role": "MEMBER",
  "dni": "35158803",
  "address": "849 Elena Square",
  "phoneNumber": "319.883.6132",
  "enabled": true,
  "lastPayment": "2023-04-17T18:51:50.660Z",
  "imageUrl": "https://picsum.photos/300",
  "vouchers": [
    {
      "id": 24,
      "code": "dmpy1gnmq519wz11z3tm",
      "enabled": true,
      "expirationDate": "2023-08-09T05:14:16.219Z",
      "item": {
        "id": 16,
        "name": "Hamburguesa de Pollo",
        "category": "comida",
        "price": 0,
        "discount": 20,
        "imageUrl": "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg",
      },
      "company": {
        "id": 1,
        "name": "McDonalds"
      }
    },
  ],
  "shoppings": [
    {
      "id": 8,
      "pdfUrl": "http://mabelle.com",
      "wayToPay": "CARD",
      "state": "SUCCESS",
      "items": [
        {
          "id": 85,
          "name": "masajes",
          "category": "cosmetica",
          "price": 15.00,
          "discount": 35,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNu_u5-YI28DpmZ5ZRq7vGQzKfaWMfDbuig&usqp=CAU",
          "company": {
            "id": 2,
            "name": "McDonalds"
          }
        },
        {
          "id": 56,
          "name": "Depilacion con cera",
          "category": "cosmetica",
          "price": 11.99,
          "discount": 20,
          "imageUrl": "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg",
          "company": {
            "id": 11,
            "name": "L Bel"
          }
        }
      ]
    },
    {
      "id": 16,
      "pdfUrl": "http://molly.name",
      "wayToPay": "CASH",
      "state": "SUCCESS",
      "items": [
        {
          "id": 56,
          "name": "Depilacion con cera",
          "category": "cosmetica",
          "price": 11.99,
          "discount": 20,
          "imageUrl": "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg",
          "company": {
            "id": 11,
            "name": "L Bel"
          }
        }
      ]
    },
  ]
}





export const company = {
  "id": 1,
  "name": "McDonalds",
  "email": "mcdonalds@gmail.com",
  "role": "COMPANY",
  "cuit": "33134366027",
  "enabled": true,
  "address": "41622 Ratke Glens",
  "phoneNumber": "873-382-9467",
  "description": "Cadena de restaurantes de comida rápida, conocida por sus hamburguesas y papas fritas.",
  "imageUrl": "https://guiatodoberazategui.com.ar/wp-content/uploads/2020/03/Logo-de-McDonald%C2%B4s-1-1-1.png",
  "items": [
    {
      "id": 16,
      "name": "Hamburguesa de Pollo",
      "category": "comida",
      "price": 0,
      "discount": 20,
      "enabled": true,
      "imageUrl": "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg",
    },
    {
      "id": 85,
      "name": "masajes",
      "category": "cosmetica",
      "price": 15.00,
      "discount": 35,
      "enabled": true,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNu_u5-YI28DpmZ5ZRq7vGQzKfaWMfDbuig&usqp=CAU",
    },
    {
      "id": 71,
      "name": "Masaje antiesters 45 min",
      "category": "cosmetica",
      "price": 8.99,
      "discount": 45,
      "enabled": true,
      "imageUrl": "https://www.materialestetica.com/blog/wp-content/uploads/2019/03/cremas-para-masajes-y-sus-caracteristicas.jpg",
    }
  ],
  "sales": [
    {
      "id": 8,
      "pdfUrl": "http://mabelle.com",
      "wayToPay": "CARD",
      "state": "SUCCESS",
      "user": {
        "id": 22,
        "name": "Emily"
      },
      "items": [
        {
          "id": 85,
          "name": "masajes",
          "category": "cosmetica",
          "price": 15.00,
          "discount": 35,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNu_u5-YI28DpmZ5ZRq7vGQzKfaWMfDbuig&usqp=CAU",
        }
      ]
    }
  ],
  "vouchers": [
    {
      "id": 24,
      "code": "dmpy1gnmq519wz11z3tm",
      "enabled": true,
      "expirationDate": "2023-08-09T05:14:16.219Z",
      "user": {
        "id": 22,
        "name": "Emily"
      },
      "item":
      {
        "id": 16,
        "name": "Hamburguesa de Pollo",
        "category": "cosmetica",
        "price": 0,
        "discount": 20,
        "imageUrl": "https://www.vivepalmira.com/wp-content/uploads/2019/03/post_id_8015_91551_700x362.jpg",
      }
    }
  ]
}



export const admin = {
  "id": 25,
  "name": "Brendan Schultz",
  "email": "Brendan_Schultz@yahoo.com",
  "role": "ADMIN",
  "phoneNumber": "(289) 589-7932 x3591",
  "enabled": false,
  "imageUrl": "https://picsum.photos/300"
}