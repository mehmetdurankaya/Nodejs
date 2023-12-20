function circleArea(radius) {
  Area = 3.14 * radius * radius;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${Area}`);
}

function circleCircumference(radius){
  //Dairenin Çevresi = 2 x π x r
  Circumference=2*3.14*radius;
  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${Circumference}`);
}

module.exports={circleArea,circleCircumference}


