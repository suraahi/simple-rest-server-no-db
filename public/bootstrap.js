	$(document).ready(function(){
console.log("try")
			$('#a').click(function(){	
				var input1 = $('#b').val();
					$(input1).toggleClass('')
					$('#z').append(input1);
				var input2 = $('#c').val();
					$('#z').append(input2);
				var input3 = $('#d').val();
					$('#z').append(input3);
				$('#z').toggleClass('block');
								
			})
			});