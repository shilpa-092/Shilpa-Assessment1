
const originalData = {
    claimNo: "20042047",
    workerName: "Madeleine Willson",
    appId: "712041",
    submitted: "March 28, 2024 20:43",
    
    prescriptionDrugs: [
        { drugName: "Naproxen", datePurchased: "February 28, 2024", prescriptionDate: "February 29, 2024", provider: "Dr. Best", amount: 20.00 }
    ],
    
    otcDrugs: [
        { drugName: "Advil", datePurchased: "March 28, 2024", amount: 8.00, seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    
    medicalSupplies: [
        { item: "Tensor", date: "February 28, 2024", prescribed: true, provider: "Dr. Best", amount: 10.00, seller: "Shoppers Drug Mart" }
    ],
    
    parking: [
        { address: "333 St Mary Ave, Winnipeg MB R3C 4A5, Canada", date: "March 28, 2024", amount: 10.00, meterUsed: true, meterNo: "12245" }
    ],
    
    mileage: [
        { date: "March 28, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: 20 }
    ],
    
    busTaxi: [
        { date: "March 28, 2024", from: "", to: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: "Bus", fare: 3.00 },
        { date: "March 27, 2024", from: "25 Furby St, Winnipeg MB R3C 2A2, Canada", to: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", type: "Taxi", fare: 15.00 }
    ]
};

const emptyData = {
    claimNo: "20042050",
    workerName: "Test User",
    appId: "712044",
    submitted: "July 20, 2026 09:00",
    prescriptionDrugs: [],
    otcDrugs: [],
    medicalSupplies: [],
    parking: [],
    mileage: [],
    busTaxi: []
};

const fullData = {
    claimNo: "20042049",
    workerName: "Sarah Johnson",
    appId: "712043",
    submitted: "July 20, 2026 10:15",
    
    prescriptionDrugs: [
        { drugName: "Naproxen", datePurchased: "July 1, 2026", prescriptionDate: "July 1, 2026", provider: "Dr. Best", amount: 20.00 },
        { drugName: "Celecoxib", datePurchased: "July 5, 2026", prescriptionDate: "July 4, 2026", provider: "Dr. Lee", amount: 45.00 },
        { drugName: "Tramadol", datePurchased: "July 10, 2026", prescriptionDate: "July 9, 2026", provider: "Dr. Best", amount: 30.00 }
    ],
    
    otcDrugs: [
        { drugName: "Advil", datePurchased: "July 2, 2026", amount: 8.00, seller: "Shoppers Drug Mart", reason: "Pain" },
        { drugName: "Tylenol", datePurchased: "July 8, 2026", amount: 12.00, seller: "Walmart", reason: "Headache" }
    ],
    
    medicalSupplies: [
        { item: "Tensor Bandage", date: "July 3, 2026", prescribed: true, provider: "Dr. Best", amount: 10.00, seller: "Shoppers Drug Mart" },
        { item: "Wrist Brace", date: "July 7, 2026", prescribed: true, provider: "Dr. Lee", amount: 25.00, seller: "Medical Supply Store" }
    ],
    
    parking: [
        { address: "333 St Mary Ave, Winnipeg MB", date: "July 5, 2026", amount: 10.00, meterUsed: true, meterNo: "12245" },
        { address: "820 Sherbrook St, Winnipeg MB", date: "July 10, 2026", amount: 8.00, meterUsed: false, meterNo: "" },
        { address: "440 Edmonton St, Winnipeg MB", date: "July 12, 2026", amount: 12.00, meterUsed: true, meterNo: "98765" }
    ],
    
    mileage: [
        { date: "July 5, 2026", facility: "HSC, 820 Sherbrook St, Winnipeg MB", workplace: "WCB, 333 Broadway, Winnipeg MB", km: 20 },
        { date: "July 10, 2026", facility: "Women's Hospital, 665 William Ave, Winnipeg MB", workplace: "WCB, 333 Broadway, Winnipeg MB", km: 15 }
    ],
    
    busTaxi: [
        { date: "July 5, 2026", from: "123 Main St, Winnipeg MB", to: "HSC, 820 Sherbrook St, Winnipeg MB", type: "Bus", fare: 3.00 },
        { date: "July 10, 2026", from: "123 Main St, Winnipeg MB", to: "Women's Hospital, 665 William Ave, Winnipeg MB", type: "Taxi", fare: 18.50 },
        { date: "July 12, 2026", from: "", to: "440 Edmonton St, Winnipeg MB", type: "Bus", fare: 3.00 },
        { date: "July 15, 2026", from: "456 Oak St, Winnipeg MB", to: "HSC, 820 Sherbrook St, Winnipeg MB", type: "Taxi", fare: 22.00 }
    ]
};

let currentData = JSON.parse(JSON.stringify(originalData));

function formatMoney(amount) {
    return "$" + parseFloat(amount).toFixed(2);
}

function makeCheckbox(isChecked) {
    if (isChecked) {
        return '<span class="check">&#10003;</span>';
    }
    return '<span class="check"></span>';
}

function showEmpty(message) {
    return '<div class="empty">No ' + message + ' recorded</div>';
}


function buildHeader() {
    return `
        <header class="header">
            <div class="logo-area">
                <img src="./wcb-logo.jpeg" alt="WCB Logo" class="logo-img">
            </div>
            <div class="header-center">
                333 Broadway<br>
                Winnipeg, MB R3C 4W3<br>
                Phone: (204) 954-4321<br>
                Toll Free: 1-855-954-4321<br>
                wcb.mb.ca
            </div>
            <div class="header-right">
                <div class="header-title">Medical & Travel Expense<br>Request</div>
                <div class="claim-box">Claim No. ${currentData.claimNo}</div>
            </div>
        </header>
    `;
}

function buildFooter(pageNum, totalPages) {
    return `
        <footer class="footer">
            <span>Worker App ID: ${currentData.appId}</span>
            <span>Submitted: ${currentData.submitted}</span>
            <span class="page-num">Page ${pageNum} of ${totalPages}</span>
        </footer>
    `;
}

function buildRequestText() {
    return `<p class="request-text"><strong>${currentData.workerName}</strong> &nbsp;&nbsp;requested reimbursement for the following medical and/or travel expenses:</p>`;
}

function buildPrescriptionSection() {
    let items = currentData.prescriptionDrugs;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("prescription drugs");
    } else {
        content = '<table><tr><th>Drug Name</th><th>Prescription Date</th><th>Date Purchased</th><th>Healthcare Provider Name</th><th>Paid Amount</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            content += '<tr>';
            content += '<td>' + item.drugName + '</td>';
            content += '<td>' + item.prescriptionDate + '</td>';
            content += '<td>' + item.datePurchased + '</td>';
            content += '<td>' + item.provider + '</td>';
            content += '<td class="money">' + formatMoney(item.amount) + '</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Prescription Drugs</h2>' + 
           content + 
           '</section>';
}

function buildOTCSection() {
    let items = currentData.otcDrugs;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("over-the-counter drugs");
    } else {
        content = '<table><tr><th>Drug Name</th><th>Date Purchased</th><th>Paid Amount</th><th>Seller\'s Name</th><th>Reason for Purchasing</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            content += '<tr>';
            content += '<td>' + item.drugName + '</td>';
            content += '<td>' + item.datePurchased + '</td>';
            content += '<td class="money">' + formatMoney(item.amount) + '</td>';
            content += '<td>' + item.seller + '</td>';
            content += '<td>' + item.reason + '</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Over-the-Counter Drugs</h2>' + 
           content + 
           '</section>';
}

function buildSuppliesSection() {
    let items = currentData.medicalSupplies;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("medical supplies");
    } else {
        content = '<table><tr><th>Item Purchased</th><th>Date Purchased</th><th>Was this Prescribed?</th><th>Healthcare Provider Name</th><th>Paid Amount</th><th>Seller\'s Name</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            content += '<tr>';
            content += '<td>' + item.item + '</td>';
            content += '<td>' + item.date + '</td>';
            content += '<td>' + makeCheckbox(item.prescribed) + '</td>';
            content += '<td>' + item.provider + '</td>';
            content += '<td class="money">' + formatMoney(item.amount) + '</td>';
            content += '<td>' + item.seller + '</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Bandages, Braces or Other Medical Supplies</h2>' + 
           content + 
           '</section>';
}

function buildParkingSection() {
    let items = currentData.parking;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("parking expenses");
    } else {
        content = '<table><tr><th>Address of Healthcare Provider/Medical Facility</th><th>Date</th><th>Paid Amount</th><th>Meter Used?</th><th>Meter Number</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let meterNumber = item.meterNo;
            if (meterNumber === "") {
                meterNumber = "-";
            }
            
            content += '<tr>';
            content += '<td>' + item.address + '</td>';
            content += '<td>' + item.date + '</td>';
            content += '<td class="money">' + formatMoney(item.amount) + '</td>';
            content += '<td>' + makeCheckbox(item.meterUsed) + '</td>';
            content += '<td>' + meterNumber + '</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Parking for Medical Appointments</h2>' + 
           content + 
           '</section>';
}

function buildMileageSection() {
    let items = currentData.mileage;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("mileage records");
    } else {
        content = '<table><tr><th>Appointment Date</th><th>Address of Healthcare Provider/Medical Facility</th><th>Address of Workplace</th><th>Number of km (Round Trip)</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            content += '<tr>';
            content += '<td>' + item.date + '</td>';
            content += '<td>' + item.facility + '</td>';
            content += '<td>' + item.workplace + '</td>';
            content += '<td>' + item.km + ' km</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Mileage to Medical Appointments</h2>' + 
           '<p class="note">The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.</p>' + 
           content + 
           '</section>';
}

function buildBusTaxiSection() {
    let items = currentData.busTaxi;
    let content = '';
    
    if (items.length === 0) {
        content = showEmpty("bus or taxi fares");
    } else {
        content = '<table><tr><th>Appointment Date</th><th>Address of Starting Point</th><th>Address of Healthcare Provider/Medical Facility</th><th>Bus or Taxi</th><th>Total Fare Paid</th></tr>';
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let fromAddress = item.from;
            if (fromAddress === "") {
                fromAddress = "-";
            }
            
            content += '<tr>';
            content += '<td>' + item.date + '</td>';
            content += '<td>' + fromAddress + '</td>';
            content += '<td>' + item.to + '</td>';
            content += '<td>' + item.type + '</td>';
            content += '<td class="money">' + formatMoney(item.fare) + '</td>';
            content += '</tr>';
        }
        
        content += '</table>';
    }
    
    return '<section>' + 
           '<h2 class="section-title">Bus or Taxi Fare for Medical Appointments*</h2>' + 
           '<p class="note"><strong>*Note:</strong> Pre-approval is required from your WCB representative to claim taxi fares.</p>' + 
           content + 
           '</section>';
}

function buildPrivacySection() {
    return `
        <div class="privacy-box">
            I understand that the Privacy Notice applies to the personal information collected in this document.
        </div>
    `;
}


function renderPage1() {
    let html = '';
    html += buildHeader();
    html += buildRequestText();
    html += buildPrescriptionSection();
    html += buildOTCSection();
    html += buildSuppliesSection();
    html += buildParkingSection();
    html += buildMileageSection();
    html += buildFooter(1, 2);
    
    document.getElementById('page1').innerHTML = html;
}

function renderPage2() {
    let html = '';
    html += buildBusTaxiSection();
    html += buildPrivacySection();
    html += buildFooter(2, 2);
    
    document.getElementById('page2').innerHTML = html;
}

function renderAll() {
    renderPage1();
    renderPage2();
}

function loadData(type) {
    if (type === "original") {
        currentData = JSON.parse(JSON.stringify(originalData));
    } else if (type === "empty") {
        currentData = JSON.parse(JSON.stringify(emptyData));
    } else if (type === "full") {
        currentData = JSON.parse(JSON.stringify(fullData));
    }
    renderAll();
}

window.onload = function() {
    renderAll();
};