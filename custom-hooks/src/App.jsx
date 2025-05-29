import { UserInfo } from "./UserInfo"
import { useCurrentUserId } from "./useCurrentUserId"

function App() {
  const currentUserId = useCurrentUserId();

  return (
    <>
    <UserInfo userId="123" />
    <UserInfo userId="234" />
    <UserInfo userId={currentUserId} />
    </>
  )
}

export default App
