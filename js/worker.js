/* ==========================================
   WORKER PROGRESS REPORT DATA
========================================== */

const pageData = {

    // Header
    claimNumber: "20042047",
    workerName: "Madeleine Willson",
    workerAppId: "712041",
    submittedDate: "March 19, 2024 19:21",

    // Return to Work
    returnDate: "March 15, 2024",
    expectedReturnDate: "",
    returnComments: "Terrible. Testing Testing",
    concerns: "",
    employerContact: "",
    employerContactDate: "",

    // Recovery
    recoveryComments: "",

    // Medical Treatment
    providerType: "",
    lastTreatmentDate: "",
    lastProvider: "",
    nextTreatmentDate: "",
    nextProvider: "",
    frequency: "",
    medicationName: "",
    exerciseList: "",

    // Other Information
    otherInformation: "No info Testing Testing"

};


/* ==========================================
   Helper Function
========================================== */

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value || "";
    }
}


/* ==========================================
   HEADER
========================================== */

setText("claimNumber", pageData.claimNumber);
setText("workerName", pageData.workerName);


/* ==========================================
   RETURN TO WORK
========================================== */

setText("returnDateValue", pageData.returnDate);
setText("expectedReturnDate", pageData.expectedReturnDate);
setText("returnComments", pageData.returnComments);
setText("concernsText", pageData.concerns);
setText("contactName", pageData.employerContact);
setText("contactDate", pageData.employerContactDate);


/* ==========================================
   RECOVERY
========================================== */

setText("recoveryComments", pageData.recoveryComments);


/* ==========================================
   MEDICAL TREATMENT
========================================== */

setText("providerType", pageData.providerType);
setText("lastTreatmentDate", pageData.lastTreatmentDate);
setText("lastProvider", pageData.lastProvider);
setText("nextTreatmentDate", pageData.nextTreatmentDate);
setText("nextProvider", pageData.nextProvider);
setText("frequency", pageData.frequency);
setText("medicationName", pageData.medicationName);
setText("exerciseList", pageData.exerciseList);


/* ==========================================
   OTHER INFORMATION
========================================== */

setText("otherInformation", pageData.otherInformation);


/* ==========================================
   FOOTERS
========================================== */

/* ==========================================
   FOOTERS
========================================== */

// Page 1
setText("workerId", pageData.workerAppId);

// Pages 2 & 3
document.querySelectorAll("#workerAppId").forEach(el => {
    el.textContent = pageData.workerAppId;
});

// All pages
document.querySelectorAll("#submittedDate").forEach(el => {
    el.textContent = pageData.submittedDate;
});

// OR (Recommended)
// Use this only if you change HTML to:
//
// <span class="workerAppId"></span>
// <span class="submittedDate"></span>
//
// document.querySelectorAll(".workerAppId").forEach(el => {
//     el.textContent = pageData.workerAppId;
// });
//
// document.querySelectorAll(".submittedDate").forEach(el => {
//     el.textContent = pageData.submittedDate;
// });