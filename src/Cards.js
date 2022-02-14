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
            setScore((score) => score - 1)
        }
        setClicked([...clicked, option])
    }

    console.log('correct answers:', correctAnswers)
    return (
        <>
            <div className="score">
                <h3>Your score is: {score}</h3>
            </div>
            <div className="question-area">
            {words.quizlist.map((question, questionIndex) => (
                <div className="question-box">
                    <Paper  elevation={24} sx={{ maxWidth: 275, borderRadius: 5, margin: 4, padding: 1.5, backgroundColor: 'gray', opacity: .8, outline: '2px solid #FCB5AC'}}>
                        <h2>Options</h2>
                            {question.quiz.map((tip, _index) => (
                                <Typography variant="h5" sx={{opacity: 1}}>·{tip}</Typography>
                            ))}
                            <div className="question-buttons">
                                {question.option.map((option, optionIndex) => (
                                    <>
                                        <Button                                          
                                            sx={{minWidth: .4, margin: 1}}
                                            disabled={clicked.includes(option)}
                                            variant="contained"
                                            onClick={() => checkAnswer(option, optionIndex + 1, question.correct)}>{option}
                                        </Button>
                                        <p className="result">{correctAnswers.includes(option) && <p>Correct!</p>} </p>
                                    </>
                                ))}
                            </div>
                    </Paper>
                </div>
            ))}
            </div>
        </>

    )
}


export default Cards;