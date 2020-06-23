import React, {Component} from 'react';
import Components from './Components/grid';
import {TextField,Button} from '@material-ui/core';

 

class App extends React.Component {

	constructor(){
		super();

		this.state = {
			api_data : {},
			isLoaded: false,
			isSubmitted:false,
			hash_tag: '',
			media_count:0,
		};

		this.submitHashTagEvent=this.submitHashTagEvent.bind(this);
		this.changeHashTagEvent=this.changeHashTagEvent.bind(this);
		this.resetForm=this.resetForm.bind(this);
		this.clickItemEvent=this.clickItemEvent.bind(this);

	 
	}
 

	  submitHashTagEvent(event){

		
	
		//console.log('submit: ', event.key);


		if(event.key!='Enter'){
			return;	
		}
		let hash_tag= this.state.hash_tag;

		const url= 'https://www.instagram.com/explore/tags/'+hash_tag+'/?__a=1';
	 
		if(!hash_tag){
			alert('input hashtag');
			return;
		}
		this.setState({
			isSubmitted:true,
		})
		
		fetch(url)
		.then(res=>res.json())
		.then(result=>{
			
			this.setState({
				api_data: result,
				isLoaded:true,
				media_count:result.graphql.hashtag.edge_hashtag_to_media.count
			})
			console.log(result);
	
		})
	  }

	  changeHashTagEvent(event){
		 
			this.setState({
				isSubmitted:false,
				isLoaded:false,
				hash_tag : event.target.value,
			});
		 
		  
			
	  }
	  resetForm(){
			this.setState({
				isSubmitted:false,
				isLoaded:false,

			})
	  }

	  clickItemEvent(node){
			console.log('click: ',node);
	  }
		 
  render(){

	


		return (
			<div > 
				 
				 <form  autoComplete="off"  onSubmit={e => e.preventDefault()}>
					 <div style={{'width':'100%','textAlign':'center'}}>
						<TextField autocomplete='off'  id="standard-success" label="Hash tag name"   color="success"  value={this.state.hash_tag} onChange={this.changeHashTagEvent} style={{'width':'200px','top':'30px'}} onKeyDown={this.submitHashTagEvent} />
					</div>
				</form>
				{this.state.isSubmitted && this.state.isLoaded &&<Components clickItemEvent={this.clickItemEvent} data={this.state.api_data.graphql.hashtag.edge_hashtag_to_media.edges}></Components>}
				{this.state.isSubmitted && !this.state.isLoaded && <h1 style={{'width':'100%','textAlign':'center','position':'absolute','top':'120px'}}>Loading..</h1>}
				{this.state.isLoaded && this.state.media_count && <h1 style={{'width':'100%','position':'absolute','top':'120px','textAlign':'center'}}> {this.state.media_count} </h1>}
			</div>

		)
		
   
  }
} 
    
 
export default App;
