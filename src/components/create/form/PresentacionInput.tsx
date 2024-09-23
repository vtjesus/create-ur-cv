import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/react"

export default function PresentacionInput() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Презентация</h2>
      <div className="flex flex-col gap-4">
        <Input type="text" isRequired min={2} name="nombre" label="Имя" />
        <Input
          type="text"
          isRequired
          label="Фамилия"
          min={2}
          name="apellidos"
          isInvalid={false}
          errorMessage="Фамилии недействительны, вводить числа не разрешается."
        />
        <Textarea
          name="descripcion"
          label="Описание"
          placeholder="Чем ты занимаешься? "
        />
        <Input
          type="email"
          isRequired
          label="Email"
          name="email"
          isInvalid={false}
          errorMessage="Email неправильный. Используйте этот формат: example@example.com"
        />
        {/*<Input type="file" name="avatar" />*/}
        <Input type="number" label="Телефон" name="telefono" isRequired />
        <Input type="text" label="Страна проживания" name="pais" isRequired />
        <Input type="text" label="Веб-страница" name="web" />
      </div>
    </section>
  )
}
