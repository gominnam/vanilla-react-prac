
class GameCanvas { // el은 이미 존재하는 element를 뜻한다, elQuery == container
    constructor(elQuery) {
        this.el = document.querySelector(elQuery);
    }

    // init()
    resetStateAndDom() {
        // wipe the state
        this.state = {
            player1: "x",
            player2: "o",
            currentPlayer: 1
        };

        // wipe the dom
        // prep the dom (using the template)
        var fieldTemplate = document.querySelector('#fieldContainer-template'); // document 트리 아래에서 찾기
        this.el.querySelector('.fieldContainer').innerHTML = fieldTemplate.innerHTML; // 기본 틀로 삽입(innerHTML)
    }

    // fires everything up... 
    init() {
        this.addEventListeners();

        this.resetStateAndDom();
    }


    handleRestart() {
        this.resetStateAndDom();
    }

    handlePlay(el) {
        var piece = this.state['player' + this.state.currentPlayer]; //x or o

        // fill in the current piece, and switch player
        this.state.currentPlayer = this.state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2

        // add the piece to the dom
        el.innerHTML = piece.toUpperCase();
        el.classList.remove('empty')
    }

    // init()
    addEventListeners() {
        // debugger;
        // delegate the minor things in here...       e == event
        this.el.addEventListener('click', e => { // addEventListener : 함수에 인자 전달 / function(e) { ~ }와 같은 문법 + this를 정의하지 않음
            // set up the various callbacks...
            var el = e.target; // target is object event
            // console.log('e.target', e.target)
            // if it's an empty field...

            if (el.classList.contains('field') && el.classList.contains('empty')) {
                this.handlePlay(el);
            }

            if (el.classList.contains('clearButton')) {
                this.handleRestart();
            }
        }) // e => { ~~~~~ } 까지 하나의 인수이다.
    }
}
