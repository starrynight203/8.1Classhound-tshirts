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
  var size = $('.size').html()
  console.log(name);
  console.log(quantity);
  console.log(size);
});
