$(function() {

	setRandomClass();
	setInterval(function () {
		setRandomClass();
	}, 8000);

	function setRandomClass() {
		var teamList = $('.custom-social-proof');
		var teamItem = teamList.find('.noti');
		var number = teamItem.length;
		var random = Math.floor((Math.random() * number));
		if(teamItem.eq(random).hasClass('team__person_active')) {
			var random = random + 1
		}
		//$('.team__person_active').addClass('team__person_old')
		//	.siblings().removeClass('team__person_old');

		//teamItem.eq(random).addClass(' team__person_active')
		//	.siblings().removeClass('team__person_active')
		
		setTimeout(function(){
			teamItem.eq(random).addClass(' team__person_active')
			$('.team__person_active').fadeIn(300);
		},600)
		setTimeout(function(){
			$('.team__person_active').fadeOut(300);
			teamItem.eq(random).siblings().removeClass('team__person_active')
		},300)
			
		
		
		
	}

});