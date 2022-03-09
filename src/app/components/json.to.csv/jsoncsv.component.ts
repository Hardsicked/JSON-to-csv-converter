import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsontocsv',
  templateUrl: './jsoncsv.component.html',
  styleUrls: ['./jsoncsv.component.scss']
})
export class JsonToCsvComponent implements OnInit {
  jsonInput: string = "";
  csvOutput: string = "";

  constructor() {
  }

  ngOnInit(){
    
    
  }

  textAreaChange(){
    debugger;
    this.csvOutput = "";  
    
    this.csvOutput = this.ConvertJsonToCsv(this.jsonInput);

    var element = document.getElementById("output");

    if(element != null)
      element.innerHTML = this.csvOutput;
  }

  ConvertJsonToCsv(jsonString: string): string {
    
    const json = JSON.parse(jsonString);

    const cabecalho = Object.keys(json[0]);

    var csvOutput = json.map((x: any) =>{
      var cabecalhos = cabecalho.map((y: any) => {
        return JSON.stringify(x[y])
      }).join(',');
      return cabecalhos;
    });

    csvOutput.unshift(cabecalho.join(','));
    csvOutput = csvOutput.join('\r\n');

    return csvOutput;

  }

  // convertJsonToCsv(json: string) : string {
  //   let csvStringOutput : string = "";
    
  //   let char1,char2: string = "";

  //   char1 = json.charAt(0);
  //   char2 = json.charAt(json.length - 1);

  //   if(char1 === "{" && char2 === "}"){

  //     var linhasJson = json.slice(1,-1).split(",");

  //     csvStringOutput = "data;text/csv;charset=utf-8, ";
      
  //     linhasJson.forEach(item => {
  //       csvStringOutput = csvStringOutput + item.replace(/['"]+/g,'').trim() + ", \r\n";
  //     });

  //   }else{

  //     csvStringOutput = "JSON inválido";
      
  //   }
  //   // let propriedades: string[] = [];
  //   // let data: {
  //   //   propriedade: string,
  //   //   valor: string
  //   // }[] = [];

  //   //await linhasJson.forEach((linha,index) => {

  //     //   if(linha.split(":").length > 1)
  //     //     data[index] = {
  //     //       propriedade: linha.split(":")[0],
  //     //       valor: linha.split(":")[1]
  //     //     };
  //     //   else
  //     //     data[index] = {
  //     //       propriedade: "",
  //     //       valor: linha
  //     //     }

  //     //   propriedades.push(linha.split(":")[0]);
  //     // }
      
  //   //);
  //   // propriedades = propriedades.filter((item,index) => propriedades.indexOf(item) === index);
    
  //   // let count = 0; //Contador de item escritos por linhas;

  //   // if(propriedades.length > 0){
  //   //   propriedades.forEach(x => {
  //   //     this.csvOutput = this.csvOutput + x + ", ";
  //   //   });
  //   //   this.csvOutput = this.csvOutput + "\n";
  //   //   data.forEach((item, index) => {
  //   //     if(count > propriedades.length){
  //   //       count = 0;
  //   //       this.csvOutput = this.csvOutput + "\n" + item.valor + ", "
  //   //     }
  //   //     else
  //   //     {
  //   //       count++;
  //   //       this.csvOutput = this.csvOutput + item.valor + ", "
  //   //     }
  //   //   })
  //   // }else{
  //   //   data.forEach(item => {
  //   //     this.csvOutput = item.valor + ",";
  //   //   })
  //   // }
    

  //   return csvStringOutput;
  // }

  exportarParaCsv(): void{
    const blob: Blob = new Blob([this.csvOutput], {type: 'text/csv'});
    const filename: string = 'ConversaoCSV.csv';

    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}


