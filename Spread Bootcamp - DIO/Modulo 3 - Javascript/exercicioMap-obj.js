function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set("Matheus", "Dev");
usuarios.set("Evan", "Admin");
usuarios.set("Vinicius", "Dev");
usuarios.set("Pacote", "Admin");

console.log(getAdmins(usuarios));
