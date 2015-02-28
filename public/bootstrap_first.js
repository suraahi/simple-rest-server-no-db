	$(document).ready(function(){
	console.log("hi")
			$('#buton').click(function(event){	
			event.preventDefault()
				
				var formdata ={
					'name' 			: $('input[name=item]').val(),
					'description'	: $('name[name=des]').val(),
					'price'			: $('name[name=price]').val(),
				}
				console.log(formdata);
				$.ajax({
					type	: 'post',
					url		: '/products',
					data	: formdata,
					datatype: 'json',
					
						success	: function(data){
							console.log(data)
						document.getElementById('on_jumb').innerHTML = data.name+'<br>'+data.description+'<br>'+data.price;
					}
				})
			})			
						
	})