import React from 'react'

const Plans = (props) => {

  const colors = ["green","yellow","red","blue","orange","pink","cyan"];
    function getColor (){
      var len = colors.length;
      var randomNum = Math.floor(Math.random()*len);
      var color = colors[randomNum];
      colors.splice(randomNum, 1);
      return color;
    }

    
    return (
        <div className="Plans">
            <button style={{backgroundColor: getColor()}} className="Button"></button>
            <h1 >Plans are: {props.plan.body}</h1>
        </div>
    );
}

export default Plans;