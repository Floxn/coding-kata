export const queryUsers = async (client) => {
    const users = await client.query('SELECT name, image FROM users ORDER BY created_at desc ')

    const response = await Promise.all(users.rows.map(async ({name, image}) => {
        return {
            name,
            image,
        }
    }))

    return response
}