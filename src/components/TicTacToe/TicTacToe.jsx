import React from 'react'

const TicTacToe = () => {
  return (
    <div className='text-center'>
        <h1 className="mt-[8] text-white text-2xl flex items-center justify-center">TicTacToe <span classname="text-[#262626]">Judicious</span></h1>
        <div className="board"></div>
        <buttton className="reset">Reset</buttton>
    </div>
  )
}

export default TicTacToe