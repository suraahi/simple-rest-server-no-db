	
	$(document).ready(function(){


	$('.on_page').on('click',":button.gly",function(){
	
		console.log(this)
		$.ajax({
				type		: "delete",
				url			: "/products/" + this.id,
				success	: function(data){	
					$(this).parent('div').remove();
					console.log(div)
					//$(":button.gly").parent('div').remove();
					//console.log(this)
				}
		});
	});
		$.getJSON( "/products", function(data){
			$.each(data,function(i,data){
				temp =  Handlebars.compile($("#Template").html());
					on_html = temp({item_name :data.Name,  item_price :data.Price , item_desc : data.Description, id :data.id })
                	//console.log(html);
        			$(".on_page").append(on_html);

			})
		});
			
			$('.add').click(function(event){	
				event.preventDefault()
			formdata ={
			Name			: $('input[name=item]').val(),
			Description		: $('input[name=des]').val(),
			Price			: $('input[name=price]').val(),
			}

			//console.log(formdata.Name);
			$.ajax({
				type		: 'post',
				url			: '/products',
				data		:  formdata,
				datatype	: 'json',

				
				success	: function(data){
					temp =  Handlebars.compile($("#Template").html());
					on_html = temp({item_name :data.Name,  item_price :data.Price , item_desc : data.Description, id :data.id })
                	//console.log(html);
        			$(".on_page").append(on_html);
        		    $(".ser").trigger('reset');
             							
				}
			})
		})			
	})
						
