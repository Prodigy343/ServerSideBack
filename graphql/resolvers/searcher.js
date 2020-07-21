import axios from 'axios';
var soap = require('soap');

export const searcherResolver = {
    Query: {
        async find(_, {search}, context, info){
            try {
                if(!search)
                    return {
                        itunesMusic: [],
                        itunesMovie: [],
                        tvmaze: [],
                        crcind: []
                    };

                //TV Maze Request
                let tvmazeData = await axios.get('https://api.tvmaze.com/search/shows?q='+search);

                //iTunes 
                let itunesMusicData = await axios.get('https://itunes.apple.com/search?term='+search+'&media=music');
                let itunesMovieData = await axios.get('https://itunes.apple.com/search?term='+search+'&media=movie');

                //CRCIND 
                let crc = [];
                let client = await soap.createClientAsync('http://www.crcind.com/csp/samples/SOAP.Demo.cls?WSDL');
                let response = await client.GetByNameAsync({name: search});


                tvmazeData.data.sort((a, b) => {
                    if (a.show.name < b.show.name) return -1;
                    if (a.show.name > b.show.name) return 1;
                    return 0;
                });
                itunesMusicData.data.results.sort((a, b) => {
                    if (a.trackName < b.trackName) return -1;
                    if (a.trackName > b.trackName) return 1;
                    return 0;
                });
                itunesMovieData.data.results.sort((a, b) => {
                    if (a.trackName < b.trackName) return -1;
                    if (a.trackName > b.trackName) return 1;
                    return 0;
                });
                crc = response[0].GetByNameResult.diffgram.ListByName==null?[]:response[0].GetByNameResult.diffgram.ListByName.SQL;
                crc.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });

                return {
                    itunesMusic: itunesMusicData.data.results,
                    itunesMovie: itunesMovieData.data.results,
                    tvmaze: tvmazeData.data,
                    crcind: crc
                };
            } catch (e) {
                throw e;
            }
        },

    }
};