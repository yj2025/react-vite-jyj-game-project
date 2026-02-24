import React, { useState } from 'react'
import LottoBall from '../components/lotto/LottoBall'

const LottoPage = () => {
  // 로또 번호 생성 함수 (1~45, 중복 제거{Set}, 정렬 포함)
  const generateLottoNumbers = () => {
    const lottoSet = new Set()

    while (lottoSet.size < 6) {
      const num = Math.floor(Math.random() * 45) + 1
      lottoSet.add(num)
    }

    // Set → Array 변환 후 오름차순 정렬
    return [...lottoSet].sort((a, b) => a - b)
  }

  // lazy 초기화
  const [nums, setNums] = useState(() => generateLottoNumbers())

  // 재추첨
  const handleRegenerate = () => {
    setNums(generateLottoNumbers())
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">🎰 Lotto Generator</h2>

      <div className="row justify-content-center mb-4">
        {nums.map((num) => (
          <LottoBall key={num} lottoNum={num} />
        ))}
      </div>

      <button className="btn btn-primary" onClick={handleRegenerate}>
        재추첨
      </button>
    </div>
  )
}

export default LottoPage
