var Input=React.createClass({
	getInitialState:function(){
		return{value:'Hello!'};
	},
	HandleChange:function(e){
		this.setState({value:e.target.value});
	},

	render:function(){
		var value=this.state.value;
		return(
			<div>
				<input type="text" value={value} onChange={this.HandleChange} />
				<p>{value}</p>
			</div>
		);
	}
});

ReactDOM.render(
	<div>
	<MyTitle title={data}/>
	<MyComponent />
	<LikeButton />
	<Input />
	<Hello name="World" />
	<UserGist source="https://www.baidu.com/" />
	<RepoList promise='http://192.168.3.50:8080/api/rest/users' />

	</div>,
	document.getElementById('container')
);