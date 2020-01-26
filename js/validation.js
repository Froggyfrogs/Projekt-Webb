    //function för att spara data för formulär lokalt
$(function(){

    $('#submitData').click(function(){
            
        localStorage.setItem("sparad", "finns");
        var data = $('#formKontakt').serializeArray();
        $.each(data, function(i, object){
            localStorage.setItem(object.name, object.value);
             });
        });
        if(localStorage.getItem("sparad") == "finns"){
            $('#firstHeading').after('<p>Det här formuläret har sparad data<p>');

            var data = $('#formKontakt').serializeArray();
             $.each(data, function(i, object){
                $("[name='" + object.name +"']").val(localStorage.getItem(object.name));
                 });

        }
        $('#clearData').click(function(){
        
        localStorage.setItem("sparad", "");

        }
        )

});
