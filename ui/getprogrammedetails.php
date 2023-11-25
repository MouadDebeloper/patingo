<html>
    <head>
        <title>Programme Details</title>
        <link href= "../css/getprogrammedetails.css" rel="stylesheet"> </link>
        <link href="../global/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="../global//js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </head>
    <body>
        
        <main>
            <h1 class="heading">
                    PROGRAMME DETAILS
            </h1>
            
            <div id="contentdiv" class="test1">
             
        
            </div>
        </main>

        <div class="modal" id="mdlpg">

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        PROGRAMME DETAILS
                        <button class="btn btn-danger"  data-bs-dismiss="modal">X</button>
                    </div>
                    <div class="modal-body">
                        <div class="myinputelement">
                            <label>CODE</label>
                            <input id="txtcode" type="text">
                        <div>
                        <div class="myinputelement">
                            <label>Title</label>
                            <input id="txttitle" type="text">
                        <div>
                        <div class="myinputelement">
                            <label>Number Of Semester</label>
                            <input id="txtnos" type="text">
                        <div>
                        <div class="myinputelement">
                            <label>Department</label>
                            <select id="select_department">
                            </select>
                        <div>
                        <div class="myinputelement">
                            <label>Graduate Level</label>
                            <input  id="txtgl" type="text">
                        <div>
                        <div class="myinputelement">
                            <label>Technical Level</label>
                            <input  id="txttl" type="text">
                        <div>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-success" id="btnSave" >SAVE</button>
                    <button class="btn btn-danger"  data-bs-dismiss="modal">CANCEL</button>
                    </div>
                </div>
            </div>

        </div>

        <div>
            
            <!--script src="../global/jquery.js"></script-->
            <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
            <script src="../js/getprogrammedetails.js"></script>
           
        </div>

    </body>
</html>