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

        const response = await fetch('https://covid19.mathdro.id/api');
        const data = await response.json();
        this.setState({ data: data, loading: false })
    }

    worldData = () => {
        const active = this.state.data.confirmed.value - this.state.data.deaths.value - this.state.data.recovered.value
        return (
            <div >
                <Grid container >
                    <Grid item xs={12} sm={6} md={8}>
                        <h1 align="left">WORLD</h1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h4 align="right col-4">LastUpdate : {this.state.data.lastUpdate}</h4>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box align="center" bgcolor="primary.main" color="primary.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Confirmed</strong></h2>
                            <h4>{this.state.data.confirmed.value}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box align="center" bgcolor="warning.main" color="warning.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Active</strong></h2>
                            <h4>{active}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box align="center" bgcolor="success.main" color="success.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Recovered</strong></h2>
                            <h4>{this.state.data.recovered.value}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box align="center" bgcolor="error.main" color="error.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Decreased</strong></h2>
                            <h4>{this.state.data.deaths.value}</h4>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );

    }


    // countryData = () => {
    //     const active = this.state.indiaData.confirmed.value - this.state.indiaData.deaths.value - this.state.indiaData.recovered.value
    //     return (
    //         <div>
    //             <Grid container >
    //                 <Grid item xs={12} sm={6} md={4}>
    //                     <h1 align="center">INDIA</h1>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={8}>
    //                     <h1 align="right col-4">LastUpdate : {this.state.indiaData.lastUpdate}</h1>
    //                 </Grid>
    //             </Grid>

    //             <Grid container spacing={2}>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Box align="center" bgcolor="primary.main" color="primary.contrastText" p={2}>
    //                         <h2><strong>Confirmed</strong></h2>
    //                         <h4>{this.state.indiaData.confirmed.value}</h4>
    //                     </Box>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Box align="center" bgcolor="warning.main" color="warning.contrastText" p={2}>
    //                         <h2><strong>Active</strong></h2>
    //                         <h4>{active}</h4>
    //                     </Box>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Box align="center" bgcolor="success.main" color="success.contrastText" p={2}>
    //                         <h2><strong>Recovered</strong></h2>
    //                         <h4>{this.state.indiaData.recovered.value}</h4>
    //                     </Box>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Box align="center" bgcolor="error.main" color="error.contrastText" p={2}>
    //                         <h2><strong>Decreased</strong></h2>
    //                         <h4>{this.state.indiaData.deaths.value}</h4>
    //                     </Box>
    //                 </Grid>
    //             </Grid>
    //         </div>
    //     );
    // }
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