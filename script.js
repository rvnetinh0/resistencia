function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valuemulti = document.getElementById("multi").value;
    let valueRES = (valueF01 + valueF02) * valuemulti;
    let valueTole = document.getElementById ("tole").value;
    let valueTole1 = valueRES-valueTole;
    let valueTole2 = valueRES + valueTole;
    valueTole = (valueTole1 + " e " + valueTole2 )
    alert(valueTole1 + "e" + valueTole2 )
    alert (valueRES);
    document.getElementById("result").value = valueRES ;
    document.getElementById("result2").value = valueTole ;
    
}
