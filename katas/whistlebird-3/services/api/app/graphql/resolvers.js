import {insertPost} from "../src/helpers/insert-post.js"
import {insertUsers} from "../src/helpers/insert-users.js";
import {queryPosts} from "../src/helpers/query-posts.js"
import {queryUsers} from "../src/helpers/query-users.js";

export const resolvers = {
    Query: {
        hello: () => 'hi graphql',
        posts: async (parent, args, {client}, info) => {
            const data = await queryPosts(client)
            client.end()
            return data
        },
        users: async (parent, args, {client}, info) => {
            const data = await queryUsers(client)
            client.end()
            return data
        }
    },
    Mutation: {
        post: async (parent, {message}, {client, token}, info) => {
            await insertPost(client, message, token)
            client.end()
            return ({success: 'OK'})
        },
        user: async (parent, {name, password}, {client, token}, info) => {
            const image = await fetch('https://picsum.photos/200', { method: 'GET', redirect: 'follow'})

            await insertUsers(client, name, password, image)
            client.end()
            return ({success: 'OK'})
        }
    }
}
