function predict() {
    var nums = [];
    for (var i = 0; i < 5; i++) {
      var num = Math.floor(Math.random() * 69) + 1;
      while (nums.includes(num)) {
        num = Math.floor(Math.random() * 69) + 1;
      }
      nums.push(num);
    }
    nums.sort(function(a, b) { return a - b; });
    
    var powerball = Math.floor(Math.random() * 26) + 1;
    
    var result = nums.join(", ") + " Powerball: " + powerball;
    
    document.getElementById("result").innerHTML = result;
  }
  