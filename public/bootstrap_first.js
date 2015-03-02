	$(document).ready(function(){

			//$('on_page').load(/products)
			$('#buton').click(function(event){	
			event.preventDefault()
				
				var formdata ={
					'name' 			: $('input[name=item]').val(),
					'description'	: $('input[name=des]').val(),
					'price'			: $('input[name=price]').val(),
				}
				console.log(formdata);
				$.ajax({
					type	: 'post',
					url		: '/products',
					data	: formdata,
					datatype: 'json',
					
						success	: function(data){
							var html = $('<div class="container well col-md-8 pull-left"><button class=" gly glyphicon glyphicon-remove-sign pull-right"></button><button class="pri btn-info btn btn-sm pull-right">'+data.price+'</button><div class="item">'+data.name+'</div><div class="des pull-left">'+data.description+'</div>')
							$('.on_page').append(html);
							$('.on_page').click(function(event){
								
								//alert("hello")
								var target = $( event.target );
								if ( target.is( ".glyphicon-remove-sign" ) ) {
									$(html).remove();
							}
								
							});

							
							/*var a = $('<div></div>').addClass('jumbotron');
							var input_val 	= $('<h3>'+data.name+'</h3>').addClass('item pull-left')
							$(a).append(input_val);
							var dec_val		= $('<h5>'+data.description+'</h5>').addClass('item pull-left');
							$(a).append(dec_val);
							var pri_val		= $('<button>'+data.price+'</button>').addClass('btn-info btn-sm pull-right');
							$(a).append(pri_val)
							$('.on_page').append(a);*/

					}
				})
			})			
						
	})
