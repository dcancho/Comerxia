// @ts-check

export class Usuario {
  constructor() {
    this.id = 1;
    this.nombre = "test";
    this.nombreUsuario = "JohnDoe";
    this.correoElectronico = "johndoe@example.com";
    this.contraseña = "54FJf&3?2@";
    this.telefono = "1234567890";
    this.direccion = "1234 Main St";
    this.ciudad = "Anytown";
    this.ubicacion = [525, 566];
    this.esVendedor = true;
    this.estaVerificado = true;
    this.cuentaBancaria = "1234567890";
    this.balance = 0;
  }
}

export class Producto {
  constructor() {
    this.id = 1;
    this.nombre = "producto de prueba";
    this.descripcion = "descripción del producto de prueba";
    this.precio = 20.5;
    this.cantidad = 100;
    this.categoria = "categoría de prueba";
    this.idVendedor = 1;
  }
}

export const baseDeDatosUsuarios = {
  datos: new Map(),
  getByNombreUsuario(nombreUsuario) {
    return this.datos.get(nombreUsuario);
  },
  get(id) {
    return this.datos.get(id);
  },
  add(usuario) {
    this.datos.set(usuario.id, usuario);
  }
};

export const baseDeDatosProductos = {
  datos: new Map(),
  get(id) {
    return this.datos.get(id);
  }
};

export class CarritoDeCompras {
  constructor() {
    this.productos = [];
    this.total = 0;
  }
  push(producto) {
    this.productos.push(producto);
  }
  getTotal() {
    return this.productos.reduce((suma, producto) => suma + producto.precio, 0);
  }
  remove(producto) {
    this.productos = this.productos.filter((p) => p.id !== producto.id);
  }
  discard() {
    this.productos = [];
    this.total = 0;
  }
}