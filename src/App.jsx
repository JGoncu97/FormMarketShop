
import {FormMarket} from '../src/Components/FormMarket'
import { ListProvider } from './Components/Context/ListProvider'


export const  App = () => {
  return (
    <ListProvider>
        <FormMarket />
    </ListProvider>
);
}


