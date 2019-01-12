import { Usuario } from './usuario';
export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {}

    // Agregar un usuario
    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for( let usr of this.lista) {
            if (usr.id === id) {
                usr.nombre = nombre;
                break;
            }
        }
        console.log('Actualizando usuario');
        console.log(this.lista);
    }

    // Obtener lista de usuario
    public getLista() {
        return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
    }

    // Obtener un usuario
    public getUsuario(id: string) {
        return this.lista.find(usuario => usuario.id === id);
    }

    // Obtener todos los usuarios en una sala en particular
    public getUsuariosSala(sala: string) {
        return this.lista.filter(usuario => usuario.sala === sala);
    }

    // Borrar un usuario cuando deja la sala
    public borrarUsuario(id: string) {
        const tmpUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tmpUsuario;
    }

}