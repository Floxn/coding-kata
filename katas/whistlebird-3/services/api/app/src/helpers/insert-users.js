export const insertUsers = async (client, name, password, image) => {
    await client.query({
        text: 'INSERT INTO users (name, password, image) VALUES ($1, $2, $3)',
        values: [name ?? null, password ?? null, image.url ?? null]
    })
}