import React, { Component} from 'react'
import Display from '../components/color/Display';


export default class ColorGen extends Component{
    state ={
        colors: [0,0,255],
        opacity: 0,
    }
   //20 ms refresh rate, check out the console for the baby console log
    componentDidMount(){
        let colors = [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
        ];
        // setTimeout(()=>{
            this.setState({colors: colors});
        // }, 2000);
        //for some reason the timeout eventually breaks and the whole square just goes chaotic
        setInterval(()=>{
            let color = this.randomColor();
            //creates an array thats a copy of current color roll and the color in state
            let a = color;
            let b = this.state.colors;
            let correct = 0;

            // loops through 3 times, the length of the rba values array
            for(let i =0; i < b.length; i++){
                if(a[i] === b[i]){
                    correct++;
                }
                //if its correct 3 times, the rgb color matches the previous one
                if(correct === 3) {
                    //they match so set opacity to 1, showing the picture
                    console.log('babypicture');
                    this.setState({opacity: 1});
                    correct = 0;
                    // this.setState({colors: this.randomColor()})
                } else {
                    this.setState({opacity: 0})
                    this.setState({colors: this.randomColor()});
                }
            }
        }, 20);
        
    }

    randomColor = () => {
        //so many colors, good luck finding the baby picture
        let color = [
            Math.floor(Math.random() * 45),
            150,
            Math.floor(Math.random() * 45)
            //shows that the baby picture will show if these numbers ever miraculously all land on the same value twice
            // uncomment the line below and comment out the 3 lines above
            // 255,255,255
        ];
        return color;
    }

    render(){
        const {colors, opacity} = this.state;
        let buildRgb = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        return(
            <>
                
                <Display color={buildRgb} opacity={opacity} />
            </>
        )
    }
}
