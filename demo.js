var foodArr = [
    {
      ten: "Yellowstripe scad",
      loai: false,
      gia: "504.00",
      khuyenMai: 63571,
      tinhTrang: false,
      moTa: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "98",
    },
    {
      ten: "Filipino Venus",
      loai: false,
      gia: "857.00",
      khuyenMai: 22937,
      tinhTrang: true,
      moTa: "The Football Is Good For Training And Recreational Purposes",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "101",
    },
    {
      ten: "Asian swamp eel",
      loai: true,
      gia: "289.00",
      khuyenMai: 11299,
      tinhTrang: true,
      moTa: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "103",
    },
    {
      ten: "Japanese common catfish",
      loai: true,
      gia: "964.00",
      khuyenMai: 97396,
      tinhTrang: true,
      moTa: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "104",
    },
    {
      ten: "Chilean jack mackerel",
      loai: true,
      gia: "262.00",
      khuyenMai: 59953,
      tinhTrang: false,
      moTa: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "105",
    },
    {
      ten: "Chub mackerel",
      loai: true,
      gia: "226.00",
      khuyenMai: 15105,
      tinhTrang: true,
      moTa: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "106",
    },
    {
      ten: "Atlantic cod",
      loai: false,
      gia: "81.00",
      khuyenMai: 81871,
      tinhTrang: false,
      moTa: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "107",
    },
    {
      ten: "Asari",
      loai: true,
      gia: "777.00",
      khuyenMai: 32946,
      tinhTrang: false,
      moTa: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "108",
    },
    {
      ten: "Atlantic mackerel",
      loai: true,
      gia: "160.00",
      khuyenMai: 56477,
      tinhTrang: false,
      moTa: "The Football Is Good For Training And Recreational Purposes",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "109",
    },
    {
      ten: "European anchovy",
      loai: false,
      gia: "42.00",
      khuyenMai: 46840,
      tinhTrang: false,
      moTa: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      hinhAnh: "https://loremflickr.com/640/480/food",
      ma: "110",
    },
  ];
  
  // số lượng món ăn đang có
  
  console.log(foodArr.length);
  
  // in ra tất cả tên món ăn đang có
  
  for (var i = 0; i < foodArr.length; i++) {
    var food = foodArr[i];
    console.log(food.ten);
  }
  // tinhTrang false => hết món
  // đếm số lượng món ăn đang trong tình trạng còn
  
  var result = foodArr.filter(function (item) {
    return item.tinhTrang != false;
  });
  console.log("😀 - result - result", result);
  