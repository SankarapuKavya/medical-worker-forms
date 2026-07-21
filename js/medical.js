/* ==========================================================
   REPORT DATA
========================================================== */

const reportData = {

    pageInfo: {
        claimNumber: "20042047",
        workerName: "Madeleine Willson",
        workerId: "Worker App ID: 712041",
        submittedDate: "Submitted: March 28, 2024 20:43",
        pageNumber: "Page 1 of 2"
    },

    prescriptionDrugs: [
        {
            drugName: "Naproxen",
            prescriptionDate: "February 28, 2024",
            purchaseDate: "February 29, 2024",
            provider: "Dr. Best",
            amount: "$20.00"
        }
    ],

    otcDrugs: [
        {
            drugName: "Advil",
            purchaseDate: "March 28, 2024",
            amount: "$8.00",
            seller: "Shoppers Drug Mart",
            reason: "Pain"
        }
    ],

    medicalSupplies: [
        {
            item: "Tensor",
            purchaseDate: "February 28, 2024",
            prescribed: "Yes",
            provider: "Dr. Best",
            amount: "$10.00",
            seller: "Shoppers Drug Mart"
        }
    ],

    parkingExpenses: [
        {
            address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
            appointmentDate: "March 28, 2024",
            amount: "$10.00",
            meterUsed: "Yes",
            meterNumber: "12245"
        }
    ],

    mileageExpenses: [
        {
            appointmentDate: "March 28, 2024",
            healthcareProvider:
                "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
            workplace:
                "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
            distance: "20 km"
        }
    ],

    busTaxi: [
        {
            appointmentDate: "March 28, 2024",
            startPoint: "",
            provider: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
            type: "Bus",
            fare: "$3.00"
        },
        {
            appointmentDate: "March 27, 2024",
            startPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada",
            provider: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
            type: "Taxi",
            fare: "$15.00"
        }
    ]

};

/* ==========================================================
   PAGE DETAILS
========================================================== */

document.getElementById("claimNumber").textContent =
    reportData.pageInfo.claimNumber;

document.getElementById("workerName").textContent =
    reportData.pageInfo.workerName;

document.getElementById("workerId").textContent =
    reportData.pageInfo.workerId;

document.getElementById("submittedDate").textContent =
    reportData.pageInfo.submittedDate;

document.getElementById("pageNumber").textContent =
    reportData.pageInfo.pageNumber;

/* ==========================================================
   PRESCRIPTION TABLE
========================================================== */

function renderPrescription() {

    const tbody = document.getElementById("prescriptionBody");

    tbody.innerHTML = "";

    reportData.prescriptionDrugs.forEach(drug => {

        tbody.innerHTML += `
        <tr>
            <td>${drug.drugName}</td>
            <td>${drug.prescriptionDate}</td>
            <td>${drug.purchaseDate}</td>
            <td>${drug.provider}</td>
            <td>${drug.amount}</td>
        </tr>
        `;

    });

}
document.getElementById("addPrescription").addEventListener("click", function () {

    const drugName = document.getElementById("drugName").value;
    const prescriptionDate = document.getElementById("prescriptionDate").value;
    const purchaseDate = document.getElementById("purchaseDate").value;
    const provider = document.getElementById("provider").value;
    const amount = document.getElementById("amount").value;

    if (!drugName || !prescriptionDate || !purchaseDate || !provider || !amount) {
        alert("Please fill all fields.");
        return;
    }

    reportData.prescriptionDrugs.push({
        drugName,
        prescriptionDate,
        purchaseDate,
        provider,
        amount
    });

    renderPrescription();

    document.getElementById("drugName").value = "";
    document.getElementById("prescriptionDate").value = "";
    document.getElementById("purchaseDate").value = "";
    document.getElementById("provider").value = "";
    document.getElementById("amount").value = "";
});

/* ==========================================================
   OTC TABLE
========================================================== */

function renderOTC() {

    const tbody = document.getElementById("otcBody");

    tbody.innerHTML = "";

    reportData.otcDrugs.forEach(drug => {

        tbody.innerHTML += `
        <tr>
            <td>${drug.drugName}</td>
            <td>${drug.purchaseDate}</td>
            <td>${drug.amount}</td>
            <td>${drug.seller}</td>
            <td>${drug.reason}</td>
        </tr>
        `;

    });

}
document.getElementById("addOTC").addEventListener("click", function () {

    const drugName = document.getElementById("otcDrugName").value;
    const purchaseDate = document.getElementById("otcPurchaseDate").value;
    const amount = document.getElementById("otcAmount").value;
    const seller = document.getElementById("otcSeller").value;
    const reason = document.getElementById("otcReason").value;

    if (!drugName || !purchaseDate || !amount || !seller || !reason) {
        alert("Please fill all fields.");
        return;
    }

    reportData.otcDrugs.push({
        drugName,
        purchaseDate,
        amount,
        seller,
        reason
    });

    renderOTC();

    document.getElementById("otcDrugName").value = "";
    document.getElementById("otcPurchaseDate").value = "";
    document.getElementById("otcAmount").value = "";
    document.getElementById("otcSeller").value = "";
    document.getElementById("otcReason").value = "";

});

/* ==========================================================
   MEDICAL SUPPLIES
========================================================== */

function renderSupplies() {

    const tbody = document.getElementById("suppliesBody");

    tbody.innerHTML = "";

    reportData.medicalSupplies.forEach(item => {

        tbody.innerHTML += `
        <tr>
            <td>${item.item}</td>
            <td>${item.purchaseDate}</td>
            <td>${item.prescribed}</td>
            <td>${item.provider}</td>
            <td>${item.amount}</td>
            <td>${item.seller}</td>
        </tr>
        `;

    });

}
document.getElementById("addSupply").addEventListener("click", function () {

    const item = document.getElementById("supplyItem").value;
    const purchaseDate = document.getElementById("supplyPurchaseDate").value;
    const prescribed = document.getElementById("prescribed").value;
    const provider = document.getElementById("supplyProvider").value;
    const amount = document.getElementById("supplyAmount").value;
    const seller = document.getElementById("supplySeller").value;

    if (!item || !purchaseDate || !prescribed || !provider || !amount || !seller) {
        alert("Please fill all fields.");
        return;
    }

    reportData.medicalSupplies.push({
        item,
        purchaseDate,
        prescribed,
        provider,
        amount,
        seller
    });

    renderSupplies();

    document.getElementById("supplyItem").value = "";
    document.getElementById("supplyPurchaseDate").value = "";
    document.getElementById("prescribed").value = "";
    document.getElementById("supplyProvider").value = "";
    document.getElementById("supplyAmount").value = "";
    document.getElementById("supplySeller").value = "";

});

/* ==========================================================
   PARKING
========================================================== */

function renderParking() {

    const tbody = document.getElementById("parkingBody");

    tbody.innerHTML = "";

    reportData.parkingExpenses.forEach(item => {

        tbody.innerHTML += `
        <tr>
            <td>${item.address}</td>
            <td>${item.appointmentDate}</td>
            <td>${item.amount}</td>
            <td>${item.meterUsed}</td>
            <td>${item.meterNumber}</td>
        </tr>
        `;

    });

}
document.getElementById("addParking").addEventListener("click", function () {

    const address = document.getElementById("parkingAddress").value;
    const appointmentDate = document.getElementById("parkingDate").value;
    const amount = document.getElementById("parkingAmount").value;
    const meterUsed = document.getElementById("meterUsed").value;
    const meterNumber = document.getElementById("meterNumber").value;

    if (!address || !appointmentDate || !amount || !meterUsed || !meterNumber) {
        alert("Please fill all fields.");
        return;
    }

    reportData.parkingExpenses.push({
        address,
        appointmentDate,
        amount,
        meterUsed,
        meterNumber
    });

    renderParking();

    document.getElementById("parkingAddress").value = "";
    document.getElementById("parkingDate").value = "";
    document.getElementById("parkingAmount").value = "";
    document.getElementById("meterUsed").value = "";
    document.getElementById("meterNumber").value = "";

});

/* ==========================================================
   MILEAGE
========================================================== */

function renderMileage() {

    const tbody = document.getElementById("mileageBody");

    tbody.innerHTML = "";

    reportData.mileageExpenses.forEach(item => {

        tbody.innerHTML += `
        <tr>
            <td>${item.appointmentDate}</td>
            <td>${item.healthcareProvider}</td>
            <td>${item.workplace}</td>
            <td>${item.distance}</td>
        </tr>
        `;

    });

}
document.getElementById("addMileage").addEventListener("click", function () {

    const appointmentDate = document.getElementById("mileageDate").value;
    const healthcareProvider = document.getElementById("healthcareAddress").value;
    const workplace = document.getElementById("workplaceAddress").value;
    const distance = document.getElementById("roundTripKm").value;

    if (!appointmentDate || !healthcareProvider || !workplace || !distance) {
        alert("Please fill all fields.");
        return;
    }

    reportData.mileageExpenses.push({
        appointmentDate,
        healthcareProvider,
        workplace,
        distance
    });

    renderMileage();

    document.getElementById("mileageDate").value = "";
    document.getElementById("healthcareAddress").value = "";
    document.getElementById("workplaceAddress").value = "";
    document.getElementById("roundTripKm").value = "";

});
/* ==========================================================
   BUS / TAXI
========================================================== */

function createBusTaxiTable() {

    const table = document.getElementById("busTaxiTable");

    table.innerHTML = `
    <tr>
        <th>Appointment Date</th>
        <th>Address of Starting Point</th>
        <th>Address of Healthcare Provider/Medical Facility</th>
        <th>Bus or Taxi (indicate one)</th>
        <th>Total Fare Paid</th>
    </tr>

    ${reportData.busTaxi.map(item => `
    <tr>
        <td>${item.appointmentDate}</td>
        <td>${item.startPoint}</td>
        <td>${item.provider}</td>
        <td>${item.type}</td>
        <td>${item.fare}</td>
    </tr>
    `).join("")}
    `;

}
document.getElementById("addBusTaxi").addEventListener("click", function () {

    const appointmentDate = document.getElementById("busTaxiDate").value;
    const startPoint = document.getElementById("startPoint").value;
    const provider = document.getElementById("providerAddress").value;
    const type = document.getElementById("transportType").value;
    const fare = document.getElementById("farePaid").value;

    if (!appointmentDate || !provider || !type || !fare) {
        alert("Please fill all required fields.");
        return;
    }

    reportData.busTaxi.push({
        appointmentDate,
        startPoint,
        provider,
        type,
        fare
    });

    createBusTaxiTable();

    document.getElementById("busTaxiDate").value = "";
    document.getElementById("startPoint").value = "";
    document.getElementById("providerAddress").value = "";
    document.getElementById("transportType").value = "";
    document.getElementById("farePaid").value = "";

});
/* ==========================================================
   PAGE 2 FOOTER
========================================================== */

document.getElementById("workerIdPage2").textContent =
    reportData.pageInfo.workerId;

document.getElementById("submittedDatePage2").textContent =
    reportData.pageInfo.submittedDate;

/* ==========================================================
   INITIALIZE
========================================================== */

renderPrescription();
renderOTC();
renderSupplies();
renderParking();
renderMileage();
createBusTaxiTable();