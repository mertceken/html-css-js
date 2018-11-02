var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[]; //create a variable name carts, this will be the storage of the product that the buyer choose
				$scope.products = [
					{p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "images/1.jpg", p_price: 28990},
					{p_id: "2", p_name: "iPhone 8", p_image: "images/2.png", p_price: 60138},
					{p_id: "3", p_name: "Sony Xperia Z3+", p_image: "images/3.png", p_price: 1519000},
					{p_id: "4", p_name: "ALIENWARE 17", p_image: "images/4.png", p_price: 75187},
					{p_id: "5", p_name: "Luvaglio Laptop", p_image: "images/5.png", p_price: 50115000},
					{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "images/6.png", p_price: 9013}
				]; //this is an array of product that will be display in the mark uo
 
				$scope.add_cart = function(product){ //set a function name add_cart
					if(product){ //check if the product is already declared within the function
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price}); //pushes the chosen product into a new variable called carts when the add to cart button is clicked
					}	
				}
 
 
				$scope.total = 0; //display the default value of total
 
				$scope.setTotals = function(cart){ //set a function name setTotals 
					if(cart){ //check if cart is already set in the function
						$scope.total += cart.p_price; //sum the total value of each product
					}
				}
 
				$scope.remove_cart = function(cart){ //set a function called remove_cart
					if(cart){ //checked if the cart has a value
						$scope.carts.splice($scope.carts.indexOf(cart), 1); //delete a product based on the index 
						$scope.total -= cart.p_price; //deduct the price of the product  simultaneously when deleted
					}
				}
	});