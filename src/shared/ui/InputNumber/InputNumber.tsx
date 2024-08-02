import styles from "./InputNumber.module.scss";

type InputNumberProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const InputNumber = ({
  placeholder,
  value,
  onChange,
}: InputNumberProps) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Allow numbers with up to 18 decimal places
    const regex = /^-?\d*(\.\d{0,18})?$/;
    if (regex.test(inputValue)) {
      onChange?.(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleAmountChange}
      placeholder={placeholder}
      className={styles.root}
    />
  );
};
