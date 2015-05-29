(function () {

    var finalPrice = 0;

    var webPrice = 0;
    var monthsDiscount = 0;
    var functionsCharge = 0;

    function calculateTotal() {
        monthsDiscount *= 5;
        if (monthsDiscount > 20) monthsDiscount = 20;

        if (functionsCharge < 0) functionsCharge = 0;

        finalPrice = (webPrice *(1-(monthsDiscount /100)) +functionsCharge);

        $("#presupuesto").val(finalPrice);
    }


    $("#tipoWeb").change(function() {
        switch($("#tipoWeb option:selected").attr('id')) {
        case "empresarial":
            webPrice = 2000;
            break;
        case "personal":
            webPrice = 1000;
            break;
        default:
            webPrice = 500;
            break;
        }
        calculateTotal();
        });

    $("#plazo").change(function() {

        if(!isNaN($(this).val())) {
            monthsDiscount = this.value;
            calculateTotal();
        }
    });

    $("input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) functionsCharge += 400;
        else functionsCharge -= 400;

        calculateTotal();

});
})();

