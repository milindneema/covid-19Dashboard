import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: null,
        };
    }

    async componentDidMount() {

        this.props.data.map((country) => {
            if (country.country === "India") {
                this.setState({ data: country, loading: false });
            }
        });
    }



    IndiaData = () => {
        return (
            <div >
                <Grid container >
                    <Grid item xs={6} sm={6} md={8}>
                        <h1 align="left">India</h1>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} align="center" bgcolor="primary.main" color="primary.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Confirmed</strong></h2>
                            <h4>{this.state.data.cases}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} align="center" bgcolor="warning.main" color="warning.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Active</strong></h2>
                            <h4>{this.state.data.active}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} align="center" bgcolor="success.main" color="success.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Recovered</strong></h2>
                            <h4>{this.state.data.recovered}</h4>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Box boxShadow={15} align="center" bgcolor="error.main" color="error.contrastText" borderRadius="10%" p={2}>
                            <h2><strong>Decreased</strong></h2>
                            <h4>{this.state.data.deaths}</h4>
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
                    {this.IndiaData()}
                </Container>}
            </div>
        )
    }

}
export default Country;