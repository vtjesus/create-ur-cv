import { Link } from "@nextui-org/react"
import {
  AiFillSetting,
  AiFillCode,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai"
import { Button } from "@nextui-org/react"
import { MdMoneyOff, MdRocketLaunch } from "react-icons/md"

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section
        id="start"
        className=" max-w-3xl mx-8 md:flex-row flex flex-col gap-4 h-screen items-center justify-center"
      >
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-3xl">
            <span className="text-violet-400 font-bold">Your Own CV</span> твое бесплатное резюме.
          </h1>
          <p className=" text-violet-200">
          Your Own CV позволяет вам создать свое собственное резюме совершенно 
          персонализированным и бесплатно.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/create" title="Crear">
              <Button color="secondary" startContent={<MdRocketLaunch />}>
              Создать
              </Button>
            </Link>
            <Link
              href={"https://github.com/vtjesus"}
              title="Репозиторий на GitHub."
              target="blank"
            >
              <Button
                color="default"
                variant="bordered"
                className="text-white"
                startContent={<AiFillGithub />}
              >
                Github
              </Button>
            </Link>
          </div>
        </div>
        <img
          className="rounded h-auto mt-4 md:mt-0"
          src="/home-1.avif"
          alt="Your Own CV изображение для презентации 1."
          width={200}
        />
      </section>
      <section className="md:h-screen max-w-3xl mb-24">
        <h2 className="text-2xl text-violet-400 font-bold mb-8 mx-16 md:mx-0">
        Почему стоит использовать Your Own CV?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-0 items=start">
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex gap-2 items-center">
              <AiFillSetting /> Персонализ.
            </h3>
            <p className="mb-4 text-violet-200">
            Персонализируй свое резюме, чтобы выделить свои навыки и опыт уникальным и профессиональным образом.
            </p>
            <img
              src="/home-2.avif"
              alt="Your own cv изображение для презентации 2."
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex items-center gap-2">
              <AiFillCode /> Открытый код
            </h3>
            <p className="mb-4 text-violet-200">
            Получите доступ к исходному коду Your Own CV и участвуйте в его разработке, чтобы улучшить платформу и адаптировать её под свои нужды.

            </p>
            <img
              src="/home-5.avif"
              alt="Your own cv изображение для презентации 3"
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex gap-2 items-center">
              <MdMoneyOff /> Бесплатно
            </h3>
            <p className="mb-4 text-violet-200">
            Создай свое резюме онлайн бесплатно и за считанные минуты, без скрытых расходов и подписок.
            </p>
            <img
              src="/home-4.avif"
              alt="Your own cv изображение для презентации 4"
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
        </ul>
      </section>
      <Link href="#start" title="Volver al inicio" className="mb-8 ">
        <Button
          color="default"
          variant="bordered"
          startContent={<AiOutlineArrowUp />}
          className="text-white"
        >
          Вернуться
        </Button>
      </Link>
    </div>
  )
}
