import React, { useState } from "react";
import Container from '@mui/material/Container';
import * as C from './styles'
import { Box} from "@mui/system";

function Navegation (){
    const [ num, setNum]= useState(0)
    const [ antnum, setAntNum]= useState(0)
    const [ operador, setOperador]= useState()
    // Funcionalidade dos números 
    function inptNum (e){
       var input= e.target.value
       if (num===0){
        setNum (input)
       }else{
          setNum (num + input)
       }
      
    }  
  
 
    function clean(e){
        setNum(0)
    }


    function porcentage (){
        setNum(num / 100)
    }

    // Função que muda o valor ou o sinal dos numeros.
    function mudarSinal (){
        if(num>0){
            setNum(-num)
        }else {
            // Math deixa o numero que esta negativo positivo.
            setNum( Math.abs(num))
        }
    }
 // Função dos Sinais 
 function sinais(e){
    var operadorInput =e.target.value
setOperador(operadorInput)
setAntNum(num)
setNum(0)


 }
    // Função Calcular, parseFloat => transforma um string em números

    function calcular(){
        if (operador=== "/"){
            setNum( parseFloat(antnum)  / parseFloat(num) )
        }else if(operador=== "X" ){
            setNum(parseFloat(antnum)  * parseFloat(num))
        }else if (operador=== "-"){
            setNum( parseFloat(antnum)  - parseFloat(num))
        }else {
            setNum ( parseFloat(antnum) + parseFloat(num))
        }
    
    }


    return(
        //Box=> margem.
        <Container maxWidth="xs">
            <Box m={5}/>
            
            <C.ContButton>
                <Box m={12}/>
            <C.Result>{num}</C.Result>
            <C.Button onClick={clean} >AC</C.Button>
            <C.Button onClick={mudarSinal } >+/-</C.Button>
            <C.Button onClick={porcentage}>%</C.Button>
            <C.BtOrange  onClick={sinais} value= "/">/</C.BtOrange>
            <C.BtGray onClick={inptNum} value ={7}>7</C.BtGray>
            <C.BtGray onClick={inptNum} value={8} >8</C.BtGray>
            <C.BtGray onClick={inptNum} value={9}>9</C.BtGray>
            <C.BtOrange onClick={sinais} value= "X">X</C.BtOrange>
            <C.BtGray onClick={inptNum} value={4}>4</C.BtGray>
            <C.BtGray onClick={inptNum} value={5}>5</C.BtGray>
            <C.BtGray onClick={inptNum} value={6}>6</C.BtGray>
            <C.BtOrange onClick={sinais} value= "-">-</C.BtOrange>
            <C.BtGray onClick={inptNum} value={1}>1</C.BtGray>
            <C.BtGray onClick={inptNum} value={2}>2</C.BtGray>
            <C.BtGray onClick={inptNum} value={3}>3</C.BtGray>
            <C.BtOrange onClick={sinais} value= "+">+</C.BtOrange>
            <C.BtGray onClick={inptNum} value={0}>0</C.BtGray>
            <C.BtGray onClick={inptNum} value={"."}>,</C.BtGray>
            <C.Bthidden>,</C.Bthidden>
            <C.BtOrange onClick={calcular}>=</C.BtOrange>
            </C.ContButton>
  
        </Container>
    )
}
export default Navegation