import React, { Component } from 'react';
import './Styles/App.css';
import "./Styles/quizMaker.css";


class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: "sfs", test: "",
      object: <input></input>,
      inputs: ['input-0'],
      text: '',
      newText: "",
      refresh: false,
      variableNumber: 0,
      outputArray:'',
      outputs: [],
    };

    this.x = [];
    // this.addTag = this.addTag.bind(this);
    this.appendToArray = this.appendToArray.bind(this);
  }



  appendToArray(ex) {
    var newInput = 'input-${this.state.inputs.length}';
    this.setState({ newText: this.state.newText + this.state.text })
    this.state.inputs[0] = "fqwe"
    console.log(this.state.inputs)


    switch (ex) {
      case "string":
        this.setState({ inputs: this.state.inputs.concat(["string"]) });
        break;
      case "sqrt":
        this.setState({ variableNumber: this.state.variableNumber + 1, inputs: this.state.inputs.concat(["a" + this.state.variableNumber.toString(), "string"]) });
        break;
      default:
        this.setState({ inputs: this.state.inputs.concat([]) });
        break;
    }
    //console.log(this.state.newText)
  }


  onChangeAge() {
    this.setState({ refresh: !this.state.refresh })
  }


  render() {
    return (
      <div style={{ backgroundColor: "#272637", width: "100%", height: 900 }}>
        <div style={{ paddingTop: 200, paddingLeft: 50 }}>

          <div style={{ fontSize: 50, color: 'white' }}>QuizMaker</div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: 600, height: 300, backgroundColor: "white", borderRadius: 20, padding: 20 }}>
              <div id="canvas">
                {this.state.inputs.map((item, index) => {
                  //console.log("The current iteration is: " + index);
                  if (item == "string") {
                    return (<input id="textBox"
                      onChange={(e) => {
                        this.x = this.state.inputs;
                        this.x[index] = e.target.value;
                        console.log("=====")
                        console.log(this.x)
                        console.log("=====")
                        // this.onChangeAge();
                      }
                      }


                    />)
                  }
                  else if (item[0] == "a") {
                    return (<input style={{ borderRadius: 100, borderWidth: 0, margin: 10, backgroundColor: 'red', textAlign: 'center', width: 50, height: 50 }} value={item} onChange={this.onChangeAge.bind(this)} />)
                  }
                  else {
                    return (<input id="textBox" onChange={this.onChangeAge.bind(this)} />)

                  }
                }
                )}
              </div>
            </div>

            <div style={{ marginLeft: 30 }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button id="addVariable" onClick={() => this.appendToArray("sqrt")}> Add Variable </button>

                <div style={{ fontSize: 30, color: 'white' }}> Math Functions </div>
                <div style={{ width: 400, flexWrap: 'wrap' }}>
                  <button id="mathButtons" onClick={() => this.setState({outputArray:this.state.outputArray+'Math.sqrt'})}> sqrt </button>
                  <button id="mathButtons"  onClick={() => this.setState({outputArray:this.state.outputArray+'+'})}> add </button>
                  <button id="mathButtons"  onClick={() => this.appendToArray("sqrt")}> sub </button>
                  <button id="mathButtons"  onClick={() => this.appendToArray("sqrt")}> div </button>
                  <button id="mathButtons"  onClick={() => this.appendToArray("sqrt")}> mul </button>
                  <button id="mathButtons"  onClick={() => this.appendToArray("sqrt")}> mod </button>
                  <button id="mathButtons"  onClick={() => console.log(this.x)}> array output </button>

                </div>
              </div>
            </div>
          </div>


          <div>
            <div style={{ fontSize: 20, color: 'white', marginBottom: 10, }}>Ouput</div>
            <div style={{flexDirection:'row', display:'flex'}}>
            <div style={{ width: 650, borderRadius: 10, height: 40, backgroundColor: 'white' }}>
            {this.state.outputArray}
            </div>
            <div style={{backgroundColor:'green', color:'white', padding:10, borderRadius:15, marginLeft:10}}>Add Another output</div>
            </div>
          </div>


          <div id="canvas">
            {this.state.inputs.map((item, index) => {
              //console.log("The current iteration is: " + index);
              if (item[0] == "a") {
                return (<button style={{ borderRadius: 100, borderWidth: 0, margin: 10, backgroundColor: 'red', textAlign: 'center', width: 50, height: 50 }} 
                onClick={()=>{this.setState({outputArray:this.state.outputArray+item})}}
                onChange={this.onChangeAge.bind(this)}> 
                {item}
                </button>
                )
              }

            }
            )}

          </div>

          <div>
            <div style={{ fontSize: 20, color: 'white', marginBottom: 10, }}>Ouput</div>
            <div style={{flexDirection:'row', display:'flex'}}>
            <div id="canvas">
            {this.state.outputArray}
            {this.state.outputs.map((item, index) => {
              //console.log("The current iteration is: " + index);
                return (  <input style={{ width: 650, borderRadius: 10, height: 40, backgroundColor: 'white' }}/>
              )
              })
            }
          </div>
            <div onClick={()=> this.setState({ outputs: this.state.outputs.concat(["string"]) }) } style={{backgroundColor:'green', color:'white', padding:10, borderRadius:15, marginLeft:10}}>Add Another output</div>
            </div>
          </div>


        

        </div>
      </div>
    );
  }
}

export default App;
