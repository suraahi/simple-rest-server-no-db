	
	$(document).ready(function(){
			/*var xyz = $('.on_page')
			$(xyz).click(function(event){
			var target = $( event.target );
			if ( target.is( " :button.gly") ) {
				console.log(this)
			$(this).parent('div').remove();
		}
		})*/
			//$('.on_page').load("/products"){
			//$.each(data,function(i,data){

			//})

		/*$('.on_page').on('click',"button",function(){
			/*var but = $("button.gly").each(function(i,value){
			console.log(i,value)
			$(this).parent('div').remove();
			})
		});*/
	$('.on_page').on('click',":button.gly",function(){
		$(this).parent('div').remove();
		console.log(this.id)
		$.ajax({
			
				type		: "delete",
				url			: "/products/" + this.id,
					
				success	: function(data){	
					$(this).parent('div').remove();

					
				}

		});
	});

		$.getJSON( "/products", function(data){
			$.each(data,function(i,data){
				html = $('<div class="con container well col-md-8 pull-left"><button class=" gly glyphicon glyphicon-remove-sign pull-right"id = '+data.id+'></button><button class="pri btn-info btn btn-sm pull-right">'+data.price+" $ "+'</button><div class="item">'+data.name+'</div><div class="des pull-left">'+data.description+'</div>')
					$('.on_page').append(html);
			})
		});
			//$('.on_page').load("/products")
		$('.add').click(function(event){	
		event.preventDefault()
			var formdata ={
			'name' 			: $('input[name=item]').val(),
			'description'	: $('input[name=des]').val(),
			'price'			: $('input[name=price]').val(),
			}
			console.log(formdata);
			$.ajax({
				type		: 'post',
				url			: '/products',
				data		: formdata,
				datatype	: 'json',
				
				success	: function(data){
					
					html = $('<div class="con container well col-md-8 pull-left"><button class=" gly glyphicon glyphicon-remove-sign pull-right"id = '+data.id+'></button><button class="pri btn-info btn btn-sm pull-right">'+data.price+" $ "+'</button><div class="item">'+data.name+'</div><div class="des pull-left">'+data.description+'</div>')
					console.log(data.id)
					$('.on_page').append(html);

				}
			})
		})			
						
	})
							
							/*$('.on_page').click(function(event){
								
								//alert("hello")
								var target = $( event.target );
								if ( target.is( ".glyphicon-remove-sign" ) ) {
									$(html).remove();
							}
								
							});*/

							
							/*var a = $('<div></div>').addClass('jumbotron');
							var input_val 	= $('<h3>'+data.name+'</h3>').addClass('item pull-left')
							$(a).append(input_val);
							var dec_val		= $('<h5>'+data.description+'</h5>').addClass('item pull-left');
							$(a).append(dec_val);
							var pri_val		= $('<button>'+data.price+'</button>').addClass('btn-info btn-sm pull-right');
							$(a).append(pri_val)
							$('.on_page').append(a);*/

