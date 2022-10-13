import React, {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getDetailVideogame, resetDetail} from './../../../actions/index'
import DetailTemplate from './../../Templates/Detail/DetailTemplate'

function Detail(props) {
  const dispatch = useDispatch()

  /* Un hook que se llama cuando se monta el componente.Se utiliza para obtener datos de la API.*/

  useEffect(() => {
    dispatch(getDetailVideogame(props.match.params.id))
    return () => {
      dispatch(resetDetail());
    }
  }, [])

  return (
    <DetailTemplate/>
  )
}

export default Detail