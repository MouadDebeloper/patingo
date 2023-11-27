function showSuccessAlert(message) {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        timer: 2000, // Display alert for 2 seconds
        showConfirmButton: false
    });
}
function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message
    });
}


function getHtml(result){
    
    let x = ``;
    x = x + `<div><button class="btn btn-primary btnadd" id="btnAddNew"> ADD NEW </button></div>`;
    x = x + `<table class="table table-striped">`;
    let i=0;
    for(i=0;i<result.length;i++){
        if(i==0){
            x=x+`<thead>
            <th>SLNO</th><th>CODE</th><th>TITLE</th><th>DEPT</th> 
            <th>#SEM</th><th>GRDIN_LEVEL</th><th>TECH_LVL</th>
            </thead>
            <tbody>
            `;

        }
        x=x+`<tr>
        <td>${(i+1)}</td>
        <td>${result[i]['pcode']}</td>
        <td>${result[i]['ptitle']}</td>
        <td>${result[i]['dcode']}</td>
        <td>${result[i]['nos']}</td>
        <td>${result[i]['gl']}</td>
        <td>${result[i]['tl']}</td>
        <td><button class="btn btn-primary btnEdit" data-details='${JSON.stringify(result[i])}'>EDIT</button></td>
        <td><button class="btn btn-danger btnDelete"  data-details='${JSON.stringify(result[i])}'>DELETE</button></td>

        </tr>`;
    }
    x=x+`</tbody></table>`;

    return x;

}




function getDepartmentHtml(result){
    let x =``;
    x=x+`<option value=-1>SELECT ONE</option>`;
    let i=0;
    for(i=0;i<result.length;i++){
             x = x + `<option value=${result[i].did}>${result[i].dtitle}</option>`;
    }
    return x;
}




//Load the programmes 

function getprogrammedetails(){
    {
    $.ajax({
        url: "../ajax/getprogrammedetailsajax.php"  ,
        type: "POST",
        dataType: "JSON",
        data:{a:"21",b:"flower",action1:"getprogrammedetails"},
        beforeSend:function(){

        },
        success: function(result){
            let htmlContent = getHtml(result);
            $("#contentdiv").html(htmlContent);
        },
        error: function(){
            showErrorAlert("Error");
        }

    })
    }
}

//Load the departments 
function loadDepartments(){
    $.ajax({
        url: "../ajax/getprogrammedetailsajax.php"  ,
        type: "POST",
        dataType: "JSON",
        data:{a:"21",b:"flower",action1:"getdepartments"},
        beforeSend:function(){

        },
        success: function(result){
            let departmentsHtmlContent = getDepartmentHtml(result);
            $("#select_department").html(departmentsHtmlContent);
        },
        error: function(){
            showErrorAlert("Error please contact administrator");
        }

    })
}



function pushtotheserver(code,title,nos,department,gl,tl){

    $.ajax({
        url: "../ajax/getprogrammedetailsajax.php"  ,
        type: "POST",
        dataType: "JSON",
        data:{code:code,title:title,nos:nos,department:department,gl:gl,tl:tl,action1:"saveprogrammedetails"},
        beforeSend:function(){

        },
        success: function(result){
            let x = JSON.stringify(result);
            if(x=="0"){
   
            }
            else{
                showSuccessAlert("Programme Added");
                $("#txtcode").val("");
                $("#txttitle").val("");
                $("#txtnos").val("");
                $("#select_department").val("");
                $("#txtgl").val("");   
                $("#txttl").val("");
                $("#mdlpg").modal('toggle');
                
                getprogrammedetails();

            }
        },
        error: function(){
            showErrorAlert("Error");
        }

    })
}

function  updateprogramme(id,code,title,nos,department,gl,tl) {

    $.ajax({
        url: "../ajax/getprogrammedetailsajax.php"  ,
        type: "POST",
        dataType: "JSON",
        data:{id:id,code:code,title:title,nos:nos,department:department,gl:gl,tl:tl,action1:"editprogrammedetails"},
        beforeSend:function(){  

        },
        success: function(result){
            let x = JSON.stringify(result);
            if(x=="0"){
                showErrorAlert("Plase check all the fields");
            }
            else{
                showSuccessAlert("Programme Edited");
                $("#txtcode").val("");
                $("#txttitle").val("");
                $("#txtnos").val("");
                $("#select_department").val("");
                $("#txtgl").val("");   
                $("#txttl").val("");
                $("#mdlpg").modal('toggle');
                
                getprogrammedetails();

            }
        },
        error: function(){
            showErrorAlert("Error");
        }

    });
}

function removeprogramme(id){
    $.ajax({
        url: "../ajax/getprogrammedetailsajax.php"  ,
        type: "POST",
        dataType: "JSON",
        data:{id:id,action1:"deleteprogrammedetails"},
        beforeSend:function(){  
            
        },
        success: function(result){
            let x = JSON.stringify(result);
            if(x=="0"){
                showErrorAlert("Programme Not Deleted");
            }
            else{
                showSuccessAlert("Programme Deleted");
                               
                getprogrammedetails();

            }
        },
        error: function(){
            showErrorAlert("Error");
        }

    });
}

$(function(){ 


    getprogrammedetails();

    loadDepartments();

    $(document).on("click","#btnAddNew",function(){
           $("#mdlpg").modal('show');
           $("#flag").val("NEW");
    });

    $(document).on("click","#btnSave",function(){
        let code = $("#txtcode").val();
        let title = $("#txttitle").val();
        let nos = $("#txtnos").val();
        let department = $("#select_department").val();
        let gl = $("#txtgl").val();   
        let tl = $("#txttl").val();  
        let id = $("#pid").val();
        if(code!='' && title!='' && nos>0 && department>=0 && gl!='' && tl!=''){
            if($("#flag").val()=="NEW")
            {
                pushtotheserver(code,title,nos,department,gl,tl);
            }else{
                updateprogramme(id,code,title,nos,department,gl,tl);
            }
                
        }
        else {
            showErrorAlert("Please fill all the inputs");
        }
    });

    $(document).on("click",".btnEdit",function(){


        $("#flag").val("Edit")
        $("#mdlpg").modal('show');


        let details = $(this).data("details");

        $("#txtcode").val(details["pcode"]);
        $("#txttitle").val(details["ptitle"]);
        $("#txtnos").val(details["nos"]);
        $("#select_department").val(details["did"]);
        $("#txtgl").val(details["gl"]);
        $("#txttl").val(details["tl"]);
        $("#pid").val(details["pid"]);

    });


    $(document).on("click",".btnDelete",function(){
            //let details = $(this).data("details")["pid"]    

            Swal.fire({
                title: 'Deleting Programme',
                text: 'Are you sure ?',
                icon: 'warning', // You can use 'info', 'success', 'warning', 'error', or 'question'
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                reverseButtons: true, // Swap the positions of the confirm and cancel buttons
            }).then((result) => {
                if (result.isConfirmed) {
                    // The user clicked the confirm button
                    removeprogramme($(this).data("details")["pid"]);
                    Swal.fire('Confirmed', 'You clicked the confirm button!', 'success');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // The user clicked the cancel button
                    //Swal.fire('Cancelled', 'You clicked the cancel button!', 'error');
                }
            });
            
          

    });

    $(document).on("keydown", "#txtnos", function (e) {
        // Allow: backspace, delete, tab, escape, enter, and '.' for negative numbers
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 189]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
    
        // Ensure that it is a number and stop the keypress if not
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    
        // Check if the entered value is within the specified range (e.g., between 10 and 100)
        var inputValue = parseInt($(this).val() + String.fromCharCode(e.keyCode));
        var minRange = 1;
        var maxRange = 10;
    
        if (isNaN(inputValue) || inputValue < minRange || inputValue > maxRange) {
            e.preventDefault();
        }
    
    });
    
    

}); 


