let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=[1,3,4,2];

function pregunta(objecte, numPreg){
  console.log(" pos 0 = " + objecte.form[0].checked);
  console.log(" pos 1 = " + objecte.form[1].checked);
  console.log(" pos 2 = " + objecte.form[2].checked);
  console.log(" pos 2 = " + objecte.form[3].checked);

let resposta;
  for (let i=0; i<4; i++){
    if(objecte.form[i].checked){
      resposta = i + 1 ;
    }
  }
  arrRespostes[numPreg] = resposta;
  
  alert(" has escollit la resposta " + arrRespostes[numPreg]);

  
  
}