
let board = document.querySelectorAll('#ttc');

// Variables
 function buildBoard(rowCols) {
    let rowsEl;
    for (let index = 0; index < rowCols; index++) {

    let row = document.createElement('div');
    row.setAttribute('class','row-ttc')

       board[0].appendChild(row)
        for (let c = 0; c < rowCols; c++) {
            rowsEl = document.querySelectorAll('.row-ttc');
            let block = document.createElement('div');
            block.setAttribute('class','block-ttc blk-'+index+'-'+c);
            block.setAttribute('data-row',index)
            block.setAttribute('data-col',c)
            rowsEl[index].appendChild(block)
        }
    }
 }

 $(document).ready(function(){
    let boardColRows = 3
    let count = 0;
    let matcToWin = 3;
    let possibleWinMove = 5
     buildBoard(boardColRows)

    $('.block-ttc').click(function(){
        if(!isFilled(this)) {
            this.append(getCurrentTurn())
            count++;
            console.log(count)
            if(count >= possibleWinMove) {
                // checkBoard();
                checkWinner($(this).data())
            }
            if(count == (boardColRows *boardColRows)){
                alert('tie')
                resetBoard();
            }
        }

    })

    $('.reset').click(function(){
        resetBoard();
    })
    function resetBoard() {
        count = 0;
        $('.block-ttc').each(function() {
            $(this).text('')
        })

    }
    function checkWinner(data) {
       let colPos = data.col;
       let rowPos = data.row;

       let boardIndex = boardColRows - 1;
       // inBetweenCheck
        if(boardIndex - rowPos > 0) {
            // check up and down
            if($('.blk-'+(rowPos +1)+'-'+(colPos)).text() === getPrevTurn() && $('.blk-'+(rowPos -1)+'-'+(colPos)).text() === getPrevTurn()) {
                alert("winner " + getPrevTurn())
                resetBoard();
            }
        }

        if(boardIndex - colPos > 0) {
            // check up and down
            if($('.blk-'+(rowPos)+'-'+(colPos+1)).text() === getPrevTurn() && $('.blk-'+(rowPos)+'-'+(colPos-1)).text() === getPrevTurn()) {
                alert("winner" + getPrevTurn())
                resetBoard();

            }
        }

        if($('.blk-'+(rowPos+2)+'-'+(colPos-2)).text() === getPrevTurn() && $('.blk-'+(rowPos +1)+'-'+(colPos-1)).text() === getPrevTurn()) {
            alert("winner" + getPrevTurn())
            resetBoard();

        }

        if($('.blk-'+(rowPos-2)+'-'+(colPos+2)).text() === getPrevTurn() && $('.blk-'+(rowPos -1)+'-'+(colPos+1)).text() === getPrevTurn()) {
            alert("winner" + getPrevTurn())
            resetBoard();

        }

        if($('.blk-'+(rowPos-2)+'-'+(colPos-2)).text() === getPrevTurn() && $('.blk-'+(rowPos -1)+'-'+(colPos-1)).text() === getPrevTurn()) {
            alert("winner" + getPrevTurn())
            resetBoard();

        }


        if($('.blk-'+(rowPos+2)+'-'+(colPos+2)).text() === getPrevTurn() && $('.blk-'+(rowPos +1)+'-'+(colPos+1)).text() === getPrevTurn()) {
            alert("winner" + getPrevTurn())
             resetBoard();

        }
    // checkDown
        if(rowPos >= 0) {
            let rowMatches = 0;
            let nts =  rowPos - (matcToWin - 1);
            for (let rowInd = rowPos; rowInd >= nts; rowInd--) {
                if(rowInd < boardColRows) {
                    if($('.blk-'+(rowInd)+'-'+(colPos)).text() === getPrevTurn()) {
                        rowMatches++;
                    }
                }
            }
            if(rowMatches == matcToWin) {
                alert('winner')
                                resetBoard();

            }

        }

        if(rowPos <= boardColRows) {
            let rowMatches = 0;
            let nts =  rowPos + (matcToWin - 1);
            for (let rowInd = rowPos; rowInd <= nts; rowInd++){
                if(rowInd < boardColRows) {
                    if($('.blk-'+(rowInd)+'-'+(colPos)).text() === getPrevTurn()) {
                        rowMatches++;
                    }
                }
            }
            if(rowMatches == matcToWin) {
                alert('winner')
                                resetBoard();

            }

        }

        if(colPos >= 0 ) {
            let rowMatches = 0;
            let nts =  colPos + (matcToWin - 1);
            for (let colInd = colPos; colInd <= nts; colInd++) {
                if(colInd < boardColRows) {
                    if($('.blk-'+(rowPos)+'-'+(colInd)).text() === getPrevTurn()) {
                        rowMatches++;
                    }
                }
            }
            if(rowMatches == matcToWin) {
                alert('winner')
                                resetBoard();

            }
        }


         if(colPos <= boardColRows ) {
            let rowMatches = 0;
            let nts =  colPos - (matcToWin - 1);
            for (let colInd = colPos; colInd >= nts; colInd--) {
                if(colInd < boardColRows) {
                    if($('.blk-'+(rowPos)+'-'+(colInd)).text() === getPrevTurn()) {
                        rowMatches++;
                    }
                }
            }
            if(rowMatches == matcToWin) {
                alert('winner')
                                resetBoard();

            }


        }



    }


    function getCurrentTurn() {
        const x = "X";
        const o = "O"
         if(count % 2 === 0) {
            currentPlayer = x;
        } else {
            currentPlayer = o;
        }
        return currentPlayer;
    }

    function getPrevTurn() {

        const x = "X";
        const o = "O"
         if(getCurrentTurn() == "X") {
            currentPlayer = o;
        } else {
            currentPlayer = x;
        }
        return currentPlayer;
    }

    function isFilled(obj) {

        if(!$(obj).text()) {
            return false;
        } else {
            return true;
        }

    }
 });
