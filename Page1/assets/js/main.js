
/*--------------------------|
|                           |
|          FLIPTIMER        |
|--------------------------*/

function addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    copy.setHours(date.getHours() - 17 )
    copy.setMinutes(date.getMinutes() + 7 )
    
    return copy
}
  



function handleTickInit(tick) {
    let d = new Date();
    let cDate = addDays(d,1);
    let cDay =  cDate.getDate();
    let cMonth = cDate.getMonth() +1 ;
    let cHour = cDate.getHours();
    let cMinute = cDate.getMinutes() ;
    console.log(cDate.getFullYear() + '-' + cMonth  +'-'+  cDay + ' '+ cHour +':' + cMinute)
   
    Tick.count.down(cDate.getFullYear() + '-' + cMonth  +'-'+  cDay + ' '+ cHour +':' + cMinute).onupdate = function(value) {
        tick.value = value;
    };

}
(
    function(){
        dt = new Date();
        let cDate = dt.getDate();
        let cMonth = dt.getMonth() +1;
        let cYear = dt.getFullYear();
        let cHour = dt.getHours();
        let cMinute = dt.getMinutes() ;
        let fullTime =  cYear + '-' +  cMonth + '-' +  cDate;
        let timeDetail = cYear + '-' +  cMonth + '-' +  cDate + ' ' + cHour + ':' + cMinute 
        let showDate = new Date(timeDetail );


       

        console.log( showDate.toDateString())
        document.getElementById('showCurrenDate').innerHTML = showDate.toDateString();
    }
)()

/*--------------------------|
|                           |
|       END FLIPTIMER       |
|--------------------------*/
/*

(function(){
    
    let chref = window.location.hash.substr(1);
    $( document ).ready(function() {
        if(chref != 'popup1'){
             window.location.replace(  window.location.href.hash = '#popup1' )
        }   
    });
    ///console.log( window.location );
})()

*/