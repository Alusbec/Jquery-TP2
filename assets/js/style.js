$(document).ready(function () {
    $('#result').click(function () {

        var result = 0;
        $('input[name=gider]').each(function () {
            result = (result + parseInt($(this).val()) / 5);
        })
        $('input[name= result-gider]').val(result);

        if ((result >= 0) && (result < 10)) {
            $('#appreciation').html('En dessous de la moyenne !');
        }
        else if ((result >= 10) && (result < 13)) {
            $('#appreciation').html('Moyen !');
        }
        else if ((result >= 13) && (result < 16)) {
            $('#appreciation').html('Bien !');
        }
        else if ((result >= 16) && (result < 20)) {
            $('#appreciation').html('Très bien !');
        }
        else if (result == 20) {
            $('#appreciation').html('Excellent !')
        }

    });
});


