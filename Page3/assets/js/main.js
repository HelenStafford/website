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