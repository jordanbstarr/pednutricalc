$(document).ready(function(){
    $('button[name=Calculate]').on('click', function(){
       $('.answer').remove();
       $('#dosekgdivbr').remove();
       var doseKg = $('input[name=doseKg]').val();
       var prevKg = $('input[name=prevKg]').val();
       var currKg = $('input[name=currKg]').val();
       var days = $('input[name=days]').val();
       var onemls = $('input[name=#1mls]').val();
       var onekcals = $('input[name=#1kcals]').val();
       var twomls = $('input[name=#2mls]').val();
       var twokcals = $('input[name=#2kcals]').val();
       var D5 = $('input[name=D5]').val();
       var ins = $('input[name=ins]').val();
       var urine = $('input[name=urine]').val();
       var fluidgoal = $('input[name=fluidgoal]').val();
       var calgoal = $('input[name=calgoal]').val();
       var growth = (currKg - prevKg)*1000/days;
       var calories = (((onemls*onekcals+twomls*twokcals)/29.6)+D5*50/1000*3.4)/doseKg;
       var fluids = ins/doseKg;
       var UOP = urine/doseKg/24;
       var fluidgoalresult = fluidgoal*doseKg;
       var fluidpershift = fluidgoalresult/3;
       var fluidper3 = fluidgoalresult/8;
       var caloriegoal = calgoal*doseKg
       $('#growthdiv').append("<div class='answer'>Growth (g/day) = "+growth.toFixed(3)+'</div>');
       $('#calrecdiv').append("<div class='answer'>Calories Received (kcal/Kg/day) = "+calories.toFixed(3)+'</div>');
       $('#insdiv').append("<div class='answer'>Fluids Received (mL/Kg/day) = "+fluids.toFixed(3)+'</div>');
       $('#urinediv').append("<div class='answer'>Urine Output (mL/Kg/hour) = "+UOP.toFixed(3)+'</div>');
       $('#fluidgoaldiv').append("<div class='answer'>Fluids Required: mLs/day = "+fluidgoalresult.toFixed(3)+",   mLs/shift = "+fluidpershift.toFixed(3)+",   mLs/q3h = "+fluidper3.toFixed(3)+"</div>");
       $('#calgoaldiv').append("<div class='answer'>Calories Required (kcals/day) = "+caloriegoal.toFixed(3)+"</div>");
       $('#dosekgdiv').css({"height":"286px"}).prepend("<div id='dosekgdivbr'><br><br></div>");
    });
});
