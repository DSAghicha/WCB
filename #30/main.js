const next = document.getElementById('generate');
var form = document.getElementById('form-section');
var transit = document.getElementById('transit');
var idpage = document.getElementById('idInfo');
var idno, uname, DoB, bloodGrp, mobileNum, address, picPath;
let udetails = {};


next.addEventListener('click', () => {
    form.style.display = 'none';
    transit.style.display = 'flex';
    setTimeout(displayID, 1000);
});

function displayID() {
    uname = document.forms.info.name.value;
    DoB = document.forms.info.dob.value;
    var bloodGrpBox = document.forms.info.bloodgrp;
    bloodGrp = bloodGrpBox.options[bloodGrpBox.selectedIndex].text;
    mobileNum = document.forms.info.mobnum.value;
    address = document.forms.info.address.value;
    picPath = document.getElementById('pic').files[0];


    if ((uname == '' || DoB == '') || (bloodGrp == '' || mobileNum.length != 10) || (address == '' || picPath == undefined)) {
        alert('All fields are required!');
        window.location.reload();

    } else {
        transit.style.display = 'none';
        idpage.style.display = 'flex';
        modifyCard();
        console.log(uname, DoB, bloodGrp, mobileNum, address, picPath);
    }

}

function modifyCard() {
    // Loading Img
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.getElementById('pic-container').style.background = "url('" + reader.result + "') no-repeat";
        document.getElementById('pic-container').style.backgroundSize = "cover";
    });
    reader.readAsDataURL(picPath);

    // Generating & Loading Id No
    idno = Math.floor(1000000000 + Math.random() * 9000000000);
    document.getElementById('id').innerHTML = idno;

    // Loading Name
    document.getElementById('name-cr').innerHTML = uname;

    // Loading phone
    var phone = mobileNum.slice(0, 3).concat(" ", mobileNum.slice(3, 6), " ", mobileNum.slice(6));
    document.getElementById('phone').innerHTML = phone;

    // Loading DoB
    document.getElementById('dob-display').innerHTML = DoB.replaceAll("-", ".");

    // Loading Blood Grp
    document.getElementById("bg-display").innerHTML = bloodGrp;

    // Loading Address
    document.getElementById("address-display").innerHTML = address;

    udetails = {
        id: idno,
        name: uname,
        phone: phone,
        dob: DoB,
        bg: bloodGrp,
        add: address
    };
    generateQR();
    console.log(udetails);
}


// Generate QR
function generateQR() {
    var qr = new QRious({
        element: document.getElementById('qr-container'),
        value: udetails
    });
    console.log(JSON.stringify(udetails));
    qr.set({
        foreground: 'black',

        value: JSON.stringify(udetails)
    });
}

document.getElementById('home').addEventListener('click', () => {
    form.style.display = 'block';
    transit.style.display = 'none';
    idpage.style.display = 'none';
});