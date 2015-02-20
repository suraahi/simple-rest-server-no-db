	$(document).ready(function(){
			$('#button1').click(function(){
				console.log("hello");
				var fromdata = {

					'name' 			: $('input[name=firstname]').val(),
					'middelname' 	: $('input[name=middelname]').val(),
					'lastlname' 	: $('input[name=lastname]').val(),
					'homephone' 	: $('input[name=homephone]').val()
				}
				$.ajax({
					type	: 'post',
					url		: '/users',
					data	: fromdata,
					datatype: 'json',
					success	: function(res){
						console.log(res)
					}   			

				})

			})


	});