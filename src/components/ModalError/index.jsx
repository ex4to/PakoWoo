import { Text, ModalCard } from "@vkontakte/vkui";
import { Icon56GlobeCrossOutline } from "@vkontakte/icons";
import "./index.css";

const ModalError = () => {
  return (
    <div className="modal-container">
      <ModalCard
        onClose={() => window.location.reload(false)}
        icon={<Icon56GlobeCrossOutline />}
        className="modal-card"
      >
        <Text className="modal-text">Ошибка! Ошибка! Ошибка! Ошибка!</Text>
      </ModalCard>
    </div>
  );
};

export { ModalError };
