function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split('').some(specialChar => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}

(function () {
  const ex1 = document.getElementById('ex1_button')
  const ex1c = document.getElementById('ex1_content')

  const ex2 = document.getElementById('ex2_text')
  const ex2c = document.getElementById('ex2_content')
  
  ex1.addEventListener("click", function () {
    var data = "";
    for(var i = 0;i<10;i++){
      if(i!=0)
        data += ",";
      data += i.toString();
    }
    ex1c.innerHTML = data;
  })
  
  ex2.addEventListener("change", function () {
    var data = ex2.value;
    var err = 0;
    err = 0;
    if(containsSpecialChars(data)&&err==0){
      ex2c.innerHTML = "Numer nie może zawierać znaków specjalnych";
      err = 1;
    }
    if(isNaN(data)&&err==0){
      ex2c.innerHTML = "Numer nie może zawierać liter";
      err = 1;
    }
    if(data.length!=9&&err==0){
      ex2c.innerHTML = "Długość numeru musi być równa 9";
      err = 1;
    }
    if(err==0){
      ex2c.innerHTML = "Numer telefonu jest poprawny";
    }
  })
})();