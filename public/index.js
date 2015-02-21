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
				$("#daylist").validate();
				//var name1 = {name,lastname,homephone,email};
				//console.log(fromdata)
				$.ajax({
					type	: 'post',
					url		: '/users',
					data	: fromdata,
					//datatype: 'json',
					success	: function(data){
						console.log(data);
						document.getElementById('on_page').innerHTML = data.name+'<br>'+data.lastname+'<br>'+data.homephone+'<br>'+data.email;
					}   			
					
					
				})

			})


	});