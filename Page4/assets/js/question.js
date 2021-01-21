function answer(answer,x)
{
	let first = 'container-answer1';
	let second = 'container-answer2';
	let third = 'container-answer3';
	
	
	switch(x){
		case 1:
			let ca = document.getElementById(first);
			ca.value = answer;
			break;
		case 2:
			let ca1 = document.getElementById(second);
			ca1.value = answer;
			break;
			
		case 3:
			let ca2 = document.getElementById(third);
			ca2.value = answer;
			break;
			
		default:
		
			console.log('switch error');
	}
	//let conOne = document.getElementById('')	
}




function nextQuest(btnquestion, fadePack, showPact){
    $('.'+ btnquestion ).click(function(){
        $("#" + fadePack).fadeOut(300);

        setTimeout(function(){
            $("#" + showPact).fadeIn(300);
        }, 300)
    })
}

function lastProcessing(btn,fadePack,showPact){
    $('.'+ btn).click( function(){

        $('#' + fadePack).fadeOut(300);

        setTimeout(function(){
            $('#' + showPact).fadeIn(300);
        
            setTimeout(function(){
                $('#dummyAnswer').fadeOut(300)

                setTimeout(function(){
                    $('#dummyDoubleCheck').fadeIn(300);

                    
                    setTimeout(function(){
                        $('#dCheck1').fadeIn(300)

                        setTimeout(function(){
                            $('#dCheck2').fadeIn(300)


                            

                            setTimeout(function(){
                                $('#dCheck3').fadeIn(300)
                                $('#dummyTerm').fadeIn(300)
                                $('#dummyLoader').fadeOut(300)
                                $('#dummyDoubleCheck').fadeOut(300)

                                setTimeout(function(){
                                    $('#dummyCongrat').fadeIn(300)
                                    $('#btnForAcc').fadeIn(300)
                                    
                                },800)
                            },500)
                        },500)
                        
                    },700)

                },300)

            },300)


        }, 300)
        
    })
}

$(document).ready(function(){

    nextQuest('Quest1', 'packQ1', 'packQ2');
    nextQuest('Quest2', 'packQ2', 'packQ3');
    lastProcessing('Quest3', 'packQ3' , 'processQ')
})