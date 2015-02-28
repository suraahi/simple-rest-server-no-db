	$(document).ready(function(){
	console.log("hi")
			$('#buton').click(function(){	
			
				console.log("hello");
				var formdata ={
					'name' 			: $('input[name=item]').val(),
					'description'	: $('name[name=des]').val(),
					'price'			: $('name[name=price]').val(),
				}
				$.ajax({
					type	: 'get',
					url		: '/document',
					data	: fromdata,
					datatype: 'json',
					
						success	: function(data){
						document.getElementById('on_jumb').innerHTML = data.name+'<br>'+data.description+'<br>'+data.price;
					}
				})
			})			
						
	})