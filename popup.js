
//document.addEventListener('DOMContentLoaded', function(){document.querySelector('#button').addEventListener('click',onclick,false)



    let selectedFile;
    let clientes = new Array();

document.getElementById('input').addEventListener("change", (event)=>{
    selectedFile = event.target.files[0];
});



document.getElementById('button').addEventListener("click", ()=>{
    
    

    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
            //console.log(event.target.result);
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            //console.log(workbook);


            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);  
                //console.log(rowObject);
                
                //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4);
                clientes.push(rowObject);
            });

            
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        
        chrome.tabs.sendMessage(tabs[0].id,JSON.stringify(clientes))
    })


        }
    }

    

});


document.getElementById('buttonFalso').addEventListener("click", ()=>{

    document.getElementById('input').click();
 
 });

//}, false)








