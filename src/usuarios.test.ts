import test from "ava";
import { diasDesde } from "./fechas";
import { Usuario } from "./usuarios";
test("probamos la clase usuario para su correcto funcionamiento", t =>{
    let ruben = new Usuario
 ruben.agregarFechaCompra(new Date("2024-05-06"));
 let ultimaCompra = ruben.obtenerUltimaCompra()
    t.is(ultimaCompra.getDate(), new Date("2024-05-06").getDate());
})