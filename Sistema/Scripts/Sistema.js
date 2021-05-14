$(function () {
////    $.fn.datepicker.dates['en'] = {
////        days: ["Domingo", "Segunda", "Ter�a", "Quarta", "Quinta", "Sexta", "S�bado", "Domingo"],
////        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S�b", "Dom"],
////        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
////        months: ["Janeiro", "Fevereiro", "Mar�o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
////        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
////        today: "Hoje",
////        clear: "Limpar",
////        titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
////        weekStart: 0
////    };

////    $('.datepicker').datepicker({
////        format: 'dd/mm/yyyy',
////        lacale: 'en',
////        clearBtn: true,
////    });




    //$('.datepicker').datepicker({
    //    format: 'dd/mm/yyyy',
    //    lacale: 'en',
    //    clearBtn: true,
    //});

    $(document).ready(function () {
        $('input[type="numeric"]').each(function () {
            var val = $(this).val().replace('.', ',');
            $(this).val(val);
        });

        $("input").on("change", function () {
            $(this).val(parseFloat($(this).val()).toFixed(2));
        });


    });

    $(".phone").inputmask({ "mask": "(999) 999-9999" });
});