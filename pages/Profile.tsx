import { useState, useEffect} from 'react';

function Profile(){
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch('/api/profile-data')
            .then((res)=>res.json())
            .then((data)=>{
                setData(data)
                setLoading(true)
            })
    }, [])

    if(isLoading) return <p>Loading...</p>
    if(!data) return <p>No profile data</p>
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}