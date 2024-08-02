type InputNumberProps = {
  value: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
};

export const InputNumber = ({ label, value, onChange }: InputNumberProps) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Allow numbers with up to 10 decimal places
    const regex = /^-?\d*(\.\d{0,10})?$/;
    if (regex.test(inputValue)) {
      onChange?.(inputValue);
    }
  };

  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={handleAmountChange}
        placeholder="0"
      />
    </label>
  );
};
