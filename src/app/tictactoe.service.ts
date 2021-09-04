import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  constructor() { }

  public checkTicTacToe(board:Array<"O"|"X"|"">){
    if(board.length !== 9){
      console.log(`board length is not correct`);
      return {status:"error", msg:"board length is not correct"}
    }
    const checkFun=[this.checkrow,this.checkcol,this.checkdig];
    for(var i:0|1|2 in [0,1,2]){
      checkFun.forEach(fn=>{
        const res = fn(board,i);
        if(res!=""){
          return res;
        }
      })

    }
  }

  private checkrow(board:Array<"O"|"X"|"">,row:0|1|2):"O"|"X"|""{
    if(board[3*row] === "O" && board[3*row+1] === "O" && board[3*row+2] === "O"){
      return "O"
    }
    else if(board[3*row] === "X" && board[3*row+1] === "X" && board[3*row+2] === "X"){
      return "X"
    }
    return ""
  }

  private checkcol(board:Array<"O"|"X"|"">,col:0|1|2):"O"|"X"|""{
    if(board[col] === "O" && board[col+3] === "O" && board[col+6] === "O"){
      return "O"
    }
    if(board[col] === "X" && board[col+3] === "X" && board[col+6] === "X"){
      return "X"
    }
    return ""
  }

  private checkdig(board:Array<"O"|"X"|"">,dig:0|1|2):"O"|"X"|""{
    if(dig ===0){
      if(board[0] === "O" && board[4] === "O" && board[8] === "O"){
        return "O"
      }
      if(board[0] === "X" && board[4] === "X" && board[8] === "X"){
        return "X"
      }
    }else{
      if(board[2] === "O" && board[4] === "O" && board[6] === "O"){
        return "O"
      }
      if(board[2] === "X" && board[4] === "X" && board[6] === "X"){
        return "X"
      }
    }
    return ""
  }

}
