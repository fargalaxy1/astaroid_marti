function openModal(size) {
	var modal = $('.astaroid-modal');
	var typeofSize = typeof size;
	var isSmall = size || false;
	if (isSmall) {
		modal.addClass('small');
	}  else {
		modal.removeClass('small');
	}
	modal.fadeIn(300);
	modal.click(function(event){
		closeModal();
	});
	$('.astaroid-modal__content').click(function(event){
		event.stopPropagation();
	});
	$('.astaroid-modal button').click(function(){
		closeModal();
	});
}
function closeModal() {
    $('.astaroid-modal').fadeOut(300);
}

$(document).ready(function(){
	$('.offerte label').on('click', function(e){
		e.stopPropagation();
	});
	$('.offerte tr').click(function(){
		var tr = $(this);
		tr.siblings('tr').removeClass('active');
		tr.addClass('active');
		tr.find('label').trigger('click');
	});
	$('.deal-gruppo_moreinfo span').click(function(){
		var content = $(this).parent().find('.deal-gruppo_moreinfo-main').html();
		var title = $(this).parent().find('.deal-gruppo_moreinfo-title').html();
		$('.astaroid-modal__main').html(content);
		$('.astaroid-modal__title').html(title)
		openModal();
	});

	$('[data-target="#deletaccount"]').on('click', function(){
		$('#deletaccount').modal('show');
		return false;
	});
	$('[data-target="#inviteModal"]').on('click', function(){
		$('#inviteModal').modal('show');
		return false;
	});

	$("#btn_modifica").on("click", function(event){
		event.stopPropagation();
		event.preventDefault();
		if( $(".user_profile").hasClass('form_disabled') ){
			$(".message").text('').addClass("hide");
			$(".user_profile").removeClass("form_disabled");

			$(".user_profile input").each(function(){
				$(this).removeAttr("disabled");
			});

			$("#btn_modifica").val("conferma modifiche");

			// $("#modifyaccount").
			$('#modifyaccount').modal('show');
			// $('#modifyaccount').on('shown.bs.modal', function () {
			//   $('#modifyaccount').focus()
			// })

		}else{
			$(".user_profile").addClass("form_disabled");
			
			$(".message").text('le tue modifiche sono state eseguite').removeClass("hide")

			$(".user_profile input").each(function(){
				$(this).attr("disabled","disabled")
			});

			// qui partirà la chiamata
			// l'esito metterà il codice valido ed il testo

			$(this).val("modifica profilo");
		}
		return false;
	});

	$(".countdown-time").each(function(){
		var elementdate = $(this).attr("data-end"),
			datastring = new Date(elementdate)
		;

		var days = datastring.getDate(),
			month = datastring.getMonth(),
			years = datastring.getFullYear(),
			hours = datastring.getHours(),
			minutes = datastring.getMinutes(),
			seconds = datastring.getSeconds()
		;

		var dateEnd = years +'/'+days+'/'+month, 
			timeEnd = hours+':'+minutes+':'+seconds
		;
		
		var _countdown = $(this).countdown(dateEnd+' '+timeEnd).on('update.countdown', function(event) {
 			var format = '%H:%M:%S';


 			var namedays;
 			if( event.strftime('%-D') === 's'){
 				namedays = "o"; 	
 			}else{
 				namedays = "i";
 			}

 			
 			
		 	if(event.offset.days > 0) {
		 		format = '%-d' + ' giorn'+ namedays + format;
		 	}
			if(event.offset.weeks > 0) {
				format = '%-w' + format;
			}
			//$(this).html(event.strftime(format));

			$(this).html(event.strftime('%-D' + ' giorn'+ namedays + ' '+'%-H'+':'+ '%-M'+':' + '%-S'));

		}).on('finish.countdown', function(event) {
			$(this).html('Terminata!');
			$(this).parent().addClass('disabled')
		});
	});

	$( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });


        var viewportW = $(window).width();
	
		var $item;
	    if(!$item){
	    	var
				items = $("#topnav > li a"),
				
				totalitems = items.length,
				i = 0
			;
			
			$item = '<select class="select-menu">',

			items.each(function(){
				var href = $(this).attr("href");
				var text = $(this).text();
				i++
				$item += "<option value='"+href+"'>"+ text +"</option>";
				if (i == totalitems){
					$item += "</select>";
				}
			});

			$(".nav__primary").append($item);

	    



	}
	$("body").on("change",".select-menu",function(){
		var currenthref = $(this).val()
		window.location.href = currenthref;
	});

});

