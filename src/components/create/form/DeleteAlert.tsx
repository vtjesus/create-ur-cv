import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"
import { removeLocalStorage } from "../../../utils/removeLocalStorage.ts"
import { AiFillDelete } from "react-icons/ai"

export default function DeleteAlert() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        startContent={<AiFillDelete />}
        color="danger"
        variant="light"
        onPress={onOpen}
      >
        Удалить
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Уход</ModalHeader>
              <ModalBody>
                <p>
                Вы уверены, что хотите удалить данные резюме? Вы не сможете их восстановить.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                Отменить
                </Button>
                <Button color="danger" onPress={removeLocalStorage}>
                Удалить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
