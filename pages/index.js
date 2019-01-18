import Fetch from 'isomorphic-unfetch';
import Layout from '../component/layout';

import Prices from '../component/prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitCoinPrice Zone</h1>
            <mark>Check Current Bitcoin Rate Real Time</mark>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log(data);

    return {
        bpi: data.bpi
    };
}

export default Index;