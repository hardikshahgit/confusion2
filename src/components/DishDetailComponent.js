import React from 'react';
import { Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({comments}) {
    if (comments != null) { 
        return(
            <div>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return (
                        <ul key={comment.id} className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    );
                })}       
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

    

const DishDetail = (props) => {
    const dish = props.dish;


    if (dish == null)
        return <div></div>
    else return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu" >Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardTitle className="m-1"><strong>{dish.name}</strong></CardTitle>
                        <CardText className="m-1">{dish.description}</CardText>
                    </Card>
                </div>
                <div className="col-xs-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        </div> 
    )
}
        
    
export default DishDetail;


