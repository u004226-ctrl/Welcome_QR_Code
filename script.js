let generate_button = document.getElementById('generate_button')
let download_button = document.getElementById('download_button')
let close_button = document.getElementById('close_button')


let input = document.getElementById('textInput')
let codeqr = document.getElementById('codeqr')

let dialog = document.getElementById('window_dialog')







generate_button.addEventListener('click', function() {
    let text = input.value





    if (text){
        codeqr.innerHTML = ''

        console.log(QRCode)

        new QRCode(codeqr, {
            text: text,
            width: 178,
            height: 178,
            colorDark: '#687F66',
            colorLight: "#ffffff",  
            correctLevel: QRCode.CorrectLevel.H

        })

        dialog.showModal() // show window


    } 
    
    else {
        alert('The input field is empty')
    }


})



close_button.addEventListener('click', function() {
    dialog.close()
})


download_button.addEventListener('click', function() {
    let img = codeqr.querySelector('img'); // search picture in block 'codeqr'
    let link = document.createElement('a');

    link.href = img.src;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    } 


);