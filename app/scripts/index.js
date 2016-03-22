var $ = require('jquery');
var Backbone = require('backbone');

$('.cart-button').click(function(e){
 e.stopPropagation();
 window.location = 'checkout.html';
});

$('.homepage').click(function(e){
 e.stopPropagation();
 window.location = 'checkout.html';
});

$('#add1').click(function(e){
  e.preventDefault();
  var name = $('.name').html()
  var quantity = $('.quantity').val()
  var size = $('.size').val()
  console.log(name);
  console.log(quantity);
  console.log(size);
});
$('#add2').click(function(e){
  e.preventDefault();
  var name = $('.name2').html()
  var quantity = $('.quantity2').val()
  var size = $('.size2').val()
  console.log(name);
  console.log(quantity);
  console.log(size);
});

$('#add3').click(function(e){
  e.preventDefault();
  var name = $('.name3').html()
  var quantity = $('.quantity3').val()
  var size = $('.size3').val()
  console.log(name);
  console.log(quantity);
  console.log(size);
});
