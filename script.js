function pressed1() {
    let text = document.getElementById('inp').value;
    output.innerHTML = text.toUpperCase().trim()
  }
  
  function pressed2() {
    let text = document.getElementById('inp').value;
    output.innerHTML = text.toLowerCase().trim();
  }
  
  function pressed3() {
    let text = document.getElementById('inp').value;
    output.innerHTML = text.startsWith("@");
  }
  
  
  
  function pressed4() {
    let text = document.getElementById('inp').value;
    output.innerHTML = text.length;
  }
  
  function pressed5() {
    let text = document.getElementById('inp').value;
    output.innerHTML = text.repeat(2);
  }