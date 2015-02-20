	$(document).ready(function(){
			$('#button1').click(function(e){
				//console.log("hello");
				e.preventDefault();
				var fromdata = {

					'name' 			: $('input[name=firstname]').val(),
					'lastname' 		: $('input[name=lastname]').val(),
					'homephone' 	: $('input[name=homephone]').val(),
					'email' 		: $('input[name=email]').val(),

				}
				//var name1 = {name,lastname,homephone,email};
				//console.log(fromdata)
				$.ajax({
					type	: 'post',
					url		: '/users',
					data	: fromdata,
					//datatype: 'json',
					success	: function(res){
						console.log(res);
						document.getElementById('on_page').innerHTML = res.name+'<br>'+res.lastname+'<br>'+res.homephone+'<br>'+res.email;
					}   			
					
					
				})

			})


	});