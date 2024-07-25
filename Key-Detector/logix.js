const GetDiv = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    GetDiv.innerHTML = `
    <table>
    <tr>
        <th>Keys</th>
        <th>KeyCode</th>
    </tr>
    <tr>
        <td>${e.key === ' ' ? 'space' : e.key}</td>
        <td>${e.code}</td>
    </tr>
   </table>
    `
})
