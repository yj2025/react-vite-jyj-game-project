import { useState } from 'react'
import rock from '@/assets/rsp/rock.jpg'
import paper from '@/assets/rsp/paper.jpg'
import scissor from '@/assets/rsp/scissor.jpg'
import RspCard from '../components/rsp/RspCard'

const RspPage = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: '당신',
      arrRsp: [],
      img: rock,
    },
    {
      id: 2,
      username: '심판',
      arrRsp: [],
      img: rock,
    },
    {
      id: 3,
      username: '컴퓨터',
      arrRsp: [],
      img: rock,
    },
  ])

  const [score, setScore] = useState({
    win: 0,
    lose: 0,
    draw: 0,
  })

  const handleClick = (choice) => {
    const rspArr = ['가위', '바위', '보']
    const imgArr = [scissor, rock, paper]

    const userIndex = rspArr.indexOf(choice)
    const comIndex = Math.floor(Math.random() * 3)

    const result = getResult(choice, rspArr[comIndex])

    // 깊은 복사 (객체까지 복사)
    const newPlayers = players.map(player => ({ ...player }))

    newPlayers[0].arrRsp = [choice]
    newPlayers[1].arrRsp = [result]
    newPlayers[2].arrRsp = [rspArr[comIndex]]

    newPlayers[0].img = imgArr[userIndex]
    newPlayers[2].img = imgArr[comIndex]

    setPlayers(newPlayers)

    // 점수 누적
    if (result === '당신이 이겼습니다.') {
      setScore(prev => ({ ...prev, win: prev.win + 1 }))
    } else if (result === '당신이 졌습니다') {
      setScore(prev => ({ ...prev, lose: prev.lose + 1 }))
    } else {
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }))
    }
  }

  const getResult = (you, computer) => {
    if (you === computer) return '비겼습니다'

    if (
      (you === '가위' && computer === '보') ||
      (you === '바위' && computer === '가위') ||
      (you === '보' && computer === '바위')
    ) {
      return '당신이 이겼습니다.'
    }

    return '당신이 졌습니다'
  }

  return (
    <main>
      <div className="container mt-5 text-center">
        <h2>✊ 가위바위보</h2>

        <div className="mb-4">
          {['가위', '바위', '보'].map(item => (
            <button
              key={item}
              className="btn btn-outline-primary m-2"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="row">
          {players.map(player => (
            <RspCard
              key={player.id}
              player={player}
            />
          ))}
        </div>

        <h4 className="mt-4">
          🏆 승: {score.win} / ❌ 패: {score.lose} / 🤝 무: {score.draw}
        </h4>
      </div>
    </main>
  )
}

export default RspPage
