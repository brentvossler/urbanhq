function CalculateOfferPrice() {
 
 /* wholesaler vars */
 var arv = parseInt(document.all.arv.value);
 var repairs = parseInt(document.all.repairs.value);
 var assignment = parseInt(document.all.assignment.value);
 var monthstocomplete = parseInt(document.all.monthstocomplete.value);
 var avgdom = parseInt(document.all.avgdom.value);
 var totalmonths = parseInt(document.all.totalmonths.value);
 var costtobuy = parseInt(document.all.costtobuy.value);
 var costtohold = parseInt(document.all.costtohold.value);
 var costtosell = parseInt(document.all.costtosell.value);
 var profit = parseInt(document.all.profit.value);

/* buyer vars */
var desiredprofit = parseFloat(document.all.desiredprofit.value) / 100;
var buyercosttobuy = parseFloat(document.all.buyercosttobuy.value) / 100;
var originationpoints = parseFloat(document.all.originationpoints.value) / 100;
var concessions = parseFloat(document.all.concessions.value) / 100;
var closingcosts = parseFloat(document.all.closingcosts.value) / 100;
var realtorscommission = parseFloat(document.all.realtorscommission.value) / 100;
var misc = parseFloat(document.all.misc.value) / 100;
var insurance = parseFloat(document.all.insurance.value) / 100;
var taxes = parseFloat(document.all.taxes.value) / 100;
var interest = parseFloat(document.all.interest.value) / 100;
var costtoholdmonthly = parseFloat(document.all.costtoholdmonthly.value) / 100;
var buyerpurchaseprice = parseInt(document.all.buyerpurchaseprice.value); 


var monthstocomplete = repairs / 6000 / 4.1;
var totalmonths = monthstocomplete + (avgdom / 7 / 4);
var costtobuy = (buyercosttobuy + originationpoints) * (0.6927 * arv);
var costtohold = ((interest / 12 * (repairs * 0.6927) * totalmonths) + (misc * arv * totalmonths) + (taxes / 12 * (arv * 0.6927 - repairs) * totalmonths) + (insurance / 12 * arv * totalmonths));
var costtosell = arv * (concessions + closingcosts + realtorscommission);
var profit = arv * desiredprofit;
var offerprice = arv - profit - repairs - costtosell - assignment - costtohold - costtobuy;
var costtoholdmonthly = ((interest / 12 * (arv * 0.6927)) + (misc * arv) + (taxes / 12 * (arv * 0.6927 - repairs)) + (insurance / 12 * arv));
var buyerpurchaseprice = offerprice + assignment;

document.all.monthstocomplete.value = monthstocomplete.toFixed(2);
document.all.totalmonths.value = totalmonths.toFixed(2);
document.all.costtobuy.value = accounting.formatMoney(costtobuy);
document.all.costtohold.value = accounting.formatMoney(costtohold);
document.all.costtosell.value = accounting.formatMoney(costtosell);
document.all.profit.value = accounting.formatMoney(profit);
document.all.offerprice.value = accounting.formatMoney(offerprice);
document.all.costtoholdmonthly.value = accounting.formatMoney(costtoholdmonthly);
document.all.buyerpurchaseprice.value = accounting.formatMoney(buyerpurchaseprice);
}