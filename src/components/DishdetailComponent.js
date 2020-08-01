import React from "react"
import {Card, CardImg, CardText, 
    CardBody, CardTitle, BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom'


   
  

  function  RenderDish({dish}){
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

   function Rendercomment({cmnt}){
        if(cmnt== null){
            return(
                <div></div>
                )
        }
    
        const cmnts = cmnt.map((comment)=>{
            return(
                <li key={comment.id}>
                   
                    <p>{comment.comment}</p>
                    <p>--{comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
    
                    
                </li>
            )
        });

        return(
            <div>
                 <h4>Comments</h4>
                {cmnts}
            </div>
        )
    }

   
    const DishDetail = (props) => {
        return(
            

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                       
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
             
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                
                
                <div className="col-12 col-md-5 m-1">
                   
                    <ul className="list-unstyled">
                   <Rendercomment cmnt={props.comments}/>
                    </ul>
                    
                </div>
            </div>
            </div>
           
        )
    

    }

       // const dish=this.props.dishes
        

     //   const dishItem={this.renderDish(this.props.dishes)}
       // const commentItem= {this.rendercomment(this.props.dishes)}

      

export default DishDetail