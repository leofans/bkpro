class InputTest extends React.Component{




	render(){

		return (

				<div className="content-box">
					<div className="title"><h3>InputTest</h3></div>
					<form role="form">

						<InputTemplate label_name="ABC" ref_name="input_abc" placeholder_text="input abc" />
						<InputTemplate label_name="A1" ref_name="input_a1" placeholder_text="input a1" />
						<InputTemplate label_name="A2" ref_name="input_a2" placeholder_text="input a2" />
						<InputTemplate label_name="A3" ref_name="input_a3" placeholder_text="input a3" />
						<SelectInput />												
						<Submit_button ref_name="Submit_button" btn_value="submit"/>
					</form>
				
				</div>



		);

	}
};


class InputTemplate extends React.Component{

	render (label_name,ref_name,placeholder_text,defaultValue_text){
		return(
			<div className="form-group">
				<div  className="col-sm-3 label_box">
					<label>
						{this.props.label_name}
					</label>
				</div>
				<div className="col-sm-8">
					<input type="text" className="form-control" ref={this.props.ref_name} defaultValue={this.props.defaultValue_text} placeholder={this.props.placeholder_text} />
				</div>
			</div>
		)
	}
};

class SelectInput extends React.Component{

	constructor(props){
		super(props);
		this.state={
			dataList:[],
			listLength:0,
		}

	}

	componentDidMount(){


		fetch('http://192.168.3.36:8081/api/rest/users',
		{
			method:"GET",
			mode:'cors',
		})
		.then((res) => res.json())
		.then((jsonResult) => {
			this.setState({
				listLength:jsonResult.data.entries.length,
				dataList:jsonResult.data,
			});

		})
		.catch((error) => {			
			console.error('request error:' + error);
		});




	}


	li_onClick_f(e){
	  this.refs.dropdown_input.value = e.target.innerText
	};



	render (label_name,placeholder_text,defaultValue_text){
		var nameList=[];
		var input_value="";

		for(let i = 0; i < this.state.listLength; i++) {
			var entry =  this.state.dataList.entries[i];
			nameList.push(
				<li key={entry.id} onClick={this.li_onClick_f.bind(this)}>{entry.userName}</li>
			);
		}

		return(
			<div className="form-group">
				<div  className="col-sm-3 label_box">
					<label>
						{this.props.label_name}
					</label>
				</div>
				<div className="col-sm-8" >			
					<div className="input-group">
						<input type="text" className="form-control" ref="dropdown_input" defaultValue={this.props.defaultValue_text} placeholder={this.props.placeholder_text} value={input_value} />
						<div className="input-group-btn">
							<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
								Choose
								<span className="caret"></span>
							</button>
							<ul className="dropdown-menu pull-right dropdown_list">
								{nameList}
							</ul>
						</div>
					</div>
				</div>

			</div>
		)
	}	
};


class Submit_button extends React.Component{
	render (label_name,ref_name,btn_value){
		return(
			<div className="form-group">
				<div  className="col-sm-3 label_box">
					<label>
						{this.props.label_name}
					</label>
				</div>				
				<div ref={this.props.ref_name} className="col-sm-8">
					<button type="submit" className="btn btn-primary">{this.props.btn_value}</button>
				</div>
			</div>			
		)
	}
};


ReactDOM.render(
	<div className="container">
		<InputTest />
	</div>,
	document.getElementById('container')
);
