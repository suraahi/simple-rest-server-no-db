	$(document).ready(function(){
	console.log("hi")
			$('#buton').click(function(event){	
			event.preventDefault()
				
				var formdata ={
					'name' 			: $('input[name=item]').val(),
					'description'	: $('input[name=des]').val(),
					'price'		: $('input[name=price]').val(),
				}
				console.log(formdata);
				$.ajax({
					type	: 'post',
					url		: '/products',
					data	: formdata,
					datatype: 'json',
					
						success	: function(data){
							//console.log(data)
							var input_val 	= data.name;
							$( ".item" ).append(input_val);
							var dec_val		= data.description;
							$( ".des" ).append(dec_val);
							var dec_pri		= data.price;
							$( ".pri" ).append(dec_pri);
							
							//console.log(input_val)
						 	 
					}
				})
			})			
						
	})