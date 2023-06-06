import { UserProvider } from "./user-context"
import { MyComponent } from "./user"

export const Context = () => {

    const user = { name: 'Pavi' }

    return (
        <UserProvider value={user}>
            <MyComponent />
        </UserProvider>
    )
}