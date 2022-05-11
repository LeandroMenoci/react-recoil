import { obterId } from './../../util';
import { listaDeEventosState } from './../atom';
import { IEvento } from './../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {

    const hoje = new Date()
    if(evento.inicio < hoje) {
      throw new Error('Eventos não podem ser cadastrados com data menor do que a atual.')
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento