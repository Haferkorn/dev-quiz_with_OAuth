import * as React from 'react'
import Answer from './Answer'
import styled from 'styled-components'
import {useState} from "react";

function Question({question, checkIfCorrect}) {

    const [chosenId, setChosenId] = useState("123456")

    const handleClick = event => {
        event.preventDefault()
        console.log("Checking if correct...:)")
        console.log("Question : " +JSON.stringify(question))
        checkIfCorrect(question, chosenId)
    }

    const sendChosenID = (id) => {setChosenId(id)}
    console.log("chosenId: " +chosenId )

    return (
        <QuestionContainer>
            <form onSubmit={handleClick}>
                <h3>{question.questionText}</h3>
                <AnswerContainer>
                    {question.answers.map(answer => (
                        <Answer answer={answer} key={answer.id} questionId={question.id} sendChosenID={sendChosenID} />
                    ))}
                </AnswerContainer>
                <CheckButton>Check Answer</CheckButton>
            </form>
        </QuestionContainer>
    )
}

export default Question

const QuestionContainer = styled.section`
  width: 400px;
  border: 1px solid #009fb7;
  border-radius: 20px;
  padding: 20px;
  background-color: #EAF6FF;
  font-family: 'Montserrat', sans-serif;;
`

const AnswerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 0;
  grid-template-areas:
    '. .'
    '. .';
`
const CheckButton = styled.button`
  box-shadow: inset 0 1px 0 0 #ffffff;
  background-color: #757780;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
    color: #757780;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`
