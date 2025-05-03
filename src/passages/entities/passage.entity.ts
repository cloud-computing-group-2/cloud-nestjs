import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * {

  "id_pasaje": "PAS12345",

  "id_pasajero": "PASAJERO6789",

  "id_vuelo": "VUELO001",

  "fecha_compra": "2025-05-01T10:30:00Z",

  "clase": "Económica",

  "precio": 350.00,

  "asiento": "12A",

  "pago": {

    "id_pago": "PAGO98765",

    "metodo_pago": "tarjeta",

    "monto": 350.00,

    "fecha_pago": "2025-05-01T10:32:00Z",

    "estado_pago": "confirmado"

  },
 */
@Entity(
    {
        comment: "Pasajes"
    }
)
export class Passage {
    
    @PrimaryGeneratedColumn()
    id: UUID

    @Column({ nullable: false })
    passengerId: UUID // FIXME: change with entity one-to-one

    @Column({ nullable: false })
    flightId: UUID // FIXME: change with entity one-to-one

    
}
