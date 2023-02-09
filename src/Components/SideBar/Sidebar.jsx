
const SideBar = ({}) => {
    return(
        <table>
            <td>
                <h2>Collections</h2>
                <tr><a href="http://127.0.0.1:8000/api/collections/1/">Flutter</a></tr>
                <tr><a href="http://127.0.0.1:8000/api/collections/2/">CSS</a></tr>
                <tr><a href="http://127.0.0.1:8000/api/collections/3/">PANDAS</a></tr>
                <button> <a href="http://127.0.0.1:8000/api/collections/2/cards/"> ADD CARD</a></button>
            </td>
        </table>
    )
}

export default SideBar;
