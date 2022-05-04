function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Eduarda', 'Admin');
usuarios.set('Beatriz', 'Admin');
usuarios.set('Cauã', 'User');

console.log(getAdmins(usuarios));