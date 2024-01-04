import {TextInput, SafeAreaView} from 'react-native';

const textInputValue =
  'this content\nis rendering incorrectly\nand will only work\nif the parent component\ntriggers a rerender';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <TextInput multiline value={textInputValue} />
    </SafeAreaView>
  );
}

export default App;
