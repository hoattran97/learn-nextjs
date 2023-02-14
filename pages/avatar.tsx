import useUser from './useUser';

function Avatar ({id}){
    const {user, isLoading, isError} = useUser(id)

    if(isLoading) return <Spinner />
    if(isError) return <Error />
    return <img src={user.avatar}/>
}