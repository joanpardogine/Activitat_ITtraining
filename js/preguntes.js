let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=[1,3,4,2];

function pregunta(objecte, numPreg){
  let resposta;
  let obj;
    for (let i=0; i<4; i++){
      if(objecte.form[i].checked){
        resposta = i + 1 ; // + 1 => per començar des
                           // de 1 i no des de 0
      }
    }
    arrRespostes[numPreg] = resposta;
    console.log("arrRespostes[" + numPreg + "] = " + arrRespostes[numPreg]);
    alert(" has escollit la resposta " + arrRespostes[numPreg]);
    switch(numPreg) {
      case 0:
        obj = document.getElementById("pregunta-1");
        obj.classList.remove("elementVisible");
        obj.classList.add("elementOcult");
        obj = document.getElementById("pregunta-2");
        obj.classList.remove("elementOcult");
        obj.classList.add("elementVisible");
        break;
    case 1:
      alert("hola!");
        break;
      }


}  // FINAL   function pregunta()

