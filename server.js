	var express = require('express'); 
    var app = express(); 
 var PRODUCT_IMAGE_PATH = "https://almudabirbucket1.s3.me-south-1.amazonaws.com/product";
 var imageName = "1050.jpg"
      //const XLSX  = require("xlsx");
      let fs = require("fs");
      var Excel = require('exceljs');
      var workbook = new Excel.Workbook();
      workbook.xlsx.readFile('samplefile.xlsx')
        .then(function() {
            
            try{
                var worksheet = workbook.getWorksheet(1);
            var row = worksheet.getRow(10);
            //console.log(row);
           row.getCell(1).value = 2;
           row.getCell(2).value = 'test';
            row.getCell(3).value = '12/09/1991';
            
            row.getCell(4).value = "jamsheed..................."; // A5's value set to 5
                // const imageId = workbook.addImage({
                //     buffer: fs.readFileSync('https://almudabirbucket1.s3.me-south-1.amazonaws.com/ProductImages-1685164649274.jpeg'),
                //     extension: 'jpeg',
                //   });
                //   worksheet.addImage(imageId, 'B2:D6');
                //    row.getCell(3).value = imageId;
            row.commit();
            }
            catch(error){

            }
            
            
              
          
            return workbook.xlsx.writeFile('newExcelSheet.xlsx');
        })

   
	
	app.get('/',function(req,res){
		res.sendFile(__dirname + "/index.html");
	});

    app.listen('3000', function(){
        console.log('running on 3000...');
    });
