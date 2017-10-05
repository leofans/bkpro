
var names=['Alice','Emily','Kate'];

var arr=[
	<h1>Hello World!</h1>,
	<h2>React is awesome</h2>,
];
/**
var NodesList=React.createClass({
	render: function(){
		return (
			<ol>
				{
					React.Children.map(this.props.children,function(child){
						return <li>{child}</li>;
				})
				}
			</ol>
		);
	}
});

*/

var MyTitle=React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired,
	},

	getDefaultProps:function(){
		return{
			title:'Hello Begie'
		};
	},

	render: function(){
		return <h1>{this.props.title}</h1>;
	}
});
	
var data="123";


var MyComponent=React.createClass({
	begieClick:function(){
		this.refs.myTextInput.focus();
	},

	render:function(){
		return(
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" onClick={this.begieClick}/>
			</div>
		);
	}
});



var LikeButton=React.createClass({
	getInitialState:function(){
		return{liked:false};
	},

	theClick:function(e){
		this.setState({liked:!this.state.liked});
	},

	render:function(){
		var text=this.state.liked?'like':'doesn\'t like';
		return(
			<p onClick={this.theClick}>
				You {text} this. Click me to toggle.
			</p>
		);
	}
});

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


var Hello=React.createClass({
	getInitialState:function(){
		return{
			opacity:1.0
		};
	},

	componentDidMount:function(){
		this.timer=setInterval(function(){
			var opacity=this.state.opacity;
			opacity-=.05;
			if(opacity<0.1){
				opacity=1.0;
			}
			this.setState({
				opacity:opacity
			});
		}.bind(this),100);
	},

	render:function(){
		return(
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);	
	}	
});


var UserGist=React.createClass({
	getInitialState:function(){
		return{
			username:'',
			lastGistUrl:''
		};
	},

	componentDidMount:function(){
			var result=this.props.source;
			var lastGist=result[0];
			if(this.isMounted()){
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
	},

	render:function(){
		return(
			<div>
				{this.state.username}'s last gist is
				<a href={this.state.lastGistUrl}>here</a>.
			</div>
		);
	}
});


var RepoList=React.createClass({
	getInitialState:function(){
		return{loading:true,error:null,data:null};
	},

	componentDidMount:function(){
		this.props.promise.then(
			value=>this.setState({loading:false,data:value}),
			error=>this.setState({loading:false,error:error})
		);
	},

	render:function(){
		if(this.state.loading){
			return <span>Loading...</span>;
		}else if(this.state.error!==null){
			return <span>Error: {this.state.error.message} </span>;
		}else{
			var repos=this.state.data.items;
			var repoList=repos.map(function(repo){
				return (
					<li>
						<a href={repo.html_url}> {repo.name} </a>
						({repo.stargazers_count} stars)
						<br/>
						{repo.description}
					</li>
				);	
		});

		return(
			<main>
				<h1> Most Popular JavaScript Projects in Github </h1>
				<ol>
					{repoList}
				</ol>
			</main>
		);
			
		}

	}
});








ReactDOM.render(
	<div>
	<MyTitle title={data}/>
	<MyComponent />
	<LikeButton />
	<Input />
	<Hello name="World" />

	<getUserData />
	</div>,
	document.getElementById('container')
);



