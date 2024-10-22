import { TextInput } from "react-native";

const Input = (props: any) => {
  return (
    <TextInput
      className="w-[300px] h-[50px] bg-[#f2f2f2] rounded-xl p-5 font-medium"
      placeholder={props.placeholder} placeholderTextColor='#646A6C'
      onChangeText={props.onChangeText} value={props.value}
    />
  );
};

export default Input;
