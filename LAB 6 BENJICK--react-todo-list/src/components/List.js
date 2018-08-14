import React,{Component} from "react"

class List extends Component{
	render(){
		return(


		<div className="todo__list">
          <div className="grid-container todo-item">
              <div className="radioDiv">
                <div className="proWid">
                  <label className="radiocheck-group">
                    <input value="on" type="checkbox"/>
                    <span> {}</span>  {/*cuando retorne debe ser la tarea guardada*/}
                  </label>
                </div>
              </div>
              <div className="fafaContainer">
                <i className="fa fa-remove fa-2x"></i>
              </div>
          </div>
        </div>
		);
	}

}

export default List;