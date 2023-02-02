import TrackerNavigator from './src/navigation/TrackerNavigator';
import { FontContextProvider } from './src/context/fonts.context';

export default function App() {
 
  return(
    <FontContextProvider>
      <TrackerNavigator/>
    </FontContextProvider>
  )
}