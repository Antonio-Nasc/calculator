import Input from "./components/Input/index.jsx";
import Button from "./components/Button/index.jsx";
import { Container, Content, Row, Column } from "./components/styles";
import { useState } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firtsNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };
  const handleSumNumbers = () => {
    if (firtsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firtsNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firtsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const minus = Number(firtsNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation("");
    }
  };

  const handleDivisionNumbers = () => {
    if (firtsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firtsNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  };
  const handleMultiplicationNumbers = () => {
    if (firtsNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const multiplication = Number(firtsNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firtsNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "/":
          handleDivisionNumbers();
          break;
        case "x":
          handleMultiplicationNumbers();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplicationNumbers} />
          <Button label="/" onClick={handleDivisionNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
