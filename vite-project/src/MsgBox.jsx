export default function MsgBox({username,textcolor}){
    const styles = {color:textcolor}
    return(
        <h1 style={styles}>Hello,{username}</h1>
    )
}