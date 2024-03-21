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
});