
import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import useSound from "use-sound";
import correct from "./assets/correct-answer.wav";
import wrong from "./assets/correct-answer.wav";

function App() {
  const[questionNumber, setQuestionNumber] = useState(1);
  const[stop, setStop] = useState(false);
  const[earned, setEarned] = useState("£ 0");
  const[letUsPlay] =useSound(correct);
  
  useEffect(() => {
      letUsPlay();
  }, [letUsPlay]);
  
  const data = [
    {
      id: 1,
      question: "what is the capital city of Somalia?",
      answers: [
      {
        text: "Mogadishu",
        correct: true
      },
      {
        text: "Nairobi",
        correct: false
      },
      {
        text: "Addis Ababa",
        correct: false
      },
      {
        text: "Kismayo",
        correct: false
      },
    ]
    },
    {
        id: 2,
        question: "what is the capital city of Kenya?",
        answers: [
        {
          text: "Mogadishu",
          correct: false
        },
        {
          text: "Nairobi",
          correct: true
        },
        {
          text: "Addis Ababa",
          correct: false
        },
        {
          text: "Kismayo",
          correct: false
        },
      ]
    },
    {
      id: 3,
      question: "what is the capital city of Ethiopia?",
      answers: [
         {
        text: "Addis Ababa",
        correct: true
      },
      {
        text: "Mogadishu",
        correct: false
      },
      {
        text: "Nairobi",
        correct: false
      },
      {
        text: "Kismayo",
        correct: false
      },
    ]
  },
  {
    id: 4,
    question: "what is the capital city of Spain?",
    answers: [
    {
      text: "Mogadishu",
      correct: false
    },
    {
      text: "Nairobi",
      correct: false
    },
    {
      text: "Addis Ababa",
      correct: false
    },
    {
      text: "Madrid",
      correct: true
    },
  ]
},{
  id: 5,
  question: "what is the capital city of united Kingdom?",
  answers: [
  {
    text: "Mogadishu",
    correct: false
  },
  {
    text: "Nairobi",
    correct: false
  },
  {
    text: "London",
    correct: true
  },
  {
    text: "Kismayo",
    correct: false
  },
]
},
{
  id: 6,
  question: "what is the capital city of France?",
  answers: [
  {
    text: "Mogadishu",
    correct: false
  },
  {
    text: "Nairobi",
    correct: false
  },
  {
    text: "Madrid",
    correct: false
  },
  {
    text: "Paris",
    correct: true
  },
 
]
},
{
  id: 7,
  question: "7 x 7",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "56",
    correct: false
  },
  {
    text: "49",
    correct: true
  },
  {
    text: "47",
    correct: false
  },
]
},
{
  id: 8,
  question: "7 x 8",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "56",
    correct: true
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
]
},

{
  id: 8,
  question: "7 + 7",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "14",
    correct: true
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
]
},
{
  id: 9,
  question: "7 x 12",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "84",
    correct: true
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
]
},
{
  id: 10,
  question: "6 x 12",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
  {
    text: "72",
    correct: true
  }
]
},
{
  id: 11,
  question: "5 x 12",
  answers: [
  {
    text: "42",
    correct: false
  },
  
  {
    text: "60",
    correct: true
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
]
},
{
  id: 11,
  question: "5 x 12",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
  {
    text: "60",
    correct: true
  }
]
},
{
  id: 11,
  question: "8 x 12",
  answers: [
  {
    text: "42",
    correct: false
  },
  {
    text: "96",
    correct: true
  },
  {
    text: "49",
    correct: false
  },
  {
    text: "47",
    correct: false
  },

]
},

{
  id: 12,
  question: "9 x 7",
  answers: [
  {
    text: "63",
    correct: true
  },
  {
    text: "42",
    correct: false
  },
  {
    text: "56",
    correct: false
  },
  {
    text: "47",
    correct: false
  },
 
]
}
  
]
  const moneyPyrmid = useMemo(() => 
    [
      {id:1, amount: "£ 100"},
      {id:2, amount: "£ 200"},
      {id:3, amount: "£ 300"},
      {id:4, amount: "£ 500"},
      {id:5, amount: "£ 1000"},
      {id:6, amount: "£ 2000"},
      {id:7, amount: "£ 4000"},
      {id:8, amount: "£ 8000"},
      {id:9, amount: "£ 16000"},
      {id:10, amount: "£ 32000"},
      {id:11, amount: "£ 64000"},
      {id:12, amount: "£ 125000"},
      {id:13, amount: "£ 250000"},
      {id:14, amount: "£ 500000"},
      {id:15, amount: "£ 1000000"}
    ].reverse(),
   []) 
  useEffect(()=>{
    questionNumber > 1 &&
      setEarned(moneyPyrmid.find((m) => m.id === questionNumber -1).amount);
  },[moneyPyrmid, questionNumber])
  return (
    <div className="app">
      <div className="main">
      { stop ? <h1 className="endText">You earned: {earned}</h1> : (
        <>
        <div className="top">
          <div className="timer"><Timer setStop = {setStop} questionNumber = {questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia 
            data={data} 
            setStop={setStop} 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
        </div></>
        )}
      </div>
      <div className="pyramid">
      <ul className="moneyList">
        {moneyPyrmid.map((m) => (
        <li className= {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default App;
