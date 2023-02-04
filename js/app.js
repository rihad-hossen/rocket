let totalB = document.getElementById('total_balance')
let totalCashout = document.getElementById('ttlcash_out')
let totalSendMoney = document.getElementById('ttlsnd_money')
let totalMblrechrg = document.getElementById('ttlmbl_rchrg')


let cashInfield = document.getElementById('cashin_field')
let cashOutfield = document.getElementById('cashOut_field')
let sendMoneyfield = document.getElementById('sendMoney_field')
let totalMBlrchrgfield = document.getElementById('Mblrchrg_field')


let cashInbtn = document.getElementById('cashin_button')
let cashOutbtn = document.getElementById('cashOut_button')
let sndMoneybtn = document.getElementById('sendMoney_button')
let mblrechrgBtn = document.getElementById('Mblrchrg_button')

// cash ib start 
cashInbtn.addEventListener('click', function () {
    if (cashInfield.value == '') {
        cashInfield.focus()
        
    }
    else if (cashInfield.value != '') {
        let totalBconvert = parseFloat(totalB.innerText)
        let cashInfieldconvert = parseFloat(cashInfield.value)
        totalB.innerHTML = totalBconvert + cashInfieldconvert
        cashInfield.value = ''
    }
    else {
        cashInfield.value = ''
    }

})
// cash in end 

// cash out start 
cashOutbtn.addEventListener('click', function () {
    if (cashOutfield.value == '') {
        cashOutfield.focus()
    }
    else if (cashOutfield.value != '') {
        let totalCashoutconvert = parseFloat(totalCashout.innerText)
        let cashOutfieldconvert = parseFloat(cashOutfield.value)
        totalCashout.innerHTML = totalCashoutconvert + cashOutfieldconvert

        totalB.innerHTML = totalB.innerHTML - cashOutfieldconvert

        cashOutfield.value = ''
    }
    else {
        cashOutfield.value = ''
    }


})
// cash out end 
// send money start 

sndMoneybtn.addEventListener('click', function () {
    if (sendMoneyfield.value == '') {
        sendMoneyfield.focus()
    }
    else if (sendMoneyfield.value != '') {
        let totalSendMoney = document.getElementById('ttlsnd_money')
        let totalSendMoneyconvert = parseFloat(totalSendMoney.innerText)
        let sendMoneyfieldconvert = parseFloat(sendMoneyfield.value)

        totalSendMoney.innerHTML = totalSendMoneyconvert + sendMoneyfieldconvert

        totalB.innerHTML = totalB.innerHTML - sendMoneyfieldconvert

        sendMoneyfield.value = ''
    }
    else{
        sendMoneyfield.value = ''
    }

})
// send money end 

// mobile recharge start 
mblrechrgBtn.addEventListener('click', function () {
    if(totalMBlrchrgfield.value ==''){
        totalMBlrchrgfield.focus()
    }
    else if(totalMBlrchrgfield.value != ''){
        let totalMblrechrgconvert = parseFloat(totalMblrechrg.innerText)
    let totalMBlrchrgfieldconvert = parseFloat(totalMBlrchrgfield.value)
    let updatmblrchrg = totalMblrechrgconvert + totalMBlrchrgfieldconvert

    totalMblrechrg.innerHTML = updatmblrchrg

    totalB.innerHTML = totalB.innerHTML - totalMBlrchrgfieldconvert
    totalMBlrchrgfield.value = ''
    }
    else{
        totalMBlrchrgfield.value = ''
    }
    
})
// mobile recharge end 