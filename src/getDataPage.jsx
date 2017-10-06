class GetData extends React.Component{

	constructor(props){
		super(props);
		this.state={
			dataList:[],
			dataLength:0,
		}

	}

	componentDidMount(){
		this.getNet();
	}

	getNet(){
		fetch('http://192.168.3.36:8081/api/rest/users',
		{
			method:"GET",
			mode:'cors',
		}
		)
		.then((res) => res.json())
		.then((jsonResult) => {
			this.setState({
				dataLength:jsonResult.data.entries.length,
				dataList:jsonResult.data,
			});

		})
		.catch((error) => {			
			console.error('request error:' + error);
		});
	},

	render: function(){

		var nameList = [];
		for(let i = 0; i < this.state.dataLength; i++) {
			var name =  this.state.dataList.entries[i];
			nameList.push(name);
		}



		return(
			<table className="table table-hover">
			<thead>
			<tr>
			<td>id</td>
			<td>userName</td>
			<td>createTs</td>
			<td>remark</td>
			<td>active</td>
			</tr>
			</thead>
			<tbody>
			{

				nameList.map(function(item){
					trr.push(<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.userName}</td>
						<td>{item.createTs}</td>
						<td>{item.remark}</td>
						<td>{item.active}</td>
						</tr>);

				})

			}				
			{trr}		
			</tbody>		
			</table>
			)

	}
}

ReactDOM.render(
	<div>
	<GetData />
	</div>,
	document.getElementById('container')
	);