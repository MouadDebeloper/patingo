
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
        <td><button class="btn btn-primary">EDIT</button></td>
        <td><button class="btn btn-danger">DELETE</button></td>

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
        x = x + `<option value=${result[i].did}>${result[i].dtitle}</option>`
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
            alert("Error");
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
            alert("Error");
        }

    })
}

$(function(){ 
    getprogrammedetails();
    loadDepartments();

    $(document).on("click","#btnAddNew",function(){
           $("#mdlpg").modal('show');
    });

    $(document).on("click","#btnSave",function(){
        let code = ("#txtcode").val();
        let title = ("#txttitle").val();
        let nos = ("#txtnos").val();
        let department = ("#select_department").val();
        let gl = ("#txtgl").val();   
        let tl = ("#txttl").val();  
        if(code!='' && title!='' && nos!=''&& department>=0 && gl!='' && tl!=''){
                alert("good");
        }
        else {
                 alert("not good");
        }
    });




}); 


