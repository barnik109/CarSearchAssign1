const carsData=[
  {
    "num_models": 3,
    "img_url": "https://www.usatoday.com/gcdn/-mm-/778e51ad4a10cf42ca718cf532d511b1923d9113/c=139-290-2719-1748/local/-/media/2018/05/23/USATODAY/USATODAY/636626803395298976-AP18141482196226.jpg",
    "max_car_id": 104,
    "id": 1,
    "name": "Chrysler",
    "avg_horsepower": 291.3333333333333,
    "avg_price": 329,
    "year":2023
  },
  {
    "num_models": 8,
    "img_url": "https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg",
    "max_car_id": 152,
    "id": 2,
    "name": "Honda",
    "avg_horsepower": 190.625,
    "avg_price": 279,
    "year": 2022
  },
  {
    "num_models": 18,
    "img_url": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/148959/mercedes-benz-a-class-limousine-left-front-three-quarter0.jpeg?isig=0",
    "max_car_id": 270,
    "id": 3,
    "name": "Mercedes-benz",
    "avg_horsepower": 333.94444444444446,
    "avg_price": 806,
    "year": 2021
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/ExtraImages/20210624071148_Hennessey_Mammoth_1000_trx_front.jpg",
    "max_car_id": 307,
    "id": 4,
    "name": "Ram",
    "avg_horsepower": 299.8333333333333,
    "avg_price": 314,
    "year": 2022
  },
  {
    "num_models": 19,
    "img_url": "https://imgd.aeplcdn.com/0x0/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149472.jpeg?q=80",
    "max_car_id": 125,
    "id": 5,
    "name": "Ford",
    "avg_horsepower": 281.2631578947368,
    "avg_price": 349,
    "year": 2022
  },
  {
    "num_models": 9,
    "img_url": "https://autohexa.com/wp-content/uploads/2023/04/GMC-Yukon-.jpg",
    "max_car_id": 146,
    "id": 6,
    "name": "Gmc",
    "avg_horsepower": 292.3333333333333,
    "avg_price": 406,
    "year": 2022
  },
  {
    "num_models": 22,
    "img_url": "https://imgd.aeplcdn.com/0x0/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg?q=80",
    "max_car_id": 21,
    "id": 7,
    "name": "Audi",
    "avg_horsepower": 340.59090909090907,
    "avg_price": 666,
    "year": 2023
  },
  {
    "num_models": 7,
    "img_url": "https://media.ed.edmunds-media.com/subaru/forester/2023/oem/2023_subaru_forester_4dr-suv_sport_fq_oem_1_1600.jpg",
    "max_car_id": 330,
    "id": 8,
    "name": "Subaru",
    "avg_horsepower": 192.14285714285714,
    "avg_price": 271,
    "year": 2022
  },
  {
    "num_models": 6,
    "img_url": "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/spectre-ii/page-properties/Tiles-Single-Spectre-InMotion2.jpg/jcr:content/renditions/cq5dam.web.1920.webp",
    "max_car_id": 315,
    "id": 9,
    "name": "Rolls-royce",
    "avg_horsepower": 518.1666666666666,
    "avg_price": 394,
    "year": 2022
  },
  {
    "num_models": 8,
    "img_url": "https://imgd.aeplcdn.com/600x600/n/cw/ec/49832/porsche-panamera-left-front-three-quarter0.jpeg",
    "max_car_id": 301,
    "id": 10,
    "name": "Porsche",
    "avg_horsepower": 475.25,
    "avg_price": 203,
    "year": 2023
  },
  {
    "num_models": 31,
    "img_url": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg",
    "max_car_id": 64,
    "id": 11,
    "name": "Bmw",
    "avg_horsepower": 379.2258064516129,
    "avg_price": 745,
    "year": 2021
  },
  {
    "num_models": 7,
    "img_url": "https://media.zigcdn.com/media/content/2022/Sep/366468953-294665_xc90_recharge_t8_awd_denim_blue.jpg",
    "max_car_id": 371,
    "id": 12,
    "name": "Volvo",
    "avg_horsepower": 285.2857142857143,
    "avg_price": 459,
     "year": 2022
  },
  {
    "num_models": 5,
    "img_url": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iY51pCZg90Mg/v1/1200x800.jpg",
    "max_car_id": 236,
    "id": 13,
    "name": "Lincoln",
    "avg_horsepower": 324.6,
    "avg_price": 458,
     "year": 2022
  },
  {
    "num_models": 4,
    "img_url": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maserati/Ghibli/8338/1612512313468/front-left-side-47.jpg",
    "max_car_id": 245,
    "id": 14,
    "name": "Maserati",
    "avg_horsepower": 444,
    "avg_price": 139,
    "year": 2023
  },
  {
    "num_models": 4,
    "img_url": "https://hips.hearstapps.com/hmg-prod/images/2024-acura-tlx-type-s-101-64b97d65a3166.jpg?crop=0.598xw:0.449xh;0.204xw,0.276xh&resize=1200:*",
    "max_car_id": 3,
    "id": 15,
    "name": "Acura",
    "avg_horsepower": 286.75,
    "avg_price": 457
  },
  {
    "num_models": 2,
    "img_url": "https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1980&hei=1114",
    "max_car_id": 254,
    "id": 16,
    "name": "Mclaren",
    "avg_horsepower": 641,
    "avg_price": 272,
    "year": 2022
  },
  {
    "num_models": 8,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20170410081035_mono.jpg&w=700&q=90&c=1",
    "max_car_id": 177,
    "id": 17,
    "name": "Infiniti",
    "avg_horsepower": 311.375,
    "avg_price": 456,
    "year": 2023
  },
  {
    "num_models": 3,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210505124132_fiat_363_suv_front.jpg",
    "max_car_id": 115,
    "id": 18,
    "name": "Fiat",
    "avg_horsepower": 158.33333333333334,
    "avg_price": 245,
    "year": 2021
  },
  {
    "num_models": 6,
    "img_url": "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2012/12/29/scion-fr-s12-16_9.jpg?width=2436&height=1375&fit=crop&format=pjpg&auto=webp",
    "max_car_id": 319,
    "id": 19,
    "name": "Scion",
    "avg_horsepower": 145.66666666666666,
    "avg_price": 202,
    "year": 2023
  },
  {
    "num_models": 7,
    "img_url": "https://media.zigcdn.com/media/content/2022/Aug/416057449-cn022_001dgmj9se71rgdnrearjn7ugp4sbhb.jpg",
    "max_car_id": 112,
    "id": 20,
    "name": "Dodge",
    "avg_horsepower": 352.14285714285717,
    "avg_price": 424,
    "year": 2021
  },
  {
    "num_models": 3,
    "img_url": "https://www.autobest.co.in/uploads/car/bentley-continental-gt-w12-coupe-314193602260.jpeg",
    "max_car_id": 67,
    "id": 21,
    "name": "Bentley",
    "avg_horsepower": 540.3333333333334,
    "avg_price": 235800,
    "year": 2022
  },
  {
    "num_models": 5,
    "img_url": "https://s3-prod-europe.autonews.com/s3fs-public/styles/1200x630/public/Aston%20Martin%20Valhalla_2%20web.jpg",
    "max_car_id": 11,
    "id": 22,
    "name": "Aston-martin",
    "avg_horsepower": 531,
    "avg_price": 199,
    "year": 2022
  },
  {
    "num_models": 19,
    "img_url": "https://images.thequint.com/thequint%2F2016-02%2F15ee3c7d-b1d0-4354-a635-30d0f51d828f%2FCruze-hero.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200",
    "max_car_id": 100,
    "id": 23,
    "name": "Chevrolet",
    "avg_horsepower": 250.8421052631579,
    "avg_price": 335,
    "year": 2022
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "max_car_id": 206,
    "id": 24,
    "name": "Land-rover",
    "avg_horsepower": 304,
    "avg_price": 607,
    "year": 2022
  },
  {
    "num_models": 7,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 274,
    "id": 25,
    "name": "Mitsubishi",
    "avg_horsepower": 152.14285714285714,
    "avg_price": 236
  },
  {
    "num_models": 12,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 363,
    "id": 26,
    "name": "Volkswagen",
    "avg_horsepower": 203.08333333333334,
    "avg_price": 299
  },
  {
    "num_models": 21,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 339,
    "id": 27,
    "name": "Toyota",
    "avg_horsepower": 209.23809523809524,
    "avg_price": 367
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 187,
    "id": 28,
    "name": "Jeep",
    "avg_horsepower": 239.83333333333334,
    "avg_price": 334
  },
  {
    "num_models": 14,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 160,
    "id": 29,
    "name": "Hyundai",
    "avg_horsepower": 246.5,
    "avg_price": 326
  },
  {
    "num_models": 13,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 76,
    "id": 30,
    "name": "Cadillac",
    "avg_horsepower": 372.15384615384613,
    "avg_price": 618
  },
  {
    "num_models": 2,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 199,
    "id": 31,
    "name": "Lamborghini",
    "avg_horsepower": 665,
    "avg_price": 393
  },
  {
    "num_models": 25,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 222,
    "id": 32,
    "name": "Lexus",
    "avg_horsepower": 290.32,
    "avg_price": 524
  },
  {
    "num_models": 2,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 6,
    "id": 33,
    "name": "Alfa-romeo",
    "avg_horsepower": 237,
    "avg_price": 599
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 242,
    "id": 34,
    "name": "Mini",
    "avg_horsepower": 154.33333333333334,
    "avg_price": 271
  },
  {
    "num_models": 9,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 191,
    "id": 35,
    "name": "Kia",
    "avg_horsepower": 216.11111111111111,
    "avg_price": 287
  },
  {
    "num_models": 4,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 118,
    "id": 36,
    "name": "Ferrari",
    "avg_horsepower": 633,
    "avg_price": 276
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 251,
    "id": 37,
    "name": "Mazda",
    "avg_horsepower": 163.5,
    "avg_price": 222
  },
  {
    "num_models": 19,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 283,
    "id": 38,
    "name": "Nissan",
    "avg_horsepower": 251.21052631578948,
    "avg_price": 363
  },
  {
    "num_models": 3,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 68,
    "id": 39,
    "name": "Buick",
    "avg_horsepower": 236.33333333333334,
    "avg_price": 310
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 40,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 41,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 42,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 43,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 44,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 45,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 46,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 47,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 48,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 49,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 50,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 51,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 52,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 53,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 54,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 55,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 56,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 57,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 58,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  {
    "num_models": 6,
    "img_url": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    "year": 2022,
    "max_car_id": 183,
    "id": 59,
    "name": "Jaguar",
    "avg_horsepower": 327.5,
    "avg_price": 637
  },
  

  

]

export default carsData;