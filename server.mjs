import * as fs from "fs";
import {ApolloServer} from "apollo-server";
import {loadSchemaSync} from "@graphql-tools/load";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {addResolversToSchema} from "@graphql-tools/schema";

const jsonDataRaw = fs.readFileSync('data.json');
const jsonData = JSON.parse(jsonDataRaw);

const schema = addResolversToSchema({
    schema: loadSchemaSync('./schema.graphql', {
        loaders: [new GraphQLFileLoader()],
    }),
    resolvers: {
        Query: {
            dataTables: () => jsonData.dataTables,
            dataTable: (parent, args) => jsonData.dataTables.find(table => table.id === args.id)
        },
    },
});

const server = new ApolloServer({schema});

server.listen().then(({url}) => {
    console.log(`GraphQL Server listening at ${url}`);
});
