import { gql } from 'apollo-server';

//TODO: let the query use the real image data

export const typeDefs = gql`
    
    type Itunes{
        id: ID
        wrapperType: String
        kind: String
        artistId: Int
        collectionId: Int
        trackId: Int
        artistName: String
        collectionName: String
        trackName: String
        collectionCensoredName: String
        trackCensoredName: String
        artistViewUrl: String
        collectionViewUrl: String
        trackViewUrl: String
        previewUrl: String
        artworkUrl30: String
        artworkUrl60: String
        artworkUrl100: String
        collectionPrice: Float
        trackPrice: Float
        releaseDate: String
        collectionExplicitness: String
        trackExplicitness: String
        discCount: Int
        discNumber: Int
        trackCount: Int
        trackNumber: Int
        trackTimeMillis: Int
        country: String
        currency: String
        primaryGenreName: String
        isStreamable: Boolean
    }

    type Country{
        name: String
        code: String
        timezone: String
    }

    type Schedule{
        time: String,
        days: [String]
    }

    type Network{
        id: ID
        name: String
        country: Country
    }

    type Rating{
        average: Float
    }

    type Image{
        medium: String
        original: String
    }

    type Externals{
        tvrage: Int
        thetvdb: Int
        imdb: String
    }

    type WebChannel {
        id: ID
        name: String
        country: Country
    }

    type Self{
        href: String
    }

    type Previousepisode{
        href: String
    }

    type Link {
        self: Self
        previousepisode: Previousepisode
    }

    type Show{
        id: ID
        url: String
        name: String
        type: String
        language: String
        genres: [String]
        status: String
        runtime: Int
        premiered: String
        officialSite: String
        schedule: String
        rating: Rating
        weight: Int
        network: Network
        webChannel: WebChannel
        externals: Externals
        image: Image
        summary: String
        updated: Int
        links: Link
    }

    type Tvmaze{
        score: Float
        show: Show
    }

    type test{
        score: Float
    }

    type Crcind{
        id: ID
        name: String
        DOB: String
        SSN: String
    }

    type Page{
        itunesMusic: [Itunes]
        itunesMovie: [Itunes]
        tvmaze: [Tvmaze]
        crcind: [Crcind]
        total: Int
    }

    type Query{
        find(search: String!): Page!
    }
`;