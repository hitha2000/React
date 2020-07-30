import React , {Component } from "react"
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props)
       
    }
  

    renderDish(dish){
        if(dish != null){
            return(
                <div key={dish.id} >
                     <Card>
                    <CardImg  width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
               </Card>
                </div>
               
            )
           
        }
        else{
            return(
                <div></div>
            )
        }
    }

    rendercomment(dish){
        if(dish== null){
            return(
                <div></div>
                )
        }
    
        const cmnts = dish.comments.map((comment)=>{
            return(
                <li key={comment.id}>
                   
                    <p>{comment.comment}</p>
                    <p>--{comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'}).format(new Date(comment.date))}
                    </p>
    
                    
                </li>
            )
        })

        return(
            <div>
                {cmnts}
            </div>
        )
    }

   
    render(){

       // const dish=this.props.dishes
        

     //   const dishItem={this.renderDish(this.props.dishes)}
       // const commentItem= {this.rendercomment(this.props.dishes)}

        return(
            

            
            <div className="row">
               <div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
               </div>
                
                
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {this.rendercomment(this.props.dish)}

                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default DishDetail