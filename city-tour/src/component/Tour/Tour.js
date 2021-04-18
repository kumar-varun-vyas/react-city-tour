import React, { Component } from 'react'
import "./Tour.scss"
import {tourData} from "../../tour-data"
import bkn from '../../images/bikane.jpg.jpg'
export default class Tour extends Component {
    state={
        show : false
    }

    click= ()=>{
       this.setState(
           {show: this.state.show? false: true}
       )
    }
    render() {
        const {id ,city , name , info , image} = this.props.tour ;
        const { removeTour} =this.props;
        return (
            <article className="tour">
                <div className= "img-container">
                <img  src={image } 
                    alt ="sdf" />
                    <span className = 'close-btn' >
                                <i className= "fas fa-window-close" onClick={()=>{removeTour(id)}}/>
                            </span>
                </div>
                <div className= "tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{""}
                        <span>
                            <i className="fas fa-caret-square-down" onClick={this.click}/></span>
                    </h5>
                    {this.state.show && 
                    <p>
                      {info}
                    </p>}
                </div>

               

            </article>
        ) 
    }
}
