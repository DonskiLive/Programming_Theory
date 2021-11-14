export default function navigationView(isAuth, active, navClickHandler) {
    const div = document.createElement('div');
    div.className = 'nav';
    div.innerHTML = `
    <ul>
    ${isAuth ? `
        <li><a href="contacts" ${active === 'contacts' ? 'class = "active"' : ""}>Contacts</a></li>
          <li><a  href="add" ${active === 'add' ? 'class = "active"' : ""}>Add new contact</a></li>
          <li><a href="logout" ${active === 'logout' ? 'class = "active"' : ""}>logout</a></li>
        `: `<li><a href="login">Login</a></li>`
        }
    </ul>
    `;
    div.onclick = navClickHandler;
    return div
}

