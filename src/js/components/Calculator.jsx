import React, { useState } from "react";

const Calculator = () => {

	const [boardInput, setBoardInput] = useState("");
	const [operSign, setOperSign] = useState("");
	console.log("OperSign ", operSign)
	const [prevNum, setPrevNum] = useState(0);
	console.log("prevNum ", prevNum);

	const operators = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
		'%': (a, b) => a % b,
		'**': (a, b) => a ** b
	};

	function operationEqualTo(str, oper) {
		let result = 0
		console.log("en operationEqualTo, esto es str ",str," oper ",oper);
		if (str === "" || oper === "" || oper === str || str == NaN || str === "0") {
			result = "0"
		}
		else {
			let values = str.split(oper)
			console.log("esto es values ", values);
			result = (operators[oper](parseInt(values[0]), parseInt(values[1]))).toString()
			setPrevNum(parseInt(result))
		}
		setBoardInput(result)
		setOperSign("")
	}

	function continousOperations(str, oper, nextOperLocal) {
		let result = 0
		console.log("en continousOperations, esto es str ",str," oper ",oper);
		if (str === "" || oper === "" || oper === str || str == NaN || str === "0") {
			result = "0"
		}
		else {
			let values = str.split(oper)
			console.log("esto es values ", values);
			result = (operators[oper](parseInt(values[0]), parseInt(values[1]))).toString()
			setPrevNum(parseInt(values[1]))
		}
		setBoardInput(result + (nextOperLocal ? nextOperLocal : ""));
	}

	function detelteOne() {
		setBoardInput(boardInput.substring(0,boardInput.length -1))
	}

	function deleteAll() {
		setBoardInput("")
		setOperSign("")
	}

	const handleInput = event => {
		event.preventDefault();
		let value = event.target.value
		setBoardInput(boardInput + value)
		if (value === "=") {
			operationEqualTo(boardInput, operSign)
		}
		else if (isNaN(parseInt(value))) {
			if (operSign !== "") {
				continousOperations(boardInput, operSign, value)
				setOperSign(value)
			}
			else {
				setOperSign(value)

			}

		}
	}


	return (
		<div className="container text-center">
			<div className="calc">
				<section className="display">{boardInput === "" ? "0" : boardInput}</section>
				<section className="teclado">
					<div className="linea">
						<button onClick={deleteAll} value="DeleteAll" id="clearBoton" className="botones">AC</button>
						<button onClick={detelteOne} value="DeleteOne" id="numeros-borradores" className="botones">←</button>
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
						<button onClick={handleInput} value="." id="punto" className="botones">.</button>
						<button onClick={handleInput} value="=" id="operadores" className="botones-oper">=</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Calculator;