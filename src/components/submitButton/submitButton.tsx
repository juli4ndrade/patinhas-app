import { TouchableOpacity, Text } from "react-native";

const SubmitButton = (props: any) => {
  return (
        <TouchableOpacity className='bg-white border-[#01377D] border-2 rounded-xl w-[300px] h-[50px] flex justify-center items-center' onPress={props.onPress}>
          <Text className='text-[#01377D] text-xl font-semibold'>{props.title}</Text>
        </TouchableOpacity>
  );
};

export default SubmitButton;