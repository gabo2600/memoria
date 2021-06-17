import React from "react"
import '../css/board.css';
import Card from "./card";
import Modal from "./Modal";



class Board extends React.Component{
    constructor(){
        super();
        this.state = {

            cards:[],
            turn:0,
            err:0,
            win:false,
            busy:false
        }

        this.revealCard = this.revealCard.bind(this);
        this.reload = this.reload.bind(this);
    }

    revealCard = async(ind)=>{
        let err = true;
        if (this.state.busy === false){
            var card = this.state.cards;
            if (this.state.turn < 1){
                this.setState({ turn: this.state.turn+1});
                card[ind][2] = false;
                this.setState({cards: card});
            }
            else
        ///* 
            {
                this.setState({busy:true});
                var chk_win = 0;
                card[ind][2]=false;
                this.setState({cards: card});

                await this.sleep(700);
                for (let i = 0 ; i< this.state.cards.length; i++){
                    if ( (card[ind][0]===card[i][0] && card[i][2] === false) && ind!==i )
                    {
                        card[ind][3] = true;
                        card[i][3] = true;
                        err= false;
                    }
                    else
                        card[i][2] = true;
                    if (card[i][3]===true)
                        chk_win++;
                    
                    if (chk_win>= 15)
                        this.setState({win:true});
                }
                this.setState({cards: card});
                this.setState({ turn: 0, busy:false});
                if (err)
                    this.setState({err: this.state.err+1});
            }
            

             //  */
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    
    componentDidMount = async()=> {
        var h = true;
        var f = false;
        let array = [
            ['!',0,h,f],
            ['@',1,h,f],
            ['#',7,h,f],
            ['$',4,h,f],
            ['¬',6,h,f],
            ['&',2,h,f],
            ['/',3,h,f],
            ['+',5,h,f],
            ['!',0,h,f],
            ['@',1,h,f],
            ['#',7,h,f],
            ['$',4,h,f],
            ['¬',6,h,f],
            ['&',2,h,f],
            ['/',3,h,f],
            ['+',5,h,f],
        ];
        let curId = array.length;
        // There remain elements to shuffle
        while (0 !== curId) {
          // Pick a remaining element
          let randId = Math.floor(Math.random() * curId);
          curId -= 1;
          // Swap it with the current element.
          let tmp = array[curId];
          array[curId] = array[randId];
          array[randId] = tmp;
        }
        this.setState({ cards:array });
    }

    reload(){
        this.componentDidMount();
        this.setState({turn:0 , win:false , err:0});
    }

    render(){
        let win = ()=>{
            if (this.state.win === true)
                return <Modal reload={this.reload} err= {this.state.err}/>
            else
                return "";
        }
        let cards = this.state.cards.map((card,i)=>{
            return <Card value={card[0]} color={card[1]} hidden={card[2]} found={card[3]} id={i} revealCard={this.revealCard} />
        });
        return (
            <div className="Board">
              <h1>Memoria</h1>
              <div className="grid">
                {
                    cards
                
                }

              </div>
              <h3>Errores : {this.state.err}</h3>
              {win()}
            </div>
          );
    }
  
}

export default Board;