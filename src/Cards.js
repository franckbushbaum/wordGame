import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Cards = ({ words }) => {

    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [score, setScore] = useState(0)

    const checkAnswer = (option, index, answer) => {
        if (index == answer) {
            setCorrectAnswers([...correctAnswers, option])
            setScore((score) => score + 1)
        } else {
            setScore((score) => score + 1)
        }
        setClicked([...clicked, option])
    }

    console.log('correct answers:', correctAnswers)
    return (
        <>
            <div className="score">
                <h2>Your score is: {score}</h2>
            </div>
            <div className="question-area">
            {words.quizlist.map((question, questionIndex) => (
                <div className="question-box">
                    <Paper  elevation={24} sx={{ maxWidth: 275, margin: 4, padding: 1.5 }}>
                        <h4>Options</h4>
                            {question.quiz.map((tip, _index) => (
                                <Typography variant="h5">{tip}</Typography>
                            ))}
                            <div className="question-buttons">
                                {question.option.map((option, optionIndex) => (
                                    <>
                                        <Button
                                            disabled={clicked.includes(option)}
                                            variant="contained"
                                            onClick={() => checkAnswer(option, optionIndex + 1, question.correct)}>{option}
                                        </Button>
                                        <p>{correctAnswers.includes(option) && <p>Correct!</p>} </p>
                                    </>
                                ))}

                            </div>
                            <p>{question.correct}</p>
                    </Paper>
                </div>
            ))}
            </div>
        </>

    )
}


export default Cards;