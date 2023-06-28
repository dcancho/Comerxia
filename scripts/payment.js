// @ts-check

import { Producto, Usuario, CarritoDeCompras, baseDeDatosProductos, baseDeDatosUsuarios } from "./database";

function pagoVendedor(producto) {
  const vendedor = baseDeDatosUsuarios.get(producto.idVendedor);
  if (!vendedor) {
    throw new Error("Vendedor no encontrado");
  }
  vendedor.balance += producto.precio;
}

function pagoCliente(usuario, carrito) {
  const total = carrito.getTotal();
  if (usuario.balance < total) {
    throw new Error("Fondos insuficientes");
  }
  usuario.balance -= total;

  carrito.productos.forEach(element => {
      pagoVendedor(element);
  });

  carrito.discard();
}