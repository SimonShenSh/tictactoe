import {Component, ElementRef, ViewChild} from '@angular/core';
import * as _ from 'lodash'
import {TictactoeService} from "./tictactoe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticTacToe';
  winner:string= "";

  board:Array<"O"|"X"|"">=["","","","","","","","",""];
  @ViewChild("board0", {read: ElementRef, static: true}) board0: ElementRef;
  @ViewChild("board1", {read: ElementRef, static: true}) board1: ElementRef;
  @ViewChild("board2", {read: ElementRef, static: true}) board2: ElementRef;
  @ViewChild("board3", {read: ElementRef, static: true}) board3: ElementRef;
  @ViewChild("board4", {read: ElementRef, static: true}) board4: ElementRef;
  @ViewChild("board5", {read: ElementRef, static: true}) board5: ElementRef;
  @ViewChild("board6", {read: ElementRef, static: true}) board6: ElementRef;
  @ViewChild("board7", {read: ElementRef, static: true}) board7: ElementRef;
  @ViewChild("board8", {read: ElementRef, static: true}) board8: ElementRef;

  constructor(private tictactoeService:TictactoeService) {
  }

  doCheck(){
    this.board = this.getBoard();
    this.winner = this.tictactoeService.checkTicTacToe(this.board) as string;
  }

  private getBoard(){
    return [this.board0.nativeElement.toString(),
      this.board1.nativeElement.toString(),
      this.board2.nativeElement.toString(),
      this.board3.nativeElement.toString(),
      this.board4.nativeElement.toString(),
      this.board5.nativeElement.toString(),
      this.board6.nativeElement.toString(),
      this.board7.nativeElement.toString(),
      this.board8.nativeElement.toString()];
  }


}
