function dateCurrent(date:any){
    return date.toLocaleDateString();
}

export default function DemoProps(props: any){
    return (
        <div>
            <div>{props.text}</div>
            <img 
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
            <div>{dateCurrent(props.date)}</div>
        </div>
    )
}

export const comment = {
    text: 'Hôm nay tôi buồn một mình trên phố đông...',
    author: {
        avatarUrl: 'http://placekitten.com/g/64/64',
        name: 'Xin chào'
    },
    date: new Date()
}