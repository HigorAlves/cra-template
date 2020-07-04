import {InitialStateExampleType} from './types';

export const ExampleInitialState: InitialStateExampleType = {
  message: 'A Message from store'
}

export const exampleActions = {
  message: (state: any) => {
    return {  message: 'Outra mensagem' }
  }
}