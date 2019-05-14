	var express = require('express'); 
    var app = express(); 

      const XLSX  = require("xlsx");
      const workbook = XLSX.readFile('samplefile.xlsx')
      const sheet_namelist =workbook.SheetNames;
      console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[0]]))

	
	app.get('/',function(req,res){
		res.sendFile(__dirname + "/index.html");
	});

    app.listen('3000', function(){
        console.log('running on 3000...');
    });
