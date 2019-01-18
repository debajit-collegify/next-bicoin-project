class Prices extends React.Component {

    state = {
        currency: 'USD'
    }




    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Bitcoin rate for {this.props.bpi[this.state.currency].description} :
                        &nbsp;<span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span>&nbsp;
                        <strong>{this.props.bpi[this.state.currency].rate}</strong>
                    </li>
                </ul>
                <br/>
                <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <hr/>
                <p className="h3">Details of Pricing</p>

                <div className="card">
                    <div className="card-header">
                        {this.state.currency}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Bitcoin rate : {this.props.bpi[this.state.currency].description}</h5>
                        <p className="card-text">{this.props.bpi[this.state.currency].code}</p>
                        <p className="card-text">{this.props.bpi[this.state.currency].rate}</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Prices;