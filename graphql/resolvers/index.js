import { searcherResolver } from './searcher';

export const resolvers = {
    Itunes:{
        id(parent){ return 'ITN'+parent.collectionId; },
    },

    Show:{
        id(parent){ return 'TVM'+parent.id; }
    },

    Crcind:{
        id(parent){ return 'CRC'+parent.ID; },
        name(parent){ return parent.Name }
    },

    Query: {
        ...searcherResolver.Query
    }
}
