import React, { Component} from 'react'
import Display from '../components/color/Display';


export default class ColorGen extends Component{
    state ={
        // color: '#FF0000',
        colors: [0,0,255],
        opacity: 0,
    }
   
    componentDidMount(){
        let colors = [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
        ];
        setTimeout(()=>{
            this.setState({colors: colors});
        }, 2000);
        
    }
    componentDidUpdate(){
        let colors = [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
            //shows that the baby picture will show if these numbers ever miraculously all land on the same value twice
            //uncomment the line below and comment out the 3 lines above
            // 255,255,255
        ];
        //for some reason the timeout eventually breaks and the whole square just goes chaotic
        setTimeout(()=>{
            //creates an array thats a copy of current color roll and the color in state
            let a = colors;
            let b = this.state.colors;
            let correct = 0;
            //loops through 3 times, the length of the rba values array
            for(let i =0; i < b.length; i++){
                if(a[i] === b[i]){
                    correct++;
                }
                //if its correct 3 times, the rgb color matches the previous one
                if(correct === 3) {
                    //they match so set opacity to 1, showing the picture
                    this.setState({opacity: 1});
                } else {
                    this.setState({colors: colors});
                }
            }
            //bringing this code back in
            // if(colors == this.state.colors){
            //     this.setState({opacity: 1})
            //     this.setState({colors: colors})
                
            // } else {
            //     this.setState({colors: colors});
            // }
        }, 2000);
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
