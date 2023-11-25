
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



/*
pd.id AS pid,
        pd.code AS pcode,
        pd.title AS ptitle,
        pd.np_of_sem AS nos,
        pd.graduation_level AS gl,
        pd.technical_level AS tl,
        pd.department_id AS did,
        dd.title AS dtitle,
        dd.code AS dcode


    let d = `
    
  

        </tbody>
    </table>
    `;

    return x;
}

*/






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
        data:{a:"21",b:"flower",action1:"getprogrammedetails"},
        beforeSend:function(){

        },
        success: function(result){
      
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
}); 


