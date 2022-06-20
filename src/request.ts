export type User = { name: string; username: string }
export type UserList = Array<User & { password: string }>


export async function login(username: string, password: string) {
    const request = await fetch('./users.json')
    const userJson: UserList = await request.json()
    return userJson.find(s => s.password === password && s.username === username)
}