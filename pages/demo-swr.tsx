import useSWR from 'swr'

export default function DemoSWR () {
    const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

    if(error) return <div>faild to load</div>
    if(isLoading) return <div>Loading ...</div>

    return (
        <div>Hello {data.name}</div>
    )
}