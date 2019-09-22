//1.4 Функции»
'use strict';

// Задание 1
function getCostForGuarantee (guaranteePeriod = 0) {
    var costForGuarantee = 0;

    if (guaranteePeriod == 1) {
        costForGuarantee = 1250;
    }
    else if (guaranteePeriod == 2) {
        costForGuarantee = 2300;
    } else {
        costForGuarantee = 'Неверный период';
    }

    return costForGuarantee;
}

// Задание 2
function getCostForEngraving (stringToEngraving = '0') {
    var countWords = stringToEngraving > '0' 
        ? stringToEngraving.split(' ').length 
        : '0';
        
    var costForEngraving = countWords * 55;
    
    return costForEngraving;
}

//Задание 3
function getCostDelivery(deliveryRequired = false, deliveryTo = '') {
    var deliveryPrice = 0;
    if (deliveryRequired) {
        switch (deliveryTo) 
        {
            case 'Луна' :
                deliveryPrice = 150;
            break;

            case 'Крабовидная туманность' :
                deliveryPrice = 250;
            break;

            case 'Галактика Туманность Андромеды' :
                deliveryPrice = 550;
            break;
            
            case 'Туманность Ориона' :
                deliveryPrice = 600;
            break;
            
            case 'Звезда смерти' :
                deliveryPrice = 'договорная';
            break;

            default :
                deliveryPrice = NaN; 
                
            break;
        }
    }

    return deliveryPrice;
}

/**
 * 
 * make and print the Invoice to customer
 * 
 * @param {int} guaranteePeriod 
 * @param {string} stringToEngraving
 * 
 * @returns {string}
 * 
 */
function printInvoice(guaranteePeriod, stringToEngraving, deliveryRequired, deliveryTo) {
    var guaranteeInvoiceTitle = 'Дополнительное гарантийное обслуживание: ';
    var engravingInvoiceTitle = 'Подарочная упаковка и гравировка: ';
    var deliveryInvoiceTitle = 'Стоимость доставки: ';
    var currency = ' Q';
    
    // Формируем счет за горантийное обслуживание
    var costForGuarantee = getCostForGuarantee (guaranteePeriod);
    if (costForGuarantee == 'Неверный период') {
        var invoiceMassageToGuarantee = costForGuarantee;
    }
    else {
        var invoiceMassageToGuarantee = guaranteeInvoiceTitle + costForGuarantee + currency;
    }

    // Формируем счет за гравировку
    var costForEngraving = getCostForEngraving (stringToEngraving);
    var invoiceMassageToEngraving = engravingInvoiceTitle + costForEngraving + currency;
    
    // Формируем счет за доставку
    var costDelivery = getCostDelivery(deliveryRequired, deliveryTo);

    if (isNaN(costDelivery) && costDelivery != 'договорная') {
         var invoiceMassageToDelivery = 'Ошибка при расчете стоимости доставки';
    }
    else if (costDelivery == 'договорная') {
        var invoiceMassageToDelivery = deliveryInvoiceTitle + costDelivery;
    }
    else if (costDelivery == 0) {
         var invoiceMassageToDelivery = 'Доставка не требуется';
    }
    else {
        var invoiceMassageToDelivery = deliveryInvoiceTitle + costDelivery + currency;
    }

    // Печатаем счета
    console.log(invoiceMassageToGuarantee);
    console.log(invoiceMassageToEngraving);
    console.log(invoiceMassageToDelivery);
}

printInvoice(2, 'Петру! с большой и страстной, пламенной любовью!', 'Да', 'Крабовидная туманность');



