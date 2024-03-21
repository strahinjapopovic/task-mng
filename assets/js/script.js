/* JavaScript Document */
/* =============================================================
 	First Name			: 	Strahinja     					    
 	Last Name			: 	Popovic					            
 	Developer Name      : 	CodexDeveloper			        
 	WebMaster Email		:	spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript CODE ************************************************************************* */
/* ***************************************************************************************** */
const X_BTN = document.querySelector(".close");
const ADD_BTN = document.querySelector("#submit");
const CANCEL_BTN = document.querySelector(".btn-secondary");
const ADD_INPUT_INTER = document.querySelector(".btn-success");
const DEL_BTN_0 = document.querySelector("del-0");
const DEL_BTN_1 = document.querySelector("del-1");
const DEL_BTN_2 = document.querySelector("del-2");
const DEL_BTN_3 = document.querySelector("del-3");
const DEL_BTN_4 = document.querySelector("del-4");
const DEL_BTN_5 = document.querySelector("del-5");

$(document).ready(function () {
    if(localStorage.getItem("task") == null) {
        document.getElementById("task-div-0").style.display = "none";
        document.getElementById("task-tbl-0").style.visibility = "hidden";
        document.getElementById("del-0").style.visibility = "hidden";

        document.getElementById("task-div-1").style.display = "none";
        document.getElementById("task-tbl-1").style.visibility = "hidden";
        document.getElementById("del-1").style.visibility = "hidden";

        document.getElementById("task-div-2").style.display = "none";
        document.getElementById("task-tbl-2").style.visibility = "hidden";
        document.getElementById("del-2").style.visibility = "hidden";

        document.getElementById("task-div-3").style.display = "none";
        document.getElementById("task-tbl-3").style.visibility = "hidden";
        document.getElementById("del-3").style.visibility = "hidden";

        document.getElementById("task-div-4").style.display = "none";
        document.getElementById("task-tbl-4").style.visibility = "hidden";
        document.getElementById("del-4").style.visibility = "hidden";

        document.getElementById("task-div-5").style.display = "none";
        document.getElementById("task-tbl-5").style.visibility = "hidden";
        document.getElementById("del-5").style.visibility = "hidden";
    }
    else {
        if (JSON.parse(localStorage.getItem("task")).length == 1) {

            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);
        }
        if (JSON.parse(localStorage.getItem("task")).length == 2) {

            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
        }
        if (JSON.parse(localStorage.getItem("task")).length == 3) {
            
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);
        }
        if (JSON.parse(localStorage.getItem("task")).length == 4) {
            
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[3]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[3]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[3]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);

            document.getElementById("task-div-3").style.display = "block";
            document.getElementById("task-tbl-3").style.display = "visible";
            document.getElementById("del-3").style.display = "visible";

            let TITLE_3 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_3 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_3 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_3 = document.querySelector("#title-3");
            const selectDate_3 = document.querySelector("#date-3");
            const selectDesc_3 = document.querySelector("#desc-3");

            const pTitle_3 = document.createElement("p");
            const pDate_3 = document.createElement("span");
            const pDesc_3 = document.createElement("p");

            pTitle_3.textContent = TITLE_3;
            selectTitle_3.appendChild(pTitle_3);
            pDate_3.textContent = ` ( ${DATE_3} )`;
            selectDate_3.appendChild(pDate_3);
            pDesc_3.textContent = `{ ${DESC_3} }`;
            selectDesc_3.appendChild(pDesc_3);
        }
        if (JSON.parse(localStorage.getItem("task")).length == 5) {
            
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[4]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[4]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[4]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[3]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[3]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[3]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);

            document.getElementById("task-div-3").style.display = "block";
            document.getElementById("task-tbl-3").style.display = "visible";
            document.getElementById("del-3").style.display = "visible";

            let TITLE_3 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_3 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_3 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_3 = document.querySelector("#title-3");
            const selectDate_3 = document.querySelector("#date-3");
            const selectDesc_3 = document.querySelector("#desc-3");

            const pTitle_3 = document.createElement("p");
            const pDate_3 = document.createElement("span");
            const pDesc_3 = document.createElement("p");

            pTitle_3.textContent = TITLE_3;
            selectTitle_3.appendChild(pTitle_3);
            pDate_3.textContent = ` ( ${DATE_3} )`;
            selectDate_3.appendChild(pDate_3);
            pDesc_3.textContent = `{ ${DESC_3} }`;
            selectDesc_3.appendChild(pDesc_3);

            document.getElementById("task-div-4").style.display = "block";
            document.getElementById("task-tbl-4").style.display = "visible";
            document.getElementById("del-4").style.display = "visible";

            let TITLE_4 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_4 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_4 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_4 = document.querySelector("#title-4");
            const selectDate_4 = document.querySelector("#date-4");
            const selectDesc_4 = document.querySelector("#desc-4");

            const pTitle_4 = document.createElement("p");
            const pDate_4 = document.createElement("span");
            const pDesc_4= document.createElement("p");

            pTitle_4.textContent = TITLE_4;
            selectTitle_4.appendChild(pTitle_4);
            pDate_4.textContent = ` ( ${DATE_4} )`;
            selectDate_4.appendChild(pDate_4);
            pDesc_4.textContent = `{ ${DESC_4} }`;
            selectDesc_4.appendChild(pDesc_4);
        }
        if (JSON.parse(localStorage.getItem("task")).length == 6) {
            
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[5]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[5]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[5]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[4]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[4]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[4]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[3]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[3]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[3]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);

            document.getElementById("task-div-3").style.display = "block";
            document.getElementById("task-tbl-3").style.display = "visible";
            document.getElementById("del-3").style.display = "visible";

            let TITLE_3 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_3 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_3 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_3 = document.querySelector("#title-3");
            const selectDate_3 = document.querySelector("#date-3");
            const selectDesc_3 = document.querySelector("#desc-3");

            const pTitle_3 = document.createElement("p");
            const pDate_3 = document.createElement("span");
            const pDesc_3 = document.createElement("p");

            pTitle_3.textContent = TITLE_3;
            selectTitle_3.appendChild(pTitle_3);
            pDate_3.textContent = ` ( ${DATE_3} )`;
            selectDate_3.appendChild(pDate_3);
            pDesc_3.textContent = `{ ${DESC_3} }`;
            selectDesc_3.appendChild(pDesc_3);

            document.getElementById("task-div-4").style.display = "block";
            document.getElementById("task-tbl-4").style.display = "visible";
            document.getElementById("del-4").style.display = "visible";

            let TITLE_4 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_4 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_4 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_4 = document.querySelector("#title-4");
            const selectDate_4 = document.querySelector("#date-4");
            const selectDesc_4 = document.querySelector("#desc-4");

            const pTitle_4 = document.createElement("p");
            const pDate_4 = document.createElement("span");
            const pDesc_4= document.createElement("p");

            pTitle_4.textContent = TITLE_4;
            selectTitle_4.appendChild(pTitle_4);
            pDate_4.textContent = ` ( ${DATE_4} )`;
            selectDate_4.appendChild(pDate_4);
            pDesc_4.textContent = `{ ${DESC_4} }`;
            selectDesc_4.appendChild(pDesc_4);

            document.getElementById("task-div-5").style.display = "block";
            document.getElementById("task-tbl-5").style.display = "visible";
            document.getElementById("del-5").style.display = "visible";

            let TITLE_5 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_5 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_5 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_5 = document.querySelector("#title-5");
            const selectDate_5 = document.querySelector("#date-5");
            const selectDesc_5 = document.querySelector("#desc-5");

            const pTitle_5 = document.createElement("p");
            const pDate_5 = document.createElement("span");
            const pDesc_5= document.createElement("p");

            pTitle_5.textContent = TITLE_5;
            selectTitle_5.appendChild(pTitle_5);
            pDate_5.textContent = ` ( ${DATE_5} )`;
            selectDate_5.appendChild(pDate_5);
            pDesc_5.textContent = `{ ${DESC_5} }`;
            selectDesc_5.appendChild(pDesc_5);
        }
        else if(JSON.parse(localStorage.getItem("task")).length == 6) {
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[4]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[4]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[4]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[3]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[3]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[3]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);

            document.getElementById("task-div-3").style.display = "block";
            document.getElementById("task-tbl-3").style.display = "visible";
            document.getElementById("del-3").style.display = "visible";

            let TITLE_3 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_3 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_3 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_3 = document.querySelector("#title-3");
            const selectDate_3 = document.querySelector("#date-3");
            const selectDesc_3 = document.querySelector("#desc-3");

            const pTitle_3 = document.createElement("p");
            const pDate_3 = document.createElement("span");
            const pDesc_3 = document.createElement("p");

            pTitle_3.textContent = TITLE_3;
            selectTitle_3.appendChild(pTitle_3);
            pDate_3.textContent = ` ( ${DATE_3} )`;
            selectDate_3.appendChild(pDate_3);
            pDesc_3.textContent = `{ ${DESC_3} }`;
            selectDesc_3.appendChild(pDesc_3);

            document.getElementById("task-div-4").style.display = "block";
            document.getElementById("task-tbl-4").style.display = "visible";
            document.getElementById("del-4").style.display = "visible";

            let TITLE_4 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_4 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_4 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_4 = document.querySelector("#title-4");
            const selectDate_4 = document.querySelector("#date-4");
            const selectDesc_4 = document.querySelector("#desc-4");

            const pTitle_4 = document.createElement("p");
            const pDate_4 = document.createElement("span");
            const pDesc_4= document.createElement("p");

            pTitle_4.textContent = TITLE_4;
            selectTitle_4.appendChild(pTitle_4);
            pDate_4.textContent = ` ( ${DATE_4} )`;
            selectDate_4.appendChild(pDate_4);
            pDesc_4.textContent = `{ ${DESC_4} }`;
            selectDesc_4.appendChild(pDesc_4);
        }
        if (JSON.parse(localStorage.getItem("task")).length > 6) {
            
            document.getElementById("task-div-0").style.display = "block";
            document.getElementById("task-tbl-0").style.visibility = "visible";
            document.getElementById("del-0").style.visibility = "visible";

            let TITLE_0 = JSON.parse(localStorage.getItem('task'))[5]["title"];
            let DATE_0 = JSON.parse(localStorage.getItem('task'))[5]["date"];
            let DESC_0 = JSON.parse(localStorage.getItem('task'))[5]["desc"];

            const selectTitle_0 = document.querySelector("#title-0");
            const selectDate_0 = document.querySelector("#date-0");
            const selectDesc_0 = document.querySelector("#desc-0");

            const pTitle_0 = document.createElement("p");
            const pDate_0 = document.createElement("span");
            const pDesc_0 = document.createElement("p");

            pTitle_0.textContent = TITLE_0;
            selectTitle_0.appendChild(pTitle_0);
            pDate_0.textContent = ` ( ${DATE_0} )`;
            selectDate_0.appendChild(pDate_0);
            pDesc_0.textContent = `{ ${DESC_0} }`;
            selectDesc_0.appendChild(pDesc_0);

            document.getElementById("task-div-1").style.display = "block";
            document.getElementById("task-tbl-1").style.visibility = "visible";
            document.getElementById("del-1").style.visibility = "visible";

            let TITLE_1 = JSON.parse(localStorage.getItem('task'))[4]["title"];
            let DATE_1 = JSON.parse(localStorage.getItem('task'))[4]["date"];
            let DESC_1 = JSON.parse(localStorage.getItem('task'))[4]["desc"];

            const selectTitle_1 = document.querySelector("#title-1");
            const selectDate_1 = document.querySelector("#date-1");
            const selectDesc_1 = document.querySelector("#desc-1");

            const pTitle_1 = document.createElement("p");
            const pDate_1 = document.createElement("span");
            const pDesc_1 = document.createElement("p");

            pTitle_1.textContent = TITLE_1;
            selectTitle_1.appendChild(pTitle_1);
            pDate_1.textContent = ` ( ${DATE_1} )`;
            selectDate_1.appendChild(pDate_1);
            pDesc_1.textContent = `{ ${DESC_1} }`;
            selectDesc_1.appendChild(pDesc_1);
            
            document.getElementById("task-div-2").style.display = "block";
            document.getElementById("task-tbl-2").style.display = "visible";
            document.getElementById("del-2").style.display = "visible";

            let TITLE_2 = JSON.parse(localStorage.getItem('task'))[3]["title"];
            let DATE_2 = JSON.parse(localStorage.getItem('task'))[3]["date"];
            let DESC_2 = JSON.parse(localStorage.getItem('task'))[3]["desc"];

            const selectTitle_2 = document.querySelector("#title-2");
            const selectDate_2 = document.querySelector("#date-2");
            const selectDesc_2 = document.querySelector("#desc-2");

            const pTitle_2 = document.createElement("p");
            const pDate_2 = document.createElement("span");
            const pDesc_2 = document.createElement("p");

            pTitle_2.textContent = TITLE_2;
            selectTitle_2.appendChild(pTitle_2);
            pDate_2.textContent = ` ( ${DATE_2} )`;
            selectDate_2.appendChild(pDate_2);
            pDesc_2.textContent = `{ ${DESC_2} }`;
            selectDesc_2.appendChild(pDesc_2);

            document.getElementById("task-div-3").style.display = "block";
            document.getElementById("task-tbl-3").style.display = "visible";
            document.getElementById("del-3").style.display = "visible";

            let TITLE_3 = JSON.parse(localStorage.getItem('task'))[2]["title"];
            let DATE_3 = JSON.parse(localStorage.getItem('task'))[2]["date"];
            let DESC_3 = JSON.parse(localStorage.getItem('task'))[2]["desc"];

            const selectTitle_3 = document.querySelector("#title-3");
            const selectDate_3 = document.querySelector("#date-3");
            const selectDesc_3 = document.querySelector("#desc-3");

            const pTitle_3 = document.createElement("p");
            const pDate_3 = document.createElement("span");
            const pDesc_3 = document.createElement("p");

            pTitle_3.textContent = TITLE_3;
            selectTitle_3.appendChild(pTitle_3);
            pDate_3.textContent = ` ( ${DATE_3} )`;
            selectDate_3.appendChild(pDate_3);
            pDesc_3.textContent = `{ ${DESC_3} }`;
            selectDesc_3.appendChild(pDesc_3);

            document.getElementById("task-div-4").style.display = "block";
            document.getElementById("task-tbl-4").style.display = "visible";
            document.getElementById("del-4").style.display = "visible";

            let TITLE_4 = JSON.parse(localStorage.getItem('task'))[1]["title"];
            let DATE_4 = JSON.parse(localStorage.getItem('task'))[1]["date"];
            let DESC_4 = JSON.parse(localStorage.getItem('task'))[1]["desc"];

            const selectTitle_4 = document.querySelector("#title-4");
            const selectDate_4 = document.querySelector("#date-4");
            const selectDesc_4 = document.querySelector("#desc-4");

            const pTitle_4 = document.createElement("p");
            const pDate_4 = document.createElement("span");
            const pDesc_4= document.createElement("p");

            pTitle_4.textContent = TITLE_4;
            selectTitle_4.appendChild(pTitle_4);
            pDate_4.textContent = ` ( ${DATE_4} )`;
            selectDate_4.appendChild(pDate_4);
            pDesc_4.textContent = `{ ${DESC_4} }`;
            selectDesc_4.appendChild(pDesc_4);

            document.getElementById("task-div-5").style.display = "block";
            document.getElementById("task-tbl-5").style.display = "visible";
            document.getElementById("del-5").style.display = "visible";

            let TITLE_5 = JSON.parse(localStorage.getItem('task'))[0]["title"];
            let DATE_5 = JSON.parse(localStorage.getItem('task'))[0]["date"];
            let DESC_5 = JSON.parse(localStorage.getItem('task'))[0]["desc"];

            const selectTitle_5 = document.querySelector("#title-5");
            const selectDate_5 = document.querySelector("#date-5");
            const selectDesc_5 = document.querySelector("#desc-5");

            const pTitle_5 = document.createElement("p");
            const pDate_5 = document.createElement("span");
            const pDesc_5= document.createElement("p");

            pTitle_5.textContent = TITLE_5;
            selectTitle_5.appendChild(pTitle_5);
            pDate_5.textContent = ` ( ${DATE_5} )`;
            selectDate_5.appendChild(pDate_5);
            pDesc_5.textContent = `{ ${DESC_5} }`;
            selectDesc_5.appendChild(pDesc_5);

            let helper = document.querySelector("#helper-error");
            let message = document.createElement("p");
            message.textContent = "---\nNo more then 6 Cards at once!\n---";
            helper.appendChild(message);
        }
    }

    ADD_INPUT_INTER.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $('#formModal').modal("show");
        $("#datepicker").datepicker();
    });

    CANCEL_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $('#formModal').modal("hide");
    });

    X_BTN.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $('#formModal').modal("hide");
    });

    ADD_BTN.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        $("#datepicker").datepicker();

        let title = document.querySelector("#task").value;
        let date = document.querySelector("#datepicker").value;
        let desc = document.querySelector("#desc").value;

        let errorTitleID = document.querySelector("#error-title");
        let errorDate = document.querySelector("#error-date");
        let errorDesc = document.querySelector("#error-desc");

        if (!title && !date && !desc) {
            errorTitleID.textContent = "Insert task title";
            errorDate.textContent = "Pick up a date";
            errorDesc.textContent = "Insert task description";
        }
        if (!title == false && !date && !desc) {
            errorTitleID.remove();
            errorDate.textContent = "Pick up a date";
            errorDesc.textContent = "Insert task description";
        }
        if (!title == false && !date == false && !desc) {
            errorDate.remove();
            errorTitleID.remove();
            errorDesc.textContent = "Insert task description";
        }
        if (!title == false && !date && !desc == false) {
            errorTitleID.remove();
            errorDate.textContent = "Pick up a date";
            errorDesc.remove();
        }
        if (!title && !date == false && !desc == false) {
            errorTitleID.textContent = "Insert task title";
            errorDate.remove();
            errorDesc.remove();
        }
        if (!title && !date == false && !desc) {
            errorTitleID.textContent = "Insert task title";
            errorDate.remove();
            errorDesc.textContent = "Insert task description";
        }
        if (!title == false && !date == false && !desc == false) {

            let DATA_OBJ = {
                title: title,
                date: date,
                desc: desc
            };

            let objArray = [];
            objArray.push(DATA_OBJ);
            objArray = objArray.concat(JSON.parse(localStorage.getItem('task')) || []);

            localStorage.setItem("task", JSON.stringify(objArray));

            $('#formModal').modal("hide");

            window.location.reload();
        }
    });

    $(function () {
        $("#task-div-0").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-0",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });

    $(function () {
        $("#task-div-1").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-1",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });

    $(function () {
        $("#task-div-2").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-2",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });

    $(function () {
        $("#task-div-3").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-3",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });

    $(function () {
        $("#task-div-4").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-4",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });

    $(function () {
        $("#task-div-5").draggable({
            revert: false,
            revertDuration: 0,
            containment: "#container",
            grid: [40, 40]
        });

        $("#todo-cards").droppable({
            accept: "#task-div-5",
            tolerance: "fit",
            drop: function (event, ui) {
                event.preventDefault();
                event.stopPropagation();
                $(ui.draggable).appendTo($(this));
            }
        });
    });
});