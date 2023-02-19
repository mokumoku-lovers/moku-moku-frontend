import { useDispatch } from 'react-redux'
import { createNoti, removeNoti } from '../features/notification/notificationSlice'
const { v4: uuidv4 } = require('uuid')

const useNotification = () => {
    const dispatch = useDispatch()
    const id = uuidv4()

    const setNoti = ({ msg, type }) => {
        dispatch(
            createNoti({
                id: id,
                type: type ?? 'info',
                message: msg,
            })
        )

        setTimeout(() => {
            dispatch(removeNoti(id))
        }, 3000)
    }

    return setNoti
}

export default useNotification
