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
    let json : string = this.jsonInput;
    
    let char1,char2: string = "";

    char1 = json.charAt(0);
    char2 = json.charAt(json.length - 1);

    if(char1 === "{" && char2 === "}"){
      var linhas = json.slice(1,-1).split(",");

      this.convertJsonToCsv(linhas);
      
    }else{
      this.csvOutput = "JSON inválido";
    }
    
    var element = document.getElementById("output");

    if(element != null)
      element.innerHTML = this.csvOutput;
  }

  async convertJsonToCsv(linhasJson: string[]){
    // let propriedades: string[] = [];
    // let data: {
    //   propriedade: string,
    //   valor: string
    // }[] = [];

    //await linhasJson.forEach((linha,index) => {

      //   if(linha.split(":").length > 1)
      //     data[index] = {
      //       propriedade: linha.split(":")[0],
      //       valor: linha.split(":")[1]
      //     };
      //   else
      //     data[index] = {
      //       propriedade: "",
      //       valor: linha
      //     }

      //   propriedades.push(linha.split(":")[0]);
      // }
      
    //);
    // propriedades = propriedades.filter((item,index) => propriedades.indexOf(item) === index);
    
    // let count = 0; //Contador de item escritos por linhas;

    // if(propriedades.length > 0){
    //   propriedades.forEach(x => {
    //     this.csvOutput = this.csvOutput + x + ", ";
    //   });
    //   this.csvOutput = this.csvOutput + "\n";
    //   data.forEach((item, index) => {
    //     if(count > propriedades.length){
    //       count = 0;
    //       this.csvOutput = this.csvOutput + "\n" + item.valor + ", "
    //     }
    //     else
    //     {
    //       count++;
    //       this.csvOutput = this.csvOutput + item.valor + ", "
    //     }
    //   })
    // }else{
    //   data.forEach(item => {
    //     this.csvOutput = item.valor + ",";
    //   })
    // }
    linhasJson.forEach(item => {
      this.csvOutput = this.csvOutput + item.replace(/['"]+/g,'').trim() + ",\n";
    });
  }

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


