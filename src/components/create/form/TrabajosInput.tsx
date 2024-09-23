import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/react"
import type { Trabajo } from "../../../utils/definitions.ts"
import type { SetStateAction, Dispatch } from "react"
import {
  handleTrabajoChange,
  handleAddTrabajo,
} from "../../../utils/handleFunctions.ts"

export default function TrabajosInput({
  trabajos,
  setTrabajos,
}: {
  trabajos: Trabajo[]
  setTrabajos: Dispatch<SetStateAction<Trabajo[]>>
}) {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Занятость</h2>
      {trabajos.map((trabajo, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Должность"
            name="trabajo"
            isRequired
            value={trabajo.trabajo}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Input
            type="text"
            label="Компания"
            name="empresa"
            isRequired
            value={trabajo.empresa}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Input
            className="text-black"
            type="date"
            label="Дата начала"
            name="fecha"
            value={trabajo.fecha}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Textarea
            name="descripcion"
            placeholder="¿Какие задачи ты выполняешь на работе?"
            label="Описание"
            value={trabajo.descripcion}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
        </div>
      ))}
      <Button
        color="secondary"
        variant="ghost"
        type="button"
        onClick={() => handleAddTrabajo(setTrabajos, trabajos)}
      >
       Добавить работу
      </Button>
    </section>
  )
}
