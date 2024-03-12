import { Usuario } from "./usuarios";

function main() {
  const usuario = new Usuario();
  usuario.agregarFechaCompra(new Date("2024-01-01"));
  console.log(usuario.diasDesdeLaUltimaCompra());
}

main();
