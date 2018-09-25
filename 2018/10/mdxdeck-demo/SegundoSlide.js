import React, {Component} from 'react';

class SegundoSlide extends Component {
	state = {
		vezes: 0
	}

	handleClick = () => {
		const vezes = this.state.vezes + 1;
		this.setState({vezes});
	}

	render() {
		return (
			<div>
				<p>Você clicou {this.state.vezes} vezes</p>
				<button onClick={this.handleClick}>Clique</button>
			</div>
		)
	}

}

export default SegundoSlide;