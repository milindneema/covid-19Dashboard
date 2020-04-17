import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class DisplayData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: null,
        };
    }

    async componentDidMount() {

        const response = await fetch('https://corona.lmao.ninja/v2/all');
        const data = await response.json();
        this.setState({ data: data, loading: false })
    }

    worldData = () => {
        return (
            <div >
                <Grid container >
                    <Grid item xs={6}>
                        <h1 align="left">WORLD</h1>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <h3 align="right col-4">LastUpdate : {new Date(this.state.data.updated).toLocaleString()}</h3>
                    </Grid>
                </Grid>

                <Grid container spacing={2} ml={4} mr={4}>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} height="75%" align="center" bgcolor="primary.main" color="primary.contrastText" borderRadius="10%" p={2} >
                            <h2><strong>Confirmed</strong></h2>
                            <h4 >{this.state.data.cases} <span>&nbsp;&nbsp;&nbsp;&nbsp;+{this.state.data.todayCases}</span></h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} height="75%" align="center" bgcolor="warning.main" color="warning.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Active</strong></h2>
                            <h4>{this.state.data.active}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} height="75%" align="center" bgcolor="success.main" color="success.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Recovered</strong></h2>
                            <h4>{this.state.data.recovered}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} height="75%" align="center" bgcolor="error.main" color="error.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Decreased</strong></h2>
                            <h4>{this.state.data.deaths} <span>&nbsp;&nbsp;&nbsp;&nbsp;+{this.state.data.todayDeaths}</span></h4>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );

    }
    render() {
        return (
            <div>
                {this.state.loading ? <div><p>Loading...</p></div> : <Container fixed>
                    {this.worldData()}
                </Container>}
            </div>
        )
    }

}
export default DisplayData;