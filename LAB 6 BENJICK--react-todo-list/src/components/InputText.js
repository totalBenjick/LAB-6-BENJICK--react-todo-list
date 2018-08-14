import React,{Component} from "react";
import '../App.css';


class InputText extends Component{

  constructor(props){
    super(props);
    this.state = {
    term: '',
    items: []
    }
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      id: "",
      items: [...this.state.items, this.state.term]
    });
  }
  removeChild= (event)=>{
    event.preventDefault();
    console.log(event.target.parentNode.id);
    let taskIndex = event.target.parentNode.id;
    let newState= this.state.items;
     newState.splice(taskIndex, 1);
    this.setState(newState);


    }

  render(){
    let tasks = this.state.items
    console.log(this.state.items)
    return(
      <div className="InputText__div">
        <form className="input__div" onSubmit={this.onSubmit}>
          <input id="enterS" type="text" name="todo" placeholder="Nueva tarea" 
          value={this.state.term} onChange={this.onChange}/>
          <button>
            <i className="fa fa-plus"></i>
          </button>
        </form>
          <div>
               {tasks.map((task,i) =>{ 
                return <div  className="todo__list">
                  <div className="grid-container todo-item">
                      <div className="radioDiv">
                        <div className="proWid">
                          <label className="radiocheck-group">
                            <input value="on" type="checkbox"/>
                            <span> {task}</span>  {/*cuando retorne debe ser la tarea guardada*/}
                          </label>
                        </div>
                      </div>
                      <div className="fafaContainer" id={i} >
                        <i id="remove" className="fa fa-remove fa-2x" onClick={this.removeChild }></i>
                      </div>
                  </div>
                </div>
               })}

          </div>
      </div>
      );
  }
}

export default InputText;