// alert('ciao');
// var numero = 0;

for (var i = 1; i <= 1000; i++) {

  if (i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');
    document.getElementById('lista_metodo_for').innerHTML += '<li>' + i + ' is ' + 'FizzBuzz' + '</li>'
  }
  else if (i % 5 == 0){
    console.log('Buzz');
    document.getElementById('lista_metodo_for').innerHTML += '<li>' + i + ' is '+ 'Buzz' + '</li>'
  }
  else if (i % 3 == 0){
    console.log('Fizz');
    document.getElementById('lista_metodo_for').innerHTML += '<li>' + i + ' is ' + 'Fizz' + '</li>'
  }
  else {
    console.log(i);
    document.getElementById('lista_metodo_for').innerHTML += '<li>' + i + '</li>'
  }
}
