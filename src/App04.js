// App04.js

import { Component } from "react";

class App extends Component{
    state={
        isRun:false
    }

    render(){
        const myName="kim";
        const myP=<p>p2 입니다.</p>
        let isRun = false;

        return(
            <div className="container">
                <h1>jsx 객체 활용하기</h1>
                {<p>p 요소 입니다.</p>}
                {"kim"}
                <br />
                {myName}
                <br />
                <p>p1 입니다.</p>
                {myP}
                <h2>아래가 달려요 인지 달리지 않아요 인지 확인!</h2>
                { true ? <p>달려요</p> : <p>달리지 않아요</p>}
                <h2>아래가 달려요 인지 달리지 않아요 인지 확인!</h2>
                { isRun ? <p>달려요</p> : <p>달리지 않아요</p>}
                <h2>state 값 활용</h2>
                달리려면 체크 <input type="checkbox" checked={this.state.isRun} onChange={this.handleChange}/>
                <br />
                {this.state.isRun ? <p>달려요</p> : <p>달리지 않아요</p>}
                <h2>아래가 로그인중인지 확인!</h2>
                { true && <p>구라님 로그인중...</p>}
                <h2>아래가 로그인중인지 확인!</h2>
                { false && <p>구라님 로그인중...</p>}
                <h2>아래가 로그인중인지 확인!</h2>
                { isRun && <p>구라님 로그인중...</p>}
                <h2>아래가 로그인중인지 확인!</h2>
                { this.state.isRun && <p>구라님 로그인중...</p>}
            </div>
        );
    }
    //체크박스에 체크 상태가 변했을때 호출되는 함수
    handleChange = (e)=>{
        this.setState({
            isRun:e.target.checked
        });
    }

}

export default App;