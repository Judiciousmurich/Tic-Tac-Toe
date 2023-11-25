import React from 'react'

const TicTacToe = () => {
  return (
    <div className='text-center'>
        <h1 className="mt-[8] text-white text-2xl flex items-center justify-center">TicTacToe <span className="text-[#26ffcb] pl-[5]">Judicious</span></h1>
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>

 <div className="row2
 ">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>

        
        
        
        <buttton className="w-6 h-6 border-none outline-none cursor-pointer rounded bg-[#1f3540] text-[#26ffcb text-base] mt-4 mb-8">Reset</buttton>
    </div>
  )
}

export default TicTacToe