import React from "react"

class App extends React.PureComponent {
  divRef=undefined
  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      array:[1,2,3],
      width: undefined
    }
    this.divRef = React.createRef()
  }
componentDidUpdate(prevProps, prevState, snapshot) {
}

  onClick = () => {
    this.setState((state) => ({n: state.n + 1}))
    // this.setState(state => ({n: state.n - 1}))
  }

  /*shouldComponentUpdate(nextProps, nextState, nextContext) {
      /!*if(nextState.n === this.state.n){ //如果新的 state.n === 当前 state.n
          return false
      }else{
          return true
      }*!/
      return nextState.n !== this.state.n;
  }*/

  componentDidMount() {
    /*const div=document.getElementById('xxx')
    const {width} = div.getBoundingClientRect()
    // const width = div.getBoundingClientRect().width   解构赋值
    this.setState({width})*/
    const div=this.divRef.current
    console.log(div)
    const {width}=div.getBoundingClientRect()
    this.setState({width})
  }

  render() {
    return(
      <div ref={this.divRef}>Hello World, <br/> 窗口宽{this.state.width}px</div>

    )

    /*return this.state.array.map(n=><div key={n}>{n}</div>)*/
    /*return (
      <>
        {this.state.n % 2 === 0 ?
          <div>偶数</div> :
          <span>奇数</span>
        }
        <button onClick={this.onClick}>+1</button>
      </>
    )*/
    /*const x = (
      <>
        <div>hhh</div>
        <div>App
          <div>
            {this.state.n}
            <button onClick={this.onClick}>+1</button>
          </div>
        </div>
      </>
    )
    console.log(x) //虚拟 DOM
    return x*/
  }
}

export default App


/*class App extends React.Component {
  constructor(props){super(props)
    this.state={x:1}
  }
  onClick=()=>{
    /!*this.setState(
        {x:this.state.x +1} //2
    )
    this.setState(
        {x:this.state.x +1} //2
    )*!/
    this.setState({
      x:this.state.x +1
    },()=>{ //当前面的 setState 成功之后会调用后面的 函数
      this.setState({
        x:this.state.x+1
      })
    })
  }
  onClick2=()=>{
    // this.setState(( state, props) => newState , fn)
    this.setState((state)=>({x:state.x +1}/!*,fn*!/))
    this.setState((state)=>({x:state.x +1}))
    //函数的形式会执行两个 +1，所以结果就是3
  }
  render() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="App">
          App <button onClick={this.onClick}>+1</button>
          <B name={this.state.x}/>
        </div>
    );
  }
}
class B extends React.Component{
  UNSAFE_componentWillReceiveProps(newProps, nextContext) {
    console.log('旧的 props')
    console.log(this.props)
    console.log('新的props')
    console.log(newProps)
  }

  render(){
    return(
        <div>{this.props.name}</div>
    )
  }
}

export default App;*/
