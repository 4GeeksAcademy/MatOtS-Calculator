import React, { useState } from "react";

const Calculator = () => {

	const [boardInput, setBoardInput] = useState("");
	const [oper, setOper] = useState("");
	const [prevNum, setPrevNum] = useState([])

	const operators = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
		'%': (a, b) => a % b,
		'**': (a, b) => a ** b
	};

	function operation(str, oper) {
		let result = 0
		console.log("esto es str ",str, oper)
		if (typeof(str) === "number") {
			console.log(prevNum)
			console.log(operators[oper](str, parseInt(prevNum[1])))
			result = operators[oper](str, parseInt(prevNum[1]))
		}
		else if (str === "" || oper === "") {
			result = "0"
		}
		else {
			let values = str.split(oper)
			setPrevNum(values)
			result = operators[oper](parseInt(values[0]), parseInt(values[1]))
		}
		console.log(result)
		setBoardInput(result)
	}

	function detelteOne() {
		
	}

	function deleteAll() {
		setBoardInput("")
	}

	const handleInput = event => {
		event.preventDefault();
		let value = event.target.value
		if (value === "=") {
			operation(boardInput, oper)
		}
		else if (isNaN(parseInt(value))) {
			setOper(value)
			setBoardInput(boardInput + value)
		}
		else {
			setBoardInput(boardInput + value)
		}

	}

	/* 
		Pseudo código

		Crear calculadora html css DONE
		Tomar los valores del html para usar en js DONE
		mostrar entradas en el display, solo numeros y signos
		alojar valores en variables
		hacer cálculo y mostrar en display
	*/


	return (
		<div className="container text-center">
			<div className="calc">
				<section className="display">{boardInput === "" ? "0" : boardInput}</section>
				<section className="teclado">
					<div className="linea">
						<button onClick={deleteAll} value="DeleteAll" id="clearBoton" className="botones">AC</button>
						<button value="DeleteOne" id="numeros-borradores" className="botones">←</button>
						<button onClick={handleInput} value="/" id="operadores" className="botones-oper">÷</button>
					</div>
					<div className="linea">
						<button onClick={handleInput} value="7" id="numeros-borradores" className="botones">7</button>
						<button onClick={handleInput} value="8" id="numeros-borradores" className="botoness">8</button>
						<button onClick={handleInput} value="9" id="numeros-borradores" className="botones">9</button>
						<button onClick={handleInput} value="*" id="operadores" className="botones-oper">×</button>
					</div>
					<div className="linea">
						<button onClick={handleInput} value="4" id="numeros-borradores" className="botones">4</button>
						<button onClick={handleInput} value="5" id="numeros-borradores" className="botones">5</button>
						<button onClick={handleInput} value="6" id="numeros-borradores" className="botones">6</button>
						<button onClick={handleInput} value="-" id="operadores" className="botones-oper">-</button>
					</div>
					<div className="linea">
						<button onClick={handleInput} value="1" id="numeros-borradores" className="botones">1</button>
						<button onClick={handleInput} value="2" id="numeros-borradores" className="botones">2</button>
						<button onClick={handleInput} value="3" id="numeros-borradores" className="botones">3</button>
						<button onClick={handleInput} value="+" id="operadores" className="botones-oper">+</button>
					</div>
					<div className="linea">
						<button onClick={handleInput} value="0" id="cero" className="botones">0</button>
						<button onClick={handleInput} value="=" id="operadores" className="botones-oper">=</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Calculator;