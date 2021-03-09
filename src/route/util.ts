import { useHistory } from 'react-router-dom'
import { urlPath } from './path'

export const useRouter = () => {
    const h = useHistory()
    return {
        gotoHomePage: () => h.push(urlPath.home),
        gotoHistoryPage: () => h.push(urlPath.history)
    }
}