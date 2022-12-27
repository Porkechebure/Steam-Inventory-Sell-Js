function steamSell() {
    //Get money value for the card
    var money = jQuery("div[id$=_item_market_actions]:visible > div> div:nth(1)").html();
    money = money.substring(money.indexOf("$ ") + 2, money.indexOf("<br"));
    money = Number(money.replace(",", "."));
    //0.87 reaches the right price on market, increase to gain more
    money = money * 0.87;
    money = money.toFixed(2);
    jQuery(".item_market_action_button_contents").click();
    setTimeout(() => {
        //Bugfix sometimes a black background remains
        jQuery(".newmodal_background").remove();
        //Set money value
        jQuery("#market_sell_currency_input").val(money).change();
        //Double click on ok to trigger fee value calculation
        jQuery("#market_sell_dialog_accept > span").click();
        jQuery("#market_sell_dialog_accept > span").click();
        setTimeout(() => {
            //Final OK button sale click
            jQuery("#market_sell_dialog_ok > span").click()
        }, 400);
    }, 1000);
}
