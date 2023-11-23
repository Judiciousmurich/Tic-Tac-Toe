import React from 'react'

const TicTacToe = () => {
  return (
    <div className='text-center'>
        <h1 className="mt-[8] text-white text-xl flex">TicTacToe <span>Judicious</span></h1>
        <div className="board"></div>
        <buttton className="reset">Reset</buttton>
    </div>
  )
}

export default TicTacToe